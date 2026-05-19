---
icon: material-symbols:genetics-rounded
title: Fudan iGEM 2025 建模
---

# Fudan iGEM 2025 建模

Fudan iGEM 2025 已经有队伍官方 Wiki。这个页面只保留一份简洁的个人记录，用来说明我在其中主要负责的 Model 工作，并链接到官方页面。

## 官方链接

- [Fudan iGEM 2025 Wiki](https://2025.igem.wiki/fudan/)
- [Model 页面](https://2025.igem.wiki/fudan/model/)
- [Team 页面](https://2025.igem.wiki/fudan/team/)
- [成员证书](/assets/docs/igem-certificates-2025-5643-member.pdf)

## 我的职责

我主要负责项目中的 **Model** 板块。具体工作包括：把生物设计问题转化为计算模型、仿真程序、可视化解释和面向评审的表达。

简单来说，我参与回答的是一个很实际的问题：在湿实验开始前，能否预测酵母中的荧光计时器系统是否会产生足够可读的细胞年龄和谱系追踪信号？

## 建模工作

成熟版本的模型围绕荧光计时器成熟链：

$$
C \rightarrow B \rightarrow I \rightarrow R
$$

其中未成熟蛋白依次经过蓝色态、中间态和红色态。核心读数为：

$$
r(t)=\frac{R}{B+R}
$$

模型关注这个比例是否具有足够单调、可区分的变化，从而作为细胞年龄和谱系追踪信号。它考虑了细胞周期、mRNA 动力学、蛋白成熟、红色态降解、细胞分裂，以及母细胞向子细胞传递未成熟蛋白等因素。目标是在真正投入实验前，让设计更可预测。

模型辅助形成的关键设计选择包括：

- 使用脉冲式启动子，而不是持续表达启动子，因为短表达窗口更有利于保留时间分辨率。
- 采用 Ash1 相关的 late M phase 脉冲，使表达逻辑更贴合酵母细胞周期。
- 选择 Fast-FT 作为荧光计时器候选，并根据 30 C 酵母培养条件修正成熟参数。
- 在湿实验前先用模型筛选 pulse width 和 promoter strength。
- 将 DeepSeek、Qwen 等大模型作为独立推理伙伴，用生物学第一性原理交叉验证建模结论。

## AI 增强设计

这个项目把传统 DBTL 循环中的 Design 阶段做得更强。机制模型先给出参数区域，AI 辅助推理再独立判断这些设计选择是否符合生物学逻辑。

这样 wet lab 一开始面对的不是无限试错空间，而是更窄、更可解释的设计范围：启动子策略、脉冲宽度、表达强度和荧光计时器选择，都在实验前形成了可辩护的依据。完整叙述可以看队伍的 [Model 页面](https://2025.igem.wiki/fudan/model/)。

## YeastVerse 可视化

YeastVerse 用三维交互可视化展示多细胞酵母生长和荧光计时器成熟过程，帮助把抽象方程变成空间直觉：

- 从祖细胞开始观察酵母细胞簇生长；
- 比较不同假设下的生长形态；
- 可视化计时器成熟和颜色随时间变化；
- 帮助实验成员和非建模背景的读者理解模型预测。

## 与湿实验的连接

模型不是孤立展示，而是服务实验设计。模型预测帮助确定了启动子逻辑和荧光计时器选择。实验中的 TU Timer 由 AI 优化的 Ash1 启动子、modified mCherry / Fast-FT 行为、Ash1 3' UTR 和 ScENO1 terminator 组成。

重要的不是宣称模型完美，而是它显著缩小了实验搜索空间，并让实验结果更容易解释。之后湿实验数据又反过来帮助验证模型和完善答辩表达。

## 证书

官方成员证书可以在这里查看：[iGEM 2025 Member Certificate](/assets/docs/igem-certificates-2025-5643-member.pdf)。
