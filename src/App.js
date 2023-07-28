import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';
import Greet from './components/greet';
import Message from './components/Message';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreet from './components/userGreet';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
// import './appStyle.css';
// import styles from './app.modules.css'
import Form from './components/Form';
import FoucsInput from './components/FoucsInput';
import Hero from './components/Hero';
import ErrorBoundry from './components/ErrorBoundry';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import Counter from './components/Counter';
import ClickCounterTwo from './components/ClickCounterTwo';
import ClickHoverTwo from './components/ClickHoverTwo';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

function App() {
  return (
    <div className="App">
      <UserProvider value="avanthi">

      <ComponentC/>
      </UserProvider>
      {/* /*render props*/}
      {/* <Counter render ={(count, increment) => (<ClickCounterTwo count ={count} increment={increment} />)}/>

      <Counter render ={(count, increment) => (<ClickHoverTwo count ={count} increment={increment} />)}/> */}

      {/* <ClickCounter name='avanthi'/>
      <HoverCounter/> */}
      {/* <ErrorBoundry>
      <Hero heroNmae={'bastman'}/>
      </ErrorBoundry>
      <ErrorBoundry>
      <Hero heroNmae='superman'/>
      </ErrorBoundry>
      <ErrorBoundry>
      <Hero heroNmae='joker' />
      </ErrorBoundry> */}
      {/* <Form/> */}
      {/* <FoucsInput/> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>success</h1> */}
      {/* <Message/>
      <EventBind/> */}
      {/* <Greet/>
      <Welcome/> */}
      {/* <ParentComponent/> */}
      {/* <UserGreet/> */}
      {/* <NameList/> */}
      {/* <StyleSheet primary = {true}/> */}
      {/* <Inline/> */}
    </div>
  );
}

export default App;
