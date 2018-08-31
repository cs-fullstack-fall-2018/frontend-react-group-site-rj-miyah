import React, {Component} from 'react';
import './FaceBook.css';

class FaceBookTop extends Component {
    render() {
        return (
            <div id="navwrapper">
                <div id="navbar">
                    <table className="tablewrapper">
                        <tr>
                            <td className="row1"></td>
                            <td className="row1"></td>
                        </tr>
                        <tr>
                            <td>
                            </td>
                            <td>
                            </td>
                            <td>
                                <div id="button"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="row2"></div>
                            </td>
                            <td className="row2 h"></td>
                        </tr>
                    </table>

                    <h1 className="logowrapper"></h1>

                </div>
            </div>
        )
    }
}

export default FaceBookTop;