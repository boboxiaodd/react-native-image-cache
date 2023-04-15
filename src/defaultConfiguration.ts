import ReactNativeBlobUtil from 'react-native-blob-util';

export default {
  baseDir: `${ReactNativeBlobUtil.fs.dirs.CacheDir}/images_cache/`,
  blurRadius: 15,
  cacheLimit: 0,
  sourceAnimationDuration: 1000,
  thumbnailAnimationDuration: 1000,
};
