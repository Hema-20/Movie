import React from 'react';
import TopBar from './TopBar';
import { Outlet } from 'react-router-dom';

export default function Portal({ mode, setMode }) {
  return (
    <div className="portal">
      <TopBar mode={mode} setMode={setMode} />
      <Outlet />
    </div>
  );
}
