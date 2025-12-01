export function getBrightnessFromRGBA(rgbaArray: Uint8ClampedArray | number[]): number {
  let total = 0;
  for (let i = 0; i < rgbaArray.length; i += 4) {
    const r = rgbaArray[i];
    const g = rgbaArray[i + 1];
    const b = rgbaArray[i + 2];
    total += (r + g + b) / 3;
  }
  return total / (rgbaArray.length / 4) / 255;
}

