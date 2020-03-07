import React, { Fragment } from "react";
import moment from "moment";

import womanIcon from "../../img/woman.svg";
import maleIcon from "../../img/male.svg";
import genderlessIcon from "../../img/genderless.svg";
import unknownIcon from "../../img/question.svg";
import deadIcon from "../../img/skull.svg";

const CharacterCard = ({ character }) => {
  const {
    id,
    name,
    image,
    status,
    species,
    gender,
    location,
    created
  } = character;

  const handleStatus = () => {
    if (status === "Dead") {
      return (
        <img src={deadIcon} alt="" className="character__info--sub--icon" />
      );
    }
  };

  const handleGender = () => {
    if (gender === "Female") {
      return (
        <img src={womanIcon} alt="" className="character__info--sub--icon" />
      );
    } else if (gender === "Male") {
      return (
        <img src={maleIcon} alt="" className="character__info--sub--icon" />
      );
    } else if (gender === "Genderless") {
      return (
        <img
          src={genderlessIcon}
          alt=""
          className="character__info--sub--icon"
        />
      );
    } else {
      return (
        <img src={unknownIcon} alt="" className="character__info--sub--icon" />
      );
    }
  };

  return (
    <Fragment>
      <div key={id} className="cardCharacter">
        <img
          className="cardCharacter__image"
          src={image}
          alt={`Imagen de ${name}`}
        ></img>
        <div className="cardCharacter__details">
          <h3 className="cardCharacter__title">{name}</h3>
          <p className="cardCharacter__info">
            <span className="character__info--heading">Status:</span>
            <span
              className={`${
                status === "Dead"
                  ? "character__info--sub character__info--sub--isDead"
                  : "character__info--sub"
              }`}
            >
              {status} {handleStatus()}
            </span>
          </p>
          <p className="cardCharacter__info">
            <span className="character__info--heading">Species:</span>
            <span className="character__info--sub">{species}</span>
          </p>
          <p className="cardCharacter__info">
            <span className="character__info--heading">Gender:</span>
            <span className="character__info--sub">
              {handleGender()} {gender}
            </span>
          </p>
          <p className="cardCharacter__info">
            <span className="character__info--heading">Location Name:</span>
            <span className="character__info--sub">{location.name}</span>
          </p>
          <small className="cardCharacter__info">
            <span className="character__info--heading">Created at:</span>
            <span className="character__info--sub">
              {moment(created).format("DD/MM/YYYY")}
            </span>
          </small>
        </div>
      </div>
    </Fragment>
  );
};

export default CharacterCard;
