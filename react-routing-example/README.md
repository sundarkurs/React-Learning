This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

1. Create react app using create-react-app

2. Install react-router (latest 4) and other modules
>npm install react-router-dom

Note: This package provides the core routing functionality for React Router, but you might not want to install it directly. If you are writing an application that will run in the browser, you should instead install react-router-dom. Similarly, if you are writing a React Native application, you should instead install react-router-native. Both of those will install react-router as a dependency.

### Routing configuration

    import { BrowserRouter, Route, Switch } from 'react-router-dom';
    
    <BrowserRouter>
        <div>
          <Navigation></Navigation>

          <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/contact" component={Contact} />
              <Route path="/about" component={About} />

              <Route component={Error} />

          </Switch>
        </div>
     </BrowserRouter>

### Navigation links

    import { NavLink } from "react-router-dom";
    
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/contact">Contact</NavLink>
