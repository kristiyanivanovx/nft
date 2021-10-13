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
                <Image
                    width={100}
                    height={100}
                    src={'/assets/images/logo.svg'}>
                </Image>
            </div>
        ) : (
           type === 'muted' ? (
               <Image
                   width={100}
                   height={100}
                   src={'/assets/images/logo-muted.svg'}>

               </Image>
           ) : null
        )
    ));
}
