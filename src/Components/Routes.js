import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home.js'
import About from './About.js'
import UserList from './UserList.js'
import SignUp from './SignUp.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
         <Scene key = "about" component = {About} title = "About" />
            <Scene key = "userlist" component = {UserList} title = "User List"/>
               <Scene key = "signup" component = {SignUp} title = "SignUp"/>
      </Scene>
   </Router>
)
export default Routes
