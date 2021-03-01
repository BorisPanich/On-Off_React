import React, {useState} from "react";
import UncontrolledAccordion from "./UncontrolledAccordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion
};

const callback = action('on or off clicked')

// export const OnMode = () => <UncontrolledAccordion defaultOn={true}/>;