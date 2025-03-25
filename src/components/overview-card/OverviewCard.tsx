import './OverviewCard.css';

export default function OverviewCard() {
  return (
    <view className="expense-overview-card">
      <text className="text">Total Balance</text>
      <text className="balance">$8,459.32</text>
      <text className="percentage">+12.5% vs last month</text>
    </view>
  );
}
