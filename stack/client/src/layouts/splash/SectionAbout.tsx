import React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Container } from '@mui/system';
import { Typography, Button } from '@mui/material';

const SectionInfo = () => {
  return (
    <Container
      sx={{
        maxWidth: 1280,
        marginTop: 0,
        mx: 'auto',
        marginBottom: 0,
      }}
    >
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={0}
        marginTop="44px"
      >
        <Grid
          item
          md={6}
          sx={{
            height: 425,
            width: 570,
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
                height: 422,
                width: 570,
              }}
              alt="The house from the offer."
              src="../assets/splash/images/about.png"
            />
          </Box>
        </Grid>

        <Grid
          item
          md={6}
          sx={{
            height: 500,
            width: 425,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: 568,
              minHeight: 105,
              marginTop: 10,
            }}
          >
            <Typography
              sx={{
                marginTop: 5,
                fontFamily: 'Roboto',
                fontWeight: 600,
                textAlign: 'left',
                fontSize: 36,
              }}
            >
              Made for cat lovers, by cat lovers
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 300,
                textAlign: 'left',
                fontSize: 17,
                paddingTop: 3,
                paddingLeft: 2,
              }}
            >
              Cats are Meowtime top priority. Meowtime is the only cat-centric service site that is
              committed to benefiting all kitties by providing a community of trusted cat sitters.
            </Typography>

            <Container
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: 505,
                minHeight: 105,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  color: 'primary',
                  marginRight: 3,
                }}
              >
                Reserve a cat sitter
              </Button>

              <Button variant="contained" color="inherit">
                Become a cat sitter
              </Button>
            </Container>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionInfo;
