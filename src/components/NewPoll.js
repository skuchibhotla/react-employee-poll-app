import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {handleAddQuestion} from "../actions/questions";

const NewPoll = ({dispatch}) => {
    const navigate = useNavigate();
    const [firstOption, setFirstOption] = useState("");
    const [secondOption, setSecondOption] = useState("");

    const handleFirstOptionChange = (e) => {
        const value = e.target.value;
        setFirstOption(value);
    };

    const handleSecondOptionChange = (e) => {
        const value = e.target.value;
        setSecondOption(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleAddQuestion(firstOption, secondOption));
        navigate("/");
    };

    return (
        <div>
            <h1>New Poll</h1>
            <form onSubmit={handleSubmit}>
                {/* First Option */}
                <div className="form-group">
                    <label htmlFor="firstOption" data-testid="firstOptionLabel">First Option</label>
                    <div className="form-group">
                        <input className="form-control"
                            value={firstOption}
                            onChange={handleFirstOptionChange}
                            type="text"
                            name="firstOption"
                            id="firstOption"
                            data-testid="firstOption"
                        />
                    </div>
                </div>

                {/* Second Option */}
                <div className="form-group">
                    <label htmlFor="secondOption" data-testid="secondOptionLabel">Second Option</label>
                    <div className="mt-1">
                        <input className="form-control"
                            value={secondOption}
                            onChange={handleSecondOptionChange}
                            type="text"
                            name="secondOption"
                            id="secondOption"
                            data-testid="secondOption"
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div>
                    <button type="submit" data-testid="submit-poll" className="btn btn-primary">Submit</button>
                </div>

            </form>
        </div>
    );
};

export default connect()(NewPoll);
