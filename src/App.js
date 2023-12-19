// import logo from './assets/logo.svg';
import './styles/App.css';
import './styles/index.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from "./components/homepage/homepage";
import Resume from "./components/resume/resume";


const App = () => {
  return (
      <Router>
        <div>
          {/* Your navigation or header can go here */}

          <Routes>

              {/* Define routes for each page */}
              <Route path="/" element={<HomePage />} />
              <Route path="/Resume" element={<Resume />} />


            {/* Add a default route for handling 404 errors */}
            <Route render={() => <div>404 Not Found</div>} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
