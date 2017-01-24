import React from 'react';

export default function createTickComponent(Component) {
    let tick;

    return React.createClass({

        getInitialState() {
            return {
                ticks: 0
            };
        },

        componentDidMount() {
            tick = setInterval(() => this.setState(prevState => ({ ticks: prevState.ticks + 1 })), 1000);
        },

        componentWillUnmount() {
            clearInterval(tick);
        },

        render() {
            return <Component {...this.props} {...this.state} />;
        }
    });
}
