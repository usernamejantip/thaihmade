import React from 'react'
import MainLayout from '../Layouts/MainLayout';
import photo from './ปก.jpg';

const Home = () => {
  return (
    <MainLayout>
      <h1>หน้าหลัก</h1>
      <img src={photo} className="App-photo" width=" " height=" " center="" alt="photo"/>
    </MainLayout>
  )
}

export default Home