import React, {Component} from 'react';
import FaceBookTop from './FaceBookTop'
import FaceBookLeftPage from './FaceBookLeftPage'
import FaceBookRightPage from "./FaceBookRightPage";
import './FaceBook.css';

class FaceBookMain extends Component {
    render() {
        return (
            <div>
                <FaceBookTop/>
                <div id="contentwrapper">
                    <div id="content">
                        <FaceBookLeftPage/>
                        <FaceBookRightPage/>
                    </div>
                </div>
            </div>

        )
    }
}

export default FaceBookMain;