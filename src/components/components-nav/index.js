import styles from "./index.css"
import { Component } from "react"
import classnames from "classnames"
import router from 'umi/router';
let pathItem = "/"
class Navigtor extends Component {
    state = { list: ["HOME", "ABOUT"], isShow: false }
    componentDidMount() {
        window.addEventListener("scroll", this.onScroll)
        let url = window.location.hash
        try {
            url = url.split("#")
            pathItem = url[1] === "/" ? "HOME" : "ABOUT"

        } catch (err) {
            pathItem = "/"
        }
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll)
    }
    onScroll = () => {
        this.changeData()
    }
    changeData = () => {
        const scrollTop = document.documentElement.scrollTop;
        const headBg = document.getElementById("top-nav")
        const bgHeight = headBg ? headBg.clientHeight : 0;
        if (scrollTop >= bgHeight) {
            this.setState({ isShow: true })
        } else {
            this.setState({ isShow: false })
        }
    }
    pathGo = (item) => {
        const List = {
            "HOME": "/",
            "ABOUT": "/about"
        }
        if (pathItem !== item) {
            pathItem = item
            router.push(List[item])
        }
    }
    render() {
        const { list, isShow } = this.state
        return (
            <div className={classnames([styles.main, { [styles.mainSel]: isShow }])}  >
                <div className={styles.nav}></div>
                {list.map((item, index) => <div className={styles.navItem} key={index} onClick={() => this.pathGo(item)}>{item}</div>)}
            </div>
        )
    }
}




export default (Navigtor)