import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';

// Used only at build time by scripts/prerender.mjs to turn the app into static HTML,
// so search engines and link previews see the real page content without running JS.
export function render(): string {
  return renderToString(
    <StrictMode>
      <HelmetProvider context={{}}>
        <App />
      </HelmetProvider>
    </StrictMode>
  );
}
