# 打包模组

本文档介绍如何将自定义模型和模组dll打包成游戏模组，使其能够通过游戏的模组管理器加载。

## 配置 info.ini

在模组根目录创建 `info.ini` 文件，配置模组的信息：

```ini
name = DuckovCustomModelRegister
displayName = Duckov Custom Model Template Model
description = A template mod for adding custom models to Duckov Custom Model.
```

### 字段说明

| 字段          | 说明                             | 示例                   |
| ------------- | -------------------------------- | ---------------------- |
| `Name`        | 模组名称，需要和模组命名空间对应 | `jiuhu`                |
| `displayName` | 模组显示名称                     | `酒狐`                 |
| `description` | 模组描述                         | `把玩家模型替换为酒狐` |

## 准备文件

1. 创建模组包文件夹（如 `MyModelMod_v1.0`）
2. 将以下文件复制到该文件夹：
   - 编译好的 `mod.dll`
   - `info.ini`
   - `preview.png`（模组预览图）
   - 所有模型包文件夹

## 最终结构

```
MyModelMod/                      	 # 模组包根目录
└── Models/                 		 # 模型包文件夹
│	└── CharacterPack/				 # 模型包（可以随意取名）
│   │	├── bundleinfo.json          # 模型包配置文件（必需）
│   │	├── modelbundle.assetbundle  # Unity AssetBundle 文件（必需）
│   │	├── thumbnail.png            # 模型缩略图（建议）
│   │	└── sounds/                  # 音频文件夹（可选）
│   │    	└── voice.ogg
├── mod.dll                      	 # 模组 DLL（必需）
├── info.ini                     	 # 模组信息配置（必需）
└── preview.png                  	 # 模组预览图（必需）
```

## 发布模组

在游戏进入主界面后，在Mods列表可以上传自己的Mod

![image-20251115044711551](/images/image-20251115044711551.png)

![image-20251115044729813](/images/image-20251115044729813.png)



## 相关资源

- [模型包结构](./bundle-structure.md)
- [bundleinfo.json 配置](./bundle-structure.md#bundleinfo-json-格式)