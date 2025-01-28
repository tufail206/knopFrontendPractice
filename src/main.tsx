import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  AppTheme  from './theme'
import { ThemeProvider } from '@mui/material'
import { createBrowserRouter,RouterProvider,createRoutesFromElements } from 'react-router-dom'

import { CssBaseline } from '@mui/material'
import { appRoutes } from './routes/appRoutes.tsx'
// import AppLayout from './layout/AppLayout/index.tsx'

const router = createBrowserRouter(createRoutesFromElements(appRoutes))
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={AppTheme}>
      <CssBaseline enableColorScheme />
      <RouterProvider router={router} />
    </ThemeProvider>
 
  </StrictMode>,
)
