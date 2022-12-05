import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from "./Layout";
import Display from "./Display";
import Insert from "./Insert";
import Home from "./Home";

const App=()=>
{
  return(<>
    <BrowserRouter>
    <Routes>
    

    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="Insert" element={<Insert/>}/>
    <Route path="Display" element={<Display/>}/>
    
    </Route>
    </Routes>
    </BrowserRouter>
    </>
    );
}

export default App;