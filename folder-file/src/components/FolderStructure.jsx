import React, { useState } from 'react'
import { root } from '../config/folderData';

const FolderStructure = ({folderData,setFolderData}) => {

  const [show,setShow] = useState(false);
  const [showInput,setShowInput] = useState(false);
  const [createFolder,setCreateFolder] = useState(true);

  const [newItemName,setNewItemName] = useState('');
  const tree = root;

  const handleClick = () => {
    setShow(!show);
    console.log('span clicked',show)
  }

  const searchItem = (currId,folderData,newItem) => {
    let presentItem;
    console.log('folderData', folderData)
    folderData.items.push(newItem);
    console.log('folderData', folderData)
    // presentItem = tree.items.find((item) => item.id === currId)
    // console.log('presentItem', presentItem)
    // if(!presentItem){
    //   items.forEach((item) => {
    //     searchItem(currId,item.items);
    //   })
    // }
  }

  const insertItems = (newItem,id) => {
    // console.log('insert filder id',id);
    // if(id === 1){
    //   setFolderData((prev) => (
    //     {
    //       ...prev,
    //       items: [...prev.items,newItem]
    //     }
    //   ))
    // }
    
      console.log('folderData', folderData)
      folderData.items.push(newItem);
      console.log('folderData', folderData)
    
  }

  const createItem = (e,newItemName,createFolder,id) => {
    if(e.keyCode === 13){
      const newItem = {
        id:new Date().getMilliseconds(),
        name:newItemName,
        isFolder:createFolder,
        items:[]
      }

      insertItems(newItem,id);


      // setFolderData((prev) => (
      //   {
      //     ...prev,
      //     items: [...prev.items,newItem]
      //   }
      // ))
      setShowInput(false);
      setShow(true);
      setNewItemName('');
    }
  }

  if(folderData.isFolder){
    return (
      <div>
          <div className='create-folder' onClick={() => handleClick()}>
            <span>📁{folderData.name}</span>
            <div>
              <button onClick={() => {
                  setShowInput(!showInput)
                  setCreateFolder(true)
                }}>Folder +</button>
              <button onClick={() => {
                  setShowInput(!showInput)
                  setCreateFolder(false)
                }}>File +</button>
            </div>
          </div>

          

          <div className='input' style={{display:showInput ? 'block':'none'}}>
            <input 
            type='text' 
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            onKeyDown={(e) => createItem(e,newItemName,createFolder,folderData.id)}
            />
          </div>

          <div className='folder' style={{display: show ? 'block' : 'none'}}>
              {
                folderData.items.map((item,i) => {
                  return <FolderStructure folderData={item} key={i} setFolderData={setFolderData}/>
                })
              }
          </div>
      </div>
    )
  }else{
    return (
      <div>
        <span>📄{folderData.name}</span>
      </div>
    )
  }
}

export default FolderStructure