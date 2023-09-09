import React from 'react'
import { Card, Button } from 'antd'
import { HeartOutlined, ShareAltOutlined, UserOutlined, CompassOutlined } from '@ant-design/icons'


const SingleEventCard = ({id, title, date, location, creator, description, image}) => {
  return (
    <Card style={{ marginTop: 24, width:800}} className='single-card-container'>
      <div style={{ display: 'flex'}}>
        <img src={image} alt={title} className='event-img'></img>
        <div className='event-info'>
          <h2 className='date-text'>{date}</h2>
          <h2 className='title-text'>{title}</h2>
          <p className='creator-text'><span className='creator-icon'><UserOutlined /></span>By {creator}</p>
          <p className='location-text'><span className='location-icon'><CompassOutlined /></span>{location}</p>
        </div>
        <div className='btn-container'>
        <Button className='btn' style={{boxShadow: 'none' }}><HeartOutlined style={{ fontSize: '25px'}}/></Button>
        <Button className='btn' style={{boxShadow: 'none' }}><ShareAltOutlined style={{ fontSize: '25px'}}/></Button>
        </div>
      </div>
    </Card>
  )
}

export default SingleEventCard