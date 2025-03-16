import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import Logo from '../UI/Logo';
import Link from 'next/link';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        p: 6,
        color: 'primary.light',
      }}
      component='footer'
    >
      <Container>
        <Box sx={{ marginLeft: '-.6rem' }}>
          <Logo />
          <Logo mobile />
        </Box>
        <Grid container spacing={4} justifyContent='space-between'>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant='h6'>Contact</Typography>
            <Typography variant='body2'>Email: anweshagoswami25@gmail.com</Typography>
            <Typography variant='body2'>Phone: +917003564891</Typography>
            <Typography variant='body2'>Address: Anandapur, Kolkata, West Bengal, India</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} textAlign={{ xs: 'left', sm: 'right', md: 'center' }}>
            <Typography variant='h6' gutterBottom>
              Social
            </Typography>
            <Stack direction='column'>
              
              
              <Typography
                variant='body2'
                component={Link}
                href='www.linkedin.com/in/anwesha-goswami-388119282'
                target='_blank'
                sx={{ color: 'primary.light' }}
              >
                Linkedin
              </Typography>
            </Stack>
          </Grid>
          
        </Grid>
        <Box mt={4}>
          <Typography variant='body2' align='center'>
            Copyright © RoktoDaan{' '}
            <a
              href='www.linkedin.com/in/anwesha-goswami-388119282'
              target='_blank'
              style={{
                color: 'inherit',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontStyle: 'italic',
              }}
            >
              Anwesha
            </a>{' '}
            @{new Date().getFullYear()}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
