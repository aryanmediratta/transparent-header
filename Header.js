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
<Fragment>
      <div className = "row">
      <div className = "col s6 m2 l2">
      <a href="/" className="brand-logo cyan-text text-lighten-4 left" style = {ps}>Brand Name</a>
      </div>
      <div className = "col s5 m10 l10">
      <div className="right">
              <div className = "hide-on-small-only">

           <a href="/menu" className="cyan-text text-lighten-4" style = {ps}>Menu</a>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/contact" className="cyan-text text-lighten-4" style = {ps}>Contact Us</a>
        </div>
        <div className = "hide-on-med-and-up">
          <a href="#" data-target="mobile-demo" className="right sidenav-trigger cyan-text text-lighten-4" ><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down" >
              <li><a href="/menu" className="cyan-text text-lighten-4" style = {ps}>Menu</a></li>
              <li><a href="/contact" className="cyan-text text-lighten-4" style = {ps}>Contact Us</a></li>
            </ul>
            </div>
      </div>
            <div className = "col s1 m2 l2">
              </div>
      </div>
      </div>
      </Fragment>
                   )
	}
}



export default Header;


