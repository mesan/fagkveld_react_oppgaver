import React from 'react';

const FormExample = React.createClass({

    getInitialState() {
        return {
            myTextValue: this.props.initial || ''
        };
    },

    handleChange(event) {
        this.setState({ myTextValue: event.target.value });
    },

    handleSubmit(event) {
        event.preventDefault();
        alert(this.state.myTextValue);
    },

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>Et skjema</legend>
                    <input
                        autoFocus
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.myTextValue}
                    />
                    <button type="submit">Send</button>
                </fieldset>
                <p>Du har skrevet: {this.state.myTextValue}</p>
            </form>
        );
    }
});

export default FormExample;
