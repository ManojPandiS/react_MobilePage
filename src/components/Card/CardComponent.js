import React, { Component } from 'react'
import ButtonComponent from '../Button/ButtonComponent'
import LabelComponent from '../Label/LabelComponent'
import ProfileCard from './ProfileCard'

export default class CardComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { showDelete : false }
    }

    render() {
        return (
            <div className={ `user_box${ this.state.showDelete ? ' show_delete' : '' }`} onClick={ () => this.setState( { showDelete : !this.state.showDelete } ) }>
                <ButtonComponent handleDelete={ this.props.handleDelete } index={ this.props.index } />
                <ProfileCard userData={this.props.author}/>
                <LabelComponent titleText={ this.props.content}/>
            </div>
        )
    }
}
