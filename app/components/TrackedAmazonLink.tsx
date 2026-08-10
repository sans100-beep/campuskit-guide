'use client';

import { track } from '@vercel/analytics';

export default function TrackedAmazonLink({ product, placement = 'unknown', className = 'primary-button' }: { product: string; placement?: string; className?: string }) {
  const href = 'https://amzn.to/4zewrjd';
  const handleClick = () => {
    track('amazon_outbound_click', { product, placement });
  };
  return <a className={className} href={href} target="_blank" rel="nofollow sponsored noopener" onClick={handleClick}>View on Amazon <span>↗</span></a>;
}
