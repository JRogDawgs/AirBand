export function extractHandRegion(
  rgba: Uint8ClampedArray,
  width: number,
  height: number
) {
  // Placeholder for now: return middle portion of the frame
  const start = (width * height * 4) / 4;
  const end = (width * height * 4) / 2;
  return rgba.slice(start, end);
}

