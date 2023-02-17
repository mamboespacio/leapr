import { CubeTextureLoader, LinearFilter, NearestFilter } from "three"; 
import { useThree } from "@react-three/fiber";

export default function SkyBox() {
    // highlight-start
    const { scene } = useThree();
    const loader = new CubeTextureLoader();
    // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
    const texture = loader.load([
      "/skybox/cubemap/nx.png",
      "/skybox/cubemap/px.png",
      "/skybox/cubemap/ny.png",
      "/skybox/cubemap/py.png",
      "/skybox/cubemap/nz.png",
      "/skybox/cubemap/pz.png",
    ]);
    console.log(texture)
    texture.minFilter = LinearFilter
    // Set the scene background property to the resulting texture.
    scene.background = texture;
    
    // highlight-end
    return null;
  }