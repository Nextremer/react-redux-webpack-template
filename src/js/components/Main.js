import style from './Main.css';

@CSSModules(style)
export default class Main extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return <div styleName="main">{ "Hello World" }</div>;
  }
}


