import React from 'react';

export default function createSquareTickComponent(Component) {
    return React.createClass({
        render() {
            return <Component {...this.props} ticks={this.props.ticks * this.props.ticks} />;
        }
    });
}
