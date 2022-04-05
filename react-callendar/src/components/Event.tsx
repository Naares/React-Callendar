import React from "react";

export class Event extends React.Component<IEventProps,IEventState>{
    render(): React.ReactNode {
        return(
            <div>
                this is popup form for creating or viewing event - this will be called onClick in callendar or in addNewButton in Header        
            </div>
        );
    }
}

export interface IEventProps{
    eventStart : number,
    eventEnd : number,
    eventName : string,
    sharedCallendar : boolean,
    sharedList: Array<string>
}

export interface IEventState{
    //do we want to memorize something in here???
}