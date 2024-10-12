import type { ReactNode } from 'react';
import './App.css';
import {IntlProvider, FormattedMessage} from 'react-intl'

function Subtitle({ children }: { children: ReactNode }) {
  return <span>{children}</span>;
}

function App() {
  return (
    <IntlProvider locale="en">
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <Subtitle>
          <FormattedMessage
            id="app.subtitle"
            defaultMessage="Start editing to see some magic happen!"
          />
        </Subtitle>
      </div>
    </IntlProvider>
  );
}

export default App;
