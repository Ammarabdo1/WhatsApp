import React , {forwardRef} from 'react'
import { Button , Card , CardContent , Typography  } from '@mui/material'
import './Css/Messages.css'

const Message = forwardRef (({message , userName} ,ref) => {
  const isUser = message.userName == userName;
  return (
    <section>
      <div ref={ref} className = {`message ${isUser && 'message_user'}`} >
            <h3>{!isUser && `${message.userName || "UnKnow User"}`}</h3>
        <Card className = {isUser? 'message_users' : 'message_guest'}>
          <CardContent>
            <Typography
              color="white"
              variant="h5" 
              component="h2"
            >
              <p>{message.message}</p> 
            </Typography>
          </CardContent>
        </Card>

      </div>      
    </section>

  )
})

export default Message