import React from 'react'

const LocationSearchPanel = (props) => {

    console.log(props)

    // Sample array for location
    const locations = [
        "24B, Near Kapoor's cafe, Sheriyans Coding School, Bhopal",
        "22C, Near Malholtra's cafe, Sheriyans Coding School, Bhopal",
        "20B, Near Singhaniya's cafe, Sheriyans Coding School, Bhopal",
        "18A, Near Sharma's cafe, Sheriyans Coding School, Bhopal",
    ]

    return (
        <div>
            {/* this is just a sample data */}
            

            {
                locations.map((elem, idx) => {
                    return <div key={idx} onClick={() => {
                        props.setVehiclePanelOpen(true)
                        props.setPanelOpen(false)
                    }} className='flex items-center border-2 p-2 border-gray-100 active:border-black rounded-xl my-4 justify-start'>
                        <h2 className='bg-[#eee] flex items-center justify-center h-10 w-16 rounded-full'><i className='ri-map-pin-fill'></i></h2>
                        <h4 >{elem}</h4>
                    </div>

                })
            }

           
        </div>
    )
}

export default LocationSearchPanel
