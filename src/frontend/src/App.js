import "./App.css"
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom"

import { MuiPickersUtilsProvider } from "@material-ui/pickers"
import MomentUtils from "@date-io/moment"
import Notes from "./pages/Notes/index"

function App() {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/ui/notes" component={Notes} />
        </Switch>
        <Redirect to="/ui/notes" />
      </BrowserRouter>
    </MuiPickersUtilsProvider>
  )
}

export default App
