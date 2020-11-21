import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'

import { Container } from 'semantic-ui-react'



class PokemonPage extends React.Component {
  state={
    pokemon: []
  }
  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(pokemon => {
      this.setState({pokemon:pokemon})
    })
  }


  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <PokemonCollection pokemon = {this.state.pokemon}/>
      </Container>
    )
  }
  
  
}

export default PokemonPage
