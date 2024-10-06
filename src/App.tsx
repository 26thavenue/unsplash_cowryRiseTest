import Home from "./pages/Home"
import SearchResult from "./pages/SearchResult"; // Assuming this is the search results page
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route

const App = () => {
  return (
    <div className="min-h-[100vh]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:query" element={<SearchResult />} />
      </Routes>
    </div>
  );
};

export default App;
