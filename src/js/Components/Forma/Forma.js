import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./_forma.scss";

const Forma = () => {
    const [formData, setFormData] = useState({
        ime: "",
        priimek: "",
        deck: "",
        email: "",
    });

    const navigate = useNavigate();

    // handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/players", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("✅ Prijava uspešna!");
                setFormData({ ime: "", priimek: "", deck: "", email: "" });
                navigate("/");

            } else {
                alert("❌ Prišlo je do napake.");
            }
        } catch (error) {
            console.error("Napaka:", error);
            alert("❌ Strežnik ni dosegljiv.");
        }
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
