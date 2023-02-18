import { CubeTextureLoader, LinearFilter, NearestFilter } from "three"; 
import { useThree } from "@react-three/fiber";

export default function SkyBox() {
    // highlight-start
    const { scene } = useThree();
    const loader = new CubeTextureLoader();
    // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
    const texture = loader.load([
      "/skybox/cubemap_color/-x.jpg",
      "/skybox/cubemap_color/+x.jpg",
      "/skybox/cubemap_color/-y.jpg",
      "/skybox/cubemap_color/+y.jpg",
      "/skybox/cubemap_color/-z.jpg",
      "/skybox/cubemap_color/+z.jpg",
    ]);
    console.log(texture)
    texture.minFilter = LinearFilter
    // Set the scene background property to the resulting texture.
    scene.background = texture;
    
    // highlight-end
    return null;
  }