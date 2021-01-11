import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

// custom components
import Navbar from './components/layout/Navbar';
import Contact from './components/contact/ContactTable';
import AddContact from './components/contact/AddContact';
import EditContact from './components/contact/EditContact';

// css
import './styles/App.scss';

// redux
import { Provider } from 'react-redux';
import store from './store';

function App() { 

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <ReactNotification />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/" component={Contact} />
                <Route exact path="/contacts/add" component={AddContact} />
                <Route exact path="/contacts/edit/:id" component={EditContact} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
