import React from 'react';

class NewEmail extends React.Component {
  constructor(){
    super();
    this.createEmail = this.createEmail.bind(this);
  }

  createEmail(event){
    event.preventDefault();
    var date = new Date
    var formattedDate = date.toDateString();
    var email = {
      to: this.to.value,
      date: formattedDate,
      subject: this.subject.value,
      body: this.body.value
    }
    this.props.sendEmail(email)
    this.context.router.transitionTo(`/`)
  }

  render(){
    return(
      <form className = "new-email" ref={(input) => this.fishForm = input} onSubmit ={(e) => this.createEmail(e) }>
        <div className="mdl-textfield mdl-js-textfield">
          <textarea ref={(input) => this.to = input} className="mdl-textfield__input" type="text" rows= "1" id="to" placeholder="To" required></textarea>
          <textarea ref={(input) => this.subject = input} className="mdl-textfield__input" type="text" rows= "1" id="subject" placeholder="Subject" required></textarea>
          <textarea ref={(input) => this.body = input} className="mdl-textfield__input" type="text" rows= "20" id="body" placeholder="Body" required></textarea>
          <div className="spacer"></div>
          <button type="submit" className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored right-button">
            <i className="material-icons">mail outline</i>
          </button>
        </div>
      </form>
    )
  }

}

NewEmail.contextTypes = {
  router: React.PropTypes.object
}



export default NewEmail;
