import { Component } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

/**
 * Catches render-time crashes in its child tree and shows a graceful
 * fallback instead of a blank white screen. Wrap page-level sections
 * (or the whole app) with this.
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // In a real deployment this would report to an error-tracking service
    // (Sentry, LogRocket, etc.) instead of just the console.
    console.error("ErrorBoundary caught an error:", error, info);
  }

  handleReload = () => {
    this.setState({ hasError: false });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div
            role="alert"
            className="flex flex-col items-center justify-center text-center py-16 px-6 rounded-card border border-red-400/20 bg-red-400/5 max-w-2xl mx-auto my-10"
          >
            <div className="w-12 h-12 rounded-full bg-red-400/10 flex items-center justify-center mb-4 text-red-400">
              <AlertTriangle size={22} />
            </div>
            <h3 className="font-semibold text-base mb-1.5">Something went wrong</h3>
            <p className="text-text-secondary text-sm max-w-sm mb-5">
              This section couldn't be displayed. Try reloading the page.
            </p>
            <button
              onClick={this.handleReload}
              className="flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-xl text-sm font-medium hover:bg-secondary transition-colors"
            >
              <RefreshCw size={14} /> Reload
            </button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}