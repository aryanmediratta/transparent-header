import React, {Component, Fragment} from 'react';

import M from 'materialize-css/dist/js/materialize.min.js';

const ps = {
  fontSize : '20px'
}

//        <li><a href="/about" className="cyan-text text-lighten-4" style = {ps}>About Us</a></li>
//        <li><a href="/about">About Us</a></li>

class Header extends Component {

componentDidMount(){

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

			}

	render(){

		return(
<div>
      <Fragment>
      <div className = "row">
      <div className = "col s6 m3 l3">
      <a href="/" className="brand-logo black-text left" style = {ps}>Brand Name</a>
      </div>
      <div className = "col s5 m9 l9">
      <div className="right">
              <div className = "hide-on-small-only">

           <a href="/tab 1" className="black-text" style = {ps}>tab 1</a>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/contact" className="black-text" style = {ps}>tab 2</a>
        </div>
        <div className = "hide-on-med-and-up">
          <a href="#" data-target="mobile-demo" className="right sidenav-trigger black-text" ><i className="material-icons">tab 1</i></a>
  <ul className = "sidenav" id="mobile-demo">
        <li><a href = "/">Home</a></li>
        <li><a href = "/tab 1">tab 1</a></li>
        <li><a href = "/contact">tab 2</a></li>
  </ul>
            </div>
      </div>
            <div className = "col s1">
              </div>
      </div>
      </div>
      </Fragment>
      </div>
                   )
	}
}



export default Header;
