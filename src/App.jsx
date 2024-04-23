import './App.css'
import TipButton from './components/TipButton'
import TipCalculatorSection from './components/TipCalculatorSection'

function App() {
  return (
    <div className="bg-teal-100 border w-screen">
      <h1 class="mt-20">SPLI</h1>
      <h1>TTER</h1>

      <div className="bg-white w-1/2 mx-auto my-20 flex">
        <div class="w-1/2">
          <h4>Bill</h4>
          <>form</>
          <h4>Select tip %</h4>
          <TipButton text="5%"/>
          <TipButton text="10%"/>
          <TipButton text="15%"/>
          <TipButton text="25%"/>
          <TipButton text="50%"/>
          <TipButton text="Custom"/>
          <h4>Number of people</h4>
          <>form</>
        </div>

        <div class="w-1/2 my-auto">
          <TipCalculatorSection />
        </div>
      </div>

    </div>
  )
}

export default App
