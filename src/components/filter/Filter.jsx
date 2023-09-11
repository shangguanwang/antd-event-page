import { Card } from 'antd';
import LocationFilter from './LocationFilter';

const Filter = ({ data }) => {
  // Extract unique locations
  const locations = [...new Set(data.map((event) => event.location))];

  return (
    <Card style={{ margin: 24 }}>
      <h2>FILTERS</h2>
      <LocationFilter locations={locations} />
    </Card>
  );
};

export default Filter;
