import React, { useEffect, useState } from 'react';
import { Data } from './DataType';

function Home(): JSX.Element {
  const [data, setData] = useState<Data[]>([]);
  const [data2, setData2] = useState<Data[]>([]);

  const getData = async (): Promise<Data[]> => {
    const res = await fetch(
      'https://64f5d7f12b07270f705dc85b.mockapi.io/api/dc1/investors',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await res.json();
    // console.log(data);
    setData(data);
    return data;
  };
  useEffect(() => {
    getData();
  }, []);

  function addInvestor(inv: Data): void {
    setData2((prev) => [...prev, inv]);
  }

  console.log(data2);
  return (
    <div className="home">
      <div className="boxProp">
        <div className="properties">Инвестор</div>
        <div className="properties">Индустрия</div>
        <div className="properties">Контакты</div>
      </div>

      {data.map((el) => (
        <div className="home_item" key={el.id}>
          <img src={el.avatar} alt="" />
          <div className="params">{el.name}</div>
          <div className="params"> {el.params1}</div>
          <div className="params"> {el.params2}</div>
          <button type="button" onClick={() => addInvestor(el)}>
            add contact
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
