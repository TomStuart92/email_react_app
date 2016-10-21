import React from 'react';

class SingleEmail extends React.Component {

  constructor(){
    super();
    this.viewEmails = this.viewEmails.bind(this);
  }

  viewEmails(e){
    event.preventDefault();
    this.context.router.transitionTo(`/`)
  }

  render(){
    return(
      <div className="demo-card-wide mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">{this.props.details["subject"]} - {this.props.details["date"]}</h2>
        </div>
        <div className="mdl-card__supporting-text">
          {this.props.details["from"]||this.props.details["to"]}
        </div>
        <div className="mdl-card__actions mdl-card--border">
        </div>
        <div className="mdl-card__supporting-text">
          {this.props.details["body"]}
        </div>
        <div className="mdl-card__menu">
          <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"onClick={(e) => this.viewEmails(e)} >
            <i className="material-icons">clear</i>
          </button>
        </div>
      </div>
    )
  }
}

SingleEmail.contextTypes = {
  router: React.PropTypes.object
}


export default SingleEmail;
