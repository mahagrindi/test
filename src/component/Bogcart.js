
import React, { Component } from 'react';

import Insaid from './Insaid';
import Pralnsaid from './PraInsaid';
class Bogcart extends Component {
  render () { 
    return (
<div id ="Bog">
  <div class ="row">
  
  <div class =" col-md"> <Pralnsaid/>
  </div>
  <div class =" col-md"><Insaid />
  </div>
  
  </div>
       
  </div>

    );
  }
}

export default Bogcart ;
  

