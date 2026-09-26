import React from 'react';

export type ChevronDirection = 'left' | 'right';

interface ChevronIconProps {
  /** Which way the chevron points. Defaults to `right`. */
  direction?: ChevronDirection;
  className?: string;
}

/**
 * Chevron icon used by the Pagination prev/next controls.
 *
 * The `d` attributes below are the path data exported from Figma
 * (Pagination > Pagination-Item > Icon > Vector). Both paths keep the
 * coordinate system of the exported 32×32 item, so the `viewBox` is
 * offset to frame the 16×16 icon box exactly. The left chevron is
 * shifted by 0.5px because that item's stroke is centre-aligned and
 * therefore bleeds outside its 32×32 bounds in the export.
 *
 * `fill="currentColor"` lets the icon inherit the surrounding text
 * colour, which is how Figma recolours it between Light and Dark modes.
 */
const PATHS: Record<ChevronDirection, string> = {
  left:
    'M18.765 21.235C18.8019 21.2694 18.8314 21.3108 18.8519 21.3568C18.8724 21.4028 ' +
    '18.8834 21.4524 18.8843 21.5028C18.8852 21.5531 18.876 21.6032 18.8571 21.6498C18.8382 ' +
    '21.6965 18.8102 21.739 18.7746 21.7746C18.7389 21.8102 18.6965 21.8382 18.6498 ' +
    '21.8571C18.6031 21.876 18.5531 21.8852 18.5028 21.8843C18.4524 21.8835 18.4028 ' +
    '21.8724 18.3568 21.8519C18.3108 21.8314 18.2694 21.8019 18.235 21.765L13.235 ' +
    '16.765C13.1648 16.6947 13.1254 16.5994 13.1254 16.5C13.1254 16.4007 13.1648 16.3054 ' +
    '13.235 16.235L18.235 11.235C18.3061 11.1688 18.4001 11.1327 18.4973 11.1345C18.5944 ' +
    '11.1362 18.6871 11.1755 18.7558 11.2442C18.8246 11.3129 18.8639 11.4056 18.8656 ' +
    '11.5028C18.8673 11.5999 18.8313 11.694 18.765 11.765L14.0307 16.5L18.765 21.235Z',
  right:
    'M19.265 16.265L14.265 21.265C14.194 21.3313 14.0999 21.3673 14.0028 21.3656C13.9056 ' +
    '21.3639 13.8129 21.3246 13.7442 21.2559C13.6755 21.1872 13.6362 21.0945 13.6345 ' +
    '20.9973C13.6327 20.9002 13.6688 20.8061 13.735 20.735L18.4694 16L13.735 11.265C13.6688 ' +
    '11.194 13.6327 11.0999 13.6345 11.0028C13.6362 10.9056 13.6755 10.8129 13.7442 ' +
    '10.7442C13.8129 10.6755 13.9056 10.6362 14.0028 10.6345C14.0999 10.6327 14.194 ' +
    '10.6688 14.265 10.735L19.265 15.735C19.3353 15.8054 19.3747 15.9007 19.3747 16C19.3747 ' +
    '16.0994 19.3353 16.1947 19.265 16.265Z',
};

const VIEWBOX: Record<ChevronDirection, string> = {
  left: '8.5 8.5 16 16',
  right: '8 8 16 16',
};

export const ChevronIcon: React.FC<ChevronIconProps> = ({ direction = 'right', className = '' }) => {
  return (
    <svg
      className={`chevron-icon ${className}`}
      viewBox={VIEWBOX[direction]}
      width={16}
      height={16}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d={PATHS[direction]} />
    </svg>
  );
};
