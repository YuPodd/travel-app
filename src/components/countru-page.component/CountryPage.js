import {React, Fragment}from "react";
import Header from "../Header";
import countriesData from "../../constants/countries";
import { useParams } from "react-router-dom";
import Widget from "../Widget/Widget";
import Carousel from '../Carousel';
import Video from './Video';
import CountryDescription from './CountryDescription';
import './country-page.css';

export default function CountryPage() {
  const { name } = useParams();

  const country = countriesData.find((country) => country.name === name);

  return (
    <Fragment>
      <div></div>
      <Header isActive={false} change={null}/>
      <div className="country-page-content__container">
        <Widget city={country.capital} money={ country.currency }/>
        <h3 className='country-name__header'>{country.name}</h3>
        <Carousel galleryImage = {country.galleryImage} galleryHeader={country.galleryHeader} galleryInfo={country.galleryInfo} />
        <CountryDescription country={country} />
        <Video src={country.vid}/>
      </div>
    </Fragment>
  );
}
