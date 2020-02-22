import { has, invoke, memoize, startsWith } from 'lodash';

const hasAll = (obj, paths = []) => paths.every(path => has(obj, path));

const renameKeys = (obj, pairs = []) =>
  pairs.reduce((result, [prevKey, nextKey]) => {
    const nextResult = { ...result, [nextKey]: result[prevKey] };
    delete nextResult[prevKey];
    return nextResult;
  }, obj);

const supportsWebp = memoize(() => {
  if (typeof window === 'undefined') return false;

  const el = invoke(window, 'document.createElement', 'canvas');
  const dataUrl = invoke(el, 'toDataURL', 'image/webp');

  return startsWith(dataUrl, 'data:image/webp');
});

export { hasAll, renameKeys, supportsWebp };
