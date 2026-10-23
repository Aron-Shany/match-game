import {Component} from 'react'
import './index.css'

class MatchGame extends Component {
  constructor(props) {
    super(props)

    const {imagesList} = props

    this.state = {
      score: 0,
      time: 60,
      activeTabId: 'FRUIT',
      matchImage: imagesList[0],
      isGameOver: false,
    }
  }

  componentDidMount() {
    this.startTimer()
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  startTimer = () => {
    clearInterval(this.timerId)
    this.timerId = setInterval(this.decreaseTime, 1000)
  }

  decreaseTime = () => {
    this.setState(prevState => {
      if (prevState.time <= 1) {
        clearInterval(this.timerId)
        return {
          time: 0,
          isGameOver: true,
        }
      }

      return {
        time: prevState.time - 1,
      }
    })
  }

  onClickTab = tabId => {
    this.setState({activeTabId: tabId})
  }

  onClickThumbnail = clickedImage => {
    const {imagesList} = this.props
    const {matchImage, isGameOver} = this.state

    if (isGameOver) {
      return
    }

    if (clickedImage.imageUrl === matchImage.imageUrl) {
      let randomIndex = Math.floor(Math.random() * imagesList.length)

      if (imagesList.length > 1) {
        while (imagesList[randomIndex].id === matchImage.id) {
          randomIndex = Math.floor(Math.random() * imagesList.length)
        }
      }

      this.setState(prevState => ({
        score: prevState.score + 1,
        matchImage: imagesList[randomIndex],
      }))
    } else {
      clearInterval(this.timerId)
      this.setState({isGameOver: true})
    }
  }

  onPlayAgain = () => {
    const {imagesList} = this.props

    clearInterval(this.timerId)

    this.setState(
      {
        score: 0,
        time: 60,
        activeTabId: 'FRUIT',
        matchImage: imagesList[0],
        isGameOver: false,
      },
      this.startTimer,
    )
  }

  renderGameView = () => {
    const {tabsList, imagesList} = this.props
    const {score, time, activeTabId, matchImage} = this.state

    const filteredImages = imagesList.filter(
      eachImage => eachImage.category === activeTabId,
    )

    return (
      <>
        <nav className="navbar">
          <div className="navbar-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
              alt="website logo"
              className="website-logo"
            />
          </div>

          <ul className="score-timer-container">
            <li>
              <p className="score-text">
                Score: <span className="score-value">{score}</span>
              </p>
            </li>

            <li className="timer-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
                className="timer-icon"
              />
              <p className="time-value">{time} sec</p>
            </li>
          </ul>
        </nav>

        <div className="game-container">
          <img src={matchImage.imageUrl} alt="match" className="match-image" />

          <ul className="tabs-container">
            {tabsList.map(eachTab => (
              <li key={eachTab.tabId}>
                <button
                  type="button"
                  className={`tab-button ${
                    activeTabId === eachTab.tabId ? 'active-tab' : ''
                  }`}
                  onClick={() => this.onClickTab(eachTab.tabId)}
                >
                  {eachTab.displayText}
                </button>
              </li>
            ))}
          </ul>

          <ul className="thumbnails-container">
            {filteredImages.map(eachImage => (
              <li className="thumbnail-item" key={eachImage.id}>
                <button
                  type="button"
                  className="thumbnail-button"
                  onClick={() => this.onClickThumbnail(eachImage)}
                >
                  <img
                    src={eachImage.thumbnailUrl}
                    alt="thumbnail"
                    className="thumbnail-image"
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </>
    )
  }

  renderScoreCard = () => {
    const {score} = this.state

    return (
      <div className="score-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy-image"
        />

        <p className="score-card-label">YOUR SCORE</p>
        <p className="final-score">{score}</p>

        <button
          type="button"
          className="play-again-button"
          onClick={this.onPlayAgain}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
            className="reset-icon"
          />
          PLAY AGAIN
        </button>
      </div>
    )
  }

  render() {
    const {isGameOver} = this.state

    return (
      <div className="match-game">
        {isGameOver ? this.renderScoreCard() : this.renderGameView()}
      </div>
    )
  }
}

export default MatchGame
