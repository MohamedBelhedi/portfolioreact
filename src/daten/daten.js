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
        const rate1=document.querySelector('.rate')
        rate1.innerHTML=meine_Daten[0].rate[0]
        
           }
    
    
    },
    {
      id:2,
      skills:"HTML",
      imageUrl:"https://www.html.it/magazine/paper-js-grafica-vettoriale-con-javascript/",
      rate:"⭐⭐⭐⭐",
       click2(){
    // zu testen
    const rate1=document.querySelector('.rate')
    rate1.innerHTML=meine_Daten[0].rate[1]
        
    
       }
      
    
    },
    {
      id:3,
      skills:"Node JS",
      imageUrl:"",
      rate:"⭐⭐",
      click2(){
        // zu testen
        const rate1=document.querySelector('.rate')
        rate1.innerHTML=meine_Daten[0].rate[2]
        
        
           }
    
    
    },
    {
      id:4,
      skills:"React",
      imageUrl:"https://www.html.it/magazine/paper-js-grafica-vettoriale-con-javascript/",
      rate:"⭐⭐⭐",   
      click2(){
        const rate1=document.querySelector('.rate')
        rate1.innerHTML=meine_Daten[0].rate[3]
        
        
           }
    
    
    },
    
    
    
    ]

    export default meine_Daten;