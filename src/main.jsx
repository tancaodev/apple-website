import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// import * as Sentry from "@sentry/react";

// Sentry.init({
//   dsn: "https://67b337deda64fa382cd32991c3123bd0@o4508969281388544.ingest.us.sentry.io/4508969287483392",
//   integrations: [
//     Sentry.reactRouterV6BrowserTracingIntegration({
//       useEffect: React.useEffect
//     }),
//   ]
// });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
