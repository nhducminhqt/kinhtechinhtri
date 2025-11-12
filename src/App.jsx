import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import Home from "./pages/Home";
import Theory from "./pages/Theory";
import Practice from "./pages/Practice";
import Quiz from "./pages/Quiz";
import AIUsage from "./pages/AIUsage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/theory" element={<Theory />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/ai-usage" element={<AIUsage />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
