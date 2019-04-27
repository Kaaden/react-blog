import styles from "./index.css"
import { Component } from "react"
import classnames from "classnames"
class Navigtor extends Component {
    state = { list: ["HOME", "ABOUT"], isShow: false }
    componentDidMount() {
        window.addEventListener("scroll", this.onScroll)
    }
    componentWillUnmount() {
        window.addEventListener("scroll", this.onScroll)
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
    render() {
        const { list, isShow } = this.state
        return (
            <div className={classnames([styles.main, { [styles.mainSel]: isShow }])}  >
                <div className={styles.nav}></div>
                {list.map((item, index) => <div className={styles.navItem} key={index}>{item}</div>)}
            </div>
        )
    }
}




export default (Navigtor)