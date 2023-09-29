import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import Greetingf from './components/pure/greetingf';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/ejemplo1';
import Ejemplo2 from './hooks/ejemplo2';
import Ejemplo3 from './hooks/ejemplo3';
import Ejemplo4 from './hooks/ejemplo4';
import Father from './components/container/father';
import { ChakraProvider } from '@chakra-ui/react'
import OptionalRender from './components/pure/forms/optionalrender';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';

function App() {
  return (

    <ChakraProvider>

    <div className="App">
      <header className="App-header">
        {/*<Greeting name="Dani" ></Greeting>*/}
        {/*<Greetingf name="Dani"></Greetingf>*/}
        {/* <TaskListComponent></TaskListComponent> */}
        {/**<Ejemplo1></Ejemplo1>
        <Ejemplo2></Ejemplo2>
        <Ejemplo3></Ejemplo3>
        <Ejemplo4 nombre="dani"></Ejemplo4>**/}
        {/*<Father></Father>*/}
        {/* <OptionalRender></OptionalRender> */}
        {/* <LoginFormik></LoginFormik> */}
        <RegisterFormik></RegisterFormik>
      </header>
    </div>
    </ChakraProvider>
  );
}

export default App;
