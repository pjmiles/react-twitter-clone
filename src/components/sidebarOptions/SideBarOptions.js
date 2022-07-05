import './SideBarOptions.css'

const SideBarOptions = ({ Icon, text }) => {
  return (
    <div className='sidebar-options'>
      <Icon className='sidebar-options-icon'/>
      <h2>{text}</h2>
    </div>
  )
}

export default SideBarOptions