import Content from "./components/Content"
import Side from "./components/Side"


function App() {
  
  return (
    <>
      <div className='col'>
        <div className='side_bar'>
        <Side />  

        </div>
        <div className='content'>
        <Content />

        </div>
      </div>
    </>
  )
}

export default App
