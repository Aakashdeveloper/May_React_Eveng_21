import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from './db.json';
import NewsDisplay from './NewsDisplay';

class Home extends Component {
    constructor(){
        super()

        this.state={
            news: JSON,
            filtered: JSON
        }
    }

    /*
    var a = [0,1,2,3]
    a.filter((data) => {return data>2})
    */

    filterNews = (userInput) => {
        const output = this.state.news.filter((data) => {
            return data.title.toLowerCase().indexOf(userInput.toLowerCase())>-1
        })
        this.setState({filtered: output})
    }

    render(){
        return (
            <>
                <Header userText={(data) => {this.filterNews(data)}}/>
                <NewsDisplay newsdata={this.state.filtered}/>
                <Footer year="2022" month="May"/>
            </>
        )
    }
    
};

export default Home;