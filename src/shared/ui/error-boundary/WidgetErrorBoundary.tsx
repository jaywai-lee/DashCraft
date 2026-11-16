"use client";

import React, { Component, ReactNode } from "react";
import * as Sentry from "@sentry/nextjs";
import { WidgetErrorFallback } from "./WidgetErrorFallback";

interface Props {
  children: ReactNode;
  widgetId?: string;
  widgetType?: string;
  onReset?: () => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class WidgetErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("[WidgetErrorBoundary Caught Error]:", error, errorInfo);

    Sentry.withScope((scope) => {
      scope.setTag("boundary", "widget");
      if (this.props.widgetId) {
        scope.setTag("widget_id", this.props.widgetId);
      }
      if (this.props.widgetType) {
        scope.setTag("widget_type", this.props.widgetType);
      }
      scope.setContext("react", {
        componentStack: errorInfo.componentStack,
      });
      Sentry.captureException(error);
    });
  }

  public handleReset = () => {
    this.props.onReset?.();
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <WidgetErrorFallback
          error={this.state.error}
          onReset={this.handleReset}
        />
      );
    }

    return this.props.children;
  }
}
