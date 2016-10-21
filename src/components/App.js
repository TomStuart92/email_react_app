import React from 'react';
import Body from './Body'
import base from '../base';


class App extends React.Component {
  constructor(){
    super();
    this.sendEmail = this.sendEmail.bind(this);
    this.state = {
      inbox: {},
      sent: {}
    };
  }

  render(){
    return(
      <Body inbox={this.state.inbox}
            sent={this.state.sent}
            id={this.props.params.emailID}
            pathname={this.props.pathname}
            sendEmail = {this.sendEmail}/>
    )
  }

  sendEmail(email){
    const sent = {...this.state.sent};
    var date = new Date;
    sent[`email-${date}`] = email;
    this.setState({sent})
  }

  componentWillMount(){
    this.ref = base.syncState(`inbox`
      ,{
      context: this,
      state: 'inbox'
    });
    this.ref = base.syncState(`sent`
      ,{
      context: this,
      state: 'sent'
    });
  }

  componentWillUnmount(){
    base.removeBinding(this.ref);
    this.ref = base.syncState(`inbox`
      ,{
      context: this,
      state: 'inbox'
    });
    this.ref = base.syncState(`sent`
      ,{
      context: this,
      state: 'sent'
    });
  }

}





export default App;
