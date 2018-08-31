import React, {Component} from 'react';
import './YouTube.css'
import YouTubeHeader from "./YouTubeHeader";
import YouTubeChannelBanner from "./YouTubeChannelBanner";
import YouTubeChannelInfo from "./YouTubeChannelInfo";
import YouTubeChannelContent from "./YouTubeChannelContent";

class YouTube extends Component {
    render() {
        return (
            <span>
                {/*<!-- Masthead -->*/}
                <YouTubeHeader/>
                {/*<!-- End of header -->*/}

                {/*<!-- Channel Banner -->*/}
                <YouTubeChannelBanner/>
                {/*<!-- End of channel banner -->*/}

                {/*<!-- Channel Info -->*/}
                <YouTubeChannelInfo/>
                {/*<!-- End of channel navigation -->*/}

                {/*<!-- Channel main content -->*/}
                <YouTubeChannelContent/>
            </span>
        )
    }
}

export default YouTube;