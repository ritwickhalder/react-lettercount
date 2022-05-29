import './style.css';
import { useState } from 'react';

function App() {

  const [text, setText] = useState();

  return (
    <div>
      <div class="X">
        <h1>Online Letter Count Tool</h1> 
        <label for="text"> Letter Count = <span id="count"> {text?.length ?? 0} </span></label> <br />
        <textarea className='text-area' value={text} onChange={(e) => setText(e.target.value)} id="text" maxlength="99999999" spellcheck="false" autocomplete="off" placeholder="Type or paste text here..."></textarea>
      </div>
    </div>
  );
}

export default App;
