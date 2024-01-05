import styles from "../sections/Features/_features.module.scss";

function Card(props) {
  return (
    <>
      <div className="col-lg-6 col-xxl-4 p-4 mb-4">
        <div className={styles.card}>
          <div className="card-body text-center">
            <div className={styles.icon}>{props.icon}</div>
            <h5 className="card-title fs-2  my-3">{props.title}</h5>
            <p className="card-text ">{props.text}</p>
            <div className={styles.cardFooter + " justify-content-center pb-0"}>
              <button type="button" className={styles.btn + " px-3 py-2"}>
                {props.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
