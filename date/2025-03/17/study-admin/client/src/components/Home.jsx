import React, { useEffect, useState } from 'react'
import { getStuListApi } from '../api/stuApi'

export default function Home() {
  // 定义一个函数searchItem，用于搜索项目
  const searchItem = () => {
    // 打印searchItem
    console.log('searchItem')
  }

  // 定义一个changeHandle函数，接收一个参数value
  const changeHandle = (value) => {
    // 打印出changeHandle和value的值
    console.log('changeHandle', value)
  }

  const [stuList, setStuList] = useState([]);

  useEffect(() => {
    async function getData() {
      const {data} = await getStuListApi()
      console.log('%c [ data ]-22', 'font-size:13px; background:pink; color:#bf2c9f;', data)
      setStuList(data)
    }
    getData()
  }, [])
  

  const trs = stuList.map((item, index) => {
    return ( 
      <tr key={index}>
        <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.phone}</td>
          <td>
              详情
          </td>
      </tr>
    )
  })
  
  
  return (
    <div>
      <h1></h1>
      {/* 搜索框 */}
      <input
       type="text" 
       placeholder='搜索' 
       className='form-control' 
       value={searchItem} 
       onChange={changeHandle} />

       {/* 表格 */}
       <table className='table table-striped table-bordered' >
          <thead>
            <tr>
              <th>姓名</th>
              <th>年龄</th>
              <th>联系方式</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {trs}
          </tbody>
       </table>
    </div>
  )
}
