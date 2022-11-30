import React, { Component } from 'react'

export default class ProfileCard extends Component {
    constructor( props ) {
        super( props );

        this.userData = this.props.userData;
        this.getFormatedTime = this.getFormatedTime.bind(this);
        this.getPhotoURL = this.getPhotoURL.bind(this);
    }

    getFormatedTime() {
        let seconds = Math.floor((new Date().getTime() - this.userData.updated) / 1000);

        let interval = seconds / 86400;
        if (interval > 1) {
            if (interval > 365) {
                return Math.floor(interval / 365) + " Years ago";
            }
            if (interval > 30) {
                return Math.floor(interval / 30) + " Months ago";
            }
            return Math.floor(interval) + " days ago";
        }
        return "Just now";
    }
    
    getPhotoURL() {
        return 'https://message-list.appspot.com' + this.userData.photoUrl;
    }

    render() {
        return (
            <div className="li_hdr">
                <img src={ this.getPhotoURL() } alt="user_photo" className="user_img" />
                <div className="textleft">
                    <div className="user_name">{ this.userData.name }</div>
                    <span className="user_date">{ this.getFormatedTime() }</span>
                </div>
            </div>
        )
    }
}
