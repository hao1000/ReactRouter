import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from '../Component/Home';
import New from '../Component/New';
import Newdetail from '../Component/NewDetail';
import Contact from '../Component/Contact';

class DieuHuongURL extends Component {
    render() {
        return (        
                <div>
                    <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/tin" component={New}></Route>
                    <Route exact path="/tin-chi-tiet" component={Newdetail}></Route>
                    <Route exact path="/lien-he" component={Contact}></Route>
                </div>         
        );
    }
}
export default DieuHuongURL;