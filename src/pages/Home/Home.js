import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "react-js-pagination";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
require("bootstrap/scss/bootstrap.scss");

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [queryName, setQueryName] = useState("");
  const [queryGender, setQueryGender] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?page=${activePage}&name=${queryName}&gender=${queryGender}`
      )
      .then(resp => {
        setCharacters(resp.data.results);
        setTotalPages(resp.data.info.count);
      })
      .catch(err => console.log(err));
  }, [activePage, queryName, queryGender]);

  return (
    <div>
      <div className="containerFilters">
        <div className="filters">
          <h3 className="filters__title">Search by Name and Gender</h3>
          <label htmlFor="input"></label>
          <input
            className="filters__name"
            type="text"
            onChange={evt => setQueryName(evt.target.value)}
            placeholder="Buscar"
          ></input>
          <select
            onChange={evt => setQueryGender(evt.target.value)}
            className="filters__gender"
            name=""
            id=""
          >
            <option className="filters__options" value="">
              Select...
            </option>
            <option className="filters__options" value="female">
              female
            </option>
            <option className="filters__options" value="male">
              male
            </option>
            <option className="filters__options" value="genderless">
              genderless
            </option>
            <option className="filters__options" value="unknown">
              unknown
            </option>
          </select>
        </div>
      </div>

      <div className="containerCharacter">
        <div className="cardCharacter__content">
          {characters.map(character => (
            <CharacterCard character={character} />
          ))}
        </div>
      </div>
      <div className="containerPagination">
        <div className="pagination__content">
          <Pagination
            className="pagination"
            itemClass="page-item"
            linkClass="page-link"
            activePage={activePage}
            itemsCountPerPage={20}
            totalItemsCount={totalPages}
            pageRangeDisplayed={5}
            onChange={page => setActivePage(page)}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
