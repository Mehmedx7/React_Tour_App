import React from 'react'
import ImageCard from '../component/DetailImage/image'
import TabView from '../component/TabView/tabView'
import { Button } from 'react-bootstrap'

const Detailed = () => {
  return (
    <div className='container'>Detailed

 <ImageCard/>

 <div className='row'>
 <div className='col-8'>
 <TabView/>
    
 </div>
 <div className='col-4 mb-3'>
     <div className='card'>
   <div className='title p-2'>
    <h4>Bookin Summary</h4>
    <hr/>
   </div>
   <div className='ps-4'>
   subtotal=  550<br/>
   txt. 30<br/>
   total = subtotal + gst <br/>
         580=    550 + 30<br/>
   <Button className=" ms-2 btn btn-primary">Book Now</Button>

   </div>


        </div>

   </div>
 </div>



{/*     
    card click 
    image 
    2tabs => iteniary  description   rightside =>    booknow => subtotal =
                                                                 text 
                                                                 total= subtotal + gst
                                                                  boknow */}


    </div>
  )
}

export default Detailed