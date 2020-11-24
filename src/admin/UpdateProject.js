import React, { useState, useEffect } from 'react';
import Menu from '../core/Menu';
import { isAuthenticated } from '../auth';
import {
    //  Link,
 Redirect } from 'react-router-dom';
import { getProject, getCategories, updateProject } from './apiAdmin';

const UpdateProject = ({ match }) => {
    const [values, setValues] = useState({
        name: '',
        link: '',
        description: '',
        price: '',
        categories: [],
        category: '',
        shipping: '',
        quantity: '',
        photo: '',
        loading: false,
        error: false,
        createdProject: '',
        redirectToProfile: false,
        formData: ''
    });
    const [categories, setCategories] = useState([]);

    const { user, token } = isAuthenticated();
    const {
        name,
        link,
        description,
        price,
        // categories,
        category,
        shipping,
        quantity,
        loading,
        error,
        createdProject,
        redirectToProfile,
        formData
    } = values;

    const init = projectId => {
        getProject(projectId).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                // populate the state
                setValues({
                    ...values,
                    name: data.name,
                    link: data.link,
                    description: data.description,
                    price: data.price,
                    category: data.category._id,
                    shipping: data.shipping,
                    quantity: data.quantity,
                    formData: new FormData()
                });
                // load categories
                initCategories();
            }
        });
    };

    // load categories and set form data
    const initCategories = () => {
        getCategories().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setCategories(data);
            }
        });
    };

    useEffect(() => {
        init(match.params.projectId);
    }, []);

    const handleChange = name => event => {
        const value = name === 'photo' ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: '', loading: true });

        updateProject(match.params.projectId, user._id, token, formData).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    name: '',
                    link: '',
                    description: '',
                    photo: '',
                    price: '',
                    quantity: '',
                    loading: false,
                    error: false,
                    redirectToProfile: true,
                    createdProject: data.name
                });
            }
        });
    };

    const newPostForm = () => (
        <form className="mb-3" onSubmit={clickSubmit}>
      <div className='text-center'>

        <h4>Image</h4>
        <div className="">
          <label className="btn  ">
            <input
              className="form-control p-2"
              onChange={handleChange('photo')} type="file" name="photo" accept="image/*" />
          </label>
        </div>
      </div>
      <div className='row '>
        <div className='m-auto col-lg-6 col-md-6 col-sm-12'>



          <div className="">
            <label className="text-muted">Name</label>
            <input onChange={handleChange('name')} type="text" className="form-control" value={name} />
          </div>

          <div className="">
            <label className="text-muted">Web Link</label>
            <input onChange={handleChange('link')} type="url" className="form-control" value={link} />
          </div>

          <div className="">
            <label className="text-muted">Description</label>
            <textarea onChange={handleChange('description')} cols="30" rows="1" className="form-control" value={description} />
          </div>
          <div className="">
            <label className="text-muted">Category</label>
            <select onChange={handleChange('category')} className="form-control">
              <option>Please select</option>
              {categories &&
                categories.map((c, i) => (
                  <option key={i} value={c._id}>
                    {c.name}
                  </option>
                ))}
            </select>
          </div>
        
        </div>

      </div>
      <div className="text-center mt-4 mb-3">
            <button className="btn btn-outline-primary">Update Project</button>
            </div>
        </form>
    );

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: createdProject ? '' : 'none' }}>
            <h2>{`${createdProject}`} is updated!</h2>
        </div>
    );

    const showLoading = () =>
        loading && (
            <div className="alert alert-success">
                <h2>Loading...</h2>
            </div>
        );

    const redirectUser = () => {
        if (redirectToProfile) {
            if (!error) {
                return <Redirect to="/" />;
            }
        }
    };

    return (
        <div >
          <div class="button_cont"><a href="/admin/dashboard" className="BackHome" >
            <i class="fas fa-angle-double-left"></i>  Back to Dashboard </a>
                
                </div>
            <div className="row">
                <div className="container">
                    {showLoading()}
                    {showSuccess()}
                    {showError()}
                    {newPostForm()}
                    {redirectUser()}
                </div>
            </div>
        </div>
    );
};

export default UpdateProject;