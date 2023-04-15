import './index.css'

const TabItem = props => {
  const {
    slideNumber,
    tabDetails,
    isActive,
    changeActiveTab,
    mainHeading,
    mainDescription,
  } = props
  const {heading, description, id} = tabDetails

  const bgClassName = isActive ? 'list-item active-list' : 'list-item'

  const slideClicked = () => {
    changeActiveTab(id, heading, description)
  }

  return (
    <li
      className={bgClassName}
      onClick={slideClicked}
      testid={`slideTab${slideNumber}`}
    >
      <p className="count">{slideNumber}</p>
      <div className="slide">
        <h1 className="slide-heading">{isActive ? mainHeading : heading}</h1>
        <p className="slide-description">
          {isActive ? mainDescription : description}
        </p>
      </div>
    </li>
  )
}

export default TabItem
