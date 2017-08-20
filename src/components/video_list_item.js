import React from 'react';

const VideoItemList = ({video, onVideoSelect}) => {
	const thumbnail_url = video.snippet.thumbnails.medium.url
	return(
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
		 <div className="media">
		  <div className="media-left">
		  	<img src={thumbnail_url} className="media-object"/>	
		  </div>

		  <div className="media-body">
		  	<div className="media-heading">{video.snippet.title}</div>  
		  </div>
		 </div>
		</li>
		)
};

export default VideoItemList;
