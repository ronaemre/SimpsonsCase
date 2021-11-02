import React from 'react'
import Users from './Users/Users'
import WebNavbar from './WebNavbar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from './Details';
import AddUser from './AddUser'
import { useState, useEffect } from 'react';
import axios from "axios"
import useStyles from './stylesDetails'


export default function App() {
  const classes = useStyles();
  const [user, setUsers] = useState([]);


  const getUsers = async () => {
    const response = await axios.get(`https://5fc9346b2af77700165ae514.mockapi.io/simpsons/`)
    setUsers(response.data)
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <Router>
      <div>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <React.Fragment>
                <WebNavbar />
                <Users />
              </React.Fragment>
            )}
          ></Route>
          <Route
            path="/details/:id"
            component={Details}
          >
          </Route>
          <Route
            path="/add"
            component={AddUser}
          >
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
