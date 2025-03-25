import './AppHeader.css';
import Bell from '../../assets/bell.png';

export default function AppHeader() {
  return (
    <view className="header">
      <view className="header-text">
        <text className="welcome-user">Hello, Aakash</text>
        <text className="welcome-message">Your finances look great!</text>
      </view>
      <view className="header-icon">
        <view className="notification-icon">
          <image src={Bell} className="notification-bell" />
          <view className="notification-count">
            <text className="text">3</text>
          </view>
        </view>
        <view className="user-img-container">
          <text className="user-name">AK</text>
        </view>
      </view>
    </view>
  );
}
