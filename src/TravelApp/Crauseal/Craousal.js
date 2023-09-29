import React from 'react'
import './crauseal.css'
import Narkanda from './Narkanda.avif'
import destination from './destination.avif'
import Dhanaulti from './Dhanaulti.avif'
import Dooars from './Dooars.avif'
import Malvan from './Malvan.avif'
import saputara from './saputara.avif'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

function Craousal() {
    return (
        <>
            <div className='crousal container'>
                <div className='tp_dest-header'>
                    <div className='flexone'>
                        <p className='allCardHeader'>Handpicked Collections for You</p>
                    </div>
                    <div className='arrow'>
                        <button type='button'><AiOutlineArrowLeft /></button>
                        <button type='button'><AiOutlineArrowRight /></button>
                    </div>

                </div>

                <div className='tp_dest_slider'>
                    <div className='slick-slider'>
                        <div className='slick-list'>
                            <div className='slick-track'>
                                <div className='allSlick'>
                                    <div className='one'>
                                        <img src={Dhanaulti} alt='' />
                                    </div>
                                    <div className='one'>
                                        <img src={destination} alt='' />
                                    </div>
                                    <div className='one'>
                                        <img src={Dooars} alt='' />
                                    </div>
                                    <div className='one'>
                                        <img src={Malvan} alt='' />
                                    </div>
                                    <div className='one'>
                                        <img src={saputara} alt='' />
                                    </div>
                                    <div className='one'>
                                        <img src={Dhanaulti} alt='' />
                                    </div>
                                    <div className='one'>
                                        <img src={Dooars} alt='' />
                                    </div>
                                    <div className='one'>
                                        <img src={Malvan} alt='' />
                                    </div>
                                    <div className='one'>
                                        <img src={Narkanda} alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='crousal container'>
                <div className='tp_dest-header'>
                    <div className='flexone'>
                        <p className='allCardHeader'>Unlock Lesser-Known Wonders of India</p>
                    </div>
                    <div className='arrow'>
                        <button type='button'><AiOutlineArrowLeft /></button>
                        <button type='button'><AiOutlineArrowRight /></button>
                    </div>

                </div>

                <div className='tp_dest_slider'>
                    <div className='slick-slider'>
                        <div className='slick-list'>
                            <div className='slick-track'>
                                <div className='allSlick'>
                                    <div className='one'>
                                        <img src={Dhanaulti} alt='' />
                                    </div>
                                    <div className='one'>
                                        <img src={destination} alt='' />
                                    </div>
                                    <div className='one'>
                                        <img src={Dooars} alt='' />
                                    </div>
                                    <div className='one'>
                                        <img src={Malvan} alt='' />
                                    </div>
                                    <div className='one'>
                                        <img src={saputara} alt='' />
                                    </div>
                                    <div className='one'>
                                        <img src={Dhanaulti} alt='' />
                                    </div>
                                    <div className='one'>
                                        <img src={Dooars} alt='' />
                                    </div>
                                    <div className='one'>
                                        <img src={Malvan} alt='' />
                                    </div>
                                    <div className='one'>
                                        <img src={Narkanda} alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Craousal
