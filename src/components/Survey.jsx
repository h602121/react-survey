import { useState } from "react";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [data, setData] = useState({
    colour: 0,
    consistency: 0,
    timeSpent: [],
    username: "",
    email: "",
    text: "",
  });
  const [answersList, setAnswersList] = useState([]);
  console.log(data);

  const ChangeColorRating = (number) => {
    data.colour = number;
    setData({ ...data });
  };

  const ChangeconsistencyRating = (number) => {
    (data.consistency = number), setData({ ...data });
  };

  const ChangeActivity = (activity) => {
    const index = data.timeSpent.indexOf(activity);
    if (index > -1) {
      data.timeSpent.splice(index, 1);
    } else {
      data.timeSpent.push(activity);
    }

    setData({ ...data });
  };

  const ChangeText = (event) => {
    data.text = event;
    setData({ ...data });
  };

  const Changeusername = (event) => {
    data.username = event;
    setData({ ...data });
  };

  const ChangeEmail = (event) => {
    data.email = event;
    setData({ ...data });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    setAnswersList([...answersList, data]);

    setData({
      colour: 0,
      consistency: 0,
      timeSpent: [],
      username: "",
      email: "",
      text: "",
    });
  };
  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answersList}></AnswersList>
      </section>
      <section className="survey__form">
        {
          <form className="form" onSubmit={HandleSubmit}>
            <h2>Tell us what you think about your rubber duck!</h2>
            <div className="form__group radio">
              <h3>How do you rate your rubber duck consistency?</h3>
              <ul>
                <li>
                  <input
                    id="consistency-one"
                    type="radio"
                    name="consistency"
                    value="1"
                    onClick={() => ChangeconsistencyRating(1)}
                  />
                  <label htmlFor="consistency-one">1</label>
                </li>
                <li>
                  <input
                    id="consistency-two"
                    type="radio"
                    name="consistency"
                    value="2"
                    onClick={() => ChangeconsistencyRating(2)}
                  />
                  <label htmlFor="consistency-two">2</label>
                </li>
                <li>
                  <input
                    id="consistency-three"
                    type="radio"
                    name="consistency"
                    value="3"
                    onClick={() => ChangeconsistencyRating(3)}
                  />
                  <label htmlFor="consistency-three">3</label>
                </li>
                <li>
                  <input
                    id="consistency-four"
                    type="radio"
                    name="consistency"
                    value="4"
                    onClick={() => ChangeconsistencyRating(4)}
                  />
                  <label htmlFor="consistency-four">4</label>
                </li>
              </ul>
              <h3>How do you rate your rubber duck colour?</h3>
              <ul>
                <li>
                  <input
                    id="colour-one"
                    type="radio"
                    name="colour"
                    value="1"
                    onClick={() => ChangeColorRating(1)}
                  />
                  <label htmlFor="colour-one">1</label>
                </li>
                <li>
                  <input
                    id="colour-two"
                    type="radio"
                    name="colour"
                    value="2"
                    onClick={() => ChangeColorRating(2)}
                  />
                  <label htmlFor="colour-two">2</label>
                </li>
                <li>
                  <input
                    id="colour-three"
                    type="radio"
                    name="colour"
                    value="3"
                    onClick={() => ChangeColorRating(3)}
                  />
                  <label htmlFor="colour-three">3</label>
                </li>
                <li>
                  <input
                    id="colour-four"
                    type="radio"
                    name="colour"
                    value="4"
                    onClick={() => ChangeColorRating(4)}
                  />
                  <label htmlFor="colour-four">4</label>
                </li>
              </ul>
            </div>
            <div className="form__group">
              <h3>How do you like to spend time with your rubber duck</h3>
              <ul>
                <li>
                  <label>
                    <input
                      name="spend-time"
                      type="checkbox"
                      value="swimming"
                      onChange={() => ChangeActivity("swimming")}
                    />
                    Swimming
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      name="spend-time"
                      type="checkbox"
                      value="bathing"
                      onChange={() => ChangeActivity("bathing")}
                    />
                    Bathing
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      name="spend-time"
                      type="checkbox"
                      value="chatting"
                      onChange={() => ChangeActivity("chatting")}
                    />
                    Chatting
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      name="spend-time"
                      type="checkbox"
                      value="noTime"
                      onChange={() => ChangeActivity("noTime")}
                    />
                    I don't like to spend time with it
                  </label>
                </li>
              </ul>
            </div>
            <label>
              What else have you got to say about your rubber duck?
              <textarea
                name="review"
                cols="30"
                rows="10"
                onChange={(e) => ChangeText(e.target.value)}
              ></textarea>
            </label>
            <label>
              Put your username here (if you feel like it):
              <input
                type="text"
                name="userusername"
                value={data.username}
                onChange={(e) => Changeusername(e.target.value)}
              />
            </label>
            <label>
              Leave us your email pretty please??
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={(e) => ChangeEmail(e.target.value)}
              />
            </label>
            <input
              className="form__submit"
              type="submit"
              value="Submit Survey!"
            />
          </form>
        }
      </section>
    </main>
  );
}

export default Survey;
