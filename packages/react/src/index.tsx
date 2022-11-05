import * as ReactDOM from 'react-dom';
import { FC } from 'react';

const App: FC = () => {
  return (
    <h1>React</h1>
  );
}


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);