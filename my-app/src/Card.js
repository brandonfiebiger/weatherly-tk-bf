import React, { Component } from 'react';

import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHourly: false
    }

    this.toggleHourly = this.toggleHourly.bind(this);
  }
  toggleHourly() {
    this.setState({
      showHourly: !this.state.showHourly
    });
  }

  render(){ 
    const { 
      day, 
      hour, 
      icon, 
      temp, 
      high, 
      low, 
      condition 
    } = this.props;

    return (
      <React.Fragment>
      <article className="Card" onClick={this.toggleHourly}>
        {day && <div>{day}</div>}
        {hour && <div>{hour}</div>}
        <img alt={condition} src={icon} />
        {temp && <div>{temp}</div>}
        {low && <div>{low}{high}</div>}
      </article>
       {day && this.state.showHourly && <ul>{'Hello'}</ul>}
      </React.Fragment>
    )
  }
}

export default Card;



  