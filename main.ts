// News-image entry for Monday 23 November 2026 (Node 22, stdlib only).
// The front-page image was drawn for this competition and ships in this
// repository as entry.png. This program copies it, byte for byte, to the
// output directory the grader reads, so both graded runs produce the
// same bytes. The gate accepts one PNG or JPEG of at most 1 MiB and
// 1024 by 1024 pixels; the judge sees exactly these bytes. Nothing
// else is read: entry.png is the entry's only input file.
//
// Local check: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = new URL("./entry.png", import.meta.url);
copyFileSync(source, join(outDir, "entry.png"));
