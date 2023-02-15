import { CubeTextureLoader} from "three"; 
import { useThree } from "@react-three/fiber";

export default function SkyBox() {
    // highlight-start
    const { scene } = useThree();
    const loader = new CubeTextureLoader();
    // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
    const texture = loader.load([
      "/skybox/nigth/px.png",
      "/skybox/nigth/nx.png",
      "/skybox/nigth/py.png",
      "/skybox/nigth/ny.png",
      "/skybox/nigth/pz.png",
      "/skybox/nigth/nz.png",
    ]);
    console.log(texture)
    // Set the scene background property to the resulting texture.
    scene.background = texture;
    
    // highlight-end
    return null;
  }