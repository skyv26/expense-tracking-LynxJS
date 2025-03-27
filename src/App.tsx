import './App.scss';
import AppHeader from './components/app-header/AppHeader.jsx';
import OverviewCard from './components/overview-card/OverviewCard.jsx';
import RecentTransactions from './components/recent-transactions/RecentTransactions.jsx';
import SpendingOverview from './components/spending-overview/SpendingOverview.jsx';

export function App() {

  return (
    <view className="app">
      <view className="safe-area-view" />
      <view className="master-scroll">
        <scroll-view
          scroll-orientation="vertical"
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
          }}
        >
          <AppHeader />
          <view className="container">
            <OverviewCard />
            <SpendingOverview />
            <RecentTransactions />
            <view className="add-expense-btn-wrapper">
              <view className="btn">
                <text className="span">+</text>
                <text className="text">Add Expense</text>
              </view>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  );
}
