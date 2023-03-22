import React from 'react';
import './HomeLeft.css';
import { Button } from './Button';
import { HomeOutlined, SearchOutlined, BellOutlined, MailOutlined, UnorderedListOutlined, TabletOutlined, UserOutlined, MoreOutlined ,TwitterOutlined  } from '@ant-design/icons'

export function HomeLeft() {
  return (
    <div className='left-Main'>
      <div className='tweet-btn'>
      <TwitterOutlined style={{fontSize:'30px',color:'rgb(77, 181, 244)'}} />
      </div>
      <div className='btn-btn'>
        <Button name={"Home"} tag={<HomeOutlined />} />
        <Button name={"Explore"} tag={<SearchOutlined />} />
        <Button name={"Notifications"} tag={<BellOutlined />} />
        <Button name={'Messages'} tag={<MailOutlined />} />
        <Button name={'Bookmarks'} tag={<TabletOutlined />} />
        <Button name={'List'} tag={<UnorderedListOutlined />} />
        <Button name={'Profile'} tag={<UserOutlined />} />
        <Button name={'More'} tag={<MoreOutlined rotate='90' />} />


      </div>
      <div className='outer-btn'>
          <button className='last'>Tweet</button>
      </div>
    </div>
  )
}

