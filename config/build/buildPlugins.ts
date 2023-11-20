import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, { Configuration, DefinePlugin } from "webpack";
import { BuildOptions } from "./types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

export function buildPlugins(options: BuildOptions): Configuration["plugins"] {
    const isDev = options.mode === "development";
    const isProd = options.mode === "production";

    const plugins: Configuration["plugins"] = [
        new HtmlWebpackPlugin({ template: options.paths.html }),

        // Можем использовать переменные для отображения или десктопа или мобилки
        new DefinePlugin({
            __PLATFORM__: options.platform,
        }),
    ];

    if (isDev) {
        // Прогресс билда
        plugins.push(new webpack.ProgressPlugin()),
        //Проверка типов происходит после сборки отдельно
        plugins.push(new ForkTsCheckerWebpackPlugin()),
        plugins.push(new ReactRefreshWebpackPlugin())
    };

    if (isProd) {
        // Минификация css в отдельную папку
        plugins.push(new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
        }))
    };

    if (options.analyzer) {
        plugins.push(new BundleAnalyzerPlugin)
    }

    return plugins;
}
