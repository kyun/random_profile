import React from 'react';
import './ProfileCard.scss';
import { url } from 'inspector';


const ImageWrapper = ({ img, nat }: any) => (
  <div className="ImageWrapper" style={{ backgroundImage: `url(http://flags.fmcdn.net/data/flags/w580/${nat.toLowerCase()}.png)` }}>
    <div className="border">
      <img src={img} />
    </div>
  </div>
);

const PersonalInfo = () => (
  <div className="PersonalInfo">
    <div className="section">
      <p className="title">Age</p>
      <p className="content">48 years</p>
    </div>
    <div className="section">
      <p className="title">Height</p>
      <p className="content">161 cm</p>
    </div>
    <div className="section">
      <p className="title">Weight</p>
      <p className="content">78 Kg</p>
    </div>
  </div>
)



const ProfileCard = ({ data }: any) => {

  if (data) {
    return (
      <div className="ProfileCard">
        <ImageWrapper img={data.picture.large} nat={data.nat} />
        <h1 className="name">{data.name.first} {data.name.last} </h1>
        {/* <p>{data[0].gender}</p> */}
        <PersonalInfo />
      </div>
    )
  } else {
    return (
      <h1>Loading...</h1>
    )
  }

}

export default ProfileCard;