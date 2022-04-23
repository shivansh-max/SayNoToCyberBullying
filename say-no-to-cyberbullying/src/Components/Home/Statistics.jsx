import React from "react";
import IMG2 from "./../../Assests/IMAGE2.jpg"

export default function Statistics() {
    return (
        <div className="Statistics">
            <div className="center title-text">
                <h1>Statistics</h1>
            </div>

            <div className="center ">
                <img src={IMG2} alt="" />
            </div>
            <div className="center description-text">
                60% of People Are Cyber Bullied
            </div>
            <div className="center description-text">
                10% of Teens Tell There Parents
            </div>
            <div className="center description-text">
                6% of Teen Boys Get Cyber Bullied
            </div>
            <div className="center description-text">
                15% of Teen Girls Get Cyber Bullied
            </div>
            <div className="center description-text">
                12 15 is The Most Likly Age To Get Cyber Bullied
            </div>
            <div className="center description-text">
                Sweden has The Highest rebate of Cyber Bullying Awarness
            </div>
            <div className="center description-text">
                14% of students have sucidal thoughts
            </div>
            <div className="center description-text">
                7% have attempted suicide
            </div>
        </div>
    );
}
