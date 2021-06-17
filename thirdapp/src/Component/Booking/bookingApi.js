import React,{Component} from 'react';
import axios from 'axios';
import BookingDisplay from  './bookingDisplay';

const bookingUrl = "http://localhost:8700/booking";

class Booking extends Component{
    constructor(props){
        super(props)

        this.state={
            booking:''
        }
    }

    render(){
        return(
            <BookingDisplay bookdata={this.state.booking}/>
        )
    }

    //api 
    componentDidMount(){
        if(this.props.location){
            console.log(this.props.location.search.split('&'))
            var qparams = this.props.location.search;
            if(qparams){
                var data = {
                    "status":qparams.split('&')[0].split('=')[1],
                    "date":qparams.split('&')[2].split('=')[1],
                    "bank":qparams.split('&')[3].split('=')[1]
                }
                fetch(`${bookingUrl}/${qparams.split('&')[1].split('=')[1].split('_')[1]}`,
                {
                    method:'PATCH',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(data)
                })
            }
            

            axios.get(bookingUrl).then((res) => {this.setState({booking:res.data})})
        }
       
    }
}

export default Booking;