import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: () => void
}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.onClick}/>
            {props.collapsed === false && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onClick}> --- {props.title} ---- </h3>
}

function AccordionBody() {
    console.log('returned li')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;