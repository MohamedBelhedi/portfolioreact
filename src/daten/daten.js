import Swal from "sweetalert2"


const meine_Daten=[
    {
      id:1,
      skills:"Javascript",
      imageUrl:"https://www.html.it/app/uploads/2016/02/javascript-1.png",
      rate:"⭐⭐⭐",
      click2(){
        // zu testen
        //    const cardTest=document.querySelector('.cardTest')
        //    cardTest.remove(cardTest)
        //     console.log("1")
        // const rate1=document.querySelector('.rate')
        // rate1.innerHTML=meine_Daten[0].rate
        Swal.fire({
          title:"JS",
          text:"Meine Kenntnisse von 5 Sternen"+meine_Daten[0].rate


        })
        
           }
    
    
    },
    {
      id:2,
      skills:"HTML",
      imageUrl:"https://www.html.it/magazine/paper-js-grafica-vettoriale-con-javascript/",
      rate:"⭐⭐⭐⭐",
       click2(){
    // zu testen
    // const rate1=document.querySelector('.rate')
    // rate1.innerHTML=meine_Daten[0].rate
        
    Swal.fire({
      title:"HTML",

      text:"Meine Kenntnisse von 5 Sternen"+meine_Daten[1].rate


    })
       }
      
    
    },
    {
      id:3,
      skills:"Node JS",
      imageUrl:"https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      rate:"⭐⭐",
      click2(){
        // zu testen
        // const rate1=document.querySelector('.rate')
        // rate1.innerHTML=meine_Daten[0].rate
        Swal.fire({
          title:"Node Js",

          text:"Meine Kenntnisse von 5 Sternen"+meine_Daten[2].rate


        })
        
           }
    
    
    },
    {
      id:4,
      skills:"React",
      imageUrl:"https://www.html.it/magazine/paper-js-grafica-vettoriale-con-javascript/",
      rate:"⭐⭐⭐",   
      click2(){
        // const rate1=document.querySelector('.rate')
        // rate1.innerHTML=meine_Daten[0].rate
        
        Swal.fire({
          title:"React",
          text:"Meine Kenntnisse von 5 Sternen"+meine_Daten[3].rate


        })
           }
    
    
    },
    
    
    
    ]

    export default meine_Daten;