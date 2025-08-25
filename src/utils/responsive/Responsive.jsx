// utils/Responsive.js
import { Dimensions, PixelRatio, Platform } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Base design dimensions (iPhone 11)
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

// Screen size categories
const isSmallScreen = SCREEN_WIDTH < 350;
const isLargeScreen = SCREEN_WIDTH > 600;
const isTablet = SCREEN_WIDTH >= 600 && SCREEN_HEIGHT >= 1000;

// Aspect ratio
const aspectRatio = SCREEN_WIDTH / SCREEN_HEIGHT;
const isTallScreen = aspectRatio < 0.56;
const isWideScreen = aspectRatio > 0.6;

// Base scaling functions (without moderation)
const baseWs = (size) => (SCREEN_WIDTH / guidelineBaseWidth) * size;
const baseHs = (size) => (SCREEN_HEIGHT / guidelineBaseHeight) * size;

// Width scaling with moderation
export const ws = (size) => {
  const scaledSize = baseWs(size);
  
  if (isTablet) {
    return size + (scaledSize - size) * 0.3;
  }
  
  return Platform.select({
    ios: scaledSize,
    android: size + (scaledSize - size) * 0.5,
  });
};

// Height scaling with moderation
export const hs = (size) => {
  const scaledSize = baseHs(size);
  
  if (isTallScreen) {
    return size + (scaledSize - size) * 0.7;
  }
  
  if (isWideScreen) {
    return size + (scaledSize - size) * 0.3;
  }
  
  return scaledSize;
};

// Font size scaling
export const fs = (size) => {
  const scaledSize = ws(size);
  
  if (isTablet) {
    return PixelRatio.roundToNearestPixel(scaledSize * 0.9);
  }
  
  if (Platform.OS === 'android') {
    return PixelRatio.roundToNearestPixel(scaledSize * 0.95);
  }
  
  return PixelRatio.roundToNearestPixel(scaledSize);
};

// Responsive spacing
export const rs = (size, direction = 'horizontal') => {
  return direction === 'horizontal' ? ws(size) : hs(size);
};

// Orientation handling
let isLandscape = SCREEN_WIDTH > SCREEN_HEIGHT;
const orientationListener = Dimensions.addEventListener('change', ({ window }) => {
  isLandscape = window.width > window.height;
});

// Export screen dimensions
export const SCREEN_DIMENSIONS = {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
  isSmallScreen,
  isLargeScreen,
  isTablet,
  isLandscape: () => isLandscape,
  removeOrientationListener: () => orientationListener?.remove(),
};