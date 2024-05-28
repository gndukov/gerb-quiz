import Chip from '@mui/material/Chip';
import { styled } from '@mui/system';

export const CustomChip = styled(Chip)(({ theme }) => ({
    backgroundColor: 'white',
    color: 'black', // Text color inside the chip
    border: '1px solid rgba(0, 0, 0, 0.23)', // Optional: adding a border
    '& .MuiChip-icon': {
        color: 'black', // Color of the icon inside the chip
    },
}));