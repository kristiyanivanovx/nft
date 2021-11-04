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

export default function Featured ({ items=[] })  {
    const router = useRouter()

    const handleClick = (href) => {
        router.push(href);
    }

    const style = {
        // grid-column-end:span 3;
        // grid-row-end:span 2;
        gridRowEnd: "span 2",
        gridColumnEnd: "span 3",
    }

    return (
        <Container maxWidth="sm">
            <ImageList sx={{ width: 1000, height: 900 }} cols={3} rowHeight={164}>
                {items.map((item, idx) => (
                    <ImageListItem sx={{ gridColumnEnd: "span 3", gridRowEnd: "span 2" }} key={item.image}>
                        <img
                            onClick={() => handleClick(item.href)}
                            width={'150'}
                            height={'150'}
                            // width={idx === 0 ? '300' : '250'}
                            // height={idx === 0 ? '300' : '250'}
                            src={item.image}
                            alt={item.title}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Container>
    );
}

