/**
 * Created by dmitry on 2019-02-26.
 */
import React from 'react';
import {Table} from 'react-bootstrap';
import SelectCurrencyForm from './SelectCurrencyForm';


class Home extends React.Component {

    render() {
        return <div className="container">
            <span>
                <h3>Current Rates</h3>
            </span>
            <SelectCurrencyForm />
        </div>
    }
}
export default Home