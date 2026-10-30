# ai-manager-sandbox

[AI Manager](../ai-manager) 的**低风险测试仓库**：验证「派发任务 → 执行器改代码 → 推 `worker/*` 分支 → 开 PR → CI」的完整闭环。

- 没有业务逻辑，内容可以随便改。
- CI 里有两个 job：`build`、`test`，它们就是 Manager `config/manager.yaml` 里 `required_checks` 的真实取值。
- 不做自动合并、不部署。

## 本地跑

```bash
npm run build
npm test
```
