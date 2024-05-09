import { UIContext } from "@core/context/ui/UIContext"
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Container, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { useContext } from "react"

type TNavbar = {
  drawerWidth: number
}

function Navbar({ drawerWidth }: TNavbar) {
  const { setIsOpen } = useContext(UIContext)

  return (
    <Container>
    <AppBar
      position="fixed"
      sx={{
        width: { xl: `100%` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2 }}
          onClick={setIsOpen}
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
