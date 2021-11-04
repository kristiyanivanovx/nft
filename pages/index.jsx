import Example from "../src/components/example/Example";
import Logo from "../src/components/logo/Logo";
import * as React from "react";
import Link from 'next/link';
import Button from '@mui/material/Button';

export default function Index() {
  return (
      <div>
        <Logo type={'default'}/>
        <Logo type={'muted'}/>
        {/*<Example />*/}
        <Link href={'/da'}>
            <Button variant="outlined">/da</Button>
            </Link>
      </div>
  );
}
