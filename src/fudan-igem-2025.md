---
icon: material-symbols:genetics-rounded
title: Fudan iGEM 2025 Modeling
---

# Fudan iGEM 2025 Modeling

This page replaces the older scattered entries for “Fudan iGEM 2025 Modeling”, “Yeast Simulation App”, and “Fudan iGEM 2024 Replica”. It summarizes the newer project materials from the local iGEM archive without exposing private administrative files.

## Project Positioning

Fudan iGEM 2025 explored a multicellular yeast system where dry-lab modeling, wet-lab validation, AI-assisted reasoning, and interactive visualization worked together. My role focused on modeling and computation: turning biological design questions into mathematical models, simulations, visual tools, and judge-facing explanations.

The core modeling theme moved from early virtual-cell ideas to a more concrete fluorescent timer system in yeast. The model uses a dynamic fluorescent timer protein to represent cellular time and lineage information, then evaluates whether the design can produce interpretable blue-to-red signals under realistic yeast growth conditions.

## Modeling Framework

The mature model centers on a fluorescent timer maturation chain:

$$
C \rightarrow B \rightarrow I \rightarrow R
$$

where immature protein matures through blue, intermediate, and red states. The readout is:

$$
r(t)=\frac{R}{B+R}
$$

The model evaluates whether this ratio changes monotonically enough to serve as a readable timer. It considers cell-cycle timing, mRNA dynamics, protein maturation, red-state degradation, cell division, and inheritance of immature protein from mother to daughter cells.

## Design Decisions

The newer materials converge on several design choices:

- Use a pulsed promoter strategy rather than constitutive expression, because short expression windows preserve temporal resolution.
- Use an Ash1-based late-M-phase pulse to align expression with yeast cell-cycle logic.
- Use Fast-FT as the fluorescent timer candidate, with temperature-adjusted maturation parameters for 30 C yeast culture.
- Screen pulse width and promoter strength in silico before wet-lab investment.
- Treat LLMs such as DeepSeek and Qwen as independent reasoning partners, not as replacements for mechanistic modeling.

## AI-Augmented DBTL

The project reframed the DBTL cycle by strengthening the Design stage. Mechanistic modeling predicted the useful parameter region, while AI-assisted reasoning independently checked whether the same design choices made biological sense from first principles.

This gave the experimental side a narrower, more defensible starting point: promoter strategy, pulse width, expression strength, and fluorescent timer choice were selected before wet-lab work rather than after many rounds of trial and error.

## YeastVerse Visualization

The software work is now best understood as part of the same modeling project, not a separate project. YeastVerse provides interactive 3D visualization for multicellular yeast growth and fluorescent timer maturation. Its purpose is to translate abstract equations into spatial intuition:

- observe yeast-cluster growth from a single ancestor cell,
- compare growth morphology under different assumptions,
- visualize timer maturation and color changes over time,
- help experimentalists and non-modelers understand what the model predicts.

## Wet-Lab Connection

The model was designed to guide wet-lab decisions rather than stand alone. According to the newer project notes, model predictions informed the choice of promoter logic and fluorescent timer. The wet-lab implementation used a TU Timer built from an AI-optimized Ash1 promoter, modified mCherry/Fast-FT behavior, Ash1 3' UTR, and ScENO1 terminator.

The important claim is not that the model was perfect, but that it made the experimental search space smaller and more interpretable. Experimental data then fed back into model validation and presentation.

## Judging Questions To Preserve

For future project writeups and interviews, the useful questions are:

- How did the model improve the experimental design?
- Which assumptions were made, and why were they reasonable?
- What data sources were used to choose parameter values?
- How were model predictions validated by wet-lab results?
- How can non-modelers use the model or visualization tools?
- What does AI-assisted reasoning add beyond traditional modeling?

## Status

This page is a public-facing, cleaned project overview. The older internal notes and early prototypes remain in the repository or local archive for traceability, but the homepage now points here as the consolidated iGEM modeling entry.
