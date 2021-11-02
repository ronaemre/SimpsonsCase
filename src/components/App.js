import React from 'react'
import Users from './Users/Users'
import WebNavbar from './WebNavbar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from './Details';


export default function App() {
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
            


          ></Route>







        </Switch>
      </div>
    </Router>
  )
}
