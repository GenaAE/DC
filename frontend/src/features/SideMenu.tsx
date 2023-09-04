import React from 'react';
import { useNavigate } from 'react-router-dom';

function SideMenu(): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="side_menu">
      <div className="side_item" onClick={() => navigate('./')}>
        Список инвесторов
      </div>
      <div className="side_item" onClick={() => navigate('./user_table')}>
        CRM
      </div>
      <div className="side_item">Перки</div>
      <div className="side_item">Профайл</div>
    </div>
  );
}

export default SideMenu;
