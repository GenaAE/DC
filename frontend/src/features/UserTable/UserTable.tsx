import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

function UserTable(): JSX.Element {
  const savedIn = useSelector(
    (store: RootState) => store.investors.savedInvestors
  );
  console.log(savedIn);

  return (
    <>
      <div className="home user-table">
        {savedIn.map((investor) => (
          <div className="home_item" key={investor.id}>
            <img src={investor.avatar} alt="" />
            <div className="params">{investor.name}</div>
            <div className="params"> {investor.params1}</div>
            <div className="params"> {investor.params2}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default UserTable;
