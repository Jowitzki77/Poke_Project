import React from "react";
import "./_maincontent.scss"

const MainContent = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-2 article__main">
                        <h2 className="infoboard__title"> Informacije!</h2>
                        <h3 className="infoboard__description">Kje</h3>
                        <p className="infoboard__text"> Mariborska cesta 2, 3000 Celje </p>
                        <a className="naslov" href="https://www.google.com/maps/place/MC+Celje/@46.231634,15.267626,17z/data=!3m1!4b1!4m6!3m5!1s0x476e2c7f8d9f0a5b:0x7d8c6e2f8c8f8c8f!8m2!3d46.231634!4d15.267626!16s%2Fg%2F11c1l5j9qv?entry=ttu" target="_blank" rel="noopener noreferrer">Google Maps Lokacija : 📍 </a>
                        <h3 className="infoboard__description">Kdaj?</h3>
                        <p className="infoboard__text">6.9.2025 od 10:00 do 17:00</p>

                    </div>
                    <div className="col-2 article__main">
                        Right
                    </div>
                </div>
            </div>

        </>
    )
};


export default MainContent;

