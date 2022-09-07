import React from 'react';
import './Footer.modules.css';
import swal from "sweetalert"


const handleOnClick = () => {
    swal({
        title: 'Sing-up',
        text: 'Message sent succesfully',
        type: 'alert',
        buttons: {
          confirm: 'Confirm'
        },
      })
}

const Footer = () => {
    return ( 
        <footer class="footer-distributed">

			<div class="footer-left">

				<h3>Andrés<span>Germain</span></h3>

				<p class="footer-company-name">Full Stack Developer</p>

				<div class="footer-icons">

					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>

				</div>

			</div>

			<div class="footer-right">

				<p>Contacto</p>

				<form action="https://formsubmit.co/andygermain17@gmail.com" method="POST">

					<input type="email" name="email" placeholder="Email" />
					<textarea name="message" placeholder="message"></textarea>
                    <input type="hidden" name="_captcha" value="false"></input>
					<button onClick={handleOnClick}>Send</button>

				</form>

			</div>

		</footer>
     )
}
 
export default Footer;