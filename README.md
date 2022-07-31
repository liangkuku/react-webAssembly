## 1.rust环境需要的依赖如下，参考
https://www.rust-lang.org/zh-CN/tools/install
https://kaisery.github.io/trpl-zh-cn/ch01-01-installation.html#installation
https://kaisery.github.io/trpl-zh-cn/ch01-03-hello-cargo.html

rustup：管理 Rust 版本和相关工具的命令行工具（通过此工具安装rust），通过rustc --version确定是否安装成功
cargo：Rust 的构建系统和包管理器(同npm)

## 2.wasm-lib/src/lib.rs文件提供rust编写的代码

## 3.cd wasm-lib 执行cargo test测试rust代码正确型

## 4. `npm run build:wasm`
将wasm-lib/src/lib.rs文件编译成WebAssembly格式到wasm-lib/pkg文件夹

## 5. 在src同级目录执行npm install ./wasm-lib/pkg，安装依赖，根目录的package.json文件dependencies会由对应的依赖

## 6. react页面通过import的形式使用即可（同npm包）


# ---------------------------------------------------------------------------------------------------------------------------------------


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
