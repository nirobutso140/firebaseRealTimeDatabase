import React, { useState } from 'react';

const Contact = () => {
	
	const [input, setInput] = useState({

		name: '',
		email: '',
		subject: '',
		message: ''
	
	})

	let name, value
const getInputData = (e) =>{
    name = e.target.name
	value = e.target.value

	setInput({...input, [name]:value})
} 

const submitInput = async (e) =>{
   e.preventDefault()
   const {name, email, subject, message} =  input
    
   if( name && email && subject && message ){

   const res = await fetch(
	'https://fir-realtimedatabase-a5be4-default-rtdb.firebaseio.com/userDataRecords.json',{
		
		method: "POST",
		headers: {
			"Content-Type" : "application/json",
		},
		body: JSON.stringify({
			name, 
			email, 
			subject,
		    message
		}),
	}
	);

	if(res){
		setInput({
		name: '',
		email: '',
		subject: '',
		message: ''
	})
		alert('Data stored')
	}else{
		alert('Please fill all data')
	}
  }else{
	  alert('Please Fill the Data')
}

}


    return (
        <>
           	<section class="ftco-section">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-6 text-center mb-5">
					<h2 class="heading-section">Contact With Nirob</h2>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-lg-10 col-md-12">
					<div class="wrapper">
						<div class="row no-gutters">
							<div class="col-md-7 d-flex align-items-stretch">
								<div class="contact-wrap w-100 p-md-5 p-4">
									<h3 class="mb-4">Get in touch</h3>
									<div id="form-message-warning" class="mb-4"></div> 
				      		<div id="form-message-success" class="mb-4">
				            Your message was sent, thank you!
				      		</div>
									<form method="POST" id="contactForm" name="contactForm">
										<div class="row">
											<div class="col-md-6">
												<div class="form-group">
													<input type="text" class="form-control" name="name" value={input.name} onChange={getInputData} id="name" placeholder="Name"/>
												</div>
											</div>
											<div class="col-md-6"> 
												<div class="form-group">
													<input type="email" class="form-control" name="email" value={input.email} onChange={getInputData} id="email" placeholder="Email"/>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<input type="text" class="form-control" name="subject" value={input.subject} onChange={getInputData} id="subject" placeholder="Subject"/>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<textarea name="message" value={input.message} onChange={getInputData} class="form-control" id="message" cols="30" rows="7" placeholder="Message"></textarea>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<input type="submit" onClick={submitInput} value="Send Message" class="btn btn-primary"/>
													<div class="submitting"></div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div class="col-md-5 d-flex align-items-stretch">
								<div class="info-wrap bg-primary w-100 p-lg-5 p-4">
									<h3 class="mb-4 mt-md-4">Contact us</h3>
				        	<div class="dbox w-100 d-flex align-items-start">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-map-marker"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Address: </span>Kalibari Road 1st Line (khokar garage), Moziron Nibash, Barishal</p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-phone"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-paper-plane"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-globe"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>YouTube Channel</span> <a href="https://www.youtube.com/channel/UCKzlWKOs6nwvR025UmvrUxg/featured">Nirob Utso</a></p>
					          </div>
				          </div>
			          </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section> 
        </>
    );
};

export default Contact;