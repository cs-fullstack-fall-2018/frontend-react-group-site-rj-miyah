import React, {Component} from 'react';
import './YouTube.css'

class YouTubeChannelInfo extends Component {
    render() {
        return (
            <div>
                <section className="channel-info">

                    <div className="container">

                        <div className="channel-icon">

                            <img src=""
                                 alt=""/>

                        </div>

                        <div className="channel-title">

                            <h1><i className=""></i></h1>

                            <div className="channel-subscriber-count"></div>

                        </div>

                        <div className="channel-subscribe">

                            <button className="subscribe-btn btn"></button>

                            <button className="notification-btn btn" aria-label="Enable Notifications"><i
                                className="" aria-hidden="true"></i></button>

                        </div>

                    </div>

                </section>
                {/*<!-- End of channel info section -->*/}

                {/*<!-- Channel navigation -->*/}
                <nav className="channel-nav">

                    <div className="container">

                        <ul>

                            <li className="nav-item">
                                <a href="#" className="current"></a>
                            </li>

                            <li className="nav-item">
                                <a href="#"></a>
                            </li>

                            <li className="nav-item">
                                <a href="#"></a>
                            </li>

                            <li className="nav-item">
                                <a href="#"></a>
                            </li>

                            <li className="nav-item">
                                <a href="#"></a>
                            </li>

                            <li className="nav-item">
                                <a href="#"></a>
                            </li>

                        </ul>

                    </div>

                </nav>
            </div>
        )
    }
}

export default YouTubeChannelInfo;