import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Listing from './containers/Listing';
import Details from './containers/Details';
import tempDetails from './containers/tempDetails';
import Login from './containers/Login';
import Add from './containers/Add';
import Signup from './containers/SignUp';
import cookie from 'cookie';

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}

const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={(props) => checkAuth()
                ? <Component {...props} />
                : <Redirect to="/login" />
            }
        />
    )
}

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Listing} />
            <Route path="/details/:id" component={Details} />
            <Route path="/temp-details/:id" component={tempDetails} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <ProtectedRoute path="/add" component={Add} />
        </Switch>
    );
};

export default Router;