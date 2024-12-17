
import React from 'react';
import Typed from 'typed.js';

function Home() {

    const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Full-stack developer','UI/UX Designer'],
      typeSpeed: 50,
      backSpeed: 50,

      loop : true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
    return (
        <div className="home">
            <div className="container mt-5">
               <div className="row row-cols-1">

                 
               <div className="col text-center mt-5">
               
               <h1 className='text-black fs-1 ' >IZUMI MIYAMURA </h1>
               </div>



                
                <div className="col text-center mt-5">
               
                <h1 className='text-black fs-1'>Im a <span ref={el} className='text-danger' /> </h1>
                </div>

                <div className="col text-center mt-5 fs-sm-6 fs-5">
                    <span>I am a passionate and dedicated Full-Stack Developer with experience in building scalable, efficient, and dynamic web applications. With a solid foundation in both front-end and back-end technologies, I have developed a diverse skill set that allows me to approach projects holistically, ensuring seamless user experiences and robust system functionality.</span>
                </div>

                <div className="col text-center mt-5">
                    <a href="#" className="btn btn-danger ms-2"><i className="fa-brands fa-github "></i></a>
                    <a href="#" className="btn btn-danger ms-2"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#" className="btn btn-danger ms-2"><i className="fa-brands fa-instagram"></i></a>
                </div>
               </div>
            </div>
        </div>
    )
}

export default Home
