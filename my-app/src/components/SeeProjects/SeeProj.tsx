import styles from "./seeproj.module.css"

const SeeProj = () =>{
    return(
        <div className={styles.SeeProj_Grand}>
            <div className={styles.SeeProj_Parent}>
                <div className={styles.SetParent}>
                    <div className={styles.leftSet_Side}>
                        <img src="constructionShowcase.jpg"></img>
                    </div>
                    <div className={styles.right_Side}>
                        <div className={styles.Written_Head}>Kinstructly Group</div>
                        <div className={styles.Written_Subhead}>Our capability cover all key sectors in Constructions.
                                                                Explore our projects page for more information.</div>
                        <div className={styles.Project_Link}>See our projects</div>
                        <div className={styles.Tag_set}>
                                <div className={styles.tag}>Tag1</div>
                                <div className={styles.tag}>Tag2</div>
                                <div className={styles.tag}>Tag3</div>
                                
                        </div>
                        <div className={styles.Tag_set}>
                        <div className={styles.tag}>Tag4</div>
                        <div className={styles.tag}>Tag5</div>
                        </div>
                        <div className={styles.horizontalRow}></div>
                        <div className={styles.superSmall}>Contact us for assistance between our office hours - 10:00am to 07:00pm on weekdays expcept Saturday and Sunday.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeeProj;