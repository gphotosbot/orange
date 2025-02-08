import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/Addons.js";
import { useFrame, useLoader } from "@react-three/fiber";

const PARTICLE_COUNT = 100;

// Moved outside component to avoid recreating each render
const velocities = Array(PARTICLE_COUNT)
  .fill(null)
  .map(
    () =>
      new THREE.Vector3(
        (Math.random() - 0.5) * 0.015,
        -Math.random() * 0.02 - 0.01,
        (Math.random() - 0.5) * 0.015
      )
  );

// Create initial positions once outside component
const initialPositions = new Float32Array(PARTICLE_COUNT * 3);
for (let i = 0; i < PARTICLE_COUNT * 3; i += 3) {
  initialPositions[i] = (Math.random() - 0.5) * 10;
  initialPositions[i + 1] = Math.random() * 10 - 5;
  initialPositions[i + 2] = (Math.random() - 0.5) * 10;
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null);
  const [heartTexture, setHeartTexture] = useState<THREE.Texture | null>(null);

  // Load SVG using SVGLoader
  const svgData = useLoader(SVGLoader, "/image/heart.svg");

  useEffect(() => {
    if (!svgData) return;

    const scaleFactor = 4; // Increase resolution for sharpness
    const canvasSize = 128 * scaleFactor;

    const canvas = document.createElement("canvas");
    canvas.width = canvasSize;
    canvas.height = canvasSize;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.scale(scaleFactor, scaleFactor);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    // Draw SVG paths
    svgData.paths.forEach((path) => {
      const shapes = path.toShapes(true);
      shapes.forEach((shape) => {
        const path2D = new Path2D(
          shape
            .getPoints()
            .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
            .join(" ")
        );
        ctx.strokeStyle = "#990000";
        ctx.stroke(path2D);
      });
    });

    // Create sharp texture
    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.NearestFilter;
    texture.magFilter = THREE.NearestFilter;
    texture.anisotropy = 16; // Improves sharpness on supported GPUs
    texture.needsUpdate = true;

    setHeartTexture(texture);
  }, [svgData]);

  useFrame(() => {
    if (!particlesRef.current) return;

    const positions = (particlesRef.current.geometry as THREE.BufferGeometry)
      .attributes.position.array as Float32Array;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      const velocity = velocities[i];

      if (!velocity) continue;

      positions[i3] += velocity.x;
      positions[i3 + 1] += velocity.y;
      positions[i3 + 2] += velocity.z;

      if (positions[i3 + 1] < -5) {
        positions[i3 + 1] = 5;
        positions[i3] = (Math.random() - 0.5) * 10;
        positions[i3 + 2] = (Math.random() - 0.5) * 10;
        velocity.x = (Math.random() - 0.5) * 0.015;
        velocity.y = -Math.random() * 0.02 - 0.01;
        velocity.z = (Math.random() - 0.5) * 0.015;
      }
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach='attributes-position'
          count={PARTICLE_COUNT}
          array={initialPositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={3.236}
        map={heartTexture}
        transparent
        opacity={1}
        blending={THREE.AdditiveBlending}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </points>
  );
}

export default Particles;
