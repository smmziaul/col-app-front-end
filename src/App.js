import './App.css';
import Header from "./components/Header"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import CollegeList from './components/CollegeList';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import CollegeDetails from './components/CollegeDetails';

import { Layout } from 'antd';
const { Footer, Sider, Content } = Layout;

function App() {
  return (

    <Layout>
      <Header />
      <Content>
        <Router>
          <Switch>
            <Route path="/colleges/list">
              <CollegeList />
            </Route>
            <Route path="/colleges/view">
              <CollegeDetails />
            </Route>
            <Route path='/'>
              <Redirect to="/colleges/list" />
            </Route>
          </Switch>
        </Router>
      </Content>
      {/* <Footer>Footer</Footer> */}
    </Layout>
  );
}

export default App;
