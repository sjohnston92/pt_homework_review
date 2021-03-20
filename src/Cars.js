import React,{useState} from 'react'
import Car from './Car'


const Cars = ({cars,removeCar,updateCar}) => {

  const renderCars = () => {
    return cars.map((car =>{
      return(
        <div>
        <Car {...car} removeCar={removeCar} updateCar={updateCar}
        />
        </div>
      )
    }))
  }


  return (
    <div>
      {renderCars()}
    </div>
  )
}

export default Cars

