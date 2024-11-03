
import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

const MecanicasSection = styled.section`
  margin: 90px 180px;

  h1 {
    font-size: 40px;
    margin-bottom: 26px;
  }

  @media only screen and (max-width: 1440px) {
    margin: 8% 6%;

    h1 {
      font-size: 34px;
    }
  }

  @media only screen and (max-width: 834px) {
    margin: 6% 4%;

    h1 {
      font-size: 32px;
    }
  }

  @media only screen and (max-width: 680px) {
    h1 {
      font-size: 28px;
    }
  }
`;

const IconMecanicas = styled.img`
  width: 30px;
  margin-right: 16px;
  margin-top: 0;

  @media only screen and (max-width: 680px) {
    width: 26px;
  }
`;


const mapContainerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "5px",
};

const defaultCenter = { lat: -23.5672243, lng: -46.6404956 }; // Ponto inicial (por exemplo, São Paulo)

export default function CentrosAutomotivos() {
  const [location, setLocation] = useState(defaultCenter);
  const [mechanics, setMechanics] = useState([]);
  const apiKey = "AIzaSyBd2k4ZkH-eFCNSRhmhd9HJ0xym8abqEyk";

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setLocation(userLocation);
        fetchNearbyMechanics(userLocation.lat, userLocation.lng);
      });
    }
  }, []);

  const fetchNearbyMechanics = async (lat, lng) => {
    const apiUrl = `/api/nearby-mechanics?lat=${lat}&lng=${lng}`;
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Erro ao buscar mecânicas");
      }
      const data = await response.json();
      setMechanics(data.results);
    } catch (error) {
      console.error("Erro ao buscar mecânicas:", error);
    }
  };

  return (
    <MecanicasSection id="centrosAutomotivos-main">
      <h1>
        <IconMecanicas src="/assets/img/iconEngrenagem.png" alt="Ícone de uma engrenagem" />
        Centros Automotivos
      </h1>
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap mapContainerStyle={mapContainerStyle} center={location} zoom={13}>
          {mechanics.map((place) => (
            <Marker
              key={place.place_id}
              position={{
                lat: place.geometry.location.lat,
                lng: place.geometry.location.lng,
              }}
              title={place.name}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </MecanicasSection>
  );
}