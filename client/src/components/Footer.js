import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="main-footer" className="bg-dark">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <p> Hi-Worker Copyright &copy; {new Date().getFullYear()}</p>
              </div>
            </div>
          </div>
        </footer>

      </div>
    )
  }
}
