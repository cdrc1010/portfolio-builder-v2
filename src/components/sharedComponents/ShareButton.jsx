import React, { useState } from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { StyledButton, StyledTooltip, StyledTypography } from './sharebuttonStyles';
import { useCollection } from '../../hooks/useCollection';

const ShareButton = ({ currentUser }) => {
    const [open, setOpen] = useState(false);
    const [copySuccess, setCopySuccess] = useState('');
    const { documents } = useCollection("publicData");
    const findPublicData = documents.find(doc => doc.id === currentUser.uid)

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
            {!!findPublicData && copySuccess}
            {!findPublicData && <>
                You must relogin to share your portfolio
            </>}
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