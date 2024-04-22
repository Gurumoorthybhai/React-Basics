// import Home from './components/Home';
import Counter from './component1/Counter'
import CounterClass from './component1/counter-class';
import Parent from './component1/hooks/useMemo/parent';

import MainComponent from './component1/hooks/useCallback/parent-callback'

import './App.css';

function App() {
  return (
    <div>
      <MainComponent />
      {/* { <Parent />} */}
      {/* <Home /> */}
      {/* <Counter />
      <CounterClass /> */}
    </div>
  );
}

export default App;
