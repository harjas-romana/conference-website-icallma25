declare module 'maath/random/dist/maath-random.esm' {
  export function inSphere(array: Float32Array, options?: { radius?: number }): Float32Array;
  export function onSphere(array: Float32Array, options?: { radius?: number }): Float32Array;
  export function inBox(array: Float32Array, options?: { sides?: [number, number, number] }): Float32Array;
  export function onBox(array: Float32Array, options?: { sides?: [number, number, number] }): Float32Array;
  export function inCircle(array: Float32Array, options?: { radius?: number }): Float32Array;
  export function onCircle(array: Float32Array, options?: { radius?: number }): Float32Array;
  export function inRect(array: Float32Array, options?: { sides?: [number, number] }): Float32Array;
  export function onRect(array: Float32Array, options?: { sides?: [number, number] }): Float32Array;
}
