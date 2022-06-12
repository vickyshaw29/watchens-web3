/* eslint-disable */
import React from 'react';
import {Button, CircularProgress} from '@mui/material';
import ButtonStyles from './ButtonStyles';
import { ButtonProps } from '../../../interfaces';

const CustomButton: React.FC<ButtonProps> = ({className, variant, color,style,size,startIcon,disabled,endIcon,onClick,isLoading,buttonName}) => {
  const classes = ButtonStyles();
  return (
    <div className={classes.button}>
      <Button
        className={className}
        variant={variant}
        color={color}
        style={style}
        size={size}
        startIcon={startIcon}
        endIcon={endIcon}
        disabled={disabled}
        onClick={onClick}
        >
        {isLoading ? (
          <CircularProgress color="secondary" size={18} />
        ) : (
          buttonName
        )}
      </Button>
    </div>
  );
};
export default CustomButton;
