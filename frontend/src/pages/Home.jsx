import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmRide'
import WaitingForDriver from '../components/WaitingForDriver'
import LookingForDriver from '../components/LookingForDriver'

const Home = () => {

    const [pickup, setPickup] = useState('')
    const [destination, setDestination] = useState("")
    const [panelOpen, setPanelOpen] = useState(false)
    const panelRef = useRef(null);
    const panelCloseRef = useRef(null)
    const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)
    const vehiclePanelRef = useRef(null)
    const [confirmRidePanel, setConfirmRidePanel] = useState(false);
    const confirmRidePanelRef = useRef(null)
    const vehicleFoundRef = useRef(null)
    const [vehicleFound, setVehicleFound] = useState(false)
    const waitingForDriverRef = useRef(null)
    const [waitingForDriver, setWaitingForDriver] = useState(false)


    const submitHandler = () => {
        e.preventDefault()
    }

    useGSAP(function () {
        if (panelOpen) {
            gsap.to(panelRef.current, {
                height: "70%",
                padding: 24,
            })
            gsap.to(panelCloseRef.current, {
                opacity: 1,

            })
        } else {
            gsap.to(panelRef.current, {
                height: "0",
                padding: 0


            })
            gsap.to(panelCloseRef.current, {
                opacity: 0,

            })
        }

    }, [panelOpen])

    useGSAP(() => {
        if (vehiclePanelOpen) {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(0)'
            })
            
        } else {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(100%)'
            })
            
        }
    }, [vehiclePanelOpen])
    
    useGSAP(() => {
        if (confirmRidePanel) {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(0)'
            })
            
        } else {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
            
        }
    }, [confirmRidePanel])
    
    useGSAP(() => {
        if (vehicleFound) {
            gsap.to(vehicleFoundRef.current, {
                transform: 'translateY(0)'
            })
            
        } else {
            gsap.to(vehicleFoundRef.current, {
                transform: 'translateY(100%)'
            })
            
        }
    }, [vehicleFound])
    useGSAP(() => {
        if (waitingForDriver) {
            gsap.to(waitingForDriverRef.current, {
                transform: 'translateY(0)'
            })
            
        } else {
            gsap.to(waitingForDriverRef.current, {
                transform: 'translateY(100%)'
            })
            
        }
    }, [waitingForDriver])


    return (
        <div className='h-screen'>
            <img className='w-16 absolute left-5 top-5' src="https://logospng.org/download/uber/logo-uber-4096.png" alt="Uber" />

            <div className='h-screen w-screen'>
                {/* image for temporary use */}
                <img className='h-full w-full object-cover' src="https://images.prismic.io/superpupertest/75d32275-bd15-4567-a75f-76c4110c6105_1*mleHgMCGD-A1XXa2XvkiWg.png?auto=compress,format&w=1966&h=1068" alt="" />
            </div>
            <div className='flex flex-col justify-end h-screen top-0 absolute bottom-0 w-full '>
                <div className='h-[30%] p-6 bg-white relative '>
                    <h5 ref={panelCloseRef} onClick={() => {
                        setPanelOpen(!panelOpen)
                    }} className='absolute opacity-0 top-0 left-5 text-2xl '>
                        <i className='ri-arrow-down-wide-line'></i>
                    </h5>

                    <h4 className='text-2xl font-semibold'>Find a trip</h4>
                    <form onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                        <div className="line absolute h-16 w-1 top-[47%] left-10 bg-gray-900 rounded-full"></div>
                        <input
                            required
                            onClick={() => {
                                setPanelOpen(true)
                            }}
                            value={pickup}
                            onChange={(e) => {
                                setPickup(e.target.value);
                            }}
                            className='bg-[#eeeeee] px-12 py-2 text-lg rounded-lg w-full mt-5' type="text" placeholder="Add a pick-up location" />

                        <input
                            required
                            onClick={() => {
                                setPanelOpen(true)
                            }}
                            value={destination}
                            onChange={(e) => {
                                setDestination(e.target.value);
                            }}
                            className='bg-[#eeeeee] px-12 py-2 text-lg rounded-lg w-full mt-3' type="text" placeholder='Enter your destination' />
                    </form>
                </div>
                <div ref={panelRef} className='bg-white h-[0] overflow-hidden'>
                    <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanelOpen={setVehiclePanelOpen}></LocationSearchPanel>
                </div>
            </div>

            <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 bg-white translate-y-full px-3 py-10 pt-10'>
                <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanelOpen={setVehiclePanelOpen}></VehiclePanel>
            </div>
            
            <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 bg-white translate-y-full px-3 py-6 pt-12'>
                <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}></ConfirmRide>
            </div>

            <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 bg-white translate-y-full px-3 py-6 pt-12'>
                <LookingForDriver setVehicleFound={setVehicleFound}></LookingForDriver>
            </div>

            <div ref={waitingForDriverRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-6 pt-12'>
                <WaitingForDriver setWaitingForDriver={setWaitingForDriver}></WaitingForDriver>
            </div>

        </div>
    )
}

export default Home
