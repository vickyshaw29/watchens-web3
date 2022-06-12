import { makeStyles } from "@mui/styles";

export default makeStyles((theme: any) => ({
    button: {
        "& button.btngiant": {
            backgroundColor: theme.palette.primary.main,
            backgroundOrigin: "padding-box",
            borderRadius: "5px",
            color: "#fff",
            margin: "0 0 0 30px",
            textTransform: "none",

            font: "normal normal bold 14px/19px DM Sans",
            padding: "19px 38px 18px 38px",
            minHeight: "56px",
            minWidth: "120px",
            "&:hover": {
                opacity: 0.2,
            },
            "&:active": {
                color: "#fff",
                backgroundColor: theme.palette.common.black,
                opacity: 0.4,
            },
            "&:focus": {
                minWidth: "126px",
                border: "1px solid #A8A8A8",
                borderRadius: "8px",
                opacity: 1,
            },
            "&.Mui-disabled": {
                opacity: "0.3 !important",
            },
        },

        "& button.btnlarge": {
            backgroundColor: theme.palette.primary.main,
            backgroundOrigin: "padding-box",
            borderRadius: "5px",
            color: "#fff",
            margin: "0 0 0 30px",
            textTransform: "none",

            font: "normal normal bold 14px/19px DM Sans",
            padding: "15px 28px 14px 28px",
            minWidth: "100px",
            minHeight: "48px",
            "&:hover": {
                opacity: 0.2,
            },
            "&:active": {
                color: "#fff",
                backgroundColor: theme.palette.common.black,
                opacity: 0.4,
            },
            "&:focus": {
                border: "1px solid #A8A8A8",
                borderRadius: "8px",
                opacity: 1,
                minWidth: "106px",
            },
            "&.Mui-disabled": {
                opacity: "0.3 !important",
            },
        },
        "& button.btnmedium": {
            backgroundColor: theme.palette.primary.main,
            backgroundOrigin: "padding-box",
            borderRadius: "5px",
            color: "#fff",
            margin: "0 0 0 30px",
            textTransform: "none",

            font: "normal normal 500 14px/19px DM Sans",
            letterSpacing: "0.02em",
            padding: "10.86px 28px 10.14px 28px",
            minHeight: "40px",
            minWidth: "120px",
            "&:hover": {
                opacity: 0.2,
            },
            "&:active": {
                color: "#fff",
                backgroundColor: theme.palette.common.black,
                opacity: 0.4,
            },
            "&:focus": {
                border: "1px solid #A8A8A8",
                borderRadius: "7px",
                opacity: 1,
                minWidth: "126px",
            },
            "&.Mui-disabled": {
                opacity: "0.3 !important",
            },
        },
        "& button.btnsmall": {
            backgroundColor: theme.palette.primary.main,
            backgroundOrigin: "padding-box",
            borderRadius: "5px",
            // color: theme.palette.secondary.contrastText,
            textTransform: "none",

            font: "normal normal 400 14px/19px DM Sans",
            letterSpacing: "0.02em",
            padding: "6px 16px 6px 16px",
            minHeight: "32px",
            minWidth: "120px",
            "&.MuiSvgIcon-root": {
                width: "16px",
                height: "16px",
            },
            "&:hover": {
                opacity: 0.5,
            },
            "&:active": {
                color: "#fff",
                backgroundColor: theme.palette.common.black,
                opacity: 0.4,
            },
            "&:focus": {
                border: "1px solid #A8A8A8",
                borderRadius: "7px",
                opacity: 1,
                minWidth: "120px",
            },
            "&.Mui-disabled": {
                opacity: "0.3 !important",
            },
        },
        "& button.btntiny": {
            backgroundColor: theme.palette.primary.main,
            backgroundOrigin: "padding-box",
            borderRadius: "5px",
            color: "#fff",
            margin: "0 0 0 30px",
            textTransform: "none",

            font: "normal normal 500 12px/16px DM Sans",
            letterSpacing: "0.02em",
            padding: "5px 34px",
            minHeight: "24px",
            minWidth: "100px",
            "&:hover": {
                opacity: 0.2,
            },
            "&:active": {
                color: "#fff",
                backgroundColor: theme.palette.common.black,
                opacity: 0.4,
            },
            "&:focus": {
                border: "1px solid #A8A8A8",
                borderRadius: "7px",
                opacity: 1,
                minWidth: "106px",
            },
            "&.Mui-disabled": {
                opacity: "0.3 !important",
            },
        },
        "& button.secondaryButton": {
            color: theme.palette.primary.main,
            border: `0.5px solid ${theme.palette.primary.main}`,
            boxShadow: `inset 0px 0px 0px 0.5px ${theme.palette.primary.main}`,
            backgroundColor: theme.palette.secondary.contrastText,
            fontWeight: "bolder",
        },
        "& button.MuiButton-outlined": {
            backgroundOrigin: "padding-box",
            borderRadius: "5px",
            textTransform: "none",
            font: "normal normal 400 14px/19px DM Sans",
            letterSpacing: "0.02em",
            padding: "6px 16px 6px 16px",
            minHeight: "32px",
            minWidth: "120px",

            color: theme.palette.primary.main,
            border: `1px solid ${theme.palette.primary.main}`,
            backgroundColor: "unset !important",
            fontWeight: "bolder",
            "&.MuiSvgIcon-root": {
                width: "16px",
                height: "16px",
            },
            "&:hover": {
                opacity: 0.5,
            },
            "&:active": {
                color: "#fff",
                backgroundColor: theme.palette.common.black,
                opacity: 0.4,
            },
            "&:focus": {
                border: "1px solid #A8A8A8",
                borderRadius: "7px",
                opacity: 1,
                minWidth: "120px",
            },
            "&.Mui-disabled": {
                opacity: "0.3 !important",
            },
        },
    },
}));