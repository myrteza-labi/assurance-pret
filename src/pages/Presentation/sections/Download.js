/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
// Images
import bgImage from "assets/images/shapes/waves-white.svg";
import AllianzMiniature from '../../../assets/images/miniature-icon-assurance/allianz-square.jpg'
import AfieuropeMiniature from '../../../assets/images/miniature-icon-assurance/afieurope.jpg'
import AlptisMiniature from '../../../assets/images/miniature-icon-assurance/alptis-square.jpg'
import AprepMiniature from '../../../assets/images/miniature-icon-assurance/aprep.jpg'
import AprilMiniature from '../../../assets/images/miniature-icon-assurance/alptis-square.jpg'
import GeneraliMiniature from '../../../assets/images/miniature-icon-assurance/generali.jpg'
import MetlifeMiniature from '../../../assets/images/miniature-icon-assurance/Metlif-squares.jpg'
import SwisslifeMiniature from '../../../assets/images/miniature-icon-assurance/swisslife.jpg'
import UgipMiniature from '../../../assets/images/miniature-icon-assurance/ugip.jpg'


function Download() {
  return (
    <MKBox component="section" py={{ xs: 0, sm: 12 }}>
      <MKBox
        variant="gradient"
        bgColor="dark"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        <MKBox
          component="img"
          src={bgImage}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex={1}
          opacity={0.2}
        />
        <Container sx={{ position: "relative", zIndex: 2, py: 12 }}>
          <Grid container item xs={12} md={7} justifyContent="center" mx="auto" textAlign="center">
            <MKTypography variant="h3" color="white">
            Un courtier qui vaut le détour !
            </MKTypography>
            <MKTypography variant="body2" color="white" mb={6}>
              Le courtier ne cesse continuellement de travailler son offre afin de 
              répondre avec efficacité aux besoins des emprunteurs et de leur permettre 
              de profiter de tous les avantages possibles. Fin négociateur et reconnu 
              par les plus grandes compagnies d’assurance et établissements financiers, 
              il propose une gamme de produits d’assurance adaptée à chaque profil, 
              quelles que soient les spécificités.Chacun y trouve compte : 
              économie et performance sont au rendez-vous !
            </MKTypography>
            <MKButton
              variant="gradient"
              color="info"
              size="large"
              component="a"
              href="https://www.creative-tim.com/product/material-kit-react"
              sx={{ mb: 2 }}
            >
              Devis gratuit
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
      <Container>
        <Grid container item xs={6} mx="auto">
          <MKBox textAlign="center">
            <MKTypography variant="h3" mt={6} mb={3}>
              Nos partenaires
            </MKTypography>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={4} lg={4}>
                <Tooltip title="Bootstrap 5 - Most popular front-end component library">
                  <MKBox
                    component="a"
                    href="https://www.creative-tim.com/product/material-kit"
                    target="_blank"
                  >
                    <MKBox
                      component="img"
                      src={AllianzMiniature}
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={4}>
                <Tooltip title="Comming soon">
                  <MKBox
                    component="a"
                    href="#"
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                  >
                    <MKBox
                      component="img"
                      src={AfieuropeMiniature}
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={4}>
                <Tooltip title="Comming soon">
                  <MKBox
                    component="a"
                    href="#"
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                  >
                    <MKBox
                      component="img"
                      src={AprepMiniature}
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={4}>
                <Tooltip title="Comming soon">
                  <MKBox
                    component="a"
                    href="https://www.creative-tim.com/product/material-kit-react"
                    target="_blank"
                  >
                    <MKBox
                      component="img"
                      src={AprilMiniature}
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={4}>
                <Tooltip title="Comming soon">
                  <MKBox
                    component="a"
                    href="https://www.creative-tim.com/product/material-kit-react"
                    target="_blank"
                  >
                    <MKBox
                      component="img"
                      src={MetlifeMiniature}
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={4}>
                <Tooltip title="Comming soon">
                  <MKBox
                    component="a"
                    href="https://www.creative-tim.com/product/material-kit-react"
                    target="_blank"
                  >
                    <MKBox
                      component="img"
                      src={SwisslifeMiniature}
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={4}>
                <Tooltip title="Comming soon">
                  <MKBox
                    component="a"
                    href="https://www.creative-tim.com/product/material-kit-react"
                    target="_blank"
                  >
                    <MKBox
                      component="img"
                      src={UgipMiniature}
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={4}>
                <Tooltip title="Comming soon">
                  <MKBox
                    /* opacity={0.5} */
                    component="a"
                    href="#"
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                  >
                    <MKBox
                      component="img"
                      src={GeneraliMiniature}
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Download;
