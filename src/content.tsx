import React from "react";
import { FormattedMessage} from "react-intl";

import logo from "./logo.svg";

function Test({ children }: { children: React.ReactNode }) {
  return <span>
    {children}
  </span>
}

export default function Content() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/*<Test>*/}
      {/*  <FormattedMessage*/}
      {/*    id={"app.content.header"}*/}
      {/*    defaultMessage=""*/}
      {/*  />*/}
      {/*</Test>*/}
    </div>
  )
}
