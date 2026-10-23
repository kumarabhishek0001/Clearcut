import { Outlet } from "react-router-dom";
import {Footer, Navbar} from './components';

const App = () => {
  return (
    <div className="min-h-screen  bg-slate-50">
      <div>
        <Navbar/>
      </div>

      <div>
        <Outlet />
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
