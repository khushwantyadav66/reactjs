import React from 'react';
import './App.css';

class ClassComponentExample extends React.Component {
  render() {
    return <h2>COMPONENT - Hello React</h2>;
  }
}

class PureClassComponentExample extends React.PureComponent {
  render() {
    return <h2>PURE-COMPONENT - Hello React</h2>;
  }
}

const FunctionalComponentExample = () => (
  <h2>FUNCTIONAL-COMPONENT - Hello React</h2>
);

function App() {
  return (
    <div className='App'>
      <main>
        <ClassComponentExample />
        <PureClassComponentExample />
        <FunctionalComponentExample />
      </main>
    </div>
  );
}

export default App;