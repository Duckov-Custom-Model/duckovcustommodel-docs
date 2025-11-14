### IdleAudioConfig.json

待机音频自动播放间隔配置。用于配置不同角色的自动播放间隔（最小值和最大值）。

```json
{
  "IdleAudioIntervals": {
    "Pet": {
      "Min": 30.0,
      "Max": 45.0
    }
  },
  "AICharacterIdleAudioIntervals": {
    "Cname_Wolf": {
      "Min": 20.0,
      "Max": 30.0
    },
    "*": {
      "Min": 30.0,
      "Max": 45.0
    }
  },
  "EnableIdleAudio": {
    "Character": false,
    "Pet": true
  },
  "AICharacterEnableIdleAudio": {
    "*": true
  }
}
```

- `IdleAudioIntervals`：字典类型，键为 `ModelTarget` 枚举值（如 `"Character"`、`"Pet"`），值为包含 `Min` 和 `Max` 的对象
  - `Pet`：宠物角色的待机音频播放间隔（秒）
    - `Min`：最小间隔时间（默认：`30.0`）
    - `Max`：最大间隔时间（默认：`45.0`）
    - 系统会在最小值和最大值之间随机选择间隔时间
  - 当添加新的 `ModelTarget` 类型时，配置会自动包含该类型（默认值：`Min: 30.0, Max: 45.0`）

- `AICharacterIdleAudioIntervals`：字典类型，键为 AI 角色名称键（如 `"Cname_Wolf"`、`"Cname_Scav"`），值为包含 `Min` 和 `Max` 的对象
  - 可以为每个 AI 角色单独配置待机音频播放间隔
  - 特殊键 `"*"`：为所有 AI 角色设置默认间隔
    - 当某个 AI 角色没有单独配置间隔时，会使用 `"*"` 对应的间隔
    - 如果 `"*"` 也没有配置，则使用默认值（`Min: 30.0, Max: 45.0`）
  - `Min`：最小间隔时间（默认：`30.0`）
  - `Max`：最大间隔时间（默认：`45.0`）
  - 系统会在最小值和最大值之间随机选择间隔时间

- `EnableIdleAudio`：字典类型，键为 `ModelTarget` 枚举值（如 `"Character"`、`"Pet"`），值为布尔值，控制该角色类型是否允许自动播放待机音频
  - `Character`：玩家角色是否允许自动播放待机音频（默认：`false`）
  - `Pet`：宠物角色是否允许自动播放待机音频（默认：`true`）
  - 当添加新的 `ModelTarget` 类型时，配置会自动包含该类型（默认值：`Character` 为 `false`，其他为 `true`）

- `AICharacterEnableIdleAudio`：字典类型，键为 AI 角色名称键（如 `"Cname_Wolf"`、`"Cname_Scav"`），值为布尔值，控制该 AI 角色是否允许自动播放待机音频
  - 可以为每个 AI 角色单独配置是否允许自动播放待机音频
  - 特殊键 `"*"`：为所有 AI 角色设置默认值
    - 当某个 AI 角色没有单独配置时，会使用 `"*"` 对应的值
    - 如果 `"*"` 也没有配置，则使用默认值（`true`）
  - 默认值：`true`（允许自动播放）

**注意事项**：
- 最小间隔时间不能小于 0.1 秒
- 最大间隔时间不能小于最小间隔时间
- 只有配置了 `"idle"` 标签音效的模型才会自动播放待机音效
- 只有启用了自动播放的角色类型才会自动播放待机音效（通过 `EnableIdleAudio` 和 `AICharacterEnableIdleAudio` 配置控制）
- 玩家角色默认不允许自动播放待机音效，可以通过配置启用