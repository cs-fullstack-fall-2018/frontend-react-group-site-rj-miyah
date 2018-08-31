import React, {Component} from 'react';
import './YouTube.css'

class YouTubeRecommendedChannels extends Component {
    render() {
        return (
            <section className="recommended-channels">

                <div className="recommended-channels-group">

                    <h2 className="recommended-channels-heading"></h2>

                    <div className="recommended-channel">

                        <div className="recommended-channel-icon">
                            <img
                                src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=24&h=24&fit=crop&crop=faces"
                                alt=""/>
                        </div>

                        <h3 className="recommended-channel-title"></h3>

                        <button className="recommended-channel-subscribe btn"></button>
                    </div>

                    <div className="recommended-channel">

                        <div className="recommended-channel-icon">
                            <img
                                src=""
                                alt=""/>
                        </div>

                        <h3 className="recommended-channel-title"></h3>

                        <button className="recommended-channel-subscribe btn"></button>
                    </div>
                </div>

                <div className="recommended-channels-group">

                    <h2 className="recommended-channels-heading"></h2>

                    <div className="recommended-channel">

                        <div className="recommended-channel-icon">
                            <img
                                src=""
                                alt=""/>
                        </div>

                        <h3 className="recommended-channel-title"></h3>

                        <button className="recommended-channel-subscribe btn"></button>
                    </div>

                    <div className="recommended-channel">

                        <div className="recommended-channel-icon">
                            <img
                                src="https://images.unsplash.com/photo-1504960868016-9a59a5172321?w=24&h=24&fit=crop"
                                alt=""/>
                        </div>

                        <h3 className="recommended-channel-title"></h3>

                        <button className="recommended-channel-subscribe btn"></button>

                    </div>

                    <div className="recommended-channel">

                        <div className="recommended-channel-icon">
                            <img
                                src=""
                                alt=""/>
                        </div>

                        <h3 className="recommended-channel-title"></h3>

                        <button className="recommended-channel-subscribe btn"></button>
                    </div>
                </div>
            </section>
        );
    }
}

export default YouTubeRecommendedChannels;