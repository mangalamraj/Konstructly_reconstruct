import styles from "./home.module.css"
const Module1 = () =>{
    return(
        <div className={styles.Home_grand}>

            <div className={styles.Home_parent}>
                <div className={styles.Home_body}>
                    <p className={styles.Feature_Head}>Connect production to commercial.</p>
                    <p className={styles.Feature_Head}>Link Quality and Progress to Payments.</p>
                    <p className={styles.Feature_SubHead}>Provide Commercial with critical Production visibility, streamline production & payment approvals and reduce overspend</p>
                    <div className={styles.button_Set}>
                    <div className={styles.feature_button}>I'm a Main Contractor/Builder.</div>
                    <div className={styles.feature_button}>I'm Subcontractor.</div>
                    </div>

                    
                </div>
                <div className={styles.gradient}>
                </div>
            </div>

            
        </div>
    )
}
export default Module1