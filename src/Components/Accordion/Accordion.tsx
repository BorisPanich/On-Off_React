import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: () => void
    // onChange: (value: number) => void
    // items: ItemType []
}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            // onChange={props.onChange}
                            onClick={props.onClick}/>
            {!props.collapsed && <AccordionBody
                            // items={props.items}
                            // onClick={props.onClick}
            />}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
    // onChange: (value: number) => void
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