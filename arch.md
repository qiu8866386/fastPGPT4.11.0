# FastGPT 4.11.0 架构文档

## 项目结构

### 根目录
- `.dockerignore`: Docker 忽略文件
- `.eslintignore`, `.eslintrc.json`: ESLint 配置
- `.gitignore`: Git 忽略文件
- `.imgbotconfig`: ImgBot 配置
- `.npmrc`: npm 配置
- `.prettierignore`, `.prettierrc.js`: Prettier 配置
- `dev.md`: 开发文档
- `env.d.ts`: 环境类型定义
- `LICENSE`: 许可证
- `Makefile`: Make 脚本
- `package.json`: 项目依赖配置
- `pnpm-workspace.yaml`: pnpm 工作区配置
- `README_*.md`: 多语言 README
- `SECURITY.md`: 安全策略
- `tsconfig.json`: TypeScript 配置
- `vitest.config.mts`: Vitest 配置
- `zhlint`: 中文 lint 工具

### 核心目录
- `.cursor/`: Cursor 编辑器配置
- `.husky/`: Git hooks
- `deploy/`: 部署相关
- `docSite/`: 文档站点
- `packages/`: 核心模块
  - `global/`: 全局模块
  - `service/`: 服务模块
  - `templates/`: 模板模块
  - `web/`: Web 模块
- `plugins/`: 插件
  - `model/`: 模型插件
  - `webcrawler/`: 网络爬虫插件
- `projects/`: 项目
  - `app/`: 应用项目
  - `mcp_server/`: MCP 服务器项目
  - `sandbox/`: 沙盒项目

## 技术栈
- **语言**: TypeScript
- **构建工具**: pnpm, Vitest
- **代码规范**: ESLint, Prettier
- **测试框架**: Vitest
- **部署**: Docker

## 模块依赖关系
- `web` 模块依赖 `service` 和 `global` 模块
- `service` 模块依赖 `model` 插件
- `app` 项目依赖 `web` 模块和 `webcrawler` 插件

## 后续建议
- 完善各模块的详细文档
- 增加模块间的接口定义
