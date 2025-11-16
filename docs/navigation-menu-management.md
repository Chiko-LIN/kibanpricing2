# 导航菜单管理功能使用说明 (Navigation Menu Management Guide)

## 简介 (Introduction)

本CMS系统现已支持通过后台管理界面对网站导航菜单进行增删改查操作。

The CMS system now supports Create, Read, Update, and Delete (CRUD) operations for the website navigation menu through the admin interface.

## 功能特性 (Features)

- ✅ 可视化添加、编辑、删除导航项
- ✅ 支持多语言导航标题（英语、中文、日语、韩语、法语、土耳其语等）
- ✅ 自定义导航链接地址
- ✅ 直接编辑 `_data/navigation.yml` 文件
- ✅ 实时保存修改

## 使用方法 (How to Use)

### 1. 访问管理后台 (Access Admin Panel)

访问网站的管理后台页面：`https://your-site.com/admin/`

Access your site's admin panel at: `https://your-site.com/admin/`

### 2. 打开导航菜单管理 (Open Navigation Menu Management)

在左侧菜单中，点击 **"导航菜单"** (Navigation Menu)

In the left sidebar, click on **"导航菜单"** (Navigation Menu)

### 3. 编辑网站导航 (Edit Website Navigation)

点击 **"网站导航"** (Website Navigation) 进入编辑页面

Click on **"网站导航"** (Website Navigation) to enter the editing page

### 4. 管理导航项 (Manage Navigation Items)

#### 添加新导航项 (Add New Navigation Item)

1. 点击 **"添加导航项列表"** 按钮
2. 填写多语言标题（至少填写一种语言）
3. 填写链接地址（例如：`/`, `/about/`, `/pricing/`）
4. 点击保存

#### 编辑现有导航项 (Edit Existing Navigation Item)

1. 在列表中找到要编辑的导航项
2. 修改标题或链接地址
3. 点击保存

#### 删除导航项 (Delete Navigation Item)

1. 在列表中找到要删除的导航项
2. 点击删除按钮
3. 确认删除

#### 调整导航项顺序 (Reorder Navigation Items)

通过拖拽导航项可以调整它们在导航栏中的显示顺序

Drag and drop navigation items to reorder them in the navigation bar

### 5. 保存更改 (Save Changes)

完成编辑后，点击页面顶部的 **"保存"** 按钮

After editing, click the **"Save"** button at the top of the page

## 多语言支持 (Multi-language Support)

系统支持以下语言的导航标题：

The system supports navigation titles in the following languages:

- 英语 (English): en, en-GB, en-US, en-CA, en-AU
- 简体中文 (Simplified Chinese): zh-Hans, zh, zh-CN, zh-SG
- 繁体中文 (Traditional Chinese): zh-Hant, zh-TW, zh-HK
- 韩语 (Korean): ko, ko-KR
- 法语 (French): fr, fr-BE, fr-CA, fr-CH, fr-FR, fr-LU
- 土耳其语 (Turkish): tr
- 日语 (Japanese): ja

**提示**: 每个导航项至少需要填写一种语言的标题，其他语言可选。

**Tip**: Each navigation item requires at least one language title to be filled in, others are optional.

## 链接地址格式 (URL Format)

链接地址示例 (URL examples):

- 主页: `/`
- 关于页: `/about/`
- 定价页: `/pricing/`
- 博客: `/blog/`
- 外部链接: `https://example.com`

## 注意事项 (Notes)

1. 修改导航菜单后，更改会自动保存到 `_data/navigation.yml` 文件
2. 如果使用 Git 进行版本控制，记得提交更改
3. 删除导航项是不可恢复的操作，请谨慎操作
4. 建议在做重大更改前备份 `_data/navigation.yml` 文件
5. **重要**: Netlify CMS 不支持 YAML 锚点和引用 (anchors & aliases)。如果您的导航项使用了 `&EN` 和 `*EN` 这样的 YAML 锚点，在通过 CMS 保存后，这些锚点会被展开为实际值。如需保持锚点结构，请直接编辑 `_data/navigation.yml` 文件。

### YAML 锚点说明 (YAML Anchors Explanation)

原有的 navigation.yml 文件可能包含如下结构：

```yaml
titles:
  en: &EN Archive
  en-GB: *EN  # 引用上面的 Archive
  en-US: *EN  # 引用上面的 Archive
```

通过 CMS 编辑后会变为：

```yaml
titles:
  en: Archive
  en-GB: Archive
  en-US: Archive
```

两种格式功能完全相同，只是锚点版本更简洁。如果您不需要保持锚点结构，可以放心使用 CMS 编辑。

## 技术细节 (Technical Details)

- 配置文件: `admin/config.yml`
- 数据文件: `_data/navigation.yml`
- CMS 系统: Netlify CMS 2.x
- 数据格式: YAML

## 故障排除 (Troubleshooting)

### 保存失败

如果保存失败，请检查：
1. 是否已正确配置 Git Gateway
2. 是否有权限修改仓库
3. 链接地址格式是否正确

### 导航未显示

如果导航未在网站上显示：
1. 清除浏览器缓存
2. 检查 `_data/navigation.yml` 文件是否正确更新
3. 重新构建网站

## 支持 (Support)

如有问题，请访问项目仓库提交 Issue: 
https://github.com/Chiko-LIN/kibanpricing2/issues

## 示例 (Examples)

### 简单导航项 (Simple Navigation Item)

适合只有一种语言的导航项：

```yaml
- titles:
    en: Home
  url: /
```

### 多语言导航项 (Multi-language Navigation Item)

适合需要多语言支持的导航项：

```yaml
- titles:
    en: About
    zh-Hans: 关于
    zh-Hant: 關於
    ja: について
  url: /about/
```

### 外部链接 (External Link)

链接到外部网站：

```yaml
- titles:
    en: GitHub
  url: https://github.com/Chiko-LIN
```
