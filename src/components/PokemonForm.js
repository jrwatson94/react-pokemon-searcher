import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  state ={
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""
  }
  changeHandler = (event)=> {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  }
  submitHandler = () => {
    const data = {
      name: this.state.name,
      hp: parseInt(this.state.hp),
      sprites: {
        front: this.state.frontUrl,
        back: this.state.backUrl
      }
    }
    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data) 
    })
    this.setState(
      {
        name: "",
        hp: "",
        frontUrl: "",
        backUrl: ""
      }
    )
  }
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.submitHandler}>
          <Form.Group widths="equal">
            <Form.Input onChange={this.changeHandler} fluid label="Name" placeholder="Name" name="name" value={this.state.name}/>
            <Form.Input onChange={this.changeHandler} fluid label="hp" placeholder="hp" name="hp" value={this.state.hp}/>
            <Form.Input onChange={this.changeHandler} fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl}/>
            <Form.Input onChange={this.changeHandler} fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }

}

export default PokemonForm
