import React from 'react'
import './Others.css'

const Modal = (props) => {
    if (!props.isVisible) return null;

    const handleClose=(m)=>{
        if(m.target.id ==='main') 
        props.onClose();
    }

    function handleclick()
    {
       console.log("enter");
       const selectElement = document.querySelector('#select1');
       const  output = selectElement.value;
       
       const selectElement2 = document.querySelector('#select2');
       const  output2 = selectElement2.value;
   


        const data={ 
                    d1:output,
                    d2:output2
        }
        props.sendData(data)
        props.onClose()
    }
       
    function handlechange1(e)
        {
         const v1=e.target.value;
         console.log(v1);
         return v1;
        }
        function handlechange2(e)
        {
         const v2=e.target.value;
         console.log(v2);
         return v2;
        }
   

    return (
        <>
            <div className='card_design m-0 
            justify-center item-center ' id="main" onClick={handleClose}>

                <div className='flex flex-col'>
                </div>
                <div className='room_card_upper '>
                    <div className='flex_space_between'>
                        <div>
                            <p className='font14 latobold'>Rooms</p>
                        </div>
                        <div className='gtsicon'>
                        <select className='select' onChange={handlechange1} id='select1'>
                            <option  >01<i className='down_arrow_icon mx-2'></i></option>
                            <option  >02<i className='down_arrow_icon mx-2'></i></option>
                            <option  >03<i className='down_arrow_icon mx-2'></i></option>
                            <option  >04<i className='down_arrow_icon mx-2'></i></option>
                            </select>                        </div>
                    </div>
                    <div className='flex_space_between'>
                        <div>
                            <p className='font14 latobold'>Adults</p>
                            <p className='font12 font12_height'>(Above 12 Years)</p>
                        </div>
                        <div className='gtsicon'>
                            <select className='select' onChange={handlechange2} id='select2'>
                            <option>01<i className='down_arrow_icon mx-2'></i></option>
                            <option>02<i className='down_arrow_icon mx-2'></i></option>
                            <option>03<i className='down_arrow_icon mx-2'></i></option>
                            <option>04<i className='down_arrow_icon mx-2'></i></option>
                            </select>
                        </div>
                    </div>
                    <div className='flex_space_between'>
                        <div>
                            <p className='font14 latobold'>Childrens</p>
                            <p className='font12 font12_height'>(Age 12 years & below)</p>

                        </div>
                        <div className='gtsicon' >
                        <select className='select'>
                            <option>01<i className='down_arrow_icon mx-2'></i></option>
                            <option>02<i className='down_arrow_icon mx-2'></i></option>
                            <option>03<i className='down_arrow_icon mx-2'></i></option>
                            <option>04<i className='down_arrow_icon mx-2'></i></option>
                            </select>                      
                              </div>
                    </div>
                    <div className='apply_btn'>
                    <button className='apply_button' onClick={handleclick}>APPLY</button>
                </div>

                </div>


            </div>

        </>
    )
}

export default Modal
