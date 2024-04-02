import {connect} from "react-redux";
import Card from "./Card";

const Dashboard = ({authedUser, questions, users}) => {

    const unanswered = (question) => (!question.optionOne.votes.includes(authedUser.id)
        && !question.optionTwo.votes.includes(authedUser.id));

    const answered = (question) => (question.optionOne.votes.includes(authedUser.id)
        || question.optionTwo.votes.includes(authedUser.id));

    return (
        <div>
            <h1 data-testid="heading">Dashboard</h1>

            <h2>New Questions</h2>
            <ul className="list-group" style={{ 
                listStyleType: 'none',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px',
            }}>
                {questions
                    .filter(unanswered)
                    .map((question) => (
                        <li key={question.id} style={{ marginBottom: '20px' }}>
                            <Card question={question} author={users[question.author]}/>
                        </li>
                    ))
                }
            </ul>

            <h2>Answered Questions</h2>
            <ul className="list-group" style={{ 
                listStyleType: 'none',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px',
            }}>
                {questions
                    .filter(answered)
                    .map((question) => (
                        <li key={question.id} style={{ marginBottom: '20px' }}>
                            <Card question={question} author={users[question.author]}/>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

const mapStateToProps = ({authedUser, questions, users}) => ({
    authedUser,
    questions: Object.values(questions).sort(
        (a, b) => b.timestamp - a.timestamp
    ),
    users,
});

export default connect(mapStateToProps)(Dashboard);
