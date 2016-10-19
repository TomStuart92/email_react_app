import React from 'react';
import Card from './Card';
import Table from './Table';
import Footer from './Footer'

class Body extends React.Component {
  render(){
    return(
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">Inbox</span>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">Menu</span>
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href="/">Home</a>
          </nav>
        </div>
        <main className="mdl-layout__content">
          <div className="page-content">
            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--2-col"></div>
                <div className="mdl-cell mdl-cell--8-col">
                  <Table emails="hello"/>
                </div>
                <div className="mdl-cell mdl-cell--2-col"></div>
              </div>
            </div>
        </main>
        <Footer/>
      </div>
    )
  }
}

export default Body;
