import React, { Component } from 'react'

export default class LabelComponent extends Component {
    render() {
        return (
            <div className="user_abt" title={ this.props.titleText }>{ this.props.titleText }</div>
            // <span class="readmore" onclick="MobileLib.readMore(this)">Read more</span>
        )
    }
}
