import React from "react";
import styles from '../../Styles/viewprofile.module.css'

export const ExploreImage = ({src}) => {
    return(
        <img src= {src}
            className={styles.gallery_img} alt="gallery-pic" />
    )
}


//export {ExploreImage}