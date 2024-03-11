import image from './picture/graphic 1.svg'
import image_sero from './picture/startup 1.svg'
import image_card from './picture/browser 1.svg'

export default function Servise(){
    return(
        <div className="wrapper">
    
<div className="container">

<div className="Servise_1">
 <img src={image} alt="servise_10"></img>
 <h3>UI/UX Design</h3>
 <p>Our design is translated into comprehensive digital <br></br>
    environments built on latest development <br></br>
     standards.</p>
 </div>

 <div className="Servise_1">
 <img src={image_sero} alt="servise_20"></img>
 <h3>DEVELOPMENT</h3>
 <p>Our design is translated into comprehensive digital <br></br>
    environments built on latest development <br></br>
     standards.</p>
 </div>


 <div className="Servise_1">
 <img src={image_card} alt="servise_30"></img>
 <h3> SOFTWARE TESTING </h3>
 <p>Our design is translated into comprehensive digital <br></br>
    environments built on latest development <br></br>
     standards.</p>
 </div>

</div>



</div>
    )
    }