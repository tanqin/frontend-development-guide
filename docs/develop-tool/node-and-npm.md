# Node 和 NPM

## 它是什么？

Node 是一个 JavaScript 运行时环境。

NPM 是一个 Node 包管理器。

## 为什么需要它？

作为前端开发人员，如果你想进行服务端开发，使用 Node 的学习成本是比较低的。当然，作为前端开发人员，我们通常把它作为一个项目构建工具，比如 Vue 脚手架、React 脚手架都需要基于 Node 来运行。

NPM 可以为我们提供依赖管理、脚本运行和程序打包等功能，且 NPM 上托管着大量的第三方包和插件，方便我们进行项目快速开发。

## 如何使用它？

由于在上一章我们已经安装了 NVM，并且使用 NVM 安装了 Node 和 NPM，如果你启动 cmd 并且执行 `node -v` 和 `npm -v` 均能输出对应版本号，那么就说明安装成功了。

## NPM 全局包

推荐使用 `npm i -g xxx` 命令安装以下全局包：

[@vue/cli](https://cli.vuejs.org/zh/)：Vue 项目开发的脚手架工具。在 Vue3 项目中，我们已经不再需要它，但是如果要构建一个 Vue2 项目，我们依然选用它。

[nrm](https://www.npmjs.com/package/nrm)：NPM 镜像源管理工具，允许你在 NPM 镜像源间快速切换。

[pnpm](https://pnpm.io/zh/installation)：相比于 NPM，PNPM 是速度更快且更节省磁盘空间的包管理器。
