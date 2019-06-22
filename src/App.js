import React from "react";
import "./App.css";

import Photo from "./components/Photo";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      tag: ""
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    let method = this.state.tag
      ? "flickr.photos.search"
      : "flickr.photos.getRecent";
    fetch(
      `${process.env.REACT_APP_FLICKR_API_BASE}?method=${method}&api_key=${
        process.env.REACT_APP_FLICKR_API_KEY
      }&per_page=6&page=1&tags=${this.state.tag}&format=json&nojsoncallback=1&`
    )
      .then(data => {
        return data.json();
      })
      .then(data => {
        // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
        // or
        // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
        // or
        // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{o-secret}_o.(jpg|gif|png)
        let photosArray = data.photos.photo.map(photo => {
          let imgurl = `https://farm${photo.farm}.staticflickr.com/${
            photo.server
          }/${photo.id}_${photo.secret}.jpg`;

          return (
            <Photo
              key={photo.id}
              id={photo.id}
              url={imgurl}
              title={photo.title}
            />
          );
        });

        this.setState({
          photos: photosArray
        });
      });
  }

  handleSearch(e) {
    let method = e.target.value
      ? "flickr.photos.search"
      : "flickr.photos.getRecent";

    if (e.keyCode === 13) {
      fetch(
        `${process.env.REACT_APP_FLICKR_API_BASE}?method=${method}&api_key=${
          process.env.REACT_APP_FLICKR_API_KEY
        }&safe_search=1&per_page=6&page=1&tags=${
          e.target.value
        }&format=json&nojsoncallback=1&`
      )
        .then(data => {
          return data.json();
        })
        .then(data => {
          // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
          // or
          // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
          // or
          // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{o-secret}_o.(jpg|gif|png)
          let photosArray = data.photos.photo.map(photo => {
            let imgurl = `https://farm${photo.farm}.staticflickr.com/${
              photo.server
            }/${photo.id}_${photo.secret}.jpg`;

            return (
              <Photo
                key={photo.id}
                id={photo.id}
                url={imgurl}
                title={photo.title}
              />
            );
          });

          this.setState({
            photos: photosArray
          });
        });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="logoText"> Flulse </h2>{" "}
          <div className="toolbar-search">
            <input
              type="text"
              className="searchbox"
              placeholder="Search keywords and press enter..."
              onKeyDown={e => this.handleSearch(e)}
            />{" "}
          </div>{" "}
          <div className="toolbar-filter" />
        </header>{" "}
        <main className="Main-container">{this.state.photos} </main>
        <footer className="App-footer">
          <p> by mcometa </p>{" "}
        </footer>{" "}
      </div>
    );
  }
}

export default App;
