//import { makeStyles } from "@mui/material";

import { createStyles, makeStyles } from "@mui/material";
//import makeStyles from "@mui/material/styles/makeStyles";

export const useAppHeaderStyle = makeStyles(() => createStyles({
  example: {
    fontSize: "58px",
    fontWeight: "700",
    lineHeight: "70.19px",
    letterSpacing: "-1px",
    textAlign: "left",
  },
}));




// export const useAppHeaderStyle = makeStyles(() => ({
//   logo: {
//     height: 'inherit',
//     width: 'auto'
//   },
//   userMenu: {
//     '& .MuiPaper-root': {
//       minWidth: '200px'
//     }
//   },
//   userMenuListItem: {
//     '&.MuiMenuItem-root': {
//       padding: '20px 16px 30px 16px'
//     }
//   },
//   userMenuListItemText: {
//     '& .MuiListItemText-secondary': { color: '#676A70', fontSize: '12px' }
//   },
//   userMenuItemSignOut: {
//     '&.MuiMenuItem-dense': {
//       paddingTop: '15px',
//       paddingBottom: '10px'
//     }
//   },
// }));