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
  "references/skill-collaboration-map.md",
  "references/learning-loop.md",
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
const collaborationMap = readText("references/skill-collaboration-map.md");
const learningLoop = readText("references/learning-loop.md");
const example = readText("examples/dialogue-asset-example.md");
const htmlCase = readText("examples/opcskill-collaboration-case.html");
const cases = JSON.parse(readText("tests/trigger-cases.json"));
const packageJson = JSON.parse(readText("package.json"));

assert(/^---\n[\s\S]*?name:\s*opcskill[\s\S]*?description:/m.test(skill), "SKILL.md has opcskill frontmatter");
assert(skill.includes("Human Decision Gate"), "SKILL.md includes Human Decision Gate");
assert(skill.includes("Reference Router"), "SKILL.md includes Reference Router");
assert(skill.includes("model_proposal"), "SKILL.md separates model proposals");
assert(skill.includes("Do not batch-read references"), "SKILL.md forbids batch reference loading");

for (const reference of [
  "references/human-decision-gate.md",
  "references/asset-schema.md",
  "references/skill-collaboration-map.md",
  "references/learning-loop.md",
]) {
  assert(skill.includes(reference), `SKILL.md routes ${reference}`);
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

for (const asset of ["Decision Ledger", "Prompt Card", "Task Packet", "Knowledge Note", "Next-Run Bootstrap"]) {
  assert(assetSchema.includes(asset), `asset schema includes ${asset}`);
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
assert(htmlCase.includes("OPCSkill Collaboration Case"), "HTML case has expected title");
assert(htmlCase.includes("AI 的回答可以重来，人的判断不能丢"), "HTML case includes slogan");
assert(htmlCase.includes("claude-code-html-skill"), "HTML case shows HTML skill collaboration");
assert(htmlCase.includes("Markdown 是长期真源"), "HTML case keeps Markdown as source of truth");
assert(!/https?:\/\/|<script\s+src=|<link\s+rel=/i.test(htmlCase), "HTML case is offline self-contained");

assert(Array.isArray(cases.should_trigger), "trigger cases include should_trigger");
assert(Array.isArray(cases.should_not_trigger), "trigger cases include should_not_trigger");
assert(cases.should_trigger.length >= 3, "at least three should-trigger cases");
assert(cases.should_not_trigger.length >= 3, "at least three should-not-trigger cases");

assert(packageJson.scripts?.smoke === "node scripts/smoke.mjs", "package.json exposes smoke");

if (process.exitCode) {
  process.exit(process.exitCode);
}

console.log("opcskill smoke ok");
