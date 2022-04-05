import { throws } from "assert";
import React from "react";
import { Days, IDays } from "./Days";

export class Callendar extends React.Component<ICallendarProps,ICallendarState>{
    constructor(props : ICallendarProps){
        super(props);
        const year = props.year !== undefined? props.year : new Date().getFullYear();
        const month = props.month !== undefined? props.month : new Date().getMonth();
        this.state = {
            year : year,
            month : month,
            callendarName : 'test-callendar',
            days : new Array<IDays>(this.getDaysOfMonth(year,month))
        };     
    }

    //for now just retrun number of days
    getDaysOfMonth(year : number,monthNumber : number) : number{
        return new Date(year,monthNumber,0).getDate();
    }

    renderDays() : void{
        let newDays : Array<IDays> = new Array<IDays>();
        for(let i = 0; i < this.state.days.length; i++){
            newDays.push({dayNbr : i,dayEvents : undefined} as IDays);
        }
        this.setState({days : newDays});
    }

    componentDidMount(){
        this.renderDays();
    }

    render(): React.ReactNode {
        return(
            <div className="callendar">
                {this.state.days.map((val) =>{
                    return <Days key={val.dayNbr} dayNbr={val.dayNbr} dayEvents={val.dayEvents} />
                })}
            </div>
        );
    }
    
}

interface ICallendarProps{
    //this will probably be empty
    year?: number,
    month? : number
}

export interface ICallendarState{
    year : number,
    month : number,
    callendarName : string,
    days : Array<IDays>
}