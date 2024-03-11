import picture from './images/Human.png';

export default function About(){
    return(
        <div className='header'>
    <div className='header-container'>
    <div className='header-content'>
        <div className='header-text'>
        <h1 className="header-heading"><strong>Kelvin Kramer </strong> <br></br>
                            <span><strong>Designer & Devoloper</strong></span></h1>
                        <p>I’m a portrait, fashion and lifestyle photographer living In New York City. 
                            During my thirteen year tenure here.</p>
        </div>
        <div className='header-img'>
                <img src={picture} alt='someone'></img>
        </div>
    </div>
    </div>
</div>
    )
}