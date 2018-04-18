import React from 'react';
import { connect } from 'react-redux';
import App from '~/components/App';
import { inc, dec, asyncInc, asyncDec } from '~/modules/counter';

@connect(
  state => ({
    counter: state.counter,
  }),
  {
    inc,
    dec,
    asyncInc,
    asyncDec,
  },
)
export default class AppContainer extends React.Component {
  inc = () => {
    this.props.inc(1);
  }

  dec = () => {
    this.props.dec(1);
  }

  asyncInc = () => {
    this.props.asyncInc(1);
  }

  asyncDec = () => {
    this.props.asyncDec(1);
  }

  render() {
    return (
      <App
        inc={this.inc}
        dec={this.dec}
        asyncInc={this.asyncInc}
        asyncDec={this.asyncDec}
        count={this.props.counter.count}
      />
    );
  }
}

