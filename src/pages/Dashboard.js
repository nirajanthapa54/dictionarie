import {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';

const DashBoard=()=> {

  
  const [users, setUser] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);
//loading  all College and university Data from usa but it take 2 3 sec to load data in home page because of 
//high volume
  const loadUsers = async () => {
    const result = await axios.get("http://universities.hipolabs.com/search?country=United+States");
   
    setUser(result.data);

  };
  


  return (
  
        <>
        <center>
        <div>
          <h2 className='list'>Here are the list of all colleges and universities located in USA</h2>
          <h2 className='list2'>List  is so much it takes time to loading........</h2>
        </div>
        <br/>
          <table border={1}>
            <tr>
            <th>id</th>
              <th>Name</th>
              <th>website</th>
              <th>Domain</th>
            </tr>
            {users.map(UserIs => (
              <tr key={UserIs.Arrays}>
              <td>{UserIs.id}</td>
                <td>{UserIs.name}</td>
                <td>{UserIs.web_pages}</td>
                <td>{UserIs.domains}</td>
              </tr>
            ))}
          </table>
          </center>
        </>
  )
      }

   
export default DashBoard;