import MatchGame from './components/MatchGame'
import './App.css'

const tabsList = [
  {tabId: 'FRUIT', displayText: 'Fruits'},
  {tabId: 'ANIMAL', displayText: 'Animals'},
  {tabId: 'PLACE', displayText: 'Places'},
]

const imagesList = [
  {
    id: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/orange-thumbnail-img.png',
    category: 'FRUIT',
  },
  {
    id: '04ac97fe-8a83-4d20-9d6a-a9b51fb3b70d',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/panda-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/panda-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: 'place-1',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/taj-mahal-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/taj-mahal-thumbnail-img.png',
    category: 'PLACE',
  },
  {
    id: 'fruit-2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/apple-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/apple-thumbnail-img.png',
    category: 'FRUIT',
  },
  {
    id: 'animal-2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/lion-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/lion-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: 'place-2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/golden-temple-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/golden-temple-thumbnail-img.png',
    category: 'PLACE',
  },
]

const App = () => <MatchGame tabsList={tabsList} imagesList={imagesList} />

export default App
