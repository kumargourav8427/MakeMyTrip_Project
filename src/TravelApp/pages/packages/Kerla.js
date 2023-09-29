import React from 'react'
import { useState, useEffect } from 'react';
import './packages.css'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { TbPlaneInflight } from 'react-icons/tb'
import { FaHotel } from 'react-icons/fa'
import { GrWheelchairActive } from 'react-icons/gr'
import { MdOutlineEmojiTransportation } from 'react-icons/md'
import { BsDot } from 'react-icons/bs'
import { MdCurrencyRupee } from 'react-icons/md'
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'


function Kerla() {
  const [packagedata, setpackagedata] = useState([])
  const [romanticpackagedata, setromanticpackagedata] = useState([])
  const [keraladevotepackagedata, setkeraladevotepackagedata] = useState([])
  const [keralamonthlypackagedata, setkeralamonthlypackagedata] = useState([])
  
  

  async function getPackages() {
    const data = await axios.get('http://192.168.29.90:8085/get')
    console.log(data.data);
    setpackagedata(data.data)
  }
  useEffect(() => {
    getPackages();
  }, [])
  
  async function getromanticPackages() {
    const data = await axios.get('http://192.168.29.90:8085/rmcp/get')
    console.log(data.data);
    setromanticpackagedata(data.data)
  }
  useEffect(() => {
    getromanticPackages();
  }, [])

  async function getkeraladevotePackages() {
    const data = await axios.get('http://192.168.29.90:8085/kdp/get')
    console.log(data.data);
    setkeraladevotepackagedata(data.data)
  }
  useEffect(() => {
    getkeraladevotePackages();
  }, [])

  async function getkeralamonthlyPackages() {
    const data = await axios.get('http://192.168.29.90:8085/mp/get')
    console.log(data.data);
    setkeralamonthlypackagedata(data.data)
  }
  useEffect(() => {
    getkeralamonthlyPackages();
  }, [])

 async function handlefind(e)
 {  
   
    const field=e.target.value.split('-');
     console.log(field);
     const data= await axios.get(`http://192.168.29.90:8085/get/findp?value1=${Number(field[0])}&value2=${Number(field[1])}`);
     console.log(data);
     setpackagedata(data.data)
     const data1= await axios.get(`http://192.168.29.90:8085/kdp/get/findp?value1=${Number(field[0])}&value2=${Number(field[1])}`);
     console.log(data1);
     setkeraladevotepackagedata(data1.data)
     const data2= await axios.get(`http://192.168.29.90:8085/mp/get/findp?value1=${Number(field[0])}&value2=${Number(field[1])}`);
     console.log(data2);
     setkeralamonthlypackagedata(data2.data)
     const data3= await axios.get(`http://192.168.29.90:8085/rmcp/get/findp?value1=${Number(field[0])}&value2=${Number(field[1])}`);
     console.log(data3);
     setromanticpackagedata(data3.data)
    
  }
 

  async function handleduration(e)
 {  
     const field=e.target.value;
     console.log(field);
     const data= await axios.get(`http://192.168.29.90:8085/get/findd?value1=${field}`);
     console.log(data);
     setpackagedata(data.data)
     const data1= await axios.get(`http://192.168.29.90:8085/kdp/get/findd?value1=${field}`);
     console.log(data1);
     setkeraladevotepackagedata(data1.data)
     const data2= await axios.get(`http://192.168.29.90:8085/mp/get/findd?value1=${field}`);
     console.log(data2);
     setkeralamonthlypackagedata(data2.data)
     const data3= await axios.get(`http://192.168.29.90:8085/rmcp/get/findd?value1=${field}`);
     console.log(data3);
     setromanticpackagedata(data3.data)
  }
//  async  function handlerating(e)
//   {
//     const val=e.target.value;
//     const data= await axios.get(`http://192.168.29.90:8085/rmcp/get/findd?value1=${field}`)
//   }

  return (
    <>
      <section className=''>
        {/* <div className='serach-container makeflex'>
          <div className='search-bar makeflex'>
            <div className='search-form makeflex'>
              <div className='starting modify-input'>
                <div><label>Starting From</label></div>
                <input type='text' value='New Delhi' />
              </div>
              <div className='modify-input'>
                <div><label>Going To </label></div>
                <input type='text' value='Kerla' />
              </div>
            </div>

            <div className='modify-input'>
              <div className=''><label>Starting Date </label></div>
              <input type='text' value='Select Date' />
            </div>
            <div className='p-3'>
              <Button type="button">SEARCH</Button>
            </div>
          </div>
          <div className='explore_page'>
            <a href='/'>
              <span>Explore</span>
            </a>
          </div>
        </div> */}
        
      </section>

      <section className=''>
        <div className='top_section'>
          <div className='top_section_img '>
            <img src='https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3898/1200x658_Kerala1.jpg?crop=1400:150&downsize=1400:150' alt='' />
            <div className='top_section_content '>
              <div className='kerla_head'>
                <h1 className='my-0'>Kerala</h1>
                <p style={{ fontSize: "12px" }}>Plan Your Sojourn to God's Own Country</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pb-5'>
        <div className='container preferance_wrapper'>
          <div className='row preference_main makeflex'>
            <div className='col-md-4 col-sm-3'>
              <span className='budget' style={{ fontWeight: "800" }}>Budget</span>
              <span> per person</span>
              <div className='budget_price'>
                <select onChange={handlefind} className='c2'>
                  <option value="5000-100000" id='id1' >All Packages</option>
                  <option value="5000-10000" id='id2'>₹5000 - ₹10000 </option>
                  <option value="10000-15000" id='id3'>₹10000 - ₹15000 </option>
                  <option value="15000-25000" id='id4'> ₹15000 - ₹25000 </option>
                  <option value="25000-35000" id='id5'>₹25000 - ₹35000 </option>
                  <option value="35000-50000"id='id6'>₹35000 - ₹50000 </option>
                  <option value="50000-100000" id='id7'>Above ₹50000 </option>
                </select>
              </div>
            </div>
            <div className='col-md-4 col-sm-3'>
              <span className='budget' style={{ fontWeight: "800" }}>Durations</span>
              <span> In Nights</span>
              <div className='budget_price'>
                <select onChange={handleduration} className='c1'>
                  <option value='2N/3D'>2N/3D</option>
                  <option value='4N/5D'>4N/5D</option>
                  <option value='5N/6D'>5N/6D</option>
                  <option value="8N/9D">8N/9D</option>
                </select>
              </div>

            </div>
            <div className='col-md-4 '>
              <span className='budget align-item-center' style={{ fontWeight: "800" }}>Rating Vice</span>
              <div className='budget_price'>
                <select>
                  <option value="3">3 ★</option>
                  <option value="4">4 ★</option>
                  <option value="5">5 ★</option>
                </select>
              </div>

            </div>
          </div>

        </div>

      </section>

      <div className='container '>
        <div className='row'>
          <div className='col-md-12 padding_top'>
        <h1 className='cards_head'>Packages Recommended for You</h1>
        <h6 className=''>Basis your search preferences</h6>
        </div>
        </div>
      </div>

      <div className=' container overall_slider '>
        {packagedata.map((values) => {
          return <section className=''>

            <div className='mx-1'>
              <div className='row'>
                <div className='col-sm-12  py-5 d-flex'>
                
                  <Card style={{ width: '22rem' }} className='p-2 card pointer'>
                    <Card.Title ><h6 className='card_title'>{values.title}</h6></Card.Title>
                    <Link to="/kerla/package1">
                    <Card.Img variant="top" className='card_image' src={values.image} />
                    </Link>
                    <span className='duration'>{values.duration}</span>

                    <Card.Body>
                      <div className='all_icons makeflex px-2'>
                        <div className='flight_icon'>
                          <TbPlaneInflight />
                          <p>{values.flights}Flight</p>
                        </div>
                        <div className='hotel_icon '>
                          <FaHotel />
                          <p>{values.hotels}Hotel</p>
                        </div>
                        <div className='activity_icon'>
                          <GrWheelchairActive />
                          <p>{values.activities}Activities</p>
                        </div>
                        <div className='transfer_icon '>
                          <MdOutlineEmojiTransportation />
                          <p>{values.transfers}Transfers</p>
                        </div>
                      </div>

                      <Card.Text>
                        <span style={{ color: "red" }}>2N </span><span>Munnar</span>
                      </Card.Text>
                      <div className='card_bottom makeflex'>
                        <div className='facilities'>
                          <li><BsDot />{values.fascilities[0]}</li>
                          <li><BsDot />{values.fascilities[1]}</li>
                        </div>
                        <div className='price'>
                          <p className='price_person'><MdCurrencyRupee />{values.price}</p>
                          <p className='per_person'>per person</p>
                        </div>

                      </div>
                    </Card.Body>
                  </Card>
                 
                </div>
              </div>
            </div>
          </section>
        })}
      </div>

      <div className='container'>
        <h1 className='cards_head' style={{marginTop:"30px"}}>Take the Romance Up a Notch</h1>
        <h6 className=''>Enjoy time off with your partner on a romantic vacation with our special packages.</h6>
      </div>

      <section>
      <div className=' container overall_slider '>
        {romanticpackagedata.map((values) => {
          return <section className=''>

            <div className='mx-1'>
              <div className='row'>
                <div className='col-sm-12  py-5 d-flex'>
                  <Card style={{ width: '22rem' }} className='p-2 card pointer'>
                    <Card.Title ><h6 className='card_title'>{values.title}</h6></Card.Title>
                    <Card.Img variant="top" className="card_image" src={values.image} />
                    <span className='duration'>{values.duration}</span>

                    <Card.Body>
                      <div className='all_icons makeflex px-2'>
                        <div className='flight_icon'>
                          <TbPlaneInflight />
                          <p>{values.flights}Flight</p>
                        </div>
                        <div className='hotel_icon '>
                          <FaHotel />
                          <p>{values.hotels}Hotel</p>
                        </div>
                        <div className='activity_icon'>
                          <GrWheelchairActive />
                          <p>{values.activities}Activities</p>
                        </div>
                        <div className='transfer_icon '>
                          <MdOutlineEmojiTransportation />
                          <p>{values.transfers}Transfers</p>
                        </div>
                      </div>

                      <Card.Text>
                        <span style={{ color: "red" }}>2N </span><span>Munnar</span>
                      </Card.Text>
                      <div className='card_bottom makeflex'>
                        <div className='facilities'>
                          <li><BsDot />{values.fascilities[0]}</li>
                          <li><BsDot />{values.fascilities[1]}</li>
                        </div>
                        <div className='price'>
                          <p className='price_person'><MdCurrencyRupee />{values.price}</p>
                          <p className='per_person'>per person</p>
                        </div>

                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        })}
      </div>



      </section>

      <div className='container'>
        <h1 className='cards_head' style={{marginTop:"30px"}}>Top Monthly Picks</h1>
        <h6 className=''>Plan the perfect holiday with top recommendations.</h6>
      </div>

      <section>
      <div className=' container overall_slider '>
        {keralamonthlypackagedata.map((values) => {
          return <section className=''>

            <div className='mx-1'>
              <div className='row'>
                <div className='col-sm-12  py-5 d-flex'>
                  <Card style={{ width: '22rem' }} className='p-2 card pointer'>
                    <Card.Title ><h6 className='card_title'>{values.title}</h6></Card.Title>
                    <Card.Img variant="top" className="card_image" src={values.image} />
                    <span className='duration'>{values.duration}</span>
                    <Card.Body>
                      <div className='all_icons makeflex px-2'>
                        <div className='flight_icon'>
                          <TbPlaneInflight />
                          <p>{values.flights}Flight</p>
                        </div>
                        <div className='hotel_icon '>
                          <FaHotel />
                          <p>{values.hotels}Hotel</p>
                        </div>
                        <div className='activity_icon'>
                          <GrWheelchairActive />
                          <p>{values.activities}Activities</p>
                        </div>
                        <div className='transfer_icon '>
                          <MdOutlineEmojiTransportation />
                          <p>{values.transfers}Transfers</p>
                        </div>
                      </div>

                      <Card.Text>
                        <span style={{ color: "red" }}>2N </span><span>Munnar</span>
                      </Card.Text>
                      <div className='card_bottom makeflex'>
                        <div className='facilities'>
                          <li><BsDot />{values.fascilities[0]}</li>
                          <li><BsDot />{values.fascilities[1]}</li>
                        </div>
                        <div className='price'>
                          <p className='price_person'><MdCurrencyRupee />{values.price}</p>
                          <p className='per_person'>per person</p>
                        </div>

                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        })}
      </div>



      </section>

      <div className='container'>
        <h1 className='cards_head' style={{marginTop:"30px"}}>For the Devotee in You!</h1>
        <h6 className=''>Your perfect spiritual retreat to South India, curated by MakeMyTrip.</h6>
      </div>

      <section>
      <div className=' container overall_slider '>
        {keraladevotepackagedata.map((values) => {
          return <section className=''>

            <div className='mx-1'>
              <div className='row'>
                <div className='col-sm-12  py-5 d-flex'>
                  <Card style={{ width: '22rem' }} className='p-2 card pointer'>
                    <Card.Title ><h6 className='card_title'>{values.title}</h6></Card.Title>
                    <Card.Img variant="top" className='card_image' src={values.image} />
                    <span className='duration'>{values.duration}</span>

                    <Card.Body>
                      <div className='all_icons makeflex px-2'>
                        <div className='flight_icon'>
                          <TbPlaneInflight />
                          <p>{values.flights}Flight</p>
                        </div>
                        <div className='hotel_icon '>
                          <FaHotel />
                          <p>{values.hotels}Hotel</p>
                        </div>
                        <div className='activity_icon'>
                          <GrWheelchairActive />
                          <p>{values.activities}Activities</p>
                        </div>
                        <div className='transfer_icon '>
                          <MdOutlineEmojiTransportation />
                          <p>{values.transfers}Transfers</p>
                        </div>
                      </div>

                      <Card.Text>
                        <span style={{ color: "red" }}>2N </span><span>Munnar</span>
                      </Card.Text>
                      <div className='card_bottom makeflex'>
                        <div className='facilities'>
                          <li><BsDot />{values.fascilities[0]}</li>
                          <li><BsDot />{values.fascilities[1]}</li>
                        </div>
                        <div className='price'>
                          <p className='price_person'><MdCurrencyRupee />{values.price}</p>
                          <p className='per_person'>per person</p>
                        </div>

                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        })}
      </div>

      </section>
      
      <h2 style={{
        fontWeight:800,
        textAlign:'center',
        padding:'40px 0px'
      }}>That's all the options we've got!</h2>


    </>
  )
}

export default Kerla
