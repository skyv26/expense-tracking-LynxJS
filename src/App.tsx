import './App.css';
import AppHeader from './components/app-header/AppHeader.jsx';
import OverviewCard from './components/overview-card/OverviewCard.jsx';

export function App() {
  return (
    <view className="safe-area-view">
      <view className="container">
        <AppHeader />
        <OverviewCard />
      </view>
    </view>
  );
}
