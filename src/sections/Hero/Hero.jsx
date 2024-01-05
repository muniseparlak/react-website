import styles from './_hero.module.scss'


function Hero() {
  return (
    <>
      <header className="py-5">
        <div className="container px-lg-5 py-5">
          <div className="p-4 p-lg-5 bg-light text-center">
          <img src='../../../public/assets/Graphic Design White Composition Instagram Post.png' className={styles.photo +" card-img-top img-fluid"}/>
            <h1 className="fw-bold py-2">professional design!</h1>
            <p >
              Corporate identity design is the name given to all the work done
              to represent your company in every environment and to ensure that
              your customers recognize your company or brand in a memorable way.
            </p>
            <div className=" pt-2">
            <button type="button" className={styles.btnColor + " btn px-4 py-2"}>Get Information</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Hero;
