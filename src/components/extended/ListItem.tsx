import { ListItem as MuiListItem } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ListItem = styled(MuiListItem)(({ theme }) => ({
  transition: 'all ease 300ms',
  padding: '.2rem 1rem',
  fill: theme.palette.primary.light,

  '& .MuiButtonBase-root': {
    padding: '.2rem 1rem',
    margin: 0,
  },
  '& .MuiListItemIcon-root': {
    minWidth: '2.5rem',
  },
  '& .MuiSvgIcon-root': {
    fill: theme.palette.primary.light,
  },
  '& .MuiTypography-root': {
    color: theme.palette.primary.light,
    fontWeight: '400',
  },
}));
