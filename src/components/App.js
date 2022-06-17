import React from "react";
import SearchInput from "./SearchInput";
import axios from "axios";
import ImagesList from "./ImagesList"
 class App extends React.Component{

    constructor(props){

        super(props)

        this.state={ images : []}

        this.onSearchSubmit=this.onSearchSubmit.bind(this)
    }

    async onSearchSubmit(entry){
        const response = await axios.get(`https://pixabay.com/api/?key=28107638-32b399f71404d7669a60deb4c&q=${entry}&image_type=photo`)
        console.log(response.data.hits)
        this.setState( { images:response.data.hits } )
    }


    render(){
    return(
        <div className="ui container" style= { { marginTop:'30px'} } > 
            <SearchInput onSearchSubmit={this.onSearchSubmit} />
             <ImagesList images={this.state.images}/>
        </div>
    )
 }
}
 export default App;