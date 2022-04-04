import React from "react";
import { Message } from "./Message";

export class MessageNotifier extends React.Component<IMessageNotifierProps,IMessageNotifierState>{
    constructor(props : IMessageNotifierProps){
        super(props);
    }
    state: IMessageNotifierState = {

    };

    render(): React.ReactNode {
        return(
            <div></div>
        );
    }
}

interface IMessageNotifierProps{

}

interface IMessageNotifierState{
    
}