import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Environment } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { Suspense, useRef } from 'react';
import './Hero.css';

const ParticleField = () => {
  const ref = useRef<any>();
  const sphere = random.inSphere(new Float32Array(6000), { radius: 2.8 });

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#88ccff"
          size={0.012}
          sizeAttenuation={true}
          depthWrite={false}
          blending={2}
        />
      </Points>
    </group>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <ParticleField />
      <Environment preset="city" />
    </>
  );
};

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }} dpr={[1, 2]}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6 text-blue-400 font-bold tracking-wider"
        >
          WELCOME TO
        </motion.div>

        <motion.h1 
          className="hero-title text-5xl md:text-7xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.span 
            className="block mb-4 text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
          >
            1st International Conference on
          </motion.span>
          <motion.div 
            className="text-4xl md:text-6xl lg:text-7xl gradient-text-flow leading-tight"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
          >
            Advancements in Large Language Models
            <span className="block text-3xl md:text-4xl mt-4 text-blue-400">and Applications</span>
          </motion.div>
        </motion.h1>

        <motion.div
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <span className="text-blue-400 font-semibold">ICALLMA 2025</span> - Shaping the Future of AI Technology
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.a
            href="#register"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            Register Now
          </motion.a>
          <motion.a
            href="#learn-more"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent border-2 border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
          >
            Learn More
          </motion.a>
        </motion.div>

        {/* Conference Details */}
        <motion.div
          className="absolute bottom-8 left-0 right-0 flex justify-center gap-8 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="flex items-center gap-2">
            <i className="fas fa-calendar text-blue-400"></i>
            <span>April 1, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-map-marker-alt text-purple-400"></i>
            <span>Auditorium, VIT Bhopal University</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;