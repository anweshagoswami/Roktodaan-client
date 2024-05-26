'use client';

import { TBlood, blood } from '@/constant';
import {
  useGetAllUserQuery,
  useUpdateUserRoleMutation,
  useUpdateUserStatusMutation,
} from '@/store/api/manageUsers.api';
import dateFormatter from '@/utils/dateFormatter';
import { Chip, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { toast } from 'sonner';

const StyledGridOverlay = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  '& .ant-empty-img-1': {
    fill: theme.palette.primary.main,
  },
  '& .ant-empty-img-2': {
    fill: theme.palette.secondary.main,
  },
  '& .ant-empty-img-3': {
    fill: '#434343',
  },
  '& .ant-empty-img-4': {
    fill: theme.palette.primary.light,
  },
  '& .ant-empty-img-5': {
    fillOpacity: '1',
    fill: theme.palette.primary.main,
  },
}));

function CustomNoRowsOverlay() {
  return (
    <StyledGridOverlay>
      <svg
        style={{ flexShrink: 0 }}
        width='240'
        height='200'
        viewBox='0 0 184 152'
        aria-hidden
        focusable='false'
      >
        <g fill='none' fillRule='evenodd'>
          <g transform='translate(24 31.67)'>
            <ellipse className='ant-empty-img-5' cx='67.797' cy='106.89' rx='67.797' ry='12.668' />
            <path
              className='ant-empty-img-1'
              d='M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z'
            />
            <path
              className='ant-empty-img-2'
              d='M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z'
            />
            <path
              className='ant-empty-img-3'
              d='M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z'
            />
          </g>
          <path
            className='ant-empty-img-3'
            d='M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z'
          />
          <g className='ant-empty-img-4' transform='translate(149.65 15.383)'>
            <ellipse cx='20.654' cy='3.167' rx='2.849' ry='2.815' />
            <path d='M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z' />
          </g>
        </g>
      </svg>
      <Box sx={{ mt: 1 }}>No Blood Requests</Box>
    </StyledGridOverlay>
  );
}

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', headerAlign: 'left', align: 'left', flex: 1 },
  { field: 'email', headerName: 'Email', headerAlign: 'center', align: 'center', flex: 1 },
  {
    field: 'bloodType',
    headerName: 'Blood Group',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
  },
  {
    field: 'dateOfBirth',
    headerName: 'Date of Birth',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
  },
  {
    field: 'lastDonationDate',
    headerName: 'Last Donation Date',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
  },
  {
    field: 'availability',
    headerName: 'Availability',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
    renderCell: (params: GridRenderCellParams<any, Date>) => {
      return (
        <Chip
          label={params.row.availability ? 'Available' : 'Not Available'}
          color={params.row.availability ? 'success' : 'error'}
          size='small'
        />
      );
    },
  },
  {
    field: 'status',
    headerName: 'Status',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
    renderCell: (params: GridRenderCellParams<any, Date>) => {
      const handleChange = async (event: SelectChangeEvent) => {
        await params.row.handleUpdateStatus(params.row.id, event.target.value);
      };

      return (
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          size='small'
          value={params.row.status}
          label='Age'
          onChange={handleChange}
        >
          <MenuItem value='ACTIVE'>ACTIVE</MenuItem>
          <MenuItem value='INACTIVE'>INACTIVE</MenuItem>
          <MenuItem value='BLOCKED'>BLOCK</MenuItem>
        </Select>
      );
    },
  },
  {
    field: 'role',
    headerName: 'Role',
    headerAlign: 'right',
    align: 'right',
    flex: 1,
    renderCell: (params: GridRenderCellParams<any, Date>) => {
      const handleChange = async (event: SelectChangeEvent) => {
        await params.row.handleUpdateRole(params.row.id, event.target.value);
      };

      return (
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          size='small'
          value={params.row.role}
          label='Age'
          onChange={handleChange}
        >
          <MenuItem value='ADMIN'>ADMIN</MenuItem>
          <MenuItem value='USER'>USER</MenuItem>
        </Select>
      );
    },
  },
];

const ManageUsersPage = () => {
  const { data, isLoading } = useGetAllUserQuery({});
  const [updateRole] = useUpdateUserRoleMutation();
  const [updateStatus] = useUpdateUserStatusMutation();

  const handleUpdateStatus = async (id: string, status: string) => {
    const toastId = toast.loading('Updating status...');
    try {
      const res = await updateStatus({ id, payload: { status } }).unwrap();

      if (res.success) {
        toast.success('Status updated successfully', { id: toastId });
      }
    } catch (error) {
      toast.error('Failed to update status', { id: toastId });
    }
  };

  const handleUpdateRole = async (id: string, status: string) => {
    const toastId = toast.loading('Updating role...');
    try {
      const res = await updateRole({ id, payload: { role: status } }).unwrap();
      if (res.success) {
        toast.success('Role updated successfully', { id: toastId });
      }
    } catch (error) {
      toast.error('Failed to update role', { id: toastId });
    }
  };

  const rows = data?.data.map((row: any) => ({
    id: row.id,
    name: row.name,
    email: row.email,
    bloodType: blood[row.bloodType as TBlood],
    availability: row.availability,
    dateOfBirth: dateFormatter.stringToMonth(row.userProfile.dateOfBirth),
    lastDonationDate: dateFormatter.stringToMonth(row.userProfile.lastDonationDate),
    status: row.status,
    role: row.role,
    handleUpdateStatus: handleUpdateStatus,
    handleUpdateRole: handleUpdateRole,
  }));

  return (
    <Box sx={{ width: '100%' }}>
      <DataGrid
        autoHeight
        hideFooter
        loading={isLoading}
        hideFooterPagination
        columns={columns}
        rows={rows || []}
        slots={{ noRowsOverlay: CustomNoRowsOverlay }}
        sx={{
          '--DataGrid-overlayHeight': '300px',
        }}
      />
    </Box>
  );
};

export default ManageUsersPage;
