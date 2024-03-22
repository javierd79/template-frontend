import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider, MantineTheme } from '@mantine/core';
import Loading from './components/Loading.tsx';
import { Provider, useSelector } from 'react-redux'
import { store, RootState } from './store'
import './index.css';
import './i18n.ts'

const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <StrictMode>
      <Provider store={store}>
        {children}
      </Provider>
    </StrictMode>
  )
}

const AppWrapper = () => {
  const mode = useSelector((state: RootState) => state.theme.mode)
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

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: mode,
        other: {
          bgDark: "#1A1B1E",
          bgLight: "#EEF5FF",
          defaultFontSize: "1rem"
        }
      }}
    >
      {!App ? <Loading full message="Loading..." /> : <App />}
    </MantineProvider>
  );
}

export default function Main() {
  return (
    <Layout>
      <AppWrapper />
    </Layout>
  );
}

createRoot(document.getElementById('root')!).render(<Main />);

// Remove Preload scripts loading
postMessage({ payload: 'removeLoading' }, '*');

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message);
});