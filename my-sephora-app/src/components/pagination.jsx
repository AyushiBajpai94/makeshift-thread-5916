import { Button, Spacer } from "@chakra-ui/react";

function Pagination ({page,handlePageChange,totalCount}){
    return (
        <div id="pagination-section">
            <Button disabled={page===1}
            bgColor='pink.500'
            ml='5px'
             onClick={()=>handlePageChange(-1)} >
                 PREVIOUS
            </Button>
            <Button  bgColor='pink.500' ml='5px'>{page}</Button>
            <Button 
            bgColor='pink.500'
            ml='5px'
              onClick={()=>handlePageChange(1)}
              disabled={page=== Math.ceil(totalCount/6)}
             >
                NEXT
            </Button>
        </div>
    );
}

export default Pagination;