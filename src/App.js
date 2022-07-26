import React, { useEffect } from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import EmailList from './pages/EmailList';
import Mail from './pages/Mail';
import SendMail from './components/SendMail';
import Login from './pages/Login'
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import { auth } from './firebase';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(()=>{
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      }
    })
  }, [])

  return (
    <Router>

      {!user ? (
        <Login/>
      ) : (
        <div className='app'>
            <Header />
          <div className='app__body'>
            <Sidebar />
            <Routes>
              <Route path='/mail' element={<Mail/>}/>
              <Route path='/' element={<EmailList/>}/>
            </Routes>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}

      
    </Router>
    
  );
}

export default App;
