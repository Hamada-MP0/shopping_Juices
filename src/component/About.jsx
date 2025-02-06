import blackberry from '../img/blackberry.png'

import video from '../img/video.mp4'

const About = () => {
  return (
    <>
    <div className="about two">
        <div className="container">
            <div className="text">
                    <div className='content'>
                    <h2>Best Ingredients Food Juices <span>
                    On Right Handmade </span></h2>

                    <div className="boxs">
                        <div className="box">
                            <img src={blackberry} alt="" />
                            <h4>Best Ingredients</h4>
                            <p> ipsum dolor sit amet, 
                                consectetur adipiscing elit. 
                                Sed sed posuere ipsum.</p>
                        </div>

                        <div className="box">
                            <img src={blackberry} alt="" />
                            <h4>Best Ingredients</h4>
                            <p> ipsum dolor sit amet, 
                                consectetur adipiscing elit. 
                                Sed sed posuere ipsum.</p>
                        </div>
                    </div>

                    <a href="#" className='btn'> Shop Now</a>
                    </div>
                    <div className="img">
                    <img className='blackberry1'src={blackberry} alt="" />
        <img className='blackberry2'src={blackberry} alt="" />
        <img className='blackberry3'src={blackberry} alt="" />
                    <video className='canVi' src={video} alt="" controls autoPlay muted loop />

                    </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default About