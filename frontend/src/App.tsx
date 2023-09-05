import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './features/Home';
import { getInvestors } from './features/UserTable/investorSlice';
import UserTable from './features/UserTable/UserTable';
import Layout from './Layout';
import { useAppDispatch } from './store/store';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getInvestors());
  }, [dispatch]);
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/user_table" element={<UserTable />} />
      </Route>
    </Routes>
  );
}

export default App;
