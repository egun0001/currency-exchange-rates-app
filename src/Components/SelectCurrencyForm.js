/**
 * Created by dmitry on 2019-03-18.
 */
import React from 'react';
import Select from 'react-select';
import Button from 'react-bootstrap/Button';

const colourOptions = [
    {value: 'CAD', label: 'CAD'},
    {value: 'USD', label: 'USD'},
    {value: 'CHN', label: 'CHN'}
];
let currenciesSelected = [];
let selectedCurrencies = [];
let listOfCurrencies = "";

class SelectCurrencyForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
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
        this.getCurrenciesList();
        listOfCurrencies = "";

    };


    getCurrenciesList() {
        console.log("String of currencies: " + listOfCurrencies);
        return listOfCurrencies;
    }

    render() {

        return (
            <div className="container">
                <Select
                    onChange={this.handleChange}
                    isMulti
                    name="colors"
                    options={colourOptions}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
                <Button variant="primary" onClick={this.handleOnClick}>Submit</Button>
            </div>
        );
    }
}


export default SelectCurrencyForm