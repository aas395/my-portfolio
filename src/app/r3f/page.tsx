"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";
import { useEffect, useRef, useState } from "react";
import { Vector3, Vector3Tuple } from "three";
import { Gltf, OrbitControls, Plane, Stats } from "@react-three/drei";
import { Reflector, Text, useTexture } from "@react-three/drei";
import * as THREE from "three";

import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Page() {
  const gltf = useLoader(GLTFLoader, "/suzanne/suzanne.gltf");

  return (
    <Canvas style={{ height: "100vh" }}>
      <ambientLight intensity={0.5} />
      {/* <spotLight position={[0, 10, 0]} intensity={0.3} /> */}
      <directionalLight position={[-50, 0, -40]} intensity={0.7} />

      {/* <color attach="background" args={["black"]} />
      <fog attach="fog" args={["black", 15, 20]} /> */}
      <primitive object={gltf.scene} />

      {/* 
      <group position={[0, -1, 0]}>
        <VideoText position={[0, 2.3, -5]} />
        <Ground />
      </group> */}

      <Stats />
      <OrbitControls />
    </Canvas>
  );
}

const BoxGroup = ({ boxScale }: { boxScale: number }) => {
  const ref = useRef(null);
  const [clicked, click] = useState(false);
  const startingDistance = 0.1;
  const positionPlusDistance = startingDistance + boxScale;

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta * 0.5));

  return (
    <animated.group
      rotation={[0, 0, 1]}
      ref={ref}
      scale={boxScale}
      onClick={() => click(!clicked)}
    >
      <Box
        position={[0, 0, 0]}
        isExpanded={false}
        scale={boxScale}
        isTransparent
        opacity={0}
        color="transparent"
      />
      <Box
        position={[positionPlusDistance, 0, 0]}
        isExpanded={clicked}
        scale={boxScale}
      />
      <Box
        position={[0, 0, -positionPlusDistance]}
        isExpanded={clicked}
        scale={boxScale}
      />
      <Box
        position={[0, 0, positionPlusDistance]}
        isExpanded={clicked}
        scale={boxScale}
      />
      <Box
        position={[0, positionPlusDistance, 0]}
        isExpanded={clicked}
        scale={boxScale}
      />
      <Box
        position={[0, -positionPlusDistance, 0]}
        isExpanded={clicked}
        scale={boxScale}
      />
      <Box
        position={[-positionPlusDistance, 0, 0]}
        isExpanded={clicked}
        scale={boxScale}
      />
    </animated.group>
  );
};

function Box({
  position,
  isExpanded,
  scale,
  color = "red",
  isTransparent = false,
  opacity = 1,
  ...props
}: {
  position: Vector3 | Vector3Tuple;
  isExpanded: boolean;
  scale: number;
  color?: string;
  isTransparent?: boolean;
  opacity?: number;
}) {
  const startingDistance = scale * 0.1;
  const expandedDistance = scale * 0.6;

  const positionVector = Array.isArray(position)
    ? new Vector3(...position)
    : position;

  const distance = isExpanded ? expandedDistance : startingDistance;

  const getNewPositionValue = (value: number, distance: number): number => {
    if (value < 0) return value - distance;
    if (value > 0) return value + distance;
    return 0;
  };

  const { currentPosition } = useSpring<{ currentPosition: Vector3Tuple }>({
    currentPosition: [
      isExpanded
        ? getNewPositionValue(positionVector.x, distance)
        : positionVector.x,
      isExpanded
        ? getNewPositionValue(positionVector.y, distance)
        : positionVector.y,
      isExpanded
        ? getNewPositionValue(positionVector.z, distance)
        : positionVector.z,
    ],
  });

  return (
    <animated.mesh {...props} position={currentPosition} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      {!isTransparent && <meshStandardMaterial color={color} />}
      {isTransparent && (
        <meshPhongMaterial color={"#fff"} opacity={opacity} transparent />
      )}
    </animated.mesh>
  );
}

function Ground() {
  const [floor, normal] = useTexture([
    "/SurfaceImperfections003_1K_var1.jpg",
    "/SurfaceImperfections003_1K_Normal.jpg",
  ]);
  return (
    <Reflector
      blur={[400, 100]}
      resolution={512}
      args={[10, 10]}
      mirror={0.5}
      mixBlur={6}
      mixStrength={1.5}
      rotation={[-Math.PI / 2, 0, Math.PI / 2]}
    >
      {(Material, props) => (
        <Material
          color="#a0a0a0"
          metalness={0.4}
          roughnessMap={floor}
          normalMap={normal}
          normalScale={[2, 2]}
          {...props}
        />
      )}
    </Reflector>
  );
}

function VideoText(props) {
  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      src: "/Trimmed Plant.mp4",
      crossOrigin: "Anonymous",
      loop: true,
      muted: true,
    })
  );
  useEffect(() => void video.play(), [video]);
  return (
    // <Text fontSize={3} letterSpacing={-0.02} {...props}>
    // Aaron Smyth
    <Plane args={[5, 5]} position={[0, 0, -10]}>
      <meshPhongMaterial toneMapped={false} opacity={0.5} transparent>
        <videoTexture
          attach="map"
          args={[video]}
          encoding={THREE.sRGBEncoding}
        />
      </meshPhongMaterial>
    </Plane>
    // </Text>
  );
}
