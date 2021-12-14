import React, { useState } from "react";
import Api from "./../../api/api";
import "./style.css";

const Home = () => {
  const [animes, setAnimes] = useState([{}]);
  // const [search, setSearch ] = useState('')
  const [showDiv, setShowDiv] = useState(false);

  const handleSearch = async (event) => {
    event.preventDefault();
    const search = event.target.search.value;
    const query = await Api.getById(search);
    setAnimes(await query.json());
    setShowDiv(true);
  };

  const listHome = [];

  if (showDiv === true) {
    var animesListMap = (
      <div
        key={animes.results.mal_id}
        className="row row-cols-md-2 p-0 "
      >
        {animes.results.map((anime) => (
          <div className=" m-0 p-0" id="teste">
              <div className="row g-0">
                <div className="col-md-4">
                <a href={anime.url} className="url">
                  <img
                    src={anime.image_url}
                    class="img-fluid rounded-start"
                    alt={anime.title}
                    id="animeCover"
                  />
                  </a>
                </div>
                <div className="col-md-8 p-0">
                  <div className="card-body ">
                    <h5 className="card-title ">{anime.title}</h5>
                    <span class="badge bg-success ">{anime.rated}</span>
                    <p className="card-text">Synopsis: {anime.synopsis} </p>
                    <a href={anime.url} target="_blank" rel="noreferrer" id="seeMore">[See more...] </a>
                  </div>
                </div>
              </div>
          </div>
        ))}
      </div>
    );
    listHome.push(animesListMap);
  }
  // const fetchAnime = async () => {
  //     const query = await Api.getById(search)
  //     setAnimes(await query.json())
  // }

  console.log(animes);

  // // useEffect(() => {
  //     handleSearch()
  // // }, [])

  return (
    <div className="searchBar">
      <img src="https://i.ibb.co/R4Yj1f1/searchlogo.png" alt="searchlogo"/>
      <div className="searchBar">
        <form className="form-label" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Search for an anime..."
            name="search"
            required
          />
          <button type="submit" className="btn btn-dark">
            Search{" "}
          </button>
        </form>
      </div>
      <div className="">{listHome}</div>
    </div>
  );
};

export default Home;
