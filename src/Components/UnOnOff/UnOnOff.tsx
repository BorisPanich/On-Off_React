import React, {useState} from 'react';

type PropsType = {
    onClick: (on: boolean) => void
    defaultOn?: boolean
}

export function UnOnOff(props: PropsType) {

    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false);

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        marginLeft: "2px",
        backgroundColor: on ? "white" : "red"
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        border: "1px solid black",
        borderRadius: "20px",
        display: "inline-block",
        padding: "10px",
        marginLeft: "10px",
        backgroundColor: on ? "green" : "red"
    };

    return <div>
        <div style={onStyle}
             onClick={ () => {setOn(true)
                 {props.onClick(true)}
             }}>On</div>
        <div style={offStyle} onClick={() => {
            setOn(false)
        {props.onClick(true)}
        } }>Off</div>
        <div style={indicatorStyle}></div>
    </div>

}