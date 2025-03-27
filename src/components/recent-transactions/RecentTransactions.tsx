import './RecentTransaction.scss';
import { useNavigate } from 'react-router';
import ShoppingBag from '../../assets/shopping-bag.png';
import CarTaxiIcon from '../../assets/car-taxi-front.png';

// import TransactionList from "./transaction-list/TransactionList.jsx";

export default function RecentTransactions() {
  const nav = useNavigate();

  return (
    <view className="transaction-section">
      <view className="transaction-header_wrapper">
        <view className="transaction-header">
          <text>Recent Transactions</text>
        </view>
        <view className="transaction-list">
          <text bindtap={() => nav('/history')}>See All</text>
        </view>
      </view>
      <list
        scroll-orientation="vertical"
        span-count={1}
        list-type='waterfall'
        className="list"
        enable-scroll={false}
      >
        <list-item
          key={'1'}
          item-key="1"
          style={{
            borderLeftColor: '#8A4FFF',
          }}
        >
          <view
            className="item-icon"
            style={{
              backgroundColor: 'hsla(260, 100%, 65%, 0.125)',
            }}
          >
            <image src={ShoppingBag} />
          </view>
          <view className="item-detail">
            <view className="item-info">
              <text className="item-name">Amazon Purchase</text>
              <text className="item-price">-$24.50</text>
            </view>
            <view className="item-amount">
              <text className="item-date">Today, 2:30pm</text>
              <text
                className="item-tag"
                style={{
                  color: '#8A4FFF',
                  backgroundColor: 'hsla(260, 100%, 65%, 0.14)',
                }}
              >
                Shopping
              </text>
            </view>
          </view>
        </list-item>
        <list-item
          key={'2'}
          item-key="2"
          style={{
            borderLeftColor: '#34C759',
          }}
        >
          <view
            className="item-icon"
            style={{
              backgroundColor: 'hsla(135, 59%, 49%, 0.125)',
            }}
          >
            <image src={CarTaxiIcon} />
          </view>
          <view className="item-detail">
            <view className="item-info">
              <text className="item-name">Uber Ride</text>
              <text className="item-price">-$4.50</text>
            </view>
            <view className="item-amount">
              <text className="item-date">Today, 9:30am</text>
              <text
                className="item-tag"
                style={{
                  color: '#34C759',
                  backgroundColor: 'hsla(135, 59%, 49%, 0.125)',
                }}
              >
                Transport
              </text>
            </view>
          </view>
        </list-item>
        <list-item
          key={'3'}
          item-key="3"
          style={{
            borderLeftColor: '#8A4FFF',
          }}
        >
          <view
            className="item-icon"
            style={{
              backgroundColor: 'hsla(260, 100%, 65%, 0.125)',
            }}
          >
            <image src={ShoppingBag} />
          </view>
          <view className="item-detail">
            <view className="item-info">
              <text className="item-name">Amazon Purchase</text>
              <text className="item-price">-$24.50</text>
            </view>
            <view className="item-amount">
              <text className="item-date">Today, 2:30pm</text>
              <text
                className="item-tag"
                style={{
                  color: '#8A4FFF',
                  backgroundColor: 'hsla(260, 100%, 65%, 0.14)',
                }}
              >
                Shopping
              </text>
            </view>
          </view>
        </list-item>
        <list-item
          key={'4'}
          item-key="4"
          style={{
            borderLeftColor: '#8A4FFF',
          }}
        >
          <view
            className="item-icon"
            style={{
              backgroundColor: 'hsla(260, 100%, 65%, 0.125)',
            }}
          >
            <image src={ShoppingBag} />
          </view>
          <view className="item-detail">
            <view className="item-info">
              <text className="item-name">Amazon Purchase</text>
              <text className="item-price">-$24.50</text>
            </view>
            <view className="item-amount">
              <text className="item-date">Today, 2:30pm</text>
              <text
                className="item-tag"
                style={{
                  color: '#8A4FFF',
                  backgroundColor: 'hsla(260, 100%, 65%, 0.14)',
                }}
              >
                Shopping
              </text>
            </view>
          </view>
        </list-item>
   
      </list>
    </view>
  );
}
