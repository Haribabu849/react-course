import React from "react";
import Styles from "./Styles";
import Javascript from "./Javascript";
import Button from "./Button";
import UserListComponent from "./UserListComponent";
import ConditionalRendering from "./ConditionalRendering";
import ReactFragment from "./ReactFragment";
import Events from "./Events";
import State from "./State";
import FormState from "./FormState";
import TodoJs from "./TodoJs";
import "./styles.css";
import Some from "./Some";
import Effect from "./Effect";
import SomeEffect from "./SomeEffect";
import Datafetching from "./datafetching";
import TodoApplication from "./TodoApplication";
import ContexApi from "./ContexApi";
import Reducer from "./Reducer";
import RefContainer from "./RefContainer";
import Memo from "./memo";
import Callback from "./callback";
import ReactMemo from "./ReactMemo";
import CustomHook1 from "./CustomHook1";
import CustomHook2 from "./CustomHook2";
import { Outlet, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import About from "./About";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Parent from "./Parent";
import Element from "./Element";
import NotFound from "./NotFound";
import Params from "./Params";
import SearchParams from "./SearchParams";
import ProtectedRoute from "./ProtectedRoute";
import Unauthorized from "./Unauthorized";
import Admin from "./Admin";

// props can be passed from parent to child
const App = () => {
  const isAuthenticated = false; // Example authentication state
  const isAdmin = false;
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<h1>This is login page</h1>} />
        <Route path="/" element={<HomePage />} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/admin" element={<Admin isAdmin={isAdmin} />}>
          <Route path="dashboard" element={<h1>Admin Dashboard</h1>} />
          <Route path="settings" element={<h1>Admin Settings</h1>} />
        </Route>

        {/* <Route path="/products" /> */}
        <Route path="/parent" element={<Parent />}>
          <Route index element={<h1>Child Component</h1>} />
          <Route path="child2" element={<h1>child component 2</h1>} />
        </Route>
        <Route path="/parent/child" element={<Element />}>
          <Route path="child2" element={<h1>Child 2 Component</h1>} />
          <Route path="child3" element={<h1>Child 3 Component</h1>} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/posts/:id" element={<Params />} />
        <Route path="/data" element={<SearchParams />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </>
  );
};

export default App;
