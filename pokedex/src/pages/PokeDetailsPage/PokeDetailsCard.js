import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, CardMedia } from "@material-ui/core";
import { Typography } from "@mui/material";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardImgDiv, CardMediaStyled } from "./styled";

export const PokeDetailsCard = (props) => {
  const {
    name,
    hp,
    attack,
    defense,
    specialAttack,
    specialDefense,
    speed,
    image,
    abilities,
  } = props;

  const renderCard = () => {
    return (
      <>
        <CardImgDiv>
          <CardMediaStyled src={image} />
        </CardImgDiv>

        <Typography
          gutterBottom
          align={"center"}
          variant={"h6"}
          color={"black"}
          marginBottom={4}
        >
          Stats
        </Typography>
        <Typography
          align="center"
          variant="h4"
          marginBottom={10}
        >{`${name}`}</Typography>

        <ProgressBar
          style={{ marginBottom: 20, height: 25, fontSize: 15 }}
          animated
          now={hp}
          label={"HP"}
        />
        <ProgressBar
          style={{ marginBottom: 20, height: 25, fontSize: 15 }}
          animated
          now={attack}
          label={"Ataque"}
        />
        <ProgressBar
          style={{ marginBottom: 20, height: 25, fontSize: 15 }}
          animated
          now={defense}
          label={"Defesa"}
        />
        <ProgressBar
          style={{ marginBottom: 20, height: 25, fontSize: 15 }}
          animated
          now={specialAttack}
          label={"Ataque Especial"}
        />
        <ProgressBar
          style={{ marginBottom: 20, height: 25, fontSize: 15 }}
          animated
          now={specialDefense}
          label={"Defesa Especial"}
        />
        <ProgressBar
          style={{ marginBottom: 20, height: 25, fontSize: 15 }}
          animated
          now={speed}
          label={"Velocidade"}
        />
        <Typography
          gutterBottom
          align={"center"}
          variant={"h6"}
          color={"black"}
          marginTop={4}
          marginBottom={4}
        >
          Moves
        </Typography>

        {abilities.map((ability) => {
          console.log(ability);
          return (
            <Typography
              align={"start"}
              variant={"h6"}
              color={"#black"}
              marginTop={4}
              marginBottom={4}
            >
              {ability.ability.name}
            </Typography>
          );
        })}
      </>
    );
  };
  return (
    <Card>
      <CardActionArea>
        <CardContent>{renderCard()}</CardContent>
      </CardActionArea>
    </Card>
  );
};
