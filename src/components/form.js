import React from "react";

class Form extends React.Component {

  state = { 
    // car: values
  }

  handleAddCar = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state);
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value,
      name: `${this.state.year} ${this.state.make} ${this.state.model}`
    })
  }

  render() {
    return (
      <form onSubmit={this.handleAddCar}>
        <input placeholder="Year" name="year" onChange={this.handleOnChange}/>
        <input placeholder="Make" name="make" onChange={this.handleOnChange}/>
        <input placeholder="Model" name="model" onChange={this.handleOnChange}/>
        <input placeholder="Color" name="color" onChange={this.handleOnChange}/>
        <input placeholder="Price" name="price" onChange={this.handleOnChange}/>
        <input placeholder="Seller" name="seller" onChange={this.handleOnChange}/>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;