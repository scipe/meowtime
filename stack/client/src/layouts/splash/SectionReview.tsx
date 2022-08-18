import React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Container } from '@mui/system';
import { Typography } from '@mui/material';

const SectionReview = () => {
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
              marginTop: 7,
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
              Meowtime is my go-to for cat sitters
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 300,
                textAlign: 'left',
                fontSize: 17,
                paddingTop: 3,
              }}
            >
              I appreciate that unlike other apps for services they specifically cater to cat
              lovers. This is great because you can trust that the person looking after your fur
              baby is a fellow cat lover and knows what to expect and what to look for. I enjoy
              reading the cat sitters bio and choosing who to trust our cat with. I recommend
              meowtel for any of your cat sitting needs ^.^
            </Typography>

            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 300,
                textAlign: 'center',
                fontSize: 17,
                paddingTop: 4,
              }}
            >
              John Michael and Catherine Meowtel members since 2018
            </Typography>
          </Box>
        </Grid>

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
              src="../assets/splash/images/review.png"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionReview;
