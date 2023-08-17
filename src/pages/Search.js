import React, {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';
import { FaSearch } from 'react-icons/fa';

const Search = () => {

  const [users, setUser] = useState([]);

  const [keyWord, setKeyWord] = useState("");
    const [query,setQuery]= useState("");
    console.log(query)

    useEffect(() => {
      loadUsers();
    }, [keyWord]);
  //loading  all College and university Data from usa but it take 2 3 sec to load data in home page because of 
  //high volume
    const loadUsers = async () => {
      const result = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`);
     
      setUser(result.data);
      console.log(result);
  
    };
  return (
    <div>
      <h1>this is search page</h1>
      <div className='input-wrapper'>
<FaSearch id="search-icon"/>
<input value={keyWord} onChange={(e) => setKeyWord(e.target.value)} />  

           </div>

    </div>
  )
}

export default Search
