import styles from "./galleryad.module.css"

const GalleryAd = () =>{
    return(
        <div className={styles.GalleryAd_Grand}>
            <div className={styles.GalleryAd_Parent}>
                <div className={styles.leftSide_Gallery}>
                    <div className={styles.GalleryAd_head}>Konstructly Project Gallery</div>
                    <div className={styles.GalleryAd_SubHead}>Lorem Ipsum set diet</div>
                    <div className={styles.Gallery_link}>SEE ALL POSTS</div>
                </div>
                <div className={styles.rightSide_Gallery}>
                    <div className={styles.image}><img src="https://satvikatest2.netlify.app/images/gallery-thumb03.jpg"></img></div>
                    <div className={styles.image}><img src="https://satvikatest2.netlify.app/images/gallery-thumb02.jpg"></img></div>
                    <div className={styles.image}><img src="https://satvikatest2.netlify.app/images/gallery-thumb01.jpg"></img></div>
                </div>
            </div>
        </div>
    )
}

export default GalleryAd;