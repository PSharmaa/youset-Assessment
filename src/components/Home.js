import Itemcard from "./Itemcard";
import data from "./data";
import img from '../images/insurance.jpg'
import './home.css'
function Home() {
  return (
    <>
      <h1 className="text-center mt-3">All Insurance Packages</h1>
      <section className="py-4 ">
        <div className="row justify-content-center">
          {data.packagedata.map((item, index) => {
            return <Itemcard img src={img} name={item.name} desc={item.desc} price={item.price} key={index} />;
          })}
        </div>
      </section>
    </>
  );
}

export default Home;
