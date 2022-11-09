import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { AppStyles } from "./App.styled";
import HomePage from './components/HomePage/HomePage.js'; 

export default function App() {
  return (
    <Router>
      <AppStyles>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<HomePage />} />
        </Routes>

      </AppStyles>
    </Router>
  );
}

function About() {
  return <h1>This is About page</h1>;
}

function Users() {
  return <h1>This is Users page</h1>;
}