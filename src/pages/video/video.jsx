import React from 'react'
import "./video.css" 
import Playvideo from '../../components/playvideo/Playvideo';
import Recommended from '../../components/Recommended/Recommended';
import { useParams } from 'react-router-dom';
export const Video = () => {
  const {videoId ,categoryId}=useParams();
  
  return (
    <div className='play-container'>
    <Playvideo videoId={videoId}/>
    <Recommended categoryId={categoryId}/>
    </div>
  )
}
export default Video;