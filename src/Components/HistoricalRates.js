import React from 'react';
import Calendar from 'react-calendar';
import * as API_CONSTANTSClass from './api/APIConstants';

class HistoricalRates extends React.Component {


    state = {
        date: new Date(),
    }

    onChange = date => this.setState({date});


    render() {
        const URL = API_CONSTANTSClass.URL;
        console.log(URL);
        console.log(API_CONSTANTSClass.API_ACCESS_KEY);


        //TODO change format for monthes
        console.log(this.state.date.getFullYear() + "-" + this.state.date.getMonth() + "-" + this.state.date.getDate());

        return (
            <div className="container">
                <Calendar
                    onChange={this.onChange}
                    value={this.state.date}

                />
            </div>
        );
    }
}
export default HistoricalRates