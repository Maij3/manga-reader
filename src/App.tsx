import MainLayout  from "@core/components/mainLayout"
import { AppTheme } from "@core/theme"
import { Typography } from "@mui/material"

function App() {
  return (
    <AppTheme>
      <MainLayout>
        <Typography variant="h3">App</Typography>
      </MainLayout>
    </AppTheme>
  )
}

export default App
