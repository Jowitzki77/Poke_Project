import React from "react";
import Logo from "../Components/Header/Logo/Logo";
import Menu from "../Components/Header/Menu/Menu";
import Strani from "../Components/Header/Strani/Strani";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Articles from "../Components/Article/Article";
import MainDogodek from "../Components/MainDogodek/MainDogodek";


const Dogodki = () => {
    return (
        <>
            <Header type="header">
                <Logo type="header__logo" />
                <div className="header__nav">
                    <Menu/>
                    <Strani type="header__nav" items={[
                        { title: "Turnir", url: "/turnir" },
                        { title: "Dogodki", url: "/Dogodki" },
                        { title: "Domov", url: "/" }

                    ]}/>
                </div>
            </Header>
            <MainDogodek/>
            <Articles/>
            <Footer/>
        </>
    )
}

export default Dogodki;