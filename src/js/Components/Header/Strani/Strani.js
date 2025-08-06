import React from "react";

import "./_strani.scss";

const Strani = (props) => {
    return (
        <div className={props.type + "__strani"}>
            {props.items.map((item, i) => (
                <a key={i} href={item.url}><img src={item.src} alt={item.alt}/></a>
            ))}
        </div>
    )
}
export default Strani;