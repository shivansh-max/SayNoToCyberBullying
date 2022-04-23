import React from "react";
import Statistics from "./Statistics";
import TextBox from "./TextBox";
import {
    why_Is_Cyber_Bullying,
    What_Are_Reasons,
    Who_Are_The_Victims,
    what_Are_effects,
    SMART,
    what_should_you_do,
} from "./../../Public/Answers";
import IMG7 from "./../../Assests/IMAGE7.jpg";
import IMG8 from "./../../Assests/IMAGE8.jpg";
import IMG5 from "./../../Assests/IMAGE5.jpg";
import IMG3 from "./../../Assests/IMAGE3.jpg";
import IMG4 from "./../../Assests/IMAGE4.jpg";
import IMG6 from "./../../Assests/IMAGE6.jpg";

export default function Info() {
    return (
        <div>
            {" "}
            <TextBox
                Main={"What is Cyber Bullying?"}
                img={IMG7}
                Description={why_Is_Cyber_Bullying}
            />
            <TextBox
                Main={"What are the reasons people cyber bully?"}
                img={IMG8}
                Description={What_Are_Reasons}
            />
            <TextBox
                Main={"Who are clyber bullied?"}
                Description={Who_Are_The_Victims}
                img={IMG5}
            />
            <TextBox
                Main={"What are the Mental/Physical/Social affects?"}
                Description={what_Are_effects}
                img={IMG3}
            />
            <TextBox
                Main={"How can you protect your self (SMART)?"}
                Description={SMART}
                img={IMG4}
            />
            <TextBox
                Main={"What should you do, if you are getting bullied?"}
                Description={what_should_you_do}
                img={IMG6}
            />
            <Statistics />
        </div>
    );
}

{
    /* 




             */
}
