import { Box, Divider, Drawer, Toolbar, Typography } from "@mui/material";
import { NavBarItemMenu } from "@core/components/navBar/itemMenu";
import { useContext } from "react";
import { UIContext } from "@core/context/ui/UIContext";

type TSideBar = {
  drawerWidth: number;
}
function SideBar({ drawerWidth }: TSideBar) {
  const { sideIsOpen , setIsOpen } = useContext(UIContext)
  return (
    <Box component='nav' sx={{
      width: {
        sm: drawerWidth
      },
      flexShrink: { sm: 0 },
      display: { xs: "none", sm: "none", xl: "block" },
    }}>
      <Drawer
        open={sideIsOpen}
        onClose={setIsOpen}
        anchor="right"
        transitionDuration={{ enter: 800, exit: 800 }}
        sx={{
          display: 'block',
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <img
            src=""
            style={{ borderRadius: "50%", margin: "10px auto" }}
            referrerPolicy="no-referrer"
          />
        </Toolbar>
        <Typography
          style={{ textAlign: "center", marginBottom: "10px" }}
          variant="h6"
          noWrap
          component="div"
        >
          User
        </Typography>
        <Divider />

        <NavBarItemMenu />
      </Drawer>
    </Box>
  )
}
export { SideBar }