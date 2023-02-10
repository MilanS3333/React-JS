import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Invitation extends Component {
    constructor(props) {
        super(props);

    }

    // componentWillMount() {

    // }

    componentDidMount() {

    }

    // componentWillReceiveProps(nextProps) {

    // }

    shouldComponentUpdate(nextProps, nextState) {

    }

    // componentWillUpdate(nextProps, nextState) {

    // }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <>
                <div className="container mt-5 text-center" style={{ fontFamily: 'cursive' }}>
                    <p>
                        <strong>Mrs. Rekha</strong> and <strong>Mr. Suraj Goyal</strong><br />
                        request your gracious presence <br />
                        on the wedding ceremony of their son
                    </p>
                    <h1>Parth</h1>
                    <p>WITh</p>
                    <h1>Anushka</h1>
                    <p>daughter of <strong>Mr. </strong>and <strong>Mrs. Arjun Kumar</strong></p>
                    <p>SATURDAY, SEPTEMBER 16<sub>TH</sub>, 2025 <br />
                        7 O'CLOCK IN THE EVENING <br />
                        MAJESTIC BALLROOM <br />
                        1153 DARK STAR LANE <br />
                        SAN DIEGO. CA</p>
                </div>
            </>
        );
    }
}

// Invitation.propTypes = {

// };

export default Invitation;