import React from 'react';
import { Route } from 'react-router-dom'
import Home from './containers/Home'

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={Home} />
    </main>
  </div>
)

export default App;