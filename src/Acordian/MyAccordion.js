import React, { useState } from 'react'
import "./Accordion.css"
function MyAccordion({ question, answer }) {
    const [show, setShow] = useState(false);
    return (
        <div className="Myaccordion" >
            <div className="questionn">
                <div>
                    <p className="plus" onClick={() => setShow(!show)}> {show ? "-" : "+"} </p>
                </div>
                <p className="ques">{question}</p>
            </div>
            {show ? <p className="answer"> {answer} </p> : null}
        </div>
    )
}

export default MyAccordion
