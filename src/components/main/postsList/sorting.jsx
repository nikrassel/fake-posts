import React from 'react';

const Sorting = ({ sortOrder, selectedOrder }) => {
    function handleChangeOrder() {
        if (selectedOrder === "asc") {
            sortOrder("desc")
        } else {
            sortOrder("asc")
        }
    }
    return ( 
        <div>
            <button className='btn btn-primary' onClick={() => handleChangeOrder()}>
                Сортировка по заголовку
                <i
                    className={
                        "bi bi-caret-" +
                        (selectedOrder === "asc"
                            ? "up-fill"
                            : "down-fill")
                    }
                ></i>
            </button>
        </div>
     );
}
 
export default Sorting;