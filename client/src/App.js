import './App.css';
import {ChatProvider} from './context/ChatContext'
import Container from './components/Container'
import { init } from './socketApi'
import {useEffect} from 'react'


function App() {

  useEffect(() => {
    init();
  }, []);
  
  return(
    <ChatProvider>
      <Container/>
    </ChatProvider>
  )
}

export default App;
