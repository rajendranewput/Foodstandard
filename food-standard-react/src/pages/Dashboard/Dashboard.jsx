
import {Cards,Banner} from "../../components";
import {Container, Grid, Paper, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import useStyle from "./useStyle";

const DashBoard = () => {
  const { t } = useTranslation(["dreamDescription", "bannerText", "aliveList"]);
  const style = useStyle();

  return (
    <>
      <Container sx={{...style.containerDescription}}>
        <Grid container sx={style.custom}>
          <Grid container>
            <Grid item sx={style.paraBox}>
            "{t("firstLine", { ns: "dreamDescription" })}
            <br />
            {t("secondLine", { ns: "dreamDescription" })}
            <br />
            {t("thirdLine", { ns: "dreamDescription" })}"
            </Grid>
             <Grid container>
            </Grid>
          </Grid>   
        </Grid>
        </Container>
        <Cards />
       <Banner text={t("serve", { ns: "bannerText" })} className="change-text" />
       <Container sx={{...style.mContainer}}>
        <Grid container spacing={2} sx={style.containerWrapper}>
          <Grid item xs={12} lg={2} md={2} sm={2} sx={style.gContainer}>
            <Paper sx={style.blackBox}>
              <Typography>{t("heading", { ns: "aliveList" })}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} lg={10} md={10} sm={10} sx={style.gContainer}>
            <Paper sx={style.greyBox}>
              <ul>
                <li>{t("listItem1", { ns: "aliveList" })}</li>
                <li>{t("listItem2", { ns: "aliveList" })}</li>
                <li>{t("listItem3", { ns: "aliveList" })}</li>
                <li>{t("listItem4", { ns: "aliveList" })}</li>
                <li>{t("listItem5", { ns: "aliveList" })}</li>
                <li>{t("listItem6", { ns: "aliveList" })}</li>
                <li>{t("listItem7", { ns: "aliveList" })}</li>
                <li>{t("listItem8", { ns: "aliveList" })}</li>
                <li>{t("listItem9", { ns: "aliveList" })}</li>
              </ul>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={style.containerWrapper}>
          <Grid item xs={12} lg={2} md={2} sm={2} sx={style.gContainer}>
            <Paper sx={style.blackBox}>
              <Typography>{t("heading", { ns: "preparedList" })}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} lg={10} md={10} sm={10} sx={style.gContainer}>
            <Paper sx={style.greyBox}>
              <ul>
                <li>{t("listItem1", { ns: "preparedList" })}</li>
                <li>{t("listItem2", { ns: "preparedList" })}</li>
                <li>{t("listItem3", { ns: "preparedList" })}</li>
                <li>{t("listItem4", { ns: "preparedList" })}</li>
              </ul>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={style.containerWrapper}>
          <Grid item xs={12} lg={2} md={2} sm={2} sx={style.gContainer}>
            <Paper sx={style.blackBox}>
              <Typography>{t("heading", { ns: "sourcedList" })}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} lg={10} md={10} sm={10} sx={style.gContainer}>
            <Paper sx={style.greyBox}>
              <ul>
                <li>{t("listItem1", { ns: "sourcedList" })}</li>
                <li>{t("listItem2", { ns: "sourcedList" })}</li>
                <li>{t("listItem3", { ns: "sourcedList" })}</li>
                <li>{t("listItem4", { ns: "sourcedList" })}</li>
                <li>{t("listItem5", { ns: "sourcedList" })}</li>
                <li>{t("listItem6", { ns: "sourcedList" })}</li>
                <li>{t("listItem7", { ns: "sourcedList" })}</li>
                <li>{t("listItem8", { ns: "sourcedList" })}</li>
                <li>{t("listItem9", { ns: "sourcedList" })}</li>
              </ul>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DashBoard;
