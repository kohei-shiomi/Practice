

// src/App.js 
import React, { useRef } from 'react';
// eslint-disable-next-line
import emailjs from '@emailjs/browser';
import './App.css';

import { Button } from "@mui/material";



// eslint-disable-next-line
function App() {
  const form = useRef(); 
 

  const sendEmail = (e) => { e.preventDefault(); 
    emailjs.sendForm(
      "library contact e-mail", 
      "library contact e-mail", 
      form.current, 
      "Sn3GIn24gLMwLHwPd"
      )
      .then((result) => { alert('送信が完了しました。') ;
      form.current.reset();
      // console.log(result.text); }, (error) => { console.log(error.text); 
    }); 
    };
   
    
  return (
   
    
    <div>
      <h2>お問い合わせ</h2>
      <form className='cf' ref={form} onSubmit={sendEmail}>
        <><p>*は必須項目です</p></>
  
        <input type='text' placeholder='お名前' name='user_name' required/>
        <input type='email' placeholder='メールアドレス' name='user_email' required />
        <textarea name='message' type='text' placeholder='内容' required></textarea>

        <Button variant="contained" type='submit' id='input-submit' >送信</Button>
      </form>
      
    </div>
    );
} 
export default App;


