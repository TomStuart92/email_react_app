import React from 'react';

class Card extends React.Component {
  render(){
    return(
      <div className="demo-card-wide mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">{this.props.subject}</h2>
        </div>
        <div className="mdl-card__supporting-text">
          {this.props.from}
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            {this.props.body}
          </a>
        </div>
      </div>
    )
  }
}

export default Card;
