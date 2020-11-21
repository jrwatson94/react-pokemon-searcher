import React from 'react'

class Search extends React.Component{
  changeHandler = event => {
    this.props.search(event.target.value)
  }

  render(){
    return (
      <div className="ui search">
        <div className="ui icon input">
          <input onChange = {this.changeHandler} className="prompt"/>
          <i className="search icon" />
        </div>
      </div>
    )
  }
}

export default Search
