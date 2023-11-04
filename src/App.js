import './App.css'
import React,{useState} from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =() => {
  const [country,setCountry] = useState('in')
  const [progress, setProgress] = useState(0)
  const pageSize=15;
  const apiKey=process.env.REACT_APP_NEWS_API;
  return (
    <div>
      <Router>
        <Navbar setCountry={setCountry} country={country} />
        {/*top loading bar*/}
        <LoadingBar color='#f11946' progress={progress}/>
        <Routes>
          <Route exact path="/general" element={<News setProgress={setProgress} key="general" apiKey={apiKey} pageSize={pageSize} country={country} category="general" />} />
          
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" apiKey={apiKey} pageSize={pageSize} country={country} category="business" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" apiKey={apiKey} pageSize={pageSize} country={country} category="sports" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" apiKey={apiKey} pageSize={pageSize} country={country} category="entertainment" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} key="health" apiKey={apiKey} pageSize={pageSize} country={country} category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} key="science" apiKey={apiKey} pageSize={pageSize} country={country} category="science" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" apiKey={apiKey} pageSize={pageSize} country={country} category="technology" />} />
        </Routes>
      </Router> 
    </div>
  )
}
export default App;
