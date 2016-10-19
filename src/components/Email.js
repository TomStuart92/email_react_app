import React from 'react';


class Email extends React.Component {
  render(){
    return(
      <tr>
        <td className="mdl-data-table__cell--non-numeric date">{this.props.date}</td>
        <td className="mdl-data-table__cell--non-numeric from">{this.props.from}</td>
        <td className="mdl-data-table__cell--non-numeric subject">{this.props.subject}</td>
        <td className="mdl-data-table__cell--non-numeric body">{this.props.body}</td>
      </tr>
    )
  }
}

export default Email;
