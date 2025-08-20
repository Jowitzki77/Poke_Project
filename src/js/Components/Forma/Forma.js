import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./_forma.scss";

const Forma = () => {
    const [formData, setFormData] = useState({
        ime: "",
        priimek: "",
        deck: "",
        email: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Form submitted! You’ll be redirected to main page.");
        navigate("/");
    };


    return (
        <div className="pokemon__form">
            <h2 className="pokemon__form__title">Prijava</h2>
            <form onSubmit={handleSubmit}>
                <div className="pokemon__form__field">
                    <label>Ime:</label>
                    <input
                        type="text"
                        name="ime"
                        value={formData.ime}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="pokemon__form__field">
                    <label>Priimek:</label>
                    <input
                        type="text"
                        name="priimek"
                        value={formData.priimek}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="pokemon__form__field">
                    <label>Deck:</label>
                    <input
                        type="text"
                        name="deck"
                        value={formData.deck}
                        onChange={handleChange}
                    />
                </div>

                <div className="pokemon__form__field">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="pokemon__form__button">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Forma;
