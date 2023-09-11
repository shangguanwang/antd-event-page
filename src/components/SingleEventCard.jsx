import {
  CompassOutlined,
  HeartOutlined,
  ShareAltOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Button, Card} from 'antd';
import { useState } from 'react';
import EventModal from './EventModal'

const SingleEventCard = ({
  title,
  date,
  location,
  creator,
  description,
  image,
  causeCategory,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Card
        style={{ marginTop: 24, width: 800 }}
        className="single-card-container"
      >
        <div style={{ display: 'flex' }}>
          <img src={image} alt={title} className="event-img"></img>
          <div className="event-info">
            <h2 className="date-text">{date}</h2>
            <h2 className="title-text">{title}</h2>
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
          </div>
          <Button type="primary" onClick={showModal} className="showDetails-btn">
            Show Details
          </Button>
          <div className="btn-container">
            <Button className="btn" style={{ boxShadow: 'none' }}>
              <HeartOutlined style={{ fontSize: '25px' }} />
            </Button>
            <Button className="btn" style={{ boxShadow: 'none' }}>
              <ShareAltOutlined style={{ fontSize: '25px' }} />
            </Button>
          </div>
        </div>
      </Card>

    <EventModal isModalOpen={isModalOpen} handleCancel={handleCancel} image={image} title={title} date={date} creator={creator} location={location} description={description} causeCategory={causeCategory}/>
    </>
  );
};

export default SingleEventCard;
