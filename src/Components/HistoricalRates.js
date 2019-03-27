import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Calendar from 'react-calendar';
import SelectCurrencyForm from './SelectCurrencyForm';

import * as API_CONSTANTSClass from './api/APIConstants';

class HistoricalRates extends React.Component {


    state = {
        date: new Date(),
    }

    onChange = date => this.setState({date});

    formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    };


    render() {

        this.formatDate(this.state.date);

        console.log("This is formatted date: " + this.formatDate(this.state.date));


        //TODO change format for month
        console.log(this.state.date.getFullYear() + "-" + this.state.date.getMonth() + "-" + this.state.date.getDate());

        return (
            <div className="container">
                <Container>
                    <Row>
                        <Col>
                            <Calendar
                                onChange={this.onChange}
                                value={this.state.date}

                            />
                        </Col>
                        <Col>
                            <SelectCurrencyForm />
                        </Col>
                    </Row>

                </Container>
                <h2>Date is: {this.formatDate(this.state.date)}
                </h2>
            </div>
        );
    }
}
export default HistoricalRates