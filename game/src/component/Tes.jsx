
import React, { useState } from 'react';

function Tes() {

    const [openPopup, setOpenPopup] = useState(false);
    const HandleRemovePopUp = () => setOpenPopup(false);


  return (
    <>

  <div className='w-full p-5 flex justify-center items-center'>
    <div>
      <button
        onClick={() => setOpenPopup(true)}
        className='bg-blue-300 text-blue-500 border border-blue-400 rounded-md px-5 py-2 hover:bg-blue-100'
       >
        Show Model PopUp
      </button>
    </div>
    <PopUp openPopUp={openPopup} closePopUp={HandleRemovePopUp} />
  </div>


  </>
  )
}


export default Tes