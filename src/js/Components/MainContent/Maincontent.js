import React from "react";
import { Link } from "react-router-dom";
import "./_maincontent.scss";
import "../../../scss/general/_buttons.scss";

const MainContent = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-2 article__main left__article">
                        <h2 className="infoboard__title">Informacije!</h2>
                        <h3 className="infoboard__description">Kje?</h3>
                        <p className="infoboard__text">Mariborska cesta 2, 3000 Celje</p>
                        <a className="infoboard__naslov"
                           href="https://www.google.com/maps/place/MC+Celje/@46.231634,15.267626,17z/data=!3m1!4b1!4m6!3m5!1s0x476e2c7f8d9f0a5b:0x7d8c6e2f8c8f8c8f!8m2!3d46.231634!4d15.267626!16s%2Fg%2F11c1l5j9qv?entry=ttu"
                           target="_blank"
                           rel="noopener noreferrer">
                            Google Maps Lokacija : 📍</a>
                        <h3 className="infoboard__description">Kdaj?</h3>
                        <p className="infoboard__text">6.9.2025 od 10:00 do 17:00</p>
                        <img className="lugia__img" src="../../../assets/lugia.png"/>
                    </div>


                    <div className="col-2 article__main right__article">

                        <div className="article__event">
                            <h2 className="article__turnir__title">Poke Party Cele!</h2>
                            <p className="article__turnir__text">Pridružite se nam in raziskujte pri <span className="article__turnir__span">MNOGIH</span> razstavljalcih</p>
                            <p className="article__turnir__text"><span className="article__turnir__span">Menjaj, prodaj, kupi</span>  ali pa kar tako, namenjeno je vsem!</p>
                            <p className="article__turnir__text">Želiš imeti svojo mizo? Piši nam, saj je število miz omejeno!</p>

                            <Link to="/turnir">
                                <button className="btn btn__turnir__info">Klikni za več informacij</button>
                            </Link>

                        </div>


                        <div className="article__event">
                            <h2 className="article__turnir__title">Turnir</h2>
                            <p className="article__turnir__text">Pridružite se nam na našem prvem turnirju v Pokémon kartah!</p>
                            <p className="article__turnir__text">Bogate nagrade za najboljše tri igralce!</p>
                            <p className="article__turnir__text">Prijavnine <span className="article__turnir__span">NI</span></p>

                            <Link to="/prijava">
                                <button className="btn btn__turnir__info">Prijava</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainContent;