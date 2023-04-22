import '../css/model.css';
import "../css/model.sass";
import React, {Suspense, useRef, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import {OrbitControls, useGLTF} from "@react-three/drei";
import { useNavigate } from 'react-router-dom';

export function Model(props) {
    const { nodes, materials } = useGLTF('/model6.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.Mesh_1038.geometry} material={materials['[0004_HotPink]3']} />
        <mesh geometry={nodes.Mesh_1038_1.geometry} material={materials['0006_Pink']} />
        <mesh geometry={nodes.Circle001_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle002_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Circle003_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Line104_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle004_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Circle005_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Circle006_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line105_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle007_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Circle008_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Circle009_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line106_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle010_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Circle011_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Circle012_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line107_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle013_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Circle014_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Circle015_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line108_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle016_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Circle017_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Circle018_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line109_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle019_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle020_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Circle021_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Line110_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle022_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle023_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Circle024_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Line111_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle025_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Circle026_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle027_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Line112_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle028_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Circle029_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle030_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Line113_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle031_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Circle032_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle033_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Line114_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle034_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Circle035_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle036_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Line115_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle037_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Circle038_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle039_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Line116_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle040_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Circle041_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle042_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Line117_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle043_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Circle044_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle045_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Line118_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle046_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Circle047_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle048_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Line119_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle049_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Circle050_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle051_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Line120_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle052_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Circle053_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle054_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Line121_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle055_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Circle056_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle057_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Line122_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle058_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Circle059_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle060_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Line123_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle061_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Circle062_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle063_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Line124_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle064_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Circle065_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle066_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Line125_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle067_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Circle068_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle069_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Line126_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle070_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Circle071_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle072_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Line127_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle073_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Circle074_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle075_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Line128_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle076_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Circle077_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle078_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Line129_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle079_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Circle080_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle081_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Line130_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle082_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Circle083_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle084_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Line131_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle085_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Circle086_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle087_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Line132_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle088_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Circle089_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle090_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Line133_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle091_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Circle092_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle093_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Line134_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle094_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Circle095_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle096_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Line135_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle097_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Circle098_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Circle099_Defintion.geometry} material={materials['04 - VRay Material3']} />
        <mesh geometry={nodes.Line136_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line004_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line006_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line007_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line008_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line009_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line010_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line011_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line013_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line014_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line015_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line016_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line017_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line018_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line019_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line020_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line021_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line022_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line023_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line024_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line025_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line026_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line027_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line028_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line029_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line030_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line031_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line032_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line033_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line034_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line035_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line036_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line037_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line038_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line039_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line040_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line041_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line042_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line043_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line044_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line045_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line046_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line048_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line049_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line050_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line051_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line052_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line053_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line054_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line055_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line056_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line057_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line058_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line059_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line060_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line061_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line062_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line063_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line064_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line065_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line066_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line067_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line068_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line069_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line070_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line071_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line072_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line073_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line074_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line075_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line076_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line077_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line078_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line079_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line080_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line081_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line082_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line083_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line084_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line085_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line086_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line087_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line088_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line089_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line090_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line091_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line092_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line093_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line094_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line095_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line096_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line097_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line098_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line099_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line100_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line101_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line102_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.Line103_Defintion.geometry} material={materials['04 - VRay Material15']} />
        <mesh geometry={nodes.MatressCorner.geometry} material={materials['default material']} />
        <mesh geometry={nodes.MatressCorner001.geometry} material={materials['default material']} />
        <mesh geometry={nodes.MatressCorner002.geometry} material={materials['default material']} />
        <mesh geometry={nodes.MatressCorner003.geometry} material={materials['default material']} />
        <mesh geometry={nodes.MattressBottom.geometry} material={materials['default material']} />
        <mesh geometry={nodes.MattressBottom001.geometry} material={materials['default material']} />
        <mesh geometry={nodes.MattressInside.geometry} material={materials['default material']} />
        <mesh geometry={nodes.MattressSide.geometry} material={materials['default material']} />
        <mesh geometry={nodes.MattressSide001.geometry} material={materials['default material']} />
        <mesh geometry={nodes.BedFrameBase.geometry} material={materials['default material']} />
        <mesh geometry={nodes.BedFrameHeadboard.geometry} material={materials['default material']} />
        <mesh geometry={nodes.BedLeg.geometry} material={materials['default material']} />
        <mesh geometry={nodes.BedLeg001.geometry} material={materials['default material']} />
        <mesh geometry={nodes.BedLeg002.geometry} material={materials['default material']} />
        <mesh geometry={nodes.BedLeg003.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Pillow.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Pillow001.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#129'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#129001'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#129002'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#129003'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#129004'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#129005'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#129006'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#129007'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#129008'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#129009'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#129010'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#129011'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#129012'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#129013'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#129014'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#129015'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#129016'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#129017'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#129018'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#129019'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#129020'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#129021'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#129022'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#129023'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#129024'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#129025'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#125'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#126'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#126001'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#130'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#348'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes.Mesh_394.geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes.Mesh_425.geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Component#55002'].geometry} material={materials['sTecido sofá paletes']} />
        <mesh geometry={nodes['Component#56002'].geometry} material={materials['sTecido sofá paletes']} />
        <mesh geometry={nodes['Component#55003'].geometry} material={materials['sTecido sofá paletes']} />
        <mesh geometry={nodes['Component#56003'].geometry} material={materials['sTecido sofá paletes']} />
        <mesh geometry={nodes['Group#561'].geometry} material={materials['CROMO PERFIL METALICO1']} />
        <mesh geometry={nodes['Group#561001'].geometry} material={materials['CROMO PERFIL METALICO1']} />
        <mesh geometry={nodes['Component#28'].geometry} material={materials.PRZYCISK} />
        <mesh geometry={nodes['Component#28001'].geometry} material={materials.PRZYCISK} />
        <mesh geometry={nodes['Group#102'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#102001'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#105'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#105001'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes.Mesh_46.geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes.Mesh_47.geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Component#28002'].geometry} material={materials.PRZYCISK} />
        <mesh geometry={nodes['Component#28003'].geometry} material={materials.PRZYCISK} />
        <mesh geometry={nodes['Group#561002'].geometry} material={materials['CROMO PERFIL METALICO1']} />
        <mesh geometry={nodes['Group#561003'].geometry} material={materials['CROMO PERFIL METALICO1']} />
        <mesh geometry={nodes['Group#102002'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#102003'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#105002'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#105003'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes.Mesh_56.geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes.Mesh_57.geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#561004'].geometry} material={materials['CROMO PERFIL METALICO1']} />
        <mesh geometry={nodes['Group#561005'].geometry} material={materials['CROMO PERFIL METALICO1']} />
        <mesh geometry={nodes['Component#28004'].geometry} material={materials.PRZYCISK} />
        <mesh geometry={nodes['Component#28005'].geometry} material={materials.PRZYCISK} />
        <mesh geometry={nodes['Group#102004'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#102005'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#105004'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#105005'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes.Mesh_66.geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes.Mesh_67.geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#561006'].geometry} material={materials['CROMO PERFIL METALICO1']} />
        <mesh geometry={nodes['Group#561007'].geometry} material={materials['CROMO PERFIL METALICO1']} />
        <mesh geometry={nodes['Component#28006'].geometry} material={materials.PRZYCISK} />
        <mesh geometry={nodes['Component#28007'].geometry} material={materials.PRZYCISK} />
        <mesh geometry={nodes['Group#102006'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#102007'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#105006'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#105007'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes.Mesh_76.geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes.Mesh_77.geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#561008'].geometry} material={materials['CROMO PERFIL METALICO1']} />
        <mesh geometry={nodes['Group#561009'].geometry} material={materials['CROMO PERFIL METALICO1']} />
        <mesh geometry={nodes['Component#28008'].geometry} material={materials.PRZYCISK} />
        <mesh geometry={nodes['Component#28009'].geometry} material={materials.PRZYCISK} />
        <mesh geometry={nodes['Group#102008'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#102009'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#105008'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#105009'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes.Mesh_139.geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes.Mesh_140.geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#561010'].geometry} material={materials['CROMO PERFIL METALICO1']} />
        <mesh geometry={nodes['Group#561011'].geometry} material={materials['CROMO PERFIL METALICO1']} />
        <mesh geometry={nodes['Component#28010'].geometry} material={materials.PRZYCISK} />
        <mesh geometry={nodes['Component#28011'].geometry} material={materials.PRZYCISK} />
        <mesh geometry={nodes['Group#102010'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#102011'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#105010'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#105011'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes.Mesh_149.geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes.Mesh_150.geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#561012'].geometry} material={materials['CROMO PERFIL METALICO1']} />
        <mesh geometry={nodes['Group#561013'].geometry} material={materials['CROMO PERFIL METALICO1']} />
        <mesh geometry={nodes['Component#28012'].geometry} material={materials.PRZYCISK} />
        <mesh geometry={nodes['Component#28013'].geometry} material={materials.PRZYCISK} />
        <mesh geometry={nodes['Group#102012'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#102013'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#105012'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#105013'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes.Mesh_469.geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes.Mesh_470.geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#90'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#91'].geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#96'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#90001'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#91001'].geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#96001'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#150'].geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#151'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#161'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#150001'].geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#151001'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#161001'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#90002'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#91002'].geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#96002'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#90003'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#91003'].geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#96003'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#150002'].geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#151002'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#161002'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#150003'].geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#151003'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#161003'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#177'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_428.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#181'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#183'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#184'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#185'].geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#181001'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#183001'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#184001'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#185001'].geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#181002'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#183002'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#184002'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#185002'].geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#181003'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#183003'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#184003'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#185003'].geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#32'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#33'].geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#31'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#32001'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#33001'].geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#31001'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#28'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#29'].geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#26'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#28001'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#29001'].geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#26001'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#32002'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#33002'].geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#31002'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#32003'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#33003'].geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#31003'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#28002'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#29002'].geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#26002'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#28003'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#29003'].geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#26003'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#21'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_21.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#561014'].geometry} material={materials['CROMO PERFIL METALICO1']} />
        <mesh geometry={nodes['Group#561015'].geometry} material={materials['CROMO PERFIL METALICO1']} />
        <mesh geometry={nodes['Group#260'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#260001'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#261'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#261001'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes.Mesh_479.geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes.Mesh_540.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_540_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_541.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_541_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#425'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#420'].geometry} material={materials.Color_D25}>
          <mesh geometry={nodes.Mesh_542_1.geometry} material={materials.Color_D25} />
          <mesh geometry={nodes.Mesh_542_2.geometry} material={materials.VIDRO} />
          <mesh geometry={nodes.Mesh_543_1.geometry} material={materials.Color_D25} />
          <mesh geometry={nodes.Mesh_543_2.geometry} material={materials.VIDRO} />
        </mesh>
        <mesh geometry={nodes.Mesh_162_1.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_162_2.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_163_1.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_163_2.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#530003'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#531003'].geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#528003'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#62001'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#63001'].geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#59001'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_128_1.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_128_2.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#530004'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#531004'].geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#528004'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#530005'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#531005'].geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#528005'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_135_1.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_135_2.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#499'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_121.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_136.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_136_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#46'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#47'].geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#44'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#42'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#43'].geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#40'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#36'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_113.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#525'].geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#526'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#527'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#530'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#531'].geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#528'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#62'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#63'].geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#59'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#60'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#61'].geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#56'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#525001'].geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#526001'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#527001'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#525002'].geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#526002'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#527002'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#530001'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#531001'].geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#528001'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#530002'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#531002'].geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#528002'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#521'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_87.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_921.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_921_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_919.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_919_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_920.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_920_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_924.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_924_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_922.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_922_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_923.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_923_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_927.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_927_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_925.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_925_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_926.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_926_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_930.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_930_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_928.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_928_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_929.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_929_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#16'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#17'].geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#15'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#16001'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#17001'].geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#15001'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#18'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#19'].geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#12'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#18001'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#19001'].geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#12001'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#7'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_7.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_5.geometry} material={materials.PRZYCISK} />
        <mesh geometry={nodes.Mesh_2.geometry} material={materials.PRZYCISK} />
        <mesh geometry={nodes.Mesh_3.geometry} material={materials['CROMO PERFIL METALICO1']} />
        <mesh geometry={nodes.Mesh_4.geometry} material={materials.PRZYCISK} />
        <mesh geometry={nodes.Mesh_1.geometry} material={materials['0013_LightCoral']} />
        <mesh geometry={nodes.Mesh_0.geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Component#4'].geometry} material={materials['Madeira sofá paletes']} />
        <mesh geometry={nodes['Component#4001'].geometry} material={materials['Madeira sofá paletes']} />
        <mesh geometry={nodes['Component#5'].geometry} material={materials['Madeira sofá paletes']} />
        <mesh geometry={nodes['Component#5001'].geometry} material={materials['Madeira sofá paletes']} />
        <mesh geometry={nodes['Component#6'].geometry} material={materials['Madeira sofá paletes']} />
        <mesh geometry={nodes['Component#6001'].geometry} material={materials['Madeira sofá paletes']} />
        <mesh geometry={nodes['Component#13'].geometry} material={materials['Madeira sofá paletes']} />
        <mesh geometry={nodes['Component#60'].geometry} material={materials['default material']}>
          <mesh geometry={nodes['Component#26'].geometry} material={materials['Madeira sofá paletes']} />
          <mesh geometry={nodes['Component#27'].geometry} material={materials['Madeira sofá paletes']} />
          <mesh geometry={nodes['Component#29'].geometry} material={materials['Madeira sofá paletes']} />
          <mesh geometry={nodes['Component#30'].geometry} material={materials['Madeira sofá paletes']} />
          <mesh geometry={nodes['Component#31'].geometry} material={materials['Madeira sofá paletes']} />
          <mesh geometry={nodes['Component#32'].geometry} material={materials['Madeira sofá paletes']} />
          <mesh geometry={nodes['Component#33'].geometry} material={materials['Madeira sofá paletes']} />
          <mesh geometry={nodes['Component#34'].geometry} material={materials['Madeira sofá paletes']} />
          <mesh geometry={nodes['Component#35'].geometry} material={materials['Madeira sofá paletes']} />
          <mesh geometry={nodes['Component#36'].geometry} material={materials['Madeira sofá paletes']} />
          <mesh geometry={nodes['Component#37'].geometry} material={materials['Madeira sofá paletes']} />
          <mesh geometry={nodes['Component#37001'].geometry} material={materials['Madeira sofá paletes']} />
          <mesh geometry={nodes['Component#9'].geometry} material={materials['Madeira sofá paletes']} />
          <mesh geometry={nodes['Component#9001'].geometry} material={materials['Madeira sofá paletes']} />
          <mesh geometry={nodes['Component#55'].geometry} material={materials['sTecido sofá paletes']} />
          <mesh geometry={nodes['Component#56'].geometry} material={materials['sTecido sofá paletes']} />
          <mesh geometry={nodes['Component#51'].geometry} material={materials['Madeira sofá paletes']} />
          <mesh geometry={nodes.Mesh_877.geometry} material={materials['sTecido sofá paletes']} />
          <mesh geometry={nodes.Mesh_877_1.geometry} material={materials['default material']} />
        </mesh>
        <mesh geometry={nodes['Component#60001'].geometry} material={materials['default material']}>
          <mesh geometry={nodes['Component#26001'].geometry} material={materials['Madeira sofá paletes']} />
          <mesh geometry={nodes['Component#27001'].geometry} material={materials['Madeira sofá paletes']} />
          <mesh geometry={nodes['Component#29001'].geometry} material={materials['Madeira sofá paletes']} />
          <mesh geometry={nodes['Component#30001'].geometry} material={materials['Madeira sofá paletes']} />
          <mesh geometry={nodes['Component#31001'].geometry} material={materials['Madeira sofá paletes']} />
          <mesh geometry={nodes['Component#32001'].geometry} material={materials['Madeira sofá paletes']} />
          <mesh geometry={nodes['Component#33001'].geometry} material={materials['Madeira sofá paletes']} />
          <mesh geometry={nodes['Component#34001'].geometry} material={materials['Madeira sofá paletes']} />
          <mesh geometry={nodes['Component#35001'].geometry} material={materials['Madeira sofá paletes']} />
          <mesh geometry={nodes['Component#36001'].geometry} material={materials['Madeira sofá paletes']} />
          <mesh geometry={nodes['Component#37002'].geometry} material={materials['Madeira sofá paletes']} />
          <mesh geometry={nodes['Component#37003'].geometry} material={materials['Madeira sofá paletes']} />
          <mesh geometry={nodes['Component#9002'].geometry} material={materials['Madeira sofá paletes']} />
          <mesh geometry={nodes['Component#9003'].geometry} material={materials['Madeira sofá paletes']} />
          <mesh geometry={nodes['Component#55001'].geometry} material={materials['sTecido sofá paletes']} />
          <mesh geometry={nodes['Component#56001'].geometry} material={materials['sTecido sofá paletes']} />
          <mesh geometry={nodes['Component#51001'].geometry} material={materials['Madeira sofá paletes']} />
          <mesh geometry={nodes.Mesh_896.geometry} material={materials['sTecido sofá paletes']} />
          <mesh geometry={nodes.Mesh_896_1.geometry} material={materials['default material']} />
        </mesh>
        <mesh geometry={nodes['Group#512'].geometry} material={materials.Color_000} />
        <mesh geometry={nodes.Mesh_901.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_902.geometry} material={materials.Material11} />
        <mesh geometry={nodes['Group#512001'].geometry} material={materials.Color_000} />
        <mesh geometry={nodes['Group#512002'].geometry} material={materials.Color_000} />
        <mesh geometry={nodes['Group#512003'].geometry} material={materials.Color_000} />
        <mesh geometry={nodes['Group#513'].geometry} material={materials.Color_F19} />
        <mesh geometry={nodes['Group#513001'].geometry} material={materials.Color_F19} />
        <mesh geometry={nodes.Mesh_909.geometry} material={materials.Material11} />
        <mesh geometry={nodes.Mesh_910.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_911.geometry} material={materials.Translucent_Glass_Gray} />
        <mesh geometry={nodes.Mesh_912.geometry} material={materials.Material11} />
        <mesh geometry={nodes['Group#512004'].geometry} material={materials.Color_000} />
        <mesh geometry={nodes.Mesh_913.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_914.geometry} material={materials.Material11} />
        <mesh geometry={nodes.Mesh_942.geometry} material={materials['[Color_D25]1']} />
        <mesh geometry={nodes.Mesh_942_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_943.geometry} material={materials['[Color_D25]1']} />
        <mesh geometry={nodes.Mesh_943_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_939.geometry} material={materials['[Color_D25]1']} />
        <mesh geometry={nodes.Mesh_939_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_940.geometry} material={materials['[Color_D25]1']} />
        <mesh geometry={nodes.Mesh_940_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#601'].geometry} material={materials['[Color_D25]1']} />
        <mesh geometry={nodes['Group#602'].geometry} material={materials['[Color_D25]1']} />
        <mesh geometry={nodes.Mesh_952.geometry} material={materials['[Color_D25]1']} />
        <mesh geometry={nodes.Mesh_952_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_953.geometry} material={materials['[Color_D25]1']} />
        <mesh geometry={nodes.Mesh_953_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_949.geometry} material={materials['[Color_D25]1']} />
        <mesh geometry={nodes.Mesh_949_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_950.geometry} material={materials['[Color_D25]1']} />
        <mesh geometry={nodes.Mesh_950_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#601001'].geometry} material={materials['[Color_D25]1']} />
        <mesh geometry={nodes['Group#602001'].geometry} material={materials['[Color_D25]1']} />
        <mesh geometry={nodes.Mesh_946.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_946_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_947.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_947_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_944.geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes.Mesh_945.geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes.Mesh_958.geometry} material={materials['[Color_D25]1']} />
        <mesh geometry={nodes.Mesh_958_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_959.geometry} material={materials['[Color_D25]1']} />
        <mesh geometry={nodes.Mesh_959_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_955.geometry} material={materials['[Color_D25]1']} />
        <mesh geometry={nodes.Mesh_955_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_956.geometry} material={materials['[Color_D25]1']} />
        <mesh geometry={nodes.Mesh_956_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#601002'].geometry} material={materials['[Color_D25]1']} />
        <mesh geometry={nodes['Group#602002'].geometry} material={materials['[Color_D25]1']} />
        <mesh geometry={nodes.Mesh_962.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_962_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_963.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_963_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_960.geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes.Mesh_961.geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes.Mesh_974.geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes.Mesh_975.geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes.Mesh_976.geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes.Mesh_977.geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes.Mesh_978.geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes.Mesh_979.geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes.Mesh_980.geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes.Mesh_981.geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes.Mesh_982.geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes.Mesh_983.geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes.Mesh_984.geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes.Mesh_985.geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes.Mesh_986.geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes.Mesh_987.geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes.Mesh_988.geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes.Mesh_989.geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes.Mesh_990.geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes.Mesh_991.geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes.Mesh_992.geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes.Mesh_993.geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes.Mesh_994.geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes.Mesh_995.geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes.Mesh_996.geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes.Mesh_997.geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes.Mesh_998.geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes.Mesh_999.geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes.Mesh_1000.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1001.geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes.Mesh_1002.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#639'].geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes['Group#639001'].geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes['Group#639002'].geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes['Group#639003'].geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes['Group#639004'].geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes['Group#639005'].geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes['Group#639006'].geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes['Group#639007'].geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes['Group#639008'].geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes['Group#639009'].geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes['Group#639010'].geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes['Group#639011'].geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes['Group#639012'].geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes['Group#639013'].geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes['Group#639014'].geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes['Group#639015'].geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes['Group#639016'].geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes['Group#639017'].geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes['Group#639018'].geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes['Group#639019'].geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes['Group#639020'].geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes['Group#639021'].geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes['Group#639022'].geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes['Group#639023'].geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes.Mesh_1004.geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes.Mesh_1029.geometry} material={materials['0043_SaddleBrown']} />
        <mesh geometry={nodes.Mesh_1003.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1030.geometry} material={materials['[Translucent_Glass_Blue]2']} />
        <mesh geometry={nodes.Mesh_1031.geometry} material={materials['[Translucent_Glass_Blue]2']} />
        <mesh geometry={nodes.Mesh_1032.geometry} material={materials['[Translucent_Glass_Blue]2']} />
        <mesh geometry={nodes.Mesh_1033.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#660'].geometry} material={materials['[0002_MediumVioletRed]6']} />
        <mesh geometry={nodes['Group#660001'].geometry} material={materials['[0002_MediumVioletRed]6']} />
        <mesh geometry={nodes['Group#660002'].geometry} material={materials['[0002_MediumVioletRed]6']} />
        <mesh geometry={nodes.Mesh_1034.geometry} material={materials['[0002_MediumVioletRed]6']} />
        <mesh geometry={nodes.Mesh_159.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_159_1.geometry} material={materials['[0129_WhiteSmoke]1']} />
        <mesh geometry={nodes.Mesh_161_1.geometry} material={materials['[0129_WhiteSmoke]1']} />
        <mesh geometry={nodes.Mesh_161_2.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_160_1.geometry} material={materials['[0129_WhiteSmoke]1']} />
        <mesh geometry={nodes.Mesh_160_2.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['MD616-WHT301_Component_01'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_01']} />
        <mesh geometry={nodes['MD616-WHT301_Component_02'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_01']} />
        <mesh geometry={nodes['MD616-WHT301_Component_03'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_04'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_04001'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_05'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_05001'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_01001'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_01']} />
        <mesh geometry={nodes['MD616-WHT301_Component_02001'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_01']} />
        <mesh geometry={nodes['MD616-WHT301_Component_03001'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_04002'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_04003'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_05002'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_05003'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_01002'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_01']} />
        <mesh geometry={nodes['MD616-WHT301_Component_02002'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_01']} />
        <mesh geometry={nodes['MD616-WHT301_Component_03002'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_04004'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_04005'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_05004'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_05005'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_01003'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_01']} />
        <mesh geometry={nodes['MD616-WHT301_Component_02003'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_01']} />
        <mesh geometry={nodes['MD616-WHT301_Component_03003'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_04006'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_04007'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_05006'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_05007'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_01004'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_01']} />
        <mesh geometry={nodes['MD616-WHT301_Component_02004'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_01']} />
        <mesh geometry={nodes['MD616-WHT301_Component_03004'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_04008'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_04009'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_05008'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_05009'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_01005'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_01']} />
        <mesh geometry={nodes['MD616-WHT301_Component_02005'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_01']} />
        <mesh geometry={nodes['MD616-WHT301_Component_03005'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_04010'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_04011'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_05010'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_05011'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_01006'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_01']} />
        <mesh geometry={nodes['MD616-WHT301_Component_02006'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_01']} />
        <mesh geometry={nodes['MD616-WHT301_Component_03006'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_04012'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_04013'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_05012'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_05013'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_01007'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_01']} />
        <mesh geometry={nodes['MD616-WHT301_Component_02007'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_01']} />
        <mesh geometry={nodes['MD616-WHT301_Component_03007'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_04014'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_04015'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_05014'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_05015'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_01008'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_01']} />
        <mesh geometry={nodes['MD616-WHT301_Component_02008'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_01']} />
        <mesh geometry={nodes['MD616-WHT301_Component_03008'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_04016'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_04017'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_05016'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_05017'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_01009'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_01']} />
        <mesh geometry={nodes['MD616-WHT301_Component_02009'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_01']} />
        <mesh geometry={nodes['MD616-WHT301_Component_03009'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_04018'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_04019'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_05018'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['MD616-WHT301_Component_05019'].geometry} material={materials['5492W-F550-MRN-WAL_Materials_02']} />
        <mesh geometry={nodes['Component#12'].geometry} material={materials['0136_Charcoal']} />
        <mesh geometry={nodes['Component#12001'].geometry} material={materials['0136_Charcoal']} />
        <mesh geometry={nodes.Mesh_234.geometry} material={materials['0136_Charcoal']} />
        <mesh geometry={nodes.Mesh_235.geometry} material={materials['0136_Charcoal']} />
        <mesh geometry={nodes.Mesh_238.geometry} material={materials['Color H08']} />
        <mesh geometry={nodes.vm_v1_056_Defintion.geometry} material={materials.Chrome_Polished} />
        <mesh geometry={nodes.vm_v1_056_Defintion1.geometry} material={materials.Aluminum_Anodized_DarkGray} />
        <mesh geometry={nodes.vm_v1_056_Defintion2.geometry} material={materials['default material']} />
        <mesh geometry={nodes.vm_v1_056_Defintion001.geometry} material={materials.Chrome_Polished} />
        <mesh geometry={nodes.vm_v1_056_Defintion1001.geometry} material={materials.Aluminum_Anodized_DarkGray} />
        <mesh geometry={nodes.vm_v1_056_Defintion2001.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_239.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_240.geometry} material={materials.Chrome_Polished} />
        <mesh geometry={nodes.Mesh_283.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_284.geometry} material={materials.Chrome_Polished} />
        <mesh geometry={nodes.Mesh_281.geometry} material={materials.Material17} />
        <mesh geometry={nodes.Mesh_282.geometry} material={materials.Chrome_Polished} />
        <mesh geometry={nodes.Mesh_244.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_245.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_248.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_249.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_253.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_254.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_255.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_256.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_257.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_258.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_259.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_260.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_246.geometry} material={materials.Chrome_Polished} />
        <mesh geometry={nodes.Mesh_247.geometry} material={materials.Material21} />
        <mesh geometry={nodes.Mesh_250.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_251.geometry} material={materials.Chrome_Polished} />
        <mesh geometry={nodes.Mesh_252.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_261.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_262.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_265.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_266.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_270.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_271.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_272.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_273.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_274.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_275.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_276.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_277.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_263.geometry} material={materials.Chrome_Polished} />
        <mesh geometry={nodes.Mesh_264.geometry} material={materials.Material21} />
        <mesh geometry={nodes.Mesh_267.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_268.geometry} material={materials.Chrome_Polished} />
        <mesh geometry={nodes.Mesh_269.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_285.geometry} material={materials.Plastic_Metalic_Black} />
        <mesh geometry={nodes.Mesh_291.geometry} material={materials.Material13} />
        <mesh geometry={nodes.Mesh_292.geometry} material={materials.Material13} />
        <mesh geometry={nodes.Mesh_286_1.geometry} material={materials.Alumin1} />
        <mesh geometry={nodes.Mesh_286_2.geometry} material={materials.Material13} />
        <mesh geometry={nodes.Mesh_290.geometry} material={materials.Material13}>
          <mesh geometry={nodes.Mesh_287_1.geometry} material={materials.Material13} />
          <mesh geometry={nodes.Mesh_287_2.geometry} material={materials.Material38} />
          <mesh geometry={nodes.Mesh_289.geometry} material={materials.Material13}>
            <mesh geometry={nodes.Mesh_288.geometry} material={materials['default material']} />
          </mesh>
        </mesh>
        <mesh geometry={nodes.Mesh_293.geometry} material={materials.Material14} />
        <mesh geometry={nodes.Mesh_295.geometry} material={materials.Leather_A01_Black_25cm} />
        <mesh geometry={nodes.Mesh_296.geometry} material={materials.Leather_A01_Black_25cm} />
        <mesh geometry={nodes.Mesh_297.geometry} material={materials.Leather_A01_Black_25cm} />
        <mesh geometry={nodes.Mesh_298.geometry} material={materials.Leather_A01_Black_25cm} />
        <mesh geometry={nodes.Mesh_299.geometry} material={materials.Chrome_Polished1} />
        <mesh geometry={nodes.Mesh_300.geometry} material={materials.Chrome_Polished1} />
        <mesh geometry={nodes.Mesh_301.geometry} material={materials.Chrome_Polished1} />
        <mesh geometry={nodes.Mesh_302.geometry} material={materials.Chrome_Polished1} />
        <mesh geometry={nodes.Mesh_303.geometry} material={materials['DUCCO WHITE']} />
        <mesh geometry={nodes.Mesh_304.geometry} material={materials['DUCCO WHITE']} />
        <mesh geometry={nodes.Mesh_305.geometry} material={materials['DUCCO WHITE']} />
        <mesh geometry={nodes.Mesh_306.geometry} material={materials['DUCCO WHITE']} />
        <mesh geometry={nodes.Mesh_307.geometry} material={materials.Leather_A01_Black_25cm} />
        <mesh geometry={nodes.Mesh_308.geometry} material={materials.Leather_A01_Black_25cm} />
        <mesh geometry={nodes.Mesh_309.geometry} material={materials.Leather_A01_Black_25cm} />
        <mesh geometry={nodes.Mesh_310.geometry} material={materials.Leather_A01_Black_25cm} />
        <mesh geometry={nodes.Mesh_311.geometry} material={materials.Chrome_Polished1} />
        <mesh geometry={nodes.Mesh_312.geometry} material={materials.Chrome_Polished1} />
        <mesh geometry={nodes.Mesh_313.geometry} material={materials.Chrome_Polished1} />
        <mesh geometry={nodes.Mesh_314.geometry} material={materials.Chrome_Polished1} />
        <mesh geometry={nodes.Mesh_315.geometry} material={materials['DUCCO WHITE']} />
        <mesh geometry={nodes.Mesh_316.geometry} material={materials['DUCCO WHITE']} />
        <mesh geometry={nodes.Mesh_317.geometry} material={materials['DUCCO WHITE']} />
        <mesh geometry={nodes.Mesh_318.geometry} material={materials['DUCCO WHITE']} />
        <mesh geometry={nodes.Mesh_319.geometry} material={materials.Leather_A01_Black_25cm} />
        <mesh geometry={nodes.Mesh_320.geometry} material={materials.Leather_A01_Black_25cm} />
        <mesh geometry={nodes.Mesh_321.geometry} material={materials.Leather_A01_Black_25cm} />
        <mesh geometry={nodes.Mesh_322.geometry} material={materials.Leather_A01_Black_25cm} />
        <mesh geometry={nodes.Mesh_323.geometry} material={materials.Chrome_Polished1} />
        <mesh geometry={nodes.Mesh_324.geometry} material={materials.Chrome_Polished1} />
        <mesh geometry={nodes.Mesh_325.geometry} material={materials.Chrome_Polished1} />
        <mesh geometry={nodes.Mesh_326.geometry} material={materials.Chrome_Polished1} />
        <mesh geometry={nodes.Mesh_327.geometry} material={materials['DUCCO WHITE']} />
        <mesh geometry={nodes.Mesh_328.geometry} material={materials['DUCCO WHITE']} />
        <mesh geometry={nodes.Mesh_329.geometry} material={materials['DUCCO WHITE']} />
        <mesh geometry={nodes.Mesh_330.geometry} material={materials['DUCCO WHITE']} />
        <mesh geometry={nodes.Mesh_294.geometry} material={materials['default material']} />
        <mesh geometry={nodes.KitchenAid.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_335_1.geometry} material={materials['[Color_008]2']} />
        <mesh geometry={nodes.Mesh_335_2.geometry} material={materials.Color_002} />
        <mesh geometry={nodes.Mesh_335_3.geometry} material={materials.Color_008} />
        <mesh geometry={nodes.Mesh_335_4.geometry} material={materials.Color_005} />
        <mesh geometry={nodes.Mesh_335_5.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_331_1.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_331_2.geometry} material={materials.Material17} />
        <mesh geometry={nodes.Mesh_332.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_334_1.geometry} material={materials.Material38} />
        <mesh geometry={nodes.Mesh_334_2.geometry} material={materials['Mtl-Stainless Steel']} />
        <mesh geometry={nodes.Mesh_334_3.geometry} material={materials['Body Black#1']} />
        <mesh geometry={nodes.Mesh_334_4.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_334_5.geometry} material={materials['Paint-05']} />
        <mesh geometry={nodes.Mesh_334_6.geometry} material={materials['Body Black#2']} />
        <mesh geometry={nodes.Mesh_334_7.geometry} material={materials['Glass-Blue']} />
        <mesh geometry={nodes.Mesh_334_8.geometry} material={materials.unnamed} />
        <mesh geometry={nodes.Mesh_333.geometry} material={materials['Body Black#1']} />
        <mesh geometry={nodes.Mesh_338_1.geometry} material={materials.Material38} />
        <mesh geometry={nodes.Mesh_338_2.geometry} material={materials['Mtl-Stainless Steel']} />
        <mesh geometry={nodes.Mesh_338_3.geometry} material={materials['Body Black#1']} />
        <mesh geometry={nodes.Mesh_338_4.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_338_5.geometry} material={materials['Paint-05']} />
        <mesh geometry={nodes.Mesh_338_6.geometry} material={materials['Body Black#2']} />
        <mesh geometry={nodes.Mesh_338_7.geometry} material={materials['Glass-Blue']} />
        <mesh geometry={nodes.Mesh_338_8.geometry} material={materials.unnamed} />
        <mesh geometry={nodes.Mesh_337.geometry} material={materials['Body Black#1']} />
        <mesh geometry={nodes.Mesh_339.geometry} material={materials.Material14} />
        <mesh geometry={nodes.Mesh_340.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_343.geometry} material={materials['default material']}>
          <mesh geometry={nodes.Mesh_342.geometry} material={materials['default material']} />
        </mesh>
        <mesh geometry={nodes.Mesh_344.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_346.geometry} material={materials['default material']}>
          <mesh geometry={nodes.Mesh_345.geometry} material={materials['default material']} />
        </mesh>
        <mesh geometry={nodes.Mesh_347.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_349.geometry} material={materials['default material']}>
          <mesh geometry={nodes.Mesh_348.geometry} material={materials['default material']} />
        </mesh>
        <mesh geometry={nodes.Mesh_350.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_352.geometry} material={materials['default material']}>
          <mesh geometry={nodes.Mesh_351.geometry} material={materials['default material']} />
        </mesh>
        <mesh geometry={nodes.Mesh_353.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_355.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_356.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_357.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_358.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_360.geometry} material={materials['default material']}>
          <mesh geometry={nodes.Mesh_359.geometry} material={materials['default material']} />
        </mesh>
        <mesh geometry={nodes.Mesh_361.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_363.geometry} material={materials['default material']}>
          <mesh geometry={nodes.Mesh_362.geometry} material={materials['default material']} />
        </mesh>
        <mesh geometry={nodes.Mesh_364.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_366.geometry} material={materials['default material']}>
          <mesh geometry={nodes.Mesh_365.geometry} material={materials['default material']} />
        </mesh>
        <mesh geometry={nodes.Mesh_367.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_369.geometry} material={materials['default material']}>
          <mesh geometry={nodes.Mesh_368.geometry} material={materials['default material']} />
        </mesh>
        <mesh geometry={nodes.Mesh_370.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_372.geometry} material={materials['default material']}>
          <mesh geometry={nodes.Mesh_371.geometry} material={materials['default material']} />
        </mesh>
        <mesh geometry={nodes.Mesh_373.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_375.geometry} material={materials['default material']}>
          <mesh geometry={nodes.Mesh_374.geometry} material={materials['default material']} />
        </mesh>
        <mesh geometry={nodes.Mesh_376.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_378.geometry} material={materials['default material']}>
          <mesh geometry={nodes.Mesh_377.geometry} material={materials['default material']} />
        </mesh>
        <mesh geometry={nodes.Mesh_379.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_381.geometry} material={materials['default material']}>
          <mesh geometry={nodes.Mesh_380.geometry} material={materials['default material']} />
        </mesh>
        <mesh geometry={nodes.Mesh_382.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_385.geometry} material={materials['default material']}>
          <mesh geometry={nodes.Mesh_384.geometry} material={materials['default material']} />
        </mesh>
        <mesh geometry={nodes.Mesh_386.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_388.geometry} material={materials['default material']}>
          <mesh geometry={nodes.Mesh_387.geometry} material={materials['default material']} />
        </mesh>
        <mesh geometry={nodes.Mesh_389.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_391.geometry} material={materials['default material']}>
          <mesh geometry={nodes.Mesh_390.geometry} material={materials['default material']} />
        </mesh>
        <mesh geometry={nodes.Mesh_392.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_341.geometry} material={materials['[0017_IndianRed]5']} />
        <mesh geometry={nodes.Mesh_354.geometry} material={materials['[0017_IndianRed]5']} />
        <mesh geometry={nodes.Mesh_383.geometry} material={materials['[0017_IndianRed]5']} />
        <mesh geometry={nodes.Mesh_486.geometry} material={materials['[0129_WhiteSmoke]1']} />
        <mesh geometry={nodes.Mesh_486_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_488.geometry} material={materials['[0129_WhiteSmoke]1']} />
        <mesh geometry={nodes.Mesh_488_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_487_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_487_2.geometry} material={materials['[0129_WhiteSmoke]1']} />
        <mesh geometry={nodes['Group#403'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#403001'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#403002'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#403003'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#403004'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#403005'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#403006'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#403007'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#403008'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#403009'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#403010'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#403011'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#403012'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#403013'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#403014'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#403015'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#403016'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#403017'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#403018'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#403019'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#403020'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#403021'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#403022'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#403023'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#403024'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#403025'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#403026'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#403027'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#403028'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#403029'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#403030'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#403031'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#404'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#405'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#405001'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#405002'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#405003'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#405004'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#405005'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#405006'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#405007'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#405008'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#405009'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#405010'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#405011'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#405012'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes.Mesh_492.geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes.Mesh_494.geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes.Mesh_489.geometry} material={materials.VIDRO1} />
        <mesh geometry={nodes.Mesh_586.geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes.Mesh_587.geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes.Mesh_588.geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes.Shape022.geometry} material={materials['[Color_008]3']} />
        <mesh geometry={nodes.Shape024.geometry} material={materials['02 - Defaults']} />
        <mesh geometry={nodes.Shape025.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Box7534.geometry} material={materials['03 - Default']} />
        <mesh geometry={nodes.Box7535.geometry} material={materials['03 - Default']} />
        <mesh geometry={nodes.Box7536.geometry} material={materials['03 - Default']} />
        <mesh geometry={nodes.Box7537.geometry} material={materials['03 - Default']} />
        <mesh geometry={nodes.Box7538.geometry} material={materials['03 - Default']} />
        <mesh geometry={nodes.Box7539.geometry} material={materials['03 - Default']} />
        <mesh geometry={nodes.Box7540.geometry} material={materials['03 - Default']} />
        <mesh geometry={nodes.Circle007.geometry} material={materials['[Color_008]3']} />
        <mesh geometry={nodes.Circle008.geometry} material={materials['[Color_008]3']} />
        <mesh geometry={nodes.Cylinder04.geometry} material={materials['01 - Default']} />
        <mesh geometry={nodes.Cylinder05.geometry} material={materials['01 - Default']} />
        <mesh geometry={nodes.Line008.geometry} material={materials['[Color_008]3']} />
        <mesh geometry={nodes.Line009.geometry} material={materials['[Color_008]3']} />
        <mesh geometry={nodes.Mesh_625.geometry} material={materials['[Color_008]3']} />
        <mesh geometry={nodes.Object048.geometry} material={materials['03 - Default']} />
        <mesh geometry={nodes.Object049.geometry} material={materials['03 - Default']} />
        <mesh geometry={nodes.Object050.geometry} material={materials['03 - Default']} />
        <mesh geometry={nodes.Object051.geometry} material={materials['03 - Default']} />
        <mesh geometry={nodes.Object052.geometry} material={materials['22']} />
        <mesh geometry={nodes.Object053.geometry} material={materials['03 - Default']} />
        <mesh geometry={nodes.Rectangl10.geometry} material={materials['01 - Default']} />
        <mesh geometry={nodes.Rectangl11.geometry} material={materials['01 - Default']} />
        <mesh geometry={nodes.Rectangl12.geometry} material={materials['01 - Default']} />
        <mesh geometry={nodes.Rectangle1.geometry} material={materials['01 - Default']} />
        <mesh geometry={nodes.Rectangle2.geometry} material={materials['01 - Default']} />
        <mesh geometry={nodes.Rectangle3.geometry} material={materials['01 - Default']} />
        <mesh geometry={nodes.Rectangle4.geometry} material={materials['01 - Default']} />
        <mesh geometry={nodes.Rectangle5.geometry} material={materials['01 - Default']} />
        <mesh geometry={nodes.Rectangle6.geometry} material={materials['01 - Default']} />
        <mesh geometry={nodes.Rectangle7.geometry} material={materials['01 - Default']} />
        <mesh geometry={nodes.Rectangle8.geometry} material={materials['01 - Default']} />
        <mesh geometry={nodes.Rectangle9.geometry} material={materials['01 - Default']} />
        <mesh geometry={nodes.Shape021.geometry} material={materials['[Color_008]3']} />
        <mesh geometry={nodes.Mesh_137.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_137_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_138.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_138_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes['Group#635'].geometry} material={materials.Material23} />
        <mesh geometry={nodes['Group#635001'].geometry} material={materials.Material23} />
        <mesh geometry={nodes['Group#70'].geometry} material={materials.Material23} />
        <mesh geometry={nodes['Group#70001'].geometry} material={materials.Material23} />
        <mesh geometry={nodes['Group#70002'].geometry} material={materials.Material23} />
        <mesh geometry={nodes['Group#70003'].geometry} material={materials.Material23} />
        <mesh geometry={nodes['Group#70004'].geometry} material={materials.Material23} />
        <mesh geometry={nodes['Group#70005'].geometry} material={materials.Material23} />
        <mesh geometry={nodes['Group#70006'].geometry} material={materials.Material23} />
        <mesh geometry={nodes.Mesh_393_1.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_393_2.geometry} material={materials.Color_A05} />
        <mesh geometry={nodes.Mesh_393_3.geometry} material={materials['roof']} material-color={props.customColors.roof}/>
        <mesh geometry={nodes.Mesh_393_4.geometry} material={materials['[0002_MediumVioletRed]5']} />
        <mesh geometry={nodes.Mesh_585_1.geometry} material={materials['interior']}material-color={props.customColors.interior} />
        <mesh geometry={nodes.Mesh_585_2.geometry} material={materials['[0002_MediumVioletRed]6']} />
        <mesh geometry={nodes.Mesh_585_3.geometry} material={materials['interior']}material-color={props.customColors.interior} />
        <mesh geometry={nodes.Mesh_585_4.geometry} material={materials['0014_DarkSalmon']} /> 
        <mesh geometry={nodes.Mesh_585_5.geometry} material={materials['0004_HotPink']} />
        <mesh geometry={nodes.Mesh_585_6.geometry} material={materials['[0017_IndianRed]4']} />
        <mesh geometry={nodes.Mesh_585_7.geometry} material={materials['[0004_HotPink]3']} />
        <mesh geometry={nodes.Mesh_585_8.geometry} material={materials['[Color_002]3']} />
        <mesh geometry={nodes.Mesh_585_9.geometry} material={materials['[Color_007]1']} />
        <mesh geometry={nodes.Mesh_585_10.geometry} material={materials['tile']} material-color={props.customColors.tile}/>
        <mesh geometry={nodes.Mesh_585_11.geometry} material={materials['0013_LightCoral']} />
        <mesh geometry={nodes.Mesh_585_12.geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Group#2'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#2001'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#2002'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#2003'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#2004'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#2005'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#2006'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#2007'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#2008'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#2009'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#2010'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#2011'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#2012'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#2013'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#2014'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#4'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#5'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#48'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#48001'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#48002'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#48003'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#50'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#51'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes.Mesh_589_1.geometry} material={materials['roof']} material-color={props.customColors.roof}/>
        <mesh geometry={nodes.Mesh_589_2.geometry} material={materials.Color_A05} />
        <mesh geometry={nodes.Mesh_589_3.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_589_4.geometry} material={materials['[0002_MediumVioletRed]5']} />
        <mesh geometry={nodes.Mesh_589_5.geometry} material={materials['0013_LightCoral']} />
        <mesh geometry={nodes.Mesh_855_1.geometry} material={materials['[Color_F21]1']} />
        <mesh geometry={nodes.Mesh_855_2.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_855_3.geometry} material={materials['0006_Pink']} />
        <mesh geometry={nodes.Mesh_855_4.geometry} material={materials['Fence']} material-color={props.customColors.Fence}/>
        <mesh geometry={nodes.Mesh_855_5.geometry} material={materials['[Color_A06]3']} />
        <mesh geometry={nodes.Mesh_855_6.geometry} material={materials['Fence']} material-color={props.customColors.Fence}/>
        <mesh geometry={nodes.Mesh_855_7.geometry} material={materials['[0004_HotPink]4']} />
        <mesh geometry={nodes.Mesh_932_1.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_932_2.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_931.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_933_1.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_933_2.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_933_3.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Silhouette_Man_Walking_Bag.geometry} material={materials['<Black>1']} />
        <mesh geometry={nodes.Silhouette_Man_Walking_Bag001.geometry} material={materials['<Black>1']} />
        <mesh geometry={nodes.Silhouette_Man_Walking_Bag002.geometry} material={materials['<Black>1']} />
        <mesh geometry={nodes.Mesh_916.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_916_1.geometry} material={materials['<Black>']} />
        <mesh geometry={nodes.Mesh_972.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_972_1.geometry} material={materials['<Black>']} />
      </group>
    )
  }

  function Model4() {
    const [interior,setInterior] = useState("ffffff")
    const [Fence,setFence] = useState("ffffff")
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
                      <Model customColors={{interior:interior, Fence:Fence, tile:tile, roof:roof}}/>
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
                        <label for="body">Paint</label>
                      </div>
  
                    <div>
                        <input type="color" id="Fence" name="Fence"
                                value={Fence} 
                                onChange={(e)=> setFence(e.target.value)}/>
                        <label for="body">Fence</label>
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
  
  export default Model4;
  