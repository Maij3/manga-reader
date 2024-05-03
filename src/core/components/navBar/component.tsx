import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Container, Grid, IconButton, Toolbar, Typography } from "@mui/material"

type TNavbar = {
  drawerWidth: number
}

function Navbar({ drawerWidth }: TNavbar) {
  return (
    <Container>
    <AppBar
      position="fixed"
      sx={{
        width: { xl: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: {  xl: "none" } }}
        >
          <MenuOutlined />
        </IconButton>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6" noWrap component="div">
            MR
          </Typography>
          <IconButton color="error">
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>

    </Container>

  )
}

export { Navbar }
