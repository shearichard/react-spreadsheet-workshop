import './App.css';
import MyAwesomeGrid from './components/myawesomegrid';

function App() {
  return (
    <div>
        <h1>Spreadsheet in React Project</h1>
        <div>
        <details>
        <summary><label>Stuff to Investigate ? ....</label></summary>
        <h2>Stuff to investigate</h2>
        <ul>
        <li>Pulling the initial data in from an external (or at least convincingly mocked) source. Use MirageJS ?</li>
        <li>Use 'onFieldChange' callback to trigger an update to the external (possibly mocked) source  ?</li>
        <li>Implement Lazy Loading using Use 'onScrollReachesBottom' callback. Example <a href="https://github.com/denisraslov/react-spreadsheet-grid#lazy-loading-support">here</a>.</li>
        </ul>
        </details>
        </div>
        <MyAwesomeGrid />
    </div>
  );
}

export default App;
