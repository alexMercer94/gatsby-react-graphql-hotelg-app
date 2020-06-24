import { css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import ContenidoInicio from "../components/ContenidoInicio";
import ImageHotel from "../components/imageHotel";
import Layout from "../components/layout";
import RoomPreview from "../components/roomPreview";
import useRooms from "../hooks/useRooms";

const RoomList = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`;

const IndexPage = () => {
  const rooms = useRooms();

  return (
    <Layout>
      <ImageHotel></ImageHotel>
      <ContenidoInicio></ContenidoInicio>
      <h2
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      >
        Nuestras Habitaciones
      </h2>
      <RoomList>
        {rooms.map(room => (
          <RoomPreview key={room.id} room={room} />
        ))}
      </RoomList>
    </Layout>
  );
};

export default IndexPage;
