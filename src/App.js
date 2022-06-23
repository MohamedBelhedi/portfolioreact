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

  animeTest.style.color="red";
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

 <img src={Bild} className="br-100 ba h4 w4 dib"/>

    </div>

  <h1 onChange={animeEnter}  onMouseEnter={anime}  onMouseLeave={anime2} >{testText.toLocaleUpperCase()}</h1>
  </Anime>


  


    </header>

    <div className="App">


{meine_Daten.map(({id,skills,imageUrl,rate,click2})=>(


<Card className="cardTest" style={{ width: '18rem',background:"aqua",margin:"10px" }}>
<Card.Img variant="top" src={imageUrl} style={{width:"200px",height:"200px"}} />
<Card.Body>
  <Card.Title>{skills}</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
  </Card.Text>
  <div className="rate" key={rate}>
{rate}
  </div>
{/* Kenntnis:{rate} */}
</Card.Body>
<Button variant="primary" onClick={click2}>Hallo </Button>
</Card>






))}





 

      


    </div>

  
<hr />
<div className="suche">
<h1>Mehr über Mich hier Suchen 😁

<p>hier ist eine micro API, über mich gespeichert einfach, die Schlagwörter wie Name,Alter,Beruf,Hobby etc. suchen </p>

</h1>
<div  className="suchefunc br-pill h4 w4 dib">

<input className="suchefunc br-pill h2.5 w5 dib" type="text" onKeyDown={suche} />

</div>



</div>
<div>

<h2 className="test2"></h2>


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
