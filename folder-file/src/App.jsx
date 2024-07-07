import { useState } from 'react'
import { root } from './config/folderData'
import FolderStructure from './components/FolderStructure'

function App() {
  const [folderData, setFolderData] = useState(root)
  console.log('FolderData', folderData)

  return (
    <>
      <div>
        <FolderStructure folderData={folderData} setFolderData={setFolderData}/>
      </div>
    </>
  )
}

export default App
