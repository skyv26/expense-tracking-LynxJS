import { useCallback, useEffect, useState } from '@lynx-js/react';

import './App.css';

export function App() {
  const [alterLogo, setAlterLogo] = useState(false);

  useEffect(() => {
    console.info('Hello, ReactLynx');
  }, []);

  const onTap = useCallback(() => {
    'background only';
    setAlterLogo(!alterLogo);
  }, [alterLogo]);

  return (
    <view className="container">
      <text className="text">Aakash Verma</text>
      <view
        bindtap={onTap}
        className="logo"
      >
        <text>{alterLogo ? '🦁' : '🐱'}</text>
      </view>
    </view>
  );
}
