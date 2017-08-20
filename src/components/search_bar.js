import React, {Component} from 'react'

// const SearchBar = () => {
// 	return <input />
// }

class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = {term: ''};
	}
	render(){
		return (
		 <div className="search_bar">
		 	<input 
		 	  // value ={this.state.term}
		 	  
		 	  // onChange={event => this.setState({term: event.target.value})} />
		      // onChange={(event) => this.props.onSearchText(event.target.value)} />
		      onChange={event => this.onInputChange(event.target.value)} />
		      
		      
		 </div>	
		); 
	}

	onInputChange(e){
		this.props.onSearchText(e);
    this.setState({term: e});
	}

}

export default SearchBar;