import { setLocation } from '@/redux/LocationFilterSlice';
import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

const LocationFilter = ({ locations }) => {
  const selectLocation = useSelector((store) => store.LocationFilter);
  const dispatch = useDispatch();

  const handleLocationChange = (value) => {
    dispatch(setLocation(value));
  };

  return (
    <div className="filter-container">
      {/* Add aria-label for accessibility */}
      <label aria-label="filter by locations">
        <h3>by Location:</h3>
        <Select
          defaultValue={'All Locations'}
          value={selectLocation}
          onChange={handleLocationChange}
          style={{ width: 200 }}
        >
          <Select.Option value="">All Locations</Select.Option>
          {locations.map((location) => (
            <Select.Option key={location} value={location}>
              {location}
            </Select.Option>
          ))}
        </Select>
      </label>
    </div>
  );
};

export default LocationFilter;
