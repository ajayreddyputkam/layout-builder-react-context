// Write your code here

import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => {
  const renderContent = () => (
    <div className="content-container-body">
      <h1 className="content-heading-body">Content</h1>
      <p className="body-content-text">
        Lorem ipsum dolor sit amet, consectetor adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
    </div>
  )

  const renderLeftNavbar = () => (
    <div className="left-navbar-container">
      <h1 className="left-navbar-heading-body">Left Navbar Menu</h1>
      <ul className="list-container-body">
        <li className="items-text">Item 1</li>
        <li className="items-text">Item 2</li>
        <li className="items-text">Item 3</li>
        <li className="items-text">Item 4</li>
      </ul>
    </div>
  )

  const renderRightNavbar = () => (
    <div className="right-navbar-body">
      <h1 className="right-navbar-heading-body">Right Navbar</h1>
      <div className="ad-body-container">
        <p className="ad-text-body">Ad 1</p>
        <p className="ad-text-body">Ad 2</p>
      </div>
    </div>
  )

  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value

        return (
          <div className="body-main-container">
            {showLeftNavbar ? renderLeftNavbar() : null}
            {showContent ? renderContent() : null}
            {showRightNavbar ? renderRightNavbar() : null}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default Body
