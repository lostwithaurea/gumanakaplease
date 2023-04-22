import '../css/model.css';
import "../css/model.sass";
import React, {Suspense, useRef, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import {OrbitControls, useGLTF} from "@react-three/drei";
import { useNavigate } from 'react-router-dom';

export function Model(props) {
  const { nodes, materials } = useGLTF('/model2.gltf')
   
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.root.geometry} material={materials['default material']} position={[-33.88, 0, 0.5]}>
        <mesh geometry={nodes.Mesh_12.geometry} material={materials['[Color_008]4']} />
        <mesh geometry={nodes.Mesh_13.geometry} material={materials['[Color_008]4']} />
        <mesh geometry={nodes.Mesh_11.geometry} material={materials['WOOD DOOR 1']} />
        <mesh geometry={nodes.sdnybstrrty.geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes.sdnybstrrty001.geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes.Mesh_195.geometry} material={materials['[Color_008]4']} />
        <mesh geometry={nodes.Mesh_196.geometry} material={materials['[Color_008]4']} />
        <mesh geometry={nodes.Mesh_194.geometry} material={materials['WOOD DOOR 1']} />
        <mesh geometry={nodes.sdnybstrrty002.geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes.sdnybstrrty003.geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes.Mesh_289.geometry} material={materials['[Color_008]4']} />
        <mesh geometry={nodes.Mesh_290.geometry} material={materials['[Color_008]4']} />
        <mesh geometry={nodes.Mesh_288.geometry} material={materials['WOOD DOOR 1']} />
        <mesh geometry={nodes.sdnybstrrty004.geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes.sdnybstrrty005.geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes.Mesh_596.geometry} material={materials['[Color_008]4']} />
        <mesh geometry={nodes.Mesh_597.geometry} material={materials['[Color_008]4']} />
        <mesh geometry={nodes.Mesh_595.geometry} material={materials['WOOD DOOR 1']} />
        <mesh geometry={nodes.sdnybstrrty006.geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes.sdnybstrrty007.geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes.Mesh_243.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_244.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_245_1.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_245_2.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_246_1.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_246_2.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_250.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_251.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_252_1.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_252_2.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_253_1.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_253_2.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_256.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_256_1.geometry} material={materials['Fencing Lattice Natural']} />
        <mesh geometry={nodes.Mesh_256_2.geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes.Mesh_247.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_248.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_249.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_254.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_255.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_257.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_258.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_259_1.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_259_2.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_260_1.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_260_2.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_264.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_265.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_266_1.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_266_2.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_267_1.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_267_2.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_270.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_270_1.geometry} material={materials['Fencing Lattice Natural']} />
        <mesh geometry={nodes.Mesh_270_2.geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes.Mesh_261.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_262.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_263.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_268.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_269.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_271.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_272.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_273_1.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_273_2.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_274_1.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_274_2.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_278.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_279.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_280_1.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_280_2.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_281_1.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_281_2.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_284.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_284_1.geometry} material={materials['Fencing Lattice Natural']} />
        <mesh geometry={nodes.Mesh_284_2.geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes.Mesh_275.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_276.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_277.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_282.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_283.geometry} material={materials['[Wood Veneer 02]1']} />
        <mesh geometry={nodes.Mesh_303_1.geometry} material={materials['[Metal_Aluminum_Anodized]5']} />
        <mesh geometry={nodes.Mesh_303_2.geometry} material={materials.Color_003} />
        <mesh geometry={nodes.Mesh_304.geometry} material={materials['[Metal_Aluminum_Anodized]5']} />
        <mesh geometry={nodes.Mesh_306.geometry} material={materials['[Metal_Aluminum_Anodized]5']}>
          <mesh geometry={nodes.Mesh_305.geometry} material={materials['[Metal_Aluminum_Anodized]5']} />
        </mesh>
        <mesh geometry={nodes.Mesh_307.geometry} material={materials['[Metal_Aluminum_Anodized]5']} />
        <mesh geometry={nodes.Mesh_308.geometry} material={materials['[Metal_Aluminum_Anodized]5']} />
        <mesh geometry={nodes.Mesh_309.geometry} material={materials['[Metal_Aluminum_Anodized]5']} />
        <mesh geometry={nodes.Mesh_310.geometry} material={materials['[Metal_Aluminum_Anodized]5']} />
        <mesh geometry={nodes.Mesh_311.geometry} material={materials['[Metal_Aluminum_Anodized]5']} />
        <mesh geometry={nodes.Mesh_312.geometry} material={materials['[Metal_Aluminum_Anodized]5']} />
        <mesh geometry={nodes.Mesh_313_1.geometry} material={materials['[Metal_Aluminum_Anodized]5']} />
        <mesh geometry={nodes.Mesh_313_2.geometry} material={materials.Color_001} />
        <mesh geometry={nodes.Mesh_314.geometry} material={materials['[Metal_Aluminum_Anodized]5']} />
        <mesh geometry={nodes.Mesh_315.geometry} material={materials['[Metal_Aluminum_Anodized]5']} />
        <mesh geometry={nodes.Mesh_316.geometry} material={materials['[Metal_Aluminum_Anodized]5']} />
        <mesh geometry={nodes.Mesh_121.geometry} material={materials['CLEAR GLASS']} />
        <mesh geometry={nodes.Mesh_121_1.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_118.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_119.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_120.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_125.geometry} material={materials['CLEAR GLASS']} />
        <mesh geometry={nodes.Mesh_125_1.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_122.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_123.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_124.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_129.geometry} material={materials['CLEAR GLASS']} />
        <mesh geometry={nodes.Mesh_129_1.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_126.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_127.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_128.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_133.geometry} material={materials['CLEAR GLASS']} />
        <mesh geometry={nodes.Mesh_133_1.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_130.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_131.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_132.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_137.geometry} material={materials['CLEAR GLASS']} />
        <mesh geometry={nodes.Mesh_137_1.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_134.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_135.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_136.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_141.geometry} material={materials['CLEAR GLASS']} />
        <mesh geometry={nodes.Mesh_141_1.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_138.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_139.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_140.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_146.geometry} material={materials['CLEAR GLASS']} />
        <mesh geometry={nodes.Mesh_146_1.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_143.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_144.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_145.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_150.geometry} material={materials['CLEAR GLASS']} />
        <mesh geometry={nodes.Mesh_150_1.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_147.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_148.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_149.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_142.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_14.geometry} material={materials['interior']}material-color={props.customColors.interior} />
        <mesh geometry={nodes.Mesh_15.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes.Mesh_151.geometry} material={materials['DARK GRAY WALL']} />
        <mesh geometry={nodes['Component#13'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13001'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13002'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13003'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13004'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13005'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13006'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13007'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13008'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13009'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13010'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13011'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13012'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13013'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13014'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13015'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13016'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13017'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13018'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13019'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13020'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13021'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13022'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13023'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13024'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13025'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13026'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13027'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13028'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13029'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13030'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13031'].geometry} material={materials['WINDOW FRAME 1']} position={[0, 0, 0.07]} />
        <mesh geometry={nodes['Component#13032'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13033'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13034'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13035'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13036'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13037'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13038'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_19.geometry} material={materials['CLEAR GLASS']} />
        <mesh geometry={nodes.Mesh_19_1.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_16.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_17.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_18.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_23.geometry} material={materials['CLEAR GLASS']} />
        <mesh geometry={nodes.Mesh_23_1.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_20.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_21.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_22.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_27.geometry} material={materials['CLEAR GLASS']} />
        <mesh geometry={nodes.Mesh_27_1.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_24.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_25.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_26.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_31.geometry} material={materials['CLEAR GLASS']} />
        <mesh geometry={nodes.Mesh_31_1.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_28.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_29.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_30.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_35.geometry} material={materials['CLEAR GLASS']} />
        <mesh geometry={nodes.Mesh_35_1.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_32.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_33.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_34.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_39.geometry} material={materials['CLEAR GLASS']} />
        <mesh geometry={nodes.Mesh_39_1.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_36.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_37.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_38.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_40.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_197.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes.Mesh_198.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes.Mesh_199.geometry} material={materials['interior']}material-color={props.customColors.interior} />
        <mesh geometry={nodes.Mesh_200.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes.Mesh_201_1.geometry} material={materials['tile']} material-color={props.customColors.tile}/>
        <mesh geometry={nodes.Mesh_201_2.geometry} material={materials['tile']} material-color={props.customColors.tile}/>
        <mesh geometry={nodes.Mesh_201_3.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes.Mesh_201_4.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_202.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes.Mesh_203.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes.Mesh_204.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes.Mesh_205_1.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes.Mesh_205_2.geometry} material={materials['Tile Various Tan']} />
        <mesh geometry={nodes.Mesh_206.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes.Mesh_207.geometry} material={materials['interior']}material-color={props.customColors.interior} />
        <mesh geometry={nodes.Mesh_208.geometry} material={materials['interior']}material-color={props.customColors.interior} />
        <mesh geometry={nodes.Mesh_209.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes.Mesh_210.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes['wood_slat_1#1'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1001'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1002'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1003'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1004'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1005'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1006'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1007'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1008'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1009'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1010'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1011'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1012'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1013'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1014'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1015'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1016'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1017'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1018'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1019'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1020'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1021'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1022'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1023'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1024'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1025'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1026'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes.Mesh_240.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_241.geometry} material={materials['Black Granite']} />
        <mesh geometry={nodes.Mesh_322.geometry} material={materials['CLEAR GLASS']} />
        <mesh geometry={nodes.Mesh_322_1.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_319.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_320.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_321.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_326.geometry} material={materials['CLEAR GLASS']} />
        <mesh geometry={nodes.Mesh_326_1.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_323.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_324.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_325.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_330.geometry} material={materials['CLEAR GLASS']} />
        <mesh geometry={nodes.Mesh_330_1.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_327.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_328.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_329.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_334.geometry} material={materials['CLEAR GLASS']} />
        <mesh geometry={nodes.Mesh_334_1.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_331.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_332.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_333.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_335.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_354.geometry} material={materials.Material42} />
        <mesh geometry={nodes.Mesh_355.geometry} material={materials.Material42} />
        <mesh geometry={nodes['Group#120'].geometry} material={materials.Color_C06} />
        <mesh geometry={nodes['Group#121'].geometry} material={materials.Material58} />
        <mesh geometry={nodes['Group#120001'].geometry} material={materials.Color_C06} />
        <mesh geometry={nodes['Group#121001'].geometry} material={materials.Material58} />
        <mesh geometry={nodes['Group#120002'].geometry} material={materials.Color_C06} />
        <mesh geometry={nodes['Group#121002'].geometry} material={materials.Material58} />
        <mesh geometry={nodes['Group#120003'].geometry} material={materials.Color_C06} />
        <mesh geometry={nodes['Group#121003'].geometry} material={materials.Material58} />
        <mesh geometry={nodes['Group#120004'].geometry} material={materials.Color_C06} />
        <mesh geometry={nodes['Group#121004'].geometry} material={materials.Material58} />
        <mesh geometry={nodes['Group#120005'].geometry} material={materials.Color_C06} />
        <mesh geometry={nodes['Group#121005'].geometry} material={materials.Material58} />
        <mesh geometry={nodes['Group#209'].geometry} material={materials['default material']}>
          <mesh geometry={nodes.Mesh_336_1.geometry} material={materials['<Glass Sky Reflection>']} />
          <mesh geometry={nodes.Mesh_336_2.geometry} material={materials['<Seashell>']} />
          <mesh geometry={nodes.Mesh_336_3.geometry} material={materials['<Dark Green Glass>']} />
          <mesh geometry={nodes.Mesh_340.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_340_1.geometry} material={materials['<Silver>']} />
          <mesh geometry={nodes.Knife.geometry} material={materials['<LightGray>']} />
          <mesh geometry={nodes.Mesh_339.geometry} material={materials['<Khaki>1']} />
          <mesh geometry={nodes.Spoon.geometry} material={materials['<LightGray>']} />
        </mesh>
        <mesh geometry={nodes['Group#209001'].geometry} material={materials['default material']}>
          <mesh geometry={nodes.Mesh_342_1.geometry} material={materials['<Glass Sky Reflection>']} />
          <mesh geometry={nodes.Mesh_342_2.geometry} material={materials['<Seashell>']} />
          <mesh geometry={nodes.Mesh_342_3.geometry} material={materials['<Dark Green Glass>']} />
          <mesh geometry={nodes.Mesh_346.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_346_1.geometry} material={materials['<Silver>']} />
          <mesh geometry={nodes.Knife001.geometry} material={materials['<LightGray>']} />
          <mesh geometry={nodes.Mesh_345.geometry} material={materials['<Khaki>1']} />
          <mesh geometry={nodes.Spoon001.geometry} material={materials['<LightGray>']} />
        </mesh>
        <mesh geometry={nodes['Group#209002'].geometry} material={materials['default material']}>
          <mesh geometry={nodes.Mesh_348_1.geometry} material={materials['<Glass Sky Reflection>']} />
          <mesh geometry={nodes.Mesh_348_2.geometry} material={materials['<Seashell>']} />
          <mesh geometry={nodes.Mesh_348_3.geometry} material={materials['<Dark Green Glass>']} />
          <mesh geometry={nodes.Mesh_352.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_352_1.geometry} material={materials['<Silver>']} />
          <mesh geometry={nodes.Knife002.geometry} material={materials['<LightGray>']} />
          <mesh geometry={nodes.Mesh_351.geometry} material={materials['<Khaki>1']} />
          <mesh geometry={nodes.Spoon002.geometry} material={materials['<LightGray>']} />
        </mesh>
        <mesh geometry={nodes['Group#209003'].geometry} material={materials['default material']}>
          <mesh geometry={nodes.Mesh_368_1.geometry} material={materials['<Glass Sky Reflection>']} />
          <mesh geometry={nodes.Mesh_368_2.geometry} material={materials['<Seashell>']} />
          <mesh geometry={nodes.Mesh_368_3.geometry} material={materials['<Dark Green Glass>']} />
          <mesh geometry={nodes.Mesh_372.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_372_1.geometry} material={materials['<Silver>']} />
          <mesh geometry={nodes.Knife003.geometry} material={materials['<LightGray>']} />
          <mesh geometry={nodes.Mesh_371.geometry} material={materials['<Khaki>1']} />
          <mesh geometry={nodes.Spoon003.geometry} material={materials['<LightGray>']} />
        </mesh>
        <mesh geometry={nodes['Group#209004'].geometry} material={materials['default material']}>
          <mesh geometry={nodes.Mesh_374_1.geometry} material={materials['<Glass Sky Reflection>']} />
          <mesh geometry={nodes.Mesh_374_2.geometry} material={materials['<Seashell>']} />
          <mesh geometry={nodes.Mesh_374_3.geometry} material={materials['<Dark Green Glass>']} />
          <mesh geometry={nodes.Mesh_378.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_378_1.geometry} material={materials['<Silver>']} />
          <mesh geometry={nodes.Knife004.geometry} material={materials['<LightGray>']} />
          <mesh geometry={nodes.Mesh_377.geometry} material={materials['<Khaki>1']} />
          <mesh geometry={nodes.Spoon004.geometry} material={materials['<LightGray>']} />
        </mesh>
        <mesh geometry={nodes['Group#209005'].geometry} material={materials['default material']}>
          <mesh geometry={nodes.Mesh_380_1.geometry} material={materials['<Glass Sky Reflection>']} />
          <mesh geometry={nodes.Mesh_380_2.geometry} material={materials['<Seashell>']} />
          <mesh geometry={nodes.Mesh_380_3.geometry} material={materials['<Dark Green Glass>']} />
          <mesh geometry={nodes.Mesh_384.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_384_1.geometry} material={materials['<Silver>']} />
          <mesh geometry={nodes.Knife005.geometry} material={materials['<LightGray>']} />
          <mesh geometry={nodes.Mesh_383.geometry} material={materials['<Khaki>1']} />
          <mesh geometry={nodes.Spoon005.geometry} material={materials['<LightGray>']} />
        </mesh>
        <mesh geometry={nodes['Group#68'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68001'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68002'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68003'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68004'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68005'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68006'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68007'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68008'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68009'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68010'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68011'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68012'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68013'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68014'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68015'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68016'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68017'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68018'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68019'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68020'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68021'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68022'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68023'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68024'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68025'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68026'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68027'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68028'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68029'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68030'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68031'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68032'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68033'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68034'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68035'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68036'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68037'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68038'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68039'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68040'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68041'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68042'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68043'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68044'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68045'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68046'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68047'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68048'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68049'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68050'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68051'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68052'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68053'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68054'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68055'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68056'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68057'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68058'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68059'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68060'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68061'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68062'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68063'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68064'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68065'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68066'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68067'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68068'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68069'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68070'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68071'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68072'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68073'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68074'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68075'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68076'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68077'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68078'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68079'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68080'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68081'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68082'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68083'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68084'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68085'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68086'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68087'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68088'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68089'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68090'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68091'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68092'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68093'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68094'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68095'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68096'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68097'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68098'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68099'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68100'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68101'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68102'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68103'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68104'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68105'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68106'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68107'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68108'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68109'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68110'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68111'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68112'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68113'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68114'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68115'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68116'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68117'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68118'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68119'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68120'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68121'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68122'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68123'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68124'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68125'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68126'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68127'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68128'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68129'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68130'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68131'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68132'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68133'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68134'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68135'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68136'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68137'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68138'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68139'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68140'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68141'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68142'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68143'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68144'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68145'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68146'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68147'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68148'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68149'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68150'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68151'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68152'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68153'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68154'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68155'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68156'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68157'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68158'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68159'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68160'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68161'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68162'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68163'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68164'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68165'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68166'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68167'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68168'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68169'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68170'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68171'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68172'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68173'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68174'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68175'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68176'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68177'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68178'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68179'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68180'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68181'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68182'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68183'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68184'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68185'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68186'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68187'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68188'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68189'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68190'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68191'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68192'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68193'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68194'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68195'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68196'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68197'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68198'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#68199'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes.Mesh_45.geometry} material={materials['interior']}material-color={props.customColors.interior} />
        <mesh geometry={nodes.Mesh_46.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes.Mesh_47.geometry} material={materials['interior']}material-color={props.customColors.interior} />
        <mesh geometry={nodes.Mesh_48.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes.Mesh_49.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_50.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes.Mesh_51_1.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_51_2.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes.Mesh_52.geometry} material={materials['interior']}material-color={props.customColors.interior} />
        <mesh geometry={nodes.Mesh_53.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes.Mesh_54.geometry} material={materials['interior']}material-color={props.customColors.interior} />
        <mesh geometry={nodes.Mesh_55.geometry} material={materials['interior']}material-color={props.customColors.interior} />
        <mesh geometry={nodes.Mesh_56.geometry} material={materials['interior']}material-color={props.customColors.interior} />
        <mesh geometry={nodes.____.geometry} material={materials['curtain']} />
        <mesh geometry={nodes.____001.geometry} material={materials['curtain']} />
        <mesh geometry={nodes.Mesh_599.geometry} material={materials.Material3} />
        <mesh geometry={nodes.Mesh_599_1.geometry} material={materials._11wire_22022022} />
        <mesh geometry={nodes['_________5#1'].geometry} material={materials.Material3} />
        <mesh geometry={nodes.Mesh_602.geometry} material={materials['default material']} />
        <mesh geometry={nodes.____002.geometry} material={materials['curtain']} />
        <mesh geometry={nodes.____003.geometry} material={materials['curtain']} />
        <mesh geometry={nodes.Mesh_604.geometry} material={materials.Material3} />
        <mesh geometry={nodes.Mesh_604_1.geometry} material={materials._11wire_22022022} />
        <mesh geometry={nodes['_________5#1001'].geometry} material={materials.Material3} />
        <mesh geometry={nodes.Mesh_607.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#15028'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#15029'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#15030'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#15031'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#15032'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#15033'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#15034'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#15035'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#14'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#14001'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#14002'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#14003'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#14004'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#14005'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#14006'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#14007'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#14008'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#14009'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#14010'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#14011'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#14012'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#15'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#15001'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#15002'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#15003'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#15004'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#15005'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#15006'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#15007'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#15008'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#15009'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#15010'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#15011'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#15012'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#15013'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#15014'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#15015'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#15016'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#15017'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#15018'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#15019'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#15020'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#15021'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#15022'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#15023'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#15024'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#15025'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#15026'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#15027'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_61.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_62.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_99.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_623.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_624.geometry} material={materials['WOOD DOOR 1']} />
        <mesh geometry={nodes.Mesh_625.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_626.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_627.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_628.geometry} material={materials['WOOD DOOR 1']} />
        <mesh geometry={nodes.Mesh_629.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_630.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_635.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_636.geometry} material={materials['WOOD DOOR 1']} />
        <mesh geometry={nodes.Mesh_637.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_638.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_639.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_640.geometry} material={materials['WOOD DOOR 1']} />
        <mesh geometry={nodes.Mesh_641.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_642.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_647.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_648.geometry} material={materials['WOOD DOOR 1']} />
        <mesh geometry={nodes.Mesh_649.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_650.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_651.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_652.geometry} material={materials['WOOD DOOR 1']} />
        <mesh geometry={nodes.Mesh_653.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_654.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_655.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_656.geometry} material={materials['WOOD DOOR 1']} />
        <mesh geometry={nodes.Mesh_657.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_658.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_659.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_660.geometry} material={materials['WOOD DOOR 1']} />
        <mesh geometry={nodes.Mesh_661.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_662.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_663.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_664.geometry} material={materials['WOOD DOOR 1']} />
        <mesh geometry={nodes.Mesh_665.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_666.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_667.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_668.geometry} material={materials['WOOD DOOR 1']} />
        <mesh geometry={nodes.Mesh_669.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_670.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_671.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_672.geometry} material={materials['WOOD DOOR 1']} />
        <mesh geometry={nodes.Mesh_673.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_674.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_675.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_676.geometry} material={materials['WOOD DOOR 1']} />
        <mesh geometry={nodes.Mesh_677.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_678.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_679.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_680.geometry} material={materials['WOOD DOOR 1']} />
        <mesh geometry={nodes.Mesh_681.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_682.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_631.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_632.geometry} material={materials['WOOD DOOR 1']} />
        <mesh geometry={nodes.Mesh_633.geometry} material={materials['WOOD DOOR 1']} />
        <mesh geometry={nodes.Mesh_634.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_643.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_644.geometry} material={materials['WOOD DOOR 1']} />
        <mesh geometry={nodes.Mesh_645.geometry} material={materials['WOOD DOOR 1']} />
        <mesh geometry={nodes.Mesh_646.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#41'].geometry} material={materials['WOOD DOOR 1']} />
        <mesh geometry={nodes['Component#42'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#42001'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#43'].geometry} material={materials['WOOD DOOR 1']} />
        <mesh geometry={nodes['Component#44'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#44001'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_683.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_684.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_685.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.armchair__30___30_.geometry} material={materials['bank stof 1']} />
        <mesh geometry={nodes.Box055__30___30_.geometry} material={materials.Material__2} />
        <mesh geometry={nodes.Object001__30___30_.geometry} material={materials.Material__1} />
        <mesh geometry={nodes.armchair__30___30_001.geometry} material={materials['bank stof 1']} />
        <mesh geometry={nodes.Box055__30___30_001.geometry} material={materials.Material__2} />
        <mesh geometry={nodes.Object001__30___30_001.geometry} material={materials.Material__1} />
        <mesh geometry={nodes.Mesh_700.geometry} material={materials.Chrome_Polished} />
        <mesh geometry={nodes.Mesh_701_1.geometry} material={materials.Generic} />
        <mesh geometry={nodes.Mesh_701_2.geometry} material={materials.Generic1} />
        <mesh geometry={nodes.Mesh_702.geometry} material={materials.Chrome_Polished} />
        <mesh geometry={nodes.SAMSUNG.geometry} material={materials.Chrome_Polished} />
        <mesh geometry={nodes.Mesh_699.geometry} material={materials['WOOD DOOR 1']} />
        <mesh geometry={nodes.Mesh_704.geometry} material={materials['bank stof 1']} />
        <mesh geometry={nodes.Mesh_705.geometry} material={materials['bank stof 1']} />
        <mesh geometry={nodes['pillow-1'].geometry} material={materials['bank stof 1']} />
        <mesh geometry={nodes.Mesh_707.geometry} material={materials['bank stof 1']} />
        <mesh geometry={nodes.Mesh_708.geometry} material={materials['bank stof 1']} />
        <mesh geometry={nodes['pillow-back'].geometry} material={materials['bank stof 1']} />
        <mesh geometry={nodes.Mesh_710.geometry} material={materials['bank stof 1']} />
        <mesh geometry={nodes.Mesh_711.geometry} material={materials['bank stof 1']} />
        <mesh geometry={nodes['pillow-1001'].geometry} material={materials['bank stof 1']} />
        <mesh geometry={nodes.Mesh_713.geometry} material={materials['bank stof 1']} />
        <mesh geometry={nodes.Mesh_714.geometry} material={materials['bank stof 1']} />
        <mesh geometry={nodes['pillow-back001'].geometry} material={materials['bank stof 1']} />
        <mesh geometry={nodes.Mesh_716.geometry} material={materials['bank stof 1']} />
        <mesh geometry={nodes.Mesh_717.geometry} material={materials['bank stof 1']} />
        <mesh geometry={nodes['pillow-1002'].geometry} material={materials['bank stof 1']} />
        <mesh geometry={nodes.Mesh_719.geometry} material={materials['bank stof 1']} />
        <mesh geometry={nodes.Mesh_720.geometry} material={materials['bank stof 1']} />
        <mesh geometry={nodes['pillow-back002'].geometry} material={materials['bank stof 1']} />
        <mesh geometry={nodes.Mesh_722.geometry} material={materials['bank stof 1']} />
        <mesh geometry={nodes.Mesh_723.geometry} material={materials['bank stof 1']} />
        <mesh geometry={nodes.Mesh_724.geometry} material={materials['bank stof 1']} />
        <mesh geometry={nodes.Mesh_731.geometry} material={materials['bank stof 1']} />
        <mesh geometry={nodes.Mesh_732.geometry} material={materials['bank stof 1']} />
        <mesh geometry={nodes.Mesh_733.geometry} material={materials['bank stof 1']} />
        <mesh geometry={nodes['box-1#1'].geometry} material={materials['bank stof 1']} />
        <mesh geometry={nodes.Mesh_725.geometry} material={materials['bank stof 1']} />
        <mesh geometry={nodes.Mesh_726.geometry} material={materials['bank stof 1']} />
        <mesh geometry={nodes.back.geometry} material={materials['bank stof 1']} />
        <mesh geometry={nodes.Mesh_729.geometry} material={materials['bank stof 1']} />
        <mesh geometry={nodes.Mesh_730.geometry} material={materials['bank stof 1']} />
        <mesh geometry={nodes.Mesh_734.geometry} material={materials.Material__1} />
        <mesh geometry={nodes['Component#13039'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13040'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13041'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13042'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13043'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13044'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13045'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13046'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13047'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_760.geometry} material={materials['CLEAR GLASS']} />
        <mesh geometry={nodes.Mesh_760_1.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_757.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_758.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_759.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_773.geometry} material={materials['CLEAR GLASS']} />
        <mesh geometry={nodes.Mesh_773_1.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_770.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_771.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_772.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_777.geometry} material={materials['CLEAR GLASS']} />
        <mesh geometry={nodes.Mesh_777_1.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_774.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_775.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_776.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_781.geometry} material={materials['CLEAR GLASS']} />
        <mesh geometry={nodes.Mesh_781_1.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_778.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_779.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_780.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_756.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13048'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13049'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13050'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13051'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13052'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13053'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13054'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13055'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#13056'].geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_791.geometry} material={materials['CLEAR GLASS']} />
        <mesh geometry={nodes.Mesh_791_1.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_788.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_789.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_790.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_804.geometry} material={materials['CLEAR GLASS']} />
        <mesh geometry={nodes.Mesh_804_1.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_801.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_802.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_803.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_808.geometry} material={materials['CLEAR GLASS']} />
        <mesh geometry={nodes.Mesh_808_1.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_805.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_806.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_807.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_812.geometry} material={materials['CLEAR GLASS']} />
        <mesh geometry={nodes.Mesh_812_1.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_809.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_810.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_811.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_787.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.____004.geometry} material={materials['curtain']} />
        <mesh geometry={nodes.____005.geometry} material={materials['curtain']} />
        <mesh geometry={nodes.Mesh_212.geometry} material={materials['CLEAR GLASS']} />
        <mesh geometry={nodes.Mesh_212_1.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#38'].geometry} material={materials['default material']}>
          <mesh geometry={nodes.Hafele_Recessed_Pull.geometry} material={materials['[Metal_Corrogated_Shiny]1']} />
        </mesh>
        <mesh geometry={nodes['Component#38001'].geometry} material={materials['default material']}>
          <mesh geometry={nodes.Hafele_Recessed_Pull001.geometry} material={materials['[Metal_Corrogated_Shiny]1']} />
        </mesh>
        <mesh geometry={nodes['Component#38002'].geometry} material={materials['default material']}>
          <mesh geometry={nodes.Hafele_Recessed_Pull002.geometry} material={materials['[Metal_Corrogated_Shiny]1']} />
        </mesh>
        <mesh geometry={nodes['Component#38003'].geometry} material={materials['default material']}>
          <mesh geometry={nodes.Hafele_Recessed_Pull003.geometry} material={materials['[Metal_Corrogated_Shiny]1']} />
        </mesh>
        <mesh geometry={nodes['Component#38004'].geometry} material={materials['default material']}>
          <mesh geometry={nodes.Hafele_Recessed_Pull004.geometry} material={materials['[Metal_Corrogated_Shiny]1']} />
        </mesh>
        <mesh geometry={nodes['Component#38005'].geometry} material={materials['default material']}>
          <mesh geometry={nodes.Hafele_Recessed_Pull005.geometry} material={materials['[Metal_Corrogated_Shiny]1']} />
        </mesh>
        <mesh geometry={nodes['Component#39'].geometry} material={materials['default material']}>
          <mesh geometry={nodes.Hafele_Recessed_Pull006.geometry} material={materials['[Metal_Corrogated_Shiny]1']} />
        </mesh>
        <mesh geometry={nodes['Component#39001'].geometry} material={materials['default material']}>
          <mesh geometry={nodes.Hafele_Recessed_Pull007.geometry} material={materials['[Metal_Corrogated_Shiny]1']} />
        </mesh>
        <mesh geometry={nodes['Component#39002'].geometry} material={materials['default material']}>
          <mesh geometry={nodes.Hafele_Recessed_Pull008.geometry} material={materials['[Metal_Corrogated_Shiny]1']} />
        </mesh>
        <mesh geometry={nodes['Component#39003'].geometry} material={materials['default material']}>
          <mesh geometry={nodes.Hafele_Recessed_Pull009.geometry} material={materials['[Metal_Corrogated_Shiny]1']} />
        </mesh>
        <mesh geometry={nodes['Component#39004'].geometry} material={materials['default material']}>
          <mesh geometry={nodes.Hafele_Recessed_Pull010.geometry} material={materials['[Metal_Corrogated_Shiny]1']} />
        </mesh>
        <mesh geometry={nodes['Component#39005'].geometry} material={materials['default material']}>
          <mesh geometry={nodes.Hafele_Recessed_Pull011.geometry} material={materials['[Metal_Corrogated_Shiny]1']} />
        </mesh>
        <mesh geometry={nodes['Component#39006'].geometry} material={materials['default material']}>
          <mesh geometry={nodes.Hafele_Recessed_Pull012.geometry} material={materials['[Metal_Corrogated_Shiny]1']} />
        </mesh>
        <mesh geometry={nodes['Component#39007'].geometry} material={materials['default material']}>
          <mesh geometry={nodes.Hafele_Recessed_Pull013.geometry} material={materials['[Metal_Corrogated_Shiny]1']} />
        </mesh>
        <mesh geometry={nodes.Mesh_618.geometry} material={materials.Material37} />
        <mesh geometry={nodes.Mesh_618_1.geometry} material={materials.Material1} />
        <mesh geometry={nodes.Mesh_618_2.geometry} material={materials.Metal_Corrogated_Shiny} />
        <mesh geometry={nodes.Mesh_615.geometry} material={materials['<CorrogateShiny>']} />
        <mesh geometry={nodes.Mesh_617.geometry} material={materials.Material22}>
          <mesh geometry={nodes.Mesh_616.geometry} material={materials.Material22} />
        </mesh>
        <mesh geometry={nodes.Mesh_113.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes.Mesh_114_1.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes.Mesh_114_2.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes.Mesh_115.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes.Mesh_116.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes.Mesh_117_1.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes.Mesh_117_2.geometry} material={materials['interior']}material-color={props.customColors.interior} />
        <mesh geometry={nodes.Mesh_191_1.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_191_2.geometry} material={materials['roof']}material-color={props.customColors.roof} />
        <mesh geometry={nodes.Mesh_211.geometry} material={materials['interior']}material-color={props.customColors.interior} />
        <mesh geometry={nodes.Mesh_242.geometry} material={materials['Black Granite']} />
        <mesh geometry={nodes.Mesh_285.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_317.geometry} material={materials['Black Granite']} />
        <mesh geometry={nodes.Mesh_318.geometry} material={materials['Black Granite']} />
        <mesh geometry={nodes.Mesh_392.geometry} material={materials['interior']}material-color={props.customColors.interior} />
        <mesh geometry={nodes.Mesh_41.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes.Mesh_42_1.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes.Mesh_42_2.geometry} material={materials['interior']} material-color={props.customColors.interior} />
        <mesh geometry={nodes.Mesh_44_1.geometry} material={materials['interior']}material-color={props.customColors.interior} />
        <mesh geometry={nodes.Mesh_44_2.geometry} material={materials.asdsadx} />
        <mesh geometry={nodes.Mesh_43_1.geometry} material={materials.asdsadx} />
        <mesh geometry={nodes.Mesh_43_2.geometry} material={materials['interior']}material-color={props.customColors.interior} />
        <mesh geometry={nodes.Mesh_43_3.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_59_1.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes.Mesh_59_2.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes.Mesh_59_3.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes.Mesh_57.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_57_1.geometry} material={materials['CLEAR GLASS']} />
        <mesh geometry={nodes.Mesh_58.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_58_1.geometry} material={materials['CLEAR GLASS']} />
        <mesh geometry={nodes.Mesh_60_1.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes.Mesh_60_2.geometry} material={materials['tile']} material-color={props.customColors.tile}/>
        <mesh geometry={nodes.Mesh_608.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_692.geometry} material={materials['interior']}material-color={props.customColors.interior} />
        <mesh geometry={nodes.Mesh_735.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_736.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_737.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_738.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_739.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_740.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_741.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_742.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_743.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_745_1.geometry} material={materials['Color M07']} />
        <mesh geometry={nodes.Mesh_745_2.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_745_3.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh_745_4.geometry} material={materials['Iron_Blurry_5cm#1']} />
        <mesh geometry={nodes.Mesh_745_5.geometry} material={materials['Color D04']} />
        <mesh geometry={nodes.Mesh_744_1.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_744_2.geometry} material={materials['Iron_Blurry_5cm#1']} />
        <mesh geometry={nodes.Mesh_744_3.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh_747_1.geometry} material={materials['Color M07']} />
        <mesh geometry={nodes.Mesh_747_2.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_747_3.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh_747_4.geometry} material={materials['Iron_Blurry_5cm#1']} />
        <mesh geometry={nodes.Mesh_747_5.geometry} material={materials['Color D04']} />
        <mesh geometry={nodes.Mesh_746_1.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_746_2.geometry} material={materials['Iron_Blurry_5cm#1']} />
        <mesh geometry={nodes.Mesh_746_3.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh_749_1.geometry} material={materials['Color M07']} />
        <mesh geometry={nodes.Mesh_749_2.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_749_3.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh_749_4.geometry} material={materials['Iron_Blurry_5cm#1']} />
        <mesh geometry={nodes.Mesh_749_5.geometry} material={materials['Color D04']} />
        <mesh geometry={nodes.Mesh_748_1.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_748_2.geometry} material={materials['Iron_Blurry_5cm#1']} />
        <mesh geometry={nodes.Mesh_748_3.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh_751_1.geometry} material={materials['Color M07']} />
        <mesh geometry={nodes.Mesh_751_2.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_751_3.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh_751_4.geometry} material={materials['Iron_Blurry_5cm#1']} />
        <mesh geometry={nodes.Mesh_751_5.geometry} material={materials['Color D04']} />
        <mesh geometry={nodes.Mesh_750_1.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_750_2.geometry} material={materials['Iron_Blurry_5cm#1']} />
        <mesh geometry={nodes.Mesh_750_3.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh_754_1.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_754_2.geometry} material={materials['roof']} material-color={props.customColors.roof}/>
        <mesh geometry={nodes.Mesh_754_3.geometry} material={materials['roof']}material-color={props.customColors.roof} />
        <mesh geometry={nodes.Mesh_752_1.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_752_2.geometry} material={materials['RED ROOF']} />
        <mesh geometry={nodes.Mesh_752_3.geometry} material={materials['WOOD 3']} />
        <mesh geometry={nodes.Mesh_753.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_755_1.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes.Mesh_755_2.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes.Mesh_786_1.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_786_2.geometry} material={materials['roof']} material-color={props.customColors.roof}/>
        <mesh geometry={nodes.Mesh_786_3.geometry} material={materials['roof']} material-color={props.customColors.roof}/>
        <mesh geometry={nodes.Mesh_784_1.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_784_2.geometry} material={materials['roof']}material-color={props.customColors.roof} />
        <mesh geometry={nodes.Mesh_784_3.geometry} material={materials['WOOD 3']} />
        <mesh geometry={nodes.Mesh_785.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_8.geometry} material={materials['interior']}material-color={props.customColors.interior} />
        <mesh geometry={nodes.TARGETASM.geometry} material={materials['WINDOW FRAME 1']}>
          <mesh geometry={nodes.Mesh_6.geometry} material={materials.Material2} />
          <mesh geometry={nodes.Mesh_6_1.geometry} material={materials['WINDOW FRAME 1']} />
          <mesh geometry={nodes.BODY_49PRT.geometry} material={materials['WINDOW FRAME 1']} />
          <mesh geometry={nodes.BODY_57PRT.geometry} material={materials['WINDOW FRAME 1']} />
          <mesh geometry={nodes.BODY_61PRT.geometry} material={materials['WINDOW FRAME 1']} />
          <mesh geometry={nodes.BODY_62PRT.geometry} material={materials['WINDOW FRAME 1']} />
          <mesh geometry={nodes.BODY_63PRT.geometry} material={materials['WINDOW FRAME 1']} />
          <mesh geometry={nodes.BODY_64PRT.geometry} material={materials['WINDOW FRAME 1']} />
        </mesh>
      </mesh>
    </group>
  )
}

function Model2() {
  const [interior,setInterior] = useState("ffffff")
  const [tile,setTile] = useState("ffffff")
  const [roof,setRoof] = useState("#36454F")
  return (
    <div>
         <header>
            <div className='banner'>
          <div className="navbarr">
            <a className="navbar-brandd" href="/">MAKE IT HOME</a>
            <ul className="navbar-navv">
              <li className="nav-itemm">
                <a className="nav-linkk" href="/">Home<span className="sr-only" /></a>
              </li>
              <li className="nav-itemm "> 
                <a className="nav-linkk" href="about">About</a>
              </li>
            
              <li className="nav-itemm "> 
                <a className="nav-linkk" href="contact">Contact Us</a>
              </li>
          
            </ul>
          </div>
          </div>
        </header>   
      
        <div className="App">
      <div className="wrapper">
          <div className="card">
              <div className="product-canvas">
                <Canvas>
                  <Suspense fallback={null}>
                    <ambientLight />
                    <spotLight intensity={0.9} angle={0.1} penumbra={1} position={[10,15,10]} castShadow/>
                    <Model customColors={{interior:interior, tile:tile, roof:roof}}/>
                    <OrbitControls enablePan={true} enableZoom={true} enableRotate={true}/>

                  </Suspense>
                </Canvas>
              </div>
              <h2>Change Colors</h2>
              <div className='colors'>
                  <div>
                      <input type="color" id="interior" name="interior"
                             value={interior} 
                             onChange={(e)=> setInterior(e.target.value)}/>
                      <label for="body">Wall</label>
                    </div>


               
                  <div>
                      <input type="color" id="tile" name="tile"
                              value={tile}
                              onChange={(e)=> setTile(e.target.value)}/>
                      <label for="body">Floor</label>
                  </div>
                  <div>
                      <input type="color" id="roof" name="roof"
                              value={roof}
                              onChange={(e)=> setRoof(e.target.value)}/>
                      <label for="body">Roof</label>
                  </div>
              </div>
          </div>
    </div>
     </div>
     
</div>
  );
}

  
  export default Model2;