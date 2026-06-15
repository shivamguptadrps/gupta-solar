"use client";
import { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function SolarPanels({ count }: { count: number }) {
  const panels = useMemo(() => {
    const arr: { x: number; z: number }[] = [];
    const cols = 2;
    const rows = Math.ceil(count / cols);
    const pw = 1.25, pl = 0.78, gap = 0.12;
    const totalW = cols * pw + (cols - 1) * gap;
    const totalL = rows * pl + (rows - 1) * gap;
    let placed = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (placed >= count) break;
        arr.push({
          x: -totalW / 2 + pw / 2 + c * (pw + gap),
          z: -totalL / 2 + pl / 2 + r * (pl + gap),
        });
        placed++;
      }
    }
    return arr;
  }, [count]);

  return (
    <group position={[-1.45, 4.0, 0]} rotation={[0, 0, 0.62]}>
      {panels.map((p, i) => (
        <group key={i} position={[p.x, 0.16, p.z]}>
          <mesh castShadow>
            <boxGeometry args={[1.25, 0.06, 0.78]} />
            <meshStandardMaterial color="#1b2a3a" metalness={0.5} roughness={0.4} />
          </mesh>
          <mesh position={[0, 0.05, 0]}>
            <boxGeometry args={[1.12, 0.05, 0.67]} />
            <meshStandardMaterial
              color="#12386b"
              metalness={0.55}
              roughness={0.25}
              emissive="#0a1f3a"
              emissiveIntensity={0.3}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function House() {
  const wallMat = <meshStandardMaterial color="#f3e3c8" roughness={0.9} />;
  const triShape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(-3, 0); s.lineTo(3, 0); s.lineTo(0, 1.85); s.lineTo(-3, 0);
    return s;
  }, []);

  return (
    <group>
      {/* walls */}
      <mesh position={[0, 1.6, 0]} castShadow receiveShadow>
        <boxGeometry args={[6, 3.2, 5]} />
        {wallMat}
      </mesh>
      {/* door */}
      <mesh position={[0, 0.9, 2.52]}>
        <boxGeometry args={[1, 1.8, 0.1]} />
        <meshStandardMaterial color="#7a4a23" />
      </mesh>
      {/* windows */}
      {[-1.9, 1.9].map((x) => (
        <mesh key={x} position={[x, 1.9, 2.52]}>
          <boxGeometry args={[1, 1, 0.1]} />
          <meshStandardMaterial color="#8fd0e8" emissive="#2a4a55" emissiveIntensity={0.3} />
        </mesh>
      ))}
      {/* roof slopes */}
      <mesh position={[-1.45, 4.0, 0]} rotation={[0, 0, 0.62]} castShadow>
        <boxGeometry args={[3.6, 0.18, 5.4]} />
        <meshStandardMaterial color="#8a3b2a" roughness={0.85} />
      </mesh>
      <mesh position={[1.45, 4.0, 0]} rotation={[0, 0, -0.62]} castShadow>
        <boxGeometry args={[3.6, 0.18, 5.4]} />
        <meshStandardMaterial color="#8a3b2a" roughness={0.85} />
      </mesh>
      {/* gables */}
      {[2.7, -2.8].map((z) => (
        <mesh key={z} position={[0, 3.2, z]}>
          <extrudeGeometry args={[triShape, { depth: 0.1, bevelEnabled: false }]} />
          <meshStandardMaterial color="#f3e3c8" roughness={0.9} />
        </mesh>
      ))}
    </group>
  );
}

export default function House3D({ panels }: { panels: number }) {
  return (
    <Canvas
      shadows
      camera={{ position: [9, 6, 9], fov: 42 }}
      style={{ width: "100%", height: "100%" }}
    >
      <color attach="background" args={["#e9f6ff"]} />
      <fog attach="fog" args={["#e9f6ff", 18, 34]} />
      <ambientLight intensity={0.45} />
      <hemisphereLight args={["#bfe3f5", "#6b8f3a", 0.7]} />
      <directionalLight
        position={[6, 12, 5]}
        intensity={1.8}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      {/* sun */}
      <mesh position={[8, 9, 4]}>
        <sphereGeometry args={[0.9, 24, 24]} />
        <meshBasicMaterial color="#ffce5c" />
      </mesh>
      {/* ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <circleGeometry args={[16, 48]} />
        <meshStandardMaterial color="#9ccb6a" />
      </mesh>

      <House />
      <SolarPanels count={panels} />

      <ContactShadows position={[0, 0.01, 0]} opacity={0.35} scale={18} blur={2} />
      <OrbitControls
        enablePan={false}
        minDistance={7}
        maxDistance={18}
        minPolarAngle={0.2}
        maxPolarAngle={Math.PI / 2.1}
        target={[0, 2, 0]}
      />
    </Canvas>
  );
}
