import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { Typography } from '@mui/material';


export const StyledButton = styled(Button)(() => ({
    color: '#353535',
    border: '1px solid #353535',
    marginLeft: 20,
    '&:hover': {
        backgroundColor: '#353535',
        color: '#ffffff',
    },
    ['@media (max-width:768px)']: {
        marginLeft: 0,
    },
}));

export const StyledTooltip = styled(Tooltip)(({ theme }) => ({
    tooltip: {
        backgroundColor: '#353535',
        color: theme.palette.common.white,
    },
}));

export const StyledTypography = styled(Typography)(() => ({
    fontSize:'14px',
    ['@media (max-width:768px)']: {
        fontSize:'12px',
    },
}))
