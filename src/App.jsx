import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signin from "./Components/Signin/Signin";
import Signup from "./Components/Signup/Signup"
import Forgot from "./Components/Forgot/Forgot";
import PanelRoute from "./Routes/PannelRoute";
import SchedulerRoute from "./Routes/ScheduleRoute";
import AccountsRoute from "./Routes/AccountsRoute";
import MessageRoute from "./Routes/MessageRoute";
import LessonRoute from "./Routes/LessonRoute";
import StatusRoute from "./Routes/StatusRoute";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/forgot-password" element={<Forgot/>}></Route>
        <Route path="/panel" element={<PanelRoute/>} />
        <Route path="/schedule" element={<SchedulerRoute/>}></Route>
        <Route path="/account" element={<AccountsRoute/>}></Route>
        <Route path="/message" element={<MessageRoute/>}></Route>
        <Route path="/status" element={<StatusRoute/>}></Route>
        <Route path="/Lesson" element={<LessonRoute/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
