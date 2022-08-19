import React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Container } from '@mui/system';
import { Typography } from '@mui/material';
import UserSidebar from './UserSidebar';
import UserAccountInfo from './UserAccountInfo';

const UserCabinetBody = () => {
  return (
    <Container
      sx={{
        maxWidth: 1280,
        marginTop: 20,
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
          md={3}
          sx={{
            maxWidth: 260,
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
                height: 200,
                width: 200,
              }}
              alt="user-photo"
              src="../assets/splash/images/find_sitter.svg"
            />
            <Typography
              sx={{
                textAlign: 'center',
                fontSize: 27,
              }}
            >
              User name
            </Typography>
            <UserSidebar />
          </Box>
        </Grid>

        <Grid
          item
          md={9}
          sx={{
            maxWidth: 900,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                textAlign: 'center',
                fontSize: 27,
              }}
            >
              ESSENTIAL INFO
            </Typography>
            <Typography
              sx={{
                paddingTop: 3,
                maxWidth: 700,
                fontSize: 17,
                fontWeight: 300,
                textAlign: 'left',
              }}
            >
              Note: Fields showing * are required. We do not allow characters except
              alphabets, &quot;-&quot; and &quot;,&quot; for first name, last name and address.
            </Typography>

            <UserAccountInfo />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserCabinetBody;
