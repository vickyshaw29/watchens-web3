import { makeStyles } from "@mui/styles";

export default makeStyles((theme: any) => ({
    text:{
        fontWeight:`${500} !important`
    },
    tagline:{
        fontSize:'1rem !important',
        marginLeft:'18px !important',
        [theme.breakpoints.down("sm")]:{
            fontSize:'0.8rem !important',
            marginLeft:'4px'
        }
    },
    title:{
        fontWeight:`${500} !important`,
        fontSize:20
    },
    title2:{
        fontWeight:`${500} !important`,
        fontSize:'16px !important',
        [theme.breakpoints.down("sm")]:{
            fontSize:'12px !important'
        }

    }
}));