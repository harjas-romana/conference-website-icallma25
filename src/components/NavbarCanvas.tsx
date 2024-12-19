import { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, Html } from '@react-three/drei';
import { Vector3 } from 'three';
import { useNavigate } from 'react-router-dom';
import { useFont } from './FontLoader';

interface MenuItem {
  text: string;
  path: string;
  submenu?: { text: string; path: string }[];
}

interface MenuItemProps {
  item: MenuItem;
  position: Vector3;
  onHover: (hovering: boolean, submenu?: MenuItem['submenu']) => void;
}

const MenuItem = ({ item, position, onHover }: MenuItemProps) => {
  const textRef = useRef<any>();
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.material.color.lerp(
        { r: hovered ? 1 : 0.8, g: hovered ? 1 : 0.8, b: hovered ? 1 : 0.8 },
        0.1
      );
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      position={position}
    >
      <Text
        ref={textRef}
        fontSize={0.3}
        maxWidth={2}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        anchorX="center"
        anchorY="middle"
        onClick={() => navigate(item.path)}
        onPointerOver={() => {
          setHovered(true);
          onHover(true, item.submenu);
        }}
        onPointerOut={() => {
          setHovered(false);
          onHover(false);
        }}
        color={hovered ? '#ffffff' : '#cccccc'}
      >
        {item.text}
        <meshStandardMaterial attach="material" />
      </Text>
    </Float>
  );
};

interface SubMenuProps {
  items?: MenuItem['submenu'];
  basePosition: Vector3;
  visible: boolean;
}

const SubMenu = ({ items, basePosition, visible }: SubMenuProps) => {
  const navigate = useNavigate();

  if (!items || !visible) return null;

  return (
    <>
      {items.map((item, index) => (
        <Float
          key={item.text}
          speed={2}
          rotationIntensity={0.5}
          floatIntensity={0.5}
          position={[basePosition.x, basePosition.y - (index + 1) * 0.4, basePosition.z]}
        >
          <Text
            fontSize={0.25}
            maxWidth={2}
            lineHeight={1}
            letterSpacing={0.02}
            textAlign="center"
            anchorX="center"
            anchorY="middle"
            onClick={() => navigate(item.path)}
            onPointerOver={(e) => {
              e.stopPropagation();
              (e.object as any).material.color.set('#ffffff');
            }}
            onPointerOut={(e) => {
              e.stopPropagation();
              (e.object as any).material.color.set('#cccccc');
            }}
            color="#cccccc"
          >
            {item.text}
            <meshStandardMaterial attach="material" />
          </Text>
        </Float>
      ))}
    </>
  );
};

const Scene = () => {
  const [activeSubmenu, setActiveSubmenu] = useState<{
    items?: MenuItem['submenu'];
    position?: Vector3;
  }>({});

  const menuItems: MenuItem[] = [
    { text: 'Home', path: '/' },
    { 
      text: 'Committee', 
      path: '/committee',
      submenu: [
        { text: 'Organizing Committee', path: '/committee/organizing' },
        { text: 'Technical Committee', path: '/committee/technical' },
        { text: 'Advisory Board', path: '/committee/advisory' }
      ]
    },
    { 
      text: 'Registration', 
      path: '/registration',
      submenu: [
        { text: 'Register Now', path: '/registration/register' },
        { text: 'Guidelines', path: '/registration/guidelines' },
        { text: 'Fees', path: '/registration/fees' }
      ]
    },
    { text: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {menuItems.map((item, index) => {
        const position = new Vector3(
          (index - (menuItems.length - 1) / 2) * 2,
          0,
          0
        );
        return (
          <MenuItem
            key={item.text}
            item={item}
            position={position}
            onHover={(hovering, submenu) => {
              if (hovering) {
                setActiveSubmenu({ items: submenu, position });
              } else {
                setActiveSubmenu({});
              }
            }}
          />
        );
      })}

      <SubMenu
        items={activeSubmenu.items}
        basePosition={activeSubmenu.position || new Vector3(0, 0, 0)}
        visible={!!activeSubmenu.items}
      />
    </>
  );
};

export const NavbarCanvas = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '60px',
        pointerEvents: 'auto',
        background: 'transparent'
      }}
      dpr={[1, 2]}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
};
