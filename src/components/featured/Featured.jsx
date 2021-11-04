import React from 'react';
import Container from "@mui/material/Container";
import ImageList from '@mui/material/ImageList';
import ImageListItem from "@mui/material/ImageListItem";
import { useRouter } from 'next/router'

export default function Featured ({ items= [] })  {
    const router = useRouter();

    const handleClick = (href) => {
        router.push(href);
    }

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
                    // <Item style={
                    //     idx=== 0 ? { gridColumnEnd: "span 3", gridRowEnd: "span 2"} : {}
                    // }>
                        <ImageListItem
                            style={
                                idx=== 0 ? { gridColumnEnd: "span 3", gridRowEnd: "span 2"} : {}
                            }
                        >
                            <img
                                style={
                                    idx=== 0 ? { gridColumnEnd: "span 3", gridRowEnd: "span 2"} : {}
                                }
                                onClick={() => handleClick(item.href)}
                                src={item.image}
                                alt={item.title}
                            />
                        </ImageListItem>
                    // </Item>
                ))}
            </ImageList>
        </Container>
    );
}

