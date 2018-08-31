import React, {Component} from 'react';
import './YouTube.css'

class YouTubeHeader extends Component {
    render() {
        return (
            <div>
                <header className="masthead">

                    <button className="menu-btn btn">
                        <i className="" aria-hidden="true"></i>
                    </button>

                    <div className="logo">
                        <a href="#">
                            <h1><i className="fab fa-youtube logo-icon" aria-hidden="true"></i></h1>
                        </a>
                    </div>

                    <div className="site-search">
                        <input type="search" className="search-input" aria-label="Search"/>
                        <button className="search-btn" aria-label="Search">
                            <i className="" aria-hidden="true"></i>
                        </button>
                    </div>

                    <div className="user-menu">

                        <button className="btn" aria-label="Upload">
                            <i className="" aria-hidden="true"></i>
                        </button>

                        <button className="btn" aria-label="YouTube Apps">
                            <i className="" aria-hidden="true"></i>
                        </button>

                        <button className="btn" aria-label="Notifications">
                            <i className="" aria-hidden="true"></i>
                        </button>

                        <button className="btn" aria-label="Account">
                            <i className="" aria-hidden="true"></i>
                        </button>

                    </div>

                </header>

            </div>)
    }
}

export default YouTubeHeader;