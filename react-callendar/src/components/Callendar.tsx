import React from "react";
import { Days, IDays } from "./Days";

export class Callendar extends React.Component<ICallendarProps,ICallendarState>{
    constructor(props : ICallendarProps){
        super(props);
        const year = props.year !== undefined? props.year : new Date().getFullYear();
        const month = props.month !== undefined? props.month : new Date().getMonth() + 1;
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
            newDays.push({dayNbr : i + 1,dayEvents : undefined} as IDays);
        }
        this.setState({days : newDays});
    }

    componentDidMount(){
        this.renderDays();
    }

    render(): React.ReactNode {
        return(
            <div className="callendar containter">
                <div className="row">
                {this.state.days.map((val : IDays) =>{
                    return val.dayNbr === 11 || val.dayNbr === 21 || val.dayNbr === 30 || val.dayNbr === 31?
                     <React.Fragment><div className="w-100"></div><div className="col"><Days key={val.dayNbr} dayNbr={val.dayNbr} dayEvents={val.dayEvents} /></div></React.Fragment> :
                     <div className="col" key={val.dayNbr}><Days key={val.dayNbr} dayNbr={val.dayNbr} dayEvents={val.dayEvents} /></div>
                })}
                </div>
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