import React, { Component } from 'react'
import {Form,Button} from "react-bootstrap"

export default class CarForm extends Component {
  state = {make:"", model:"",price:""}


  componentDidMount() {
    if (this.props.id) {
      const { id,make,model,price} = this.props 
      this.setState({ id,make,model,price})
    }
  }

  handleChange = (e) => {
    const {name,value} = e.target
    this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.props.id){
      const {updateCar} = this.props
      updateCar(this.state)
    }else{
    this.props.addCar(this.state)
    }
  }



  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group>
              <Form.Label>Make</Form.Label>
              <Form.Control
                name="make"
                value={this.make}
                onChange={this.handleChange}
                placeholder="Make of Car"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Model</Form.Label>
              <Form.Control
                 name="model"
                 value={this.model}
                 onChange={this.handleChange}
                 placeholder="Model of Car"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Year</Form.Label>
              <Form.Control
                 name="price"
                 value={this.price}
                 onChange={this.handleChange}
                 placeholder="Price of Car"
              />
            </Form.Group>
            </Form.Row>
            <Button type='submit' block>Submit</Button>
        </Form>
        
      </div>
    )
  }
}
