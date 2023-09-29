import React from "react";

function TravellerModal(props) {
  if (!props.isVisible) return null;
  const handleClose=(m)=>{
    if(m.target.id ==='travel') 
    props.onClose();
}
function handleclick()
{
  //  console.log("enter");
  //  const selectElement = document.querySelector('#selectui');
  //  const  output = selectElement.value;
   
  //  const selectElement2 = document.querySelector('#select2');
  //  const  output2 = selectElement2.value;



  //   const data={ 
  //               d1:output,
  //               d2:output2
  //   }
  //   props.sendData(data)
    props.onClose()
}


  return (
    
    <div className="container"  >
      <div className="row " id="travel" onClick={handleClose}>
        <div className="col-md-6 rounded traveller_modal font12 py-2">
          <div className="">
            <p className="mb-0">ADULTS +1</p>
            <p>on the day of travel</p>
            <ul className="d-flex gap-5  py-2 guessperson" id='selectui'>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li> > 9</li>
            </ul>
          </div>
          <div className="row">
            <div className="col">
              <p className="mb-0">CHILDREN (2y - 12y) </p>
              <p>on the day of travel</p>
              <ul className="d-flex gap-4 py-2 guessperson">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li> > 6</li>
              </ul>
            </div>
            <div className="col">
            <p className="mb-0">INFANTS (below 2y)</p>
              <p>on the day of travel</p>
              <ul className="d-flex gap-4 py-2 guessperson">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li> > 6</li>
              </ul>
            </div>
          </div>
          <div className="">
            <p className="mb-0">CHOOSE TRAVEL CLASS</p>
              <ul className="d-flex gap-5 guessperson py-2">
                <li>Economy/Premium Economy</li>
                <li>Premium Economy</li>
                <li>Business</li>
              </ul>

          </div>
          <div className="apply ">
          <button type="button" className="btn btn-primary primarybtn 
          " onClick={handleclick}>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravellerModal;
