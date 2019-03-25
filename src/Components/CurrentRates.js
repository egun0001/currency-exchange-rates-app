import React from 'react'
import {Table} from 'react-bootstrap';
class CurrentRates extends React.Component {
    render() {
        return <div className="container">
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Euro</th>
                    <th>World Currencies</th>
                    <th>Rates</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1 Euro</td>
                    <td>CAD</td>
                    <td>1.516801</td>

                </tr>
                <tr>
                    <td>1 Euro</td>
                    <td>SEK</td>
                    <td>10.453699</td>
                </tr>
                <tr>
                    <td>1 Euro</td>
                    <td>CHF</td>
                    <td>1.122625</td>
                </tr>
                </tbody>
            </Table>
        </div>


    }
}
export default CurrentRates