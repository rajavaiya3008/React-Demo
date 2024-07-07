import React from 'react'

const ShowData = ({data}) => {
  const keys = Object.keys(data[0]);
  return (
    <div>
      <table>
        <thead>
          <tr>
            {
              keys.map((title,i) => <th key={i}>{title}</th>)
            }
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            {
              data.map((item,i) => {
                return Object.entries(item).map(([key,value]) => <td>{value}</td>)
              })
            }
          </tr> */}
          {
            data.map((item,i) => 
            <tr>
              {
                Object.entries(item).map(([key,value]) => <td>{value}</td>)
              }
            </tr>)
          }
        </tbody>
      </table>
    </div>
  )
}

export default ShowData