import React from 'react';
import styles from '../how/Step.module.scss';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Link from "../link/Link";
import Logo from "../logo/Logo";
import ImageList from '@mui/material/ImageList';
import ImageListItem from "@mui/material/ImageListItem";
import { useRouter } from 'next/router'
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                bgcolor: 'primary.main',
                color: 'white',
                p: 1,
                borderRadius: 1,
                textAlign: 'center',
                fontSize: '1rem',
                fontWeight: '700',
                ...sx,
            }}
            {...other}
        />
    );
}

Item.propTypes = {
    sx: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

export default function Featured ({ items=[] })  {
    const router = useRouter()

    const handleClick = (href) => {
        router.push(href);
    }

    // const style = {
    //     // grid-column-end:span 3;
    //     // grid-row-end:span 2;
    //     gridRowEnd: "span 2",
    //     gridColumnEnd: "span 3",
    // }

    return (
        <Container>
            <ImageList  sx={{
                display: "grid",
                gridAutoFlow: "row",
                gridTemplateColumns: "repeat(5, 1fr)",
                gridTemplateRows: "repeat(2, 50px)",
                gap: 1
            }}>
                {items.map((item, idx) => (
                    <Item style={
                        idx=== 0 ? { gridColumnEnd: "span 3", gridRowEnd: "span 2"} : {}
                    }>
                        <ImageListItem>
                            <img
                                onClick={() => handleClick(item.href)}
                                // width={'150'}
                                // height={'150'}
                                // width={idx === 0 ? '300' : '250'}
                                // height={idx === 0 ? '300' : '250'}
                                src={item.image}
                                alt={item.title}
                            />
                        </ImageListItem>
                    </Item>
                ))}
                {/*<Item style={{ gridColumnEnd: 'span 3', gridRowEnd: 'span 2' }}>1123</Item>*/}
                {/*<Item style={{ gridColumnEnd: 'span 3', gridRowEnd: 'span 2' }}>1123</Item>*/}
                {/*<Item style={{ gridColumnEnd: 'span 3', gridRowEnd: 'span 2' }}>1123</Item>*/}
            </ImageList>
        </Container>
    );
}

//     <ImageListItem sx={{ gridColumn: "span 3", gridRow: "span 2" }} key={item.image}>
//     <img
//         onClick={() => handleClick(item.href)}
//         width={'150'}
//         height={'150'}
//         // width={idx === 0 ? '300' : '250'}
//         // height={idx === 0 ? '300' : '250'}
//         src={item.image}
//         alt={item.title}
//     />
// </ImageListItem>
