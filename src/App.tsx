import { PrivateRoute } from 'components/organisms/route/PrivateRoute'
import { PublicRoute } from 'components/organisms/route/PublicRoute'
import { Auth } from 'components/pages/Auth'
import { ChatRooms } from 'components/pages/ChatRooms'
import { Users } from 'components/pages/Users'
import { Route, Routes } from 'react-router'
import { Main } from './components/pages/Main'
import { ChatRoom } from 'components/pages/ChatRoom'

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
      <Route
        path="/users"
        element={
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        }
      />
      <Route
        path="/chatRooms"
        element={
          <PrivateRoute>
            <ChatRooms />
          </PrivateRoute>
        }
      />
      <Route
        path="/chatRoom/:id"
        element={
          <PrivateRoute>
            <ChatRoom />
          </PrivateRoute>
        }
      />
    </Routes>
  )
}

export default App
