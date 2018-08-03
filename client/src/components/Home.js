import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import classnames from 'classnames';


export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }

    axios
      .post('./api/users/register', newUser)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }))
  }

  render() {
    const { errors } = this.state;
    return (
      <div id="home-section">
        <div className="dark-overlay">
          <div className="home-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 d-lg-block">
                  <h1 className="display-4">Hire <strong> professionals </strong> to work on your projects Today!</h1>
                  <div className="d-flex flex-row">
                    <div className="p-4 align-self-start">
                      <i className="fa fa-child fa-lg"></i>
                    </div>
                    <div className="p-4 align-self-end">
                      We believe great things are never done by one person. Great stuffs are done together
                </div>
                  </div>

                  <div className="d-flex flex-row">
                    <div className="p-4 align-self-start">
                      <i className="fa fa-child fa-lg"></i>
                    </div>
                    <div className="p-4 align-self-end">
                      We belive in the diversity of our strengths... together we work, together we win
                </div>
                  </div>

                  <div className="d-flex flex-row">
                    <div className="p-4 align-self-start">
                      <i className="fa fa-child fa-lg"></i>
                    </div>
                    <div className="p-4 align-self-end">
                      We are driven by the passion of what we love to do which is your project
                </div>
                  </div>

                  <div className="d-flex flex-row">
                    <div className="p-4 align-self-start">
                      <i className="fa fa-child fa-lg"></i>
                    </div>
                    <div className="p-4 align-self-end">
                      We are here to bring your dreams to reality
                </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card bg-dark text-center card-form">
                    <div className="card-body">
                      <h3>Sign Up</h3>
                      <p>Please fill out this form to get started </p>
                      <form noValidate onSubmit={this.onSubmit}>
                        <div className="form-group">
                          <input
                            type="text"
                            className={classnames("form-control form-control-lg", { 'is-invalid': errors.name })}
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                            placeholder="Username" />
                          {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            className={classnames("form-control form-control-lg", { 'is-invalid': errors.email })}
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange}
                            placeholder="Email" />
                          {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className={classnames("form-control form-control-lg", { 'is-invalid': errors.password })}
                            name="password"
                            value={this.state.password}
                            onChange={this.onChange}
                            placeholder="Password" />
                          {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className={classnames("form-control form-control-lg", { 'is-invalid': errors.password2 })}
                            name="password2"
                            value={this.state.password2}
                            onChange={this.onChange}
                            placeholder="Confirm Password" />
                          {errors.password2 && (<div className="invalid-feedback">{errors.password2}</div>)}
                        </div>
                        <input type="submit" className="btn btn-outline-light btn-block" />
                        <hr className="hr" />
                        <p> Have an account ?</p>
                        <Link className="btn btn-outline-light btn-block" to="/login">Sign In</Link>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
