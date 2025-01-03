import {useState} from "react";
import {Box, Container, Grid, Link, Typography} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import useStyle from "./useStyle";
import {useNavigate} from "react-router-dom";

const cardData = [
  { icon: "icon-report", textLink: "PURCHASING", link: "purchasing" },
  {
    icon: "icon-hand-globe",
    textLink: "CLIMATE CHANGE",
    link: "climate-change",
  },
  { icon: "icon-vegetables", textLink: "PLANT-FORWARD", link: "plant-forward" },
  { icon: "icon-vital-sign", textLink: "WELLNESS", link: "wellness" },
];

const Cards = () => {
  const {
    boxContainer,
    cardContainer,
    cardMedia,
    cardLink,
    cardContent,
    selected,
    cardSelected,
    gContainer,
    mainContainer,
  } = useStyle();

  const [clickedIndex, setClickedIndex] = useState(null);
  const navigate = useNavigate();
  const handleCardClick = (event, index) => {
    if (!clickedIndex || clickedIndex !== index) {
      setClickedIndex(index);
    } else {
      navigate(`/${cardData[index].link}`);
    }
  };

  return (
    <Container maxWidth="lg" sx={mainContainer}>
      <Grid container spacing={3}>
      <Grid
            container
            sx={gContainer}
          >
        {cardData.map((card, index) => (
          <Grid item key={index} sm={2.5} md={2.5} xs={5.5} lg={3}>
            <Card
              sx={{    
                ...cardContainer,
                backgroundColor: clickedIndex === index ? selected : "initial",
              }}
              onClick={(event) => handleCardClick(event, index)}
            >
              {clickedIndex !== index && (
                <Typography className={card.icon} sx={cardMedia} />
              )}
              <CardContent sx={cardContent}>
                <Link
                  sx={{
                    ...cardLink,
                    ...(clickedIndex === index ? cardSelected : "initial"),
                  }}
                  href={`/${card.link}`}
                >
                  {clickedIndex === index
                    ? `VISIT THE ${card.textLink} TAB`
                    : card.textLink}
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      </Grid>
    </Container>
  );
};

export default Cards;