import React, { Component } from 'react';

export default class Bomb extends React.Component {

constructor(props) {
  super(props)
  this.state = { secondsLeft: this.props.initialCount }
}

bombText = () => {
return (this.state.secondsLeft > 0) ? `${this.state.secondsLeft} seconds left before I go boom!` : 'Boom!';
}
    
render() { return (this.bombText()) }

}