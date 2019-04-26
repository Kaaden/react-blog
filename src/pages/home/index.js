import { connect } from "dva"
import { Component } from "react"
import Head from '../../components/components-head'
import List from '../../components/components-list'
class Index extends Component {
  state = {}
  componentDidMount() {
    this.props.dispatch({ type: "global/getconfig" })
  }
  render() {
    const { headConfig } = this.props
    return (
      <div className="container">
        <Head config={headConfig} />
        <div className="container-main">
         <List/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { headConfig } = state.global
  return { headConfig }
}

export default connect(mapStateToProps)(Index)
