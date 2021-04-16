/* eslint-disable sort-keys */
// NOTE: May want to eventually restrict to (screen) and customize for (print)

export type Breakpoint = 0 | 576 | 768 | 992 | 1200 | 1400 | 1600;

export interface BreakpointMap {
  xs: Breakpoint;
  sm: Breakpoint;
  md: Breakpoint;
  lg: Breakpoint;
  xl: Breakpoint;
  xxl: Breakpoint;
  xxl2: Breakpoint;
}

export const bp: BreakpointMap = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
  xxl2: 1600,
};

export const viewMaxWidth = {
  sm: '540px',
  md: '720px',
  lg: '960px',
  xl: '1140px',
  xxl: '1440px',
};

/* -------------------------------------------------------------------------- *
 * (min-width) typically Mobile-First — Mobile as Default
 * -------------------------------------------------------------------------- */

export const minMQ = (bp: number): string => `@media (min-width: ${bp}px)`;

export const atMinSm = minMQ(bp.sm);
export const atMinMd = minMQ(bp.md);
export const atMinLg = minMQ(bp.lg);
export const atMinXL = minMQ(bp.xl);
export const atMinXXL = minMQ(bp.xxl);
export const atMinXXL2 = minMQ(bp.xxl2);

/* -------------------------------------------------------------------------- *
 * (max-width) typically Desktop-First — Desktop as Default
 *
 * Work around limitations of min-max-prefixes with fractional values
 * https://www.w3.org/TR/mediaqueries-4/#mq-min-max
 * -------------------------------------------------------------------------- */

export const maxMQ = (bp: number): string =>
  `@media (max-width: ${bp - 0.02}px)`;

export const atMaxSm = maxMQ(bp.sm);
export const atMaxMd = maxMQ(bp.md);
export const atMaxLg = maxMQ(bp.lg);
export const atMaxXL = maxMQ(bp.xl);
export const atMaxXXL = maxMQ(bp.xxl);

/* -------------------------------------------------------------------------- *
 * Target Isolated Range
 * -------------------------------------------------------------------------- */

export const rangeMQ = (minBP: number, maxBP: number): string =>
  `@media (min-width: ${minBP}px) and (max-width: ${maxBP - 0.02}px)`;

export const onlyXs = atMaxSm;
export const onlySm = rangeMQ(bp.sm, bp.md);
export const onlyMd = rangeMQ(bp.md, bp.lg);
export const onlyLg = rangeMQ(bp.lg, bp.xl);
export const onlyXL = rangeMQ(bp.xl, bp.xxl);
export const onlyXXL = atMinXXL;
