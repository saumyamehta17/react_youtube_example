import React, {Component} from 'react';
import ReactDom from 'react-dom';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
const YOUTUBE_API_KEY = 'AIzaSyApRPURAUCG1Fs-ycLtQ-dGl-nw0BJ_PIQ';


class App extends Component{
	constructor(props){
		super(props)
		this.state = {videos: [], selectedVideo: null}
		this.videoSearch('Rails Conf')
		this.onSearchText = this.onSearchText.bind(this)
		this.videoSearch = this.videoSearch.bind(this)
	}

	videoSearch(term){
		YTSearch({key: YOUTUBE_API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			})
		});
	}
	onSearchText(term){
		// _.debounce(function(e){console.log('in...')},300);
		this.videoSearch(term)
	}
	// onVideoSelect(video){
	// 	this.setState.selectedVideo = video
	// }
	render(){
		// const videoSearch = _.debounce((term) => {this.videoSearch(term)},3000);
		// const videoSearch = _.debounce(
		// 	function(term){
		// 		this.videoSearch(term)
		// 	}, 1000
		// 	);
		return (
				<div>
		       <SearchBar onSearchText={_.debounce(term => {this.onSearchText(term)},300)}/>
		       <div className="row">
			       <VideoDetail video={this.state.selectedVideo}/>
			       <VideoList videos={this.state.videos} onVideoSelect={(video) => this.setState({selectedVideo: video})}/>
		       </div>
			   </div>
			)
	}
}

ReactDom.render(<App />, document.querySelector('.container'));

// <SearchBar onSearchText={(term) => this.videoSearch(term)}/>









