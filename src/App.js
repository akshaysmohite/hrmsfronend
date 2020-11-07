import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Login from './components/user/Login';
import auth from "./services/authService";

class App extends Component {
    state = {};

    componentDidMount() {
        const user = auth.getCurrentUser();
        this.setState({ user });
    }

    render() {
        const { user } = this.state;
        return (
            <div className="App">
                <Navbar user={user} />
                <Switch>
                    <Route path='/login' component={Login} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;