import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './core/Home';
import PrivateRoute from './auth/PrivateRoute';
import Dashboard from './user/UserDashboard';
import AdminRoute from './auth/AdminRoute';
import AdminDashboard from './user/AdminDashboard';
import AddCategory from './admin/AddCategory';
import AddProject from './admin/AddProject';
import Projects from './core/Projects';
import Team from './core/Team';
import Profile from './user/Profile';
import ManageProjects from './admin/ManageProjects';
import UpdateProject from './admin/UpdateProject';
// import UpdateCategory from './admin/updateCategory';

const Routes = () => {
  return (

    <BrowserRouter>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <AdminRoute path="/create/category" exact component={AddCategory} />
        <AdminRoute path="/create/project" exact component={AddProject} />
        <Route path="/team" exact component={Team} />
        <PrivateRoute path="/admin/projects" exact component={ManageProjects} />
        <PrivateRoute path="/profile/:userId" exact component={Profile} />
        <AdminRoute path="/admin/project/update/:projectId" exact component={UpdateProject} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;


//                 <AdminRoute path="/admin/category/update/:categoryId" exact component={UpdateCategory} />