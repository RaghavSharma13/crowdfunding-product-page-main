import './App.css';
import Navbar from './components/navbar'
import Card from './components/Card'
import Patreons from './components/patreons'
import ProjectDescription from './components/ProjectDescription'
import cardList from './components/ProductList'
import React,{ useState } from 'react';
import Modal from './components/modal';



const ProductPage=()=> {
  const [modalState,setModalState]=useState([false,false]);
  
  const handleModalState=()=>{
    if(!modalState[0])
      setModalState([true,false]);
    else setModalState([false,true]);
  }

  return (
    <div className="ProductPage">
      <header className="Pageheader">
        <Navbar/>
      </header>
      <main>
      <Card showModal={handleModalState}/>
      <Patreons/>
      <ProjectDescription startIndex={1} heading={"About this project"} cardList={cardList} openNext={handleModalState}>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.<br/>
          
          Featuring artisan craftsmanship, the
          simplicity of design creates extra desk space below your computer to
          allow notepads, pens, and USB sticks to be stored under the stand.
      </ProjectDescription>
      </main>
      <Modal helperClass={modalState[0]?"fade-in":modalState[1]?"fade-out":""} closeModal={handleModalState}/>
      <div className={`modalOverlay ${modalState[0]?"fade-in":modalState[1]?"fade-out":""}`}></div>
    </div>
  );
}

export default ProductPage;
