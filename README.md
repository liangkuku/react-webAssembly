## How to create a React app with Rust and WebAssembly?
## 1.rust dependencies as follows
https://www.rust-lang.org/zh-CN/tools/install<br>
https://kaisery.github.io/trpl-zh-cn/ch01-01-installation.html#installation<br>
https://kaisery.github.io/trpl-zh-cn/ch01-03-hello-cargo.html<br>

rustup：管理 Rust 版本和相关工具的命令行工具（通过此工具安装rust），通过rustc --version确定是否安装成功
cargo：Rust 的构建系统和包管理器(同npm)

## 2.wasm-lib/src/lib.rs文件编写rust代码

## 3.cd wasm-lib 执行cargo test测试rust代码正确性

## 4. `npm run build:wasm`
将wasm-lib/src/lib.rs文件编译成WebAssembly格式到wasm-lib/pkg文件夹

## 5. 在src同级目录执行npm install ./wasm-lib/pkg，安装依赖，根目录的package.json文件dependencies会由对应的依赖

## 6. react页面通过import的形式使用即可（同npm包）
