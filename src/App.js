import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting'
// import Greetingf from './components/pure/greetingF'
// import TaskListComponent from './components/container/task_list';
import ContactListComponent from './components/container/contact_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* <Greeting name="Anna" /> */}
        {/* <Greetingf name="Laura"/> */}

        {/* <TaskListComponent /> */}
        <ContactListComponent />

      </header>
    </div>
  );
}

export default App;
