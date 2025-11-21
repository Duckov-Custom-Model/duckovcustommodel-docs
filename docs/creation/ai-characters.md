# AI 角色适配

模组支持为游戏中的 AI 角色配置自定义模型，可以为不同的 AI 角色配置不同的模型。

## 配置 AI 角色模型

#### 在 bundleinfo.json 中配置

在模型的 `bundleinfo.json` 中，需要：

1. 在 `Target` 数组中包含 `"AICharacter"`，表示该模型适用于 AI 角色
2. 在 `SupportedAICharacters` 数组中指定支持的 AI 角色名称键

示例：

```json [json]
{
  "ModelID": "ai_model_id",
  "Name": "AI 模型",
  "Target": ["AICharacter"],
  "SupportedAICharacters": ["Cname_Wolf", "Cname_Scav", "*"]
}
```

- 如果 `SupportedAICharacters` 包含 `"*"`，表示该模型适用于所有 AI 角色
- 如果 `SupportedAICharacters` 包含具体的 AI 角色名称键，表示该模型仅适用于这些 AI 角色
- 如果 `SupportedAICharacters` 为空数组，则该模型不会应用于任何 AI 角色

#### 在 UsingModel.json 中配置

在 `UsingModel.json` 中，可以为每个 AI 角色单独配置模型：

```json [json]
{
  "AICharacterModelIDs": {
    "Cname_Wolf": "wolf_model_id",
    "Cname_Scav": "scav_model_id",
    "*": "default_ai_model_id"
  }
}
```

配置优先级：

1. 首先检查该 AI 角色是否有单独配置的模型
2. 如果没有，则检查 `"*"` 对应的默认模型
3. 如果都没有，则使用原始模型

#### 查找 AI 角色名称键

AI 单位目标的 key（如 `"Cname_Wolf"`、`"Cname_Scav"`）可以从游戏本地化文件中查找：

- 文件位置：`游戏安装目录/Duckov_Data/StreamingAssets/Localization` 目录下的 CSV 文件
- 查找方法：打开任意语言的 CSV 文件（如 `ChineseSimplified.csv`），找到 `Characters` 这个 sheet（工作表），其中的 key 列就是 AI 角色名称键
- 这些 key 可以用于 `SupportedAICharacters` 数组和 `AICharacterModelIDs` 字典中

##### AI的Key和Value

| key                     | value        |
| ----------------------- | ------------ |
| Character_Jeff          | 杰夫         |
| Character_Orange        | 橘子         |
| Character_Xavier        | 老吴         |
| Character_Bob           | 鲍勃         |
| Character_Mud           | 泥巴         |
| Character_Heart7        | 红7          |
| Character_DemoTrophy    | 纪念奖杯     |
| Cname_Wolf              | 狼           |
| Cname_ShortEagle        | 矮鸭         |
| Cname_UltraMan          | 光之男       |
| Cname_CrazyRob          | 失控机械蜘蛛 |
| Cname_Scav              | 拾荒者       |
| Cname_Usec              | 雇佣兵       |
| Cname_RobSpider         | 机械蜘蛛     |
| Cname_ScavRage          | 暴走拾荒者   |
| Cname_Boss_Sniper       | 劳登         |
| Cname_SpeedyChild       | 急速团成员   |
| Cname_Speedy            | 急速团长     |
| Cname_Merchant_Myst     | 神秘商人     |
| Cname_Prison            | 狱卒         |
| Cname_Boss_Shot         | 喷子         |
| Cname_ServerGuardian    | 矿长         |
| Cname_Raider            | 游荡者       |
| Cname_LabTestObjective  | 测试对象     |
| Cname_StormCreature     | 风暴生物     |
| Cname_XING              | 大兴兴       |
| Cname_XINGS             | 小小兴       |
| Cname_DengWolf          | 劳登的狗     |
| Cname_Mushroom          | 行走菇       |
| Cname_Vida              | 维达         |
| Cname_Roadblock         | 路障         |
| Cname_StormBoss1        | 噗咙噗咙     |
| Cname_StormBoss2        | 咕噜咕噜     |
| Cname_StormBoss3        | 啪啦啪啦     |
| Cname_StormBoss4        | 比利比利     |
| Cname_StormBoss5        | 口口口口     |
| Cname_Boss_Fly          | 蝇蝇队长     |
| Cname_Boss_Fly_Child    | 蝇蝇队员     |
| Cname_Boss_Arcade       | 暴走街机     |
| Cname_BALeader          | BA队长       |
| Cname_BALeader_Child    | 普通BA       |
| Cname_SenorEngineer     | 高级工程师   |
| Cname_Boss_3Shot        | 三枪哥       |
| Cname_3Shot_Child       | 三枪弟       |
| Cname_Grenade           | 炸弹狂人     |
| Cname_SchoolBully       | 校霸         |
| Cname_SchoolBully_Child | 校友         |
| Cname_RPG               | 迷塞尔       |
| Cname_Drone             | 侦察机       |
| Cname_StormVirus        | 风暴？       |
| Cname_MonsterClimb      | 风暴虫       |
| Character_Ming          | 小明         |
| Cname_Boss_Red          | \?\?\?       |
| Cname_Football_1        | 足球队长     |
| Cname_Football_2        | 足球队员     |
| Cname_Prison_Boss       | 典狱长       |
| Cname_StormBoss1_Child  | 噗咙         |
| Cname_Ghost             | 幽灵         |

## 使用模型选择界面

1. 打开模型选择界面（默认按键：`\`）
2. 在目标类型下拉菜单中选择"AI角色"
3. 选择要配置的 AI 角色（或选择"所有 AI 角色"来设置默认配置项）
4. 浏览并选择要应用的模型
5. 配置会自动保存到 `UsingModel.json`

## 隐藏 AI 角色装备

可以为每个 AI 角色单独配置是否隐藏原有装备：

- 在模型选择界面中，选择"AI角色"目标类型
- 选择具体的 AI 角色（或选择"所有 AI 角色"来设置默认值）
- 在目标设置区域会显示针对该 AI 角色的"隐藏装备"切换选项
- 每个 AI 角色都有独立的隐藏装备设置，也可以为"所有 AI 角色"设置默认值
- **配置选择逻辑**：音频、装备隐藏等设置会根据实际使用的模型来选择配置
  - 如果 AI 角色使用的是自己的模型配置（在 `UsingModel.json` 中为该 AI 角色单独配置了模型），则使用该 AI 角色的设置
  - 如果 AI 角色使用的是回退模型（`*`，即"所有 AI 角色"的默认模型），则使用`*`的设置
- 配置会自动保存到 `HideEquipmentConfig.json`

## 注意事项

- AI 角色模型需要满足与角色模型相同的要求（定位锚点、Animator 配置等）
- 模型必须在其 `bundleinfo.json` 中明确声明支持 AI 角色（`Target` 包含 `"AICharacter"`）
- 模型必须在其 `SupportedAICharacters` 中声明支持该 AI 角色，或包含 `"*"` 表示支持所有 AI 角色
- 如果模型没有正确配置，AI 角色将使用原始模型