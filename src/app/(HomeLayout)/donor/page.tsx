'use client';

import SingleDonor from '@/components/shared/SingleDonor';
import DonorSkeleton from '@/components/shared/skeletons/DonorSkeleton';
import { bloodGroup } from '@/constant';
import { useGetAllDonorsQuery } from '@/store/api/donor.api';
import { IUser } from '@/types';
import {
  Button,
  Container,
  Grid,
  MenuItem,
  Pagination,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

const initState = {
  bloodType: '',
  location: '',
  availability: '',
  limit: 12,
  page: 1,
};

const DonorPage = () => {
  const [query, setQuery] = useState(initState);
  const { data, isLoading, isFetching } = useGetAllDonorsQuery({ ...query });

  const handleClear = () => {
    setQuery(initState);
  };

  return (
    <Stack py={6}>
      <Container>
        <Typography
          component='h2'
          variant='h2'
          align='center'
          textTransform='uppercase'
          fontWeight='700'
        >
          All Blood Donors
        </Typography>

        <Container maxWidth='md'>
          <Grid container my={2}>
            <Grid item xs={12} md={6} lg={3} p='2px'>
              <TextField
                value={query.bloodType}
                size='small'
                onChange={(e) => setQuery((p) => ({ ...p, bloodType: e.target.value }))}
                select
                label='Blood Group'
                fullWidth
              >
                {[{ name: '', value: '' }, ...bloodGroup].map((item) => (
                  <MenuItem key={item.name} value={item.value}>
                    {item.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} md={6} lg={3} p='2px'>
              <TextField
                label='Location'
                onChange={(e) => setQuery((p) => ({ ...p, location: e.target.value }))}
                value={query.location}
                size='small'
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3} p='2px'>
              <TextField
                value={query.availability}
                onChange={(e) => setQuery((p) => ({ ...p, availability: e.target.value }))}
                size='small'
                select
                label='Availability'
                fullWidth
              >
                {[
                  { name: '', value: '' },
                  { name: 'True', value: 'true' },
                  { name: 'False', value: 'false' },
                ].map((item) => (
                  <MenuItem key={item.name} value={item.value}>
                    {item.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} md={6} lg={3} p='2px'>
              <Button variant='contained' fullWidth onClick={handleClear}>
                Clear
              </Button>
            </Grid>
          </Grid>
        </Container>

        {(isLoading || isFetching) && <DonorSkeleton />}

        <Grid container>
          {!isLoading &&
            data?.data?.map((donor: IUser) => <SingleDonor key={donor.id} donor={donor} />)}
        </Grid>

        {data?.data?.length === 0 && (
          <Typography
            variant='h4'
            color='red'
            textAlign='center'
            sx={{
              maxWidth: '500px',
              border: '2px solid red',
              margin: '2rem auto',
              padding: '1rem',
              borderRadius: '8px',
              fontWeight: '600',
              textTransform: 'capitalize',
            }}
          >
            No Donors Found...
          </Typography>
        )}

        {/* Pagination */}
        <Stack spacing={2} direction='row' py={4} justifyContent='center' width='100%'>
          <Pagination
            variant='outlined'
            shape='rounded'
            count={data?.meta?.totalPage}
            page={query.page}
            onChange={(_event, value) => setQuery((prev) => ({ ...prev, limit: value }))}
          />
        </Stack>
      </Container>
    </Stack>
  );
};

export default DonorPage;
