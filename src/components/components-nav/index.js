import styles from "./index.css"
import { Component } from "react"
import classnames from "classnames"
import router from 'umi/router';
import { connect } from "dva"
let pathItem = "/"
class Navigtor extends Component {
    state = { list: ["HOME", "ABOUT"], isShow: false }
    componentDidMount() {
        let url = window.location.hash
        try {
            url = url.split("#")
            pathItem = url[1] === "/" ? "HOME" : "ABOUT"

        } catch (err) {
            pathItem = "/"
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
            document.documentElement.scrollTop = 0
        }
    }
    render() {
        const { isNav } = this.props
        const { list } = this.state
        return (
            <div className={classnames([styles.main, { [styles.mainSel]: isNav }])}  >
                <div className={styles.nav}></div>
                {list.map((item, index) => <div className={styles.navItem} key={index} onClick={() => this.pathGo(item)}>{item}</div>)}
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { isNav } = state.global
    return { isNav }
}



export default connect(mapStateToProps)(Navigtor)