import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { data } from './config/filterData'
import FilterData from './components/FilterData'
import ShowData from './components/ShowData'

function App() {

  const [filterData,setFilterData] = useState(data);
  const [finalFilterData,setFinalFilterData] = useState(data);

  return (
    <>
      <div>
        <FilterData filterData={filterData} finalFilterData={finalFilterData} setFinalFilterData={setFinalFilterData}/>
        <ShowData data={finalFilterData}/>
      </div>
    </>
  )
}

export default App
