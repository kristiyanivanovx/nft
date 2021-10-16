import Header from "../../src/components/header/Header";
import * as React from "react";
import Avatar from '../../src/components/avatar/Avatar';
import Card from '../../src/components/card/Card';
import User from '../../src/components/user/User';
import Trending from "../../src/components/trending/Trending";

export default function Index() {
    let avatar = <Avatar url={'/images/avatar.png'} />;

    return (
        <div>
            <Trending/>
        </div>

       // <div>
       //     <Header />
       //     <hr/>
       //     <Card
       //         name={'Clock'}
       //         likes={'1.1K'}
       //         mediaUrl={'/images/nft.jpg'}
       //         user={avatar}
       //         price={'13'}
       //         currency={'ETH'}
       //     />
       //      <hr/>
       //     <User name={'krisi'} info={'based'} verified={true} />
       //     <User  />
       // </div>
    )
}