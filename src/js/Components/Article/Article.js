import React from "react";
import "./_article.scss"; // optional styling

const articles = [
    {
        title: "2025 Worlds Featured Artists Highlights",
        text: "Check out the artwork of the Pokémon TCG artists appearing as special guests at this year's World Championships.",
        img: "/assets/lugia.png",
        color: "green",
    },
    {
        title: "Pokémon TCG Black Bolt and White Flare Triple Play: Mythical Might",
        text: "Tord, Ross, and Alex look at a trio of Mythical Pokémon that aren’t just for display.",
        img: "/assets/lugia.png",
        color: "orange",
    },
    {
        title: "Shiny Chien-Pao Storms into 5-Star Tera Raid Battles",
        text: "Challenge the second of four Tera Raid Battle events featuring Shiny Ruinous Pokémon.",
        img: "/assets/lugia.png",
        color: "blue",
    },
    {
        title: "Riding Through Pokémon Bike History",
        text: "It’s biking time this summer, and we’re breaking down the history of bicycle riding in the Pokémon video games.",
        img: "/assets/lugia.png",
        color: "blue",
    },
    {
        title: "Espeon & Umbreon Shine in the Scarlet & Violet—Prismatic Evolutions Premium Figure Collection",
        text: "These Pokémon are available as display figures and promo cards alongside 11 booster packs.",
        img: "/assets/lugia.png",
        color: "black",
    },
    {
        title: "Get to Know Annabelle & Kenji Oono, the 2025 NAIC Pokémon TCG Junior Finalists",
        text: "Learn more about how the siblings took NAIC by storm and stole the hearts of the Pokémon TCG community.",
        img: "/assets/lugia.png",
        color: "pink",
    },
];

const Articles = () => {
    return (
        <div className="container">
            <div className="row">
                {articles.map((article, index) => (
                    <div className="col-3" key={index}>
                        <div className={`article__card ${article.color}`}>
                            <img src={article.img} alt={article.title} className="article__img" />
                            <div className="article__content">
                                <h3 className="article__title">{article.title}</h3>
                                <p className="article__text">{article.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Articles;
