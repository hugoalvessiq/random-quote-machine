import { useState } from "react";
import { FaTwitterSquare, FaQuoteLeft } from "react-icons/fa";

import data from "./data";

import "./Quotes.css";

function Quotes() {
  const [phrase, setPhrase] = useState(0);
  const { quote, author } = data[phrase];

  var colors = [
    "#042940",
    "#042940",
    "#9FC131",
    "#DBF227",
    "#D6D58E",
    "#662400",
    "#B33F00",
    "#FF6B1A",
    "#006663",
    "#00B3AD",
    "#F29325",
    "#D94F04",
  ];

  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };

  const randomQuote = () => {
    let randomNumber = Math.floor(Math.random() * data.length);
    if (randomNumber === phrase) {
      randomNumber = phrase + 1;
    }
    setPhrase(checkNumber(randomNumber));
  };

  const randomColor = () => {
    let randomNumber = Math.floor(Math.random() * colors.length);
    return randomNumber;
  };

  const elementStyle = colors[randomColor()];

  return (
    <div className="App">
      <div id="quote-box" style={{ color: elementStyle }}>
        <section id="text">
          <p className="quote" style={{ color: elementStyle }}>
            <FaQuoteLeft />
            {quote}
          </p>
          <div id="author" style={{ color: elementStyle }}>
            <span>--</span>
            {author}
          </div>

          <section id="btn">
            <button
              id="new-quote"
              style={{ backgroundColor: elementStyle }}
              onClick={randomQuote}
            >
              New Quote
            </button>

            <a href="https://www.twitter.com/intent/tweet" id="tweet-quote">
              <span style={{ color: elementStyle }}>
                <FaTwitterSquare />
              </span>
            </a>
          </section>
        </section>
      </div>
    </div>
  );
}

export default Quotes;
