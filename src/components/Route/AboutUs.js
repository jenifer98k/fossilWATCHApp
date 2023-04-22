import React from 'react'

function AboutUs() {
  return (
    <div className=' container abt'>
 <h1>About Us  </h1>
 <div className='products '>

<div class="card border-none box-s">
  <img src="/images/pro1.png" class="card-img-top pr" alt="..."/>
  <div class="card-body">
       
  <h2>Jane Doe</h2>
        <p class="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button class="button">Contact</button></p>
  </div>
</div>  
<div class="card border-none box-s">
  <img src="/images/pro2.png" class="card-img-top pr" alt="..."/>
  <div class="card-body">
  
  <h2>Mike Ross</h2>
        <p class="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button class="button">Contact</button></p>
  </div>
</div>  
<div class="card border-none box-s">
  <img src="/images/pro3.png" class="card-img-top pr" alt="..."/>
  <div class="card-body">
  <h2>John Doe</h2>
        <p class="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button class="button">Contact</button></p>
  </div>

</div> </div> 
 
    </div>
  )
}

export default AboutUs
