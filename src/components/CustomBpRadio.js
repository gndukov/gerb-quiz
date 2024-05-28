import Radio from '@mui/material/Radio';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { styled } from '@mui/system';

const CorrectIcon = styled(CheckBoxOutlinedIcon)(({ theme }) => ({
  color: 'Green',
}));

const IncorrectIcon = styled(IndeterminateCheckBoxIcon)(({ theme }) => ({
  color: 'Red',
}));

const WhiteIcon = styled(CheckBoxOutlinedIcon)(({ theme }) => ({
  color: 'white',
}));

const WhiteUncheckedIcon = styled(CheckBoxOutlineBlankOutlinedIcon)(({ theme }) => ({
  color: 'white',
}));

export const BpRadio = ({ validResponse, ...props }) => {
  const getCheckedIcon = () => {
    if (validResponse === null || validResponse === undefined) {
      return <WhiteIcon />;
    }
    if (validResponse === true) {
      return <CorrectIcon />;
    }
    if (validResponse === false) {
      return <IncorrectIcon />;
    }
  };

  return (
    <Radio
      disableRipple
      color="default"
      icon={<WhiteUncheckedIcon />}
      checkedIcon={getCheckedIcon()}
      {...props}
    />
  );
};