import './App.scss';
import AppHeader from './components/app-header/AppHeader.jsx';
import OverviewCard from './components/overview-card/OverviewCard.jsx';
import RecentTransactions from './components/recent-transactions/RecentTransactions.jsx';

export function App() {
  return (
    <view className="safe-area-view">
      <view className="container">
        <AppHeader />
        <OverviewCard />
        <view>
          <RecentTransactions />
        </view>
      </view>
    </view>
  );
}
