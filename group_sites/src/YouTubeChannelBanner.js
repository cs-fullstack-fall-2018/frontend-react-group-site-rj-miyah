import React, {Component} from 'react';
import './YouTube.css'

class YouTubeChannelBanner extends Component {
    render() {
        return (
            <section className="channel-banner">

                <div className="channel-social-links">

                    <ul>

                        <li className="btn google-plus">
                            <i className="fab fa-google-plus-square" aria-hidden="true"></i>
                        </li>

                        <li className="btn twitter">
                            <i className="fab fa-twitter-square" aria-hidden="true"></i>
                        </li>

                        <li className="btn facebook">
                            <i className="fab fa-facebook-square" aria-hidden="true"></i>
                        </li>

                    </ul>

                </div>

            </section>
        )
    }
}

export default YouTubeChannelBanner;