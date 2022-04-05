import React from "react";
import { Days, IDays } from "./Days";

export class Callendar extends React.Component<ICallendarProps,ICallendarState>{
    
}

interface ICallendarProps{
    //this will probably be empty
}

export interface ICallendarState{
    callendarName : string,
    days : Array<IDays>
}