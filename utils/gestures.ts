export function isHandInsideCircle(landmarks: any[], cx: number, cy: number, r: number) {
  if (!landmarks || landmarks.length === 0) return false;

  const wrist = landmarks[0];
  const x = wrist.x * 360;
  const y = wrist.y * 640;

  const dx = x - cx;
  const dy = y - cy;
  return dx * dx + dy * dy <= r * r;
}

