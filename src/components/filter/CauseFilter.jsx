import React from 'react';
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { setCause } from '@/redux/CauseFilterSlice';


const CauseFilter = ({causes}) => {
    const dispatch = useDispatch();
    const selectCause = useSelector((store)=>store.causeFilter);
    const handleCauseChange = (value)=>{
        if(value == selectCause){
          dispatch(setCause(''));
        }else{
          dispatch(setCause(value));
        }
    }

  return (
    <div className="filter-container">
        <label aria-label="filter by cause categories">
        <h3>by Cause Categories:</h3>
        {causes.map((category)=><Button key={category} onClick={()=>handleCauseChange(category)} shape="round" 
        className={`cause-btn ${category===selectCause?'selected':''}`}>{category}</Button>)}
        </label>
    </div>
  )
}

export default CauseFilter