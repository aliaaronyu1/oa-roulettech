import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './routes/home/home.component';
import Navigation from "./routes/home/navigation/navigation.component";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home />} />
        <Route path='h' element={<h1>asdf</h1>}/>
      </Route>

    </Routes>
  );
}

export default App;