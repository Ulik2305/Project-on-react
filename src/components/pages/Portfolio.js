import port_line from './picture/port_1.png'
import game from './picture/port_2.png'
import reebok from './picture/reebok_web.png'


export default function Portfolio(){
    return(
        <div className="container_part_2">
            
<div className="port">
    <h5>Portfolio</h5>
<div>
    <div className="photo__line">
        <img src={port_line} alt="photo_11"></img>
      <div className="cards_man">
      <a href="/">Online fashion store - Homepage</a>
      </div>
    </div>
 </div>

 <div>
    <div className="photo__line">
       
<img src={reebok} alt="hello"></img>

      <div className="cards_man">
      <a href="/">Reebok Store - Concept</a>
      </div>
    </div>
 </div>

 <div>
    <div className="photo__line">
       
    <img src={game} alt="portal"></img> 

      <div className="cards_man">
      <a href="/">Braun Landing Page - Concept</a>
      </div>
    </div>
 </div>
</div>

        </div>
    )
}