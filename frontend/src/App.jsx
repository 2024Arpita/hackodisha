import { Container } from "@chakra-ui/react"
import{Route, Routes} from 'react-router-dom';
import Userpage from "./pages/Userpage";
import Postpage from "./pages/Postpage";
import Header from './components/Header';
function App() {

  return (
    <Container maxi="620px">
      <Header>
      <Routes>
        <Route path="/username" element={<Userpage/>}></Route>
        <Route path="/username/post/:pid" element={<Postpage/>}></Route>
      </Routes>
      </Header>
    </Container>
  )
}

export default App
