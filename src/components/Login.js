import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {useState} from "react";
import {handleLogin} from "../actions/authedUser";

const Login = ({dispatch, loggedIn}) => {
    // Starting with blank state for username and password...
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    if (loggedIn) {
        const urlParams = new URLSearchParams(window.location.search);
        const redirectUrl = urlParams.get('redirectTo');
        return <Navigate to={redirectUrl ? redirectUrl : "/"}/>;
    }

    const handleUsername = (e) => {
        const value = e.target.value;
        setUsername(value);
    };

    const handlePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !password) {
            setErrorMessage("Error: Username and password are required!"); // Set error message...
            return; // Stop the function execution...
        }

        dispatch(handleLogin(username, password));
        setUsername("");
        setPassword("");
    };

    return (
        <div data-testid="custom-login">
            <h1 className="text-3xl font-bold mt-9" data-testid="login-heading">Login</h1>
            
            {/* Error message... */}
            {errorMessage && <div className="error" data-testid="error-message">{errorMessage}</div>}


            <form onSubmit={handleSubmit}>
                {/* User Name */}
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                        <input className="form-control"
                            value={username}
                            onChange={handleUsername}
                            type="text"
                            name="username"
                            id="username"
                            data-testid="username"
                        />
                </div>

                {/* Password */}
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                        <input className="form-control"
                            value={password}
                            onChange={handlePassword}
                            type="password"
                            name="password"
                            id="password"
                            data-testid="password"
                        />
                </div>
                {/* Submit Button */}
                <button type="submit" className="btn btn-primary" data-testid="submit">Login</button>
            </form>
        </div>
    );
};

const mapStateToProps = ({authedUser}) => ({
    loggedIn: !!authedUser,
});

export default connect(mapStateToProps)(Login);
