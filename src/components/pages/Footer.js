import footer_1 from './images/linkedin.svg'
import footer_2 from './images/instargam.svg'
import footer_3 from './images/behance.svg'
import footer_4 from './images/Dribble.svg'
import './footer.css'
import Modal from '../Modal'
import { useState } from 'react';


export default function Footer() {
    const [modalActive, setModalActive] = useState(false);
    const [email, setEmail] = useState('');

    const handleButtonClick = () => {
        if (email.trim() !== '') {
            // Ваша логика для отправки сообщения или другого действия
            alert("Message sent!");
            setModalActive(false); // Закрываем модальное окно после отправки
        } else {
            // Покажем уведомление или выполним другие действия, если инпут не заполнен
            alert("Please enter your email before sending.");
        }
    };
    return(
      <div className='main'>
                <div className='footer'>
<div class="footer-container">
            <div class="footer-title"><h2>Contacts</h2></div>
            <div class="footer-text"><p>Want to know more or just chat?
                <br></br> 
                You are welcome!</p>
            </div>
<button class="footer-button" onClick={()=> setModalActive(true)}>Send message</button>
            
     
            <div class="footer-links">
               <a href='https://ru.linkedin.com/'><img src={footer_1} alt='LinkedIn'></img></a>
               <a href='https://www.instagram.com/'><img src={footer_2} alt='instagram'></img></a>
               <a href='https://www.behance.net/'><img src={footer_3} alt='behance'></img></a>
               <a href='https://dribbble.com/'><img src={footer_4} alt='dribble'></img></a>

            </div>
            <div class="footer-last-words">
                <p>Like me on 
                    <br></br>
                    LinkedIn, Instagram, Behance, Dribble</p>
            </div>
         </div> 
</div>



<Modal active={modalActive} setActive={setModalActive }>
    <form action=''>
        <p><strong>My email</strong>: example@gmail.com</p>
        <p>If you want, you can leave your email and I will contact you as soon as possible.</p>
        <input
                        required
                        placeholder='Your email'
                        type='text'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <button onClick={handleButtonClick}>Send</button>
    </form>
</Modal>
      </div>
    )
}

