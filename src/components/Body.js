import React from 'react';
import Table from './Table';
import Footer from './Footer';
import SingleEmail from './SingleEmail';
import NewEmail from './NewEmail';

class Body extends React.Component {

  render(){
    var component
    if (this.props.pathname === "/emails/new")
      {component = <NewEmail sendEmail={this.props.sendEmail}/> }
    else if (this.props.pathname === "/emails/sent")
      {component = <Table outbox={this.props.sent}/>}
    else if ( this.props.pathname.match(/\/emails\/.+/) )
      {component = <SingleEmail details={this.props.inbox[this.props.id] || this.props.sent[this.props.id]}/> }
    else
      {component = <Table inbox={this.props.inbox}/>}

    return(
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">Pinged</span>
            <div className="mdl-layout-spacer"></div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                        mdl-textfield--floating-label mdl-textfield--align-right">
              <div className="mdl-textfield__expandable-holder">
                <input className="mdl-textfield__input" type="text" name="sample"
                       id="fixed-header-drawer-exp"/>
              </div>
            </div>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <nav className="mdl-navigation">
            <a href="/emails/new" className="mdl-navigation__link">Compose</a>
            <a href="/" className="mdl-navigation__link">Inbox</a>
            <a href="/emails/sent" className="mdl-navigation__link">Sent</a>
          </nav>
        </div>
        <main className="mdl-layout__content">
          <div className="page-content">{component}</div>
        </main>
      </div>
    )
  }
}

export default Body;
