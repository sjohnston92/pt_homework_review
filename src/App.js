import React, { Component,useState } from 'react'
import Cars from './Cars'
import {Container} from 'react-bootstrap'
import CarForm from './CarForm'

export default class App extends Component {


  state = {
    cars: [
      {id: 1, make:"Ford",  model: "F150", price:2500},
      {id: 2, make:"Honda" , model: "civic" ,price:50},
      {id: 3, make:"Toyota",  model:"corolla" , price:1000},
      {id: 4, make:"Benz" , model: "Sprinter" , price:50000},
    ]}

    getId = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    };


  addCar = (freshCar) => {
    const {cars} = this.state
    let newCar = {id: this.getId(),...freshCar}
    this.setState({cars:[...cars,newCar]})
  }


  removeCar = (id) => {
    const cars = this.state.cars.filter(car =>{
      if(car.id !== id){
        return car
      } 
    })
      this.setState({cars:[...cars]})
   
  }


  updateCar = (editCar) => {
    const {cars} = this.state
    const {id} = editCar
    this.setState({
      cars: cars.map(car => {
      if (car.id === id){
        return { ...editCar}
      }
      return car
      })
    })
  }




  render() {
    const {cars} = this.state
    return (
      <Container>
        <h1>Welcome to Dev Dealers </h1>
        <h5>We sell cars not drugs</h5>
        <CarForm addCar={this.addCar}/>

        <Cars 
        removeCar={this.removeCar}
        cars={cars}
        updateCar={this.updateCar}
        />
        
      </Container>
    )
  }
}

