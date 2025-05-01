import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AllRoutes } from "./routers/AllRoutes";

function App(){
  return<>
       <Header />
        <AllRoutes/>
       <Footer />
  </>
}

export default App;