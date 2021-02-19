import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import CreateRegister from './pages/CreateRegister'
import SuccessScreen from './components/SuccessScreen'
import ForgotPassword from './pages/ForgotPassword'
import Home from './pages/Home'
import TeacherProfile from './pages/TeacherProfile'
import TeacherForm from './pages/TeacherForm'
import TeacherList from './pages/TeacherList'

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/create-register" component={CreateRegister} />
      <Route path="/success-screen" render={props => <SuccessScreen {...props} />} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/home" component={Home} />
      <Route path="/teacher-profile" component={TeacherProfile} />
      <Route path="/teacher-form" component={TeacherForm} />
      <Route path="/teacher-list" component={TeacherList} /> 
    </BrowserRouter>
  )
}

export default Routes