import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import About from './about';
import Contact from './contact';
import Post from './post';
import NewPost from './new-post';
import Navbar from './Navbar';
import LoginForm from "./LoginForm";
import { useParams } from 'react-router-dom';
import IdRender from "./IdRender";

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post" element={<Post />} />
          <Route path="/new-post" element={<NewPost />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/posts/:id" element={<IdRender />} />



        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);