import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './features/Home';
import UserTable from './features/UserTable';
import Layout from './Layout';

function App(): JSX.Element {
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
