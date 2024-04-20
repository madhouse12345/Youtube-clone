import React, { useEffect, useState } from 'react'
import './Recommended.css'
import API_KEY, { value_converter } from '../../Data'
import { Link } from 'react-router-dom';
const Recommended = ({categoryId}) => {

    const [relativeData ,setRelativeData] = useState([]);
    const fetchData = async() =>{

    const relativeVideo_url=`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`;
    await fetch(relativeVideo_url).then(res=> res.json()).then(data =>(setRelativeData(data.items)));

}
useEffect(()=>{
    fetchData();
},[])


  return (
    <div className='recommended' >
    {relativeData.map((item,index)=>{return(
        <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='side-video-list'>
            <img src={item.snippet.thumbnails.medium.url} alt=''/>
            <div className='vid-info'>
                <h4>{item.snippet.title}</h4>
                <p>{item.snippet.channelTitle}</p>
                <p>{value_converter(item.statistics.viewCount)} views</p>
            </div>
        </Link>
)
        
    })}
        
    </div>
  )
}

export default Recommended