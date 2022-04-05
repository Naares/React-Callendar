import React from "react";
import { IEventProps } from "./Event";

export class Days extends React.Component{
    render(): React.ReactNode {
        return(
            <></>
        )
    }
}

export interface IDays{
    dayNbr : number, //this should always be identifier
    dayEvents : Array<IEventProps>
}