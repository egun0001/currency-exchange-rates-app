/**
 * Created by dmitry on 2019-02-26.
 */
import React from 'react';
import {Table} from 'react-bootstrap';
class Home extends React.Component {
    render() {
        return <div className="container">
            <span>
                <h3>Curren Rates</h3>
            </span>
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>1 Euro</th>
                    <th>World Currencies</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Euro</td>
                    <td>CAD</td>

                </tr>
                </tbody>
            </Table>
        </div>
    }
}
export default Home