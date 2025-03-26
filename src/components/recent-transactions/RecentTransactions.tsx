import { useNavigate } from "react-router";
import TransactionList from "./transaction-list/TransactionList.jsx";

export default function RecentTransactions() {
  const nav = useNavigate();

  return (
    <view className="transaction-section">
      <view className="transaction-header_wrapper">
        <view className="transaction-header">
          <text>Recent Transactions</text>
        </view>
        <view className="transaction-list">
          <text bindtap={() => nav('/history')} style={{color: 'red'}} >See All</text>
        </view>
      </view>
      <view className="transaction-list">
        <TransactionList />
      </view>
    </view>
  );
}
