import { Provider } from 'react-redux';
import { createRedux } from './utils/redux';
import configureStore from './utils/redux';
import { initial } from './reducers';
import Main from './components/Main';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

window.speechSynthesis.getVoices();

ReactDOM.render(
  <Provider store={ configureStore( initial ) }>
    <Main />
  </Provider>,
  document.getElementById('main')
);

