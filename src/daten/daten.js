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
          title:meine_Daten[0].skills,
          text:"Meine Kenntnisse von 5 Sternen"+meine_Daten[0].rate


        })
        
           }
    
    
    },
    {
      id:2,
      skills:"HTML",
      imageUrl:"https://rapidapi.com/blog/wp-content/uploads/2018/06/logo-2582748_640.png",
      rate:"⭐⭐⭐⭐",
       click2(){
    // zu testen
    // const rate1=document.querySelector('.rate')
    // rate1.innerHTML=meine_Daten[0].rate
        
    Swal.fire({
      title:meine_Daten[1].skills,

      text:"Meine Kenntnisse von 5 Sternen"+meine_Daten[1].rate


    })
       }
      
    
    },
    {
      id:3,
      skills:"Node Js",
      imageUrl:"https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      rate:"⭐⭐",
      click2(){
        // zu testen
        // const rate1=document.querySelector('.rate')
        // rate1.innerHTML=meine_Daten[0].rate
        Swal.fire({
          title:meine_Daten[2].skills,

          text:"Meine Kenntnisse von 5 Sternen"+meine_Daten[2].rate


        })
        
           }
    
    
    },
    {
      id:4,
      skills:"React",
      imageUrl:"https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png?width=256&s=3f7493995143d3cf40b1fedc582607cea194b579",
      rate:"⭐⭐⭐",   
      click2(){
        // const rate1=document.querySelector('.rate')
        // rate1.innerHTML=meine_Daten[0].rate
        
        Swal.fire({
          title:meine_Daten[3].skills,
          text:"Meine Kenntnisse von 5 Sternen"+meine_Daten[3].rate


        })
           }
    
    
    },
    {
      id:5,
      skills:"Data Science/ML Python",
      imageUrl:"https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?cs=srgb&dl=pexels-pixabay-265087.jpg&fm=jpg",
      rate:"⭐⭐⭐",   
      click2(){
        // const rate1=document.querySelector('.rate')
        // rate1.innerHTML=meine_Daten[0].rate
        
        Swal.fire({
          title:meine_Daten[4].skills,
          text:"Meine Kenntnisse von 5 Sternen"+meine_Daten[4].rate


        })
           }
    
    
    },
    {
      id:6,
      skills:"C#/Game Development",
      imageUrl:"https://images.pexels.com/photos/9072202/pexels-photo-9072202.jpeg?cs=srgb&dl=pexels-yan-krukov-9072202.jpg&fm=jpg",
      rate:"⭐⭐⭐",   
      click2(){
        // const rate1=document.querySelector('.rate')
        // rate1.innerHTML=meine_Daten[0].rate
        
        Swal.fire({
          title:meine_Daten[5].skills+"<h4> Meine Kenntnisse von 5 Sternen</h4>"+meine_Daten[5].rate+"<h4>hier kann man die Deime meines Spieles testen</h4>",
          text:"Meine Kenntnisse von 5 Sternen"+meine_Daten[5].rate,
          html:'<a href="https://mohamedbelhedi.github.io/fahrschultestspiel2/spiel.html">zum Spiel</a>',
        

        })
           }
    
    
    },
    
    
    
    ]

    export default meine_Daten;