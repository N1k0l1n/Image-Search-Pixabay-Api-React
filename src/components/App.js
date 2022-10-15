import React from "react";
import SearchInput from "./SearchInput";
import axios from "axios";
import ImagesList from "./ImagesList";
import Footer from "./Footer";

import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { images: [] };

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  async onSearchSubmit(entry) {
    const response = await axios.get(
      `https://pixabay.com/api/?key=28107638-32b399f71404d7669a60deb4c&q=${entry}&image_type=photo`
    );
    console.log(response.data.hits);
    this.setState({ images: response.data.hits });
  }

  render() {
    return (
      <div id="holder">
        <div id="header">
          <SearchInput onSearchSubmit={this.onSearchSubmit} />
        </div>
        <div id="body">
          <ImagesList images={this.state.images} />
        </div>
        <div id="footer">
          <Footer className="fstyle" />
        </div>
      </div>
    );
  }
}
export default App;
