import {connect} from "react-redux";

const Leaderboard = ({users}) => {
    return (
        <div>
            <h1>Leaderboard</h1>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>User</th>
                        <th>Answered</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody className="bg-white dark:bg-slate-800">
                {
                    users.map((user) => (
                        <tr key={user.id}>
                            <td>
                                <span className="font-bold">{user.name}</span>&nbsp;<span>({user.id})</span>
                            </td>
                            <td>{Object.keys(user.answers).length}</td>
                            <td>{user.questions.length}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
};

const mapStateToProps = ({users}) => ({
    users: Object.values(users).sort((a, b) => Object.keys(b.answers).length - Object.keys(a.answers).length),
});

export default connect(mapStateToProps)(Leaderboard);
