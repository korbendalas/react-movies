import React, { useState, useEffect } from "react";
import axios from "axios";

export const Context = React.createContext();
const apiKey = "975095b34dd7c4ff9937603d683d6501";

export function Provider(props) {
  //STATE *******************************************************************

  const [mostPopularMovie, setMostPopularMovie] = useState({
    heading: "",
    description: "",
    backdrop_path: ""
  });
  const [popularMovies, setPopularMovies] = useState([]);
  const [showSpinner, setShowSpinner] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  // END - STATE*********************************************END-STATE************************************

  //*********************************FETHCHING POPULAR MOVIES FUNCTION ********************************************

  function fetchPopularMovies(page = 1) {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`
      )

      .then(res => {
        //Set Homepage currently most popular movie
        if (mostPopularMovie.heading === "") {
          setMostPopularMovie({
            heading: res.data.results[0].original_title,
            description: res.data.results[0].overview,
            backdrop_path: res.data.results[0].backdrop_path
          });
          setShowSpinner(false);
        }

        //Set a list of 20 most popular movies on first load  ...popularMovies,

        let newPopularMovies = popularMovies.concat(res.data.results);
        // setPopularMovies(...popularMovies,res.data.results);
        console.log("Popular Movies", popularMovies);
        console.log("Popular Movies Next Page", newPopularMovies);

        setPopularMovies(newPopularMovies);

        //  console.log("MOVIES RESPONSE", res.data.results);
      })

      .catch(err => console.log(err));
  }

  // ******************************SEARCH*********************************
  const searchMovies = searchQuery => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchQuery}`
      )
      .then(res => {
        setSearchResults(res.data.results);
      });
  };
  //

  // *****************LIFECYLCLE***************************************

  const fetchAndIncrement = () => {
    setPageNum(pageNum => pageNum + 1);
  };

  useEffect(() => {
    if (pageNum > 0) {
      fetchPopularMovies(pageNum);
    }
  }, [pageNum]);

  return (
    //Value
    <Context.Provider
      value={{
        mostPopularMovie,
        popularMovies,
        fetchPopularMovies,
        searchMovies,
        searchResults,
        fetchAndIncrement,
        showSpinner
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
