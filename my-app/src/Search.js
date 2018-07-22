import React, { Component } from 'react';

import './Search.css'

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLocInput: ''
    }
  } // end of constructor

  returnError = () => {
    if (this.props.ifError) return <h3>{this.props.loc} could not be found :( Please enter a different location</h3>

    return
  }

  render() {
    const { userLocInput } = this.state

    return (
      <form className="Search" onSubmit={ (e) => {
        e.preventDefault();
        this.props.updateLocation(userLocInput)
        this.setState({
          userLocInput: ''
        })
      }}>
        <input 
          type="text" 
          value={userLocInput}
          placeholder="CITY, STATE / ZIP"
          onChange={ (e) => {
            this.setState({ 
              userLocInput: e.target.value.toUpperCase()
            })
          }}
        />
        <button>Submit</button>
        { this.returnError() }
      </form>
      
    )
  }
} // end of class




