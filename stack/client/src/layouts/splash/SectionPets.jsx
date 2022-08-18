import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/system';
import { Button } from '@mui/material';

const SectionPets = () => {
  return (
    <Container
      sx={{
        maxWidth: 1280,
        marginTop: 20,
        mx: 'auto',
        marginBottom: 0,
      }}
    >
      <Typography
        sx={{
          display: 'block',
          ms: 'auto',
          textAlign: 'center',
          mx: 'auto',
          maxWidth: 550,
          minHeight: 105,
          fontSize: 36,
          fontWeight: 700,
        }}
      >
        We have a shelter and many cats for you.
      </Typography>

      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={0}
        marginTop="45px"
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
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              sx={{
                height: 250,
                width: 250,
                borderRadius: 50,
              }}
              alt="The house from the offer."
              src="../assets/splash/images/shelter_2.jpg"
            />
            <Typography
              sx={{
                paddingTop: 4,
                textAlign: 'center',
                fontSize: 27,
              }}
            >
              Lucy
            </Typography>
            <Typography
              align="center"
              sx={{
                paddingTop: 2,
                maxWidth: 284,
                fontSize: 17,
                fontWeight: 300,
              }}
            >
              Location: meowShelter
            </Typography>

            <Button
              variant="contained"
              sx={{
                marginTop: 4,
                width: 170,
                height: 50,
                borderRadius: 2,
                textAlign: 'center',
                fontSize: 17,
                fontWeight: 400,
              }}
            >
              More
            </Button>
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
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              sx={{
                height: 250,
                width: 250,
                borderRadius: 50,
              }}
              alt="The house from the offer."
              src="../assets/splash/images/shelter_3.jpg"
            />
            <Typography
              sx={{
                paddingTop: 4,
                textAlign: 'center',
                fontSize: 27,
              }}
            >
              Tyson
            </Typography>
            <Typography
              align="center"
              sx={{
                paddingTop: 2,
                maxWidth: 284,
                fontSize: 17,
                fontWeight: 300,
              }}
            >
              Location: meowShelter
            </Typography>

            <Button
              variant="contained"
              sx={{
                marginTop: 4,
                width: 170,
                height: 50,
                borderRadius: 2,
                textAlign: 'center',
                fontSize: 17,
                fontWeight: 400,
              }}
            >
              More
            </Button>
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
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              sx={{
                height: 250,
                width: 250,
                borderRadius: 100,
              }}
              alt="The house from the offer."
              src="../assets/splash/images/shelter_4.jpg"
            />
            <Typography
              sx={{
                paddingTop: 4,
                textAlign: 'center',
                fontSize: 27,
              }}
            >
              Tsunami
            </Typography>
            <Typography
              sx={{
                paddingTop: 2,
                textAlign: 'center',
                maxWidth: 284,
                fontSize: 17,
                fontWeight: 300,
              }}
            >
              Location: meowShelter
            </Typography>
            <Button
              variant="contained"
              sx={{
                marginTop: 4,
                width: 170,
                height: 50,
                borderRadius: 2,
                textAlign: 'center',
                fontSize: 17,
                fontWeight: 400,
              }}
            >
              More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionPets;
