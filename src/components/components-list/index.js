import { connect } from "dva"
import { Component } from "react"
import styles from "./index.css"
class List extends Component {
    state = {}
    componentDidMount() {
        this.props.dispatch({ type: "global/getconfig" })
    }
    render() {
        console.log(1)
        return (
            <div class={styles.main}>1</div>
        )
    }
}

// function mapStateToProps(state) {
//   const { headConfig } = state.global
//   return { headConfig }
// }

export default connect()(List)
