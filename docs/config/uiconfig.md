### UIConfig.json

UI 界面相关配置。

```json
{
  "ToggleKey": "Backslash",
  "AnimatorParamsToggleKey": "None",
  "ShowDCMButton": true,
  "DCMButtonAnchor": "TopLeft",
  "DCMButtonOffsetX": 10.0,
  "DCMButtonOffsetY": -10.0
}
```

- `ToggleKey`：打开/关闭模型选择界面的按键（默认：`Backslash`，即反斜杠键 `\`）
  - 支持的按键值可参考 Unity KeyCode 枚举
- `AnimatorParamsToggleKey`：打开/关闭参数显示界面的按键（默认：`None`，即没有按键）
  - 需要用户主动在设置界面中设置
  - 支持的按键值可参考 Unity KeyCode 枚举
  - 设置为 `None` 时，该快捷键功能将被禁用
- `ShowDCMButton`：是否在主菜单和背包界面显示 DCM 按钮（默认：`true`）
  - 设置为 `true` 时，在主菜单或背包界面会自动显示 DCM 按钮
  - 可在设置界面中切换此选项
- `DCMButtonAnchor`：DCM 按钮的锚点位置（默认：`"TopLeft"`）
  - 可选值：`"TopLeft"`（左上）、`"TopCenter"`（上中）、`"TopRight"`（右上）、`"MiddleLeft"`（左中）、`"MiddleCenter"`（中央）、`"MiddleRight"`（右中）、`"BottomLeft"`（左下）、`"BottomCenter"`（下中）、`"BottomRight"`（右下）
  - 可在设置界面中通过下拉菜单选择
- `DCMButtonOffsetX`：DCM 按钮的 X 轴偏移值（默认：`10.0`）
  - 相对于锚点位置的 X 轴偏移（像素）
  - 可在设置界面中通过输入框设置
- `DCMButtonOffsetY`：DCM 按钮的 Y 轴偏移值（默认：`-10.0`）
  - 相对于锚点位置的 Y 轴偏移（像素）
  - 可在设置界面中通过输入框设置