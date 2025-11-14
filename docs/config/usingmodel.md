### UsingModel.json

当前使用的模型配置。使用 `ModelTarget` 作为键，便于后续扩展新的模型目标类型。

```json
{
  "ModelIDs": {
    "Character": "",
    "Pet": ""
  },
  "AICharacterModelIDs": {
    "Cname_Wolf": "",
    "Cname_Scav": "",
    "*": ""
  }
}
```

- `ModelIDs`：字典类型，键为 `ModelTarget` 枚举值（如 `"Character"`、`"Pet"`），值为模型 ID（字符串，为空时使用原始模型）
  - `Character`：当前使用的角色模型 ID
    - 设置后，游戏会在关卡加载时自动应用该模型到所有角色对象
    - 可通过模型选择界面修改，修改后会自动保存到此文件
  - `Pet`：当前使用的宠物模型 ID
    - 设置后，游戏会在关卡加载时自动应用该模型到所有宠物对象
    - 可通过模型选择界面修改，修改后会自动保存到此文件
  - 当添加新的 `ModelTarget` 类型时，配置会自动支持该类型

- `AICharacterModelIDs`：字典类型，键为 AI 角色名称键（如 `"Cname_Wolf"`、`"Cname_Scav"`），值为模型 ID（字符串，为空时使用原始模型）
  - 可以为每个 AI 角色单独配置模型
  - 特殊键 `"*"`：为所有 AI 角色设置默认模型
    - 当某个 AI 角色没有单独配置模型时，会使用 `"*"` 对应的模型
    - 如果 `"*"` 也没有配置，则使用原始模型
  - 可通过模型选择界面修改，修改后会自动保存到此文件

**兼容性说明**：如果配置文件中存在旧的 `ModelID` 或 `PetModelID` 字段，系统会自动迁移到新的 `ModelIDs` 字典格式。迁移完成后，配置文件将只包含 `ModelIDs` 字典。