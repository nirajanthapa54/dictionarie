import './list.css';

import { useState } from 'react';

import { AiFillPlayCircle } from 'react-icons/ai';

const ListDetails = ({ result }) => {
  const { word, phonetics, meanings } = result;
  const [noun,setNoun]=useState(false);
const [verb,setVerb]=useState(false);
  const ShowNoun=()=>
  {

    if(noun===true)
    {
      setNoun(false);

    }
    else
    {
      setNoun(true)
    }
  }
  const ShowVerb=()=>
  {

    if(verb===true)
    {
      setVerb(false);

    }
    else
    {
      setVerb(true)
    }
  }

  function playAudio() {
    try {
      let audio = new Audio(phonetics[0].audio);
      audio.play();
    } catch (e) {
      console.log({ e });
    }
  }


  return (
    <div>
    <div className="container">
    <div  className='row1'>
    <div className='play'>

    <AiFillPlayCircle className="audio" onClick={playAudio}/>
    </div>

    <div className='text>'>
    <input type='text' className='text' value={phonetics[0].text}/>
      </div>
      </div>


      <br/><br/><br/><br/><br/><br/><br/><br/>
      <br/>
      <div className='button'>
        <button className='noun' onClick={ShowNoun}> {meanings[0].partOfSpeech}</button>  &nbsp;&nbsp;
        <button className='verb' onClick={ShowVerb}>{meanings[1].partOfSpeech}</button>

        <div>
      
       
      </div>
      <br/><br/>
      <br/>
      {
        noun &&
      (<div className='content'>
      <ol>

      <br/><br/>
      <li className='left'>{meanings[0].definitions[0].definition}</li>
      <br/><br/><br/>
      <li className='left'>{meanings[0].definitions[1].definition}</li>
      <br/><br/>
      <li className='left'>{meanings[0].definitions[2].definition}</li>
</ol>

<br/><br/><br/><br/><br/>
<div><h2 style={{color:'blue'}}>Click Noun again to Cancel it </h2></div>
</div>)
}
{
        verb  &&
      (<div className='content'>
      <ol>

      <br/><br/>
      <li className='left'>{meanings[1].definitions[0].definition}</li>
      <br/><br/><br/>
      <li className='left'>{meanings[1].definitions[0].definition}</li>
      <br/><br/><br/>
     
      
      
</ol>

</div>


)
}

     </div>
      </div>
      </div>

  );
};

export default ListDetails;
