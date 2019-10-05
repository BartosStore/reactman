import './App.css';

export default function Configuration() {
  // fixme: state initialization
  const state = {
    app: 'Reactman',
    page: 'Configuration',
    footer: 'This is page footer.',
  };

  return (
    <div className="App">
      <div className="cover">
        <h1>Welcome to {state.page} page</h1>
        <h4>...of {state.app} application</h4>
      </div>
      <div className="footer">{state.footer}</div>
    </div>
  );
}
