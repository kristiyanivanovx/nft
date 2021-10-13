import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "../link/Link";
import Image from 'next/image';

export default function Logo({ type = 'default' }) {
    return (
        (
            type === 'default' ? (
            <div>
                <img
                    src={'/images/logo.svg'}>
                </img>
            </div>
        ) : (
           type === 'muted' ? (
               <img
                   src={'/images/logo-muted.svg'}>
               </img>
           ) : null
        )
    ));
}
