import Header from "../../src/components/header/Header";
import * as React from "react";
import Avatar from '../../src/components/avatar/Avatar';

export default function Index() {
    return (
       <>
           <Header />
           <Avatar url={'/images/avatar.png'} />
       </>
    )
}