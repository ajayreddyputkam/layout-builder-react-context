// Write your code here

import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeShowContent = () => {
        onToggleShowContent()
      }

      const showOrHideLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const showOrHideRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="configuration-controller-main-container">
          <h1 className="layout-heading-configuration-controller">Layout</h1>
          <div className="content-configuration-controller-container">
            <input
              type="checkbox"
              checked={showContent}
              className="checkbox-configuration-container"
              id="content"
              onClick={onChangeShowContent}
            />
            <label
              className="content-configuration-container"
              htmlFor="content"
            >
              Content
            </label>
          </div>
          <div className="left-navbar-configuration-controller-container">
            <input
              type="checkbox"
              checked={showLeftNavbar}
              className="checkbox-configuration-container"
              id="leftNavbar"
              onClick={showOrHideLeftNavbar}
            />
            <label
              className="content-configuration-container"
              htmlFor="leftNavbar"
            >
              Left Navbar
            </label>
          </div>
          <div className="right-navbar-configuration-controller-container">
            <input
              type="checkbox"
              checked={showRightNavbar}
              className="checkbox-configuration-container"
              id="rightNavbar"
              onClick={showOrHideRightNavbar}
            />
            <label
              className="content-configuration-container"
              htmlFor="rightNavbar"
            >
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
