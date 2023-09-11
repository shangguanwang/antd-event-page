import React from 'react'
import { Modal, Tag } from 'antd';
import { UserOutlined, CompassOutlined,InfoCircleOutlined } from '@ant-design/icons';

const EventModal = ({
    isModalOpen, handleCancel, image, title, date, creator, location, description, causeCategory
}) => {
  return (
    <Modal title="Event Details" open={isModalOpen} onCancel={handleCancel} footer={null}>
    <img src={image} alt={title} className="event-img"></img>
      <h2 className="title-text">{title}</h2>
      <Tag color='cyan'>{causeCategory}</Tag>
      <h2 className="date-text">{date}</h2>
      <p className="event-info-text">
        <span className="event-info-icon">
          <UserOutlined />
        </span>
        By {creator}
      </p>
      <p className="event-info-text">
        <span className="event-info-icon">
          <CompassOutlined />
        </span>
        {location}
      </p>
      <p className="event-info-text">
        <span className="event-info-icon"><InfoCircleOutlined /></span>
        {description}</p>
    </Modal>
  )
}

export default EventModal