import { createImageUrlBuilder } from '@sanity/image-url';
import { sanityCdnClient } from './client';

const builder = createImageUrlBuilder(sanityCdnClient);

export function urlForImage(source: any) {
  if (!source) {
    return null;
  }
  return builder.image(source).auto('format').fit('max');
}
