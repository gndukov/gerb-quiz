import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { styled } from '@mui/system';

export const CorrectIcon = styled(CheckBoxOutlinedIcon)(({ theme }) => ({
    color: 'Green',
}));


export const IncorrectIcon = styled(IndeterminateCheckBoxIcon)(({ theme }) => ({
    color: 'Red',
}));