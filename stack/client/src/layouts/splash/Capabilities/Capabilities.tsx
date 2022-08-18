import React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Container } from '@mui/system';
import { Typography } from '@mui/material';

const Capabilities = () => {
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
          textAlign: 'center',
          mx: 'auto',
          maxWidth: 1150,
          minHeight: 105,
          fontSize: 36,
          fontWeight: 300,
        }}
      >
        Experience the magic and convenience of our impeccable home hospitality
      </Typography>

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
                height: 210,
                width: 230,
              }}
              alt="The house from the offer."
              src="../assets/splash/images/find_sitter.svg"
            />
            <Typography
              sx={{
                textAlign: 'center',
                fontSize: 27,
              }}
            >
              Search and reserve
            </Typography>
            <Typography
              align="center"
              sx={{
                maxWidth: 284,
                fontSize: 17,
                fontWeight: 300,
              }}
            >
              Every Meowtime sitter is tested and fully insured.
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
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              sx={{
                height: 210,
                width: 272,
              }}
              alt="The house from the offer."
              src="../assets/splash/images/greet_meet.svg"
            />
            <Typography
              sx={{
                textAlign: 'center',
                fontSize: 27,
              }}
            >
              Set up your free Meet &amp; Greet
            </Typography>
            <Typography
              align="center"
              sx={{
                maxWidth: 284,
                fontSize: 17,
                fontWeight: 300,
              }}
            >
              The sitter will meet you and the kitties to ensure it&apos;s the purrfect match
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
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              sx={{
                height: 210,
                width: 272,
              }}
              alt="The house from the offer."
              src="../assets/splash/images/travel.svg"
            />
            <Typography
              sx={{
                textAlign: 'center',
                fontSize: 27,
              }}
            >
              Travel with peace of mind
            </Typography>
            <Typography
              sx={{
                textAlign: 'center',
                maxWidth: 284,
                fontSize: 17,
                fontWeight: 300,
              }}
            >
              You&apos;ll receive regular updates, including lots of photos and video
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Capabilities;
