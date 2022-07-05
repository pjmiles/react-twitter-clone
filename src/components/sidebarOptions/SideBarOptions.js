import './SideBarOptions.css'

const SideBarOptions = ({ Icon, text, active }) => {
  return (
    <div className={`sidebar-options ${active && "sidebar-options--active"} `}>
      <Icon className='sidebar-options-icon'/>
      <h2>{text}</h2>
    </div>
  )
}

export default SideBarOptions