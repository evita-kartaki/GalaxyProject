import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

interface PlanetProps {
  count?: number;
  radius?: number;
}

const ParticleSphere = ({ count = 9000, radius = 1.6 }: PlanetProps) => {
  const pointsRef = useRef<THREE.Points>(null);
  const ringRef = useRef<THREE.Points>(null);

  // Generate sphere particles with two-tone color (blue-cyan to orange)
  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const cyan = new THREE.Color("#22d3ee");
    const blue = new THREE.Color("#3b82f6");
    const orange = new THREE.Color("#ff8a1f");
    const yellow = new THREE.Color("#ffc857");

    for (let i = 0; i < count; i++) {
      // Uniform distribution on sphere
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = radius * (0.96 + Math.random() * 0.08);

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      // Color blends based on x position (left=cyan, right=orange)
      const t = (x / radius + 1) / 2; // 0..1
      const cool = cyan.clone().lerp(blue, Math.random() * 0.6);
      const warm = orange.clone().lerp(yellow, Math.random() * 0.6);
      const c = cool.lerp(warm, t);
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return { positions: pos, colors: col };
  }, [count, radius]);

  // Galaxy ring particles — spiral arms forming a disc around the planet
  const { ringPositions, ringColors } = useMemo(() => {
    const ringCount = 9000;
    const pos = new Float32Array(ringCount * 3);
    const col = new Float32Array(ringCount * 3);
    const orange = new THREE.Color("#ff8a1f");
    const yellow = new THREE.Color("#ffc857");
    const cyan = new THREE.Color("#22d3ee");
    const blue = new THREE.Color("#3b82f6");

    const innerR = radius * 1.55;
    const outerR = radius * 3.1;
    const arms = 3;
    const armSpread = 0.55;
    const twist = 4.5;

    for (let i = 0; i < ringCount; i++) {
      // Distance from center, biased toward outer for visible disc
      const t = Math.pow(Math.random(), 0.6);
      const r = innerR + (outerR - innerR) * t;

      // Spiral arm offset
      const arm = Math.floor(Math.random() * arms);
      const armAngle = (arm / arms) * Math.PI * 2;
      const spiral = (r - innerR) * twist;
      const scatter = (Math.random() - 0.5) * armSpread * (1 - t * 0.5);
      const angle = armAngle + spiral + scatter;

      // Thin disc with slight puffiness toward edges
      const thickness = (Math.random() - 0.5) * 0.08 * (1 + t);

      pos[i * 3] = Math.cos(angle) * r;
      pos[i * 3 + 1] = thickness;
      pos[i * 3 + 2] = Math.sin(angle) * r;

      // Color: warm core, cool outer
      const warm = orange.clone().lerp(yellow, Math.random());
      const cool = cyan.clone().lerp(blue, Math.random());
      const c = warm.clone().lerp(cool, t);
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return { ringPositions: pos, ringColors: col };
  }, [radius]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.15;
      // Mouse-driven tilt
      const { x, y } = state.mouse;
      pointsRef.current.rotation.x = THREE.MathUtils.lerp(
        pointsRef.current.rotation.x,
        -y * 0.4,
        0.05
      );
      pointsRef.current.rotation.z = THREE.MathUtils.lerp(
        pointsRef.current.rotation.z,
        x * 0.2,
        0.05
      );
    }
    if (ringRef.current) {
      ringRef.current.rotation.y -= delta * 0.06;
      ringRef.current.rotation.x = -1.05;
      ringRef.current.rotation.z = 0.25;
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.022}
          vertexColors
          transparent
          opacity={0.95}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <points ref={ringRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={ringPositions.length / 3}
            array={ringPositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={ringColors.length / 3}
            array={ringColors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.025}
          vertexColors
          transparent
          opacity={0.85}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
};

const ParticlePlanet = () => {
  return (
    <div className="w-[340px] sm:w-[460px] lg:w-[620px] aspect-square">
      <Canvas
        camera={{ position: [0, 1.4, 6], fov: 50 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <ParticleSphere />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ParticlePlanet;
