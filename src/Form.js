import React, { Component } from 'react';

import logo from './fill.png';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'напишите нам'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.props.changeMsg(this.state.value);
        this.setState({value: 'напишите нам'});
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        <textarea value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <div value="" className="superbutton" onClick={this.handleSubmit}/>
                </form>
            </div>
        );
    }
}
export default Form;