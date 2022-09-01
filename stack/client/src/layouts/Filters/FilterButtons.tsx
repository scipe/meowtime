import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { indigo } from '@mui/material/colors';

const FilterButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(indigo[500]),
  backgroundColor: indigo[500],
  '&:hover': {
    backgroundColor: indigo[700],
  },
  '&:active': {
    backgroundColor: '#757de8',
  },
}));

export default FilterButton;
