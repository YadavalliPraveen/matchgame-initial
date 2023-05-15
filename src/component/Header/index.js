import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <img
        className="logo-image"
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
      />
      <div className="score-timer-container">
        <p className="score">Score:0</p>
        <div className="timer-container">
          <img
            className="timer"
            alt="timer"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          />
          <p className="time">60 sec</p>
        </div>
      </div>
    </div>
  </nav>
)
export default Header
