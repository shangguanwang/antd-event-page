import SingleEventCard from './SingleEventCard';
import data from '../data/events.json'

const EventsList = () => {
  return (
    <div className="events-list-container">
      {data.map((item)=><SingleEventCard key={item.id} {...item}/>)}
    </div>
  );
};

export default EventsList;
