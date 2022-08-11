import './App.css';
import Zayneb from './Components/CustomNavbar.js';
import SignIn from './Components/SignIn';

const styleContent ={
  backgroundColor: "green",
  fontSize: "20px",
  width: "600px",
  margin:"auto",
  textAlign:"center",
  borderRadius:"5px"
};
function App() {

  return (
    <div style={styleContent}>
    
    <Zayneb/>
    <img src={"./signin .jpg"}/>
    <SignIn/>
    </div>
  );
}

export default App;
