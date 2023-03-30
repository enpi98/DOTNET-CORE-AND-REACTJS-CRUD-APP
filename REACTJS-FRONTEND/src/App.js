import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import ListUserComponent from './components/ListUserComponent';
import CreateUserComponent from './components/CreateUserComponent';
import UpdateUserComponent from './components/UpdateUserComponent.jsx';

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    
    let params = useParams();
    return (
      <Component
        {...props}
        router={{  params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

const UpdateUserComponentRoute = withRouter(UpdateUserComponent);

function App() {

  return (
    <div>
    <Router>  
            <div className="container">
            <Routes>
                    <Route path = "/" exact element = {<ListUserComponent />} ></Route>
                    <Route path = "/getUsers" element = {<ListUserComponent />} ></Route>
                    <Route path = "/add-user" element = {<CreateUserComponent/>}></Route>
                    <Route path = "/update-user/:id" element = {<UpdateUserComponentRoute/>}></Route>   
            </Routes>      
            </div>
    </Router>
</div> 
  );
}
export default App;