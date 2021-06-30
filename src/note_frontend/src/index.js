import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import { theme } from "asset/jss/theme"
import { ApolloProvider } from "@apollo/client"
import { client } from "./GraphqlClient"

const customTheme = createMuiTheme(theme)
ReactDOM.render(
  <MuiThemeProvider theme={customTheme}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </MuiThemeProvider>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
