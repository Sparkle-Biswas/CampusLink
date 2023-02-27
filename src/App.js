<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
//import NavBar from './Components/NavBar';
import "./App.css";
import handleSubmitTest from "./Backend/handleSubmit-test";
import { useRef } from "react";
import CourseContent from "./Components/CourseContent"
import NavBar from "./Components/NavBar"
import Login from "./Components/Login";
import ClassListCC from "./Components/ClasslistCC";
=======
import RegistrationPage from './Components/RegistrationPage';
>>>>>>> 816cbd1 (Added banner to registration page)

function App() {
  /* Backend testing code
  const testBackend = false;
  const dataRef = useRef();
  const submithandler = (e) => {
    e.preventDefault();
    handleSubmitTest(dataRef.current.value);
    dataRef.current.value = "";
  }; */

  // For Backend testing only, will remove later
  /* if (!testBackend) return <Login />;
  return (
<<<<<<< HEAD
    <div className="App">
      <form onSubmit={submithandler}>
        <input type="text" ref={dataRef} />
        <button type="submit">Save</button>s
      </form>
    </div>
  ); */

  return <ClassListCC />;

=======
import logo from "./logo.svg";
=======
>>>>>>> 0c9d360 (Add backend testing code)
import "./App.css";
import Login from "./Components/Login";
import {
  createStudent,
  removeStudent,
  getStudentIdByEmail,
} from "./Backend/student";
import { useRef, useState } from "react";
import RegistrationForm from "./Components/RegistrationForm";
import RegistrationPage from "./Components/RegistrationPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // Backend testing code
  const testBackend = false;

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  // Helper functions
  const addStudentHandler = (e) => {
    e.preventDefault();
    createStudent(first, last, email, pass);
    setFirst("");
    setLast("");
    setEmail("");
    setPass("");
  };

  const getStudentHandler = (e) => {
    e.preventDefault();
    getStudentIdByEmail(email);
    setEmail("");
  };

  const delStudentHandler = async (e) => {
    e.preventDefault();
    const id = await getStudentIdByEmail(email);
    removeStudent(id);
    setEmail("");
  };

<<<<<<< HEAD
  return <Login />;
>>>>>>> 270941a (Added Basic Login Page)
=======
  // For Backend testing only, will remove later
  if (!testBackend) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}>
          <Route index element={<Login/>}/>
          <Route path="registration" element={<RegistrationPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    );
  } else {
    return (
    <div className="App">
      <form onSubmit={addStudentHandler}>
        <input
          type="text"
          value={first}
          onChange={(e) => {
            setFirst(e.target.value);
          }}
        />
        <input
          type="text"
          value={last}
          onChange={(e) => {
            setLast(e.target.value);
          }}
        />
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          value={pass}
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <button type="submit">Save</button>
      </form>
      <form onSubmit={getStudentHandler}>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button type="submit">Find</button>
      </form>
      <form onSubmit={delStudentHandler}>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button type="submit">Remove</button>
      </form>
=======
    <div ClassName='App'>
      <RegistrationPage></RegistrationPage>
>>>>>>> 816cbd1 (Added banner to registration page)
    </div>
  );
<<<<<<< HEAD
>>>>>>> 0c9d360 (Add backend testing code)
=======
        }
>>>>>>> bf73a88 (Attempted to redirect using react router)
}

export default App;