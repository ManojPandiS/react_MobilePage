import React, { Component } from 'react'

export default class SideBarComponent extends Component {
  render() {
    return (
        <nav className="page_nav" id="page_nav">
            <div>Home</div>
            <div>Message</div>
            <div>Reports</div>
            <div>Settings</div>
            <div>Profile</div>
        </nav>
    )
  }
}
