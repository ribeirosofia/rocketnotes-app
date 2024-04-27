import React from "react";
import { RiShutDownLine } from 'react-icons/ri'
import {Container, Logout, Profile} from "./styles.js";

const Header = ({}) => {
    return (
        <>
            <Container>
                <Profile to="/profile">
                    <img src="https://github.com/ribeirosofia.png" 
                    alt= "profile picture"
                    />
                    <div>
                        <span>Bem-vinde</span>
                        <strong>Sofia Ribeiro</strong>
                    </div>
                </Profile>
                <Logout>
                <RiShutDownLine />
                </Logout>

            </Container>
        </>
    )
}

export default Header;
