import React from "react";
import Header from "../Components/Header/Header";
import Logo from "../Components/Header/Logo/Logo";
import Menu from "../Components/Header/Menu/Menu";
import Strani from "../Components/Header/Strani/Strani";
import Footer from "../Components/Footer/Footer";



const Home = () => {
    return (
        <>
            <Header type="header">
                <Logo type="header__logo" />
                <div className="header__nav">
                    <Menu/>
                    <Strani type="header__nav" items={[
                        { title: "Turnir", url: "/turnir" },
                        { title: "Dogodki", url: "/dogodki" }

                    ]}/>
                </div>
            </Header>
            <Footer/>
        </>
    )
}


export default Home;