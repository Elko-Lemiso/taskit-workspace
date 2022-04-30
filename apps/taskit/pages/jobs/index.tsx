import { Title, Paper, Divider, Tabs, AspectRatio } from "@mantine/core";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { Photo, MessageCircle, Settings } from "tabler-icons-react";
import { FaHandSpock } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { RiChat3Fill } from "react-icons/ri";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Map } from "../../components/Map";
export function Index() {
  const router = useRouter();
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
    return window.removeEventListener("resize", handleResize, false);
  }, []);

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  console.log(dimensions);

  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 4;
  return (
    <motion.div
      transition={{ duration: 0.6 }}
      initial={{ opacity: 0, y: 66 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <AspectRatio ratio={dimensions.width / dimensions.height}>
        <Wrapper apiKey={"AIzaSyBJImqC3gYwXPgQWk60McH9s19zB97rThw"}>
          <Map center={center} zoom={zoom} />
        </Wrapper>
      </AspectRatio>
    </motion.div>
  );
}

export default Index;
