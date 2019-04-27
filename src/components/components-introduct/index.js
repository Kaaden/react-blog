import styles from "./index.css"
// import { Icon, BackTop } from "antd"
import { connect } from "dva"
import { Component } from "react"
import placeImg from '../../assets/pic.png'
class Introduct extends Component {
    componentDidMount() {
        this.props.dispatch({ type: "global/getIntroduct" })
    }

    render() {
        const { introduct } = this.props
        return (
            <div className={styles.main}>
                <div className={styles.mainItem}>
                    <img className={styles.mainImg} src={introduct.logo} alt="" onError={(e) => e.target.src = placeImg} />
                    <div className={styles.mainItemContent}>
                        <div className={styles.mainName}>{introduct.user}</div>
                        <div className={styles.mainDesc}>{introduct.description}</div>
                        <div className={styles.mainSame}>{introduct.email}</div>
                        <div className={styles.mainSame}>{introduct.city}</div>
                    </div>
                </div>

                {/* <div className="syno-user">
                    <div className="syno-tag">标签</div>

                </div>


                <div className="syno-user"  >
                    <div className="syno-tag">访问量</div>

                </div > */}




            </div >
        )
    }
}



function mapStateToProps(state) {
    const { introduct } = state.global
    return { introduct }
}
export default connect(mapStateToProps)(Introduct)