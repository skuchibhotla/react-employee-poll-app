import {connect} from "react-redux";
import {Link} from "react-router-dom";

const Card = ({question, author}) => {
    return (
        <Link to={'questions/' + question.id}>
          <div class="card" style={{width: '18rem', marginTop: '10px'}}>
            <img class="card-img-top" src={author?.avatarURL} alt="Author" />
            <div class="card-body" style={{textAlign: 'center'}}>
              <p class="card-text">{question.author}</p>
              <p>{new Date(question.timestamp).toDateString()}</p>
            </div>
          </div>
        </Link>
    );
}

export default connect()(Card);