import React, { useState } from 'react'
import { questions } from "./api";
import "./Accordion.css";
import MyAccordion from "./MyAccordion";
function Accordion() {
    const [data, setData] = useState(questions);
    return (
        <div className="accordian">
            {
                data.map((curElem) => {
                    return <MyAccordion key={curElem.id} {...curElem} />;
                })
            }
        </div>
    )
}

export default Accordion
