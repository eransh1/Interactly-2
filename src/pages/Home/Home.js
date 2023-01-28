import React, { useState } from 'react'
import styles from "./Home.module.css"
import { FaShare } from 'react-icons/fa';
import VideoPlayer from '../../components/Video Player/VideoPlayer';
import img1 from "../../images/1.gif"
import img2 from "../../images/2.gif"
import thumnail1 from "../../images/thumbnail1.jpg"
import thumbnail2 from "../../images/thumbnail2.jpg"


const Home = () => {

  
  const[data,setData]=useState(null)

  const videoData=[{
    id:1,
    thumbnail:thumnail1,
    image:img1,
    link:"https://sendspark.com/share/haecaq9kpd5wa9n7",
    date:"Wed , Jan 25, 2023",
    length:"0:05",
  },
{
  id:2,
  thumbnail:thumbnail2,
  image:img2,
  link:"https://sendspark.com/share/nw6o8q2iq9pog0b8",
  date:"Tue , Dec 20, 2023",
  length:"0:04",

}
]

const handleShareLink=(item)=>{
  setData(item)
}

  return (
 <>
 {data?<VideoPlayer data={data} setData={setData}/>:null}
  <section className={styles.videoCont}>
<h1 className={styles.videoContTitle}>Videos</h1>

{videoData.map((item)=>{
  return <>
  <div className={styles.videoContainer} id={item.id} key={item.link}>
<div className={styles.previewImage}>
  <img className={styles.image} src={item?.thumbnail} alt="thubnail" />
</div>
<div className={styles.videoDetail}>
  <p className={styles.videoDate}>{item.date}</p>
  <p className={styles.videoLength}>Length : <span>{item.length}</span></p>
</div>
<div onClick={()=>handleShareLink(item)} className={styles.shareLinkCont}>
  <FaShare className={styles.shareIcon}/>
  <p className={styles.shareText}>Share</p>
</div>
</div>
  </>
})}


  </section>
 </>
  )
}

export default Home