import Header from "../../src/components/header/Header";
import * as React from "react";
import Avatar from '../../src/components/avatar/Avatar';
import MyCard from '../../src/components/card/Card';
import User from '../../src/components/user/User';

export default function Index() {
    let avatar = <Avatar url={'/images/avatar.png'} />;

    return (
       <div>
           <Header />
           <MyCard
               name={'Clock'}
               likes={'1.1K'}
               mediaUrl={'/images/nft.jpg'}
               user={avatar}
               price={'13'}
               currency={'ETH'}
           />
           <User/>
       </div>
    )
}