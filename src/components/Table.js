import React from 'react';
import Email from './Email.js'

class Table extends React.Component {
  render(){
    return(
      <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
        <thead>
          <tr>
            <th className="mdl-data-table__cell--non-numeric date">Date Sent</th>
            <th className="mdl-data-table__cell--non-numeric from">From</th>
            <th className="mdl-data-table__cell--non-numeric subject">Subject</th>
            <th className="mdl-data-table__cell--non-numeric body">Body</th>
          </tr>
        </thead>
        <tbody>

          <Email body="Hello World This is my first ever email!" from="Tom Stuart" subject="Hello World" date="01/01/2000"/>
          <Email body="Hello World This is my first ever email!" from="Tom Stuart" subject="Hello World" date="01/01/2000"/>
          <Email body="Hello World This is my first ever email!" from="Tom Stuart" subject="Hello World" date="01/01/2000"/>
        </tbody>
      </table>
    )
  }
}

export default Table;
