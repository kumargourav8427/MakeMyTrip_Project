import React from 'react'
import { Button } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { TbPlaneInflight } from 'react-icons/tb'
import { FaHotel } from 'react-icons/fa'
import { GrWheelchairActive } from 'react-icons/gr'
import { MdOutlineEmojiTransportation } from 'react-icons/md'
import { BsDot } from 'react-icons/bs'
import { MdCurrencyRupee } from 'react-icons/md'
import axios from 'axios';




function Goa() {
  const [goapackagedata, setgoapackagedata] = useState([]);
  const [goapackagedataaffordable, setgoapackagedataaffordable] = useState([]);
  const [goapackagedatabestseller, setgoapackagedatabestseller] = useState([]);
  const [goapackagedatalovebird, setgoapackagedatalovebird] = useState([]);
  const [goapackagedatabus, setgoapackagedatabus] = useState([]);



  async function getgoaPackages() {
    const data = await axios.get('http://127.0.0.1:8085/goa/get')
    console.log(data.data);
    setgoapackagedata(data.data)
  }
  useEffect(() => {
    getgoaPackages();
  }, [])

  async function getPackagesaffordable() {
    const data = await axios.get(`http://127.0.0.1:8085/goa/get/finda?value1=${'affordable'}`)
    console.log(data.data);
    setgoapackagedataaffordable(data.data)
  }
  useEffect(() => {
    getPackagesaffordable();
  }, [])

  async function getPackagesbestseller() {
    const data = await axios.get(`http://127.0.0.1:8085/goa/get/finda?value1=${'Bestsellers'}`)
    console.log(data.data);
    setgoapackagedatabestseller(data.data)
  }
  useEffect(() => {
    getPackagesbestseller();
  }, [])


  async function getPackageslovebird() {
    const data = await axios.get(`http://127.0.0.1:8085/goa/get/findlb?value1=${'lovebirds'}`)
    console.log(data.data);
    setgoapackagedatalovebird(data.data)
  }
  useEffect(() => {
    getPackageslovebird();
  }, [])

  async function getPackagesbus() {
    const data = await axios.get(`http://127.0.0.1:8085/goa/get/findbb?value1=${'bus'}`)
    console.log(data.data);
    setgoapackagedatabus(data.data)
  }
  useEffect(() => {
    getPackagesbus();
  }, [])

  async function handlefind(e) {
    const field = e.target.value.split('-');
    console.log(field);
    const data = await axios.get(`http://127.0.0.1:8085/goa/get/findgp?value1=${Number(field[0])}&value2=${Number(field[1])}`);
    console.log(data);
    setgoapackagedata(data.data)
    const data1 = await axios.get(`http://127.0.0.1:8085/goa/get/findgp?value1=${Number(field[0])}&value2=${Number(field[1])}&value3=${"affordable"}`);
    console.log(data1);
    setgoapackagedataaffordable(data1.data)
    const data2 = await axios.get(`http://127.0.0.1:8085/goa/get/findgp?value1=${Number(field[0])}&value2=${Number(field[1])}&value3=${"bus"}`);
    console.log(data2);
    setgoapackagedatabus(data2.data)
    const data3 = await axios.get(`http://127.0.0.1:8085/goa/get/findgp?value1=${Number(field[0])}&value2=${Number(field[1])}&value3=${"Bestsellers"}`);
    console.log(data3);
    setgoapackagedatabestseller(data3.data)
    const data4 = await axios.get(`http://127.0.0.1:8085/goa/get/findgp?value1=${Number(field[0])}&value2=${Number(field[1])}&value3=${"lovebirds"}`);
    console.log(data4);
    setgoapackagedatalovebird(data4.data)

  }
  async function handleduration(e) {
    const field = e.target.value;
    console.log(field);

    const data = await axios.get(`http://127.0.0.1:8085/goa/get/findgd?value1=${field}`);
    console.log(data);
    setgoapackagedata(data.data)

    const data1 = await axios.get(`http://127.0.0.1:8085/goa/get/findgd?value1=${field}&value2=${"affordable"}`);
    console.log(data1);
    setgoapackagedataaffordable(data1.data)
    const data2 = await axios.get(`http://127.0.0.1:8085/goa/get/findgd?value1=${field}&value2=${"bus"}`);
    console.log(data2);
    setgoapackagedatabus(data2.data)
    const data3 = await axios.get(`http://127.0.0.1:8085/goa/get/findgd?value1=${field}&value2=${"Bestsellers"}`);
    console.log(data3);
    setgoapackagedatabestseller(data3.data)
    const data4 = await axios.get(`http://127.0.0.1:8085/goa/get/findgd?value1=${field}&value2=${"lovebirds"}`);
    console.log(data4);
    setgoapackagedatalovebird(data4.data);
  }
  async function handlerating(e)
  {
   console.log( e.target.value);
   const val=e.target.value;
   const data=axios.get(`http://127.0.0.1:8085/goa/get/findgr?value1=${val}`);
   console.log(data);
  //  setgoapackagedata(data.data)
  }

  return (
    <>
    {/* <section className='All-Inclusive'>
      <div className='container'>

        <div className='serach-container makeflex'>
          <div className='search-bar makeflex'>
            <div className='search-form makeflex'>
              <div className='starting modify-input'>
                <div><label>Starting From</label></div>
                <input type='text' value='New Delhi' />
              </div>
              <div className='modify-input'>
                <div><label>Going To </label></div>
                <input type='text' value='Goa' />
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
        </div>
      </div>
      </section> */}

      <section className=''>
        <div className='top_section'>
          <div className='top_section_img '>
            <img src='https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/listingHeaderImages/1440x320-Goa-10-06-2021.jpg?crop=1400:150&downsize=1400:150' alt='' />
            <div className='top_section_content '>
              <div className='kerla_head'>
                <h1 className='my-0'>Goa</h1>
                <p style={{ fontSize: "12px" }}>Experience beaches and sunset</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=''>
        <div className='container preferance_wrapper'>
          <div className='preference_main makeflex'>
            <div className=''>
              <span className='budget' style={{ fontWeight: "800" }}>Budget</span>
              <span> per person</span>
              <div className='budget_price'>
                <select className='c2' onChange={handlefind}>
                  <option value="5000-100000" id='id1' >All Packages</option>
                  <option value="5000-10000" id='id2'>₹5000 - ₹10000 </option>
                  <option value="10000-15000" id='id3'>₹10000 - ₹15000 </option>
                  <option value="15000-25000" id='id4'> ₹15000 - ₹25000 </option>
                  <option value="25000-35000" id='id5'>₹25000 - ₹35000 </option>
                  <option value="35000-50000" id='id6'>₹35000 - ₹50000 </option>
                  <option value="50000-100000" id='id7'>Above ₹50000 </option>
                </select>
              </div>
            </div>
            <div className=''>
              <span className='budget' style={{ fontWeight: "800" }}>Durations</span>
              <span> In Nights</span>
              <div className='budget_price' onChange={handleduration}>
                <select className='c1'>
                  <option value='2N/3D'>2N/3D</option>
                  <option value='4N/5D'>4N/5D</option>
                  <option value='5N/6D'>5N/6D</option>
                  <option value="8N/9D">8N/9D</option>
                </select>
              </div>

            </div>
            <div className=''>
              <span className='budget align-item-center' style={{ fontWeight: "800" }}>Rating</span>
              <div className='budget_price'>
                <select onChange={handlerating}>
                  <option value="3">3 ★</option>
                  <option value="4">4 ★</option>
                  <option value="5">5 ★</option>
                </select>
              </div>

            </div>
          </div>

        </div>

      </section>


      <div className='container'>
        <h1 className='cards_head' style={{ marginTop: "30px" }}>All-Inclusive Goa Packages</h1>
        <h6 className=''>Choose from our hassle-free holiday packages inclusive of flights, hotels and transfers.</h6>
      </div>

      <section>
        <div className=' container overall_slider '>
          {goapackagedata.map((values) => {
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
        <h1 className='cards_head' style={{ marginTop: "30px" }}>Affordable Luxury Picks in Goa</h1>
        <h6 className=''>Indulge in premium hotel stays and have a memorable holiday in Goa</h6>
      </div>


      <section>
        <div className=' container overall_slider '>
          {goapackagedataaffordable.map((values) => {
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
        <h1 className='cards_head' style={{ marginTop: "30px" }}>Bestsellers at EPIC Discounts</h1>
        <h6 className=''>Grab our top-selling packages at unbelievable prices.</h6>
      </div>


      <section>
        <div className=' container overall_slider '>
          {goapackagedatabestseller.map((values) => {
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
        <h1 className='cards_head' style={{ marginTop: "30px" }}>For the Lovebirds!</h1>
        <h6 className=''>Let love bloom on these romantic getaways specially curated for you and your partner!</h6>
      </div>


      <section>
        <div className=' container overall_slider '>
          {goapackagedatalovebird.map((values) => {
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
        <h1 className='cards_head' style={{ marginTop: "30px" }}>Bus Excursions to Goa</h1>
        <h6 className=''>Take a bus ride to Goa with our exclusive holiday packages.</h6>
      </div>


      <section>
        <div className=' container overall_slider '>
          {goapackagedatabus.map((values) => {
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
      
      <h2 style={{
        fontWeight: 800,
        textAlign: 'center',
        padding: '40px 0px'
      }}>That's all the options we've got!</h2>

    </>
  )
}

export default Goa
