# 创建项目

本文档将指导你如何用于Duckov Custom Model的 Unity 项目。



## 创建 Unity 项目

### 1. 启动 Unity Hub

打开 Unity Hub，点击 **New Project**（新项目）。

![image-20251114192750252](/images/image-20251114192750252.png)

### 2. 选择模板

- 选择 **3D** 模板（推荐使用 Universal 3D模板）
- 设置项目名称，如 `DuckovModelPack`
- 选择保存位置
- 点击 **Create Project(创建项目)**

![image-20251118045204316](/images/image-20251118045204316.png)

::: tip 项目设置
建议使用2022.3.62f2版本创建项目以确保最佳兼容性。
:::



## 安装DCM SDK

推荐使用Git URL 安装，因为这样可以使用包管理器直接更新最新版本。如果通过本地路径安装，则需要手动更新。

### 通过 Git URL 安装（建议）

1. 点击导航栏上面的**Windows（窗口）**按钮
2. 打开**Package Manage（包管理器）**
3. 点击包管理器左上角的"**+**"按钮

![image-20251121222645563](/images/image-20251121222645563.png)

点击“**添加来自 git URL 的包**”按钮

![image-20251121223154548](/images/image-20251121223154548.png)

将**DCM SDK**的 git仓库链接复制到输入框内，并点击添加按钮：


```bash [git]
https://github.com/Duckov-Custom-Model/DuckovCustomModel-SDK.git
```

![image-20251121230009032](/images/image-20251121230009032.png)

等待Unity安装**DCM SDK**包，网络不好可能无法成功安装，可以尝试使用代理服务

![image-20251122014620367](/images/image-20251122014620367.png)

当菜单出现**Duckov Custom Model**选项，并且包管理器可以看到**DCM SDK**的描述后，说明已经成功安装SDK了

![image-20251122020028222](/images/image-20251122020028222.png)

### 通过本地路径安装

复制下方的链接到浏览器下载**DCM SDK**的压缩包

```bash [SDK压缩包]
https://github.com/Duckov-Custom-Model/DuckovCustomModel-SDK/archive/refs/heads/main.zip
```

将压缩包解压后，把解压的文件夹复制到Unity项目的`Packages` 目录下，Unity 会自动识别并加载 **DCM SDK**

![image-20251122021208660](/images/image-20251122021208660.png)

## 下一步

完成项目的创建和**DCM SDK**的安装后，可以继续[创建模型](./create-model.md)