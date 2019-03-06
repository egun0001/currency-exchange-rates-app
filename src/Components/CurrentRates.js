import React from 'react'
import { Table} from 'react-bootstrap';
class CurrentRates extends React.Component {
    render() {
        return <div className="container">
            <Table responsive>
                <thead>
                <tr>
                    <th>Euro</th>
                    <th>World Currencies</th>
                    <th>Rates</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Euro</td>
                    <td>CAD</td>
                    <td>1.43244455</td>

                </tr>
                <tr>
                    <td>Euro</td>
                    <td>SEK</td>
                    <td>10.4325</td>
                </tr>
                <tr>
                    <td>Euro</td>
                    <td>CHF</td>
                    <td>5.432455</td>
                </tr>
                </tbody>
            </Table>
        </div>


    }
}
export default CurrentRates