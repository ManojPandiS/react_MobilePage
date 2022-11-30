import React, { Component } from 'react'

export default class ButtonComponent extends Component {
    constructor( props ) {
        super( props );

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete( ev ) {
        this.props.handleDelete( this.props.index );
        ev.preventDefault();
    }
    
    render() {
        return (
            <div className="delete" onClick={ ( ev ) => this.handleDelete( ev ) }>
                <div className="delete_main">
                    <em className="delete_icon"></em>
                    <span>Delete</span>
                </div>
            </div>
        )
    }
}
