import { connect } from "dva"
import { Component } from "react"
import { Head, List, Navigator } from "../../components"
class Index extends Component {
  state = {}
  componentDidMount() {
  }
  render() {
    return (
      <div className="container">
        <Navigator />
        <Head />
        <div className="container-main">
          <List />
        </div>
      </div>
    )
  }
}



export default connect()(Index)
