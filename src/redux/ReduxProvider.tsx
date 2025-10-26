"use client";

import { Provider as ReactReduxProvider } from "react-redux";
import { store } from "../redux/store";

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
    return <ReactReduxProvider store={store}>{children}</ReactReduxProvider>;
};

export default ReduxProvider;
