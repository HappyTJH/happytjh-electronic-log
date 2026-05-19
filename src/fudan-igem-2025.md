---
icon: material-symbols:genetics-rounded
title: Fudan iGEM 2025 Modeling
---

# Fudan iGEM 2025 Modeling

Fudan iGEM 2025 is documented on our official team Wiki. This page keeps a brief personal record of my contribution, with the full project story linked out to the official site.

## Official Links

- [Fudan iGEM 2025 Wiki](https://2025.igem.wiki/fudan/)
- [Model Page](https://2025.igem.wiki/fudan/model/)
- [Team Page](https://2025.igem.wiki/fudan/team/)
- [Member Certificate PDF](/happytjh-electronic-log/assets/docs/igem-certificates-2025-5643-member.pdf)

## My Role

I worked mainly on the **Model** part of the project. My contribution focused on converting biological design questions into computational models, simulations, visual explanations, and judge-facing narratives.

In short, I helped answer a practical design question: before wet-lab experiments, could we predict whether a fluorescent timer system in yeast would produce a readable signal for cell age and lineage tracking?

## Modeling Work

The mature model centers on a fluorescent timer maturation chain:

$$
C \rightarrow B \rightarrow I \rightarrow R
$$

where immature protein matures through blue, intermediate, and red states. The readout is:

$$
r(t)=\frac{R}{B+R}
$$

The model evaluates whether this ratio changes monotonically enough to serve as a readable timer. It considers cell-cycle timing, mRNA dynamics, protein maturation, red-state degradation, cell division, and inheritance of immature protein from mother to daughter cells. The goal was to make the design more predictable before experimental investment.

Key model-guided design choices included:

- Use a pulsed promoter strategy rather than constitutive expression, because short expression windows preserve temporal resolution.
- Use an Ash1-based late-M-phase pulse to align expression with yeast cell-cycle logic.
- Use Fast-FT as the fluorescent timer candidate, with temperature-adjusted maturation parameters for 30 C yeast culture.
- Screen pulse width and promoter strength in silico before wet-lab investment.
- Treat LLMs such as DeepSeek and Qwen as independent reasoning partners, not as replacements for mechanistic modeling.

## AI-Augmented Design

The project reframed the DBTL cycle by strengthening the Design stage. Mechanistic modeling predicted the useful parameter region, while AI-assisted reasoning independently checked whether the same design choices made biological sense from first principles.

This gave the experimental side a narrower, more defensible starting point: promoter strategy, pulse width, expression strength, and fluorescent timer choice were selected before wet-lab work rather than after many rounds of trial and error. The full explanation is available on the [official Model page](https://2025.igem.wiki/fudan/model/).

## YeastVerse Visualization

YeastVerse provided interactive 3D visualization for multicellular yeast growth and fluorescent timer maturation. Its purpose was to translate abstract equations into spatial intuition:

- observe yeast-cluster growth from a single ancestor cell,
- compare growth morphology under different assumptions,
- visualize timer maturation and color changes over time,
- help experimentalists and non-modelers understand what the model predicts.

## Wet-Lab Connection

The model was designed to guide wet-lab decisions rather than stand alone. Model predictions informed the choice of promoter logic and fluorescent timer. The wet-lab implementation used a TU Timer built from an AI-optimized Ash1 promoter, modified mCherry/Fast-FT behavior, Ash1 3' UTR, and ScENO1 terminator.

The important claim is not that the model was perfect, but that it made the experimental search space smaller and more interpretable. Experimental data then fed back into model validation and presentation.

## Certificate

![iGEM 2025 Member Certificate](/happytjh-electronic-log/assets/images/igem-certificates-2025-5643-member.png)

The official member certificate is also available as a [PDF](/happytjh-electronic-log/assets/docs/igem-certificates-2025-5643-member.pdf).
