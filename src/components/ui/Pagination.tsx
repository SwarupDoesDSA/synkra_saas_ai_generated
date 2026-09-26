import React from 'react';
import { ChevronIcon } from './ChevronIcon';

export type PaginationMode = 'light' | 'dark';

interface PaginationRange {
  /** First record shown on the current page. */
  start: number;
  /** Last record shown on the current page. */
  end: number;
  /** Total number of records. */
  total: number;
}

interface PaginationProps {
  /** Figma `Mode` variant. Rendered as `data-mode`. Defaults to `light`. */
  mode?: PaginationMode;
  /** Current page number shown in the joined prev/current cell. */
  page?: number;
  /** Page count shown in the standalone total cell. */
  totalPages?: number;
  /** Data range summarised on the left of the component. */
  range?: PaginationRange;
  onPrevPage?: () => void;
  onNextPage?: () => void;
  className?: string;
}

/**
 * Pagination — Figma component set `Pagination` (15240:9016).
 *
 * Variants:
 *   Mode      = Light | Dark          -> `mode` prop -> `data-mode` attribute
 *   Breakpoint = Dekstop | Mobile     -> CSS only, single DOM node
 *               (mobile below 768px, Figma only specifies 402 / 1152 widths)
 */
export const Pagination: React.FC<PaginationProps> = ({
  mode = 'light',
  page = 1,
  totalPages = 1,
  range = { start: 1, end: 1, total: 1 },
  onPrevPage,
  onNextPage,
  className = '',
}) => {
  return (
    <nav className={`pagination ${className}`} data-mode={mode} aria-label="Pagination">
      <p className="pagination__summary">
        <span>Shows</span>{' '}
        <strong>{range.start}</strong>{' '}
        <span>to</span>{' '}
        <strong>{range.end}</strong>{' '}
        <span>from</span>{' '}
        <strong>{range.total}</strong>{' '}
        <span>data</span>
      </p>

      <div className="pagination__controls">
        <span className="pagination__label">Page</span>

        <span className="pagination__page-group">
          <button
            type="button"
            className="pagination__item pagination__item--prev"
            onClick={onPrevPage}
            aria-label="Previous page"
          >
            <ChevronIcon direction="left" />
          </button>
          <span className="pagination__item pagination__item--current" aria-current="page">
            {page}
          </span>
        </span>

        <span className="pagination__label">of</span>
        <span className="pagination__item pagination__item--total">{totalPages}</span>
        <span className="pagination__label">pages</span>

        <button
          type="button"
          className="pagination__item pagination__item--next"
          onClick={onNextPage}
          aria-label="Next page"
        >
          <ChevronIcon direction="right" />
        </button>
      </div>
    </nav>
  );
};
