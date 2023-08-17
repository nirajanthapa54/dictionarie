import { useState } from 'react';

import axios from 'axios';
import { FaSearch } from 'react-icons/fa';

import ListDetails from './ListDetails';

//get css from description
//install axios

export default function App() {
  const [keyWord, setKeyWord] = useState("");

  const [result, setResult] = useState(null);

  const api = "https://api.dictionaryapi.dev/api/v2/entries/en";

  async function handleSearch() {
    try {
      const res = await axios.get(`${api}/${keyWord}`);
      console.log(res, "res");
      setResult(res.data[0]);
    } catch (e) {
      console.log({ e });
    }
  }

  function handleClear() {
    setKeyWord("");
    setResult(null);
  }
  return (
    <>
    <center>
    <div className="input-wrapper">
      <input value={keyWord} onChange={(e) => setKeyWord(e.target.value)}  placeholder='search word....'/>
      <FaSearch id="search-icon" className="button" type="submit" onClick={handleSearch}/>
     
      

      
    </div>
    <br/>
    <h3 style={{color:'blue'}}>Click search icon to see result</h3>
    <div className='content'>
    {result && <ListDetails {...{ result }} />}
    </div>
    </center>
    </>
  );
}
