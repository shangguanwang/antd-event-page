import { Card, Row } from 'antd';
import CauseFilter from './CauseFilter';
import LocationFilter from './LocationFilter';
import { useDispatch } from 'react-redux';
import { setLocation } from '@/redux/LocationFilterSlice';
import { setCause } from '@/redux/CauseFilterSlice';

const Filter = ({ data }) => {
  // Extract unique locations and causes
  const locations = [...new Set(data.map((event) => event.location))];
  const causes = [...new Set(data.map((event) => event.causeCategory))];

  // clear filter
  const dispatch = useDispatch();
  const handleClearFilter = ()=>{
    dispatch(setLocation(''));
    dispatch(setCause(''));
  }


  return (
      <Card className="filter-card-container">
        <Row className="filter-top">
        <h2>FILTERS</h2>
        <button type="reset" className="clearFilter-btn" onClick={handleClearFilter}>Clear All</button>
        </Row>
        <LocationFilter locations={locations} />
        <CauseFilter causes={causes} />
      </Card>
  );
};

export default Filter;
