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


    render() {
        const URL = API_CONSTANTSClass.URL;
        console.log(URL);
        console.log(API_CONSTANTSClass.API_ACCESS_KEY);


        //TODO change format for monthes
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
                <h2>Date is: {this.state.date.getFullYear() + "-"
                + this.state.date.getMonth()
                + "-" + this.state.date.getDate()}
                </h2>
            </div>
        );
    }
}
export default HistoricalRates