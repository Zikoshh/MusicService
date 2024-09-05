import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import Main from './components/Main';
import Track from './components/Track';
import Playlist from './components/Playlist';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/track/:id',
        element: <Track />,
      },
      { path: '/playlists/:id', element: <Playlist /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <StrictMode>
      <App />
    </StrictMode>
  </RouterProvider>
);
