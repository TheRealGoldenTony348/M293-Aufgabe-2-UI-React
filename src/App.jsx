import logo from './logo.svg';
import './App.css';
import Checkbox from './components/Checkbox';
import { useState } from 'react';

function App() {
  const [sentMessage, setSentMessage] = useState("")
  const sendHandler = () => {
    setSentMessage("Abgesendet!")
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>

      <div className="box">
        <h1>React Umfrage </h1>
          <div>Name:</div>
          <label>
            <input className='inputField' name='myInput' />
          </label><br />
          <div>
            <div className='radioBox'>
              Geschlecht:
              <label>
                <input type="radio" name="myRadio" value="option1" />
                Männlich
              </label>
              <label>
                <input
                  type="radio"
                  name="myRadio"
                  value="option2"
                  
                />
                Weiblich
              </label>

              <label>
                <input type="radio" name="myRadio" value="option3" />
                Anderes
              </label>
              <label>
                <input type="radio" name="myRadio" value="option4" defaultChecked={true} />
                  Nicht Angeben
              </label>
            </div>
          </div>
          <br />
          <div className='middleBox'>
            <div>Mit welchen Sprachen haben sie schon geschafft?</div>
            <div>
              <Checkbox name="React"></Checkbox>

              <Checkbox name="C#"></Checkbox>

              <Checkbox name="Python"></Checkbox>

              <Checkbox name="Java"></Checkbox>

              <Checkbox name="Rust"></Checkbox>
            </div>
            <div>Andere: <input className='inputField' name='myInput' /></div>
          </div>
          <br />



          <button className='button' onClick={sendHandler} >Absenden</button>
          <br />
          <div>{sentMessage}</div>

        
      </div>
    </div>
  );
}

export default App;
