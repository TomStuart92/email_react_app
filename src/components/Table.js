import React from 'react';
import Email from './Email.js'

class Table extends React.Component {
  render(){
    return(
      <table className="mdl-data-table mdl-js-data-table  mdl-shadow--2dp">
        <thead>
          <tr>
            <th className="mdl-data-table__cell--non-numeric date">Date Sent</th>
            <th className="mdl-data-table__cell--non-numeric from">From</th>
            <th className="mdl-data-table__cell--non-numeric subject">Subject</th>
            <th className="mdl-data-table__cell--non-numeric body">Body</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(this.props.emails).map( key => <Email key={key} body={this.props.emails[key]["body"]} from={this.props.emails[key]["from"]} subject={this.props.emails[key]["subject"]} date={this.props.emails[key]["date"]}/>)}
        </tbody>
      </table>
    )
  }
}

export default Table;
