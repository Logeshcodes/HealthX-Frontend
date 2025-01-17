import Banner from "../components/Banner";
import DoctorCarousel from "../components/Doctors";
import Departments from "../components/Departments";


const Home = () => {
    return (
      <>
        <Banner />
        <DoctorCarousel/>
        <div className="bg-blue-100 ">
        <Departments/>
        </div>
      </>
    );
  };
  

export default Home