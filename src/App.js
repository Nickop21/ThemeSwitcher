
import Card from "./Components/Card";
import Header from "./Components/Header";
import UseThemeContextProvider from "./Context/UseThemeContextProvider";


function App() {
  
  return (
  <UseThemeContextProvider>
  <Header/>
  <div style={{width:'400px'}}>

  <Card/>
  </div>
  </UseThemeContextProvider>
  );
}

export default App;
