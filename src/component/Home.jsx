import blackberry from '../img/blackberry.png'
import can from '../img/can.png'
import coconoutleaf from '../img/coconoutleaf.png'
import leaf from '../img/leaf.png'

const Home = () => {
  return (
   <>
   
  
   <body>
   <div className="hero">
    <header>
     <nav>
     <a href="# " className="logo">M $ P</a>
        <div className="nav_links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
        </div>
     </nav>
    </header>

    <div className="container">
        <h1> <span>M</span>  <span>$</span> <span>P</span> </h1>
        <img id='can' src={can} alt="" />
        <img id='blackberry1'src={blackberry} alt="" />
        <img id='blackberry2'src={blackberry} alt="" />
        <img id='blackberry3'src={blackberry} alt="" />
        <img id='leaf'src={leaf} alt="" />
        <img id='coconoutleaf'src={coconoutleaf} alt="" />
    </div>
   </div>
   </body>
  
   </>
  )
}

export default Home