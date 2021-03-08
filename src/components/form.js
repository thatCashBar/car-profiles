import React from "react";

class Form extends React.Component {

  state = { 
    // car: values
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="Year" name="Year" onChange={this.handleOnChange}/>
        <input placeholder="Make" name="Make" onChange={this.handleOnChange}/>
        <input placeholder="Model" name="Model" onChange={this.handleOnChange}/>
        <input placeholder="Color" name="Color" onChange={this.handleOnChange}/>
        <input placeholder="Price" name="Price" onChange={this.handleOnChange}/>
        <input placeholder="Seller" name="Seller" onChange={this.handleOnChange}/>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;