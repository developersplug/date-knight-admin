import React, { useState,useEffect } from 'react';
import { Routes, Route, useLocation,useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Body from './components/Body/Body';
import VisitorApproval from './components/VisitorApproval/VisitorApproval';
import CandidateApproval from './components/CandidateApproval/CandidateApproval';
import ManageEvent from './components/ManageEvent/ManageEvent';
import ProfilePopup from './components/ProfilePopup/ProfilePopup';
import ManageWinner from './components/ManageWinner/ManageWinner';
import Loginpage from './components/Login/Loginpage';
import Signuppage from './components/Signup/Signuppage';


const App = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const [isLoginPopupVisible, setLoginPopupVisible] = useState(false);

  

 

  const location = useLocation(); // To track the current route
  const navigate = useNavigate(); // To navigate programmatically

  useEffect(() => {
    // Close the login popup when navigating to a different route
    if (location.pathname !== "/") {
      setLoginPopupVisible(false);
    }
  }, [location.pathname]);

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the login page
  };

  const handleSignupClick = () => {
    navigate('/signup'); // Navigate to the signup page
  };

  const closeLoginPopup = () => {
    setLoginPopupVisible(false);
  };

 

  const handleProfileClick = (content) => {
    setPopupContent(content);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>

      <div className={`flex  h-screen ${isPopupVisible ? 'blur-sm' : ''}`}>

      {location.pathname !== '/login' && location.pathname !== '/signup' &&(
        <>
        <Sidebar toggleSideBar={toggleSideBar} isOpen={isOpen} onLoginClick={handleLoginClick} />

        <div className="max-w-[100%] w-[1050px] overflow-auto flex-auto  ">
          <Routes>
            <Route path="/" element={<Body isBlurred={isLoginPopupVisible} />}>
              <Route index element={<VisitorApproval onProfileClick={handleProfileClick} />} />
              <Route path="candidate-approval" element={<CandidateApproval onProfileClick={handleProfileClick} />} />
              <Route path="manage-event" element={<ManageEvent />} />
              <Route path="manage-winner" element={<ManageWinner />} />
            </Route>
              {/* <Route path="/signup" element={<Signuppage />}/> */}
             
          </Routes>
         
        </div>
        </>
      )}
      </div>

      {location.pathname === '/login' && <Loginpage onClose={closeLoginPopup}  />}
      {location.pathname === '/signup' && <Signuppage onSignup={ handleSignupClick} />}

      {isPopupVisible && (
        <ProfilePopup closePopup={closePopup}>
          {popupContent}
        </ProfilePopup>
      )}

      {isLoginPopupVisible && <Loginpage onClose={closeLoginPopup} />}
      <div><Toaster/></div>
    </>

  );
};

export default App;
