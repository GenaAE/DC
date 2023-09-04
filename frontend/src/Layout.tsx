import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './features/Header';
import SideMenu from './features/SideMenu';

function Layout(): JSX.Element {
  return (
    <div className="wrapper">
      <Header />
      <SideMenu />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
//

export default Layout;
