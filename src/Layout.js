import { Outlet } from "react-router-dom";

import Sidebar from './components/Sidebar/Sidebar'
import './App.css';

const Layout = () => {
  return (
    <div className="App">
      <Sidebar/>
      <Outlet />
    </div>
  )
};

export default Layout;