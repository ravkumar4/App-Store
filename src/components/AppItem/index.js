// Write your code here

import './index.css'

const AppItem = props => {
  const {appsList} = props
  const {appName, imageUrl} = appsList

  return (
    <fragment>
      <li className="app-item">
        <img src={imageUrl} alt={appName} className="app-logo" />
        <h1 className="app-name">{appName}</h1>
      </li>
    </fragment>
  )
}
export default AppItem
