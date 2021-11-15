import { PrivateRoute } from 'components/organisms/route/PrivateRoute'
import { PublicRoute } from 'components/organisms/route/PublicRoute'
import { Auth } from 'components/pages/Auth'
import { Route, Routes } from 'react-router'
import { Main } from './components/pages/Main'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute>
            <Auth />
          </PublicRoute>
        }
      />
      <Route
        path="/main"
        element={
          <PrivateRoute>
            <Main />
          </PrivateRoute>
        }
      />
    </Routes>
  )
}

export default App
