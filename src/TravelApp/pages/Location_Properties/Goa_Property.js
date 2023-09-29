import React, { useState, useEffect } from 'react'
import './Properties.css'
import { Button } from 'react-bootstrap'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { FcCheckmark } from 'react-icons/fc'
import { BiSearchAlt2 } from 'react-icons/bi'
import DatePicker from 'react-datepicker'
import { CiLocationOn } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import Modal from '../Others/Modal'
import { FaHotel } from 'react-icons/fa'
import axios from 'axios'
import Aos from 'aos'
Aos.init({
    offset:300,
    duration:1000
})


var city = require("../../city.json")


function Goa_Property() {
    const [visible, setVisible] = useState(false)
    const [visible1, setVisible1] = useState(false)
    const [value1, setValue1] = useState('');
    const [value, setValue] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [goapropertydata, setgoapropertydata] = useState([]);
    // const [myelementisvisible, setmyelementisvisible] = useState(false);
    // console.log("myelementisvisible", myelementisvisible);
    // const myref = useRef();
    // useEffect(() => {
    //     //    console.log("my ref",myref.current);
    //     const observer = new IntersectionObserver((entries) => {
    //         const entry = entries[0];
    //         window.addEventListener("scroll", () => {
    //             const top = window.scrollY;
    //             console.log(top);
    //             if (top > 1700) {
    //                 setmyelementisvisible(entry.isIntersecting === true)
    //             }
    //             else {
    //                 setmyelementisvisible(entry.isIntersecting === false)
    //             }

    //         })

    //         console.log("entry", entry);
    //     })
    //     observer.observe(myref.current)

    // }, [])

    const [listcss, setlistcss] = useState({
        color: "black",
        borderBottom: "0px solid white"
    })
    const [listcssr, setlistcssr] = useState({
        color: "black",
        borderBottom: "0px solid white"
    })
    const [listcssp, setlistcssp] = useState({
        color: "black",
        borderBottom: "0px solid white"
    })
    const [listcssm, setlistcssm] = useState({
        color: "black",
        borderBottom: "0px solid white"
    })
    const [listcssp2, setlistcssp2] = useState({
        color: "black",
        borderBottom: "0px solid white"
    })

    const [calstate, setcalState] = useState({
        startDate: new Date(),
        datePickerIsOpen: false,
    })

    const [calstate2, setcalState2] = useState({
        startDate: new Date(),
        datePickerIsOpen: false,
    })

    const [data, setdata] = useState({
        d1: "",
        d2: ""
    })
    const sendData = (data) => {
        setdata(data)
    }

    const selectcity = (e) => {
        setValue(e.target.value)
    }

    const handleChange1 = (event) => {
        // console.log(event.target.value);
        setValue1(event.target.value)
        console.log(value1);
    }

    const onSearch = (serachTerm) => {
        setValue(serachTerm)
        console.log('search', serachTerm);
    }
    function openDatePicker() {
        setcalState({
            datePickerIsOpen: !calstate.datePickerIsOpen,
        });
    };

    const handleMouse = () => {
        setVisible(true)
    }
    const handleMouse1 = () => {
        setVisible1(true)
    }

    function handleChange(date) {
        setcalState({
            startDate: date
        });
    }
    function openDatePicker2() {
        setcalState2({
            datePickerIsOpen: !calstate.datePickerIsOpen,
        });
    };

    function handleChange2(date) {
        setcalState2({
            startDate: date
        });
    }

    async function getgoaproperties() {
        const data = await axios.get('http://127.0.0.1:8085/property/get')
        console.log(data.data);
        console.log(data.data.length);
        setgoapropertydata(data.data)

    }
    useEffect(() => {
        getgoaproperties();
    }, [])

    // let nav = document.getElementsByClassName("makeflex goa_prop_container");
    // let sticky = nav.offsetTop;
    // window.onscroll = function() {sticker()};
    // function sticker() {
    //    if (window.pageYOffset >= sticky) {
    //       nav.classList.add("sticky")
    //    } else {
    //       nav.classList.remove("sticky");
    //    }
    // }

    async function handlelistcss(e) {

        console.log(e.target.id);
        if (e.target.id === "popular") {
            const data = await axios.get('http://127.0.0.1:8085/property/get')
            console.log(data.data);
            console.log(data.data.length);
            setgoapropertydata(data.data)

            setlistcss({
                color: "blue",
                borderBottom: "3px solid blue"
            })
            setlistcssr({
                color: "black",
                borderBottom: ""
            })
            setlistcssp({
                color: "black",
                borderBottom: ""
            })
            setlistcssm({
                color: "black",
                borderBottom: ""
            })
            setlistcssp2({
                color: "black",
                borderBottom: ""
            })
        }
        else if (e.target.id === "rating") {
            console.log("engter in rating");
            const data1 = await axios.get(`http://127.0.0.1:8085/property/get?value=${"high"}`);
            console.log(data1.data);
            setgoapropertydata(data1.data)

            setlistcssr({
                color: "blue",
                borderBottom: "3px solid blue"
            })
            setlistcss({
                color: "black",
                borderBottom: ""
            })
            setlistcssp({
                color: "black",
                borderBottom: ""
            })
            setlistcssm({
                color: "black",
                borderBottom: ""
            })
            setlistcssp2({
                color: "black",
                borderBottom: ""
            })
        }
        else if (e.target.id === "price1") {
            const data = await axios.get(`http://127.0.0.1:8085/property/get?price=${"high"}`)
            console.log(data.data);
            console.log(data.data.length);
            setgoapropertydata(data.data)

            setlistcssp({
                color: "blue",
                borderBottom: "3px solid blue"
            })
            setlistcss({
                color: "black",
                borderBottom: ""
            })
            setlistcssm({
                color: "black",
                borderBottom: ""
            })
            setlistcssr({
                color: "black",
                borderBottom: ""
            })
            setlistcssp2({
                color: "black",
                borderBottom: ""
            })
        }
        else if (e.target.id === "map") {
            setlistcssm({
                color: "blue",
                borderBottom: "3px solid blue"
            })
            setlistcssr({
                color: "b",
                borderBottom: ""
            })
            setlistcss({
                color: "black",
                borderBottom: ""
            })
            setlistcssp({
                color: "black",
                borderBottom: ""
            })
            setlistcssp2({
                color: "black",
                borderBottom: ""
            })
        }
        else if (e.target.id === "price2") {
            const data = await axios.get(`http://127.0.0.1:8085/property/get?price=${"low"}`)
            console.log(data.data);
            console.log(data.data.length);
            setgoapropertydata(data.data)

            setlistcssp2({
                color: "blue",
                borderBottom: "3px solid blue"
            })
            setlistcss({
                color: "black",
                borderBottom: ""
            })
            setlistcssm({
                color: "black",
                borderBottom: ""
            })
            setlistcssr({
                color: "black",
                borderBottom: ""
            })
            setlistcssp({
                color: "black",
                borderBottom: ""
            })
        }
    }

    async function handleprice(e)
    { 
            // const c1=document.getElementById("c1")
            // const c2=document.getElementById("c2")
            // const c3=document.getElementById("c3")
            // const c4=document.getElementById("c4")
            // const c5=document.getElementById("c5")
            // const c6=document.getElementById("c6")
            // const c7=document.getElementById("c7")
            
            // console.log(checkboxes);
            // console.log(checkboxes.length);
            // console.log(checkboxes.value);
            let checkboxes= document.querySelectorAll('input[name="price"]:checked')
            const values=[];
            checkboxes.forEach((checkbox)=>{
                values.push(checkbox.value);
            })
            console.log(values);
            
            // if(c1.checked || c2.checked || c3.checked || c4.checked || c5.checked || c6.checked || c7.checked)
            // {
            //     console.log("yes checked");
            //     console.log(e.target.value);
            //     const field= e.target.value.split("-")
            //     console.log(field);
            //     const data=await axios.get(`http://127.0.0.1:8085/property/get?value1=${field[0]}&value2=${field[1]}`)
            //     console.log(data.data);
            //     console.log(data.data.length);
            //     setgoapropertydata(data.data)
            // }
            // if(c1.checked)
            // {
            //     console.log("yes checked");
            //     console.log(e.target.value);
            //     const field= e.target.value.split("-")
            //     console.log(field);
            //     const data=await axios.get(`http://127.0.0.1:8085/property/get?value1=${field[0]}&value2=${field[1]}`)
            //     console.log(data.data);
            //     console.log(data.data.length);
            //     setgoapropertydata(data.data)
            // }
            // else if(c2.checked)
            // {
            //     console.log("yes checked");
            //     console.log(e.target.value);
            //     const field= e.target.value.split("-")
            //     console.log(field);
            //     const data=await axios.get(`http://127.0.0.1:8085/property/get?value1=${field[0]}&value2=${field[1]}`)
            //     console.log(data.data);
            //     console.log(data.data.length);
            //     setgoapropertydata(data.data)
            // }
            // else if(c3.checked)
            // {
            //     console.log("yes checked");
            //     console.log(e.target.value);
            //     const field= e.target.value.split("-")
            //     console.log(field);
            //     const data=await axios.get(`http://127.0.0.1:8085/property/get?value1=${field[0]}&value2=${field[1]}`)
            //     console.log(data.data);
            //     console.log(data.data.length);
            //     setgoapropertydata(data.data)
            // }
            // else if(c4.checked)
            // {
            //     console.log("yes checked");
            //     console.log(e.target.value);
            //     const field= e.target.value.split("-")
            //     console.log(field);
            //     const data=await axios.get(`http://127.0.0.1:8085/property/get?value1=${field[0]}&value2=${field[1]}`)
            //     console.log(data.data);
            //     console.log(data.data.length);
            //     setgoapropertydata(data.data)
            // }
            // else if(c5.checked)
            // {
            //     console.log("yes checked");
            //     console.log(e.target.value);
            //     const field= e.target.value.split("-")
            //     console.log(field);
            //     const data=await axios.get(`http://127.0.0.1:8085/property/get?value1=${field[0]}&value2=${field[1]}`)
            //     console.log(data.data);
            //     console.log(data.data.length);
            //     setgoapropertydata(data.data)
            // }
            // else if(c6.checked)
            // {
            //     console.log("yes checked");
            //     console.log(e.target.value);
            //     const field= e.target.value.split("-")
            //     console.log(field);
            //     const data=await axios.get(`http://127.0.0.1:8085/property/get?value1=${field[0]}&value2=${field[1]}`)
            //     console.log(data.data);
            //     console.log(data.data.length);
            //     setgoapropertydata(data.data)
            // }
            // else if(c7.checked)
            // {
            //     console.log("yes checked");
            //     console.log(e.target.value);
            //     const field= e.target.value.split("-")
            //     console.log(field);
            //     const data=await axios.get(`http://127.0.0.1:8085/property/get?value1=${field[0]}&value2=${field[1]}`)
            //     console.log(data.data);
            //     console.log(data.data.length);
            //     setgoapropertydata(data.data)
            // }
            // else
            // {
            //     console.log("not checked");
            //     const data = await axios.get('http://127.0.0.1:8085/property/get')
            //     console.log(data.data);
            //     console.log(data.data.length);
            //     setgoapropertydata(data.data)
            // }
          
           
        }   


    return (

        <>
            <section className='hotel_head'>
                <div className='makeflex goa_prop_container '>
                    <div className='makeflex'>
                        <div className='makeflex'>
                            <div className=''>
                                <div>
                                    <label className='font12 font_skyblue'>CITY, AREA OR PROPERTY
                                        <span style={{ fontSize: "20px" }}><MdOutlineKeyboardArrowDown /></span>
                                    </label>
                                </div>
                                <input type='text' value={value} onMouseEnter={handleMouse1} className='input_color' onChange={selectcity} placeholder='Goa' />
                                {(visible1 && value.length > 0 && value.length < 3) &&

                                    <div className='search_hotel_propt2'>
                                        <div className='list_propt2'>
                                            <div className='hotel_name2'>
                                                {
                                                    city.filter(item => {
                                                        const serachTerm = value.toLowerCase();
                                                        const Name = item.firstName.toLowerCase();
                                                        return serachTerm && Name.startsWith(serachTerm) && Name !== serachTerm
                                                    }).slice(0, 10)
                                                        .map((item, id) => (
                                                            <>
                                                                <div className='detail_propt2'>
                                                                    <div className='list_style2'>
                                                                        <li onClick={() => onSearch(item.firstName) && setVisible1(false)} key={id} className="py-1">
                                                                            <span><CiLocationOn /></span> {item.firstName}
                                                                        </li>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        ))}

                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className='mx-2'>
                                <div><label className='font12 font_skyblue' onClick={openDatePicker} >CHECK-IN
                                    <span style={{ fontSize: "20px" }}><MdOutlineKeyboardArrowDown /></span></label></div>
                                <DatePicker className='datepicker_differ'
                                    selected={calstate.startDate}
                                    onChange={handleChange}
                                    onClickOutside={openDatePicker}
                                    open={calstate.datePickerIsOpen}
                                />

                            </div>
                            <div className=''>
                                <div><label className='font12 font_skyblue' onClick={openDatePicker2}>CHECK-OUT
                                    <span style={{ fontSize: "20px" }}><MdOutlineKeyboardArrowDown /></span>
                                </label></div>
                                <DatePicker className='datepicker_differ'
                                    selected={calstate2.startDate}
                                    onChange={handleChange2}
                                    onClickOutside={openDatePicker2}
                                    open={calstate2.datePickerIsOpen}
                                />

                            </div>
                            <div className='mx-2'>
                                <div className='' onClick={() => setShowModal(true)}><label className='font12 font_skyblue'>Rooms & Guests
                                    <span style={{ fontSize: "20px" }}><MdOutlineKeyboardArrowDown /></span>
                                </label></div>
                                <p className='para_rooms2 input_color'>{data.d1} Rooms {data.d2} Adults</p>
                                <div className='modal_3'>
                                    <Modal isVisible={showModal} onClose={() => setShowModal(false)} sendData={sendData} />
                                </div>
                            </div>
                        </div>
                        <div className='p-3 hotel_search'>
                            <Link href={`/${value + "property"}`} >
                                <Button type="button">SEARCH</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='home_bar goa_prop_container'>
                    <p className='font12 font12_text_white'><Link to="/">Home
                        <span><MdOutlineKeyboardArrowRight /></span></Link><span className='font12 text_white'>Hotels and more in Goa</span></p>
                    <h2 className='heading_2'>{goapropertydata.length} Properties in Goa</h2>
                </div>
            </section>

            <section className='goa_prop_container filter_color sticky'>
                <div className='sortby_filter goa_prop_container ' >

                    <div className=''>
                        <li className='sortby'>Sort By :</li>
                    </div>
                    <div className='pointer'>
                        <li className='latobold2' id="popular" style={{
                            color: listcss.color,
                            borderBottom: listcss.borderBottom
                        }} onClick={handlelistcss}  >Popular</li>
                    </div>
                    <div className='pointer'>
                        <li className='latobold2' style={{
                            color: listcssr.color,
                            borderBottom: listcssr.borderBottom
                        }} onClick={handlelistcss} id='rating'>User Rating <span className='font12 font14'>(Highest First)</span></li>
                    </div>
                    <div className='pointer'>
                        <li className='latobold2' id='price1' style={{
                            color: listcssp.color,
                            borderBottom: listcssp.borderBottom

                        }} onClick={handlelistcss}>Price <span className='font12 font14'>(Highest First)</span> </li>
                    </div>
                    <div className='pointer'>
                        <li className='latobold2' id='price2' onClick={handlelistcss} style={{
                            color: listcssp2.color,
                            borderBottom: listcssp2.borderBottom
                        }}>Price <span className='font12 font14'>(Lowest First)</span></li>
                    </div>
                    <div className='pointer'>
                        <li className='latobold2' id='map' onClick={handlelistcss} style={{
                            color: listcssm.color,
                            borderBottom: listcssm.borderBottom
                        }}>View Map</li>
                    </div>
                    <div className='pointer search_bar autofocus'>
                        <span className='icon'><BiSearchAlt2 /></span>
                        <input type='text' onMouseEnter={handleMouse} onChange={handleChange1} value={value1} placeholder='Search for hotel name' />
                        {(visible && value1.length > 0) &&

                            <div className='search_hotel_propt'>
                                <div className='list_propt'>
                                    <div className='hotel_name'>
                                        {goapropertydata.filter((item) => {
                                            const searchitem = value1
                                            let ans = searchitem.toLowerCase();
                                            console.log(ans);
                                            const ans1 = ans.charAt(0).toUpperCase() + ans.slice(1)
                                            console.log(ans1);
                                            const name = item.title
                                            return (
                                                ans1 && name.startsWith(ans1) &&
                                                name !== ans1
                                            )
                                        })
                                            .map((item) => (
                                                <>
                                                    {/* <img src={item.image}/> */}
                                                    <div className='detail_propt'>
                                                        <div className='d-flex list_style'>
                                                            <span className='my-2'><FaHotel /></span>

                                                            <li className='my-2 mx-2 ' style={{ color: "#008CFF" }}>{item.title}</li>
                                                        </div>
                                                    </div>
                                                </>
                                            ))
                                        }

                                    </div>
                                </div>
                            </div>
                        }
                    </div>

                </div>

            </section>

            <section>
                <div className='goa_prop_container py-4 d-flex '>

                    <div className='filter_wrap '>

                        <p>
                            <span className='latobold2 font22'>Select Filters</span>
                        </p>

                        <div className='filter_row'>
                            <div className='font16 latobold2'>Price per night</div>
                            <ul className='margin_left py-2'>
                                <li className=''>
                                    <span><input type='checkbox' className='checkbox'name='price' id='c1' value="0-2500" onChange={handleprice}/>
                                        <label className='mx-3 py-1'>₹ 0 - ₹ 2500</label></span>
                                </li>
                                <li className=''>
                                    <span><input type='checkbox' className='checkbox' name='price' id='c2' value="2500-5500" onChange={handleprice} />
                                        <label className='mx-3 py-1'>₹ 2500 - ₹ 5500</label></span>
                                </li>
                                <li className=''>
                                    <span><input type='checkbox' className='checkbox'name='price' id='c3' value="5500-8000" onChange={handleprice}/>
                                        <label className='mx-3 py-1'>₹ 5500 - ₹ 8000</label></span>
                                </li>
                                <li className=''>
                                    <span><input type='checkbox' className='checkbox' name='price' id='c4' value="8000-10000" onChange={handleprice}/>
                                        <label className='mx-3 py-1'>₹ 8000 - ₹ 10000</label></span>
                                </li>
                                <li className=''>
                                    <span><input type='checkbox' className='checkbox' name="price" id='c5' value="10000-15000" onChange={handleprice} />
                                        <label className='mx-3 py-1'>₹ 10000 - ₹ 15000</label></span>
                                </li>
                                <li className=''>
                                    <span><input type='checkbox' className='checkbox' id='c6' name='price' value="15000-30000" onChange={handleprice} />
                                        <label className='mx-3 py-1'>₹ 15000 - ₹ 30000</label></span>
                                </li>
                                <li className=''>
                                    <span><input type='checkbox' className='checkbox' id='c7'name='price' value="0-100000" onChange={handleprice}/>
                                        <label className='mx-3 py-1'>₹ 30000 +</label></span>
                                </li>
                            </ul>

                        </div>
                        <div className='filter_wrap'>
                            <div className='font16 latobold2'>Star Category</div>
                            <ul className='margin_left py-2 star_size'>
                                <li>
                                    <span><input type='checkbox' className='checkbox' />
                                        <label className='mx-3 py-1'>5 Star</label></span>
                                    {/* <span>(2)</span> */}
                                </li>
                                <li>
                                    <span><input type='checkbox' className='checkbox' />
                                        <label className='mx-3 py-1'>4 Star</label></span>
                                    {/* <span>(2)</span> */}
                                </li>
                                <li>
                                    <span><input type='checkbox' className='checkbox' />
                                        <label className='mx-3 py-1'>3 Star</label></span>
                                    {/* <span>(2)</span> */}
                                </li>
                            </ul>
                        </div>
                        <div className='filter_wrap'>
                            <div className='font16 latobold2'>User Rating</div>
                            <ul className='margin_left py-2 font_size'>
                                <li>
                                    <span><input type='checkbox' className='checkbox' />
                                        <label className='mx-3 py-1'>4.5 & above (Excellent)</label></span>
                                    {/* <span>(2)</span> */}
                                </li>
                                <li>
                                    <span><input type='checkbox' className='checkbox' />
                                        <label className='mx-3 py-1'>4 & above (Very Good)</label></span>
                                    {/* <span>(2)</span> */}
                                </li>
                                <li>
                                    <span><input type='checkbox' className='checkbox' />
                                        <label className='mx-3 py-1'>3 & above (Good)</label></span>
                                    {/* <span>(2)</span> */}
                                </li>
                            </ul>

                        </div>
                        <div className='filter_wrap'>
                            <div className='font16 latobold2'>Property Type</div>
                            <ul className='margin_left py-2 font_size'>
                                <li>
                                    <span><input type='checkbox' className='checkbox' />
                                        <label className='mx-3 py-1'>Homestay</label></span>
                                    {/* <span>(2)</span> */}
                                </li>
                                <li>
                                    <span><input type='checkbox' className='checkbox' />
                                        <label className='mx-3 py-1'>Apartment</label></span>
                                    {/* <span>(2)</span> */}
                                </li>
                                <li>
                                    <span><input type='checkbox' className='checkbox' />
                                        <label className='mx-3 py-1'>Hostel</label></span>
                                    {/* <span>(2)</span> */}
                                </li>
                                <li>
                                    <span><input type='checkbox' className='checkbox' />
                                        <label className='mx-3 py-1'>Hotel</label></span>
                                    {/* <span>(2)</span> */}
                                </li>
                                <li>
                                    <span><input type='checkbox' className='checkbox' />
                                        <label className='mx-3 py-1'>Guest House</label></span>
                                    {/* <span>(2)</span> */}
                                </li>
                            </ul>

                        </div>
                        <div className='filter_wrap'>
                            <div className='font16 latobold2'>Locality</div>
                            <ul className='margin_left py-2 font_size '>
                                <li><input type='checkbox' className='checkbox' />
                                    <label className='mx-3 py-1'>North Goa</label></li>
                                <li><input type='checkbox' className='checkbox' />
                                    <label className='mx-3 py-1'>South Goa</label></li>
                                <li><input type='checkbox' className='checkbox' />
                                    <label className='mx-3 py-1'>Calangute</label></li>
                                <li><input type='checkbox' className='checkbox' />
                                    <label className='mx-3 py-1'>Baga</label></li>
                                <li><input type='checkbox' className='checkbox' />
                                    <label className='mx-3 py-1'>Anjuna</label></li>
                                <li><input type='checkbox' className='checkbox' />
                                    <label className='mx-3 py-1'>Candolim</label></li>
                                <li><input type='checkbox' className='checkbox' />
                                    <label className='mx-3 py-1'>Margao</label></li>
                                <li><input type='checkbox' className='checkbox' />
                                    <label className='mx-3 py-1'>Vasco Da Gama</label></li>
                                <li><input type='checkbox' className='checkbox' />
                                    <label className='mx-3 py-1'>Agonda</label></li>
                                <li><input type='checkbox' className='checkbox' />
                                    <label className='mx-3 py-1'>Varca</label></li>
                            </ul>
                        </div>
                        <div className=''>
                            <button className='backonTop'>Back on Top</button>
                        </div>


                        {/* <div ref={myref}>
                            {myelementisvisible ? */}
                                <div className='comeOnScroll' data-aos="fade-top">
                                    <div class="latobold2 mx-2 py-2">Suggested For You</div>
                                    <ul class="filterList">
                                        <li class="">
                                            <input aria-label="Early Bird Deals" type="checkbox"className='checkbox' />
                                            <label className='mx-3 py-1'>Early Bird Deals </label>
                                        </li>
                                        <li class="">
                                            <input aria-label="Early Bird Deals" type="checkbox" className='checkbox'/>
                                            <label className='mx-3 py-1'>Villas </label>
                                        </li>
                                        <li class="">
                                            <input aria-label="Early Bird Deals" type="checkbox" className='checkbox' />
                                            <label className='mx-3 py-1'>North Goa </label>
                                        </li>
                                        <li class="">
                                            <input aria-label="Early Bird Deals" type="checkbox" className='checkbox'/>
                                            <label className='mx-3 py-1'>Early Bird Deals </label>
                                        </li>
                                    </ul>
                                </div> 
                                {/* : console.log("no")}
                        </div> */}



                    </div>
                    <div className='hotel_listing'>
                        <p className='latobold font28 showing'>Showing Properties in Goa</p>
                        {goapropertydata.map((values) => {
                            return (
                                <div className='first_hotel_container w3_border margin_bottom'>
                                    <div className='combine_div'>
                                        <div className='imgGallery'>
                                            <div className='imageCount'>
                                                <img src={values.image}
                                                    height="220px" width="243px" alt='' />
                                            </div>
                                            {/* <div className='thumbimg_list'>
                                      <span><img className='thumb_img'
                                          src='https://r1imghtlak.mmtcdn.com/5f05e93e75de11eb87f30242ac110002.jpeg?&output-quality=75&downsize=243:162&crop=243:162;0,10&output-format=webp' alt='' /></span>
                                      <span><img className='thumb_img mx-1'
                                          src='https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/room-imgs/202102241701387969-9792-fdb4fd98eb1e11ecb84e0a58a9feac02.jpg?&output-quality=75&downsize=243:162&crop=243:162;0,10&output-format=webp' alt='' /></span>
                                      <span><img className='thumb_img'
                                          src='https://r1imghtlak.mmtcdn.com/605d522c75de11eba4550242ac110004.jpeg?&output-quality=75&downsize=243:162&crop=243:162;0,10&output-format=webp' alt='' /></span>
                                      <span>
                                          <img className='thumb_img mx-1'
                                              src='https://r1imghtlak.mmtcdn.com/8347c7b875de11eba4550242ac110004.jpeg?&output-quality=75&downsize=243:162&crop=243:162;0,10&output-format=webp' alt='' />
                                          <span className='view_all '>View all</span>
                                      </span>

                                  </div> */}
                                        </div>

                                        <div className='midContent'>
                                            <p className='latobold blue_color font12'><span className='rating_design'>{values.userrating}</span> Excellent <span className='font12'>({values.rating_count})</span></p>
                                            <p className='font22 latobold3 uppercase'>{values.title}</p>
                                            <p className='blue_color font14 height_line'>{values.locality}<span className='font12'> | {values.description}</span></p>
                                            <div className=''>
                                                <p className='latobold2 font14 blue_color '>ROOM IN AN APARTMENT</p>
                                                <p className='font14 '> 1 Bedroom | Sleeps 3 guests</p>
                                                <p className='light_green font12'><span><FcCheckmark /></span>Book with ₹0 Payment</p>
                                                <p className='light_green font12'><span><FcCheckmark /></span>Free Cancellation</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="append_right">
                                        <div className='append_right_main'>
                                            <p className='actual_price'>₹ {values.actual_price}</p>
                                            <p className='discount_price'>₹ {values.price}</p>
                                            <p className='font12'>+ ₹{values.convenince_charges} taxes & fees </p>
                                            <p className='per_price'>Per Night for {values.rooms} Rooms</p>
                                            <Link to="/loginSignup" className='text_decoration'>
                                                <p className='font12 sky_color'>Login to unlock the best deals</p>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            )

                        })}

                    </div>
                </div>
            </section>


        </>
    )
}

export default Goa_Property
