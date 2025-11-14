# ModelAudioConfig.json

模型音频开关配置。用于控制是否使用模型提供的音频（包括按键触发、AI 自动触发和待机音频）。

```json
{
  "EnableModelAudio": {
    "Character": true,
    "Pet": true
  },
  "AICharacterEnableModelAudio": {
    "*": true
  }
}
```

## EnableModelAudio

> Dictionary<ModelTarget, Bool> 

字典类型，键为 `ModelTarget` 枚举值（如 `"Character"`、`"Pet"`），值为布尔值，控制该角色类型是否使用模型音频

- `Character`：玩家角色是否使用模型音频（默认：`true`）
  - 设置为 `false` 时，玩家角色的所有模型音频都不会播放（包括按键触发和待机音频）
  - 可在模型选择界面的目标设置区域中切换此选项
- `Pet`：宠物角色是否使用模型音频（默认：`true`）
  - 设置为 `false` 时，宠物角色的所有模型音频都不会播放（包括 AI 自动触发和待机音频）
  - 可在模型选择界面的目标设置区域中切换此选项
- 当添加新的 `ModelTarget` 类型时，配置会自动包含该类型（默认值：`true`）

## AICharacterEnableModelAudio

> Dictionary<Characters, Bool> 

字典类型，键为 AI 角色名称键（如 `"Cname_Wolf"`、`"Cname_Scav"`），值为布尔值，控制该 AI 角色是否使用模型音频

- 可以为每个 AI 角色单独配置是否使用模型音频
- 特殊键 `"*"`：为所有 AI 角色设置默认值
  - 当某个 AI 角色没有单独配置时，会使用 `"*"` 对应的值
  - 如果 `"*"` 也没有配置，则使用默认值（`true`）
- **配置选择逻辑**：音频设置会根据实际使用的模型来选择配置
  - 如果 AI 角色使用的是自己的模型配置（在 `UsingModel.json` 中为该 AI 角色单独配置了模型），则使用该 AI 角色的音频设置
  - 如果 AI 角色使用的是回退模型（`*`，即"所有 AI 角色"的默认模型），则使用`*`的音频设置
- 默认值：`true`（使用模型音频）
- 可在模型选择界面的目标设置区域中切换此选项

## 注意事项

- 当禁用模型音频时，对应角色的所有模型音频都不会播放，包括：
  - 玩家按键触发的音频（`"normal"` 标签）
  - AI 自动触发的音频（`"normal"`、`"surprise"`、`"death"` 标签）
  - 待机音频（`"idle"` 标签）
- 此配置与 `IdleAudioConfig.json` 中的 `EnableIdleAudio` 配置是独立的：
  - `ModelAudioConfig.json` 控制是否使用模型音频（总开关）
  - `IdleAudioConfig.json` 中的 `EnableIdleAudio` 控制是否允许自动播放待机音频（仅影响待机音频的自动播放）
  - 如果 `ModelAudioConfig.json` 中禁用了模型音频，即使 `EnableIdleAudio` 为 `true`，待机音频也不会播放