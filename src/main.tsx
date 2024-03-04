import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import Loading from './components/Loading.tsx';
import './index.css';

export default function Main() {
  const [App, setApp] = useState<React.FC | null>(null);

  useEffect(() => {
    let importPromise;
    if (import.meta.env.MODE === 'web') {
      importPromise = import('./App.tsx');
    } else if (import.meta.env.MODE === 'desktop') {
      importPromise = import('./Desktop.tsx');
    } else {
      importPromise = import('./Default.tsx');
    }

    importPromise.then(module => {
      setApp(() => module.default);
    });
  }, []);

  if (!App) {
    return (
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme: 'dark' }}
      >
        <Loading
          full
          message="Loading..."
        />
      </MantineProvider>
    );
  }

  return (
    <StrictMode>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme: 'dark' }}
      >
        <App />
      </MantineProvider>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')!).render(<Main />);

// Remove Preload scripts loading
postMessage({ payload: 'removeLoading' }, '*');

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message);
});