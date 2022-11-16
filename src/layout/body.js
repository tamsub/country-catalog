import React, { useEffect, useRef, useState } from "react";
import CountryCard from "../components/countrylist";
import BasicPagination from "../components/pagination";
import _ from "lodash";

import azicon from "../assets/sortaz.png";
import zaicon from "../assets/sortza.png";

export default function Body({ searchText }) {
  const [countries, setAllCountries] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const postPage = useRef(25).current;
  const [azsort, setAZSort] = useState(true);

  const getCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const result = await response.json();
    setAllCountries(result);
  };

  const onPageChanged = (e, page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchText]);

  const indexOfLastPage = currentPage * postPage;
  const indexOfFirstPage = indexOfLastPage - postPage;
  var numberOfPages;
  var pageCountries;
  var dataPagination;
  var pageCountries;
  var filterCountries;
  var sortedCountries;

  let sorticon = azsort ? renderAZicon() : renderZAicon();

  if (countries) {
    sortedCountries = azsort
      ? _.orderBy(countries, ["name.common"], "asc")
      : _.orderBy(countries, ["name.common"], "desc");

    filterCountries = searchText
      ? sortedCountries.filter((country) => {
          const officialName = country.name.official.toLowerCase();
          if (officialName.includes(searchText.toLowerCase())) return true;
        })
      : sortedCountries;

    dataPagination = filterCountries.slice(indexOfFirstPage, indexOfLastPage);
    numberOfPages = Math.ceil(filterCountries.length / postPage);
    pageCountries = renderCountry(dataPagination);
  }
  console.log("current page", currentPage);

  return (
    <div style={{ padding: 50 }}>
      <div
        style={{ width: 20 }}
        onClick={() => {
          setAZSort(!azsort);
        }}
      >
        {sorticon}
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {pageCountries}
      </div>
      <div style={{ padding: 50, display: "flex", justifyContent: "center" }}>
        <BasicPagination
          currentpage={currentPage}
          numberOfPages={numberOfPages}
          onPageChanged={onPageChanged}
        ></BasicPagination>
      </div>
    </div>
  );
}

const renderAZicon = () => {
  return <img src={azicon} style={{ width: 40 }}></img>;
};
const renderZAicon = () => {
  return <img src={zaicon} style={{ width: 40 }}></img>;
};

const renderCountry = (countries) => {
  return (
    <div
      style={{
        display: "flex",
        justifyItems: "flex-start",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 20,
        justifyContent: "space-between",
      }}
    >
      {countries.map((country, index) => {
        const {
          flags: { png: flagurl },
          name: { official: officialName, common: commonName, nativeName },
          cca2,
          cca3,
          altSpellings,
          idd,
        } = country;

        const details = {
          flagurl,
          officialName,
          commonName,
          cca2,
          cca3,
          altSpellings,
          idd,
          nativeName,
        };
        return (
          <CountryCard
            key={index}
            flagurl={flagurl}
            name={officialName}
            commonName={commonName}
            details={details}
          ></CountryCard>
        );
      })}
    </div>
  );
};
