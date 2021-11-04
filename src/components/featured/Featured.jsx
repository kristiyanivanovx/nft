import React from 'react';
import styles from '../how/Step.module.scss';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Link from "../link/Link";
import Logo from "../logo/Logo";
import ImageList from '@mui/material/ImageList';
import {ImageListItem} from "@mui/material";
import { useRouter } from 'next/router'

export default function Featured ({ items=[] })  {
    const router = useRouter()

    const handleClick = (e, href) => {
        e.preventDefault();
        router.push(href);
    }

    return (
        <Container maxWidth="sm">
            <ImageList sx={{ width: 1000, height: 900 }} cols={3} rowHeight={164}>
                {items.map((item, idx) => (
                    <ImageListItem key={item.image}>
                        <a href={item.href} onClick={() => handleClick(item.href)}>
                            <img
                                width={idx === 0 ? '300' : '250'}
                                height={idx === 0 ? '300' : '250'}
                                src={item.image}
                                alt={item.title}
                            />
                        </a>
                    </ImageListItem>
                ))}
            </ImageList>
        </Container>
    );
}

