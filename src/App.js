import yanxin from './yanxin.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>
          庄凡心生日快乐！
        </p>
        <img class="fanxin" src={yanxin} alt="fanxin"/>
        <br/>
        <a
          className="App-link"
          href="https://huati.weibo.com/5769150"
          target="_blank"
          rel="noopener noreferrer"
        >
          岑北南超话
        </a>
      </header>
    </div>
  );
}

export default App;
