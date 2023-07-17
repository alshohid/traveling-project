import React from 'react';

const ClearList = ({onClearList}) => {
    return (
        <div className='bg-slate-50 w-screen '>
            <button 
               className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none "
            onClick={onClearList}> Clear All List </button>
        </div>
    );
};

export default ClearList;