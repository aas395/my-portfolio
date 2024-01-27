"use client";

import { Canvas, Vector3, useFrame } from "@react-three/fiber";
import { Box, OrbitControls, Stats } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { motion } from "framer-motion-3d";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { Button, Flex } from "@chakra-ui/react";
import throttle from "lodash-es/throttle";
import { MeshPhongMaterial, Vector2 } from "three";

export default function Page() {
  const [isClicked, setIsClicked] = useState(false);
  const [suzanneVariant, setSuzanneVariant] = useState("center");

  return (
    <>
      <Flex justifyContent="flex-end">
        <Button
          onClick={() => {
            setIsClicked(false);
          }}
        >
          Reset
        </Button>
      </Flex>
      <Canvas
        style={{ height: "100vh" }}
        onMouseMove={throttle((e) => {
          // const coord = new Vector2(e.pageX, e.pageY);
          // console.log(coord);
        })}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[0, 10, 0]} intensity={0.3} />
        <directionalLight position={[0, 0, -10]} intensity={0.7} />

        <Box
          scale={1}
          position={[0, 2, 0]}
          material={new MeshPhongMaterial({ color: "red" })}
          onClick={() => {
            setSuzanneVariant("top");
          }}
        />

        <Suzanne
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          variant={suzanneVariant}
        />
        <Stats />
        {/* <OrbitControls /> */}
      </Canvas>
    </>
  );
}

const Suzanne = ({
  isClicked,
  setIsClicked,
  variant,
}: {
  isClicked: boolean;
  setIsClicked: Dispatch<SetStateAction<boolean>>;
  variant: "top" | "bottom" | "left" | "right" | "center";
}) => {
  const suzanneRef = useRef();
  const gltf = useLoader(GLTFLoader, "/suzanne/suzanne.gltf");
  const turnedLeft = { rotateY: Math.PI / 2, x: -1 };

  useFrame(
    throttle(({ raycaster }) => {
      const newDirection = raycaster.ray.direction;
      newDirection.z =
        newDirection.z < 0 ? newDirection.z * -1 : newDirection.z;
      // suzanneRef.current?.lookAt(newDirection);
    }, 20)
  );

  return (
    <motion.primitive
      ref={(ref) => (suzanneRef.current = ref)}
      object={gltf.scene}
      variants={{
        top: {
          rotateX: -Math.PI / 4,
          rotateY: 0,
          rotateZ: 0,
        },
        bottom: {
          rotateX: Math.PI / 4,
          rotateY: 0,
          rotateZ: 0,
        },
        left: {
          rotateY: Math.PI / 2,
          rotateX: 0,
          rotateZ: 0,
        },
        right: {
          rotateY: -Math.PI / 2,
          rotateX: 0,
          rotateZ: 0,
        },
        center: {
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
        },
      }}
      animate={variant}
      initial={{
        rotateY: 0,
      }}
      transition={{
        ease: "circOut",
        duration: 0.33,
      }}
      onClick={(e) => {
        setIsClicked((prev) => !prev);
      }}
    />
  );
};
