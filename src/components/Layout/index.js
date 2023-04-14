// Write your code here

import Header from '../Header'

import './index.css'
import Body from '../Body'
import Footer from '../Footer'

const Layout = () => (
  <div className="layout-bg-container">
    <div className="layout-main-container">
      <Header />
      <Body />
      <Footer />
    </div>
  </div>
)

export default Layout
