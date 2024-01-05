import styles from "./_navbar.module.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-secondary py-3">
        <div className="container-fluid ms-5 ">
          <div>
            <a className={styles.navColor + " navbar-brand fs-1 fw-bold me-5"} href="#">
              Design
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto pe-4 mb-2 mb-lg-0">
              <li className={styles.navColor + " nav-item"}>
                <a
                  className={styles.navColor + " nav-link active"}
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
        
      </nav>
    </>
  );
}

export default Navbar;
