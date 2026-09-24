# Visual QA Skill

This skill provides a rigorous, inspection-first process for verifying the visual fidelity of implemented UI against Figma designs.

## Objective
Ensure the implemented UI aligns as closely as possible with the Figma design based on available Figma data and browser rendering, without introducing regressions.

## Workflow

### 1. Establish Visual Source of Truth
- Identify the exact Figma page and frame relevant to the current task.
- **Data Retrieval Strategy**:
  - First, check current conversation context, session history, or project memory for previously confirmed Figma measurements or node information.
  - If existing data is sufficient, reuse it and label it as "Previously Confirmed Figma Data".
  - If fresh data is needed, use Figma MCP to inspect the target node and its children.
- Record measurements for:
  - **Layout**: Dimensions, alignment, distribution.
  - **Spacing**: Padding, margins, gaps between elements.
  - **Typography**: Font family, size, weight, line height, letter spacing, color.
  - **Styling**: Background colors, border widths/colors, border radius, shadows (blur, spread, offset, color).
  - **Assets**: Icon sizes and placements.
  - **States**: Hover, focus, active, and disabled styles.
  - **Responsive**: (Out of scope for current milestone)

### 2. Inspect Implementation
- Determine the correct command to run the application by inspecting `package.json` or project documentation.
- Launch the application and use browser developer tools or Playwright tooling to inspect the rendered DOM.
- Capture actual measurements for the same properties recorded in Step 1.

### 3. Comparative Analysis
- Compare the Figma measurements (new or previously confirmed) against the implementation.
- Analyze shared components, shared styles, and design tokens used by both the target section and previously completed sections to identify regressions.
- Classify each check as:
  - **Confirmed Match**: Implementation aligns with Figma data.
  - **Confirmed Discrepancy**: Implementation differs from Figma data.
  - **Unable to Verify / Uncertain**: Value cannot be confirmed in either source (e.g., due to Figma MCP rate limits or missing design data).

### 4. Technical Validation
- Run `npm run lint` to ensure code quality.
- Run `npm run build` to verify production build stability.

### 5. Reporting
Produce a QA Report with the following structure:

#### Summary
- Overall status (e.g., PASS, PASS WITH MINOR ISSUES, FAIL).
- High-level overview of fidelity.
- **Note on Data Availability**: If Figma MCP was rate-limited, explicitly state which sections were verified using previously confirmed data and which were marked as "Unable to Verify".

#### Findings
List each confirmed discrepancy with:
- **Severity**: Critical (Broken layout), High (Significant visual mismatch), Medium (Noticeable polish issue), Low (Minor tweak).
- **Element**: The specific UI component/section.
- **Figma Value**: The expected value from Figma (note if previously confirmed).
- **Actual Value**: The rendered value from the browser.
- **Description**: The nature of the mismatch.

#### Matching Areas
- List key areas where the implementation is a confirmed match with the design.

#### Responsive Results
- **Responsive Behavior**: Out of scope for this milestone.

#### Regression Results
- Results of the analysis on shared components, styles, and tokens.

#### Validation Results
- Linting and Build status.

#### Recommended Next Actions
- Prioritized list of fixes based on severity. (Do not include responsive changes unless explicitly requested).

## Guardrails
- **Strict Inspection-Only**: Do NOT modify source files or fix issues during the initial QA pass. Complete the full QA report first. Fixes must occur in a separate step after the report is reviewed.
- **Resilience to Rate Limits**: If Figma MCP is rate-limited, do not abandon the QA run. Continue with all possible verification using previously confirmed data, browser inspection, regression checks, and technical validation.
- **No Guessing**: Never invent Figma values. If a value is missing or inaccessible due to rate limits, mark it as "Unable to Verify / Uncertain".
- **No Commits**: Do not commit or push changes as part of this skill.
- **Evidence-Based**: Use Figma and browser measurements as primary evidence. Use screenshots only as supplementary support.
- **Focus**: This skill is exclusively for visual QA. It is not an implementation or code-generation workflow.
