import React, { useState } from "react";
import "./_forma.scss";

const Forma = () => {
    const [formData, setFormData] = useState({
        ime: "",
        priimek: "",
        deck: "",
        email: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Form submitted! Check console.");
    };

    return (
        <div className="form-container">
            <h2>Prijava</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Ime:
                    <input
                        type="text"
                        name="ime"
                        value={formData.ime}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Priimek:
                    <input
                        type="text"
                        name="priimek"
                        value={formData.priimek}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Deck:
                    <input
                        type="text"
                        name="deck"
                        value={formData.deck}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Forma;
