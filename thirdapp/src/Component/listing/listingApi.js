import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './listingDisplay';
import RoomFilter from '../filters/roomFilter';
import CostFilter from '../filters/costFilter'

const url = "https://developerfunnel.herokuapp.com/hotellist"

class Listing extends Component{
    constructor(){
        super()

        this.state={
            hotellist:''
        }
    }

    setDataAsPerFilter=(sortedData)=>{
        this.setState({hotellist:sortedData})
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-2">
                    <RoomFilter roomPerType={(data) => {this.setDataAsPerFilter(data)}}/>
                    <CostFilter costPerType={(data) => {this.setDataAsPerFilter(data)}}/>
                </div>
                <div className="col-md-10">
                    <ListingDisplay listdata={this.state.hotellist}/>
                </div>
            </div>
        )
    }
 
    //call api on basis of param 
    componentDidMount(){
        let tripId = this.props.match.params.id;
        sessionStorage.setItem('tripId', tripId)
        axios.get(`${url}/${tripId}`)
        .then((res) =>  {this.setState({hotellist:res.data})})
    }
}

export default Listing;