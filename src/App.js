import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Import necessary components and hooks
import ItemsPage from "./Pages/ItemsPage";
import ArticlePage from "./Pages/ArticlePage";
import Navigation from "./components/navigation";

function App() {
  return (
    <Router> 
      <div className="App">
      
    <Navigation />
        
        <Routes> 
          <Route path="/" element={<ItemsPage />} />
          <Route path="/articles" element={<ArticlePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
