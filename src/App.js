import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');//whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      {/* <Navbar /> */}
      <Router>
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} aboutText="bout" />
        <Alert alert={alert} />
        <div className="container my-3">

          <Routes>
            <Route path="/about" element={<About mode={mode}/>}>
            </Route>
            <Route path="/"element={<TextForm showAlert={showAlert} heading="Enter the text" mode={mode} />}>
            </Route>
</Routes>

        </div>
      </Router>

    </>
  );
}

export default App;
