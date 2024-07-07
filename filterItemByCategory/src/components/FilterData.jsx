import React, { useState } from 'react'
import CheckBox from './CheckBox';
import { data } from '../config/filterData';

const FilterData = ({filterData,finalFilterData,setFinalFilterData}) => {

  const [filter,setFilter] = useState({})
  const transformData = {};

  filterData.forEach(item => {
    for(let key in item){
      if(!transformData[key] && key !== 'name'){
        transformData[key] = [];
      }
      if(!transformData?.[key]?.includes(item[key]) && key !== 'name'){

        transformData[key].push(item[key])
      }
    }
  })
  
  const handleChange = (e) => {
    const {name,value,checked} = e.target;
      if(!filter[name] && checked){
        filter[name] = []
      }
      if(checked){
        filter[name].push(value)
      }else{
        if(filter[name]){
          filter[name] = filter?.[name].filter((item) => item !== value)
        }
        if(filter?.[name].length === 0){
          delete filter[name];
        }
      }
      console.log('filter', filter)
      setFilter(filter);
      let outputData = data;
      for(let key in filter){
        outputData = outputData.filter((item) => {
          return filter?.[key].includes(item[key])
        })
      }
      console.log('outputData', outputData);
      setFinalFilterData(outputData);
  }

  // console.log('transformData', transformData);

  return (
    <div>
      {
        Object.entries(transformData).map(([key,value]) => 
          (
            <>
              <p>{key}</p>
              {
                value.map((subCat) => {
                  return <CheckBox label={subCat} name={key} handleChange={handleChange}/>
                })
              }
            </>
          )
          
        )
      }
    </div>
  )
}

export default FilterData