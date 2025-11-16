# Navigation Menu Management - Quick Reference

## Quick Start (快速开始)

1. **Access CMS** (访问 CMS): `https://your-site.com/admin/`
2. **Open Navigation** (打开导航): Click "导航菜单" → "网站导航"
3. **Edit Items** (编辑项目): Add/Edit/Delete navigation items
4. **Save** (保存): Click "Save" to update

## Navigation Item Structure (导航项结构)

```yaml
- titles:
    en: "Item Name"        # English (required at least one)
    zh-Hans: "项目名称"    # Simplified Chinese (optional)
    ja: "アイテム名"       # Japanese (optional)
  url: "/path/"            # URL path (required)
```

## Common Use Cases (常见用例)

### Add Homepage Link (添加主页链接)
```yaml
- titles:
    en: Home
    zh-Hans: 主页
  url: /
```

### Add About Page (添加关于页面)
```yaml
- titles:
    en: About Us
    zh-Hans: 关于我们
  url: /about/
```

### Add External Link (添加外部链接)
```yaml
- titles:
    en: GitHub
  url: https://github.com/username
```

## Supported Languages (支持的语言)

- **English**: `en`, `en-GB`, `en-US`, `en-CA`, `en-AU`
- **Chinese**: `zh`, `zh-Hans`, `zh-CN`, `zh-SG`, `zh-Hant`, `zh-TW`, `zh-HK`
- **Korean**: `ko`, `ko-KR`
- **French**: `fr`, `fr-BE`, `fr-CA`, `fr-CH`, `fr-FR`, `fr-LU`
- **Turkish**: `tr`
- **Japanese**: `ja`

## Important Notes (重要说明)

⚠️ **At least ONE language title is required** (至少需要一个语言标题)
⚠️ **URL is required** (URL 必填)
⚠️ **Changes are saved to** `_data/navigation.yml`
⚠️ **YAML anchors will be expanded** after CMS save (YAML 锚点会被展开)

## File Location (文件位置)

- **CMS Config**: `admin/config.yml`
- **Navigation Data**: `_data/navigation.yml`
- **Full Documentation**: `docs/navigation-menu-management.md`

## Getting Help (获取帮助)

- Read full documentation: `docs/navigation-menu-management.md`
- Submit issues: https://github.com/Chiko-LIN/kibanpricing2/issues
