import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Greeting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            age: 29
        }
    }

    render() {
        return (
            <div>
                <h1>jejeeje {this.props.name}</h1>
                <h2>jejeeje es: {this.state.age}</h2>
                <button onClick={this.birthday}>
                    Cumplir años
                </button>

            </div>
        )
    }

    birthday = () => {
        this.setState((prevState) => ({

            age: prevState.age + 1





        }))
    }



}

Greeting.propTypes = {
    name: PropTypes.string,
};

export default Greeting;