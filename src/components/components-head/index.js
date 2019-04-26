import styles from "./index.css"
import { Icon } from "antd"
const Head = ({ config }) => {
    let desc = ""
    let title = "KAADEN"
    let bg = "http://kaaden.orrzt.com/public/uploads/8c23f4a2b2baf68c6c6c020542696629.jpg"
    const url = window.location.pathname
    if (url.includes("/")) {
        bg = config.homeurl
        title = config.hometitle
        desc = config.homelevel
    } else if (url.includes("about")) {
        bg = config.aboutImg
        title = config.aboutitle
        desc = config.aboutlevel
    }
    return (
        <div id="top-nav" className={styles.main} style={{ backgroundImage: `url(${bg})` }}>
            <div className={styles.mainTitle}>
                <div>{title}</div>
                <div>{desc}</div>
            </div>
            <Icon type="down" className={styles.mainIcon} />
        </div>
    )
}


export default Head