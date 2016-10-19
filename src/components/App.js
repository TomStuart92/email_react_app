import React from 'react';
import Body from './Body'
import base from '../base';


class App extends React.Component {
  constructor(){
    super();
    this.loadSamples = this.loadSamples.bind(this);
    this.state = {
      emails: {}
    };
  }
  render(){
    return(
      <Body emails={this.state.emails}/>
    )
  }
  loadSamples(){
   this.setState({
     emails: {one: {subject: "Hello World", date: "01/01/2001", from: "Tom Stuart", body: "Hello World This is my first ever email!"},
      two: {subject: "Hello World", date: "01/01/2001", from: "Rosie", body: "Hello World This is my first ever email!"}}
   });
 }

  componentWillMount(){
    this.ref = base.syncState(`emails`
      ,{
      context: this,
      state: 'emails'
    });
  }
}

export default App;
