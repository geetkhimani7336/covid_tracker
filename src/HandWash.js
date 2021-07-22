import React from 'react'
import "./HandWash.css"
import Wash2 from "./img/Wash2.png";
function HandWash(props) {
    console.log(props.hide);
    return (
        <div className="hand_wash_section">
            <div className="Hand_Wash_inner">
                <span className="heading_part">
                    <p className="Hand_wash_heading">When and How to Wash Your Hands</p>
                </span>
            </div>
            <div className="inside_matter">
                <div className="division">
                    <h1 className="sub_head">How Germs Spread</h1>
                    <p className="paragraph">Washing hands can keep you healthy and prevent the spread of respiratory and diarrheal infections from one person to the next. Germs can spread from other people or surfaces when you:</p>
                    <ul>
                        <li className="lists">Touch your eyes, nose, and mouth with unwashed hands</li>
                        <li className="lists">Prepare or eat food and drinks with unwashed hands</li>
                        <li className="lists">Touch a contaminated surface or objects</li>
                        <li className="lists">Blow your nose, cough, or sneeze into hands and then touch other people’s hands or common objects</li>
                    </ul>
                </div>
                <div className="division">
                    <h1 className="sub_head">Follow Five Steps to Wash Your Hands the Right Way</h1>
                    <p className="paragraph">Washing your hands is easy, and it’s one of the most effective ways to prevent the spread of germs. Clean hands can stop germs from spreading from one person to another and throughout an entire community—from your home and workplace to childcare facilities and hospitals.</p>
                    <p className="paragraph">Follow these five steps every time.</p>
                    <ul>
                        <li className="lists"><b>Wet</b>  your hands with clean, running water (warm or cold), turn off the tap, and apply soap.</li>
                        <li className="lists"><b>Lather</b>  your hands by rubbing them together with the soap. Lather the backs of your hands, between your fingers, and under your nails.</li>
                        <li className="lists"><b>Scrub</b>  your hands for at least 20 seconds. Need a timer? Hum the “Happy Birthday” song from beginning to end twice.</li>
                        <li className="lists"><b>Rinse</b>  your hands well under clean, running water.</li>
                        <li className="lists"><b>Dry</b> your hands using a clean towel or air dry them.</li>
                    </ul>
                    <div className="image_section">
                        <img className="imgg" src={Wash2} alt="" />
                    </div>
                </div >
                <div className="division">
                    <h1 className="sub_head">Use Hand Sanitizer When You Can’t Use Soap and Water</h1>
                    <p className="paragraph">Washing hands with soap and water is the best way to get rid of germs in most situations. If soap and water are not readily available, you can use an alcohol-based hand sanitizer that contains at least 60% alcohol. You can tell if the sanitizer contains at least 60% alcohol by looking at the product label.</p>
                    <p className="paragraph"><b>Sanitizers can quickly reduce the number of germs on hands in many situations. However,</b></p>
                    <ul>
                        <li className="lists">Sanitizers do not get rid of all types of germs.</li>
                        <li className="lists">Hand sanitizers may not be as effective when hands are visibly dirty or greasy.</li>
                        <li className="lists">Hand sanitizers might not remove harmful chemicals from hands like pesticides and heavy metals.</li>
                    </ul>
                    <div className="caution_sectn">
                        <p ><b>Caution!</b> Swallowing alcohol-based hand sanitizers can cause alcohol poisoning if more than a couple of mouthfuls are swallowed. Keep it out of reach of young children and supervise their use.</p>
                    </div>
                </div >
                <div className="division">
                    <h1 className="sub_head">How to Use Hand Sanitizer</h1>
                    <ul>
                        <li className="lists">Apply the gel product to the palm of one hand (read the label to learn the correct amount).</li>
                        <li className="lists">Rub your hands together.</li>
                        <li className="lists">Rub the gel over all the surfaces of your hands and fingers until your hands are dry. This should take around 20 seconds.</li>
                    </ul>
                </div >
            </div>
        </div>
    )
}

export default HandWash
