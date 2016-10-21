import React from 'react';



class Email extends React.Component {

  constructor(){
    super();
    this.viewSingleEmail = this.viewSingleEmail.bind(this);
  }

  viewSingleEmail(e){
    event.preventDefault();
    const emailID = this.props.ID;
    this.context.router.transitionTo(`/emails/${emailID}`)
  }

  render(){
    return(
      <tr onClick={(e) => this.viewSingleEmail(e)}>
        <td className="mdl-data-table__cell--non-numeric date">{this.props.details["date"]}</td>
        <td className="mdl-data-table__cell--non-numeric from">{this.props.details["from"]|| this.props.details["to"]}</td>
        <td className="mdl-data-table__cell--non-numeric subject">{this.props.details["subject"]}</td>
        <td className="mdl-data-table__cell--non-numeric body">{this.props.details["body"]}</td>
      </tr>
    )
  }
}

Email.contextTypes = {
  router: React.PropTypes.object
}


export default Email;
