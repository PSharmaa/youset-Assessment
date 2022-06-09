import { Container } from '@material-ui/core';
import Button from './Button';
import './itemcard.css'
function Itemcard(props) {

  return (
    
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow">
        <img src={props.img} className="card-img-top" alt=""/>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.desc}</p>
          <p className="card-text">Price:- ${props.price}</p>
          <Button className="btn"/>
        </div>
      </div>
    </div>

  );
}

export default Itemcard;
