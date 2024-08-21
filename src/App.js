import { Routes, Route } from "react-router-dom";

import Home from './routes/home/home.component';
import Navigation from "./routes/home/navigation/navigation.component";

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home />} />
        <Route path='history' element={<h1>asdf</h1>}/>
      </Route>

    </Routes>
  );
}

export default App;