<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
//import NavBar from './Components/NavBar';
=======
>>>>>>> 169361c (Added Basic Login Page)
=======
>>>>>>> d1088b8 (created non-functionality navigation bar - 3 hours)
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
<<<<<<< HEAD
import Login from "./Components/Login";
<<<<<<< HEAD
<<<<<<< HEAD
import {
  createStudent,
  removeStudent,
  getStudentIdByEmail,
} from "./Backend/student";
import { useRef, useState } from "react";
=======
>>>>>>> 3eb1c0f (Consolidate assets)
import Admin from "./Components/Admin";
import Register from "./Components/Register";
=======
>>>>>>> d603b06 (Integrated FAQ page)
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "@emotion/styled";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Admin from "./Components/Admin";
import NavBar from "./Components/NavBar";
import HomepageInstructor from "./Components/HomepageInstructor";
import SettingsPage from "./Components/Settings";
import FAQ from "./Components/FAQ";

const Container = styled.div`
  display: flex;
`;
<<<<<<< HEAD
<<<<<<< HEAD

function App() {
<<<<<<< HEAD
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
=======
>>>>>>> 04f071b (Research React Router, fixed redirection)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
<<<<<<< HEAD
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
=======
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Components/Register";
import FAQ from "./Components/FAQ";
=======
>>>>>>> d603b06 (Integrated FAQ page)
=======
=======
//import NavBar from './Components/NavBar';
import "./App.css";
import handleSubmitTest from "./Backend/handleSubmit-test";
import { useRef } from "react";
import CourseContent from "./Components/CourseContent"
<<<<<<< HEAD
>>>>>>> 13af7b9 (created non-functionality navigation bar - 3 hours)
<<<<<<< HEAD
>>>>>>> d1088b8 (created non-functionality navigation bar - 3 hours)
=======
=======
import NavBar from "./Components/NavBar"
<<<<<<< HEAD
>>>>>>> d589644 (slight more set up to start work on front end of CourseContent page)
<<<<<<< HEAD
>>>>>>> ee6622c (slight more set up to start work on front end of CourseContent page)
=======
=======
import Login from "./Components/Login";
>>>>>>> 51aae89 (Finally moved logo to be stuck in the center)
>>>>>>> daab152 (Finally moved logo to be stuck in the center)

function App() {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Register />} />
        <Route
          path="/home"
          element={
            <Container>
              <NavBar />
              <HomepageInstructor />
            </Container>
          }
        />
        <Route
          path="/settings"
          element={
            <Container>
              <NavBar />
              <SettingsPage />
            </Container>
          }
        />
        <Route
          path="/faq"
          element={
            <Container>
              <NavBar />
              <FAQ />
            </Container>
          }
        />
        <Route path="/admin" element={<Admin />} />
=======
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register />} />
        <Route path="/faq" element={<FAQ />} />
>>>>>>> 40128b2 (Added skeletal FAQ page)
      </Routes>
    </Router>
<<<<<<< HEAD
>>>>>>> 4575726 (Update login page, added register page for testing)
=======
import NavBar from './Components/NavBar';
import HomepageStudent from './Pages/HomepageStudent';
import HomepageInstructor from './Pages/HomepageInstructor';
import Settings from './Pages/Settings';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
=======
=======
<<<<<<< HEAD
import NavBar from './Components/NavBar';
>>>>>>> 169361c (Added Basic Login Page)

function App() {
  return (
    <div ClassName='App'>
<<<<<<< HEAD
      <Router>
      <NavBar />
      <Routes>
      <Route exact path="/" element={<HomepageInstructor/>}/>
      <Route exact path="/HomepageStudent" element={<HomepageStudent/>}/>
      <Route exact path="/Settings" element={<Settings/>}/>
      </Routes>
      </Router> 
       
    </div>
>>>>>>> e212a60 (navigates to courses and settings pages - 1.5 hours)
  );
<<<<<<< HEAD
>>>>>>> 0c9d360 (Add backend testing code)
=======
        }
>>>>>>> bf73a88 (Attempted to redirect using react router)
=======
    </Router>
  );
>>>>>>> 04f071b (Research React Router, fixed redirection)
=======
      <NavBar></NavBar>
    <div ClassName='App'>
      <NavBar></NavBar>
    </div>
>>>>>>> aedb680 (Added Basic Login Page)
  );
=======
import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login";
import ClassListCC from "./Components/ClasslistCC";

function App() {
<<<<<<< HEAD
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
=======
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
    <div className="App">
      <form onSubmit={submithandler}>
        <input type="text" ref={dataRef} />
        <button type="submit">Save</button>s
      </form>
    </div>
  ); */

  return <ClassListCC />;
>>>>>>> ba1a3f8 (fixed and finalized navbar of course content overall page, created outline for backend to be added, started classlist portion)

  return <Login />;
>>>>>>> 270941a (Added Basic Login Page)
>>>>>>> 169361c (Added Basic Login Page)
}

export default App;