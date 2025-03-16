'use client';

import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import heroBanner from '@/assets/hero-banner.gif';
import bloodIcon from '@/assets/blood-icon.png';
import Link from 'next/link';

import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const HeroSection = () => {
  return (
    <Stack sx={{ minHeight: '80vh' }}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6} my={2}>
            <Stack
              direction='column'
              justifyContent='center'
              alignItems={{ xs: 'center', md: 'flex-start' }}
              gap={1}
              height='100%'
              m={2}
            >
              {/* <SiteName /> */}
              <Typography variant='h3' fontWeight={'600'}>
                RoktoDaan<br/>
              </Typography>
              <Typography variant='h5' fontWeight={'600'}>
                {/* Donate Blood because <span style={{ color: '#ffe6e6', 'text-decoration': 'underline' }}>Every Drop Counts</span><br/> */}
                Donate Blood because <span style={{ color: '#ffe6e6'}}>Every Drop Counts</span><br/>
              </Typography>
              <Typography textAlign={{ xs: 'center', md: 'left' }}>

              At Roktodaan, we believe that every drop of blood has the power to save a life.
               Our mission is simple yet profound: to connect generous blood donors with those in urgent need,
                ensuring that no one has to face a critical situation alone.<br/><br/>

In moments of crisis, time is precious, 
and access to blood can mean the difference between life and death. That’s why we’ve created a
 seamless, technology-driven platform that brings donors and requesters together quickly and efficiently. 
 Whether you’re a willing donor or someone in need, Roktodaan is here to make the process simple,
  reliable, and impactful.<br/><br/>
              </Typography>
              {/* <Typography textAlign={{ xs: 'center', md: 'left' }}>

Roktodaan is a innovative social enterprise dedicated to bridging the gap between blood donors and those in
 urgent need of blood.<br/><br/> Founded with the mission to save lives, Roktodaan leverages technology to create a seamless
  and efficient platform that connects voluntary donors with individuals, hospitals, and organizations
   requiring blood donations.<br/><br/> By fostering a community of compassionate donors and streamlining the blood request
    process, Roktodaan aims to address critical shortages, reduce response times, and ensure timely access to safe blood.
     Through its user-friendly platform, Roktodaan empowers people to make a life-saving difference, one donation at a time.<br/><br/>
              </Typography> */}
              <Box>
                <Link href='/donor'>
                  <Button>Search Donors</Button>
                </Link>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* <Image
              src={heroBanner}
              alt='hero'
              width={600}
              height={600}
              style={{ width: '100%', objectFit: 'cover' }}
            /> */}

            <DotLottieReact
              src="https://lottie.host/24a758dc-4947-4295-9fb6-8d52cb03ad0a/ze4QiXvL7y.lottie"
              loop
              autoplay
              width={600}
              height={600}
            />
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default HeroSection;

const SiteName = () => {
  return (
    <Stack
      direction='row'
      alignItems='center'
      sx={{
        display: 'flex',
        fontWeight: 700,
        color: 'inherit',
        marginLeft: '-1rem',
      }}
    >
      <Image src={bloodIcon} alt='Blood Icon' width={116} height={80} />
      <Typography noWrap fontWeight='600' sx={{ fontSize: { xs: '2rem', sm: '3rem' } }}>
        RoktoDaan
      </Typography>
    </Stack>
  );
};