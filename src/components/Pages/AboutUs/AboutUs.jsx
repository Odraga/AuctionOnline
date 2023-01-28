import style from "./AboutUs.module.css"
import sewingMachine from "../../../assets/sewing-machine-aboutus.jpg"

function AboutUs() {
  return (
    <>
      
      <div className={style.aboutus__container}>
        <div className={style.aboutus__container__sewingMachine}>
          <img src={sewingMachine}  alt="" />
        </div>
        <div className={style.aboutus__container__information}>
          <div className={style.aboutus__container__title}>
            <h2>About us</h2>
            
          </div>
          <hr />
          <div className={style.aboutus__container__text}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
              deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default AboutUs