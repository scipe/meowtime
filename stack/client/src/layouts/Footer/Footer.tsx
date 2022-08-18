import React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Container } from '@mui/system';
import { Typography } from '@mui/material';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PermPhoneMsgOutlinedIcon from '@mui/icons-material/PermPhoneMsgOutlined';

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: 'url(../assets/splash/images/wave_footer.png)',
        backgroundPosition: '50% 30%',
        backgroundRepeat: 'no-repeat',
        margin: 0,
      }}
    >
      <Container
        sx={{
          maxWidth: 1280,
          minHeight: 500,
          marginTop: 35,
          mx: 'auto',
          marginBottom: 0,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={4}
          marginTop="44px"
        >
          <Grid
            item
            md={4}
            sx={{
              height: 370,
              width: 375,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
              }}
            >
              <Typography
                sx={{
                  paddingTop: 3,
                  textAlign: 'left',
                  maxWidth: 395,
                  fontFamily: 'Roboto',
                  fontSize: 17,
                  fontWeight: 400,
                }}
              >
                Why Meowtime? Meowtime is helping every cat and cat parent live their best life! Our
                vetted and insured cat sitters bring the purrfect hospitality to you.
              </Typography>
              <Typography
                sx={{
                  paddingTop: 4,
                  textAlign: 'left',
                  maxWidth: 395,
                  fontFamily: 'Roboto',
                  fontSize: 17,
                  fontWeight: 400,
                }}
              >
                2022 © Meowtime Inc. All Rights Reserved
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            md={4}
            sx={{
              height: 370,
              width: 365,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
              }}
            >
              <Typography
                sx={{
                  textAlign: 'center',
                  fontSize: 27,
                }}
              >
                We are waiting for your visit
              </Typography>
              <Typography
                align="center"
                sx={{
                  paddingTop: 2,
                  maxWidth: 284,
                  fontSize: 17,
                  fontWeight: 400,
                }}
              >
                <RoomOutlinedIcon
                  style={{
                    color: '#4C50E1',
                    fontSize: 30,
                  }}
                />
                1 Central Street, Boston
              </Typography>
              <Typography
                align="center"
                sx={{
                  paddingTop: 2,
                  maxWidth: 284,
                  fontSize: 17,
                  fontWeight: 400,
                }}
              >
                <RoomOutlinedIcon
                  style={{
                    color: '#4C50E1',
                    fontSize: 30,
                  }}
                />
                18 South Park, London
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            md={4}
            sx={{
              height: 370,
              width: 375,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
              }}
            >
              <Typography
                sx={{
                  textAlign: 'center',
                  fontSize: 27,
                }}
              >
                Connect with us
              </Typography>
              <Typography
                sx={{
                  paddingTop: 2,
                  maxWidth: 284,
                  fontSize: 17,
                  fontWeight: 400,
                }}
              >
                <EmailOutlinedIcon
                  style={{
                    color: '#4C50E1',
                    fontSize: 30,
                    marginRight: 5,
                  }}
                />
                email@meowtime.com
              </Typography>
              <Typography
                sx={{
                  paddingTop: 2,
                  maxWidth: 284,
                  fontSize: 17,
                  fontWeight: 400,
                }}
              >
                <PermPhoneMsgOutlinedIcon
                  style={{
                    color: '#4C50E1',
                    fontSize: 30,
                    marginRight: 5,
                  }}
                />
                +13 674 567 75 54
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          flexWrap: 'wrap',
          maxWidth: 1280,
          mx: 'auto',
        }}
      >
        <img
          src="../assets/splash/images/footer-cat.svg"
          alt="footer-cat"
          style={{
            width: 350,
            height: 216,
            marginRight: 'auto',
          }}
        />

        <img
          src="../assets/splash/images/rsschool.svg"
          alt="footer-cat"
          style={{
            width: 125,
            height: 49,
          }}
        />
      </Box>
    </div>
  );
};

export default Footer;
