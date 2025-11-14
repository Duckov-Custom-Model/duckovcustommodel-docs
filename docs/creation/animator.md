# 动画器配置

自定义模型 Prefab 需要包含 `Animator` 组件，并配置相应的 Animator Controller。

## Animator Controller 参数

Animator Controller 可以使用以下参数。模型不需要使用所有参数，只需要根据需求配置。

## Bool 类型参数

| 参数名 | 说明 |
|-------|------|
| `Grounded` | 角色是否在地面上 |
| `Die` | 角色是否死亡 |
| `Moving` | 角色是否正在移动 |
| `Running` | 角色是否正在奔跑 |
| `Dashing` | 角色是否正在冲刺 |
| `GunReady` | 枪械是否准备就绪 |
| `Loaded` | 枪械是否已装弹（当持有 `ItemAgent_Gun` 时，由 `OnLoadedEvent` 事件更新） |
| `Reloading` | 是否正在装弹 |
| `RightHandOut` | 右手是否伸出 |
| `ActionRunning` | 是否正在执行动作（由 `CharacterMainControl.CurrentAction` 决定） |
| `Hidden` | 角色是否处于隐藏状态 |
| `ThermalOn` | 热成像是否开启 |
| `InAds` | 是否正在瞄准（ADS - Aim Down Sights） |
| `HideOriginalEquipment` | 是否隐藏原有装备（由 `HideEquipmentConfig.json` 中对应 `ModelTarget` 的配置控制） |
| `LeftHandEquip` | 左手槽位是否有装备（基于装备的 TypeID 判断，TypeID > 0 时为 `true`） |
| `RightHandEquip` | 右手槽位是否有装备（基于装备的 TypeID 判断，TypeID > 0 时为 `true`） |
| `ArmorEquip` | 护甲槽位是否有装备（基于装备的 TypeID 判断，TypeID > 0 时为 `true`） |
| `HelmetEquip` | 头盔槽位是否有装备（基于装备的 TypeID 判断，TypeID > 0 时为 `true`） |
| `HeadsetEquip` | 耳机槽位是否有装备（基于装备的 TypeID 判断，TypeID > 0 时为 `true`） |
| `FaceEquip` | 面部槽位是否有装备（基于装备的 TypeID 判断，TypeID > 0 时为 `true`） |
| `BackpackEquip` | 背包槽位是否有装备（基于装备的 TypeID 判断，TypeID > 0 时为 `true`） |
| `MeleeWeaponEquip` | 近战武器槽位是否有装备（基于装备的 TypeID 判断，TypeID > 0 时为 `true`） |
| `HavePopText` | 是否有弹出文本（检测弹出文本槽位是否有子对象） |

## Float 类型参数

| 参数名 | 范围 | 说明 |
|-------|------|------|
| `MoveSpeed` | 0~2+ | 移动速度比例（正常走 0~1，跑步可达 2） |
| `MoveDirX` | -1.0 ~ 1.0 | 移动方向 X 分量（角色本地坐标系） |
| `MoveDirY` | -1.0 ~ 1.0 | 移动方向 Y 分量（角色本地坐标系） |
| `VelocityX` | - | 速度 X 分量 |
| `VelocityY` | - | 速度 Y 分量 |
| `VelocityZ` | - | 速度 Z 分量 |
| `VelocityMagnitude` | - | 速度大小（速度向量的长度） |
| `AimDirX` | - | 瞄准方向 X 分量 |
| `AimDirY` | - | 瞄准方向 Y 分量 |
| `AimDirZ` | - | 瞄准方向 Z 分量 |
| `AdsValue` | 0.0 - 1.0 | 瞄准值（瞄准进度） |
| `AmmoRate` | 0.0 - 1.0 | 弹药比率（当前弹药数 / 最大弹药容量） |
| `HealthRate` | 0.0 - 1.0 | 生命值比率（当前生命值 / 最大生命值） |
| `WaterRate` | 0.0 - 1.0 | 水分比率（当前水分 / 最大水分） |
| `WeightRate` | 0.0+ | 重量比率（当前总重量 / 最大负重，可能大于 1.0） |
| `ActionProgress` | 0.0 - 1.0 | 动作进度百分比（当前动作的进度，由 `IProgress.GetProgress().progress` 获取） |
| `Time` | 0.0 - 24.0 | 当前 24 小时时间（由 `TimeOfDayController.Instance.Time` 获取，不可用时为 -1.0） |

## Int 类型参数

### CurrentCharacterType
当前角色类型

| 值 | 说明 |
|----|------|
| `0` | 角色（Character） |
| `1` | 宠物（Pet） |

### HandState
手部状态

| 值 | 说明 |
|----|------|
| `0` | 默认状态 |
| `1` | 正常（normal） |
| `2` | 枪械（gun） |
| `3` | 近战武器（meleeWeapon） |
| `4` | 弓（bow） |
| `-1` | 搬运状态 |

### ShootMode
射击模式（当持有 `ItemAgent_Gun` 时，由枪械的 `triggerMode` 决定）

