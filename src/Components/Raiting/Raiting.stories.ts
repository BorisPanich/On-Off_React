import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import {Raiting, RaitingValueType} from "./Raiting";

export type RaitingStories = {
    value: number
}

export default {
    title: 'Raiting stories',
    component: Raiting,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

// export const EmptyRaiting = () => <Raiting value={0} onClick={x=>x} />
// export const Raiting1 = () => <Raiting value={1} onClick={x=>x} />
// export const Raiting2 = () => <Raiting value={2} onClick={x=>x} />
// export const Raiting3 = () => <Raiting value={3} onClick={x=>x} />
// export const Raiting4 = () => <Raiting value={4} onClick={x=>x} />
// export const Raiting5 = () => <Raiting value={5} onClick={x=>x} />
// export const ChangeRaiting = () => {
//     const [rating, setRaiting] = useState<RaitingValueType>(3);
//     return <Raiting value={rating} onclick={setRaiting} />
// };


