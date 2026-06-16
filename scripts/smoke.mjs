#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const requiredFiles = [
  "README.md",
  "SKILL.md",
  "agents/openai.yaml",
  "references/human-decision-gate.md",
  "references/asset-schema.md",
  "references/execution-protocol.md",
  "references/skill-collaboration-map.md",
  "references/learning-loop.md",
  "references/retention-gate.md",
  "examples/dialogue-asset-example.md",
  "examples/opcskill-collaboration-case.html",
  "tests/trigger-cases.json",
];

function readText(relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), "utf8").replace(/^\uFEFF/, "");
}

function exists(relativePath) {
  return fs.existsSync(path.join(repoRoot, relativePath));
}

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL ${message}`);
    process.exitCode = 1;
    return;
  }
  console.log(`PASS ${message}`);
}

for (const file of requiredFiles) {
  assert(exists(file), `${file} exists`);
}

const readme = readText("README.md");
const skill = readText("SKILL.md");
const decisionGate = readText("references/human-decision-gate.md");
const assetSchema = readText("references/asset-schema.md");
const executionProtocol = readText("references/execution-protocol.md");
const collaborationMap = readText("references/skill-collaboration-map.md");
const learningLoop = readText("references/learning-loop.md");
const retentionGate = readText("references/retention-gate.md");
const example = readText("examples/dialogue-asset-example.md");
const htmlCase = readText("examples/opcskill-collaboration-case.html");
const cases = JSON.parse(readText("tests/trigger-cases.json"));
const packageJson = JSON.parse(readText("package.json"));

assert(/^---\n[\s\S]*?name:\s*opcskill[\s\S]*?description:/m.test(skill), "SKILL.md has opcskill frontmatter");
assert(skill.includes("Human Decision Gate"), "SKILL.md includes Human Decision Gate");
assert(skill.includes("Reference Router"), "SKILL.md includes Reference Router");
assert(skill.includes("model_proposal"), "SKILL.md separates model proposals");
assert(skill.includes("proposal_origin"), "SKILL.md separates decision authority from proposal origin");
assert(skill.includes("Do not batch-read references"), "SKILL.md forbids batch reference loading");

for (const reference of [
  "references/human-decision-gate.md",
  "references/asset-schema.md",
  "references/execution-protocol.md",
  "references/skill-collaboration-map.md",
  "references/learning-loop.md",
  "references/retention-gate.md",
]) {
  assert(skill.includes(reference), `SKILL.md routes ${reference}`);
}

for (const phrase of [
  "Input Classifier",
  "raw_conversation",
  "already_synthesized_asset",
  "prompt_archive",
  "multi_session_request",
  "visual_export_request",
  "Output Mode",
  "full_asset",
  "receipt",
  "visual_export_plan",
  "Retention Gate",
  "keep | redact | discard | ask_user",
  "asset audit",
  "reuse packaging",
]) {
  assert(skill.includes(phrase), `SKILL.md includes execution marker ${phrase}`);
}

for (const phrase of [
  "AI 的回答可以重来，人的判断不能丢",
  "Decision Ledger",
  "Prompt Card",
  "Task Packet",
  "Next-Run Bootstrap",
  "Human Decision Gate",
  "examples/opcskill-collaboration-case.html",
  "Markdown + HTML",
  "claude-code-html-skill",
  "mermaid",
]) {
  assert(readme.includes(phrase), `README includes ${phrase}`);
}

for (const label of ["human", "model_proposal", "inferred", "unknown"]) {
  assert(decisionGate.includes(label), `decision gate defines ${label}`);
}
assert(decisionGate.includes("A missed decision is safer than a false human decision"), "decision gate prefers precision");
assert(decisionGate.includes("Accepted Model Proposals"), "decision gate handles accepted model proposals");
assert(decisionGate.includes("proposal_origin"), "decision gate separates decision authority from proposal origin");
assert(decisionGate.includes("Do not record unaccepted model suggestions as human decisions"), "decision gate core rule does not conflict with accepted proposals");

for (const asset of ["Decision Ledger", "Prompt Card", "Task Packet", "Knowledge Note", "Next-Run Bootstrap"]) {
  assert(assetSchema.includes(asset), `asset schema includes ${asset}`);
}
for (const field of ["source_kind", "retention_review"]) {
  assert(assetSchema.includes(field), `asset schema includes ${field}`);
}
assert(assetSchema.includes("proposal_origin"), "asset schema includes proposal_origin");

for (const phrase of [
  "raw_conversation",
  "already_synthesized_asset",
  "prompt_archive",
  "multi_session_request",
  "visual_export_request",
  "full_asset",
  "visual_export_plan",
]) {
  assert(executionProtocol.includes(phrase), `execution protocol defines ${phrase}`);
}

for (const phrase of ["keep", "redact", "discard", "ask_user", "[REDACTED_SECRET]"]) {
  assert(retentionGate.includes(phrase), `retention gate defines ${phrase}`);
}

for (const skillName of ["lijie", "token-prompt-compiler", "evaluation", "audit-evolution", "claude-code-html-skill"]) {
  assert(collaborationMap.includes(skillName), `collaboration map mentions ${skillName}`);
}
assert(collaborationMap.includes("not available"), "collaboration map has fallback boundary");
assert(collaborationMap.includes("HTML is a review"), "collaboration map keeps HTML as review layer");

for (const boundary of ["Raw Sessions", "Clean Assets", "RAG", "Training Boundary"]) {
  assert(learningLoop.includes(boundary), `learning loop explains ${boundary}`);
}

assert(example.includes("decided_by: human"), "example shows human decision");
assert(example.includes("model"), "example keeps model context visible");
assert(example.includes("source_kind:"), "example shows source_kind");
assert(example.includes("retention_review:"), "example shows retention review");
assert(htmlCase.includes("OPCSkill Collaboration Case"), "HTML case has expected title");
assert(htmlCase.includes("AI 的回答可以重来，人的判断不能丢"), "HTML case includes slogan");
assert(htmlCase.includes("claude-code-html-skill"), "HTML case shows HTML skill collaboration");
assert(htmlCase.includes("Markdown 是长期真源"), "HTML case keeps Markdown as source of truth");
assert(!/https?:\/\/|<script\s+src=|<link\s+rel=/i.test(htmlCase), "HTML case is offline self-contained");

assert(Array.isArray(cases.should_trigger), "trigger cases include should_trigger");
assert(Array.isArray(cases.should_not_trigger), "trigger cases include should_not_trigger");
assert(cases.should_trigger.length >= 3, "at least three should-trigger cases");
assert(cases.should_not_trigger.length >= 3, "at least three should-not-trigger cases");

for (const id of [
  "already-synthesized-asset",
  "prompt-archive",
  "multi-session-request",
  "visual-export-request",
  "accepted-model-proposal",
]) {
  assert(cases.should_trigger.some((testCase) => testCase.id === id), `trigger cases include ${id}`);
}

const acceptedProposalCase = cases.should_trigger.find((testCase) => testCase.id === "accepted-model-proposal");
for (const required of ["decided_by: human", "proposal_origin: model_proposal", "ask_user", "public wording"]) {
  assert(acceptedProposalCase?.must_include?.includes(required), `accepted-model-proposal requires ${required}`);
}

const publicDocs = [
  ["SKILL.md", skill],
  ["references/asset-schema.md", assetSchema],
  ["references/human-decision-gate.md", decisionGate],
  ["references/execution-protocol.md", executionProtocol],
  ["references/retention-gate.md", retentionGate],
  ["tests/trigger-cases.json", JSON.stringify(cases)],
];
for (const [file, text] of publicDocs) {
  assert(!/[A-Z]:\\|api[_-]?key|password|private key|token:\s*|sk-[A-Za-z0-9]/i.test(text), `${file} avoids private paths and secret-like values`);
}

assert(packageJson.scripts?.smoke === "node scripts/smoke.mjs", "package.json exposes smoke");

if (process.exitCode) {
  process.exit(process.exitCode);
}

console.log("opcskill smoke ok");
