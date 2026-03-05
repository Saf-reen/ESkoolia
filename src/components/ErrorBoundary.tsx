import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    private handleReset = () => {
        this.setState({ hasError: false, error: undefined });
        window.location.reload();
    };

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-center">
                    <div className="bg-white rounded-[32px] shadow-lg p-10 max-w-lg w-full border border-gray-100 flex flex-col items-center">
                        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
                            <AlertTriangle className="w-10 h-10 text-red-600" />
                        </div>

                        <h1 className="text-3xl font-display font-extrabold text-[#581C87] mb-4">
                            Something went wrong
                        </h1>

                        <p className="text-gray-600 mb-8 leading-relaxed">
                            We're sorry, but the application encountered an unexpected error. Our team has been notified.
                        </p>

                        <Button
                            onClick={this.handleReset}
                            className="bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-700 hover:to-orange-700 text-white rounded-full px-8 h-12 w-full font-bold shadow-md transition-all duration-300"
                        >
                            Refresh Application
                        </Button>

                        {process.env.NODE_ENV !== 'production' && this.state.error && (
                            <div className="mt-8 p-4 bg-gray-100 rounded-xl text-left w-full overflow-auto max-h-[200px]">
                                <p className="text-sm font-mono text-red-600 whitespace-pre-wrap">
                                    {this.state.error.toString()}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
