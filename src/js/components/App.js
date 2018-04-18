import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './App.css';

@CSSModules(styles, { allowMultiple: true })
export default class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <button className={styles.button} onClick={this.props.inc}>inc</button>
        <button className={styles.button} onClick={this.props.dec}>dec</button>
        <button className={styles.button} onClick={this.props.asyncInc}>asyncInc</button>
        <button className={styles.button} onClick={this.props.asyncDec}>asyncDec</button>
        <div className={styles.result}>count: {this.props.count}</div>
      </div>
    );
  }
}

