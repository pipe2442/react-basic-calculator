import '../Assets/Styles.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Quote = () => {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    axios
      .get('https://goquotes-api.herokuapp.com/api/v1/random?count=1')
      .then((res) => {
        setQuote(res.data.quotes[0]);
      });
  }, []);

  return (
    <div className="font">
      <h2>{quote.text}</h2>
      <h4>{quote.author}</h4>
    </div>
  );
};
export default Quote;
