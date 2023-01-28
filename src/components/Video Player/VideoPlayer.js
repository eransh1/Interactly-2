import React from 'react'
import styles from "./VideoPlayer.module.css"
import {BsCardImage} from 'react-icons/bs'
import {AiFillCloseCircle} from "react-icons/ai"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



const VideoPlayer = ({data,setData}) => {

const copyLink=async (data)=>{


const blob= await writeToCanvas(data.image)

const blob2=new Blob([data.link],{type:'text/plain'})


try {
    await navigator.clipboard.write([new ClipboardItem({[blob.type]:blob,[blob2.type]:blob2})])
    
    toast("Copied")
} catch (error) {
    console.log(error.message)
}

}

function writeToCanvas(src){
   return new Promise((res)=>{
    const canvas=document.createElement('canvas')
    const ctx=canvas.getContext('2d')
    const img=new Image();
    img.src=src

    img.onload=()=>{

        canvas.width=300
        canvas.height=300
        ctx.drawImage(img,0,0,300,300);
        canvas.toBlob((blob)=>{
            res(blob)
        })
        
    }
   })
}




  return (
    <>
        <section className={styles.outerCont}>
        <ToastContainer/>
            <div className={styles.innerCont}>
            <div onClick={()=>setData(null)} className={styles.closeIcon}><AiFillCloseCircle className={styles.close}/></div>
                <div className={styles.imageCont}>
                    <img className={styles.image} src={data.image} alt="gif" />   
                </div>
                <button onClick={()=>copyLink(data)} className={styles.CopyLinkBtn}> <span className={styles.gifIcon}><BsCardImage/></span>Copy Linked GIF</button>
            </div>
        </section>
    </>
  )
}

export default VideoPlayer