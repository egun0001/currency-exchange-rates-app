/**
 * Created by dmitry on 2019-02-27.
 */
import React from 'react';
import {Navbar, NavbarBrand, Container} from 'react-bootstrap';

class Footer extends React.Component {
    render() {
        return (
            <div className="fixed-bottom">
                <Navbar color="dark" dark>
                    <Container>
                        <NavbarBrand>Footer</NavbarBrand>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Footer;