import React from "react";
import "./_table.scss";

const Table = () => {
    const players = [
        { rank: 1, name: "John Doe", deck: ["Gardevoir", "Wo-Chien"], result: "1-0-0" },
        { rank: 2, name: "Janez Novak", deck: ["Flutter Mane", "Chi-Yu"], result: "0-0-1" },
    ]
    return(
        <>
            <table className="player-table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Player</th>
                    <th>Deck</th>
                    <th>Rezultat</th>
                </tr>
                </thead>
                <tbody>
                {players.map((p) => (
                    <tr key={p.rank}>
                        <td>{p.rank}</td>
                        <td>{p.name}</td>
                        <td>{p.deck.join(", ")}</td>
                        <td>{p.result}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default Table;