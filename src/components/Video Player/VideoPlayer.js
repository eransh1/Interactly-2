import React, { useEffect } from 'react'
import styles from "./VideoPlayer.module.css"
import {BsCardImage} from 'react-icons/bs'
import {AiFillCloseCircle} from "react-icons/ai"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const VideoPlayer = ({data,setData}) => {

//OLD WAY OF COPYING
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

//BETTER CODE FOR COPYING
async function copyGifToClipboard(gifURL, link) {
    try {
      // fetching GIF from the url
      const response = await fetch(gifURL);

      // converting GIF to blob
      const blob = await response.blob();

      // reader to convert the blob to dataURL
      const reader = new FileReader();
      reader.onloadend = async () => {
        // using clipboard API to copy GIF to clipboard
        await navigator.clipboard.write([
          new ClipboardItem({
            /**
             * create an image element using the dataURL of GIF and paragraph element using the link
             * then create blob of both of the string
             * */

            "text/html": new Blob(
              [
                `<img src='${reader.result}'><br>`,
                `<a href='${link}'>Watch Video</a>`,
              ],
              { type: "text/html" }
            ),
          }),
        ]);
      };

      // reading the blob as dataURL
      reader.readAsDataURL(blob);

      toast.success("GIF copied to clipboard");
    } catch (err) {
      console.error("Failed to copy GIF to clipboard: ", err);
    }
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
                <button onClick={()=> copyGifToClipboard(data.image,data.link)} className={styles.CopyLinkBtn}> <span className={styles.gifIcon}><BsCardImage/></span>Copy Linked GIF</button>
                
            </div>
        </section>
    </>
  )
}

export default VideoPlayer