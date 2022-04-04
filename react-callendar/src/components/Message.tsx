import React from "react";

export class Message extends React.Component<IMessage>{
    render(): React.ReactNode {
        let badgeName : string = 'badge ' + this.props.messageSeverity.valueOf().toString();
        console.log(this.props.messageSeverity);
        return <span className={badgeName}>{this.props.message}</span>
    }
}

export interface IMessage{
    message : string,
    messageSeverity : EMessageSeverity
}

export enum EMessageSeverity{
    'Info' = "bg-info text-dark",
    'Warning' = "bg-warning text-dark",
    'Error' = "bg-danger",
    'Other' ="bg-secondary"
}