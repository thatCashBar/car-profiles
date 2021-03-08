import React from "react";
import { cars } from "../utils/data";
import Form from "../components/form";
import Item from "../components/item";

class List extends React.Component {

  state = {
    showForm: false,
    cars: cars 
  };

  handleDelete = () => {
    // Stuff
  };


  handleForm = () => {
    this.setState({
      showForm : !this.state.showForm
    })
  }

  handleSubmit = (newCar) => {
    this.setState({
      cars : this.state.cars.concat(newCar),
      showForm: false
    })
  };

  displayCars = () => {
    if (this.state.showForm)
    {
      return (
        <Form handleSubmit={this.handleSubmit}/>
      );
    }
    else
    {
      return (
        this.state.cars.map((car, index) => { 
          return (
            <Item key={index} item={car}/>
          )
        })
      );
    }
  };

  render() {
    console.log(this.state.cars);
    return (
      <div>
        <h2>Cars for Sale</h2> 
        <button onClick={this.handleForm}>Add A Car!</button>
        <h2>Conditionally Render List of Items or Form to Add Car</h2>
        {this.displayCars()}
      </div>
    );
  }
}

export default List;