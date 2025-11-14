### HideEquipmentConfig.json

隐藏装备配置。使用 `ModelTarget` 作为键，便于后续扩展新的模型目标类型。

```json
{
  "HideEquipment": {
    "Character": false,
    "Pet": false
  }
}
```

- `HideEquipment`：字典类型，键为 `ModelTarget` 枚举值（如 `"Character"`、`"Pet"`），值为布尔类型
  - `Character`：是否隐藏角色原有装备（默认：`false`）
    - 设置为 `true` 时，角色模型的 Animator 的 `HideOriginalEquipment` 参数会被设置为 `true`
    - 可在模型选择界面的设置区域中切换此选项
  - `Pet`：是否隐藏宠物原有装备（默认：`false`）
    - 设置为 `true` 时，宠物模型的 Animator 的 `HideOriginalEquipment` 参数会被设置为 `true`
    - 可在模型选择界面的设置区域中切换此选项
  - 当添加新的 `ModelTarget` 类型时，配置会自动包含该类型（默认值为 `false`）

**兼容性说明**：如果 `UIConfig.json` 中存在旧的 `HideCharacterEquipment` 或 `HidePetEquipment` 配置，系统会自动迁移到新的 `HideEquipmentConfig.json` 文件中。