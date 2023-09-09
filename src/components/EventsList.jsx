import SingleEventCard from './SingleEventCard';
import { useDispatch, useSelector} from 'react-redux';
import { selectCurrentPage, setCurrentPage } from '@/redux/pageSlice';
import { useMemo } from 'react';
import { Pagination } from 'antd';

const EventsList = ({data}) => {
  const currentPage = useSelector(selectCurrentPage);
  const pageSize = 3;
  const dispatch = useDispatch();
  // Slice the data array to display only the items for the current page
  const currentData = useMemo(()=>{
      //calculate the start and end indices for the current page
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return data.slice(startIndex, endIndex);
  }, [currentPage])
 
  const handlePageChange = (newPage) => {
    dispatch(setCurrentPage(newPage));
  }

  return (
    <div className="events-list-container">
      {currentData.map((item)=><SingleEventCard key={item.id} {...item}/>)}
      <div>
      <Pagination defaultCurrent={1} current={selectCurrentPage} total={data.length} pageSize={pageSize} onChange={handlePageChange} 
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
