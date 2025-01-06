import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div>
      <h5 className='p-1 text-center w-[93%] absolute top-0 ' onClick={() => {
                props.setConfirmRidePanel(false)
            }}>
                <i className='text-3xl text-gray-600 ri-arrow-down-wide-line'></i>
            </h5>
            <h3 className='font-semibold text-2xl mb-5'>Confirm Your Ride</h3>
            <div className='flex justify-between items-center flex-col gap-2'>

            <img className='h-20' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
            <div className='w-full mt-5'>
                <div className='flex gap-5 items-center p-3 border-b-2'>
                    <i className='text-lg ri-map-pin-user-fill'></i>
                    <div >
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm -mt-1   text-gray-600'>Kankariya Talab, Bhopal</p>
                    </div>
                </div>
                <div className='flex gap-5 items-center p-3 border-b-2'>
                    <i className='text-lg ri-map-pin-2-fill'></i>
                    <div >
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm -mt-1   text-gray-600'>Kankariya Talab, Bhopal</p>
                    </div>
                </div>
                <div className='flex gap-5 items-center p-3 border-b-2'>
                    <i className='text-lg ri-map-pin-2-fill'></i>
                    <div >
                        <h3 className='text-lg font-medium'>₹193.20</h3>
                        <p className='text-sm -mt-1   text-gray-600'>Cash Cash</p>
                    </div>
                </div>
            </div>
            <button onClick={() => {
                props.setVehicleFound(true)
                props.setConfirmRidePanel(false)


            }} className='w-full mt-5 bg-green-600 font-semibold p-2 text-white rounded-lg'>Confirm</button>
            </div>

    </div>
  )
}

export default ConfirmRide
