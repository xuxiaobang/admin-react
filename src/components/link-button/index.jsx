import React, {Component} from 'react';
import './index.less'

export default class LinkButtton extends Component {
    render() {
        return (
            <button {...this.props}>
                {this.props.children}
            </button>
        );
    }
}

