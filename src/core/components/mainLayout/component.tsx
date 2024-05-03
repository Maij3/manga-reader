import { Box, Toolbar } from '@mui/material';
import { SideBar, Navbar } from '@core/components';

type TMainLayout = {
  drawerWidth?: number;
  children?: React.ReactNode | React.ReactNode[];
}

function MainLayout({ children, drawerWidth = 240 }: TMainLayout) {
  return (
    <Box>
      <Box
        sx={{ display: "flex" }}
      >
        <Navbar drawerWidth={drawerWidth} />
        <SideBar drawerWidth={drawerWidth} />
        <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
        </Box>
        {children}
      </Box>
    </Box>
  )
}

export default MainLayout;