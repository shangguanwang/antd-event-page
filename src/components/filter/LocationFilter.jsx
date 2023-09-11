import React from 'react'
import { Select } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { setLocation } from '@/redux/LocationFilterSlice'

const LocationFilter = ({locations}) => {
  const selectLocation  = useSelector((store)=>store.LocationFilter);
  const dispatch = useDispatch();

  const handleLocationChange = (value)=>{
    dispatch(setLocation(value));
  }

  return (
    <div className='location-filter-container'>
        <label>Filter by Location:
          <Select defaultValue={"All Locations"} value={selectLocation} onChange={handleLocationChange} style={{ width: 200 }}>
              <Select.Option value="">All Locations</Select.Option>
              {locations.map((location)=>(
                  <Select.Option key={location} value={location}>
                      {location}
                  </Select.Option>
              ))}
          </Select>
        </label>
    </div>
  )
}

export default LocationFilter