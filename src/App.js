import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Import necessary components and hooks
import ItemsPage from "./Pages/ItemsPage";
import ArticlePage from "./Pages/ArticlePage";

function App() {
  return (
    <Router> 
      <div className="App">
      
        <nav>
          <ul>
            <li>
              <Link to="/">First Half</Link>
            </li>
            <li>
              <Link to="/articles">Second Half</Link>
            </li>
          </ul>
        </nav>
        
        <Routes> 
          <Route path="/" element={<ItemsPage />} />
          <Route path="/articles" element={<ArticlePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
