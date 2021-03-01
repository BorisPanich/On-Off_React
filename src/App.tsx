import React, { useState } from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import {Raiting, RaitingValueType} from "./Components/Raiting/Raiting";
import {OnOff} from "./Components/OnOff/OnOff";
import UncontrolledAccordion from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import {UnRaiting} from "./Components/UnRaiting/UnRaiting";
import {UnOnOff} from "./Components/UnOnOff/UnOnOff";

function App() {

    let [raitingValue, setRaitingValue] = useState<RaitingValueType>(5);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className={"App"}>
            <UnOnOff onClick={setSwitchOn}/> {switchOn.toString()}
            <OnOff on={switchOn}
                   onClick={(on) => {setSwitchOn(on)} } />

            <UncontrolledAccordion titleValue="Title 1" />
            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onClick={() => {setAccordionCollapsed(!accordionCollapsed)}} />

            <UnRaiting />
            <Raiting value={raitingValue} onClick={setRaitingValue} />

        </div>
    )
}

type PagePropsType = {
    title: string
}

function PageTitle(props: PagePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
