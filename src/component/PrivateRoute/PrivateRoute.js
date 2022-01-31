import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    return (
        <div>
            <div>
                <Route
                    {...rest}
                    render={({ location }) => user.email ? children : <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    ></Redirect>}
                >
                </Route>
            </div>
        </div>
    );
};

export default PrivateRoute;