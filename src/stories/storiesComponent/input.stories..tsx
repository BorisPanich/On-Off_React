import {ChangeEvent, useRef, useState} from "react";


export default {
    title: 'input'
}

export const UncontroledInput = () => <input/>

export const TrackValueOfUncontroledInput = () => {
    const [value, setValue] = useState("");
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue);
    }
    return <><input onChange={onChange}/> --- {value} --- </>
}

export const GetValueOfUncontroledInput = () => {
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const getValue = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }

    return <><input ref={inputRef}/>
        <button onClick={getValue}>getValue
        </button>
        ---actual value: {value} --- </>
}

export const ControledInput = () => {
    const [parentValue, setParentValue] = useState("");
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value;
        setParentValue(actualValue);
    }
    return <input value={parentValue} onChange={onChange}/>
}

export const ControlCheckBox = () => {
    const [parentValue, setParentValue] = useState<boolean>(true);
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setParentValue(event.currentTarget.checked);
    }
    return <input type={"checkbox"} checked={parentValue} onChange={onChange}/>
}

export const SelectedInput = () => {
    const [parentValue, setParentValue] = useState<string | undefined>("");
    const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(event.currentTarget.value);
    }
    return <select value={parentValue} onChange={onChange}>
        <option>дзюрка</option>
        <option value={"1"}>Lida</option>
        <option value={"2"}>Grodno</option>
        <option value={"3"}>Minsk</option>
    </select>
}

export const ControledInputWithFixedValue = () => <input value={"controled Value"}/>

