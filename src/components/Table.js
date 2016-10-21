import React from 'react';
import Email from './Email.js'

class Table extends React.Component {
  render(){
    var label
    var data
    if (this.props.outbox)
      {label = "To"
       data = this.props.outbox}
    else
      {label = "From"
      data = this.props.inbox}

    return(
      <table className="mdl-data-table mdl-js-data-table  mdl-shadow--2dp">
        <thead>
          <tr>
            <th className="mdl-data-table__cell--non-numeric date">Date Sent</th>
            <th className="mdl-data-table__cell--non-numeric from">{label}</th>
            <th className="mdl-data-table__cell--non-numeric subject">Subject</th>
            <th className="mdl-data-table__cell--non-numeric body">Body</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map( key => <Email key={key} ID={key} details={data[key]}/>)}
        </tbody>
      </table>
    )
  }
}

export default Table;
