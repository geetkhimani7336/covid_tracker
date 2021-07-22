import React from 'react'
import "./Precautions.css"
import Picc1 from "./img/Picc1.png";
import Picc2 from "./img/Picc2.png";
function Precautions() {
    return (
        <div>
            <div className="insidee__section">
                <h1 className="heading">Precautions</h1>
                <div className="imagee_section">
                    <img className="image_source" src="https://www.gstatic.com/healthricherkp/campaigns/wear-mask-save-lives/UZ9ZuX.svg" alt="" />
                </div>
                <div className="matter_section">
                    <h1 className="inside_headingg">Stopping the spreadstarts with you</h1>
                    <li className="insidee_lists">Wear a mask.</li>
                    <li className="insidee_lists">Clean your hands.</li>
                    <li className="insidee_lists">Maintain safe distance.</li>
                    <li className="insidee_lists">Get vaccinated.</li>
                </div>
            </div>
            <div className="insidee_section_1">
                <h1 className="heading_section1">Protect yourself and others around you by knowing the facts and taking appropriate precautions. Follow advice provided by your local health authority.</h1>
                <p className="paragraph__inside">To prevent the spread of COVID-19:</p>
                <ul>
                    <li className="listss">Clean your hands often. Use soap and water, or an alcohol-based hand rub.</li>
                    <li className="listss">Maintain a safe distance from anyone who is coughing or sneezing.</li>
                    <li className="listss">Wear a mask when physical distancing is not possible.</li>
                    <li className="listss">Don’t touch your eyes, nose or mouth.</li>
                    <li className="listss">Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.</li>
                    <li className="listss">Stay home if you feel unwell.</li>
                    <li className="listss">If you have a fever, cough and difficulty breathing, seek medical attention.</li>
                </ul >
                <h1 className="heading_section2">
                    Don’t forget the basics of good hygiene
                </h1>
                <div className="banner_imgg">
                    <img className="banner_img_sectn" src={Picc1} alt="" />
                    <img className="banner_img_sectn" src={Picc2} alt="" />
                </div>
                <ul className="unorder_lists">
                    <li className="lists_1"><b>Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water</b>. This eliminates germs including viruses that may be on your hands.</li>
                    <li className="lists_1"><b>Avoid touching your eyes, nose and mouth.</b> Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and infect you.</li>
                    <li className="lists_1"><b>Cover your mouth and nose with your bent elbow or tissue when you cough or sneeze.</b> Then dispose of the used tissue immediately into a closed bin and wash your hands. By following good ‘respiratory hygiene’, you protect the people around you from viruses, which cause colds, flu and COVID-19.</li>
                    <li className="lists_1"><b>Clean and disinfect surfaces frequently especially those which are regularly touched,</b> such as door handles, faucets and phone screens.</li>
                </ul>
            </div>
        </div >
    )
}

export default Precautions