| 值 | 说明 |
|----|------|
| `0` | 自动（auto） |
| `1` | 半自动（semi） |
| `2` | 栓动（bolt） |

### GunState
枪械状态（当持有 `ItemAgent_Gun` 时，由枪械的 `GunState` 决定）

| 值 | 说明 |
|----|------|
| `0` | 射击冷却（shootCooling） |
| `1` | 就绪（ready） |
| `2` | 开火（fire） |
| `3` | 连发每发冷却（burstEachShotCooling） |
| `4` | 空弹（empty） |
| `5` | 装弹中（reloading） |

### AimType
瞄准类型（由 `CharacterMainControl.AimType` 决定）

| 值 | 说明 |
|----|------|
| `0` | 正常瞄准（normalAim） |
| `1` | 角色技能（characterSkill） |
| `2` | 手持技能（handheldSkill） |

### WeightState
重量状态（仅在 Raid 地图中生效）

| 值 | 范围 | 说明 |
|----|----|------|
| `0` | WeightRate ≤ 0.25 | 轻量 |
| `1` | 0.25 < WeightRate ≤ 0.75 | 正常 |
| `2` | 0.75 < WeightRate ≤ 1.0 | 超重 |
| `3` | WeightRate > 1.0 | 过载 |

### WeaponInLocator
武器当前所在的定位点类型

| 值 | 说明 |
|----|------|
| `0` | 无武器 |
| `1` | 右手定位点（`normalHandheld`） |
| `2` | 近战武器定位点（`meleeWeapon`） |
| `3` | 左手定位点（`leftHandSocket`） |

:::info
当武器类型为左手但模型没有左手定位点时，会自动使用右手定位点（值为 `1`）
:::

### 装备 TypeID 参数

| 参数名 | 说明 |
|-------|------|
| `LeftHandTypeID` | 左手装备的 TypeID（无装备时为 `0`） |
| `RightHandTypeID` | 右手装备的 TypeID（无装备时为 `0`） |
| `ArmorTypeID` | 护甲装备的 TypeID（无装备时为 `0`） |
| `HelmetTypeID` | 头盔装备的 TypeID（无装备时为 `0`） |
| `HeadsetTypeID` | 耳机装备的 TypeID（无装备时为 `0`） |
| `FaceTypeID` | 面部装备的 TypeID（无装备时为 `0`） |
| `BackpackTypeID` | 背包装备的 TypeID（无装备时为 `0`） |
| `MeleeWeaponTypeID` | 近战武器装备的 TypeID（无装备时为 `0`） |

### ActionPriority
动作优先级（由 `CharacterMainControl.CurrentAction.ActionPriority()` 决定）

| 值 | 说明 |
|----|------|
| `0` | Whatever（任意） |
| `1` | Reload（装弹） |
| `2` | Attack（攻击） |
| `3` | usingItem（使用物品） |
| `4` | Dash（冲刺） |
| `5` | Skills（技能） |
| `6` | Fishing（钓鱼） |
| `7` | Interact（交互） |

:::info
当 `ActionRunning` 为 `true` 时，动作优先级可以近似用于判断角色正在执行什么动作
:::

### Weather
当前天气状态（由 `TimeOfDayController.Instance.CurrentWeather` 获取，不可用时为 -1）

| 值 | 说明 |
|----|------|
| `0` | 晴天（Sunny） |
| `1` | 多云（Cloudy） |
| `2` | 雨天（Rainy） |
| `3` | 风暴 I（Stormy_I） |
| `4` | 风暴 II（Stormy_II） |

### TimePhase
当前时间阶段（由 `TimeOfDayController.Instance.CurrentPhase.timePhaseTag` 获取，不可用时为 -1）

| 值 | 说明 |
|----|------|
| `0` | 白天（day） |
| `1` | 黎明（dawn） |
| `2` | 夜晚（night） |

## Trigger 类型参数

| 参数名 | 说明 |
|-------|------|
| `Attack` | 攻击触发（用于触发近战攻击动画） |
| `Shoot` | 射击触发（当持有 `ItemAgent_Gun` 时，由 `OnShootEvent` 事件触发） |

## 可选动画层

### MeleeAttack 层

如果模型包含近战攻击动画，可以添加名为 `"MeleeAttack"` 的动画层：

- **层名称**：必须为 `"MeleeAttack"`
- **用途**：用于播放近战攻击动画
- **权重调整**：层的权重会根据攻击状态自动调整

## 动画器工作流程

1. 模组会自动读取游戏状态并更新 Animator 参数
2. 移动、跳跃、冲刺等状态会实时同步到自定义模型的 Animator
3. 攻击、装弹等动作会触发相应的动画参数
4. 如果存在 `MeleeAttack` 层，攻击时会自动调整该层的权重以播放攻击动画
5. 当角色持有 `ItemAgent_Gun` 时，会自动订阅枪械的 `OnShootEvent` 和 `OnLoadedEvent` 事件
   - `OnShootEvent`：触发时设置 `Shoot` 触发器
   - `OnLoadedEvent`：触发时更新 `Loaded` 布尔值
6. 当角色切换持有物品时（`OnHoldAgentChanged` 事件），会自动更新相关订阅