import React from 'react'

function Grid_Banners() {
  return (
    <div  className='container-fluid'>
<div className='banner2'>
<div>
 <h2>DEFENDER WATCH </h2>   
 <p>
 Our best-known field watch is back.
And it’s got styles in spades
 </p>
 <button type="button" class="btn btn-outline-dark">Shop Now</button>
</div>
<div>

<img src="/images/ban2.png" alt=""  className='ban2img'  /> 
</div>
</div>

<div className='banner3 container-fluid'>
<div id="carouselExampleDark" className="carousel carousel-dark slide home" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
        
          <div className="carousel-item active banner3" data-bs-interval="2000">
            <img src="images/ban3.png" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block  text-light ban3-cnt">
            <h2>DEFENDER WATCH </h2>   
 <p>
 Our best-known field watch is back.
And it’s got styles in spades
 </p>
 <button type="button" class="btn btn-outline-light">Shop Now</button>
            </div>
          </div>

        
        </div>
        
    
      </div>
</div>
<div className='banner4 container'>
<div>
    <img src="/images/ban41.png" className='proI1'/>
</div>
<div>
<img src="/images/ban42.png"  className='proI2'/>
</div>
</div>
    </div>
  )
}

export default Grid_Banners

