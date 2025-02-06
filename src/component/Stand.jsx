import stand from '../img/stand.png'
import can from '../img/can.png'
function Stand() {
  return (
    <div className="stand three">
        <div className="container">
            <h3>blackberry</h3>
           <div className="img">
           <img className='can3' src={can} alt="" />
           <img className='stan' src={stand} alt="" />
           </div>
        </div>
    </div>
  )
}

export default Stand