// import './App.css'
function About() {
  return (
    <div id="about" className="about">
       
       <div className="text-center mt-5 mt-sm-5" >
        <h4>About</h4>
       </div>
        <div className="about_text">
        <div className="container  mt-5">
        <div className="row row-cols-lg-2 row-cols-md-1">
        <div className="col-lg-5 text-center mt-2 ">
        <img src="./image/img.jpg" alt="" className="rounded-circle" width="350" height='350' />
                </div>
                <div className="col text-center mt-3 md-fs-6 fs-5 text-center">
                    <span>  I am a Full-Stack Developer with a strong background in building dynamic, high-performance web applications using PHP, Laravel, and React. I specialize in creating seamless, interactive front-end experiences while ensuring robust, scalable back-end functionality.</span>
                    <div className="mt-1">
                      <h2>skill</h2>
                      <div className="">
                      <i className="fa-brands fa-html5 ms-3 fs-1"></i>
                      <i className="fa-brands fa-css3-alt ms-3 fs-1"></i>
                      <i className="fa-brands fa-js ms-3 fs-1"></i>
                      <i className="fa-brands fa-react ms-3 fs-1"></i>
                      <i className="fa-brands fa-php ms-3 fs-1"></i>
                      <i className="fa-brands fa-laravel ms-3 fs-1"></i>
                      <i className="fa-solid fa-database ms-3 fs-1"></i>
                      </div>
                    </div>
                </div>
        </div>
        </div>
     
      </div>
    </div>
  )
}

export default About
