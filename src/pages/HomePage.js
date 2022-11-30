import axios from 'axios';
import React, { Component } from 'react'
import CardComponent from '../components/Card/CardComponent'
import HeaderComponent from '../components/Header/HeaderComponent'
import SideBarComponent from '../components/SideBar/SideBarComponent'

export default class HomePage extends Component {
    constructor( props ) {
        super(props);
        this.state = { messageData : [], pageToken : '' };
        this.scrollContainer = React.createRef();

        this.feachData = this.feachData.bind(this);
        this.handlePageScroll = this.handlePageScroll.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    feachData() {
        this.messageCallStatus = true;
        
        axios( 'https://message-list.appspot.com/messages' + ( this.state.pageToken ? '?pageToken=' + this.state.pageToken : '' ) ).then( ( { data } ) => {
            this.messageCallStatus = false;
           
            this.setState( () => {
                return { messageData : [...this.state.messageData, ...data.messages ], pageToken : data.pageToken } 
            }, () => {
                /*** Make message call till page got scrollable ***/
                let scrollelem = this.scrollContainer.current;
                ( scrollelem.scrollHeight <= scrollelem.clientHeight ) && this.feachData()
            } );
            
        })
    }

    handlePageScroll( { target } ) {
        if( this.messageCallStatus ) { return; }
        if ((target.clientHeight + target.scrollTop) > target.scrollHeight - 50 ) 
        {
            this.feachData();
        }
    }

    handleDelete( index ) {
        this.state.messageData.splice(index, 1);
        this.setState( { ...this.state, messageData : this.state.messageData } );
    }

    componentDidMount() {
        !this.messageCallStatus && this.feachData();
    }

    render() {
        return (
            <section className="page_main">
                <HeaderComponent />
                <SideBarComponent />
                <section className="page_list page_anim" ref={ this.scrollContainer } onScroll={ ( ev ) => this.handlePageScroll( ev ) }>
                    { !this.state.messageData.length ? <h1>Loading...</h1> : this.state.messageData.map( ( cardData, index ) => { 
                        return <CardComponent key={ cardData.id } index={ index } handleDelete={ this.handleDelete } {...cardData} />;
                    })}
                </section>
            </section>
        )
    }
}
