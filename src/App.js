
import React, { Component } from 'react';
//import Card from 'react-bootstrap';
//import { button } from 'react-bootstrap';


import Head from './component/Head';
import Cart from './component/Cart';
import Selogon from './component/Selogon';
import Parg from './component/Parg';
import Footer from './component/Footer';
import Prag2 from './component/Prag2';
import Mcart from './component/Mcart';
import Bonde from './component/Bonde';
import Bogcart from './component/Bogcart';
class App extends Component {
  render() {
    return (
      <div>
      <Head />
      <Selogon /> 
      <Parg />
      <Mcart />
      
      <Bonde />
      <Bogcart />
      <Prag2 />
      <Cart />
<Footer />
      </div>
    )
    
    ;
  }
}
export default App ;