# OPC Learning Loop

Use this reference when explaining how OPCSkill relates to memory, RAG, evals, and training data.

## Core Idea

OPCSkill turns AI conversations into owned learning loops for one-person companies.

```text
human capital -> AI conversation traces -> clean assets -> next AI run -> better human judgment
```

## Layers

```text
Raw Sessions
  Original conversations. Do not modify.

Session Receipts
  Short closing notes at the end of important sessions.

Candidate Assets
  Model-extracted decisions, prompts, task packets, and notes.

Clean Assets
  Human-checked or evidence-backed assets.

RAG / Memory
  A downstream use of clean assets.

Eval / Training Dataset
  Future use only after schema, labels, and quality checks are stable.
```

## Not Just RAG

RAG is one way to use the assets. The primary job is to create trustworthy assets from noisy conversations.

Do not put raw chat directly into RAG by default. Raw conversations contain noise, uncertainty, temporary proposals, and rejected ideas.

## Training Boundary

Do not claim data is training-ready unless it has:

- stable schema;
- evidence links or quotes;
- human decision labels;
- reviewed examples;
- known failure cases;
- explicit user approval for training use.

## Best Practice

For daily use:

```text
important session -> lightweight receipt
selected high-value session -> deep asset extraction
confirmed clean asset -> memory / eval / future dataset
```

