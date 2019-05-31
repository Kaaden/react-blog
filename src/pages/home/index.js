import { connect } from "dva"
import { Component } from "react"
import { Head, List, Navigator, Introduct, Footer } from "../../components"
class Index extends Component {
  open = () => {
    window.open('https://github.com/login/oauth/authorize\?client_id=a81d2df07a5f4265c4a0', '', 'width=600,height=500,left=10, top=10,toolbar=no, status=no, menubar=no, resizable=yes, scrollbars=yes');
  }
  render() {
    return (
      <div className="container">

        <Navigator />
        <Head />
        <div className="container-main">
          <List />
          <Introduct />
        </div>
        <Footer />
      </div>
    )
  }
}



export default connect()(Index)
