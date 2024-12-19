import { useLoader } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { extend } from '@react-three/fiber';

// Extend Three.js with TextGeometry
extend({ TextGeometry });

export const useFont = () => {
  const font = useLoader(
    FontLoader,
    'https://cdn.jsdelivr.net/npm/three/examples/fonts/helvetiker_bold.typeface.json'
  );
  return font;
};
