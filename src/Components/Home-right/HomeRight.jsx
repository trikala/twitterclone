import React from 'react'
import './HomeRight.css';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import {TwitterTimelineEmbed,TwitterShareButton,TwitterTweetEmbed} from  'react-twitter-embed';

export function HomeRight() {
  return (
    <div className='right-main'>
      <div className='right-head'>
        <Input
          prefix={<SearchOutlined />}
          placeholder='Search Twitter'
          className='input'
        />
      </div>
      <div style={{textAlign:'center',padding:'10px'}}><h2>What's happening</h2></div>
      <div className='right-mid'>
        
        <TwitterTimelineEmbed 
          tweetId={'1321351808086798341'}
        />
        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='naveen'
          options={{height:700,padding:10}}
        />
      </div>
    </div>
  )
}

