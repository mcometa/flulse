import React, { useState, useEffect } from 'react';
import './App.css';

import API from './api';
import Header from './components/Header';
import Footer from './components/Footer';
import Ripple from './components/Ripple';
import Photos from './components/Photos';
import FilterBar from './components/FilterBar';

const App = () => {
  const [data, setData] = useState({
    photos: [],
    loading: true,
    filterbar: false,
    filter: {
      page: 0,
      limit: 9,
      orientation: '',
    },
  });

  const [loading, setLoading] = useState(true);

  const fetchPhotos = async () => {
    const { data: responseData } = await API.get(`photos`);

    setData({
      ...data,
      photos: responseData,
    });
  };

  useEffect(() => {
    fetchPhotos();
    setLoading(false);
  }, []);

  return (
    <div data-testid="app-main" className="App">
      <Header />
      <FilterBar show={data.filterbar} />
      <Photos photos={data.photos} />
      {loading === true && <Ripple />}
      <Footer />
    </div>
  );
};

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       photos: [],
//       filterbar: false,
//       loading: true,
//       error: false,
//       hasMore: true,
//       per_page: 6,
//       page: 1,
//       loadMore: 0,
//     };

//     this.handleSearch = this.handleSearch.bind(this);
//     this.handleFilterClick = this.handleFilterClick.bind(this);

//     window.onscroll = debounce(() => {
//       if (
//         window.innerHeight + document.documentElement.scrollTop ===
//         document.documentElement.offsetHeight
//       ) {
//         // Do awesome stuff like loading more content!
//         this.loadPhotos();
//       }
//     }, 200);
//   }

//   componentDidMount() {
//     this.loadPhotos();
//   }

//   handleFilterClick = (e) => {
//     e.preventDefault();
//     const { filterbar } = this.state;

//     this.setState({
//       filterbar: !filterbar,
//     });
//   };

//   handleSearch(e) {
//     const method = () => {
//       if (e.target.value) {
//         this.setState({
//           tag: '',
//         });

//         return 'flickr.photos.search';
//       }

//       this.setState({
//         tag: '',
//       });

//       return 'flickr.photos.getRecent';
//     };

//     if (e.keyCode === 13) {
//       fetch(
//         `${process.env.REACT_APP_FLICKR_API_BASE}?method=${method()}&api_key=${
//           process.env.REACT_APP_FLICKR_API_KEY
//         }&safe_search=1&per_page=6&page=1&text=${e.target.value}&format=json&nojsoncallback=1&`
//       )
//         .then((data) => {
//           return data.json();
//         })
//         .then((data) => {
//           const photosArray = data.photos.photo.map((photo) => {
//             const imgurl = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;

//             return <Photo key={photo.id} id={photo.id} url={imgurl} title={photo.title} />;
//           });

//           this.setState({
//             photos: photosArray,
//           });
//         });
//     }
//   }

//   loadPhotos() {
//     this.setState({
//       loading: true,
//     });

//     const { tag, photos, per_page, page } = this.state;

//     const method = tag ? 'flickr.photos.search' : 'flickr.photos.getRecent';

//     fetch(
// eslint-disable-next-line max-len
//       `${process.env.REACT_APP_FLICKR_API_BASE}?method=${method}&api_key=${process.env.REACT_APP_FLICKR_API_KEY}&per_page=${per_page}&page=${page}&text=${tag}&format=json&nojsoncallback=1&`
//     )
//       .then((data) => {
//         return data.json();
//       })
//       .then((data) => {
//         this.setState({
//           photos: [...photos, ...data.photos.photo],
//           page: page + 1,
//           loading: false,
//           loadMore: 1,
//         });
//       });
//   }

//   render() {
//     const { filterbar, photos, loading } = this.state;
//     const [tag, setTag] = useState('something else');

//     return (
//       <div data-testid="app-main" className="App">
//         <header className="App-header">
//           <h2 className="logoText">
//             {' '}
//             Flulse
//             <br />
//             <small> Flickr API + React example by mcometa </small>{' '}
//           </h2>{' '}
//           <div className="toolbar-search">
//             <input
//               type="text"
//               defaultValue={tag}
//               className="searchbox"
//               placeholder="Search then press enter..."
//               onKeyDown={(e) => setTag(e.currentTarget.value)}
//               data-testid="search-input"
//             />{' '}
//           </div>{' '}
//         </header>{' '}
//         <FilterBar show={filterbar} />{' '}
//         <main data-testid="main-container" className="Main-container">
//           {' '}
//           {photos.map((photo) => {
//             const imgurl = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;

//             return <Photo key={photo.id} id={photo.id} url={imgurl} title={photo.title} />;
//           })}
//         </main>{' '}
//         {loading === true && (
//           <div className="lds-ripple">
//             <div />
//             <div />
//           </div>
//         )}{' '}
//         <footer className="App-footer">
//           <p> hello 2019! </p>{' '}
//         </footer>{' '}
//       </div>
//     );
//   }
// }

export default App;
