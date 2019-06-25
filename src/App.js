import React from "react";
import "./App.css";

import Photo from "./components/Photo";
import FilterBar from "./components/FilterBar";

import debounce from "lodash.debounce";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      tag: "sibuyan island",
      filterbar: false,
      loading: true,
      error: false,
      hasMore: true,
      per_page: 6,
      page: 1
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleFilterClick = this.handleFilterClick.bind(this);

    window.onscroll = debounce(() => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        // Do awesome stuff like loading more content!
        this.loadPhotos();
      }
    }, 200);
  }

  componentDidMount() {
    this.loadPhotos();
  }

  loadPhotos() {
    this.setState({
      loading: true
    });

    let method = this.state.tag
      ? "flickr.photos.search"
      : "flickr.photos.getRecent";
    fetch(
      `${process.env.REACT_APP_FLICKR_API_BASE}?method=${method}&api_key=${
        process.env.REACT_APP_FLICKR_API_KEY
      }&per_page=${this.state.per_page}&page=${this.state.page}&text=${
        this.state.tag
      }&format=json&nojsoncallback=1&`
    )
      .then(data => {
        return data.json();
      })
      .then(data => {
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

        console.log(data.photos.photo.length);

        this.setState({
          photos: [[...this.state.photos, ...photosArray]],
          page: this.state.page + 1,
          loading: false
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
        }&safe_search=1&per_page=6&page=1&text=${
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

  handleFilterClick = e => {
    e.preventDefault();

    console.log("filter click");

    this.setState({
      filterbar: !this.state.filterbar
    });
  };

  render() {
    let filterbar = this.state.filterbar;
    return (
      <div data-testid="app-main" className="App">
        <header className="App-header">
          <h2 className="logoText">
            {" "}
            Flulse <br />
            <small> Flickr API + React example by mcometa </small>{" "}
          </h2>{" "}
          <div className="toolbar-search">
            <input
              type="text"
              defaultValue={this.state.tag}
              className="searchbox"
              placeholder="Search then press enter..."
              onKeyDown={e => this.handleSearch(e)}
              data-testid="search-input"
            />{" "}
          </div>{" "}
          <div className="toolbar-filter">
            <a className="filter-btn" onClick={this.handleFilterClick}>
              Filter{" "}
            </a>{" "}
          </div>{" "}
        </header>{" "}
        <FilterBar show={this.state.filterbar} />{" "}
        <main data-testid="main-container" className="Main-container">
          {" "}
          {this.state.photos.length > 0 && this.state.photos}{" "}
        </main>{" "}
        {this.state.loading === true && (
          <div className="lds-ripple">
            <div />
            <div />
          </div>
        )}{" "}
        <footer className="App-footer">
          <p> hello 2019! </p>{" "}
        </footer>{" "}
      </div>
    );
  }
}

export default App;
