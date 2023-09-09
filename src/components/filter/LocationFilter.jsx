import React from 'react'
import { Select } from 'antd'

const LocationFilter = ({locations}) => {
  return (
    <div className='location-filter-container'>
        <label>Filter by Location:</label>
        <Select>
            <Option value="">All Locations</Option>
            {locations.map((location)=>(
                <Option key={location} value={location}>
                    {location}
                </Option>
            ))}
        </Select>
    </div>
  )
}

export default LocationFilter