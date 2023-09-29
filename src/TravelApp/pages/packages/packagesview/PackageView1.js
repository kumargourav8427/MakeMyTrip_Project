import React from 'react'
import './packagesviews.css'
import packg_view1_img from './packg_view1_img.PNG'
import { AiTwotoneCalendar } from 'react-icons/ai'

function PackageView1() {
    return (
        <>
            <section className='View_container'>
                <div className='page_container container'>
                    <h2 className='heading'>Kerala for Nature Lovers</h2>

                    <div className='top_subBar'>
                        <div className='d-flex top_subBar_head'>
                            <div className='part_one'>
                                <div>5N/6D</div>
                            </div>
                            <p >
                                2N Munnar
                                <span style={{ margin: '0px 10px' }}>2N Thekkady</span>
                                1N Alleppey
                            </p>
                        </div>
                    </div>

                    <div className='top_gallary '>
                        <div className='top_gallay_view'>
                            <div className='top_gallary_left'>
                                <img src='https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1369/Munnar2.jpg?crop=460:300&downsize=460:300'
                                    alt='' />
                            </div>
                            <div className='top_gallary_middle d-flex'>
                                <div className=''>
                                    <img src={packg_view1_img} alt='' />
                                </div>
                                <div className='top_gallary_middle_two'>
                                    <div className='img_part_size'>
                                        <img src='https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1369/Munnar2.jpg?crop=225:145&downsize=225:145' alt=''/>
                                    </div>
                                    <div className='img_part_size'>
                                        <img src='https://hldak.mmtcdn.com/prod-s3-activity-templates/activitiesImagesFinal/activity/AZQ/ACT10000000023902_2.JPG?crop=225:145&downsize=225:145' alt='' />
                                    </div>
                                </div>
                            </div>
                            <div className='top_gallary_right'>
                                <img src='https://r1imghtlak.mmtcdn.com/80eb52ea056311e78a2f0a9df65c8753.jpeg?&downsize=900:675&crop=900:675;208,0&output-format=jpg?crop=285:300&downsize=285:300'
                                    alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='main_tab makeflex'>
                        <div className='main_tabitem'>ITINERARY</div>
                        <div className='main_tabitem'>POLICIES</div>
                        <div className='main_tabitem'>SUMMARY</div>
                    </div>
                </div>
            </section>

            <section className='container'>
                <div className='page_container makeflex'>
                    <div className='left_container'>
                        <div className='left-section'>
                            <div className='expert_card'>
                                <div className='expert_cart_top makeflex'>
                                    <div className='expert_image'>
                                        <img src='https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/phonixImages/NRB_5866_.png' alt='' />
                                        <p className='bottom_margin grey_text'>Curated By</p>
                                        <p className='bottom_margin blue_text'>Manisha Patel</p>
                                        <p className='grey_text flex_column'>
                                            <span>MMT Travel Expert</span>
                                            <span>By 10+ Years Experience</span>
                                        </p>
                                    </div>
                                    <div className='expert_content mx-3'>
                                        <p> Hop-on Hop-off Boat Tour at Vembanad Lake   | Fresh Toddy (Optional)  | Boat Party</p>
                                        <div className='makeflex'>
                                            <div className='content_left'>
                                                <p className='makeflex content_image'>
                                                    <img src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/phonixImages/group-36@3x.png" alt="/" />
                                                    <span>what to expect</span>
                                                </p>
                                                <p>
                                                    Enjoy solitude and the lush environs in Munnar amidst lesser crowds during monsoon.  Grab great deals and discounts too! Soak in the beauty of nature as monsoons arrive in Thekkady. Tour the spice ga
                                                </p>
                                                <p>Read More</p>
                                            </div>
                                            <div className='content_right'>
                                                <p className='makeflex content_image'>
                                                    <img src='https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/phonixImages/group@3x.png'
                                                        alt='' />
                                                    <span>things you will love</span>
                                                </p>
                                                <p>
                                                    Enjoy solitude and the lush environs in Munnar amidst lesser crowds during monsoon.  Grab great deals and discounts too! Soak in the beauty of nature as monsoons arrive in Thekkady. Tour the spice ga
                                                </p>
                                                <p>Read More</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul className='initery_nav px-4'>
                                <li className="active"><b class="appendRight3">5</b> Day Plan</li>
                                <li ><b className="appendRight3">5</b>Flights</li>
                                <li ><b className="appendRight3">5</b>Hotels</li>
                                <li ><b className="appendRight3">5</b>Transfers</li>
                                <li ><b className="appendRight3">5</b>Activities</li>
                            </ul>
                            <div className='display_container'>
                                <div className='display_nav'>
                                    <p class="pointer-list-title">Day Plan</p>
                                    <ul class="pointer-list">
                                        <li class="active ">16 Aug, Wed</li>
                                        <li class="">17 Aug, Thu</li>
                                        <li class="">18 Aug, Fri</li>
                                        <li class="">19 Aug, Sat</li>
                                        <li class="">20 Aug, Sun</li>
                                    </ul>
                                </div>
                                <div className='display_detail px-2'>
                                    <div className='display_header'>
                                        <div className='header_left'>
                                            <p className='dispaly_header_title'>
                                                Day 1 - Arrival in Kochi
                                            </p>
                                        </div>
                                        <div className='header_right px-3'>
                                            <ul className='makeflex '>
                                                <li><span>1 Flight</span></li>
                                                <li><span>1 Hotel</span></li>
                                                <li><span>1 Transfer</span></li>
                                                <li><span>2 Activities</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='day_one makeflex'>
                                        <div className='img_part'>
                                            <img src='https://hldak.mmtcdn.com/prod-s3-activity-templates/activitiesImagesFinal/activity/AZQ/ACT10000000023902_2.JPG' alt=''></img>
                                        </div>
                                        <div className='content_part'>
                                            <h6>Traditional Meal of Kerala</h6>
                                            <p>Get a taste of Kerala with a delicious authentic meal at an iconic restaurant. Relish piping hot Idlis, appams, curries and more You can enjoy the experience en-route from Kochi to Munnar. Location - Clay Oven Restaurant, Kothamangalam, to, Aluva - Munnar Rd, Oonukal, Kerala 686693 Note -m.</p>
                                        </div>
                                    </div>
                                    <div className='display_header'>
                                        <div className='header_left'>
                                            <p className='dispaly_header_title'>
                                                Day 2 - Munnar
                                            </p>
                                        </div>
                                        <div className='header_right px-3'>
                                            <ul className='makeflex '>
                                                <li><span>1 Flight</span></li>
                                                <li><span>1 Hotel</span></li>
                                                <li><span>1 Transfer</span></li>
                                                <li><span>2 Activities</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='day_one makeflex'>
                                        <div className='img_part'>
                                            <img src='https://hldak.mmtcdn.com/prod-s3-activity-templates/activitiesImagesFinal/activity/AZQ/ACT10000000023902_2.JPG' alt=''></img>
                                        </div>
                                        <div className='content_part'>
                                            <h6>Traditional Meal of Kerala</h6>
                                            <p>Get a taste of Kerala with a delicious authentic meal at an iconic restaurant. Relish piping hot Idlis, appams, curries and more You can enjoy the experience en-route from Kochi to Munnar. Location - Clay Oven Restaurant, Kothamangalam, to, Aluva - Munnar Rd, Oonukal, Kerala 686693 Note -m.</p>
                                        </div>
                                    </div>
                                    <div className='display_header'>
                                        <div className='header_left'>
                                            <p className='dispaly_header_title'>
                                                Day 3 - Thekkad
                                            </p>
                                        </div>
                                        <div className='header_right px-3'>
                                            <ul className='makeflex '>
                                                <li><span>1 Flight</span></li>
                                                <li><span>1 Hotel</span></li>
                                                <li><span>1 Transfer</span></li>
                                                <li><span>2 Activities</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='day_one makeflex'>
                                        <div className='img_part_5'>
                                            <img src='https://hldak.mmtcdn.com/prod-s3-activity-templates/activitiesImagesFinal/activity/PYP/ACT10000000026314_2.JPG' alt=''></img>
                                        </div>
                                        <div className='content_part'>
                                            <h6>Traditional Meal of Kerala</h6>
                                            <p>Get a taste of Kerala with a delicious authentic meal at an iconic restaurant. Relish piping hot Idlis, appams, curries and more You can enjoy the experience en-route from Kochi to Munnar. Location - Clay Oven Restaurant, Kothamangalam, to, Aluva - Munnar Rd, Oonukal, Kerala 686693 Note -m.</p>
                                        </div>
                                    </div>
                                    <div className='display_header'>
                                        <div className='header_left'>
                                            <p className='dispaly_header_title'>
                                                Day 4 - Alleppey
                                            </p>
                                        </div>
                                        <div className='header_right px-3'>
                                            <ul className='makeflex '>
                                                <li><span>1 Flight</span></li>
                                                <li><span>1 Hotel</span></li>
                                                <li><span>1 Transfer</span></li>
                                                <li><span>2 Activities</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='day_one makeflex'>
                                        <div className='img_part'>
                                            <img src='https://hldak.mmtcdn.com/prod-s3-activity-templates/activitiesImagesFinal/activity/AZQ/ACT10000000023902_2.JPG' alt=''></img>
                                        </div>
                                        <div className='content_part'>
                                            <h6>Traditional Meal of Kerala</h6>
                                            <p>Get a taste of Kerala with a delicious authentic meal at an iconic restaurant. Relish piping hot Idlis, appams, curries and more You can enjoy the experience en-route from Kochi to Munnar. Location - Clay Oven Restaurant, Kothamangalam, to, Aluva - Munnar Rd, Oonukal, Kerala 686693 Note -m.</p>
                                        </div>
                                    </div>
                                    <div className='display_header'>
                                        <div className='header_left'>
                                            <p className='dispaly_header_title'>
                                                Day 5 - Departure from Kochi
                                            </p>
                                        </div>
                                        <div className='header_right px-3'>
                                            <ul className='makeflex '>
                                                <li><span>1 Flight</span></li>
                                                <li><span>1 Hotel</span></li>
                                                <li><span>1 Transfer</span></li>
                                                <li><span>2 Activities</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='day_one makeflex'>
                                        <div className='img_part'>
                                            <img src='https://hldak.mmtcdn.com/prod-s3-activity-templates/activitiesImagesFinal/activity/AZQ/ACT10000000023902_2.JPG' alt=''></img>
                                        </div>
                                        <div className='content_part'>
                                            <h6>Traditional Meal of Kerala</h6>
                                            <p>Get a taste of Kerala with a delicious authentic meal at an iconic restaurant. Relish piping hot Idlis, appams, curries and more You can enjoy the experience en-route from Kochi to Munnar. Location - Clay Oven Restaurant, Kothamangalam, to, Aluva - Munnar Rd, Oonukal, Kerala 686693 Note -m.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='right_container'>
                        <div className='package_right'>
                            <div className='package_right_top px-4 py-2 '>
                                <p className='sales_price '>₹36,694</p>
                                <p className='same_text'>
                                    <span>
                                        <span className='price_detail'>₹27,037</span>
                                        per person*
                                    </span>
                                    <p>*Excluding applicable taxes</p>
                                </p>
                                <span className='offer'>27 % Off</span>
                            </div>
                            <div className='package_right_bottom'>
                                <div className='bottom_up p-2'>
                                    <div className='makeflex font_bold'>
                                        <span><AiTwotoneCalendar /></span>
                                        <div className='modify'>
                                            <span>16 Aug 2023</span>
                                            <span>Modify</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='btn btn-primary mx-4 book_button'>
                                    <span className='book_button_inner'>PROCEED TO BOOK ONLINE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </>
    )
}

export default PackageView1
