import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";

declare global {
  interface Window {
    __DRAFTFORGE_REACT_STARTED__?: boolean;
    __DRAFTFORGE_REACT_MOUNTED__?: boolean;
  }
}

window.__DRAFTFORGE_REACT_STARTED__ = true;

const rootElement = document.getElementById("root");

const renderFatalError = (message: string) => {
  if (!rootElement) {
    return;
  }

  rootElement.innerHTML = `
    <main style="min-height:100vh;display:grid;place-items:center;background:#0A0E1A;color:#E5E7EB;font-family:system-ui,sans-serif;padding:24px;">
      <section style="max-width:720px;border:1px solid #1E2D45;background:#111827;border-radius:8px;padding:24px;">
        <h1 style="margin:0 0 8px;color:#F59E0B;">DraftForge encontrou um erro</h1>
        <pre style="white-space:pre-wrap;color:#CBD5E1;font-size:13px;line-height:1.5;">${message}</pre>
      </section>
    </main>
  `;
};

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { error?: Error }> {
  state: { error?: Error } = {};

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <main className="grid min-h-screen place-items-center bg-night p-6 text-slate-100">
          <section className="max-w-2xl rounded-lg border border-line bg-panel p-6">
            <h1 className="font-display text-3xl font-bold text-gold">DraftForge encontrou um erro</h1>
            <pre className="mt-4 whitespace-pre-wrap text-sm text-slate-300">{this.state.error.message}</pre>
          </section>
        </main>
      );
    }

    return this.props.children;
  }
}

window.addEventListener("error", (event) => {
  renderFatalError(event.error instanceof Error ? event.error.message : event.message);
});

window.addEventListener("unhandledrejection", (event) => {
  const reason = event.reason instanceof Error ? event.reason.message : String(event.reason);
  renderFatalError(reason);
});

try {
  if (!rootElement) {
    throw new Error("Elemento #root nao encontrado.");
  }

  ReactDOM.createRoot(rootElement).render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>,
  );
  window.__DRAFTFORGE_REACT_MOUNTED__ = true;
} catch (error) {
  renderFatalError(error instanceof Error ? error.message : String(error));
}
