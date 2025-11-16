# 评论系统配置和管理指南

## 🎯 概述

您的网站现在已配置 Valine 评论系统。Valine 是一个基于 LeanCloud 的快速、简洁且高效的无后端评论系统。

## 📋 配置步骤

### 1. 注册 LeanCloud 账号

访问 [LeanCloud 国际版](https://console.leancloud.app/) 或 [LeanCloud 中国版](https://console.leancloud.cn/) 注册账号。

**推荐使用国际版**，因为：
- 不需要域名备案
- 访问速度更稳定
- 配置更简单

### 2. 创建应用

1. 登录后点击"创建应用"
2. 输入应用名称（例如：kibanpricing-comments）
3. 选择"开发版"（免费）
4. 点击创建

### 3. 获取 App ID 和 App Key

1. 进入刚创建的应用
2. 点击左侧菜单"设置" → "应用凭证"
3. 复制 **App ID** 和 **App Key**

### 4. 配置到网站

#### 方法一：通过 CMS 配置（推荐）

1. 访问您的网站管理后台：`https://kibanpricing2.netlify.app/admin/`
2. 登录后进入"网站设置" → "评论系统配置"
3. 填入您的 App ID 和 App Key
4. 保存并发布

#### 方法二：直接修改配置文件

编辑 `_config.yml` 文件：

```yaml
comments:
  provider: valine
  valine:
    app_id: "你的-App-ID"      # 替换为实际的 App ID
    app_key: "你的-App-Key"    # 替换为实际的 App Key
    placeholder: 欢迎留言咨询签名设计服务...
    visitor: true
    meta: [nick, mail]
```

### 5. 启用文章评论

在文章的 YAML 头部添加 `key` 字段（必需）：

```yaml
---
title: 您的文章标题
key: article-unique-key  # 每篇文章使用唯一的 key
comment: true            # 启用评论（可选，默认为 true）
---
```

**重要提示**：
- `key` 字段是必需的，用于标识评论所属的文章
- 每篇文章的 `key` 必须唯一
- 推荐格式：`article-YYYY-MM-DD-slug` 或 `post-序号`

## 💬 管理评论

### 在 LeanCloud 控制台管理

1. 登录 [LeanCloud 控制台](https://console.leancloud.app)
2. 选择您的应用
3. 进入"数据存储" → "结构化数据" → "Comment" 表

### 评论数据结构

| 字段 | 说明 |
|-----|------|
| `nick` | 评论者昵称 |
| `mail` | 评论者邮箱 |
| `link` | 评论者网站（可选）|
| `comment` | 评论内容 |
| `url` | 评论所在页面 URL |
| `insertedAt` | 评论时间 |
| `ip` | 评论者 IP |
| `ua` | 浏览器信息 |

### 常见操作

#### 查看所有评论
- 在 Comment 表中可以看到所有评论列表
- 可以按时间、文章 URL 等筛选

#### 删除评论
1. 勾选要删除的评论
2. 点击"删除"按钮
3. 确认删除

#### 导出评论数据
1. 在 Comment 表页面
2. 点击"导出数据"
3. 选择导出格式（JSON 或 CSV）
4. 下载备份文件

#### 批量删除垃圾评论
1. 使用筛选功能找到垃圾评论
2. 全选或多选
3. 批量删除

### 评论审核

Valine 默认不需要审核，评论会立即显示。如果需要审核功能：

1. 在 LeanCloud 中创建云函数
2. 配置邮件通知
3. 手动审核后发布

详细配置请参考：[Valine 官方文档](https://valine.js.org/configuration.html)

## 🔔 邮件通知配置（可选）

### 为什么需要邮件通知？

- 当有新评论时，您会立即收到邮件通知
- 可以及时回复客户咨询
- 提升用户体验

### 配置步骤

1. 在 LeanCloud 控制台进入"云引擎" → "云函数"
2. 参考 [Valine-Admin](https://github.com/DesertsP/Valine-Admin) 配置
3. 设置邮件服务器（推荐使用 SMTP）

## 📊 查看评论统计

### 评论数量统计

在 LeanCloud 控制台：
- "数据存储" → "Comment" → 查看总数
- 可以按日期范围筛选
- 可以按文章 URL 分组统计

### 访客统计

如果启用了 `visitor: true`，还会记录页面浏览量：
- 在 "Counter" 表中查看
- 可以看到每个页面的访问次数

## 🛡️ 安全设置

### Web 安全域名

1. 在 LeanCloud 控制台进入"设置" → "安全中心"
2. 在"Web 安全域名"中添加：
   ```
   https://kibanpricing2.netlify.app
   ```
3. 保存设置

这可以防止其他网站盗用您的 App ID 和 App Key。

### 防止垃圾评论

1. **启用验证码**（需要额外配置）
2. **设置评论频率限制**
3. **使用反垃圾服务**（Akismet）

## 🎨 自定义评论样式

### 修改占位符文本

在 `_config.yml` 中：

```yaml
valine:
  placeholder: 您想说什么...  # 自定义提示文字
```

### 修改必填字段

```yaml
valine:
  meta: [nick]              # 只需要昵称
  # 或
  meta: [nick, mail, link]  # 需要昵称、邮箱、网站
```

## 📱 通过 CMS 管理文章评论设置

在 Netlify CMS 中创建或编辑文章时：

1. **文章 Key**：设置唯一标识（必需）
2. **启用评论**：勾选即可在该文章显示评论框
3. **启用分享**：勾选即可显示分享按钮

## 🔧 故障排除

### 评论框不显示

**检查清单**：
1. ✅ 是否在 `_config.yml` 中配置了 App ID 和 App Key？
2. ✅ 文章是否设置了 `key` 字段？
3. ✅ 是否在 LeanCloud 中添加了 Web 安全域名？
4. ✅ App ID 和 App Key 是否正确？

### 评论提交失败

**可能原因**：
1. Web 安全域名未配置
2. LeanCloud 应用已暂停（开发版有限制）
3. 网络问题

**解决方法**：
1. 检查 LeanCloud 安全设置
2. 查看浏览器控制台错误信息
3. 检查 LeanCloud 应用状态

### 数据丢失风险

**最佳实践**：
1. 定期导出评论数据
2. 保存在本地或其他云存储
3. 考虑升级到 LeanCloud 付费版

## 📞 获取帮助

### 官方资源

- [Valine 官方文档](https://valine.js.org/)
- [LeanCloud 文档](https://docs.leancloud.app/)
- [Valine GitHub](https://github.com/xCss/Valine)

### 常见问题

访问 [Valine FAQ](https://valine.js.org/faq.html) 查看常见问题解答。

## 🎉 成功配置后

配置完成后，您的网站将拥有：

✅ **实时评论功能**
- 访客可以即时留言
- 不需要注册登录
- 支持 Markdown 和表情

✅ **评论管理**
- 在 LeanCloud 控制台管理
- 可以删除、编辑评论
- 导出备份数据

✅ **访客统计**
- 查看文章浏览量
- 了解热门内容
- 优化网站内容

✅ **通过 CMS 管理**
- 在 Netlify CMS 中配置评论系统
- 控制每篇文章是否显示评论
- 集中管理所有设置

---

**祝您的签名设计网站评论功能运行顺利！** 💬✨

如有任何问题，欢迎随时咨询。
