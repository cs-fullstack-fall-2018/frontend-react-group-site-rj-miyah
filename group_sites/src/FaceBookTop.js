import React, {Component} from 'react';
import './FaceBook.css';

class FaceBookTop extends Component {
    render() {
        return (
            <div id="navwrapper">
                <div id="navbar">
                    <table className="tablewrapper">
                        <tr>
                            <td className="row1">UserName</td>
                            <td className="row1">Password</td>
                        </tr>
                        <tr>
                            <td>
                            </td>
                            <td>
                            </td>
                            <td>
                                <div id="button">Log In</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="row2">Keep me logged in</div>
                            </td>
                            <td className="row2 h">Forgot your password?</td>
                        </tr>
                    </table>

                    <h1 className="logowrapper"></h1>

                </div>
            </div>
        )
    }
}

export default FaceBookTop;