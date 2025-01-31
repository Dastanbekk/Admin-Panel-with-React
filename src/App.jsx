import { Main } from "./components/main/Main"
import { SlideBar } from "./components/slidebar/SlideBar"


function App() {

  return (
    <div className="grid grid-cols-[20%_minmax(70%,_1fr)]">
      <SlideBar  />
      <Main />
    </div>
  )
}

export default App
