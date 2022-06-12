import { makeStyles } from '@mui/styles';

export default makeStyles((theme: any) => ({
    appbar: {
        Index: theme.zIndex.modal + 1,
        // boxShadow:' 0px 0.7px 0px #E5E9F2',
        // testing
        backgroundColor: '#fff !important',
        color:'#000000 !important',
        zIndex: 1,
        borderBottom:'1px solid #E5E7EB'
    },
    btn: {
        color: '#2c4c3b',
        fontWeight: 700,
        textTransform: 'capitalize',
    },
    toolbarMargin: {
        // ...theme.mixins.toolbar,
        minHeight: '54px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '1em',
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: '0.1em',
        },
    },
    text:{
        backgroundColor:'#E5E7EB',
        color:'#111827',
        borderRadius:'20px',
        marginLeft:'20px !important',
        padding:'6px 10px 6px 10px',
    }
}));
