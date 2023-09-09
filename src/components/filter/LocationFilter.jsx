import React from 'react'
import { Select } from 'antd'

const LocationFilter = ({locations}) => {
  return (
    <div className='location-filter-container'>
        <label>Filter by Location:</label>
        <Select>
            <Select.Option value="">All Locations</Select.Option>
            {locations.map((location)=>(
                <Select.Option key={location} value={location}>
                    {location}
                </Select.Option>
            ))}
        </Select>
    </div>
  )
}

export default LocationFilter