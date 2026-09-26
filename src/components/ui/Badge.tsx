import React from 'react';
import { AlertTriangleIcon } from './AlertTriangleIcon';

export type BadgeMode = 'light' | 'dark';

/**
 * Figma names this axis `State`, but the values are semantic tones rather
 * than interaction states — the set defines no hover/focus/active/disabled
 * variants, so Badge stays non-interactive.
 */
export type BadgeState =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger';

export type BadgeSize = 'big' | 'small';

interface BadgeProps {
  /** Label text (Figma text layer, e.g. "Your Text"). */
  children: React.ReactNode;
  /** Figma `State` variant. Rendered as `data-state`. Defaults to `primary`. */
  state?: BadgeState;
  /** Figma `Mode` variant. Rendered as `data-mode`. Defaults to `light`. */
  mode?: BadgeMode;
  /** Figma `Size` variant. Rendered as `data-size`. Defaults to `small`. */
  size?: BadgeSize;
  /** Figma shows the alert-triangle icon in all 28 variants. Defaults to `true`. */
  showIcon?: boolean;
  /**
   * Trailing token, mapped to the Figma "Percentage Symbol" text node.
   * Figma only defines that node on `Size=Small`, so it is opt-in and is
   * never rendered unless a value is supplied.
   */
  suffix?: React.ReactNode;
  className?: string;
}

/**
 * Badge — Figma component set `Badge` (10758:42148).
 *
 * Variants:
 *   Mode  = Light | Dark     -> `mode`  prop -> `data-mode`
 *   State = Primary | Secondary | Tertiary | Success | Info | Warning | Danger
 *                              -> `state` prop -> `data-state`
 *   Size  = Big | Small       -> `size`  prop -> `data-size`
 *                               (also drives icon 16/14 and the 14px/12px scale)
 *
 * 2 modes x 7 states x 2 sizes = 28 combinations, all produced from a single
 * DOM node: the three axes are exposed as data attributes and resolved by CSS
 * custom properties, so no per-variant markup or class explosion is needed.
 *
 * Layout: Figma auto-layout hugs contents in both axes, so this component has
 * intrinsic width. The `107px` width reported on every Figma variant is an
 * artifact of the "Your Text" placeholder and must not be hard-coded.
 *
 * Figma defines no interaction states for this set, so the root element is a
 * `<span>` rather than a `<button>`.
 */
export const Badge: React.FC<BadgeProps> = ({
  children,
  state = 'primary',
  mode = 'light',
  size = 'small',
  showIcon = true,
  suffix,
  className = '',
}) => {
  return (
    <span className={`badge ${className}`} data-mode={mode} data-state={state} data-size={size}>
      {showIcon && <AlertTriangleIcon size={size === 'big' ? 16 : 14} className="badge__icon" />}
      {children}
      {suffix != null && <span className="badge__suffix">{suffix}</span>}
    </span>
  );
};
