import './App.css';
import FileUpload from './components/fileUpload';

function App() {
  return (
    <div className='container mt-4'>
      <h4 className='display-4 text-center mb-4'>
        <i className='fab fa-react'/>File upload application
      </h4> 
      <FileUpload/>
    </div>
  );
}

export default App;
