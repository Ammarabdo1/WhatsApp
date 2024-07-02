import React ,{useState , useEffect} from 'react'
import './Css/App.css'
import {FormControl , Input } from '@mui/material'
import Message from './Message'
import db from './FireBase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import FlipMove from 'react-flip-move';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';


const WhatsApp = () => {

  const [input , setInput] = useState('')
  const [messages , setMessages] = useState([])
  const [userName , setUserName] = useState('')

  useEffect( () => { 
    db.collection('messages')
    .orderBy('timestamp' , 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({ id : doc.id , message : doc.data()} )))
    })
  } , [])

  useEffect( () => {
    setUserName(prompt("Please Enter your Name...").toLowerCase())    
  } , [] )

  
  const sendMessages = (e) =>{
    e.preventDefault()
    db.collection('messages').add({
      message:input,
      userName:userName,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setMessages( [...messages , {userName : userName , message : input }])
    setInput('')
  }

  return (
    <>   
    
    
    <section className='App'>
      <div>
        <h1><img src='Images\WhatsApp.svg.png' /></h1>
        <h1>Family's messages</h1>
        <h2>Welcome {userName} </h2>

        <form className='app_form'>
        <FormControl className='app_formControl'>
          {/* <InputLabel className='input'>Enter a message...</InputLabel> */}

          <Input placeholder='Enter a message...' className='input' value = {input} onChange={ (e) => setInput(e.target.value) } />

          <IconButton disabled = {!input} variant='outlined' type='submit' onClick={ sendMessages }>
            <SendIcon className={input? 'Icon' : 'dIcon' }  />
          </IconButton>   

        </FormControl>

        </form>

      </div>
    </section>
    <FlipMove className='AllMessages'>
      {
        messages.map( ({id , message}) =>( 
        <Message key = {id} userName = {userName} message = {message} />
      )) 
      }

    </FlipMove> 
    
    </>


  )
}
export default WhatsApp