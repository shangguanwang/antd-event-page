import SingleEventCard from './SingleEventCard';
import { useDispatch, useSelector} from 'react-redux';
import { selectCurrentPage, setCurrentPage } from '@/redux/pageSlice';
import { useEffect, useMemo } from 'react';
import { Pagination } from 'antd';

const EventsList = ({data}) => {
  // import currentPage state from pageSlice
  const currentPage = useSelector(selectCurrentPage);
  const pageSize = 3;
  const dispatch = useDispatch();
  
  // Import two filter state from redux slice
  const selectLocation = useSelector((store)=>store.locationFilter);
  const selectCause = useSelector((store)=>store.causeFilter);

  // Filter the data based on the selectLocation and selectCause
  const filteredData = data.filter((event)=>{
    // if both filters are selected
    if (selectLocation && selectCause){
      return event.location === selectLocation && event.causeCategory === selectCause;
    }
    // if only one filter is selected
    else if (selectLocation){
      return event.location === selectLocation
    }
    else if (selectCause){
      return event.causeCategory === selectCause;
    }
    // if neither filter is applied, return all events
    return true;
  })

  // Slice the data array to display only the items for the current page
  const currentData = useMemo(()=>{
      //calculate the start and end indices for the current page
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filteredData.slice(startIndex, endIndex);
  }, [currentPage, filteredData])
 
  const handlePageChange = (newPage) => {
    dispatch(setCurrentPage(newPage));
  }

  // reset the currentPage to page 1 when a filter is applied
  useEffect(()=>{
    dispatch(setCurrentPage(1));
  },[selectLocation, selectCause])

  return (
    <div className="events-list-container">
      {currentData.length>0
      ?currentData.map((item)=><SingleEventCard key={item.id} {...item}/>)
      :<h1>No Matching Records</h1>}
      {currentData.length>=pageSize && <Pagination defaultCurrent={1} current={selectCurrentPage} total={filteredData.length} pageSize={pageSize} onChange={handlePageChange} 
        itemRender={(page, type, originalElement)=>{
          // hide the next and prev button
          if(type ==="next" || type === "prev"){
            return;
          } else if(type === "page"){
            return <a>{page}</a>;
          }
        }}/>}
    </div>
  );
};

export default EventsList;
