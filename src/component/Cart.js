
import React, { Component } from 'react';
import {Card, Button } from 'react-bootstrap';
import warsaw from '../warsaw.png';
import barcelona from '../barcelona.png';
import istanbul from '../istanbul.png';
import rome from '../rome.png';
import mexicocity from '../mexicocity.png';
import curitiba from '../curitiba.png';


class Cart extends Component {
  render () { 
    return (
    <div>
    
    <div class="container">
    <div class="row">
    <div class="col-sm">
    <Card>

      <Card.Img variant="top" src={warsaw} />
      <Card.Body>
 
    <Card.Text>
    warsaw  <Button class="btn btn--small" variant="primary">SEE OPENINGS</Button>
    </Card.Text>
   
    </Card.Body>
    </Card>
    </div>


    <div class="col-sm">
    <Card>

      <Card.Img variant="top" src={barcelona} />
      <Card.Body>
 
    <Card.Text>
    Barcelona  <Button class="btn btn--small"  variant="primary">SEE OPENINGS</Button>
    </Card.Text>
   
    </Card.Body>
    </Card>
    </div>

    <div class="col-sm">
    <Card>

      <Card.Img variant="top" src={istanbul } />
      <Card.Body>
 
    <Card.Text>
    istanbul   <Button class="btn btn--small"  variant="primary">SEE OPENINGS</Button>
    </Card.Text>
   
    </Card.Body>
    </Card>
    </div>
</div>
<div class="container">
<div class="row">
<div class="col-sm">
<Card>

  <Card.Img variant="top" src={rome} />
  <Card.Body>

<Card.Text>
rome  <Button class="btn btn--small"  variant="primary">SEE OPENINGS</Button>
</Card.Text>

</Card.Body>
</Card>
</div>


<div class="col-sm">
<Card>

  <Card.Img variant="top" src={mexicocity} />
  <Card.Body>

<Card.Text>
mexicocity  <Button class="btn btn--small"  variant="primary">SEE OPENINGS</Button>
</Card.Text>

</Card.Body>
</Card>
</div>

<div class="col-sm">
<Card>

  <Card.Img variant="top" src={curitiba } />
  <Card.Body>

<Card.Text>
curitiba   <Button class="btn btn--small"  variant="primary">SEE OPENINGS</Button>
</Card.Text>

</Card.Body>
</Card>
</div>
</div>
</div>
</div></div>
 
    );
  }
}

export default Cart ;
  
 