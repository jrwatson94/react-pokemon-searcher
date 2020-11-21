import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state ={
    clicked: false
  }
  clickHandler =() => {
    this.setState({clicked: !this.state.clicked})
  }
  toggle = () => {
    if (this.state.clicked == false){
      return this.props.sprites.front
    }
    else{
      return this.props.sprites.back
    }
  }
  render() {
    return (
      <Card>
        <div className="container" onClick={this.clickHandler}>
          <div className="image">
            <img src={this.toggle()}></img>
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
            </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
