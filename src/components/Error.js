import {connect} from "react-redux";

const Error = () => {
    return (
        <div>
            <h1>Error 404</h1>
            <h2>Page not found</h2>
        </div>
    );
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(Error);
