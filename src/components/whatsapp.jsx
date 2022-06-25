import React from 'react'
import FloatingWhatsApp from 'react-floating-whatsapp'
import bild from '../bewerbung.jpg'

function Whatsapp() {
  return (
    <FloatingWhatsApp
    
    phoneNumber={"+49017642933195"}
    accountName={"Momo"}
    height
     avatar={bild} 
     statusMessage={"Antwortet binnen 24 Stunden zurück"}
     chatMessage={"Hallo wie kann ich dir helfen, scheue dich nicht etwas zu fragen😊"} 

     allowClickAway 
     allowEsc={true} 
     placeholder
      notification={true}
     
    notificationSound={true} 
    
    />
  )
}

export default Whatsapp