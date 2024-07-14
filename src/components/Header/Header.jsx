import React from 'react';  // Main Branch
// import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { alpha, styled } from '@mui/material/styles';
//import useStyles from './useStyles';
// import { makeStyles } from '@mui/styles';

// import useStyles from './styles';
// import { ClassNames } from '@emotion/react';

// commented
// const useStyles = styled((theme) => ({
//     toolbar: {
//       display: 'flex',
//       justifyContent: 'space-between',
//     },
//     title: {
//       // flexGrow: 1,
//       display: 'none',
//       [theme.breakpoints.up('sm')]: {
//         display: 'block',
//       },
//     },
//     search: {
//       position: 'relative',
//       borderRadius: theme.shape.borderRadius,
//       backgroundColor: alpha(theme.palette.common.white, 0.15),
//       '&:hover': {
//         backgroundColor: alpha(theme.palette.common.white, 0.25),
//       },
//       marginRight: theme.spacing(2),
//       marginLeft: 0,
//       width: '100%',
//       [theme.breakpoints.up('sm')]: {
//        marginLeft: theme.spacing(3),
//         width: 'auto',
//       },
//     },
//     searchIcon: {
//       padding: theme.spacing(0, 2),
//       height: '100%',
//       position: 'absolute',
//       pointerEvents: 'none',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       right: 0,
//     },
//     inputRoot: {
//       color: 'inherit',
//     },
//     inputInput: {
//       padding: theme.spacing(1, 1, 1, 0),
//       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//       transition: theme.transitions.create('width'),
//       width: '100%',
//       [theme.breakpoints.up('md')]: {
//         width: '20ch',
//       },
//     },
//   }))



// const Header = () => {
//      const classes = useStyles();
     

//     return (
        
//         <AppBar position ="static">
//             <Toolbar className={classes.toolbar}>
//                 <Typography variant="h5" className={classes.title}>
//                     Travel Advisor
//                 </Typography> 
//                 <Box display="flex" >
//                     <Typography variant="h6" className={classes.title}>
//                         Explore new places
//                     </Typography>
//                      {/* <Autocomplete>  */}
//                          <div className={classes.search}> 
//                          <div className={classes.searchIcon}>
//                         <searchIcon/>
//                         </div>    
//                         <InputBase placeholder="search..." classes={{root: classes.inputroot, input: classes.inputInput}}/>
//                          </div> 
//                      {/* </Autocomplete>  */}
//                 </Box>
//             </Toolbar>
//         </AppBar>
            
//            );
// };

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const Title = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  display: 'none',
  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  right: 0,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Header = () => {
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Title variant="h5">
          Travel Advisor
        </Title>
        <Box display="flex" alignItems="center">
          <Title variant="h6">
            Explore new places
          </Title>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;