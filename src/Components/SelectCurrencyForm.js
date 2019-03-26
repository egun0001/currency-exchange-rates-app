/**
 * Created by dmitry on 2019-03-18.
 */
import React from 'react';
import Select from 'react-select';
import Button from 'react-bootstrap/Button';
import {Table} from 'react-bootstrap';
// import ReactTable from "react-table";
import * as API_CONSTANTSClass from './api/APIConstants';

const currencyOptions = [
    {value: 'AUD', label: 'Australian dollar'},
    {value: 'CAD', label: 'Canadian dollar'},
    {value: 'CHF', label: 'Swiss frank'},
    {value: 'CZK', label: 'Czech koruna'},
    {value: 'DKK', label: 'Danish krone'},
    {value: 'GBP', label: 'British Pound'},
    {value: 'HKD', label: 'Hong Kong Dollar'},
    {value: 'JPY', label: 'Japanese yen'},
    {value: 'NOK', label: 'Norwegian Krone'},
    {value: 'NZD', label: 'New Zealand dollar'},
    {value: 'SEK', label: 'Sweeden crona'}
];
let currenciesSelected = [];
let selectedCurrencies = [];
let listOfCurrencies = "";

// const URL = API_CONSTANTSClass.URL;
// console.log(URL);
// console.log(API_CONSTANTSClass.API_ACCESS_KEY);


class SelectCurrencyForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
            // added for fetch request
            error: null,
            isLoaded: false,
            rates: {},
            date: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }

    handleChange = (selectedOption) => {
        this.setState({selectedOption});
        console.log(`Option selected:`, selectedOption);
        for (var i = 0; i < selectedOption.length; i++) {

            currenciesSelected.push(selectedOption[i].value);

        }
        ;
    };

    // TODO check if nothing selected => disable Button Submit
    handleOnClick = () => {

        selectedCurrencies.length = 0;
        selectedCurrencies = [...new Set(currenciesSelected)];
        currenciesSelected.length = 0;
        console.log("Button Clicked!", currenciesSelected);
        console.log("Currencies selected:", selectedCurrencies);

        for (var i = 0; i < selectedCurrencies.length; i++) {
            let currency = selectedCurrencies[i].replace(/"/g, "");
            console.log("currency in loop: " + currency);
            if ((!listOfCurrencies || 0 === listOfCurrencies.length)) {
                listOfCurrencies = listOfCurrencies.concat(currency);
            } else
                listOfCurrencies = listOfCurrencies.concat("," + currency);
        }
        console.log("String of currencies: " + listOfCurrencies);
        this.fetchData(listOfCurrencies);
        // this.getCurrenciesList();
        listOfCurrencies = "";

    };

    componentDidMount() {
        console.log(this.state.rates);
    }

    fetchData(currencies) {
        const GET_API =
            API_CONSTANTSClass.URL +
            API_CONSTANTSClass.DATE_LATEST +
            API_CONSTANTSClass.API_ACCESS_KEY +
            API_CONSTANTSClass.CURRENCIES_SYMBOLS +
            currencies;
        console.log(GET_API);
        fetch(GET_API)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result.rates)
                    this.setState({
                        isLoaded: true,
                        date: result.date,
                        rates: result.rates
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    };

    render() {
        // const {error, isLoaded, items} = this.state;
        console.log(this.state.rates);

        const data = this.state.rates;

        const currenciesList = Object.entries(data).map(([item,value]) => {
            console.log(item + " " + value);
            return (
                <tr>
                    <td>{value}</td>
                    <td>{item}</td>
                </tr>
            );
        });

        return (

            <div className="container">
                <span>
            </span>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>1 Euro</th>
                        <th>World Currencies</th>
                    </tr>
                    </thead>
                    <tbody>
                    {currenciesList}
                    </tbody>
                </Table>
                <Select
                    onChange={this.handleChange}
                    isMulti
                    name="colors"
                    options={currencyOptions}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
                <Button variant="primary" onClick={this.handleOnClick}>Submit</Button>

            </div>

        );
    }
}


export default SelectCurrencyForm