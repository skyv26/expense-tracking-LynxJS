export default function OverviewCard() {
  return (
    <view className="expense-overview-card">
      <text className="text">Total Balance</text>
      <text className="balance">$8,459.32</text>
      <view className="percentage">
        <view class="percentage-text">
          <text>+12.5%</text>
        </view>
        <view class="percentage-vs">
          <text>vs last month</text>
        </view>
      </view>
    </view>
  );
}
