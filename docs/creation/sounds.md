# 添加自定义音效

本文档介绍如何给模型配置自定义音效，以及如何触发自定义音效。

## 音效配置

在 `bundleinfo.json` 的 `ModelInfo` 中可以配置音效：

```json [json]
{
  "ModelID": "unique_model_id",
  "Name": "模型显示名称",
  "CustomSounds": [
    {
      "Path": "sounds/normal1.wav",
      "Tags": ["normal"]
    },
    {
      "Path": "sounds/normal2.wav",
      "Tags": ["normal"]
    },
    {
      "Path": "sounds/surprise.wav",
      "Tags": ["surprise", "normal"]
    },
    {
      "Path": "sounds/得吃的小曲.ogg",
      "Tags": ["search_found_item_quality_red"]
    }
  ]
}
```

### SoundInfo 字段说明

- `Path`（必需）：音效文件路径，相对于模型包文件夹

- `Tags`（可选）：音效标签数组，用于指定音效的使用场景
  - `"normal"`：普通音效，用于玩家按键触发和 AI 普通状态
  - `"surprise"`：警戒音效，用于 AI 警戒状态（发现玩家）
  - `"death"`：死亡音效，用于 AI 死亡状态 <Badge type="danger" text="v1.8.5 已删除" />
  - `"idle"`：待机音效，用于角色自动播放（可通过配置控制哪些角色类型允许自动播放）
  - `"trigger_on_hurt"`：受伤触发音效，用于角色受到伤害时自动播放（如果已有受伤音效正在播放则跳过）
    - `"trigger_on_death"`：死亡触发音效，用于角色死亡时自动播放（会打断所有正在播放的音效）
    - `"trigger_on_hit_target"`：命中目标触发音效，用于角色命中目标时自动播放（如果已有命中音效正在播放则跳过）
    - `"trigger_on_kill_target"`：击杀目标触发音效，用于角色击杀目标时自动播放（如果已有击杀音效正在播放则跳过）
    - `"trigger_on_crit_hurt"`：暴击受伤触发音效，用于角色受到暴击伤害时自动播放（如果已有受伤音效正在播放则跳过）
    - `"trigger_on_crit_dead"`：暴击死亡触发音效，用于角色暴击死亡时自动播放（会打断所有正在播放的音效）
    - `"trigger_on_crit_hit_target"`：暴击命中目标触发音效，用于角色暴击命中目标时自动播放（如果已有命中音效正在播放则跳过）
    - `"trigger_on_crit_kill_target"`：暴击击杀目标触发音效，用于角色暴击击杀目标时自动播放（如果已有击杀音效正在播放则跳过）
  - `"search_found_item_quality_none"`： 搜索到品质为none的物品时自动播放音效
  - `"search_found_item_quality_white"`： 搜索到品质为white的物品时自动播放音效
  - `"search_found_item_quality_green"`： 搜索到品质为green的物品时自动播放音效
  - `"search_found_item_quality_blue"`： 搜索到品质为blue的物品时自动播放音效
  - `"search_found_item_quality_purple"`： 搜索到品质为purple的物品时自动播放音效
  - `"search_found_item_quality_orange"`： 搜索到品质为orange的物品时自动播放音效
  - `"search_found_item_quality_red"`： 搜索到品质为red的物品时自动播放音效
  - `"search_found_item_quality_q7"`： 搜索到品质为q7的物品时自动播放音效
  - `"search_found_item_quality_q8"`： 搜索到品质为q8的物品时自动播放音效
  - `"footstep_organic_walk_light"`、`"footstep_organic_walk_heavy"`、`"footstep_organic_run_light"`、`"footstep_organic_run_heavy"`：有机材质脚步声（轻/重步行、轻/重跑步）<Badge type="success" text="new" />
  - `"footstep_mech_walk_light"`、`"footstep_mech_walk_heavy"`、`"footstep_mech_run_light"`、`"footstep_mech_run_heavy"`：机械材质脚步声（轻/重步行、轻/重跑步）<Badge type="success" text="new" />
  - `"footstep_danger_walk_light"`、`"footstep_danger_walk_heavy"`、`"footstep_danger_run_light"`、`"footstep_danger_run_heavy"`：危险材质脚步声（轻/重步行、轻/重跑步）<Badge type="success" text="new" />
  - `"footstep_nosound_walk_light"`、`"footstep_nosound_walk_heavy"`、`"footstep_nosound_run_light"`、`"footstep_nosound_run_heavy"`：无声材质脚步声（轻/重步行、轻/重跑步）<Badge type="success" text="new" />
  - 可以同时包含多个标签，表示该音效可用于多个场景
  - 未指定标签时，默认为 `["normal"]`
  
  ::: warning 版本变更
  
  `death` 参数已在 `v1.8.5` 版本中移除，现在统一使用`trigger_on_death`参数来播放角色死亡音效。如需了解更多变更信息，请查看[更新日志](https://github.com/BAKAOLC/DuckovCustomModel/blob/master/CHANGELOG.md)。
  
  :::

## 音效触发方式

自定义音效有五种触发方式，玩家按键触发，AI自动触发，脚步声触发，搜索发现触发和动画状态机触发。

#### 玩家按键触发

- 当角色模型配置了音效时，玩家按下游戏中的 `Quack` 键（F1）会触发音效
- 只会播放标签为 `"normal"` 的音效
- 从所有 `"normal"` 标签的音效中随机选择一个播放
- 只有玩家角色会响应按键，宠物不会触发
- 播放音效时会同时创建 AI 声音，使其他 AI 能够听到玩家发出的声音
- **音效打断机制**：玩家按键触发的音效与 AI 自动触发的音效（`"normal"` 和 `"surprise"` 标签）共享同一打断组，新播放的音效会打断同组内正在播放的音效

#### AI 自动触发

- AI 会根据游戏状态自动触发相应标签的音效
- `"normal"`：AI 普通状态时触发
- `"surprise"`：AI 惊讶状态时触发
- **音效打断机制**：AI 自动触发的音效（`"normal"` 和 `"surprise"` 标签）与玩家按键触发的音效共享同一打断组，新播放的音效会打断同组内正在播放的音效
- `"trigger_on_hurt"`：角色受到伤害时自动播放（适用于所有角色类型）
  - **音效打断机制**：如果已有受伤音效正在播放，则跳过新的受伤音效播放，避免重复播放
- `"trigger_on_hit_target"`：角色命中目标时自动播放（适用于所有角色类型）
  - **音效打断机制**：如果已有命中音效正在播放，则跳过新的命中音效播放，避免重复播放
- `"trigger_on_kill_target"`：角色击杀目标时自动播放（适用于所有角色类型）
  - **音效打断机制**：如果已有击杀音效正在播放，则跳过新的击杀音效播放，避免重复播放
- `"trigger_on_crit_hurt"`：角色受到暴击伤害时自动播放（适用于所有角色类型）
  - **音效打断机制**：如果已有受伤音效正在播放，则跳过新的受伤音效播放，避免重复播放
- `"trigger_on_crit_dead"`：角色暴击死亡时自动播放（适用于所有角色类型）
  - **音效打断机制**：播放死亡音效前会先停止所有正在播放的音效，然后播放死亡音效
- `"trigger_on_crit_hit_target"`：角色暴击命中目标时自动播放（适用于所有角色类型）
  - **音效打断机制**：如果已有命中音效正在播放，则跳过新的命中音效播放，避免重复播放
- `"trigger_on_crit_kill_target"`：角色暴击击杀目标时自动播放（适用于所有角色类型）
  - **音效打断机制**：如果已有击杀音效正在播放，则跳过新的击杀音效播放，避免重复播放
- `"idle"`：启用了自动播放的角色会在随机间隔时间自动播放待机音效
  - 播放间隔可在 `IdleAudioConfig.json` 中配置
  - 默认间隔为 30-45 秒（随机）
  - 角色死亡时不会播放
  - 哪些角色类型允许自动播放可通过 `EnableIdleAudio` 和 `AICharacterEnableIdleAudio` 配置控制
  - 默认情况下，AI 角色和宠物允许自动播放，玩家角色不允许（可通过配置启用）
- `"trigger_on_death"`：角色死亡时自动播放（适用于所有角色类型）
  - **音效打断机制**：播放死亡音效前会先停止所有正在播放的音效，然后播放死亡音效
- 如果指定标签的音效不存在，将使用原版事件（不会回退到其他标签）

#### 脚步声触发

- 角色移动时会根据地面材质和移动状态自动触发相应的脚步声
- 支持四种地面材质：有机（organic）、机械（mech）、危险（danger）、无声（no sound）
- 支持四种移动状态：轻步行（walkLight）、重步行（walkHeavy）、轻跑步（runLight）、重跑步（runHeavy）
- 系统会根据角色的 `footStepMaterialType` 和 `FootStepTypes` 自动选择对应的音效标签
- **音效打断机制**：脚步声拥有独立的打断组，新播放的脚步声会打断同组内正在播放的脚步声
- 如果模型未配置对应材质和状态的脚步声，将使用原版脚步声

#### 搜索发现触发

- 玩家完成物品搜索或检查后（UI 展示品质信息的那一刻）会触发对应品质的音效
- 使用 `search_found_item_quality_xxx` 标签，`xxx` 与 `Tags` 描述相同：`none`、`white`、`green`、`blue`、`purple`、`orange`、`red`、`q7`、`q8`
- 若模型未配置对应品质的音效，则不会播放，保持与原版一致

#### 动画状态机触发

- 可以在动画状态机中使用 `ModelSoundTrigger` 组件在状态进入时触发音效
  - 支持配置多个音效标签，可选择随机或顺序播放
  - 支持配置音效播放模式，提供更精细的音效控制
  - 音效标签可以是任意自定义标签，不再限制于预定义标签
- 可以在动画状态机中使用 `ModelSoundStopTrigger` 组件停止音效播放
  - 支持停止指定事件名称的音效（自定义触发器或内置事件名称如 `idle`）
  - 支持停止所有正在播放的音效
  - 支持在状态进入或退出时触发停止操作
  - 在 Unity 编辑器中提供友好的配置界面，包含条件显示和警告提示

### 音效文件要求

- 音效文件应放置在[模型包文件夹](./create-mod.md#模组包结构)内
- 支持游戏使用的音频格式（通常为 WAV、OGG 等）
- 音效文件路径在 `Path` 中指定，相对于模型包文件夹
- 例如：如果模型包文件夹为 `MyModel/`，音效文件为 `MyModel/sounds/voice.wav`，则 `Path` 应设置为 `"sounds/voice.wav"`

### 音效播放概率配置

在 `bundleinfo.json` 的 `ModelInfo` 中可以配置音效标签的播放概率：

```json [json]
{
  "ModelID": "unique_model_id",
  "Name": "模型显示名称",
  "SoundTagPlayChance": {
    "trigger_on_hurt": 50.0,
    "trigger_on_hit_target": 30.0
  }
}
```

- `SoundTagPlayChance`（可选）：字典类型，键为音效标签（不区分大小写），值为播放概率（0-100）
  - 概率值会被自动转换为 0-1 之间的浮点数（除以 100）
  - 当触发该标签的音效时，会根据配置的概率决定是否播放
  - 如果未配置，则始终播放（默认行为）
  - 如果概率为 0，则始终不播放
  - 如果概率小于 100，则有一定几率不播放该音效

### 注意事项

- 如果模型没有配置音效，不会影响其他功能
- 音效标签不再限制于预定义标签，可以使用任意自定义标签(使用**DCM SDK**)
- 自定义标签可以通过 `ModelSoundTrigger` 组件在动画状态机中触发

## 自定义对话

模组支持为自定义模型配置对话，可以在动画状态机中触发对话气泡显示。

### 对话配置

对话配置文件应放置在模型包文件夹内，文件命名格式为：`{文件名}_{语言}.json`

例如：
- `dialogue_English.json`：英语对话文件
- `dialogue_Chinese.json`：中文对话文件

对话配置文件格式：

```json [json]
[
  {
    "Id": "dialogue_id_1",
    "Texts": [
      "对话文本 1",
      "对话文本 2",
      "对话文本 3"
    ],
    "Mode": "Sequential",
    "Duration": 2.0
  },
  {
    "Id": "dialogue_id_2",
    "Texts": [
      "随机对话 1",
      "随机对话 2"
    ],
    "Mode": "Random",
    "Duration": 3.0
  }
]
```

#### DialogueDefinition 字段说明

- `Id`（必需）：对话的唯一标识符，用于在 `ModelDialogueTrigger` 中引用
- `Texts`（必需）：对话文本数组，包含该对话的所有可能文本
- `Mode`（可选）：对话播放模式（默认：`Sequential`）
  - `Sequential`：顺序播放，按数组顺序依次播放，播放完最后一个后重新开始
  - `Random`：随机播放，每次从数组中随机选择一个文本
  - `RandomNoRepeat`：随机不重复播放，随机选择文本，直到所有文本都播放过后重新开始
  - `Continuous`：连续播放，按顺序连续播放所有文本
- `Duration`（可选）：对话显示持续时间（秒，默认：`2.0`）

### 对话触发方式

#### 动画状态机触发

- 在动画状态机中使用 `ModelDialogueTrigger` 组件在状态进入时触发对话
- 配置 `fileName`（对话文件名，不含扩展名）和 `dialogueId`（对话 ID）
- 配置 `defaultLanguage`（默认语言），当当前语言文件不存在时使用
- 对话气泡会自动显示在角色上方，位置会根据角色模型自动调整

### 多语言支持

- 对话文件支持多语言，系统会根据当前游戏语言自动加载对应语言的对话文件
- 如果当前语言的对话文件不存在，会回退到 `defaultLanguage` 指定的语言文件
- 语言文件命名规则：`{文件名}_{语言}.json`
  - 中文（简体/繁体）：`Chinese`
  - 其他语言：使用 `SystemLanguage` 枚举值的字符串形式（如 `English`、`Japanese` 等）

### 注意事项

- 如果模型没有配置对话，不会影响其他功能
- 对话文件必须包含有效的 JSON 格式和至少一个对话定义
- 对话 ID 必须唯一，重复的 ID 会被覆盖（使用最后一个）



## 注意事项

- 如果模型没有配置音效，不会影响其他功能
