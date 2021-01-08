import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import Counter from './components/Counter';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Tables from './components/Tables';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundry from './components/ErrorBoundry';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterTwo from './components/CounterTwo';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';


class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <h1>Hello world!</h1>
      <Message />
      <Counter />
      <Greet name = "Diana" heroName = "Wonder woman" />
      <Welcome name = "Bruce" heroName ="Batman" />
      <FunctionClick /> 
      <ClassClick />
      <EventBind /> 
      <ParentComponent />
      <UserGreeting />
      <NameList />
      <Stylesheet primary ={true}/>
      <Inline />
      <Form />
      <LifecycleA />
      <FragmentDemo/>
      <Tables /> */}
      {/* <PureComp /> */}
      {/* <ParentComp /> */}
      {/* <RefsDemo /> */}
      {/* <FocusInput /> */}
      {/* <FRParentInput /> */}
      {/* <PortalDemo /> */}
      {/* <ErrorBoundry>
        <Hero heroName = "Batman" />
        <Hero heroName= "Superman" />
        <Hero heroName = "joker" />
      </ErrorBoundry> */}
      {/* <ClickCounter name = "Akash"/>
      <HoverCounter /> */}
      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render= {(isLoggedIn) => isLoggedIn ? 'Akash' : 'Guest'}/> */}
      {/* <CounterTwo>
          {(count , incrementCount) => (
            <ClickCounterTwo count = {count} incrementCount = {incrementCount} />
          )}
      </CounterTwo>
      <CounterTwo>
          {(count , incrementCount) => (
            <HoverCounterTwo count = {count} incrementCount = {incrementCount} />
          )}
      </CounterTwo> */}
      {/* <UserProvider value = "Akash">
        <ComponentC />
      </UserProvider> */}
    </div>
    )
  }
}

export default App
