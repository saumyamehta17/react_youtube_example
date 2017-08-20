import React from 'react';
import VideoItemList from './video_list_item'
const VideoList = props => {
	const video_items = props.videos.map(function(video){
		return <VideoItemList onVideoSelect={props.onVideoSelect} key={video.etag} video={video}/>
	})
	return(
	    <div className="col-md-4">
			<ul className="list-group">
				{video_items}
			</ul>
		</div>
		)
}

export default VideoList;