import React, { useState } from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { StyledButton, StyledTooltip, StyledTypography } from './sharebuttonStyles';

const ShareButton = ({ currentUser }) => {
    const [open, setOpen] = useState(false);
    const [copySuccess, setCopySuccess] = useState('');

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = async () => {
        try {
            let publicProfile = window.location.href;
            const path = 'user/';
            publicProfile = publicProfile + path + currentUser.uid;
            await navigator.clipboard.writeText(publicProfile);
            setCopySuccess('Copied!');
            setOpen(true);
        } catch (err) {
            setCopySuccess('Failed to copy!');
        }
    };

    const tooltipContent = (
        <StyledTypography>
            {copySuccess}
        </StyledTypography>
    )

    return (
        <ClickAwayListener onClickAway={handleTooltipClose}>
            <div>
                <StyledTooltip
                    PopperProps={{
                        disablePortal: true,
                    }}
                    onClose={handleTooltipClose}
                    open={open}
                    title={tooltipContent}
                    placement='right'
                    arrow
                >
                    <StyledButton onClick={handleTooltipOpen}>
                        Share
                    </StyledButton>
                </StyledTooltip>
            </div>
        </ClickAwayListener>
    );
};

export default ShareButton;
