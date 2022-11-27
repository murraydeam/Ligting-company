import { List, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../theme";

// container
export const AppbarContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: 4,
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 8px",
}));

// header 
export const AppbarHeader = styled(Typography)(() => ({
    padding: '4px',
    flexGrow: 1,
    fontSize: '3.5em',
    color: Colors.secondary,
}))


export const MyList = styled(List)(({ type }) => ({
    display: type === 'row' ? 'flex' : 'block',
    flex: 3, 
    justifyContent: 'center', 
    alignItems: 'center'
}))

export const ActionsIconsContainerDesktop = styled(Box)(() => ({
  flexGrow: 0
}))
export const ActionsIconsContainerMobile = styled(Box)(() => ({
  display: 'flex',
  background: Colors.primary,
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  alignItems: 'center', 
  zIndex: 99,
  borderTop: `1px solid ${Colors.primary}` 
}))

