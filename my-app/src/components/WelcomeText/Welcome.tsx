import styles from "./welcome.module.css"

const Welcome = () =>{
    return(
        <div className={styles.Welcome_grand}>
            <div className={styles.Welcome_Parent}>
                <div className={styles.Welcome_Head}>Welcome to <p>Konstructly</p>.</div>
                <div className={styles.Welcome_Subhead}>We believe Production is disconnected from Commercial - yet everything that happens on site has a quantifiable impact on a project's profitability.

We link Progress, Quality and Payments and all the teams / companies involved in a single platform.</div>
            </div>
        </div>
    )
}
export default Welcome;