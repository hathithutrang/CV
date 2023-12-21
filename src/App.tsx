import './App.css'
import './index.css'
import Avatar from './components/Avatar'
import Contact from './components/Contact'
import Expertise from './components/Expertise'
import Personal from './components/PersonalSkill'
import Title from './components/Title'
import About from './components/About'
// import RankStar from './components/RankStar'

function App() {

  return (
    <div className="container mx-auto">
      <div className="cv_wrapper flex">
        <div className="col_left bg-#3958A8 w-[500px]">
        col_left
        <Avatar />
        <Contact/>
        <Expertise/>
        <Personal/>
        </div>
        <div className="col_right flex-1 bg-#FFFFFF">
        col_right
        <Title />
        <About/>
        </div>
      </div>
    </div>
  )
}

export default App