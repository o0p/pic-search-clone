import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const res = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID 7wNJ_4HIGqQrt4UlFj7uxVlkSOkCcUTjPobwwk9kqMI",
      },
    });

    this.setState({ images: res.data.result });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} inmages
        {/* <ImageList images={this.state.images} /> */}
      </div>
    );
  }
}

export default App;
