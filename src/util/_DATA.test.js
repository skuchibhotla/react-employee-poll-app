import {
    _saveQuestion,
    _saveQuestionAnswer,
    _getInitialData,
  } from "../util/_DATA";

describe("_saveQuestionAnswer", () => {
    it("should return true for correct parameters", async () => {
        const response = await _saveQuestionAnswer({
            authedUser: "tylermcginnis",
            qid: "vthrdm985a262al8qx3do",
            answer: "optionOne"
        });

        expect(response).toBeTruthy();
    });
});

describe('_saveQuestion', () => {
    // Sample user and question data for testing
    const author = {
        id: 'tylermcginnis',
        name: 'Tyler McGinnis',
        avatarURL: 'https://github.com/tyler.png'
    };
    const optionOneText = 'Write more Jest tests';
    const optionTwoText = 'Write more component tests';

    it('should create a new question correctly with valid data', async () => {
        expect.assertions(5); // We expect 5 assertions to be called

        const newQuestion = await _saveQuestion({
            optionOneText,
            optionTwoText,
            author
        });

        // Check if the newQuestion has the expected properties
        expect(newQuestion).toHaveProperty('id');
        expect(newQuestion).toHaveProperty('timestamp');
        expect(newQuestion.author).toBe(author.id);
        expect(newQuestion.optionOne.text).toBe(optionOneText);
        expect(newQuestion.optionTwo.text).toBe(optionTwoText);

        // Optionally, you could also check if the question was added to the questions object
    });

    it('should reject the promise when required parameters are missing', async () => {
        expect.assertions(1);

        // Attempt to save a question without providing all required parameters
        await expect(_saveQuestion({
            optionOneText,
            // optionTwoText is omitted intentionally.
            author
        })).rejects.toMatch('Please provide optionOneText, optionTwoText, and author');
    });
});
