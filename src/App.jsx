// import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes";

function App() {
  return (
    <>
      <Router>
        <AppRoutes />
        {/* <PasswordGenerator/> */}
      </Router>
    </>
  );
}

export default App;