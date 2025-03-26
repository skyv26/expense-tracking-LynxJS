import { root } from '@lynx-js/react';

import { App } from './App.js';
import { MemoryRouter, Route, Routes } from 'react-router';
import History from './pages/history/History.jsx';
import Insights from './pages/insights/Insights.jsx';
import Planning from './pages/planning/Planning.jsx';
import Profile from './pages/profile/Profile.jsx';

root.render(
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/history" element={<History />} />
      <Route path="/planning" element={<Planning />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </MemoryRouter>,
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
