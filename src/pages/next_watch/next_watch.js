import React, { Component } from "react";
import './next_watch.scss';
import Nav from "../../components/nav/nav";

class NextWatch extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div>What's your next watch?</div>
            </div>
        )
    }
}

export default NextWatch