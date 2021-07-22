import React from 'react'
import Header from "./Header"
import "./Data.css"
import About from "./img/About.png";
import Vaccine from "./img/Vaccine.png";
import Wash from "./img/Wash.png";
import World from "./img/World.png";
import Mask from "./img/Mask.png";
import Banner from "./img/Banner.jpg";
import Part1 from "./img/Part1.PNG";
import Part2 from "./img/Part2.PNG";
import HandWash from './HandWash';
import Precautions from './Precautions';
import faq from "./img/faq.png";
import Accordion from './Acordian/Accordion';
import Statewise from './Components/Statewise/StatewiseData/Statewise';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
function Data() {
    return (
        <div className="data" id="startpage">
            <Header />
            <img className="Banner_img" src={Banner} alt="" />
            <div className="cards">
                <a className="Links" href="https://www.who.int/health-topics/coronavirus#tab=tab_1">
                    <div className="card1 color1">
                        <img src={About} alt="" />
                        <h1 className="data__header">About Corona</h1>
                    </div>
                </a>
                <a className="Links" href="https://www.cowin.gov.in/">
                    <div className="card1 color2">
                        <img src={Vaccine} alt="" />
                        <h1 className="data__header">Vaccine Registration</h1>
                    </div>
                </a>
                <a href="#handwash">
                    <div className="card1 color3">
                        <img src={Wash} alt="" />
                        <h1 className="data__header">Washing Hands Steps</h1>
                    </div>
                </a>
            </div>
            <div className="cards">
                <a href="#caselist">
                    <div className="card1 color4">
                        <img src={World} alt="" />
                        <h1 className="data__header">Corona Cases List</h1>
                    </div>
                </a>
                <a href="#precaution">
                    <div className="card1 color5">
                        <img className="image_resize" src={Mask} alt="" />
                        <h1 className="data__header">Precautions</h1>
                    </div>
                </a>
                <a href="#Faq">
                    <div className="card1 color6">
                        <img className="image_faq" src={faq} alt="" />
                        <h1 className="data__header">Faq Section</h1>
                    </div>
                </a>
            </div>
            <div className="data_show">
                <div id="handwash">
                    <HandWash />
                </div>
                <div id="precaution">
                    <Precautions />
                </div>
                <div id="caselist">
                    <Statewise />
                </div>
                <div id="Faq">
                    <div className="bannerr_sectionn">
                        <img className="banner_imge" src={Part1} alt="" />
                        <img className="banner_imge_1" src={Part2} alt="" />
                    </div>
                    <div className="Faq_text">
                        <h1 className="heading_section_Faq">Some Frequently Asked Q&As are:</h1>
                    </div>
                    <Accordion />
                </div>
            </div>
            <div className="footer">
                <a href="#startpage">
                    <span className="back_section" id="back">
                        <p className="back"><b><ArrowUpwardIcon /></b></p>
                    </span>
                </a>
                <p className="back_sectn_1">Back to top</p>
                <p className="copyright">Copyright © Covid Tracker 2021</p>
            </div>
        </div>
    )
}

export default Data
