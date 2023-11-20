import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types";

export function buildDevserver(options: BuildOptions):DevServerConfiguration {
    return {
        port: options.port ?? 5000,
        open: true,
        // Только для дев сервера
        historyApiFallback: true,
        hot: true,
    }
}