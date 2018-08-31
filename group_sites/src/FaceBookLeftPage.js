import React, {Component} from 'react';
import './FaceBook.css';

class FaceBookLeftPage extends Component {
    render() {
        return (
            <div id="leftbod">

                <div className="connect bolder">
                </div>

                <div className="leftbar">
                    <img
                        src="https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xap1/t39.2365-6/851565_602269956474188_918638970_n.png"
                        alt="" className="iconwrap fb1"/>
                    <div className="fb1">
                        <span className="rowtext"> </span>
                        <h2>Connect with your friends and the</h2>
                        <h2>world around you on facebook.</h2>
                        <p>
                        <span className="rowtext2 fb1"></span>
                    </div>
                </div>

                <div className="leftbar">
                    <img
                        src="https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xap1/t39.2365-6/851585_216271631855613_2121533625_n.png"
                        alt="" className="iconwrap fb1"/>
                    <div className="fb1">
                        <span className="rowtext"></span>
                        <span className="rowtext2 fb1"></span>
                    </div>
                </div>

                <div className="leftbar">
                    <img
                        src="https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xap1/t39.2365-6/851558_160351450817973_1678868765_n.png "
                        alt="" className="iconwrap fb1"/>
                    <div className="fb1">
                        <span className="rowtext"></span>
                        <span
                            className="rowtext2 fb1"></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default FaceBookLeftPage;