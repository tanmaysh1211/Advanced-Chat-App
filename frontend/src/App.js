import "./App.css";
import Homepage from "./Pages/Homepage.js";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage.js";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
    </div>
  );
}

export default App;