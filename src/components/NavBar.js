import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {handleLogout} from "../actions/authedUser";

const Nav = ({dispatch, authedUserId}) => {

    const logout = (e) => {
        e.preventDefault();
        dispatch(handleLogout());
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Employee Poll App</Link>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/leaderboard" className="nav-link">Leaderboard</Link>
            <Link to="/new" className="nav-link">New Poll</Link>
            <div className="ml-auto d-flex align-items-center">
                {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                <span className="navbar-text mr-2" data-testid="user-information">User: {authedUserId}</span>
                <button className="btn btn-danger" onClick={logout}>Logout</button>
            </div>
        </nav>
    );
};

const mapStateToProps = ({authedUser}) => ({
    authedUserId: authedUser.id,
});


export default connect(mapStateToProps)(Nav);
