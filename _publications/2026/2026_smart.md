---
title:          "Real-Time Proactive Robot Assistance with Household Tasks via HIRR Sequence Models and Adaptive LLM Reasoning"
date:           2026-09-08 00:01:00 +0800
# selected:       true
pub:            "International Conference on Human-Robot-Interaction (HRI)"
# pub_pre:        "Submitted to "
pub_post:       'Under review.'
pub_last:       ' <span class="badge badge-pill badge-publication badge-success">Spotlight</span>'
pub_date:       "2026"
# semantic_scholar_id: 204e3073870fae3d05bcbc2f6a8e263d9b72e776  # use this to retrieve citation count
abstract: >-
  Proactive robot assistance refers to a robot’s ability to assist a user without requiring explicit instruction. In household environments, this means anticipating a user’s needs during household tasks rather than waiting to be asked. However, existing approaches rely on longitudinal routine tracking, which requires observing daily habits over days or weeks before providing assistance. In this work, we present SMART-PRO (Sequence Modeling via HumAn Intention Recognition and AdapTive LLM Reasoning for PRedicting Object usage), a novel framework designed for immediate, real-time object prediction in open-ended household tasks. Rather than waiting to observe long-term temporal routines, SMART-PRO operates on an event-driven system. The framework combines real-time visual perception (YOLOv8) with activity prediction using a Naïve Bayes model and an activity-conditioned $n$-gram sequence model (Markov model) to predict the next object required in a task.  When prediction confidence drops below a threshold of 0.5, an adaptive Large Language Model (LLM) fallback module is queried for semantic reasoning. SMART-PRO performance without the LLM queries raises the F1-score metric to 0.82, and 0.77 with queries, over a score of 0.73 from previous work. SMART-PRO is further validated through tasks with the Hello Robot Stretch 3 mobile manipulator within the MuJoCo environment.
# cover:          /assets/images/covers/cover3.jpg
authors:
  - Jae Jackson
  - Hayden Wimmer
# links:
  # Code: https://github.com/luost26/academic-homepage
  # Unsplash: https://unsplash.com/photos/sliced-in-half-pineapple--_PLJZmHZzk
---
