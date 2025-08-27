import React from "react";
import { Link } from "react-router-dom";
import "./_maindogodek.scss";
import "../../../scss/general/_buttons.scss";

const MainDogodek = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-2 dogodek__main ">
                        <h2 className="dogodek__title">Poke Party Cele</h2>
                        <p className="dogodek__text">Prvic v Celju organiziramo pokemon party. Dogodek je namenjen Pokemon navdusencem vseh generacij. Na dogodku bodo sodelovali in razstavljali
                        najvecji zbiratelji in trgovine v vsej sloveniji, tako da redkih Pokemonov zagotovo nebo manjkalo!!</p>
                        <p className="dogodek__text">Ce si zelite tudi sami razstavljati, se lahko pridruzite in razstavljate tudi vi, saj je se nekaj miz prostih. (v sliki desno viden razpored)</p>
                        <h3 className="dogodek__subtitle">Prihod in postavitev</h3>
                        <p className="dogodek__info">
                            	Dogodek se začne ob 10:00. Največ obiskovalcev pričakujemo med 10:00 in 13:00, zato vas prosim, da ste pravočasno na lokaciji. <br />
                            	Na voljo bomo za pomoč pri sami postavitvi. <br />
                            	Z avtom boste lahko pripeljali izdelke skoraj do samega vhoda (seveda pred začetkom dogodka).<br />
                            	Na sami lokaciji bo še vedno možno malo prilagoditi postavitev miz, da bo čim bolj ustrezala tako vam kot obiskovalcem.<br />
                        </p>
                    </div>
                    <div className="col-2 dogodek__main ">
                        <div className="article__event">
                            <h2 className="dogodek__postavitev__title">Postavitev</h2>
                            <img className="postavitev__img" src="../../../assets/postavitev.jpg" alt="Postavitev miz na dogodku"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainDogodek;

