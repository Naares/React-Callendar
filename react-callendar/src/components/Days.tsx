import React from "react";
import { IEventProps } from "./Event";
import '../css/callendarBtn.css';

export class Days extends React.Component<IDays,{}>{
    render(): React.ReactNode {
        return(
            <button type="button" className="btn btn-info callendar-item">{this.props.dayNbr + 1}</button>
        )
    }
}

export interface IDays{
    dayNbr : number, //this should always be identifier
    dayEvents? : Array<IEventProps>
}