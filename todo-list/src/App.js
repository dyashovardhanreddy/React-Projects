import './App.css';
import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { AppContextProvider } from './context/AppContext';

function App() {
  return (
    <AppContextProvider>
      <div className='container'>
        <Header/>
        <AddTask/>
        <TaskList/>
      </div>
      
    </AppContextProvider>
  )
}

export default App;
