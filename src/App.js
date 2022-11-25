import logo from './logo.svg';
import './App.css';
import User from './components/User';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Post from './components/Post';
import Comment from './components/Comment';

function App() {
  
  
  

  return (
    

    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<User/>}/>  
        <Route path="/post/:id" element={<Post/>}/>  
        <Route path="/comment/:id" element={<Comment/>}/>  
        </Routes>
      </Router>
      
      
      
    </div>

      
  )
}

export default App;
