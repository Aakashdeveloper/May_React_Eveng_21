import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Component/home/Home';
import ListingApi from './Component/listing/listingApi';
import DetailsComponent from './Component/details/hotelDetails';
import PlaceBooking from './Component/Booking/placeBooking';
import ViewBooking from './Component/Booking/bookingApi';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/list/:id" component={ListingApi}/>
            <Route path="/details/:id" component={DetailsComponent}/>
            <Route path="/viewBooking" component={ViewBooking}/>
            <Route path="/booking/:hotel_name" component={PlaceBooking}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing