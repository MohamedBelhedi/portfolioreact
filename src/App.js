
import './App.css';

import 'animate.css';
import {Button,Card,Navbar} from 'react-bootstrap'
import { Routes,Route } from 'react-router-dom';
import Bild from './bewerbung.jpg'
import 'react-bootstrap'



import 'tachyons'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import ReactAnime from 'react-animejs'
import meine_Daten from './daten/daten';
import Whatsapp from './components/whatsapp';
import { createElement } from 'react';
import { momo } from './momo';

// eine Such Leiste wo der user nach mein Name und meine Alter etc das als JSON datei und mit fetch un then aufrufen
const {Anime, stagger} = ReactAnime

function App() {

const testText="Mein Portfolio Web App & Gamedeveloper"
const anime=()=>{

  const animeTest=document.querySelector('h1')

  animeTest.style.color="yellow";
}
const anime2=()=>{
  const animeTest=document.querySelector('h1')

  animeTest.style.color=null;
  animeTest.style.transition="2s"

}

const animeEnter=()=>{
const animeenter=document.querySelector('h1')
animeenter.documentElement.style.setProperty('animate__flip','--animate-duration', '.5s');

}


const Datentschutz=()=>{

  return (<h1>Datenschutz</h1>)



}


const suche=async(e)=>{




  

 await Promise.resolve(momo)
.then(res=>{
  const input=document.querySelector('input').value

 

   
    
  
  if(e.key==="Enter"){
    if(input.includes("name")){

const test2=document.querySelector('.test2')
test2.innerHTML=res[0].name
test2.style.color="yellow"
console.log(res[0].name)

  }
 if(input.includes("alter"))
 {
  const test2=document.querySelector('.test2')
test2.innerHTML=res[0].alter
test2.style.transition="all 2s ease-in-out"
test2.style.color="yellow"

console.log(res[0].alter)
 }
 if(input.includes("beruf"))
 {
  const test2=document.querySelector('.test2')
test2.innerHTML=res[0].Beruf
test2.style.transition="all 2s ease-in-out"
test2.style.color="yellow"
console.log(res[0].Beruf)
 }
 if(input.includes("hobby"))
 {
  const test2=document.querySelector('.test2')
test2.innerHTML=res[0].hobby
test2.style.transition="all 2s ease-in-out"
test2.style.color="yellow"
console.log(res[0].hobby)
const bildApi=document.querySelector('.bildApi')
const pic = document.createElement("IMG");
pic.setAttribute("src",res[0].image);
pic.setAttribute("width", "500");
pic.setAttribute("height", "600");

bildApi.appendChild(pic);

 }
 if(input.includes("ausbildung"))
 {
  const test2=document.querySelector('.test2')
  test2.style.transition="all 2s ease-in-out"
test2.style.color="yellow"
test2.innerHTML=res[0].ausbildung

console.log(res[0].ausbildung)
 }
 if(input.includes("alltag"))
 {
  const test2=document.querySelector('.test2')
  test2.style.transition="all 2s ease-in-out"
test2.style.color="yellow"
test2.innerHTML="das ist Mein Alltag"

console.log(res[0].image)
const bildApi=document.querySelector('.bildApi')
const pic = document.createElement("IMG");
pic.setAttribute("src",res[0].image);
pic.setAttribute("width", "500");
pic.setAttribute("height", "600");

bildApi.appendChild(pic);


 }
}else if(input!=="name"){
  let test2=document.querySelector('.test2')
  
  
      test2.innerHTML="leider nicht vorhanden"
      test2.style.transition="all 2s ease-in-out"
      test2.style.color="white"
    
    }

  
})
  




}

// versucht ein wort über js zu suchen 
// const onWort=()=>{

//   const wort1=document.querySelector('p')
//  const wort1_ex=wort1.map("Name")

//   if(wort1_ex.includes(["Name"]))
// {
  

//   wort1.style.backgroundColor="red";


// }



// }




 
// await fetch(momo)
// .then(res=>res.json())
// .then(result=>{

//   const jsonTest=JSON.stringify(result)

//   console.log(jsonTest)


// })


  return (
    <>
   
    <header className="App">
    
 <img src={Bild} className="br-100 ba h6 w10 dib"/>
    <div className="App">


    </div>

  <h1 onChange={animeEnter}  onMouseEnter={anime}  onMouseLeave={anime2} >{testText.toLocaleUpperCase()}</h1>
 


  


    </header>
    <hr />

<div>


<h2 className="text-center">Meine Fähigkeiten</h2>


</div>

<AnimationOnScroll animateIn="animate__backInDown">
    <div className="App">


{meine_Daten.map(({id,skills,imageUrl,click2})=>(


<Card className="justify-content-md-center cardTest" style={{ width: '18rem',background:"aqua",margin:"10px" }}>
<Card.Img className="justify-content-md-center" variant="top" src={imageUrl}  style={{ width: '18rem',height:"18rem" } } />
<Card.Body>
  <Card.Title>{skills}</Card.Title>
  {meine_Daten.map(({rate})=>(

<div className="rate" value={rate}>

</div>

  ))}</Card.Body>
<Button className="btn"  variant="primary" onClick={click2}>Bewertung der Fähigkeiten</Button>
</Card>






))}





 

      


    </div>
 </AnimationOnScroll>


  
<hr />
<AnimationOnScroll animateIn="animate__backInDown">
<div className="suche">
<h2>Mehr über Mich hier Suchen 😁

<p 

// onMouseEnter={onWort}

>hier ist eine micro API über mich gespeichert einfach, die Schlagwörter 
  wie <b>Name,Alter,Beruf,Hobby,Ausbildung,Alltag</b> etc. 
  suchen,und mit Enter bestätigen </p>
  <div>


<input className="suchefunc br-pill h2.5 w5 dib" type="text" onKeyDown={suche} placeholder={"suchen... Eingabe(enter) dürcken"} />

</div>

</h2>


<h2 className="test2" ></h2>


</div>
<div className="bildApi"></div>



</AnimationOnScroll>
<Whatsapp/>





{/* Routes */}

<Routes>

<Route path="/" exact/>
<Route path="/datentschutz" 
exact
element={<Datentschutz/>}
/>


</Routes>
</>
  );
}

export default App;
