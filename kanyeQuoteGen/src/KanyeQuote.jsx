import {useState} from "react"; 
import axios from "axios";
import './KanyeQuote.css'

const KanyeQuote = () => {
  const [quote, setQuote] = useState(""); //this function is to store the quotes within the empty string

  //Function to fetch a new quote
  const fetchQuote = async () => {
    try{
      const response = await axios.get("https://api.kanye.rest"); //it is to bring back from the website a new quote that is from the api
      setQuote(response.data.quote);
    } catch (error) {
      console.error("Error fetching quote:", error); //logging the errors to the console
      setQuote("Could not fetch a quote. Please try again"); // the error message
    }
  };

  return (
    <div className="quote-container">
      <h1>Kanye West Quote Generator</h1>
      <p className="quote">{quote || "Click the button to get inspired!"}</p>
      <button onClick={fetchQuote}>Get Kanye Quote</button>
    </div>
  );
};

export default KanyeQuote;