import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'
import Search from './Search'

class PokemonCollection extends React.Component {
  state ={
    pokemon: this.props.pokemon
  }
  renderPokemon = () => {
    console.log(this.state)
    return this.state.pokemon.map(pokemon =>
      <PokemonCard key={pokemon.id} {...pokemon}/>
    )
  }
  search = (input) => {
    let filteredArray = this.props.pokemon.filter(pokemon => 
      pokemon.name.includes(input.toLowerCase()))
    this.setState({pokemon: filteredArray})
  }
  render() {
    return (
      <div>
        <Search search = {this.search}/>
        <br />
        <Card.Group itemsPerRow={6}>
          {this.renderPokemon()}
        </Card.Group>
      </div>
      
    )
  }
}

export default PokemonCollection
