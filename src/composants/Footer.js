import React from 'react'
import emailjs from 'emailjs-com';


function Footer() {
    function sendEmail(e) {
        e.preventDefault();
        //recuperation des infos ('email services', 'email template' et ton 'user Id dans ton account')
        emailjs.sendForm('smtp_server', 'bonjour', e.target, 'user_NOb6Uaxf9dfOFAigoh4MO')
          .then((result) => {
    
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    
    return (
        
        <div>
            
            <div className='footer'>
                <form onSubmit={sendEmail}>

                        <div class="group">      
                            <input type="text" name='nom' required/>
                            <span class="highlight"></span>
                            <span class="bar"></span>
                            <label>Nom</label>
                        </div>
      
                        <div class="group">      
                            <input type="text" name='email'required/>
                            <span class="highlight"></span>
                            <span class="bar"></span>
                            <label>Email</label>
                        </div>
                       
                    <div class="group">
                    <span class="highlight"></span>    
                    <textarea rows="4" cols="50" name="subject" class="message" required></textarea>
                    <span class="bar"></span>
                    <label>Message</label>
                    </div>
                    
                    <input name="submit" class="btn" type="submit" value="Send" onclick="ValidateEmail(document.form1.text1)" />
                    
                </form>
            
            </div>
            
        </div>
    )

    function ValidateEmail(inputText)
{
var mailformat = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}
}

export default Footer
