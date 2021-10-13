import * as React from "react";

export default function Logo({ type = 'default' }) {
    return (
        <img src={type === 'default' ? '/images/logo.svg': '/images/logo-muted.svg' } />
    )
}
