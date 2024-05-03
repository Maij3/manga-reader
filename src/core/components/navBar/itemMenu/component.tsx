import { TurnedInNot } from "@mui/icons-material";
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

function NavBarItemMenu() {
  return (
    <ListItem disablePadding>
      <ListItemButton >
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container sx={{ flexDirection: "column" }}>
          <ListItemText primary='Home' />
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}

export { NavBarItemMenu }