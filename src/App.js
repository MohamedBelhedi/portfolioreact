import logo from './logo.svg';
import './App.css';
import anime from 'animejs';
import 'animate.css';
import {Button,Card,Navbar} from 'react-bootstrap'
import { Routes,Route } from 'react-router-dom';
import Bild from './bewerbung.jpg'
import momo from './momo.json'


import 'tachyons'

import ReactAnime from 'react-animejs'
import meine_Daten from './daten/daten';

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
console.log(res[0].name)

  }
 if(input.includes("alter"))
 {
  const test2=document.querySelector('.test2')
test2.innerHTML=res[0].alter
console.log(res[0].alter)
 }
 if(input.includes("beruf"))
 {
  const test2=document.querySelector('.test2')
test2.innerHTML=res[0].Beruf
console.log(res[0].Beruf)
 }
 if(input.includes("hobby"))
 {
  const test2=document.querySelector('.test2')
test2.innerHTML=res[0].hobby
console.log(res[0].hobby)
 }
 if(input.includes("ausbildung"))
 {
  const test2=document.querySelector('.test2')
test2.innerHTML=res[0].ausbildung
console.log(res[0].ausbildung)
 }
}else if(input!="name"){
  let test2=document.querySelector('.test2')
  
  
      test2.innerHTML="leider nicht vorhanden"
    
    }

  
})
  




}




 
// await fetch(momo)
// .then(res=>res.json())
// .then(result=>{

//   const jsonTest=JSON.stringify(result)

//   console.log(jsonTest)


// })


  return (
    <>
    
    <header className="App">
      <Anime   initial={[
    {
      targets: "#Box",
      translateX: 50,
      easing: "linear"
    }
  ]} >
    <div className="App">

 <img src={Bild} className="br-100 ba h6 w10 dib"/>

    </div>

  <h1 onChange={animeEnter}  onMouseEnter={anime}  onMouseLeave={anime2} >{testText.toLocaleUpperCase()}</h1>
  </Anime>


  


    </header>
    <hr />

<div>

<h2 className="d-flex text-content-center">Meine Fähigkeiten</h2>


</div>
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

  
<hr />
<div className="suche">
<h2>Mehr über Mich hier Suchen 😁

<p>hier ist eine micro API, über mich gespeichert einfach, die Schlagwörter 
  wie Name,Alter,Beruf,Hobby,Ausbildung etc. 
  suchen,und mit Enter bestätigen </p>

</h2>

<h2 className="test2"></h2>


</div>

<div>


<input className="suchefunc br-pill h2.5 w5 dib" type="text" onKeyDown={suche} placeholder={"suchen... Eingabe(enter) dürcken"} />

</div>







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
