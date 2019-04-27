import { connect } from "dva"
import { Component } from "react"
import { Head, List, Navigator, Introduct } from "../../components"
class Index extends Component {
  render() {
    return (
      <div className="container">
        <Navigator />
        <Head />
        <div className="container-main">
          <List />
          <Introduct />
        </div>
      </div>
    )
  }
}



export default connect()(Index)
