import React, {Component} from 'react';

const bookingUrl = "";

class PlaceOrder extends Component{
    constructor(props){
        super(props)

        this.state={
            id:Math.floor(Math.random()*1000),
            hotel_name:this.props.match.params.hotel_name,
            name:'',
            phone:'',
            email:'',
            cost:''
        }
    }

    render(){
        return(
            <div className="container">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        Place Booking
                    </div>
                    <div className="panel-body">
                            
                    </div>
                </div>
            </div>
        )
    }
}

export default PlaceOrder;