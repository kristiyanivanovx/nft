import Example from "../src/components/example/Example";
import Logo from "./logo/Logo";
import * as React from "react";

export default function Index() {
  return <div>
    <Logo type={'default'}/>
    <Logo type={'muted'}/>
    <Example />
  </div> ;
}
