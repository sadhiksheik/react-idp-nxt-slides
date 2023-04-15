import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import Header from './components/Header'
import SlidesTab from './components/SlidesTab'

import './App.css'

// This is the list used in the application. You can move them to any component needed.

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

// Replace your code here
class App extends Component {
  state = {
    mainHeading: 'Welcome',
    mainDescription: 'Rahul',
    activeTabId: initialSlidesList[0].id,
    slidesList: initialSlidesList,
    displayHeading: true,
    displayDescription: true,
  }

  changeActiveTab = (id, head, descrp) => {
    this.setState({activeTabId: id, mainHeading: head, mainDescription: descrp})
  }

  addNewSlide = () => {
    const {slidesList, activeTabId} = this.state
    const newSlide = {
      id: uuidv4(),
      heading: 'Heading',
      description: 'Description',
    }
    const index = slidesList.findIndex(each => each.id === activeTabId)
    const newList = []
    for (let i = 0; i < slidesList.length; i += 1) {
      if (i === index) {
        newList.push(slidesList[i], newSlide)
      } else {
        newList.push(slidesList[i])
      }
    }
    this.setState({
      slidesList: newList,
      activeTabId: newSlide.id,
      mainHeading: newSlide.heading,
      mainDescription: newSlide.description,
    })
  }

  changeHeading = event => {
    this.setState({mainHeading: event.target.value})
  }

  changeDescription = event => {
    this.setState({mainDescription: event.target.value})
  }

  changeHeadingDisplay = () => {
    this.setState({displayHeading: false})
  }

  changeDescriptionDisplay = () => {
    this.setState({displayDescription: false})
  }

  toggleHeading = () => {
    this.setState({displayHeading: true})
  }

  toggleDescription = () => {
    this.setState({displayDescription: true})
  }

  render() {
    const {
      slidesList,
      activeTabId,
      mainHeading,
      mainDescription,
      displayHeading,
      displayDescription,
    } = this.state

    return (
      <>
        <Header />
        <div className="main-container">
          <div className="slides-tab-container">
            <button
              type="button"
              className="new-tab-container"
              onClick={this.addNewSlide}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
                alt="new plus icon"
                className="plus-icon"
              />
              New
            </button>
            <ol className="slides-list-container">
              {slidesList.map((each, index) => (
                <SlidesTab
                  slideNumber={index + 1}
                  tabDetails={each}
                  mainHeading={mainHeading}
                  mainDescription={mainDescription}
                  key={each.id}
                  isActive={activeTabId === each.id}
                  changeActiveTab={this.changeActiveTab}
                />
              ))}
            </ol>
          </div>
          <div className="main-slide-container">
            <div className="main-container-slide">
              {displayHeading ? (
                <h1
                  className="main-heading"
                  onClick={this.changeHeadingDisplay}
                >
                  {mainHeading}
                </h1>
              ) : (
                <input
                  type="text"
                  value={mainHeading}
                  onChange={this.changeHeading}
                  onBlur={this.toggleHeading}
                />
              )}
              {displayDescription ? (
                <p
                  className="main-description"
                  onClick={this.changeDescriptionDisplay}
                >
                  {mainDescription}
                </p>
              ) : (
                <input
                  type="text"
                  value={mainDescription}
                  onChange={this.changeDescription}
                  onBlur={this.toggleDescription}
                />
              )}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App
