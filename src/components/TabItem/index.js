// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsList, updateTabId, isActive} = props
  const {tabId, displayText} = tabsList

  const activeClassName = isActive ? 'active-button' : 'normal-button'

  const onClickTabItem = () => {
    updateTabId(tabId)
  }

  return (
    <li className="tab-items">
      <button
        className={activeClassName}
        type="button"
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
