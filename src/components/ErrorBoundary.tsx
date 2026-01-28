"use client";

import type { ReactNode } from "react";
import React from "react";

type Props = { children: ReactNode };
type State = { hasError: boolean };

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    // 本番はSentry等に置き換え
    // eslint-disable-next-line no-console
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen grid place-items-center px-6">
          <div className="max-w-md w-full rounded-2xl bg-white/70 backdrop-blur border border-slate-200 shadow-sm p-6">
            <h1 className="text-lg font-semibold text-slate-900">
              ページの表示で問題が発生しました
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              お手数ですが、時間をおいて再読み込みしてください。
            </p>
            <button
              className="mt-4 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium bg-slate-900 text-white hover:opacity-90"
              onClick={() => window.location.reload()}
              type="button"
            >
              再読み込み
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
