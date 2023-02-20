import { EquirectangularReflectionMapping } from "three"; 
import { useThree } from "@react-three/fiber";
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'


export default function SkyBox() {
    // // highlight-start
    const state = useThree();
    // // const loader = new CubeTextureLoader();
    // let generator = new THREE.PMREMGenerator(renderer);
    // // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
    // const texture = loader.load([
    //   "/skybox/cubemap_color/-x.jpg",
    //   "/skybox/cubemap_color/+x.jpg",
    //   "/skybox/cubemap_color/-y.jpg",
    //   "/skybox/cubemap_color/+y.jpg",
    //   "/skybox/cubemap_color/-z.jpg",
    //   "/skybox/cubemap_color/+z.jpg",
    // ]);
    // texture.minFilter = LinearFilter
    // // Set the scene background property to the resulting texture.
    // state.scene.background = texture;

    // new RGBELoader()
    // .setPath('/skybox')
    // .load('leapr_skybox.hdr', function (texture) {

    //     texture.mapping = EquirectangularReflectionMapping;

    //     state.scene.background = texture;
    //     state.scene.environment = texture;

    // });
    
    // highlight-end
    return null;
  }