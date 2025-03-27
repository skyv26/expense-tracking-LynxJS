import './SpendingOverview.scss';

export default function SpendingOverview() {
  return (
    <view className="spending-section">
      <view className="spending-header">
        <text>Spending Overview</text>
      </view>
      <view className='spending-overview-container'>
        <view className='card'>
            <text className='title'>Daily Average</text>
            <text className='info'>$142</text>
            <text className='percentage'>+2.4%</text>
        </view>
        <view className='card'>
            <text className='title'>Monthly Total</text>
            <text className='info'>$3248</text>
            <text className='percentage'>+12.5%</text>
        </view>
        <view className='card'>
            <text className='title'>Top Category</text>
            <text className='info'>Food</text>
            <text className='percentage'>32%</text>
        </view>
        
      </view>
    </view>
  );
}
