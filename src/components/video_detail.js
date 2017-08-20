import React from 'react';

const VideoDetail = ({video}) => {
	console.log(video)
  if (!video){
  	return (
  	<div>
  	 Loading......
  	</div>
  	)
  }
  const video_url = `https://www.youtube.com/embed/${video.id.videoId}`
  return(
  	<div className="col-md-8 video_details">
	  <div className="embed-responsive embed-responsive-16by9">
	  	<iframe className="embed-responsive-item" src={video_url}></iframe>
	  </div>
	  <div className="details">
	    <div>{video.snippet.title}</div>
	    <div>{video.snippet.description}</div>
	  </div>	  
  	</div>
  	)
}

export default VideoDetail;