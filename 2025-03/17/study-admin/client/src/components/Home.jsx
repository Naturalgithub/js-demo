import React, { useEffect } from 'react'
import { getStuListApi } from '../api/stuApi'

export default function Home() {

  useEffect(() => {
    console.log('123');
    async function getData() {
      const data = await getStuListApi()
      console.log('%c [ data ]-10', 'font-size:13px; background:pink; color:#bf2c9f;', data)
    }
    getData()
  }, [])

  return (
    <div>Home</div>
  )
}
