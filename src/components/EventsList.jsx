import SingleEventCard from './SingleEventCard';
import { useDispatch, useSelector} from 'react-redux';
import { selectCurrentPage, setCurrentPage } from '@/redux/pageSlice';
import { useMemo } from 'react';
import { Pagination } from 'antd';

const EventsList = ({data}) => {
  // import currentPage state from pageSlice
  const currentPage = useSelector(selectCurrentPage);
  const pageSize = 3;
  const dispatch = useDispatch();
  
  // Import selectedLocation state from LocationFilterSlice
  const selectLocation = useSelector((store)=>store.locationFilter);

  // Filter the data based on the selectLocation
  const filteredData = selectLocation
  ?data.filter((event)=> event.location === selectLocation)
  :data;

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

  return (
    <div className="events-list-container">
      {currentData.map((item)=><SingleEventCard key={item.id} {...item}/>)}
      <div>
      <Pagination defaultCurrent={1} current={selectCurrentPage} total={filteredData.length} pageSize={pageSize} onChange={handlePageChange} 
        itemRender={(page, type, originalElement)=>{
          // hide the next and prev button
          if(type ==="next" || type === "prev"){
            return;
          } else if(type === "page"){
            return originalElement;
          }
        }}/>
      </div>
    </div>
  );
};

export default EventsList;
