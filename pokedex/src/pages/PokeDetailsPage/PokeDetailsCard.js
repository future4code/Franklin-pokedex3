import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@material-ui/core";
import { Typography } from "@mui/material";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardImgDiv, CardMediaStyled, MovesDiv, TypesDiv } from "./styled";

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
    types,
  } = props;

  const renderCard = () => {
    return (
      <>
        <CardImgDiv>
          <CardMediaStyled src={image} />
        </CardImgDiv>

        <Typography
          align="center"
          variant="h4"
          fontFamily={"Electrolize"}
          marginBottom={4}
          style={{ textTransform: "capitalize" }}
        >{`${name}`}</Typography>

        <Typography
          gutterBottom
          align={"center"}
          fontFamily={"Electrolize"}
          variant={"h6"}
          color={"black"}
          marginBottom={4}
        >
          Types
        </Typography>
        {types &&
          types.map((type) => {
            return (
              <Typography
                key={type.type.name}
                fontFamily={"Electrolize"}
                variant={"h6"}
                color={"black"}
                align={"center"}
                marginBottom={2.5}
                style={{
                  textTransform: "capitalize",
                }}
              >
                <TypesDiv category={type.type.name}>{type.type.name}</TypesDiv>
              </Typography>
            );
          })}

        <Typography
          gutterBottom
          align={"center"}
          variant={"h6"}
          color={"black"}
          marginBottom={4}
          marginTop={4}
          fontFamily={"Electrolize"}
        >
          Stats
        </Typography>

        <ProgressBar
          style={{
            marginBottom: 20,
            height: 25,
            fontSize: 16,
            fontFamily: "Electrolize",
          }}
          animated
          now={hp}
          label={"HP"}
        />
        <ProgressBar
          style={{
            marginBottom: 20,
            height: 25,
            fontSize: 16,
            fontFamily: "Electrolize",
          }}
          animated
          now={attack}
          label={"Attack"}
        />
        <ProgressBar
          style={{
            marginBottom: 20,
            height: 25,
            fontSize: 16,
            fontFamily: "Electrolize",
          }}
          animated
          now={defense}
          label={"Defense"}
        />
        <ProgressBar
          style={{
            marginBottom: 20,
            height: 25,
            fontSize: 16,
            fontFamily: "Electrolize",
          }}
          animated
          now={specialAttack}
          label={"Special Attack"}
        />
        <ProgressBar
          style={{
            marginBottom: 20,
            height: 25,
            fontSize: 16,
            fontFamily: "Electrolize",
          }}
          animated
          now={specialDefense}
          label={"Special Defense"}
        />
        <ProgressBar
          style={{
            marginBottom: 20,
            height: 25,
            fontSize: 16,
            fontFamily: "Electrolize",
          }}
          animated
          now={speed}
          label={"Speed"}
        />
        <Typography
          gutterBottom
          align={"center"}
          variant={"h6"}
          color={"black"}
          marginTop={4}
          marginBottom={4}
          fontFamily={"Electrolize"}
        >
          Moves
        </Typography>

        {abilities &&
          abilities.map((ability) => {
            return (
              <Typography
                key={ability.ability.name}
                align={"center"}
                variant={"h6"}
                fontFamily={"Electrolize"}
                color={"black"}
                marginTop={2.5}
                marginBottom={2.5}
                style={{ textTransform: "capitalize" }}
              >
                <MovesDiv>{ability.ability.name}</MovesDiv>
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
