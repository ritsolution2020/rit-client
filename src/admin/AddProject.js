import React, { useState, useEffect } from 'react';
import Menu from '../core/Menu';
import { isAuthenticated } from '../auth';
import { Link } from 'react-router-dom';
import { createProject, getCategories } from './apiAdmin';

const AddProject = () => {
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
    error: '',
    createdProject: '',
    redirectToProfile: false,
    formData: ''
  });

  const { user, token } = isAuthenticated();
  const {
    name,
    link,
    description,
    categories,
    loading,
    error,
    createdProject,
    formData
  } = values;

  // load categories and set form data
  const init = () => {
    getCategories().then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          categories: data,
          formData: new FormData()
        });
      }
    });
  };

  useEffect(() => {
    init();
  }, []);

  const handleChange = name => e => {
    const value = name === 'photo' ? e.target.files[0] : e.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const clickSubmit = e => {
    e.preventDefault();
    setValues({ ...values, error: '', loading: true });

    createProject(user._id, token, formData).then(data => {
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
          createdProject: data.name
        });
      }
    });
  };

  const newPostForm = () => (

    <form className="mb-3 " onSubmit={clickSubmit}>
      <div className='text-center'>

        <h5>Image</h5>
        <div className="">
          <label className="btn  ">
            <input
              className="form-control border-0 ml-0"
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

        <button className="btn btn-outline-danger ">Create Project</button>
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
      <h2>{`${createdProject}`} is created!</h2>
    </div>
  );

  const showLoading = () =>
    loading && (
      <div className="alert alert-success">
        <h2>Loading...</h2>
      </div>
    );

  return (
    <div >
      <div class="button_cont"><a href="/admin/dashboard" className="BackHome" >
            <i class="fas fa-angle-double-left"></i>  Back to Dashboard </a>
                
                </div>
      <div className="row w-100">

        <div className=" container mt-5">
          {showLoading()}
          {showSuccess()}
          {showError()}
          {newPostForm()}
        </div>
      </div>

    </div>
  );
};

export default AddProject;