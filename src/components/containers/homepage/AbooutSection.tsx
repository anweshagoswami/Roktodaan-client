import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import aboutImage from '@/assets/about.png';
import SectionTitle from '@/components/UI/SectionTitle';

const AboutSection = () => {
  return (
    <Stack py={6} bgcolor='rgba(105, 0, 0, 0.88)'>
      <Container>
        <SectionTitle title='Our Mission' />
        <Grid container>
          {/* <Grid item xs={12} md={4}>
            <Box p={2}>
              <Image
                src={aboutImage}
                alt='About Us'
                width={400}
                height={320}
                style={{ width: '100%', objectFit: 'contain' }}
              />
            </Box>
          </Grid> */}
          {/* <Grid item xs={12} md={8}> */}
          <Grid item xs={12} md={12}>
            <Box p={2}>
              {/* <Typography variant='body1' m={0} paragraph textAlign='justify'>
                Welcome to BloodAidNetwork, your trusted platform dedicated to facilitating
                life-saving blood donations. Our mission is simple yet profound: to connect those in
                need of blood with compassionate donors swiftly and efficiently. We believe that
                every drop counts and that by uniting donors and recipients, we can create a network
                of hope and support that saves lives every day.
              </Typography>
              <Typography variant='body1' my={1} paragraph textAlign='justify'>
                At BloodAidNetwork, we understand the critical importance of timely blood donations.
                Our platform is designed to make the process seamless, whether you are looking to
                donate blood or need it urgently. By harnessing the power of technology and
                community, we strive to bridge the gap between demand and supply, ensuring that no
                one has to face a blood shortage alone.
              </Typography> */}

              <Typography textAlign={{ xs: 'center', md: 'left' }}>

Roktodaan is a innovative social enterprise dedicated to bridging the gap between blood donors and those in
 urgent need of blood.<br/><br/> Founded with the mission to save lives, Roktodaan leverages technology to create a seamless
  and efficient platform that connects voluntary donors with individuals, hospitals, and organizations
   requiring blood donations.<br/><br/> By fostering a community of compassionate donors and streamlining the blood request
    process, Roktodaan aims to address critical shortages, reduce response times, and ensure timely access to safe blood.
     Through its user-friendly platform, Roktodaan empowers people to make a life-saving difference, one donation at a time.<br/><br/>
              </Typography>

              {/* <p style={{ margin: '5px 0 0 0' }}>
                <strong>Our Mission</strong>
              </p>
              <ul style={{ margin: 0, padding: '0 0 0 1.5rem' }}>
                <li>To provide a reliable and accessible platform for blood donation.</li>
                <li>To raise awareness about the importance of regular blood donations.</li>
                <li>
                  To support hospitals and healthcare providers by ensuring a steady supply of
                  blood.
                </li>
                <li>To create a community of dedicated donors committed to saving lives.</li>
              </ul> */}
              <p style={{ margin: '5px 0 0 0' }}>
              <strong>Why Choose Roktodaan?</strong>
              </p>
              <ul style={{ margin: 0, padding: '0 0 0 1.5rem' }}>
                <li>Instant Connections: Our platform matches blood requests with nearby donors in real-time.</li>
                <li>Life-Saving Community: Join a network of compassionate individuals ready to make a difference.</li>
                <li>
                Trusted & Secure: We prioritize safety and transparency in every step of the process.
                </li>
                
              </ul>
              <br/>Every drop of blood matters, and every donor is a hero. Together, we can create a world where no life is lost due to a lack of blood.
                   Join us in our mission to save lives—because every drop counts.
              <strong><br/><br/>Be a Donor. <span style={{ color: '#f8345b' }}>Be a Lifesaver.</span> Every Drop Matters.</strong>










            </Box>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default AboutSection;