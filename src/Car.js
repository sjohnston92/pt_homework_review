import React, { Component } from 'react'
import {Button, Card} from 'react-bootstrap'
import CarForm from './CarForm'

export default class Car extends Component {
  render() {
    const {make,model,price,id,removeCar,updateCar} = this.props
    return (
      <Card style={{padding:"10px", margin:'20px'}}>
        <h5>{make}</h5>
        <h5>{model}</h5>
        <h5>{price}</h5>
        <CarForm  {...this.props}/>
        <Button variant="danger" onClick={()=> removeCar(id)}>Delete</Button>
        
      </Card>
    )
  }
}
