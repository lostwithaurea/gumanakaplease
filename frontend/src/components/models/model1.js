import '../css/model.css';
import React, {Suspense, useRef, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import {OrbitControls, useGLTF} from "@react-three/drei";
import { useNavigate } from 'react-router-dom';

export function Model(props) {
  const { nodes, materials } = useGLTF('/model1.gltf')

  return (
    <group {...props} dispose={null}>
      <group position={[-15.37, 0, 0]}>
        <mesh geometry={nodes['3DGeom~2_Defintion#1'].geometry} material={materials['Material~6']} />
        <mesh geometry={nodes['3DGeom~3_Defintion#1'].geometry} material={materials['Material~4']} />
        <mesh geometry={nodes['3DGeom~4_Defintion#1'].geometry} material={materials['Material~8']} />
        <mesh geometry={nodes['3DGeom~35_Defintion'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~34_Defintion'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~30_Defintion'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~31_Defintion'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~38_Defintion'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~39_Defintion#1'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~40_Defintion#1'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~41_Defintion#2'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~44_Defintion#1'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~45_Defintion#2'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~42_Defintion#2'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~43_Defintion#2'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~64_Defintion#1'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~65_Defintion#1'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~74_Defintion'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~75_Defintion'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~66_Defintion#1'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~67_Defintion#1'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~58_Defintion#1'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~59_Defintion#1'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~68_Defintion#1'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~69_Defintion#1'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~50_Defintion#2'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~51_Defintion#2'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~52_Defintion#1'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~53_Defintion#1'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~70_Defintion#1'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~71_Defintion#1'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~60_Defintion#1'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~61_Defintion#1'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~72_Defintion'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~73_Defintion'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~56_Defintion#2'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~57_Defintion#1'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~62_Defintion#1'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~63_Defintion#2'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~54_Defintion#1'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~55_Defintion#1'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~22_Defintion#1'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~23_Defintion#1'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~14_Defintion'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~15_Defintion'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~20_Defintion'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~21_Defintion'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~32_Defintion'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~33_Defintion'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~18_Defintion'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~19_Defintion'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~6_Defintion#1'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~7_Defintion#1'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~12_Defintion#1'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~13_Defintion'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~16_Defintion'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~17_Defintion'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~10_Defintion#1'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~11_Defintion#1'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~100_Defintion'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~101_Defintion'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~46_Defintion#2'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~47_Defintion#2'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~26_Defintion'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~27_Defintion'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~24_Defintion#1'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~25_Defintion'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~8_Defintion'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~9_Defintion#1'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~48_Defintion#2'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~49_Defintion#1'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~28_Defintion'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~29_Defintion'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~36_Defintion'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~37_Defintion'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~76_Defintion'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~77_Defintion'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~86_Defintion'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~87_Defintion'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~88_Defintion'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~89_Defintion'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~90_Defintion'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~91_Defintion'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~84_Defintion'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~85_Defintion'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~92_Defintion'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~93_Defintion'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~98_Defintion'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~99_Defintion'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~78_Defintion'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~79_Defintion'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~82_Defintion'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~83_Defintion'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~80_Defintion'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~81_Defintion'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~94_Defintion'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~95_Defintion'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~96_Defintion'].geometry} material={materials['Material~72']} />
        <mesh geometry={nodes['3DGeom~97_Defintion'].geometry} material={materials['Material~86']} />
        <mesh geometry={nodes['3DGeom~5_Defintion#1'].geometry} material={materials['Material~5']} />
        <mesh geometry={nodes['3DGeom~1_Defintion#1'].geometry} material={materials['Material~3']} />
        <mesh geometry={nodes.Mesh_2107.geometry} material={materials['Metal_Corrogated_Shiny.001']} />
        <mesh geometry={nodes.Mesh_2108_1.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_2108_2.geometry} material={materials.Sophie_Shirt_Gray} />
        <mesh geometry={nodes.Mesh_2109.geometry} material={materials['Metal_Corrogated_Shiny.001']} />
        <mesh geometry={nodes.Mesh_2110_1.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_2110_2.geometry} material={materials.Sophie_Shirt_Gray} />
        <mesh geometry={nodes.Mesh_2115.geometry} material={materials['default material']}>
          <mesh geometry={nodes.Mesh_2111.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_2112.geometry} material={materials['[Color_008]2']} />
          <mesh geometry={nodes.Mesh_2113.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_2114.geometry} material={materials['default material']} />
        </mesh>
        <mesh geometry={nodes.Mesh_2116.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_2117_1.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_2117_2.geometry} material={materials.Color_D05} />
        <mesh geometry={nodes.Mesh_2118.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_2119.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_2120.geometry} material={materials['[Color_008]2']} />
        <mesh geometry={nodes.Mesh_2121.geometry} material={materials['[Color_008]2']} />
        <mesh geometry={nodes.Mesh_179.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_180.geometry} material={materials['DE-MAN-806-Q-WAL_Material_1']} />
        <mesh geometry={nodes.Mesh_181.geometry} material={materials.LAQUEADO_branco} />
        <mesh geometry={nodes.Mesh_182.geometry} material={materials.Material5} />
        <mesh geometry={nodes.Mesh_172.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_173.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#104'].geometry} material={materials['DE-MAN-806-Q-WAL_Material_1']} />
        <mesh geometry={nodes['Group#104001'].geometry} material={materials['DE-MAN-806-Q-WAL_Material_1']} />
        <mesh geometry={nodes['Group#105'].geometry} material={materials['DE-MAN-806-Q-WAL_Material_1']} />
        <mesh geometry={nodes['Group#99'].geometry} material={materials['DE-MAN-806-Q-WAL_Material_1']} />
        <mesh geometry={nodes['Group#99001'].geometry} material={materials['DE-MAN-806-Q-WAL_Material_1']} />
        <mesh geometry={nodes.Mesh_190.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_191.geometry} material={materials['DE-MAN-806-Q-WAL_Material_1']} />
        <mesh geometry={nodes.Mesh_192.geometry} material={materials.LAQUEADO_branco} />
        <mesh geometry={nodes.Mesh_193.geometry} material={materials.Material5} />
        <mesh geometry={nodes.Mesh_183.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_184.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#104002'].geometry} material={materials['DE-MAN-806-Q-WAL_Material_1']} />
        <mesh geometry={nodes['Group#104003'].geometry} material={materials['DE-MAN-806-Q-WAL_Material_1']} />
        <mesh geometry={nodes['Group#105001'].geometry} material={materials['DE-MAN-806-Q-WAL_Material_1']} />
        <mesh geometry={nodes['Group#99002'].geometry} material={materials['DE-MAN-806-Q-WAL_Material_1']} />
        <mesh geometry={nodes['Group#99003'].geometry} material={materials['DE-MAN-806-Q-WAL_Material_1']} />
        <mesh geometry={nodes.Travesseiro.geometry} material={materials['[Color_B24]1']} />
        <mesh geometry={nodes.Travesseiro001.geometry} material={materials['[Color_B24]1']} />
        <mesh geometry={nodes.Travesseiro002.geometry} material={materials['[Color_B24]1']} />
        <mesh geometry={nodes.Travesseiro003.geometry} material={materials['[Color_B24]1']} />
        <mesh geometry={nodes['WALTEROM_ARMCHAIR_LAF_7842-1301_A015-A_pivot'].geometry} material={materials['1']} />
        <mesh geometry={nodes['DE-MAN-806-Q-WAL_Component_06#1'].geometry} material={materials['DE-MAN-806-Q-WAL_Material_1']} />
        <mesh geometry={nodes['DE-MAN-806-Q-WAL_Component_07#1'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['DE-MAN-806-Q-WAL_Component_07#1001'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['DE-MAN-806-Q-WAL_Component_08#2'].geometry} material={materials['DE-MAN-806-Q-WAL_Material_1']} />
        <mesh geometry={nodes.Mesh_162.geometry} material={materials['CARVALHO BERLIM 921']}>
          <mesh geometry={nodes['Component#310'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#311'].geometry} material={materials['default material']} />
        </mesh>
        <mesh geometry={nodes.Mesh_213.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_214.geometry} material={materials['DE-MAN-806-Q-WAL_Material_1']} />
        <mesh geometry={nodes.Mesh_215.geometry} material={materials.LAQUEADO_branco} />
        <mesh geometry={nodes.Mesh_216.geometry} material={materials.Material5} />
        <mesh geometry={nodes.Mesh_206.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_207.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#104004'].geometry} material={materials['DE-MAN-806-Q-WAL_Material_1']} />
        <mesh geometry={nodes['Group#104005'].geometry} material={materials['DE-MAN-806-Q-WAL_Material_1']} />
        <mesh geometry={nodes['Group#105002'].geometry} material={materials['DE-MAN-806-Q-WAL_Material_1']} />
        <mesh geometry={nodes['Group#99004'].geometry} material={materials['DE-MAN-806-Q-WAL_Material_1']} />
        <mesh geometry={nodes['Group#99005'].geometry} material={materials['DE-MAN-806-Q-WAL_Material_1']} />
        <mesh geometry={nodes.Mesh_224.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_225.geometry} material={materials['DE-MAN-806-Q-WAL_Material_1']} />
        <mesh geometry={nodes.Mesh_226.geometry} material={materials.LAQUEADO_branco} />
        <mesh geometry={nodes.Mesh_227.geometry} material={materials.Material5} />
        <mesh geometry={nodes.Mesh_217.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_218.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#104006'].geometry} material={materials['DE-MAN-806-Q-WAL_Material_1']} />
        <mesh geometry={nodes['Group#104007'].geometry} material={materials['DE-MAN-806-Q-WAL_Material_1']} />
        <mesh geometry={nodes['Group#105003'].geometry} material={materials['DE-MAN-806-Q-WAL_Material_1']} />
        <mesh geometry={nodes['Group#99006'].geometry} material={materials['DE-MAN-806-Q-WAL_Material_1']} />
        <mesh geometry={nodes['Group#99007'].geometry} material={materials['DE-MAN-806-Q-WAL_Material_1']} />
        <mesh geometry={nodes.Travesseiro004.geometry} material={materials['[Color_B24]1']} />
        <mesh geometry={nodes.Travesseiro005.geometry} material={materials['[Color_B24]1']} />
        <mesh geometry={nodes.Travesseiro006.geometry} material={materials['[Color_B24]1']} />
        <mesh geometry={nodes.Travesseiro007.geometry} material={materials['[Color_B24]1']} />
        <mesh geometry={nodes['WALTEROM_ARMCHAIR_LAF_7842-1301_A015-A_pivot001'].geometry} material={materials['1']} />
        <mesh geometry={nodes['DE-MAN-806-Q-WAL_Component_06#1001'].geometry} material={materials['DE-MAN-806-Q-WAL_Material_1']} />
        <mesh geometry={nodes['DE-MAN-806-Q-WAL_Component_07#1002'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['DE-MAN-806-Q-WAL_Component_07#1003'].geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['DE-MAN-806-Q-WAL_Component_08#2001'].geometry} material={materials['DE-MAN-806-Q-WAL_Material_1']} />
        <mesh geometry={nodes.Mesh_196.geometry} material={materials['CARVALHO BERLIM 921']}>
          <mesh geometry={nodes['Component#310001'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#311001'].geometry} material={materials['default material']} />
        </mesh>
        <mesh geometry={nodes.Mesh_1571.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_1571_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_1572.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_1572_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_1574.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_1574_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_1575.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_1575_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_1570.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_1573.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_1577.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_1577_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_1578.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_1578_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_1580.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_1580_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_1581.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_1581_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_1576.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_1579.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_1926.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_1926_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_1927.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_1927_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_1925.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#561'].geometry} material={materials['CROMO PERFIL METALICO1']} />
        <mesh geometry={nodes['Group#561001'].geometry} material={materials['CROMO PERFIL METALICO1']} />
        <mesh geometry={nodes['Component#139'].geometry} material={materials.PRZYCISK1} />
        <mesh geometry={nodes['Component#139001'].geometry} material={materials.PRZYCISK1} />
        <mesh geometry={nodes['Group#16'].geometry} material={materials['[0120_Orchid]2']} />
        <mesh geometry={nodes['Group#16001'].geometry} material={materials['[0120_Orchid]2']} />
        <mesh geometry={nodes['Group#17'].geometry} material={materials['[0120_Orchid]2']} />
        <mesh geometry={nodes['Group#17001'].geometry} material={materials['[0120_Orchid]2']} />
        <mesh geometry={nodes.Mesh_1929.geometry} material={materials['[0120_Orchid]2']} />
        <mesh geometry={nodes.Mesh_1928_1.geometry} material={materials['[0120_Orchid]2']} />
        <mesh geometry={nodes.Mesh_1928_2.geometry} material={materials.wood1} />
        <mesh geometry={nodes['Group#561002'].geometry} material={materials['CROMO PERFIL METALICO1']} />
        <mesh geometry={nodes['Group#561003'].geometry} material={materials['CROMO PERFIL METALICO1']} />
        <mesh geometry={nodes['Component#139002'].geometry} material={materials.PRZYCISK1} />
        <mesh geometry={nodes['Component#139003'].geometry} material={materials.PRZYCISK1} />
        <mesh geometry={nodes['Group#16002'].geometry} material={materials['[0120_Orchid]2']} />
        <mesh geometry={nodes['Group#16003'].geometry} material={materials['[0120_Orchid]2']} />
        <mesh geometry={nodes['Group#17002'].geometry} material={materials['[0120_Orchid]2']} />
        <mesh geometry={nodes['Group#17003'].geometry} material={materials['[0120_Orchid]2']} />
        <mesh geometry={nodes.Mesh_1946.geometry} material={materials['[0120_Orchid]2']} />
        <mesh geometry={nodes.Mesh_1945_1.geometry} material={materials['[0120_Orchid]2']} />
        <mesh geometry={nodes.Mesh_1945_2.geometry} material={materials.wood1} />
        <mesh geometry={nodes['Group#561004'].geometry} material={materials['CROMO PERFIL METALICO1']} />
        <mesh geometry={nodes['Group#561005'].geometry} material={materials['CROMO PERFIL METALICO1']} />
        <mesh geometry={nodes['Component#139004'].geometry} material={materials.PRZYCISK1} />
        <mesh geometry={nodes['Component#139005'].geometry} material={materials.PRZYCISK1} />
        <mesh geometry={nodes['Group#16004'].geometry} material={materials['[0120_Orchid]2']} />
        <mesh geometry={nodes['Group#16005'].geometry} material={materials['[0120_Orchid]2']} />
        <mesh geometry={nodes['Group#17004'].geometry} material={materials['[0120_Orchid]2']} />
        <mesh geometry={nodes['Group#17005'].geometry} material={materials['[0120_Orchid]2']} />
        <mesh geometry={nodes.Mesh_1976.geometry} material={materials['[0120_Orchid]2']} />
        <mesh geometry={nodes.Mesh_1975_1.geometry} material={materials['[0120_Orchid]2']} />
        <mesh geometry={nodes.Mesh_1975_2.geometry} material={materials.wood1} />
        <mesh geometry={nodes['Group#561006'].geometry} material={materials['CROMO PERFIL METALICO1']} />
        <mesh geometry={nodes['Group#561007'].geometry} material={materials['CROMO PERFIL METALICO1']} />
        <mesh geometry={nodes['Component#139006'].geometry} material={materials.PRZYCISK1} />
        <mesh geometry={nodes['Component#139007'].geometry} material={materials.PRZYCISK1} />
        <mesh geometry={nodes['Group#16006'].geometry} material={materials['[0120_Orchid]2']} />
        <mesh geometry={nodes['Group#16007'].geometry} material={materials['[0120_Orchid]2']} />
        <mesh geometry={nodes['Group#17006'].geometry} material={materials['[0120_Orchid]2']} />
        <mesh geometry={nodes['Group#17007'].geometry} material={materials['[0120_Orchid]2']} />
        <mesh geometry={nodes.Mesh_1986.geometry} material={materials['[0120_Orchid]2']} />
        <mesh geometry={nodes.Mesh_1985_1.geometry} material={materials['[0120_Orchid]2']} />
        <mesh geometry={nodes.Mesh_1985_2.geometry} material={materials.wood1} />
        <mesh geometry={nodes.Mesh_1938.geometry} material={materials.treku_aura_c2_sideboard_gloss_black1} />
        <mesh geometry={nodes.Mesh_1939.geometry} material={materials['Color M00']} />
        <mesh geometry={nodes.Mesh_1940.geometry} material={materials.treku_aura_c2_sideboard_wood1} />
        <mesh geometry={nodes.Mesh_1941.geometry} material={materials['Color M00']} />
        <mesh geometry={nodes.Mesh_1942.geometry} material={materials['Color M00']} />
        <mesh geometry={nodes.Mesh_1943.geometry} material={materials.treku_aura_c2_sideboard_wood1} />
        <mesh geometry={nodes.Mesh_1944.geometry} material={materials.treku_aura_c2_sideboard_wood1} />
        <mesh geometry={nodes['Component#1'].geometry} material={materials['0136_Charcoal']} />
        <mesh geometry={nodes.Mesh_1955.geometry} material={materials['[Color L05]1']} />
        <mesh geometry={nodes.Mesh_1955_1.geometry} material={materials.VIDRO2} />
        <mesh geometry={nodes.Mesh_1557_1.geometry} material={materials['0136_Charcoal']} />
        <mesh geometry={nodes.Mesh_1557_2.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1557_3.geometry} material={materials['Burnt Sienna']} />
        <mesh geometry={nodes.Mesh_1557_4.geometry} material={materials['Roofing Shingles Asphalt']} />
        <mesh geometry={nodes.Mesh_1562.geometry} material={materials['0136_Charcoal']}>
          <mesh geometry={nodes.Handle.geometry} material={materials.Laminate_D02_120cm1} />
          <mesh geometry={nodes.Handle_Base.geometry} material={materials.Laminate_D02_120cm1} />
          <mesh geometry={nodes['Component#14'].geometry} material={materials['0136_Charcoal']} />
          <mesh geometry={nodes.Mesh_1561.geometry} material={materials.Glass1} />
        </mesh>
        <mesh geometry={nodes.Mesh_1567.geometry} material={materials['0136_Charcoal']}>
          <mesh geometry={nodes.Handle_Base001.geometry} material={materials.Laminate_D02_120cm1} />
          <mesh geometry={nodes.Handle001.geometry} material={materials.Laminate_D02_120cm1} />
          <mesh geometry={nodes['Component#14001'].geometry} material={materials['0136_Charcoal']} />
          <mesh geometry={nodes.Mesh_1566.geometry} material={materials.Glass1} />
        </mesh>
        <mesh geometry={nodes.Mesh_1569.geometry} material={materials['0136_Charcoal']} />
        <mesh geometry={nodes.Mesh_1924_1.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes.Mesh_1924_2.geometry} material={materials['[Color_F21]2']} />
        <mesh geometry={nodes.Mesh_1924_3.geometry} material={materials['0047_Khaki']} />
        <mesh geometry={nodes.Mesh_1924_4.geometry} material={materials['default material']}  />
        <mesh geometry={nodes.Mesh_1924_5.geometry} material={materials['0136_Charcoal']} />
        <mesh geometry={nodes.Mesh_1924_6.geometry} material={materials['0014_DarkSalmon']} />
        <mesh geometry={nodes.Mesh_1924_7.geometry} material={materials['[0004_HotPink]3']} />
        <mesh geometry={nodes.Mesh_1924_8.geometry} material={materials.Material11} />
        <mesh geometry={nodes.Mesh_1924_9.geometry} material={materials['LAMINATED FLOORING']} />
        <mesh geometry={nodes.Mesh_1924_10.geometry} material={materials['[Color_A06]3']} />
        <mesh geometry={nodes.Mesh_1924_11.geometry} material={materials['[0016_Tomato]3']} />
        <mesh geometry={nodes.Mesh_1924_12.geometry} material={materials['[0004_HotPink]1']} />
        <mesh geometry={nodes.Mesh_1924_13.geometry} material={materials['[Color_A01]2']} />
        <mesh geometry={nodes.Mesh_1924_14.geometry} material={materials['tile']} material-color={props.customColors.tile}/>
        <mesh geometry={nodes.Mesh_1924_15.geometry} material={materials['Color_M03']}/>
        <mesh geometry={nodes['Component#106'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#106001'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#108'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#108001'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#110'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#110001'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#117'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#117001'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#118'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#118001'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#119'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#119001'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#121'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#121001'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#122'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#122001'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#123'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#123001'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#124'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#124001'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#127'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#127001'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#131'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#131001'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#133'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#133001'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#134'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#134001'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#135'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#135001'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#150'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#150001'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#105'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#105001'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#107'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#107001'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#109'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#109001'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#115'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#115001'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#120'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#120001'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#125'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#125001'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#128'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#128001'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#130'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#130001'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#132'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#132001'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#138'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#138001'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#141'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#141001'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#147'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#147001'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#151'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#151001'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#152'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#152001'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#85001'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#116'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#126'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#116001'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#126001'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#101'].geometry} material={materials['[Color_008]1']}>
          <mesh geometry={nodes['Component#126002'].geometry} material={materials['[Color_008]1']} />
        </mesh>
        <mesh geometry={nodes['Component#101001'].geometry} material={materials['[Color_008]1']}>
          <mesh geometry={nodes['Component#126003'].geometry} material={materials['[Color_008]1']} />
        </mesh>
        <mesh geometry={nodes['Component#103'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Component#103001'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Component#4'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#4001'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#85'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#86'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#86001'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#87'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Component#87001'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Component#90'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#90001'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#99'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Component#106002'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#106003'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#108002'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#108003'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#110002'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#110003'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#117002'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#117003'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#118002'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#118003'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#119002'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#119003'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#121002'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#121003'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#122002'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#122003'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#123002'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#123003'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#124002'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#124003'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#127002'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#127003'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#131002'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#131003'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#133002'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#133003'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#134002'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#134003'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#135002'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#135003'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#150002'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#150003'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#105002'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#105003'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#107002'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#107003'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#109002'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#109003'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#115002'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#115003'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#120002'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#120003'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#125002'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#125003'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#128002'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#128003'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#130002'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#130003'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#132002'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#132003'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#138002'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#138003'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#141002'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#141003'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#147002'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#147003'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#151002'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#151003'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#152002'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#152003'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#85003'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#116002'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#126004'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#116003'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#126005'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#101002'].geometry} material={materials['[Color_008]1']}>
          <mesh geometry={nodes['Component#126006'].geometry} material={materials['[Color_008]1']} />
        </mesh>
        <mesh geometry={nodes['Component#101003'].geometry} material={materials['[Color_008]1']}>
          <mesh geometry={nodes['Component#126007'].geometry} material={materials['[Color_008]1']} />
        </mesh>
        <mesh geometry={nodes['Component#103002'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Component#103003'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Component#4002'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#4003'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#85002'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#86002'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#86003'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#87002'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Component#87003'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Component#90002'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#90003'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#99001'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Component#106004'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#106005'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#108004'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#108005'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#110004'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#110005'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#117004'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#117005'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#118004'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#118005'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#119004'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#119005'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#121004'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#121005'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#122004'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#122005'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#123004'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#123005'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#124004'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#124005'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#127004'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#127005'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#131004'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#131005'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#133004'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#133005'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#134004'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#134005'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#135004'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#135005'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#150004'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#150005'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#105004'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#105005'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#107004'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#107005'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#109004'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#109005'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#115004'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#115005'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#120004'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#120005'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#125004'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#125005'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#128004'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#128005'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#130004'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#130005'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#132004'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#132005'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#138004'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#138005'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#141004'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#141005'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#147004'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#147005'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#151004'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#151005'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#152004'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#152005'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#85005'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#116004'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#126008'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#116005'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#126009'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#101004'].geometry} material={materials['[Color_008]1']}>
          <mesh geometry={nodes['Component#126010'].geometry} material={materials['[Color_008]1']} />
        </mesh>
        <mesh geometry={nodes['Component#101005'].geometry} material={materials['[Color_008]1']}>
          <mesh geometry={nodes['Component#126011'].geometry} material={materials['[Color_008]1']} />
        </mesh>
        <mesh geometry={nodes['Component#103004'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Component#103005'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Component#4004'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#4005'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#85004'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#86004'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#86005'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#87004'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Component#87005'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Component#90004'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#90005'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#99002'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Component#106006'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#106007'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#108006'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#108007'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#110006'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#110007'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#117006'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#117007'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#118006'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#118007'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#119006'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#119007'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#121006'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#121007'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#122006'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#122007'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#123006'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#123007'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#124006'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#124007'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#127006'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#127007'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#131006'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#131007'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#133006'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#133007'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#134006'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#134007'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#135006'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#135007'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#150006'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#150007'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#105006'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#105007'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#107006'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#107007'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#109006'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#109007'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#115006'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#115007'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#120006'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#120007'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#125006'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#125007'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#128006'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#128007'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#130006'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#130007'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#132006'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#132007'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#138006'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#138007'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#141006'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#141007'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#147006'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#147007'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#151006'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#151007'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#152006'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#152007'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#85007'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#116006'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#126012'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#116007'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#126013'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#101006'].geometry} material={materials['[Color_008]1']}>
          <mesh geometry={nodes['Component#126014'].geometry} material={materials['[Color_008]1']} />
        </mesh>
        <mesh geometry={nodes['Component#101007'].geometry} material={materials['[Color_008]1']}>
          <mesh geometry={nodes['Component#126015'].geometry} material={materials['[Color_008]1']} />
        </mesh>
        <mesh geometry={nodes['Component#103006'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Component#103007'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Component#4006'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#4007'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#85006'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#86006'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#86007'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#87006'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Component#87007'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Component#90006'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#90007'].geometry} material={materials['[Wood_ Floor]2']} />
        <mesh geometry={nodes['Component#99003'].geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes['Component#93'].geometry} material={materials.vidro_vaso_glass_w0sdfsdf0000000w5550000s555w5w5ww} />
        <mesh geometry={nodes.Mesh_1919.geometry} material={materials.caule_planta_fdsdfsdwssssssssssssssssssssssssssssssssssssssssss} />
        <mesh geometry={nodes.Mesh_1919_1.geometry} material={materials.folha_planta_hd_fdsfad0fas65df0a16s50r1e2a01s2df10asd1af5sd4f4w} />
        <mesh geometry={nodes.Mesh_1920.geometry} material={materials.caule_planta_fdsdfsdwssssssssssssssssssssssssssssssssssssssssss} />
        <mesh geometry={nodes.Mesh_1920_1.geometry} material={materials.folha_planta_hd_fdsfad0fas65df0a16s50r1e2a01s2df10asd1af5sd4f4w} />
        <mesh geometry={nodes.Mesh_1921.geometry} material={materials.caule_planta_fdsdfsdwssssssssssssssssssssssssssssssssssssssssss} />
        <mesh geometry={nodes.Mesh_1921_1.geometry} material={materials.folha_planta_hd_fdsfad0fas65df0a16s50r1e2a01s2df10asd1af5sd4f4w} />
        <mesh geometry={nodes.Mesh_1922.geometry} material={materials.caule_planta_fdsdfsdwssssssssssssssssssssssssssssssssssssssssss} />
        <mesh geometry={nodes.Mesh_1922_1.geometry} material={materials.folha_planta_hd_fdsfad0fas65df0a16s50r1e2a01s2df10asd1af5sd4f4w} />
        <mesh geometry={nodes.Mesh_1744_1.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1744_2.geometry} material={materials.Material126} />
        <mesh geometry={nodes.Mesh_1745.geometry} material={materials['[0136_Charcoal]2']} />
        <mesh geometry={nodes.Mesh_1746.geometry} material={materials['[0136_Charcoal]2']} />
        <mesh geometry={nodes.Mesh_1755.geometry} material={materials['0136_Charcoal']} />
        <mesh geometry={nodes['组#178'].geometry} material={materials['[0136_Charcoal]2']}>
          <mesh geometry={nodes.Mesh_1747.geometry} material={materials['[0136_Charcoal]2']} />
        </mesh>
        <mesh geometry={nodes['组#178001'].geometry} material={materials['[0136_Charcoal]2']}>
          <mesh geometry={nodes.Mesh_1749.geometry} material={materials['[0136_Charcoal]2']} />
        </mesh>
        <mesh geometry={nodes['组#178002'].geometry} material={materials['[0136_Charcoal]2']}>
          <mesh geometry={nodes.Mesh_1751.geometry} material={materials['[0136_Charcoal]2']} />
        </mesh>
        <mesh geometry={nodes['组#178003'].geometry} material={materials['[0136_Charcoal]2']}>
          <mesh geometry={nodes.Mesh_1753.geometry} material={materials['[0136_Charcoal]2']} />
        </mesh>
        <mesh geometry={nodes.Mesh_1923.geometry} material={materials['[0004_HotPink]3']} />
        <mesh geometry={nodes.Mesh_1956.geometry} material={materials['roof']} material-color={props.customColors.roof}/>
        <mesh geometry={nodes.Mesh_1957.geometry} material={materials['roof']} material-color={props.customColors.roof}/>
        <mesh geometry={nodes.Mesh_1973_1.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes.Mesh_1973_2.geometry} material={materials['0014_DarkSalmon']} />
        <mesh geometry={nodes.Mesh_1973_3.geometry} material={materials['[0016_Tomato]3']} />
        <mesh geometry={nodes.Mesh_1973_4.geometry} material={materials['0047_Khaki']} />
        <mesh geometry={nodes.Mesh_1973_5.geometry} material={materials.Material21} />
        <mesh geometry={nodes.Mesh_1973_6.geometry} material={materials['0136_Charcoal']} />
        <mesh geometry={nodes.Mesh_1973_7.geometry} material={materials['[Color_A01]2']} />
        <mesh geometry={nodes.Mesh_1959.geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes.Mesh_1960.geometry} material={materials.PRZYCISK} />
        <mesh geometry={nodes.Mesh_1961.geometry} material={materials['CROMO PERFIL METALICO1']} />
        <mesh geometry={nodes.Mesh_1962.geometry} material={materials.PRZYCISK} />
        <mesh geometry={nodes.Mesh_1963.geometry} material={materials.PRZYCISK} />
        <mesh geometry={nodes.Mesh_1964.geometry} material={materials['[0004_HotPink]4']} />
        <mesh geometry={nodes.Mesh_1965.geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes.Mesh_1966.geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes.Mesh_1958.geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes.Mesh_1971.geometry} material={materials['0136_Charcoal']}>
          <mesh geometry={nodes.Handle_Base002.geometry} material={materials.Laminate_D02_120cm1} />
          <mesh geometry={nodes.Handle002.geometry} material={materials.Laminate_D02_120cm1} />
          <mesh geometry={nodes['Component#14002'].geometry} material={materials['0136_Charcoal']} />
          <mesh geometry={nodes.Mesh_1970.geometry} material={materials.Glass1} />
        </mesh>
        <mesh geometry={nodes.Mesh_1972_1.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes.Mesh_1972_2.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1974_1.geometry} material={materials['0136_Charcoal']} />
        <mesh geometry={nodes.Mesh_1974_2.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1974_3.geometry} material={materials['Burnt Sienna']} />
        <mesh geometry={nodes.Mesh_1974_4.geometry} material={materials['Roofing Shingles Asphalt']} />
        <mesh geometry={nodes['Group#101'].geometry} material={materials['Color L05']} />
        <mesh geometry={nodes.Mesh_1.geometry} material={materials['Color L05']} />
        <mesh geometry={nodes.Mesh_1_1.geometry} material={materials.VIDRO2} />
        <mesh geometry={nodes.Mesh_2.geometry} material={materials['Color L05']} />
        <mesh geometry={nodes.Mesh_2_1.geometry} material={materials.VIDRO2} />
        <mesh geometry={nodes.Mesh_3.geometry} material={materials['Color L05']} />
        <mesh geometry={nodes.Mesh_3_1.geometry} material={materials.VIDRO2} />
        <mesh geometry={nodes.Mesh_4.geometry} material={materials['Color L05']} />
        <mesh geometry={nodes.Mesh_4_1.geometry} material={materials.VIDRO2} />
        <mesh geometry={nodes['Group#217'].geometry} material={materials['[Color L05]1']} />
        <mesh geometry={nodes['sdfsdfsdf6#39'].geometry} material={materials.VIDRO2} />
        <mesh geometry={nodes.Mesh_285.geometry} material={materials['[Color L05]1']} />
        <mesh geometry={nodes.Mesh_285_1.geometry} material={materials.VIDRO2} />
        <mesh geometry={nodes['Group#221'].geometry} material={materials['[Color L05]1']} />
        <mesh geometry={nodes['Component#22'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#81'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#81001'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#22001'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#81002'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#81003'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#20'].geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Component#20001'].geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Component#68'].geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Component#73'].geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Component#23'].geometry} material={materials['Black Cable']} />
        <mesh geometry={nodes['Component#25'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#27'].geometry} material={materials['Aircon White']}>
          <mesh geometry={nodes.Mesh_482.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_482_1.geometry} material={materials['[Color_006]1']} />
          <mesh geometry={nodes['Component#74'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74001'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74002'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74003'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74004'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74005'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74006'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74007'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74008'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74009'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74010'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74011'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74012'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74013'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74014'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74015'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#19'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#82'].geometry} material={materials['default material']}>
            <mesh geometry={nodes['Component#70'].geometry} material={materials.aluminium_matte} />
            <mesh geometry={nodes['Component#76'].geometry} material={materials.aluminium_matte} />
            <mesh geometry={nodes['Component#76001'].geometry} material={materials.aluminium_matte} />
            <mesh geometry={nodes['Component#76002'].geometry} material={materials.aluminium_matte} />
          </mesh>
        </mesh>
        <mesh geometry={nodes['Component#28'].geometry} material={materials.silver_matte} />
        <mesh geometry={nodes['Component#29'].geometry} material={materials.Copper} />
        <mesh geometry={nodes['Component#63'].geometry} material={materials['Tape White']} />
        <mesh geometry={nodes['Component#64'].geometry} material={materials.Copper} />
        <mesh geometry={nodes['Component#65'].geometry} material={materials['Aircon White']} />
        <mesh geometry={nodes['Component#65001'].geometry} material={materials['Aircon White']} />
        <mesh geometry={nodes.Mesh_488.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_488_1.geometry} material={materials['Logo Midea']} />
        <mesh geometry={nodes['Component#22002'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#81004'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#81005'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#22003'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#81006'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#81007'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#20002'].geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Component#20003'].geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Component#68001'].geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Component#73001'].geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Component#23001'].geometry} material={materials['Black Cable']} />
        <mesh geometry={nodes['Component#25001'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#27001'].geometry} material={materials['Aircon White']}>
          <mesh geometry={nodes.Mesh_525.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_525_1.geometry} material={materials['[Color_006]1']} />
          <mesh geometry={nodes['Component#74016'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74017'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74018'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74019'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74020'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74021'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74022'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74023'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74024'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74025'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74026'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74027'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74028'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74029'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74030'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74031'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#19001'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#82001'].geometry} material={materials['default material']}>
            <mesh geometry={nodes['Component#70001'].geometry} material={materials.aluminium_matte} />
            <mesh geometry={nodes['Component#76003'].geometry} material={materials.aluminium_matte} />
            <mesh geometry={nodes['Component#76004'].geometry} material={materials.aluminium_matte} />
            <mesh geometry={nodes['Component#76005'].geometry} material={materials.aluminium_matte} />
          </mesh>
        </mesh>
        <mesh geometry={nodes['Component#28001'].geometry} material={materials.silver_matte} />
        <mesh geometry={nodes['Component#29001'].geometry} material={materials.Copper} />
        <mesh geometry={nodes['Component#63001'].geometry} material={materials['Tape White']} />
        <mesh geometry={nodes['Component#64001'].geometry} material={materials.Copper} />
        <mesh geometry={nodes['Component#65002'].geometry} material={materials['Aircon White']} />
        <mesh geometry={nodes['Component#65003'].geometry} material={materials['Aircon White']} />
        <mesh geometry={nodes.Mesh_531.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_531_1.geometry} material={materials['Logo Midea']} />
        <mesh geometry={nodes['Component#22004'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#81008'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#81009'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#22005'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#81010'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#81011'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#20004'].geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Component#20005'].geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Component#68002'].geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Component#73002'].geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Component#23002'].geometry} material={materials['Black Cable']} />
        <mesh geometry={nodes['Component#25002'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#27002'].geometry} material={materials['Aircon White']}>
          <mesh geometry={nodes.Mesh_1333.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_1333_1.geometry} material={materials['[Color_006]1']} />
          <mesh geometry={nodes['Component#74032'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74033'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74034'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74035'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74036'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74037'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74038'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74039'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74040'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74041'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74042'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74043'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74044'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74045'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74046'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74047'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#19002'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#82002'].geometry} material={materials['default material']}>
            <mesh geometry={nodes['Component#70002'].geometry} material={materials.aluminium_matte} />
            <mesh geometry={nodes['Component#76006'].geometry} material={materials.aluminium_matte} />
            <mesh geometry={nodes['Component#76007'].geometry} material={materials.aluminium_matte} />
            <mesh geometry={nodes['Component#76008'].geometry} material={materials.aluminium_matte} />
          </mesh>
        </mesh>
        <mesh geometry={nodes['Component#28002'].geometry} material={materials.silver_matte} />
        <mesh geometry={nodes['Component#29002'].geometry} material={materials.Copper} />
        <mesh geometry={nodes['Component#63002'].geometry} material={materials['Tape White']} />
        <mesh geometry={nodes['Component#64002'].geometry} material={materials.Copper} />
        <mesh geometry={nodes['Component#65004'].geometry} material={materials['Aircon White']} />
        <mesh geometry={nodes['Component#65005'].geometry} material={materials['Aircon White']} />
        <mesh geometry={nodes.Mesh_1339.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1339_1.geometry} material={materials['Logo Midea']} />
        <mesh geometry={nodes['Component#22006'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#81012'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#81013'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#22007'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#81014'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#81015'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#20006'].geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Component#20007'].geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Component#68003'].geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Component#73003'].geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Component#23003'].geometry} material={materials['Black Cable']} />
        <mesh geometry={nodes['Component#25003'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#27003'].geometry} material={materials['Aircon White']}>
          <mesh geometry={nodes.Mesh_1376.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_1376_1.geometry} material={materials['[Color_006]1']} />
          <mesh geometry={nodes['Component#74048'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74049'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74050'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74051'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74052'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74053'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74054'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74055'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74056'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74057'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74058'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74059'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74060'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74061'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74062'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74063'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#19003'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#82003'].geometry} material={materials['default material']}>
            <mesh geometry={nodes['Component#70003'].geometry} material={materials.aluminium_matte} />
            <mesh geometry={nodes['Component#76009'].geometry} material={materials.aluminium_matte} />
            <mesh geometry={nodes['Component#76010'].geometry} material={materials.aluminium_matte} />
            <mesh geometry={nodes['Component#76011'].geometry} material={materials.aluminium_matte} />
          </mesh>
        </mesh>
        <mesh geometry={nodes['Component#28003'].geometry} material={materials.silver_matte} />
        <mesh geometry={nodes['Component#29003'].geometry} material={materials.Copper} />
        <mesh geometry={nodes['Component#63003'].geometry} material={materials['Tape White']} />
        <mesh geometry={nodes['Component#64003'].geometry} material={materials.Copper} />
        <mesh geometry={nodes['Component#65006'].geometry} material={materials['Aircon White']} />
        <mesh geometry={nodes['Component#65007'].geometry} material={materials['Aircon White']} />
        <mesh geometry={nodes.Mesh_1382.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1382_1.geometry} material={materials['Logo Midea']} />
        <mesh geometry={nodes['Component#22008'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#81016'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#81017'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#22009'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#81018'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#81019'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#20008'].geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Component#20009'].geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Component#68004'].geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Component#73004'].geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Component#23004'].geometry} material={materials['Black Cable']} />
        <mesh geometry={nodes['Component#25004'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#27004'].geometry} material={materials['Aircon White']}>
          <mesh geometry={nodes.Mesh_1419.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_1419_1.geometry} material={materials['[Color_006]1']} />
          <mesh geometry={nodes['Component#74064'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74065'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74066'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74067'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74068'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74069'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74070'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74071'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74072'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74073'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74074'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74075'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74076'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74077'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74078'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#74079'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#19004'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#82004'].geometry} material={materials['default material']}>
            <mesh geometry={nodes['Component#70004'].geometry} material={materials.aluminium_matte} />
            <mesh geometry={nodes['Component#76012'].geometry} material={materials.aluminium_matte} />
            <mesh geometry={nodes['Component#76013'].geometry} material={materials.aluminium_matte} />
            <mesh geometry={nodes['Component#76014'].geometry} material={materials.aluminium_matte} />
          </mesh>
        </mesh>
        <mesh geometry={nodes['Component#28004'].geometry} material={materials.silver_matte} />
        <mesh geometry={nodes['Component#29004'].geometry} material={materials.Copper} />
        <mesh geometry={nodes['Component#63004'].geometry} material={materials['Tape White']} />
        <mesh geometry={nodes['Component#64004'].geometry} material={materials.Copper} />
        <mesh geometry={nodes['Component#65008'].geometry} material={materials['Aircon White']} />
        <mesh geometry={nodes['Component#65009'].geometry} material={materials['Aircon White']} />
        <mesh geometry={nodes.Mesh_1425.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1425_1.geometry} material={materials['Logo Midea']} />
        <mesh geometry={nodes['3DGeom~10_Defintion#2'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['1<1>_Defintion#1'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['2<1>_Defintion#1'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~4_Defintion#2003'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~4_Defintion#2'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~4_Defintion#2001'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~4_Defintion#2002'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~1_Defintion#7'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~2_Defintion#7'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_443.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_443_1.geometry} material={materials.LED_3200k} />
        <mesh geometry={nodes['3DGeom~10_Defintion#2001'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['1<1>_Defintion#1001'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['2<1>_Defintion#1001'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~4_Defintion#2007'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~4_Defintion#2004'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~4_Defintion#2005'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~4_Defintion#2006'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~1_Defintion#7001'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~2_Defintion#7001'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_453.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_453_1.geometry} material={materials.LED_3200k} />
        <mesh geometry={nodes['3DGeom~10_Defintion#2002'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['1<1>_Defintion#1002'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['2<1>_Defintion#1002'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~4_Defintion#2011'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~4_Defintion#2008'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~4_Defintion#2009'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~4_Defintion#2010'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~1_Defintion#7002'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~2_Defintion#7002'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_838.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_838_1.geometry} material={materials.LED_3200k} />
        <mesh geometry={nodes['3DGeom~10_Defintion#2003'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['1<1>_Defintion#1003'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['2<1>_Defintion#1003'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~4_Defintion#2015'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~4_Defintion#2012'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~4_Defintion#2013'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~4_Defintion#2014'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~1_Defintion#7003'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~2_Defintion#7003'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1136.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1136_1.geometry} material={materials.LED_3200k} />
        <mesh geometry={nodes['3DGeom~10_Defintion#2004'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['1<1>_Defintion#1004'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['2<1>_Defintion#1004'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~4_Defintion#2019'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~4_Defintion#2016'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~4_Defintion#2017'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~4_Defintion#2018'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~1_Defintion#7004'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~2_Defintion#7004'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1146.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1146_1.geometry} material={materials.LED_3200k} />
        <mesh geometry={nodes['3DGeom~10_Defintion#2005'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['1<1>_Defintion#1005'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['2<1>_Defintion#1005'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~4_Defintion#2023'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~4_Defintion#2020'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~4_Defintion#2021'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~4_Defintion#2022'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~1_Defintion#7005'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~2_Defintion#7005'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1156.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1156_1.geometry} material={materials.LED_3200k} />
        <mesh geometry={nodes['3DGeom~10_Defintion#2006'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['1<1>_Defintion#1006'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['2<1>_Defintion#1006'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~4_Defintion#2027'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~4_Defintion#2024'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~4_Defintion#2025'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~4_Defintion#2026'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~1_Defintion#7006'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~2_Defintion#7006'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1166.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1166_1.geometry} material={materials.LED_3200k} />
        <mesh geometry={nodes['3DGeom~10_Defintion#2007'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['1<1>_Defintion#1007'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['2<1>_Defintion#1007'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~4_Defintion#2031'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~4_Defintion#2028'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~4_Defintion#2029'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~4_Defintion#2030'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~1_Defintion#7007'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['3DGeom~2_Defintion#7007'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1550.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1550_1.geometry} material={materials.LED_3200k} />
        <mesh geometry={nodes.Mesh_716.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_717.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_718.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_576.geometry} material={materials['[Color_002]5']} />
        <mesh geometry={nodes.Mesh_577.geometry} material={materials.lampada} />
        <mesh geometry={nodes.Mesh_578.geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes.Mesh_755.geometry} material={materials['[Color_002]5']} />
        <mesh geometry={nodes.Mesh_756.geometry} material={materials.lampada} />
        <mesh geometry={nodes.Mesh_757.geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes.Mesh_758.geometry} material={materials['[Color_002]5']} />
        <mesh geometry={nodes.Mesh_759.geometry} material={materials.lampada} />
        <mesh geometry={nodes.Mesh_760.geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes.Mesh_761.geometry} material={materials['[Color_002]5']} />
        <mesh geometry={nodes.Mesh_762.geometry} material={materials.lampada} />
        <mesh geometry={nodes.Mesh_763.geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes.Mesh_764.geometry} material={materials['[Color_002]5']} />
        <mesh geometry={nodes.Mesh_765.geometry} material={materials.lampada} />
        <mesh geometry={nodes.Mesh_766.geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes.Mesh_720.geometry} material={materials['default material']}>
          <mesh geometry={nodes['Group#395'].geometry} material={materials['default material']} />
        </mesh>
        <mesh geometry={nodes.Mesh_722.geometry} material={materials['default material']}>
          <mesh geometry={nodes['Group#395001'].geometry} material={materials['default material']} />
        </mesh>
        <mesh geometry={nodes.Mesh_724.geometry} material={materials['default material']}>
          <mesh geometry={nodes['Group#395002'].geometry} material={materials['default material']} />
        </mesh>
        <mesh geometry={nodes.Mesh_725_1.geometry} material={materials['[0132_LightGray]2']} />
        <mesh geometry={nodes.Mesh_725_2.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh_726_1.geometry} material={materials['[0132_LightGray]2']} />
        <mesh geometry={nodes.Mesh_726_2.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh_727_1.geometry} material={materials['[0132_LightGray]2']} />
        <mesh geometry={nodes.Mesh_727_2.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh_728_1.geometry} material={materials['[0132_LightGray]2']} />
        <mesh geometry={nodes.Mesh_728_2.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh_729_1.geometry} material={materials['[0132_LightGray]2']} />
        <mesh geometry={nodes.Mesh_729_2.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh_730_1.geometry} material={materials['[0132_LightGray]2']} />
        <mesh geometry={nodes.Mesh_730_2.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh_731_1.geometry} material={materials['[0132_LightGray]2']} />
        <mesh geometry={nodes.Mesh_731_2.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh_732_1.geometry} material={materials['[0132_LightGray]2']} />
        <mesh geometry={nodes.Mesh_732_2.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh_733_1.geometry} material={materials['[0132_LightGray]2']} />
        <mesh geometry={nodes.Mesh_733_2.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh_734_1.geometry} material={materials['[0132_LightGray]2']} />
        <mesh geometry={nodes.Mesh_734_2.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh_735_1.geometry} material={materials['[0132_LightGray]2']} />
        <mesh geometry={nodes.Mesh_735_2.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh_736_1.geometry} material={materials['[0132_LightGray]2']} />
        <mesh geometry={nodes.Mesh_736_2.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh_737_1.geometry} material={materials['[0132_LightGray]2']} />
        <mesh geometry={nodes.Mesh_737_2.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh_738_1.geometry} material={materials['[0132_LightGray]2']} />
        <mesh geometry={nodes.Mesh_738_2.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh_739_1.geometry} material={materials['[0132_LightGray]2']} />
        <mesh geometry={nodes.Mesh_739_2.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh_740_1.geometry} material={materials['[0132_LightGray]2']} />
        <mesh geometry={nodes.Mesh_740_2.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh_741_1.geometry} material={materials['[0132_LightGray]2']} />
        <mesh geometry={nodes.Mesh_741_2.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh_742_1.geometry} material={materials['[0132_LightGray]2']} />
        <mesh geometry={nodes.Mesh_742_2.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh_743_1.geometry} material={materials['[0132_LightGray]2']} />
        <mesh geometry={nodes.Mesh_743_2.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh_744_1.geometry} material={materials['[0132_LightGray]2']} />
        <mesh geometry={nodes.Mesh_744_2.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh_745_1.geometry} material={materials['[0132_LightGray]2']} />
        <mesh geometry={nodes.Mesh_745_2.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh_746_1.geometry} material={materials['[0132_LightGray]2']} />
        <mesh geometry={nodes.Mesh_746_2.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh_747_1.geometry} material={materials['[0132_LightGray]2']} />
        <mesh geometry={nodes.Mesh_747_2.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh_748_1.geometry} material={materials['[0132_LightGray]2']} />
        <mesh geometry={nodes.Mesh_748_2.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh_749_1.geometry} material={materials['[0132_LightGray]2']} />
        <mesh geometry={nodes.Mesh_749_2.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh_750_1.geometry} material={materials['[0132_LightGray]2']} />
        <mesh geometry={nodes.Mesh_750_2.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh_751_1.geometry} material={materials['[0132_LightGray]2']} />
        <mesh geometry={nodes.Mesh_751_2.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh_752_1.geometry} material={materials['[0132_LightGray]2']} />
        <mesh geometry={nodes.Mesh_752_2.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh_753_1.geometry} material={materials['[0132_LightGray]2']} />
        <mesh geometry={nodes.Mesh_753_2.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh_754_1.geometry} material={materials['[0132_LightGray]2']} />
        <mesh geometry={nodes.Mesh_754_2.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes['Group#1515'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1515001'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1515002'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1515003'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1515004'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1515005'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1515006'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1515007'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1515008'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1515009'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1515010'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1515011'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1515012'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1515013'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1511'].geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Group#1511001'].geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Group#1511002'].geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Group#1511003'].geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Group#1512'].geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Group#1512001'].geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Group#1515014'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1515015'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1515016'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1515017'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1515018'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1515019'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1515020'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1515021'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1515022'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1515023'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1515024'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1515025'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1515026'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1515027'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1511004'].geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Group#1511005'].geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Group#1511006'].geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Group#1511007'].geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Group#1512002'].geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Group#1512003'].geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Group#1515028'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1515029'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1515030'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1515031'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1515032'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1515033'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1515034'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1515035'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1515036'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1515037'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1515038'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1515039'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1515040'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1515041'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#1511008'].geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Group#1511009'].geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Group#1511010'].geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Group#1511011'].geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Group#1512004'].geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Group#1512005'].geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes.Mesh_830.geometry} material={materials['Color H01']} />
        <mesh geometry={nodes.Mesh_830_1.geometry} material={materials.gIhEe0se} />
        <mesh geometry={nodes.Mesh_830_2.geometry} material={materials['Color I07']} />
        <mesh geometry={nodes.Mesh_833.geometry} material={materials['Color G08']} />
        <mesh geometry={nodes.Mesh_833_1.geometry} material={materials['Color F01']} />
        <mesh geometry={nodes.Mesh_833_2.geometry} material={materials.gIhEe0se} />
        <mesh geometry={nodes.Mesh_831_1.geometry} material={materials['zakaz-1001PXD.1374914234.SND186F2.obj.0.5.jpg.oe.jpg.pf.jpg.135']} />
        <mesh geometry={nodes.Mesh_831_2.geometry} material={materials['[Color A03]1']} />
        <mesh geometry={nodes.Mesh_832_1.geometry} material={materials['zakaz-1001PXD.1374914133.SND186F2.obj.0.7.jpg.oe.jpg.pf.jpg.135']} />
        <mesh geometry={nodes.Mesh_832_2.geometry} material={materials['Color A02']} />
        <mesh geometry={nodes.Mesh_1001.geometry} material={materials['[Color M07]2']} />
        <mesh geometry={nodes.Mesh_1004.geometry} material={materials['Color M09']} />
        <mesh geometry={nodes.Unir.geometry} material={materials['[Color M03]1']} />
        <mesh geometry={nodes.Unir001.geometry} material={materials['[Aluminum]1']} />
        <mesh geometry={nodes.Unir005.geometry} material={materials['Color M09']} />
        <mesh geometry={nodes.Unir006.geometry} material={materials['Color M09']} />
        <mesh geometry={nodes['Componente#7'].geometry} material={materials['[Color M00]1']} />
        <mesh geometry={nodes.Mesh_1005.geometry} material={materials['[Translucent Glass Gray]1']} />
        <mesh geometry={nodes.Unir002.geometry} material={materials['Color M09']} />
        <mesh geometry={nodes.Unir003.geometry} material={materials['Color M09']} />
        <mesh geometry={nodes.Unir004.geometry} material={materials['[Aluminum]1']} />
        <mesh geometry={nodes.Mesh_1012.geometry} material={materials['[Color M08]2']} />
        <mesh geometry={nodes.Mesh_1013.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1015.geometry} material={materials['default material']}>
          <mesh geometry={nodes.Mesh_1014.geometry} material={materials['default material']} />
        </mesh>
        <mesh geometry={nodes.Mesh_1025_1.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1025_2.geometry} material={materials.Yellow} />
        <mesh geometry={nodes.Mesh_1024_1.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1024_2.geometry} material={materials.logo_hik} />
        <mesh geometry={nodes.Mesh_1026.geometry} material={materials['[Color_009]1']} />
        <mesh geometry={nodes.Mesh_1028_1.geometry} material={materials['[Color_005]1']} />
        <mesh geometry={nodes.Mesh_1028_2.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1028_3.geometry} material={materials.Color_004} />
        <mesh geometry={nodes.Mesh_1029.geometry} material={materials['[Color_002]5']} />
        <mesh geometry={nodes.Mesh_1030.geometry} material={materials['[Color_002]5']} />
        <mesh geometry={nodes.Mesh_1031.geometry} material={materials['[Color_002]5']} />
        <mesh geometry={nodes.Mesh_1021.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1022.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1023.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1027.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1034.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1034_1.geometry} material={materials.Translucent_Glass_Block_Dark} />
        <mesh geometry={nodes.Mesh_1034_2.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1033.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1036.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1036_1.geometry} material={materials.Translucent_Glass_Block_Dark} />
        <mesh geometry={nodes.Mesh_1036_2.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1035.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1038.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1038_1.geometry} material={materials.Translucent_Glass_Block_Dark} />
        <mesh geometry={nodes.Mesh_1038_2.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1037.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1040.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1040_1.geometry} material={materials.Translucent_Glass_Block_Dark} />
        <mesh geometry={nodes.Mesh_1040_2.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1039.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1042.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1042_1.geometry} material={materials.Translucent_Glass_Block_Dark} />
        <mesh geometry={nodes.Mesh_1042_2.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1041.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1044.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1044_1.geometry} material={materials.Translucent_Glass_Block_Dark} />
        <mesh geometry={nodes.Mesh_1044_2.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1043.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1046.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1046_1.geometry} material={materials.Translucent_Glass_Block_Dark} />
        <mesh geometry={nodes.Mesh_1046_2.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1045.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1048.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1048_1.geometry} material={materials.Translucent_Glass_Block_Dark} />
        <mesh geometry={nodes.Mesh_1048_2.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1047.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1050.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1050_1.geometry} material={materials.Translucent_Glass_Block_Dark} />
        <mesh geometry={nodes.Mesh_1050_2.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1049.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1052.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1052_1.geometry} material={materials.Translucent_Glass_Block_Dark} />
        <mesh geometry={nodes.Mesh_1052_2.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1051.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1054.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1054_1.geometry} material={materials.Translucent_Glass_Block_Dark} />
        <mesh geometry={nodes.Mesh_1054_2.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1053.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1056.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1056_1.geometry} material={materials.Translucent_Glass_Block_Dark} />
        <mesh geometry={nodes.Mesh_1056_2.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1055.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1058.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1058_1.geometry} material={materials.Translucent_Glass_Block_Dark} />
        <mesh geometry={nodes.Mesh_1058_2.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1057.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1060.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1060_1.geometry} material={materials.Translucent_Glass_Block_Dark} />
        <mesh geometry={nodes.Mesh_1060_2.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1059.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1062.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1062_1.geometry} material={materials.Translucent_Glass_Block_Dark} />
        <mesh geometry={nodes.Mesh_1062_2.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1061.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1066.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1066_1.geometry} material={materials.Translucent_Glass_Block_Dark} />
        <mesh geometry={nodes.Mesh_1066_2.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1065.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1068.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1068_1.geometry} material={materials.Translucent_Glass_Block_Dark} />
        <mesh geometry={nodes.Mesh_1068_2.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1067.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1070.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1070_1.geometry} material={materials.Translucent_Glass_Block_Dark} />
        <mesh geometry={nodes.Mesh_1070_2.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1069.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1072.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1072_1.geometry} material={materials.Translucent_Glass_Block_Dark} />
        <mesh geometry={nodes.Mesh_1072_2.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1071.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1074.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1074_1.geometry} material={materials.Translucent_Glass_Block_Dark} />
        <mesh geometry={nodes.Mesh_1074_2.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1073.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1076.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1076_1.geometry} material={materials.Translucent_Glass_Block_Dark} />
        <mesh geometry={nodes.Mesh_1076_2.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1075.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1078.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1078_1.geometry} material={materials.Translucent_Glass_Block_Dark} />
        <mesh geometry={nodes.Mesh_1078_2.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1077.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1080.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1080_1.geometry} material={materials.Translucent_Glass_Block_Dark} />
        <mesh geometry={nodes.Mesh_1080_2.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1079.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1082.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1082_1.geometry} material={materials.Translucent_Glass_Block_Dark} />
        <mesh geometry={nodes.Mesh_1082_2.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1081.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1084.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1084_1.geometry} material={materials.Translucent_Glass_Block_Dark} />
        <mesh geometry={nodes.Mesh_1084_2.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1083.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1086.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1086_1.geometry} material={materials.Translucent_Glass_Block_Dark} />
        <mesh geometry={nodes.Mesh_1086_2.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1085.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1088.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1088_1.geometry} material={materials.Translucent_Glass_Block_Dark} />
        <mesh geometry={nodes.Mesh_1088_2.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1087.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1090.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1090_1.geometry} material={materials.Translucent_Glass_Block_Dark} />
        <mesh geometry={nodes.Mesh_1090_2.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1089.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1092.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1092_1.geometry} material={materials.Translucent_Glass_Block_Dark} />
        <mesh geometry={nodes.Mesh_1092_2.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1091.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1094.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1094_1.geometry} material={materials.Translucent_Glass_Block_Dark} />
        <mesh geometry={nodes.Mesh_1094_2.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1093.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1096.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1096_1.geometry} material={materials.Translucent_Glass_Block_Dark} />
        <mesh geometry={nodes.Mesh_1096_2.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1095.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1098.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1098_1.geometry} material={materials.Translucent_Glass_Block_Dark} />
        <mesh geometry={nodes.Mesh_1098_2.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1097.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1100.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1100_1.geometry} material={materials.Translucent_Glass_Block_Dark} />
        <mesh geometry={nodes.Mesh_1100_2.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1099.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1102.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1102_1.geometry} material={materials.Translucent_Glass_Block_Dark} />
        <mesh geometry={nodes.Mesh_1102_2.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1101.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1104.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1104_1.geometry} material={materials.Translucent_Glass_Block_Dark} />
        <mesh geometry={nodes.Mesh_1104_2.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1103.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1106.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1106_1.geometry} material={materials.Translucent_Glass_Block_Dark} />
        <mesh geometry={nodes.Mesh_1106_2.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1105.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1108.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1108_1.geometry} material={materials.Translucent_Glass_Block_Dark} />
        <mesh geometry={nodes.Mesh_1108_2.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1107.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1110.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1110_1.geometry} material={materials.Translucent_Glass_Block_Dark} />
        <mesh geometry={nodes.Mesh_1110_2.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1109.geometry} material={materials['[Translucent_Glass_Blue]5']} />
        <mesh geometry={nodes.Mesh_1063.geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes.Mesh_1064.geometry} material={materials['[Color_A02]2']} />
        <mesh geometry={nodes.Mesh_1111.geometry} material={materials.Color_007} />
        <mesh geometry={nodes.Mesh_1016.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1017.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1018.geometry} material={materials.Color_I06} />
        <mesh geometry={nodes.Mesh_1019_1.geometry} material={materials['[Color_006]1']} />
        <mesh geometry={nodes.Mesh_1019_2.geometry} material={materials['[Color_008]1']} />
        <mesh geometry={nodes.Mesh_1020.geometry} material={materials['[Translucent_Glass_Blue]3']} />
        <mesh geometry={nodes.Mesh_1032_1.geometry} material={materials.Yellow} />
        <mesh geometry={nodes.Mesh_1032_2.geometry} material={materials.Color_000} />
        <mesh geometry={nodes.Mesh_1032_3.geometry} material={materials.Color_007} />
        <mesh geometry={nodes.Mesh_1112.geometry} material={materials['[Color_002]5']} />
        <mesh geometry={nodes.Mesh_1113.geometry} material={materials['[Color_002]5']} />
        <mesh geometry={nodes.Mesh_1114.geometry} material={materials['[Color_002]5']} />
        <mesh geometry={nodes.Mesh_1115.geometry} material={materials['[Color_002]5']} />
        <mesh geometry={nodes.Mesh_1000_1.geometry} material={materials['[Color_A09]4']} />
        <mesh geometry={nodes.Mesh_1000_2.geometry} material={materials['default material']} />
        <mesh geometry={nodes['47201_01'].geometry} material={materials['[0131_Silver]1']} />
        <mesh geometry={nodes['47201_02'].geometry} material={materials['[0111_SlateGray]1']} />
        <mesh geometry={nodes['47201_03'].geometry} material={materials['[0131_Silver]1']} />
        <mesh geometry={nodes['47201_04'].geometry} material={materials['0133_Gray']} />
        <mesh geometry={nodes['47201_05'].geometry} material={materials['0133_Gray']} />
        <mesh geometry={nodes['47201_06'].geometry} material={materials['0133_Gray']} />
        <mesh geometry={nodes['47201_07'].geometry} material={materials.Material65} />
        <mesh geometry={nodes['47201_08'].geometry} material={materials.Material65} />
        <mesh geometry={nodes['47201_09'].geometry} material={materials.Material65} />
        <mesh geometry={nodes['47201_10'].geometry} material={materials['[0136_Charcoal]2']} />
        <mesh geometry={nodes['47201_11'].geometry} material={materials['[0137_Black]1']} />
        <mesh geometry={nodes['47201_12'].geometry} material={materials['[Color_A01]4']} />
        <mesh geometry={nodes['47201_13'].geometry} material={materials.Material65} />
        <mesh geometry={nodes['47201_14'].geometry} material={materials.Material65} />
        <mesh geometry={nodes['47201_15'].geometry} material={materials.Material65} />
        <mesh geometry={nodes['47201_16'].geometry} material={materials['[0111_SlateGray]1']} />
        <mesh geometry={nodes['47201_17'].geometry} material={materials.Material65} />
        <mesh geometry={nodes['47201_18'].geometry} material={materials['[0132_LightGray]2']} />
        <mesh geometry={nodes['47201_19'].geometry} material={materials.Material65} />
        <mesh geometry={nodes['47201_20'].geometry} material={materials['[0111_SlateGray]1']} />
        <mesh geometry={nodes['47201_21'].geometry} material={materials.Material65} />
        <mesh geometry={nodes['47201_22'].geometry} material={materials.Material65} />
        <mesh geometry={nodes['47201_23'].geometry} material={materials.Material65} />
        <mesh geometry={nodes['47201_24'].geometry} material={materials.Material65} />
        <mesh geometry={nodes['47201_25'].geometry} material={materials['[0132_LightGray]2']} />
        <mesh geometry={nodes['47201_26'].geometry} material={materials.Material65} />
        <mesh geometry={nodes['47201_27'].geometry} material={materials['[0111_SlateGray]1']} />
        <mesh geometry={nodes['47201_28'].geometry} material={materials.Material65} />
        <mesh geometry={nodes['47201_29'].geometry} material={materials.Material65} />
        <mesh geometry={nodes['47201_30'].geometry} material={materials.Material65} />
        <mesh geometry={nodes['47201_31'].geometry} material={materials.Material65} />
        <mesh geometry={nodes['47201_32'].geometry} material={materials['[0132_LightGray]2']} />
        <mesh geometry={nodes['47201_33'].geometry} material={materials['[0132_LightGray]2']} />
        <mesh geometry={nodes.Mesh_999.geometry} material={materials['default material']}>
          <mesh geometry={nodes.Mesh_969.geometry} material={materials['[Color_008]2']}>
            <mesh geometry={nodes.Mesh_889.geometry} material={materials['[Metal_Aluminum_Anodized]2']} />
            <mesh geometry={nodes.Mesh_889_1.geometry} material={materials['Metal_Corrogated_Shiny.001']} />
            <mesh geometry={nodes.Mesh_888.geometry} material={materials['default material']}>
              <mesh geometry={nodes.Mesh_887.geometry} material={materials['Metal_Corrogated_Shiny.001']} />
              <mesh geometry={nodes.Mesh_887_1.geometry} material={materials['[Metal_Rusted]1']} />
            </mesh>
            <mesh geometry={nodes.Mesh_902_1.geometry} material={materials.Color_D04} />
            <mesh geometry={nodes.Mesh_902_2.geometry} material={materials['[Color_002]5']} />
            <mesh geometry={nodes.Mesh_902_3.geometry} material={materials['[Color_D05]2']} />
            <mesh geometry={nodes.Mesh_901_1.geometry} material={materials['[Color_D05]2']} />
            <mesh geometry={nodes.Mesh_901_2.geometry} material={materials['[Color_002]5']} />
            <mesh geometry={nodes.Mesh_905_1.geometry} material={materials.Color_D04} />
            <mesh geometry={nodes.Mesh_905_2.geometry} material={materials['[Color_002]5']} />
            <mesh geometry={nodes.Mesh_904_1.geometry} material={materials['[Color_D05]2']} />
            <mesh geometry={nodes.Mesh_904_2.geometry} material={materials['[Color_002]5']} />
            <mesh geometry={nodes['Component#188'].geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_903.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_908.geometry} material={materials['[Metal_Aluminum_Anodized]2']} />
            <mesh geometry={nodes.Mesh_908_1.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_909.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_961.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_961_1.geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['0#1'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['0#1001'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['0#1002'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['0#1003'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['0#1004'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['1'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['1001'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['1002'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['1003'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['1004'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['2'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['2001'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['2002'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['2003'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['2004'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['3'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['3001'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['3002'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['3003'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['3004'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['4'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['4001'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['4002'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['4003'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['4004'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['5'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['5001'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['5002'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['5003'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['5004'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['6'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['6001'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['6002'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['6003'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['6004'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['7'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['7001'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['7002'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['7003'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['7004'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['8'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['8001'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['8002'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['8003'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['8004'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['9'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['9001'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['9002'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['9003'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['9004'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['Component#186'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes.KILOWATT_HOURS.geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes.Mesh_890.geometry} material={materials['[Metal_Aluminum_Anodized]2']} />
            <mesh geometry={nodes.Mesh_890_1.geometry} material={materials['Metal_Corrogated_Shiny.001']} />
            <mesh geometry={nodes.Mesh_893.geometry} material={materials['[Metal_Aluminum_Anodized]2']} />
            <mesh geometry={nodes.Mesh_893_1.geometry} material={materials['Metal_Corrogated_Shiny.001']} />
            <mesh geometry={nodes.Mesh_897.geometry} material={materials['[Metal_Aluminum_Anodized]2']} />
            <mesh geometry={nodes.Mesh_897_1.geometry} material={materials['Metal_Corrogated_Shiny.001']} />
            <mesh geometry={nodes['Component#219'].geometry} material={materials['default material']} />
            <mesh geometry={nodes['Component#223'].geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_910.geometry} material={materials['[Metal_Aluminum_Anodized]2']} />
            <mesh geometry={nodes.Mesh_910_1.geometry} material={materials['default material']} />
            <mesh geometry={nodes['Component#236'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['Component#236001'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['Component#236002'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['Component#236003'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['Component#236004'].geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes.Mesh_898.geometry} material={materials['Metal_Corrogated_Shiny.001']} />
            <mesh geometry={nodes.Mesh_898_1.geometry} material={materials['[Metal_Rusted]1']} />
            <mesh geometry={nodes['Component#239'].geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_881.geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes.Mesh_881_1.geometry} material={materials.Metal_Rough} />
            <mesh geometry={nodes.Mesh_899.geometry} material={materials['[Metal_Aluminum_Anodized]2']} />
            <mesh geometry={nodes.Mesh_899_1.geometry} material={materials['[Color_D05]2']} />
            <mesh geometry={nodes.Mesh_880_1.geometry} material={materials['[Metal_Aluminum_Anodized]2']} />
            <mesh geometry={nodes.Mesh_880_2.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_880_3.geometry} material={materials['[Metal_Rusted]1']} />
            <mesh geometry={nodes['Component#185'].geometry} material={materials.Metal_Seamed} />
            <mesh geometry={nodes['Component#187'].geometry} material={materials['[Metal_Aluminum_Anodized]2']} />
            <mesh geometry={nodes.Mesh_892.geometry} material={materials['default material']}>
              <mesh geometry={nodes.Mesh_891.geometry} material={materials['Metal_Corrogated_Shiny.001']} />
              <mesh geometry={nodes.Mesh_891_1.geometry} material={materials['[Metal_Rusted]1']} />
            </mesh>
            <mesh geometry={nodes.Mesh_896.geometry} material={materials['default material']}>
              <mesh geometry={nodes.Mesh_895.geometry} material={materials['Metal_Corrogated_Shiny.001']} />
              <mesh geometry={nodes.Mesh_895_1.geometry} material={materials['[Metal_Rusted]1']} />
            </mesh>
            <mesh geometry={nodes.Mesh_968_1.geometry} material={materials['Metal_Corrogated_Shiny.001']} />
            <mesh geometry={nodes.Mesh_968_2.geometry} material={materials['[Color_008]2']} />
            <mesh geometry={nodes['Component#178'].geometry} material={materials['default material']} />
            <mesh geometry={nodes['Component#178001'].geometry} material={materials['default material']} />
            <mesh geometry={nodes['Component#178002'].geometry} material={materials['default material']} />
            <mesh geometry={nodes['Component#178003'].geometry} material={materials['Metal_Corrogated_Shiny.001']} />
          </mesh>
          <mesh geometry={nodes.Mesh_997.geometry} material={materials['default material']}>
            <mesh geometry={nodes['Component#243'].geometry} material={materials['[Color_002]5']} />
            <mesh geometry={nodes.Mesh_995.geometry} material={materials.Color_004}>
              <mesh geometry={nodes['Component#173'].geometry} material={materials['[Color_A01]4']} />
              <mesh geometry={nodes['Component#175'].geometry} material={materials['[Color_002]5']} />
              <mesh geometry={nodes['Component#175001'].geometry} material={materials['[Color_002]5']} />
              <mesh geometry={nodes.Mesh_973.geometry} material={materials.Color_D01} />
              <mesh geometry={nodes.Mesh_973_1.geometry} material={materials['default material']} />
              <mesh geometry={nodes.Mesh_973_2.geometry} material={materials['[Color_002]5']} />
              <mesh geometry={nodes.Mesh_977.geometry} material={materials.Color_D01} />
              <mesh geometry={nodes.Mesh_977_1.geometry} material={materials['default material']} />
              <mesh geometry={nodes.Mesh_977_2.geometry} material={materials['[Color_002]5']} />
              <mesh geometry={nodes['Component#180'].geometry} material={materials['default material']} />
              <mesh geometry={nodes['Component#180001'].geometry} material={materials['default material']} />
              <mesh geometry={nodes['Component#173001'].geometry} material={materials['[Color_A01]4']} />
              <mesh geometry={nodes['Component#175002'].geometry} material={materials['[Color_002]5']} />
              <mesh geometry={nodes['Component#175003'].geometry} material={materials['[Color_002]5']} />
              <mesh geometry={nodes.Mesh_980.geometry} material={materials.Color_D01} />
              <mesh geometry={nodes.Mesh_980_1.geometry} material={materials['default material']} />
              <mesh geometry={nodes.Mesh_980_2.geometry} material={materials['[Color_002]5']} />
              <mesh geometry={nodes.Mesh_984.geometry} material={materials.Color_D01} />
              <mesh geometry={nodes.Mesh_984_1.geometry} material={materials['default material']} />
              <mesh geometry={nodes.Mesh_984_2.geometry} material={materials['[Color_002]5']} />
              <mesh geometry={nodes['Component#180002'].geometry} material={materials['default material']} />
              <mesh geometry={nodes['Component#180003'].geometry} material={materials['default material']} />
              <mesh geometry={nodes['Component#174'].geometry} material={materials['default material']} />
              <mesh geometry={nodes.Mesh_985.geometry} material={materials.Color_D01} />
              <mesh geometry={nodes.Mesh_985_1.geometry} material={materials['default material']} />
              <mesh geometry={nodes.Mesh_985_2.geometry} material={materials['[Color_002]5']} />
              <mesh geometry={nodes.Mesh_987.geometry} material={materials.Color_D01} />
              <mesh geometry={nodes.Mesh_987_1.geometry} material={materials['default material']} />
              <mesh geometry={nodes.Mesh_987_2.geometry} material={materials['[Color_002]5']} />
              <mesh geometry={nodes['Component#183'].geometry} material={materials['default material']} />
              <mesh geometry={nodes['Component#213'].geometry} material={materials['default material']} />
              <mesh geometry={nodes.Mesh_989.geometry} material={materials['[Color_002]5']} />
              <mesh geometry={nodes.Mesh_989_1.geometry} material={materials.Material64} />
              <mesh geometry={nodes['Component#216'].geometry} material={materials.Color_004} />
              <mesh geometry={nodes['Component#220'].geometry} material={materials['default material']}>
                <mesh geometry={nodes['Component#181'].geometry} material={materials['default material']} />
              </mesh>
              <mesh geometry={nodes['Component#230'].geometry} material={materials['[Color_002]5']} />
              <mesh geometry={nodes['Component#230001'].geometry} material={materials['[Color_002]5']} />
            </mesh>
          </mesh>
          <mesh geometry={nodes.Mesh_998.geometry} material={materials['default material']} />
        </mesh>
        <mesh geometry={nodes.Mesh_1173.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1174.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1175.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1176.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1177.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1178.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1179.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1180.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1181.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1182.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1183.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1184.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1185.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1186.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1172.geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Group#436'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436001'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436002'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436003'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436004'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436005'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436006'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436007'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436008'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436009'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436010'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436011'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436012'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436013'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436014'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436015'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436016'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436017'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436018'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436019'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436020'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436021'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436022'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436023'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436024'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436025'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436026'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436027'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436028'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436029'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436030'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1187.geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Group#436031'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436032'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436033'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436034'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436035'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436036'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436037'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436038'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436039'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436040'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436041'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436042'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436043'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436044'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436045'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436046'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436047'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436048'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436049'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436050'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436051'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436052'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436053'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436054'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436055'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436056'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436057'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436058'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436059'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436060'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#436061'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1219.geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Group#452'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452001'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452002'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452003'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452004'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452005'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452006'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452007'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452008'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452009'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452010'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452011'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452012'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452013'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452014'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452015'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452016'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452017'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452018'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452019'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452020'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452021'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452022'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452023'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452024'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452025'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452026'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452027'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452028'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452029'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452030'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452031'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452032'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452033'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452034'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452035'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452036'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452037'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452038'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452039'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452040'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452041'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452042'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452043'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452044'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452045'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452046'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452047'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452048'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452049'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452050'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452051'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452052'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452053'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452054'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452055'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452056'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452057'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452058'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452059'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452060'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452061'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452062'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452063'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452064'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452065'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452066'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452067'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452068'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452069'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452070'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452071'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452072'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452073'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452074'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452075'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452076'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452077'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452078'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452079'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452080'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452081'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452082'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452083'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452084'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452085'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452086'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452087'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452088'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452089'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452090'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452091'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452092'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452093'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452094'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452095'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452096'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452097'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452098'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452099'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452100'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452101'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452102'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452103'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['Group#452104'].geometry} material={materials['Concrete Aggregate Smoke']} />
        <mesh geometry={nodes['3DGeom~3_Defintion#7'].geometry} material={materials.Material35} />
        <mesh geometry={nodes.Mesh_110.geometry} material={materials.Fabric_A01_20cm} />
        <mesh geometry={nodes.Mesh_110_1.geometry} material={materials.Material20} />
        <mesh geometry={nodes['3DGeom~1_Defintion#4'].geometry} material={materials.Material7} />
        <mesh geometry={nodes['3DGeom~3_Defintion#7001'].geometry} material={materials.Material35} />
        <mesh geometry={nodes.Mesh_113.geometry} material={materials.Fabric_A01_20cm} />
        <mesh geometry={nodes.Mesh_113_1.geometry} material={materials.Material20} />
        <mesh geometry={nodes['3DGeom~1_Defintion#4001'].geometry} material={materials.Material7} />
        <mesh geometry={nodes['3DGeom~3_Defintion#6'].geometry} material={materials.Material7} />
        <mesh geometry={nodes['Component#11'].geometry} material={materials.Material35} />
        <mesh geometry={nodes['Component#11001'].geometry} material={materials.Material35} />
        <mesh geometry={nodes['3DGeom~3_Defintion#7002'].geometry} material={materials.Material35} />
        <mesh geometry={nodes.Mesh_119.geometry} material={materials.Fabric_A01_20cm} />
        <mesh geometry={nodes.Mesh_119_1.geometry} material={materials.Material20} />
        <mesh geometry={nodes['3DGeom~1_Defintion#4002'].geometry} material={materials.Material7} />
        <mesh geometry={nodes['3DGeom~3_Defintion#7003'].geometry} material={materials.Material35} />
        <mesh geometry={nodes.Mesh_122.geometry} material={materials.Fabric_A01_20cm} />
        <mesh geometry={nodes.Mesh_122_1.geometry} material={materials.Material20} />
        <mesh geometry={nodes['3DGeom~1_Defintion#4003'].geometry} material={materials.Material7} />
        <mesh geometry={nodes['3DGeom~1_Defintion#2'].geometry} material={materials.Material7} />
        <mesh geometry={nodes['3DGeom~2_Defintion#4'].geometry} material={materials.Material20} />
        <mesh geometry={nodes['3DGeom~3_Defintion#2'].geometry} material={materials.Material35} />
        <mesh geometry={nodes['3DGeom~1_Defintion#2001'].geometry} material={materials.Material7} />
        <mesh geometry={nodes['3DGeom~2_Defintion#4001'].geometry} material={materials.Material20} />
        <mesh geometry={nodes['3DGeom~3_Defintion#2001'].geometry} material={materials.Material35} />
        <mesh geometry={nodes.Mesh_2122.geometry} material={materials['Color D08']} />
        <mesh geometry={nodes.Mesh_2123.geometry} material={materials['[0120_Orchid]3']} />
        <mesh geometry={nodes.Mesh_2124.geometry} material={materials['[0120_Orchid]3']} />
        <mesh geometry={nodes.Mesh_2126.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_2127.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_2125.geometry} material={materials['default material']} />
        <mesh geometry={nodes['download?mid=639fa6d8817c5564f646a653494806f8&ctyp=sp&cv=p80'].geometry} material={materials.PRZYCISK2}>
          <mesh geometry={nodes.Mesh_2128.geometry} material={materials.PRZYCISK2} />
          <mesh geometry={nodes.Mesh_2129.geometry} material={materials.PRZYCISK2} />
          <mesh geometry={nodes.Mesh_2130.geometry} material={materials.PRZYCISK2} />
          <mesh geometry={nodes.Mesh_2131.geometry} material={materials.PRZYCISK2} />
          <mesh geometry={nodes.Mesh_2132.geometry} material={materials.PRZYCISK2} />
          <mesh geometry={nodes.Mesh_2133.geometry} material={materials.PRZYCISK2} />
        </mesh>
        <mesh geometry={nodes.Mesh_137_1.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_137_2.geometry} material={materials.floral_8} />
        <mesh geometry={nodes.parte_2002.geometry} material={materials.MOLDURA} />
        <mesh geometry={nodes.parte_2003.geometry} material={materials.MOLDURA} />
        <mesh geometry={nodes.parte002.geometry} material={materials.MOLDURA} />
        <mesh geometry={nodes.parte003.geometry} material={materials.MOLDURA} />
        <mesh geometry={nodes.Mesh_132_1.geometry} material={materials.branco} />
        <mesh geometry={nodes.Mesh_132_2.geometry} material={materials.FLORAL_7} />
        <mesh geometry={nodes.parte.geometry} material={materials.MOLDURA} />
        <mesh geometry={nodes.parte_2.geometry} material={materials.MOLDURA} />
        <mesh geometry={nodes.parte_2001.geometry} material={materials.MOLDURA} />
        <mesh geometry={nodes.parte001.geometry} material={materials.MOLDURA} />
        <mesh geometry={nodes.Mesh_144.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_140.geometry} material={materials.il_fullxfull} />
        <mesh geometry={nodes.Mesh_142.geometry} material={materials.Color_D25}>
          <mesh geometry={nodes.Mesh_141.geometry} material={materials['default material']} />
        </mesh>
        <mesh geometry={nodes.Mesh_143.geometry} material={materials.Color_000} />
        <mesh geometry={nodes.Mesh_149.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_145.geometry} material={materials.il_fullxfull} />
        <mesh geometry={nodes.Mesh_147.geometry} material={materials.Color_D25}>
          <mesh geometry={nodes.Mesh_146.geometry} material={materials['default material']} />
        </mesh>
        <mesh geometry={nodes.Mesh_148.geometry} material={materials.Color_000} />
        <mesh geometry={nodes.Mesh_154.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_150.geometry} material={materials.il_fullxfull} />
        <mesh geometry={nodes.Mesh_152.geometry} material={materials.Color_D25}>
          <mesh geometry={nodes.Mesh_151.geometry} material={materials['default material']} />
        </mesh>
        <mesh geometry={nodes.Mesh_153.geometry} material={materials.Color_000} />
        <mesh geometry={nodes.Mesh_159.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_155.geometry} material={materials.il_fullxfull} />
        <mesh geometry={nodes.Mesh_157.geometry} material={materials.Color_D25}>
          <mesh geometry={nodes.Mesh_156.geometry} material={materials['default material']} />
        </mesh>
        <mesh geometry={nodes.Mesh_158.geometry} material={materials.Color_000} />
        <mesh geometry={nodes.Mesh_228.geometry} material={materials['Color M04']} />
        <mesh geometry={nodes.Mesh_229.geometry} material={materials['curtain']} />
        <mesh geometry={nodes.Mesh_230.geometry} material={materials['Color M04']} />
        <mesh geometry={nodes.Mesh_231.geometry} material={materials['Color M04']} />
        <mesh geometry={nodes.Mesh_232.geometry} material={materials['curtain']} />
        <mesh geometry={nodes.Mesh_233.geometry} material={materials['Color M04']} />
        <mesh geometry={nodes.Mesh_234.geometry} material={materials['curtain']} />
        <mesh geometry={nodes.Mesh_235.geometry} material={materials['Color M04']} />
        <mesh geometry={nodes.Mesh_236.geometry} material={materials['Color M04']} />
        <mesh geometry={nodes.Mesh_237.geometry} material={materials['curtain']} />
        <mesh geometry={nodes.Mesh_238.geometry} material={materials['Color M04']} />
        <mesh geometry={nodes.Mesh_239.geometry} material={materials['curtain']} />
        <mesh geometry={nodes.Mesh_240.geometry} material={materials['Color M04']} />
        <mesh geometry={nodes.Mesh_241.geometry} material={materials['Color M04']} />
        <mesh geometry={nodes.Mesh_242.geometry} material={materials['curtain']} />
        <mesh geometry={nodes.Mesh_246.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh_247_1.geometry} material={materials['[0131_Silver]1']} />
        <mesh geometry={nodes.Mesh_247_2.geometry} material={materials.Material90} />
        <mesh geometry={nodes.Mesh_245.geometry} material={materials['[0131_Silver]1']} />
        <mesh geometry={nodes.Mesh_245_1.geometry} material={materials.CoolGray} />
        <mesh geometry={nodes.Mesh_245_2.geometry} material={materials['[0136_Charcoal]2']} />
        <mesh geometry={nodes.Mesh_243.geometry} material={materials.Material22} />
        <mesh geometry={nodes.Mesh_244.geometry} material={materials['[0131_Silver]1']} />
        <mesh geometry={nodes['Component#18'].geometry} material={materials['0120_Orchid1']} />
        <mesh geometry={nodes['Component#18001'].geometry} material={materials['0120_Orchid1']} />
        <mesh geometry={nodes['Component#18002'].geometry} material={materials['0120_Orchid1']} />
        <mesh geometry={nodes['Component#444'].geometry} material={materials['[Color L05]3']} />
        <mesh geometry={nodes['Component#446'].geometry} material={materials['0120_Orchid1']} />
        <mesh geometry={nodes['Component#446001'].geometry} material={materials['0120_Orchid1']} />
        <mesh geometry={nodes['Component#446002'].geometry} material={materials['0120_Orchid1']} />
        <mesh geometry={nodes['Component#446003'].geometry} material={materials['0120_Orchid1']} />
        <mesh geometry={nodes['Component#449'].geometry} material={materials['[Color L05]3']} />
        <mesh geometry={nodes['Component#450'].geometry} material={materials['0120_Orchid2']} />
        <mesh geometry={nodes['Component#450001'].geometry} material={materials['0120_Orchid2']} />
        <mesh geometry={nodes['Component#451'].geometry} material={materials['[Color L05]3']} />
        <mesh geometry={nodes['Component#57'].geometry} material={materials['0120_Orchid1']} />
        <mesh geometry={nodes['Component#57001'].geometry} material={materials['0120_Orchid1']} />
        <mesh geometry={nodes.Mesh_248.geometry} material={materials['[Color L05]3']} />
        <mesh geometry={nodes['Component#444001'].geometry} material={materials['[Color L05]3']} />
        <mesh geometry={nodes['Component#446004'].geometry} material={materials['0120_Orchid1']} />
        <mesh geometry={nodes['Component#446005'].geometry} material={materials['0120_Orchid1']} />
        <mesh geometry={nodes['Component#446006'].geometry} material={materials['0120_Orchid1']} />
        <mesh geometry={nodes['Component#447'].geometry} material={materials['0120_Orchid1']} />
        <mesh geometry={nodes['Component#448'].geometry} material={materials['0120_Orchid1']} />
        <mesh geometry={nodes['Component#448001'].geometry} material={materials['0120_Orchid1']} />
        <mesh geometry={nodes['Component#449001'].geometry} material={materials['[Color L05]3']} />
        <mesh geometry={nodes['Component#450002'].geometry} material={materials['0120_Orchid2']} />
        <mesh geometry={nodes['Component#450003'].geometry} material={materials['0120_Orchid2']} />
        <mesh geometry={nodes['Component#451001'].geometry} material={materials['[Color L05]3']} />
        <mesh geometry={nodes['Component#56'].geometry} material={materials['0120_Orchid1']} />
        <mesh geometry={nodes['Component#56001'].geometry} material={materials['0120_Orchid1']} />
        <mesh geometry={nodes.Mesh_265.geometry} material={materials['[Color L05]3']} />
        <mesh geometry={nodes.Mesh_263.geometry} material={materials.Base2} />
        <mesh geometry={nodes.Mesh_263_1.geometry} material={materials.Screws} />
        <mesh geometry={nodes.Mesh_263_2.geometry} material={materials.Chair_cloth_b1} />
        <mesh geometry={nodes.Mesh_264.geometry} material={materials['0120_Orchid2']} />
        <mesh geometry={nodes.Mesh_282.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh_283_1.geometry} material={materials['[0131_Silver]1']} />
        <mesh geometry={nodes.Mesh_283_2.geometry} material={materials.Material90} />
        <mesh geometry={nodes.Mesh_281.geometry} material={materials['[0131_Silver]1']} />
        <mesh geometry={nodes.Mesh_281_1.geometry} material={materials.CoolGray} />
        <mesh geometry={nodes.Mesh_281_2.geometry} material={materials['[0136_Charcoal]2']} />
        <mesh geometry={nodes.Mesh_279.geometry} material={materials.Material22} />
        <mesh geometry={nodes.Mesh_280.geometry} material={materials['[0131_Silver]1']} />
        <mesh geometry={nodes.Mesh_388.geometry} material={materials.____________1} />
        <mesh geometry={nodes.Mesh_388_1.geometry} material={materials['[Color_A04]2']} />
        <mesh geometry={nodes.Mesh_385.geometry} material={materials['[Color_008]3']} />
        <mesh geometry={nodes.Mesh_385_1.geometry} material={materials['Chrome 02']} />
        <mesh geometry={nodes['구성_요소#24'].geometry} material={materials['[Color_A09]6']} />
        <mesh geometry={nodes.DrawCal139.geometry} material={materials.____________1} />
        <mesh geometry={nodes.DrawCal203.geometry} material={materials['_3_-_Default1']} />
        <mesh geometry={nodes.Mesh_394.geometry} material={materials.____________1} />
        <mesh geometry={nodes.Mesh_394_1.geometry} material={materials['[Color_A04]2']} />
        <mesh geometry={nodes.Mesh_391.geometry} material={materials['[Color_008]3']} />
        <mesh geometry={nodes.Mesh_391_1.geometry} material={materials['Chrome 02']} />
        <mesh geometry={nodes['구성_요소#24001'].geometry} material={materials['[Color_A09]6']} />
        <mesh geometry={nodes.DrawCal139001.geometry} material={materials.____________1} />
        <mesh geometry={nodes.DrawCal203001.geometry} material={materials['_3_-_Default1']} />
        <mesh geometry={nodes.Mesh_399.geometry} material={materials.____________1} />
        <mesh geometry={nodes.Mesh_399_1.geometry} material={materials['[Color_A04]2']} />
        <mesh geometry={nodes.Mesh_396.geometry} material={materials['[Color_008]3']} />
        <mesh geometry={nodes.Mesh_396_1.geometry} material={materials['Chrome 02']} />
        <mesh geometry={nodes['구성_요소#24002'].geometry} material={materials['[Color_A09]6']} />
        <mesh geometry={nodes.DrawCal139002.geometry} material={materials.____________1} />
        <mesh geometry={nodes.DrawCal203002.geometry} material={materials['_3_-_Default1']} />
        <mesh geometry={nodes.Mesh_404.geometry} material={materials.____________1} />
        <mesh geometry={nodes.Mesh_404_1.geometry} material={materials['[Color_A04]2']} />
        <mesh geometry={nodes.Mesh_401.geometry} material={materials['[Color_008]3']} />
        <mesh geometry={nodes.Mesh_401_1.geometry} material={materials['Chrome 02']} />
        <mesh geometry={nodes['구성_요소#24003'].geometry} material={materials['[Color_A09]6']} />
        <mesh geometry={nodes.DrawCal139003.geometry} material={materials.____________1} />
        <mesh geometry={nodes.DrawCal203003.geometry} material={materials['_3_-_Default1']} />
        <mesh geometry={nodes['구성_요소#4'].geometry} material={materials.Color_A09} />
        <mesh geometry={nodes.Mesh_365.geometry} material={materials['[Color_A04]1']} />
        <mesh geometry={nodes.Mesh_365_1.geometry} material={materials['[Color_A05]4']} />
        <mesh geometry={nodes.Mesh_365_2.geometry} material={materials['[Color_A05]3']} />
        <mesh geometry={nodes.Mesh_365_3.geometry} material={materials.Color_A04} />
        <mesh geometry={nodes['구성_요소#6'].geometry} material={materials.Color_A10} />
        <mesh geometry={nodes.Mesh_366.geometry} material={materials.Color_A09} />
        <mesh geometry={nodes.Mesh_366_1.geometry} material={materials['[Color_A09]2']} />
        <mesh geometry={nodes.Mesh_366_2.geometry} material={materials['[Color_A04]1']} />
        <mesh geometry={nodes.Mesh_366_3.geometry} material={materials.Color_A11} />
        <mesh geometry={nodes.Mesh_366_4.geometry} material={materials['[Color_A05]3']} />
        <mesh geometry={nodes.Mesh_366_5.geometry} material={materials['[Color_A05]5']} />
        <mesh geometry={nodes['구성_요소#9'].geometry} material={materials.Color_A10} />
        <mesh geometry={nodes.DrawCal141.geometry} material={materials['[Color_A08]3']} />
        <mesh geometry={nodes.Mesh_371.geometry} material={materials['_3_-_Default1']} />
        <mesh geometry={nodes.Mesh_371_1.geometry} material={materials['[Color_A08]1']} />
        <mesh geometry={nodes.Mesh_371_2.geometry} material={materials['Chrome 02']} />
        <mesh geometry={nodes.Mesh_371_3.geometry} material={materials['[Color_A05]9']} />
        <mesh geometry={nodes.Mesh_371_4.geometry} material={materials['[Color_A08]2']} />
        <mesh geometry={nodes.DrawCal217.geometry} material={materials['_3_-_Default1']} />
        <mesh geometry={nodes.Mesh_369.geometry} material={materials['[Color_A09]5']} />
        <mesh geometry={nodes.Mesh_369_1.geometry} material={materials['[Color_A08]1']} />
        <mesh geometry={nodes.Mesh_369_2.geometry} material={materials['[Color_A05]13']} />
        <mesh geometry={nodes.Mesh_369_3.geometry} material={materials['[Color_A05]5']} />
        <mesh geometry={nodes.Mesh_369_4.geometry} material={materials['Chrome 02']} />
        <mesh geometry={nodes.Mesh_369_5.geometry} material={materials['_3_-_Default1']} />
        <mesh geometry={nodes.Mesh_369_6.geometry} material={materials['[Color_A05]11']} />
        <mesh geometry={nodes.Mesh_368.geometry} material={materials['[Color_A05]15']} />
        <mesh geometry={nodes.Mesh_368_1.geometry} material={materials['[Color_006]3']} />
        <mesh geometry={nodes.Mesh_368_2.geometry} material={materials['[Color_A01]2']} />
        <mesh geometry={nodes.DrawCal141001.geometry} material={materials['[Color_A08]3']} />
        <mesh geometry={nodes.Mesh_376.geometry} material={materials['_3_-_Default1']} />
        <mesh geometry={nodes.Mesh_376_1.geometry} material={materials['[Color_A08]1']} />
        <mesh geometry={nodes.Mesh_376_2.geometry} material={materials['Chrome 02']} />
        <mesh geometry={nodes.Mesh_376_3.geometry} material={materials['[Color_A05]9']} />
        <mesh geometry={nodes.Mesh_376_4.geometry} material={materials['[Color_A08]2']} />
        <mesh geometry={nodes.DrawCal217001.geometry} material={materials['_3_-_Default1']} />
        <mesh geometry={nodes.Mesh_374.geometry} material={materials['[Color_A09]5']} />
        <mesh geometry={nodes.Mesh_374_1.geometry} material={materials['[Color_A08]1']} />
        <mesh geometry={nodes.Mesh_374_2.geometry} material={materials['[Color_A05]13']} />
        <mesh geometry={nodes.Mesh_374_3.geometry} material={materials['[Color_A05]5']} />
        <mesh geometry={nodes.Mesh_374_4.geometry} material={materials['Chrome 02']} />
        <mesh geometry={nodes.Mesh_374_5.geometry} material={materials['_3_-_Default1']} />
        <mesh geometry={nodes.Mesh_374_6.geometry} material={materials['[Color_A05]11']} />
        <mesh geometry={nodes.Mesh_373.geometry} material={materials['[Color_A05]15']} />
        <mesh geometry={nodes.Mesh_373_1.geometry} material={materials['[Color_006]3']} />
        <mesh geometry={nodes.Mesh_373_2.geometry} material={materials['[Color_A01]2']} />
        <mesh geometry={nodes.Mesh_361.geometry} material={materials.Color_A09} />
        <mesh geometry={nodes.Mesh_361_1.geometry} material={materials['[Color_002]4']} />
        <mesh geometry={nodes.Mesh_362.geometry} material={materials['[Color_A05]4']} />
        <mesh geometry={nodes.Mesh_362_1.geometry} material={materials['[Color_A04]1']} />
        <mesh geometry={nodes.Mesh_362_2.geometry} material={materials.Color_A04} />
        <mesh geometry={nodes.Mesh_362_3.geometry} material={materials['[Color_A05]3']} />
        <mesh geometry={nodes.DrawCall31.geometry} material={materials.Color_A10} />
        <mesh geometry={nodes.DrawCal119.geometry} material={materials.Color_A10} />
        <mesh geometry={nodes.Mesh_358.geometry} material={materials.Color_A09} />
        <mesh geometry={nodes.Mesh_358_1.geometry} material={materials['[Color_A09]2']} />
        <mesh geometry={nodes.Mesh_358_2.geometry} material={materials['[Color_A04]1']} />
        <mesh geometry={nodes.Mesh_358_3.geometry} material={materials.Color_A11} />
        <mesh geometry={nodes.Mesh_358_4.geometry} material={materials['[Color_A05]3']} />
        <mesh geometry={nodes.Mesh_358_5.geometry} material={materials['[Color_A05]5']} />
        <mesh geometry={nodes.DrawCal101.geometry} material={materials['_2_-_Default1']} />
        <mesh geometry={nodes.DrawCal103.geometry} material={materials['_3_-_Default1']} />
        <mesh geometry={nodes.DrawCal105.geometry} material={materials['_2_-_Default1']} />
        <mesh geometry={nodes.DrawCal107.geometry} material={materials['_2_-_Default1']} />
        <mesh geometry={nodes.DrawCal109.geometry} material={materials['_3_-_Default1']} />
        <mesh geometry={nodes.DrawCal111.geometry} material={materials['_3_-_Default1']} />
        <mesh geometry={nodes.DrawCal113.geometry} material={materials['_3_-_Default1']} />
        <mesh geometry={nodes.DrawCal115.geometry} material={materials['_3_-_Default1']} />
        <mesh geometry={nodes.DrawCal117.geometry} material={materials['_3_-_Default1']} />
        <mesh geometry={nodes.DrawCal133.geometry} material={materials['_2_-_Default1']} />
        <mesh geometry={nodes.DrawCal163.geometry} material={materials.Color_B03} />
        <mesh geometry={nodes.Mesh_303.geometry} material={materials.Color_B03} />
        <mesh geometry={nodes.Mesh_303_1.geometry} material={materials['Coat-1']} />
        <mesh geometry={nodes.DrawCal175.geometry} material={materials['[Color_A05]20']} />
        <mesh geometry={nodes.Mesh_304.geometry} material={materials.Color_B03} />
        <mesh geometry={nodes.Mesh_304_1.geometry} material={materials['_2_-_Default1']} />
        <mesh geometry={nodes.Mesh_305.geometry} material={materials.Color_B06} />
        <mesh geometry={nodes.Mesh_305_1.geometry} material={materials.Plastic_Black1} />
        <mesh geometry={nodes.DrawCal181.geometry} material={materials['[Color_A09]7']} />
        <mesh geometry={nodes.DrawCal183.geometry} material={materials.plastic1} />
        <mesh geometry={nodes.DrawCal185.geometry} material={materials.Color_B03} />
        <mesh geometry={nodes.DrawCal187.geometry} material={materials.plastic1} />
        <mesh geometry={nodes.DrawCal189.geometry} material={materials.Color_B03} />
        <mesh geometry={nodes.DrawCal191.geometry} material={materials.plastic1} />
        <mesh geometry={nodes.DrawCal193.geometry} material={materials.Color_B03} />
        <mesh geometry={nodes.DrawCal195.geometry} material={materials.plastic1} />
        <mesh geometry={nodes.DrawCal197.geometry} material={materials.Color_B03} />
        <mesh geometry={nodes.DrawCal199.geometry} material={materials.Color_B03} />
        <mesh geometry={nodes.DrawCal201.geometry} material={materials.Color_B03} />
        <mesh geometry={nodes.Mesh_334.geometry} material={materials['_3_-_Default1']} />
        <mesh geometry={nodes.Mesh_334_1.geometry} material={materials['[Color_A05]8']} />
        <mesh geometry={nodes.Mesh_334_2.geometry} material={materials['_2_-_Default1']} />
        <mesh geometry={nodes.Mesh_335.geometry} material={materials.___________1} />
        <mesh geometry={nodes.Mesh_335_1.geometry} material={materials['[Color_A01]1']} />
        <mesh geometry={nodes.DrawCal211.geometry} material={materials['[Color_A09]7']} />
        <mesh geometry={nodes.DrawCal213.geometry} material={materials['_3_-_Default1']} />
        <mesh geometry={nodes.DrawCal215.geometry} material={materials['_3_-_Default1']} />
        <mesh geometry={nodes.DrawCal221.geometry} material={materials['<Burnt Umber>2']} />
        <mesh geometry={nodes.DrawCal225.geometry} material={materials['_3_-_Default1']} />
        <mesh geometry={nodes.DrawCal227.geometry} material={materials['<Burnt Umber>2']} />
        <mesh geometry={nodes.DrawCal229.geometry} material={materials['<Burnt Umber>2']} />
        <mesh geometry={nodes.DrawCal231.geometry} material={materials['<Burnt Umber>2']} />
        <mesh geometry={nodes.DrawCall15.geometry} material={materials.glass_black1} />
        <mesh geometry={nodes.DrawCall19.geometry} material={materials.glass_black1} />
        <mesh geometry={nodes.DrawCall21.geometry} material={materials.glass_black1} />
        <mesh geometry={nodes.DrawCall23.geometry} material={materials.glass_black1} />
        <mesh geometry={nodes.DrawCall25.geometry} material={materials.glass_black1} />
        <mesh geometry={nodes.DrawCall35.geometry} material={materials['Coat-1']} />
        <mesh geometry={nodes.DrawCall37.geometry} material={materials['Coat-1']} />
        <mesh geometry={nodes.Mesh_288.geometry} material={materials['Coat-1']} />
        <mesh geometry={nodes.Mesh_288_1.geometry} material={materials['<Burnt Umber>2']} />
        <mesh geometry={nodes.Mesh_289.geometry} material={materials['Coat-1']} />
        <mesh geometry={nodes.Mesh_289_1.geometry} material={materials['default material']} />
        <mesh geometry={nodes.DrawCall43.geometry} material={materials['Coat-1']} />
        <mesh geometry={nodes.DrawCall45.geometry} material={materials['Coat-1']} />
        <mesh geometry={nodes.Mesh_352.geometry} material={materials['Coat-1']} />
        <mesh geometry={nodes.Mesh_352_1.geometry} material={materials['default material']} />
        <mesh geometry={nodes.DrawCall49.geometry} material={materials['Coat-1']} />
        <mesh geometry={nodes.DrawCall51.geometry} material={materials['Coat-1']} />
        <mesh geometry={nodes.Mesh_417.geometry} material={materials['Coat-1']} />
        <mesh geometry={nodes.Mesh_417_1.geometry} material={materials['[Color_A05]21']} />
        <mesh geometry={nodes['구성_요소#25'].geometry} material={materials['[Color_A05]19']} />
        <mesh geometry={nodes['구성_요소#25001'].geometry} material={materials['[Color_A05]19']} />
        <mesh geometry={nodes.DrawCall55.geometry} material={materials['Coat-1']} />
        <mesh geometry={nodes.DrawCall57.geometry} material={materials['Coat-1']} />
        <mesh geometry={nodes.Mesh_414.geometry} material={materials['Coat-1']} />
        <mesh geometry={nodes.Mesh_414_1.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_412.geometry} material={materials['[Color_A05]8']} />
        <mesh geometry={nodes.Mesh_412_1.geometry} material={materials['[Color_A05]7']} />
        <mesh geometry={nodes['구성_요소#13'].geometry} material={materials['[Color_A05]6']} />
        <mesh geometry={nodes['구성_요소#13001'].geometry} material={materials['[Color_A05]6']} />
        <mesh geometry={nodes['구성_요소#13002'].geometry} material={materials['[Color_A05]6']} />
        <mesh geometry={nodes['구성_요소#13003'].geometry} material={materials['[Color_A05]6']} />
        <mesh geometry={nodes['구성_요소#13004'].geometry} material={materials['[Color_A05]6']} />
        <mesh geometry={nodes['구성_요소#13005'].geometry} material={materials['[Color_A05]6']} />
        <mesh geometry={nodes['구성_요소#15'].geometry} material={materials['[Color_A09]3']} />
        <mesh geometry={nodes.DrawCall69.geometry} material={materials['[Color_A05]21']} />
        <mesh geometry={nodes.DrawCall71.geometry} material={materials['[Color_A05]21']} />
        <mesh geometry={nodes.Mesh_298.geometry} material={materials['[Color_A05]21']} />
        <mesh geometry={nodes.Mesh_298_1.geometry} material={materials['_3_-_Default1']} />
        <mesh geometry={nodes.Mesh_298_2.geometry} material={materials['_2_-_Default1']} />
        <mesh geometry={nodes.DrawCall75.geometry} material={materials['[Color_A05]21']} />
        <mesh geometry={nodes.Mesh_300.geometry} material={materials['<Charcoal>1']} />
        <mesh geometry={nodes.Mesh_300_1.geometry} material={materials['_3_-_Default1']} />
        <mesh geometry={nodes.Mesh_306.geometry} material={materials['<Charcoal>1']} />
        <mesh geometry={nodes.Mesh_306_1.geometry} material={materials['_3_-_Default1']} />
        <mesh geometry={nodes.DrawCall83.geometry} material={materials['_3_-_Default1']} />
        <mesh geometry={nodes.DrawCall85.geometry} material={materials['Coat-1']} />
        <mesh geometry={nodes.DrawCall87.geometry} material={materials['Coat-1']} />
        <mesh geometry={nodes.DrawCall89.geometry} material={materials['_2_-_Default1']} />
        <mesh geometry={nodes.DrawCall91.geometry} material={materials['_2_-_Default1']} />
        <mesh geometry={nodes.DrawCall93.geometry} material={materials['_3_-_Default1']} />
        <mesh geometry={nodes.DrawCall95.geometry} material={materials['_3_-_Default1']} />
        <mesh geometry={nodes.DrawCall97.geometry} material={materials['_3_-_Default1']} />
        <mesh geometry={nodes.DrawCall99.geometry} material={materials['_3_-_Default1']} />
        <mesh geometry={nodes.DrawCall_3.geometry} material={materials['_3_-_Default1']} />
        <mesh geometry={nodes.DrawCall_5.geometry} material={materials['[Color_A05]1']} />
        <mesh geometry={nodes.DrawCall_7.geometry} material={materials['[Color_A05]5']} />
        <mesh geometry={nodes.DrawCall_9.geometry} material={materials['[Color_A05]5']} />
        <mesh geometry={nodes.Mesh_354_1.geometry} material={materials.____________1} />
        <mesh geometry={nodes.Mesh_354_2.geometry} material={materials['<Burnt Umber>2']} />
        <mesh geometry={nodes.Mesh_354_3.geometry} material={materials['default material']} />
        <mesh geometry={nodes['구성_요소#18'].geometry} material={materials['[Color_A01]3']} />
        <mesh geometry={nodes['구성_요소#19'].geometry} material={materials['[Color_A01]3']} />
        <mesh geometry={nodes['구성_요소#20'].geometry} material={materials['[Color_A05]16']} />
        <mesh geometry={nodes['구성_요소#21'].geometry} material={materials['[Color_A05]16']} />
        <mesh geometry={nodes['구성_요소#22'].geometry} material={materials['[Color_A05]16']} />
        <mesh geometry={nodes['구성_요소#23'].geometry} material={materials['[Color_A05]16']} />
        <mesh geometry={nodes['Component#80'].geometry} material={materials['<Charcoal>']} />
        <mesh geometry={nodes['Component#80001'].geometry} material={materials['<Charcoal>']} />
        <mesh geometry={nodes['Component#80002'].geometry} material={materials['<Charcoal>']} />
        <mesh geometry={nodes['Component#80003'].geometry} material={materials['<Charcoal>']} />
        <mesh geometry={nodes['Component#80004'].geometry} material={materials['<Charcoal>']} />
        <mesh geometry={nodes['Component#80005'].geometry} material={materials['<Charcoal>']} />
        <mesh geometry={nodes['Component#80006'].geometry} material={materials['<Charcoal>']} />
        <mesh geometry={nodes['Component#80007'].geometry} material={materials['<Charcoal>']} />
        <mesh geometry={nodes['Component#80008'].geometry} material={materials['<Charcoal>']} />
        <mesh geometry={nodes['Component#80009'].geometry} material={materials['<Charcoal>']} />
        <mesh geometry={nodes['Component#80010'].geometry} material={materials['<Charcoal>']} />
        <mesh geometry={nodes['Component#80011'].geometry} material={materials['<Charcoal>']} />
        <mesh geometry={nodes['Component#80012'].geometry} material={materials['<Charcoal>']} />
        <mesh geometry={nodes['Component#80013'].geometry} material={materials['<Charcoal>']} />
        <mesh geometry={nodes['Component#80014'].geometry} material={materials['<Charcoal>']} />
        <mesh geometry={nodes['Component#80015'].geometry} material={materials['<Charcoal>']} />
        <mesh geometry={nodes.Mesh_419.geometry} material={materials['<Charcoal>']} />
        <mesh geometry={nodes.Mesh_420.geometry} material={materials['<Charcoal>']} />
        <mesh geometry={nodes.Mesh_421.geometry} material={materials['<Charcoal>']} />
        <mesh geometry={nodes.Mesh_423.geometry} material={materials['<Charcoal>']} />
        <mesh geometry={nodes['CABAEL#1'].geometry} material={materials['[Color_008]5']} />
        <mesh geometry={nodes['Group#427'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427001'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427002'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427003'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427004'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427005'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427006'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427007'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427008'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427009'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427010'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427011'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427012'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427013'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427014'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427015'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427016'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427017'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427018'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427019'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427020'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427021'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427022'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427023'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427024'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427025'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427026'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427027'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427028'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427029'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427030'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427031'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427032'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427033'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427034'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427035'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427036'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427037'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427038'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427039'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427040'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427041'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427042'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427043'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427044'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427045'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427046'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427047'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427048'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427049'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427050'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427051'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427052'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427053'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427054'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427055'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427056'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427057'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427058'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427059'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427060'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427061'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427062'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427063'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427064'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427065'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427066'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427067'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427068'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427069'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes['Group#427070'].geometry} material={materials['0003_DeepPink']} />
        <mesh geometry={nodes.Mesh_1256.geometry} material={materials['Color A08']}>
          <mesh geometry={nodes.Mesh_1252.geometry} material={materials['[Concrete_Form_4x8]1']}>
            <mesh geometry={nodes.Mesh_1251.geometry} material={materials['default material']} />
          </mesh>
          <mesh geometry={nodes.Mesh_1254.geometry} material={materials['[Concrete_Form_4x8]1']}>
            <mesh geometry={nodes.Mesh_1253.geometry} material={materials['default material']} />
          </mesh>
          <mesh geometry={nodes.Mesh_1255.geometry} material={materials['Color A08']} />
        </mesh>
        <mesh geometry={nodes.Mesh_2106.geometry} material={materials['default material']}>
          <mesh geometry={nodes.Mesh_1999.geometry} material={materials.Black_matte} />
          <mesh geometry={nodes.Mesh_2000.geometry} material={materials['Aluminum Nice']} />
          <mesh geometry={nodes.Mesh_2001.geometry} material={materials.Chrome2} />
          <mesh geometry={nodes.Mesh_2002.geometry} material={materials['Aluminum Nice']} />
          <mesh geometry={nodes.Mesh_2015.geometry} material={materials.Black_matte} />
          <mesh geometry={nodes.Mesh_2016.geometry} material={materials['Aluminum Nice']} />
          <mesh geometry={nodes.Mesh_2017.geometry} material={materials.Chrome2} />
          <mesh geometry={nodes.Mesh_2018.geometry} material={materials['Aluminum Nice']} />
          <mesh geometry={nodes.Mesh_2019.geometry} material={materials.Black_matte} />
          <mesh geometry={nodes.Mesh_2020.geometry} material={materials['Aluminum Nice']} />
          <mesh geometry={nodes.Mesh_2021.geometry} material={materials.Chrome2} />
          <mesh geometry={nodes.Mesh_2022.geometry} material={materials['Aluminum Nice']} />
          <mesh geometry={nodes.Mesh_2023.geometry} material={materials.Black_matte} />
          <mesh geometry={nodes.Mesh_2024.geometry} material={materials['Aluminum Nice']} />
          <mesh geometry={nodes.Mesh_2025.geometry} material={materials.Chrome2} />
          <mesh geometry={nodes.Mesh_2026.geometry} material={materials['Aluminum Nice']} />
          <mesh geometry={nodes['Component#228'].geometry} material={materials.GEL_PA_Metal} />
          <mesh geometry={nodes['Component#234'].geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_2003.geometry} material={materials.GEL_PA_Metal} />
          <mesh geometry={nodes.Mesh_2003_1.geometry} material={materials.aco_escovado_fdsafjasfoajsfoijofjwerwerw1} />
          <mesh geometry={nodes['Component#315'].geometry} material={materials.aco_escovado_fdsafjasfoajsfoijofjwerwerw1} />
          <mesh geometry={nodes['Component#228001'].geometry} material={materials.GEL_PA_Metal} />
          <mesh geometry={nodes.Mesh_2038.geometry} material={materials.GEL_PA_Metal} />
          <mesh geometry={nodes.Mesh_2038_1.geometry} material={materials.aco_escovado_fdsafjasfoajsfoijofjwerwerw1} />
          <mesh geometry={nodes['Component#315001'].geometry} material={materials.aco_escovado_fdsafjasfoajsfoijofjwerwerw1} />
          <mesh geometry={nodes['Component#161'].geometry} material={materials.Chrome2} />
          <mesh geometry={nodes['Component#162'].geometry} material={materials.aluminium_blurry} />
          <mesh geometry={nodes['Component#218'].geometry} material={materials.GEL_PA_Metal} />
          <mesh geometry={nodes['Component#218001'].geometry} material={materials.GEL_PA_Metal} />
          <mesh geometry={nodes['Component#218002'].geometry} material={materials.GEL_PA_Metal} />
          <mesh geometry={nodes['Component#218003'].geometry} material={materials.GEL_PA_Metal} />
          <mesh geometry={nodes['Component#224'].geometry} material={materials.GEL_PA_Metal} />
          <mesh geometry={nodes['Component#224001'].geometry} material={materials.GEL_PA_Metal} />
          <mesh geometry={nodes['Component#225'].geometry} material={materials.GEL_PA_Metal} />
          <mesh geometry={nodes['Component#231'].geometry} material={materials.Refreg_Color_2} />
          <mesh geometry={nodes['Component#231001'].geometry} material={materials.Refreg_Color_2} />
          <mesh geometry={nodes['Component#233'].geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_2010.geometry} material={materials.GEL_PA_Metal} />
          <mesh geometry={nodes.Mesh_2010_1.geometry} material={materials.aco_escovado_fdsafjasfoajsfoijofjwerwerw1} />
          <mesh geometry={nodes.Mesh_2012.geometry} material={materials.GEL_PA_Metal} />
          <mesh geometry={nodes.Mesh_2012_1.geometry} material={materials.aco_escovado_fdsafjasfoajsfoijofjwerwerw1} />
          <mesh geometry={nodes.Mesh_2032.geometry} material={materials.aco_escovado_fdsafjasfoajsfoijofjwerwerw1} />
          <mesh geometry={nodes.Mesh_2032_1.geometry} material={materials.GEL_PA_Metal} />
          <mesh geometry={nodes.Mesh_2013.geometry} material={materials.aco_escovado_fdsafjasfoajsfoijofjwerwerw1} />
          <mesh geometry={nodes.Mesh_2013_1.geometry} material={materials.GEL_PA_Metal} />
          <mesh geometry={nodes.Mesh_2014.geometry} material={materials.aco_escovado_fdsafjasfoajsfoijofjwerwerw1} />
          <mesh geometry={nodes.Mesh_2014_1.geometry} material={materials.GEL_PA_Metal} />
          <mesh geometry={nodes.Mesh_2036.geometry} material={materials.aco_escovado_fdsafjasfoajsfoijofjwerwerw1} />
          <mesh geometry={nodes.Mesh_2036_1.geometry} material={materials.Ref_3} />
          <mesh geometry={nodes['Component#331'].geometry} material={materials.aco_escovado_fdsafjasfoajsfoijofjwerwerw1} />
          <mesh geometry={nodes['Component#40'].geometry} material={materials['Color M03']} />
          <mesh geometry={nodes['Component#40001'].geometry} material={materials['Color M03']} />
          <mesh geometry={nodes.Mesh_2042.geometry} material={materials['Branco Eletrônicos']} />
          <mesh geometry={nodes.Mesh_2042_1.geometry} material={materials['Preto Eletrônicos']} />
          <mesh geometry={nodes.Mesh_2042_2.geometry} material={materials.Color_008} />
          <mesh geometry={nodes.Mesh_2046.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_2046_1.geometry} material={materials['Preto Eletrônico Boca do Fogo Cooktop']} />
          <mesh geometry={nodes.Mesh_2046_2.geometry} material={materials['Cromado Inox Eletrônicos']} />
          <mesh geometry={nodes['Component#169'].geometry} material={materials['Preto Eletrônicos']} />
          <mesh geometry={nodes.Mesh_2061.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_2061_1.geometry} material={materials['Preto Eletrônico Boca do Fogo Cooktop']} />
          <mesh geometry={nodes.Mesh_2061_2.geometry} material={materials['Cromado Inox Eletrônicos']} />
          <mesh geometry={nodes['Component#169004'].geometry} material={materials['Preto Eletrônicos']} />
          <mesh geometry={nodes.Mesh_2051.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_2051_1.geometry} material={materials['Preto Eletrônico Boca do Fogo Cooktop']} />
          <mesh geometry={nodes.Mesh_2051_2.geometry} material={materials['Cromado Inox Eletrônicos']} />
          <mesh geometry={nodes['Component#169001'].geometry} material={materials['Preto Eletrônicos']} />
          <mesh geometry={nodes.Mesh_2054.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_2054_1.geometry} material={materials['Preto Eletrônico Boca do Fogo Cooktop']} />
          <mesh geometry={nodes.Mesh_2054_2.geometry} material={materials['Cromado Inox Eletrônicos']} />
          <mesh geometry={nodes['Component#169002'].geometry} material={materials['Preto Eletrônicos']} />
          <mesh geometry={nodes.Mesh_2057.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_2057_1.geometry} material={materials['Preto Eletrônico Boca do Fogo Cooktop']} />
          <mesh geometry={nodes.Mesh_2057_2.geometry} material={materials['Cromado Inox Eletrônicos']} />
          <mesh geometry={nodes['Component#169003'].geometry} material={materials['Preto Eletrônicos']} />
          <mesh geometry={nodes['Group#23'].geometry} material={materials['Cromado Inox Eletrônicos']} />
          <mesh geometry={nodes['Group#23001'].geometry} material={materials['Cromado Inox Eletrônicos']} />
          <mesh geometry={nodes['Group#23002'].geometry} material={materials['Cromado Inox Eletrônicos']} />
          <mesh geometry={nodes['Group#23003'].geometry} material={materials['Cromado Inox Eletrônicos']} />
          <mesh geometry={nodes['Group#23004'].geometry} material={materials['Cromado Inox Eletrônicos']} />
          <mesh geometry={nodes['Group#27'].geometry} material={materials['Cromado Inox Eletrônicos']} />
          <mesh geometry={nodes['Group#27001'].geometry} material={materials['Cromado Inox Eletrônicos']} />
          <mesh geometry={nodes['Group#27002'].geometry} material={materials['Cromado Inox Eletrônicos']} />
          <mesh geometry={nodes['Group#27003'].geometry} material={materials['Cromado Inox Eletrônicos']} />
          <mesh geometry={nodes['Group#27004'].geometry} material={materials['Cromado Inox Eletrônicos']} />
          <mesh geometry={nodes['Component#40002'].geometry} material={materials['Color M03']} />
          <mesh geometry={nodes['Component#40003'].geometry} material={materials['Color M03']} />
          <mesh geometry={nodes['Component#40004'].geometry} material={materials['Color M03']} />
          <mesh geometry={nodes['Component#40005'].geometry} material={materials['Color M03']} />
          <mesh geometry={nodes['Component#40006'].geometry} material={materials['Color M03']} />
          <mesh geometry={nodes['Component#40007'].geometry} material={materials['Color M03']} />
          <mesh geometry={nodes['Component#40008'].geometry} material={materials['Color M03']} />
          <mesh geometry={nodes['Component#40009'].geometry} material={materials['Color M03']} />
          <mesh geometry={nodes.Mesh_2089_1.geometry} material={materials.Build_Platform} />
          <mesh geometry={nodes.Mesh_2089_2.geometry} material={materials.Material5} />
          <mesh geometry={nodes.Mesh_2088_1.geometry} material={materials.Material5} />
          <mesh geometry={nodes.Mesh_2088_2.geometry} material={materials['Огнеупорно стъкло']} />
          <mesh geometry={nodes.Mesh_2088_3.geometry} material={materials.Неръждавейка} />
          <mesh geometry={nodes.Mesh_2088_4.geometry} material={materials.aco_escovado_fdsafjasfoajsfoijofjwerwerw1} />
          <mesh geometry={nodes.Mesh_2088_5.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_2088_6.geometry} material={materials.Дисплей} />
          <mesh geometry={nodes.Eurolux.geometry} material={materials['3D_Text']} />
          <mesh geometry={nodes.Mesh_2092_1.geometry} material={materials.Build_Platform} />
          <mesh geometry={nodes.Mesh_2092_2.geometry} material={materials.Material16} />
          <mesh geometry={nodes.Mesh_2092_3.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_2092_4.geometry} material={materials.Material17} />
          <mesh geometry={nodes.Mesh_2092_5.geometry} material={materials.Material5} />
          <mesh geometry={nodes.Mesh_2092_6.geometry} material={materials.Material6} />
          <mesh geometry={nodes.Mesh_2092_7.geometry} material={materials.aco_escovado_fdsafjasfoajsfoijofjwerwerw} />
          <mesh geometry={nodes.Mesh_2092_8.geometry} material={materials.Material19} />
          <mesh geometry={nodes['Eurolux#1'].geometry} material={materials['3D_Text1']} />
          <mesh geometry={nodes.twl_light.geometry} material={materials.TwiLight} />
          <mesh geometry={nodes.Mesh_1995.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_1996.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_2062.geometry} material={materials['Color M03']} />
          <mesh geometry={nodes.Mesh_2063.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_2064.geometry} material={materials['Color M03']} />
          <mesh geometry={nodes.Mesh_2065.geometry} material={materials['Color M03']} />
          <mesh geometry={nodes.Mesh_2066.geometry} material={materials['Color D08']} />
          <mesh geometry={nodes.Mesh_2067.geometry} material={materials['Color M03']} />
          <mesh geometry={nodes.Mesh_2068.geometry} material={materials['Color M03']} />
          <mesh geometry={nodes.Mesh_2069.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_2076.geometry} material={materials['Color D08']} />
          <mesh geometry={nodes.Mesh_2079.geometry} material={materials['[0120_Orchid]3']} />
          <mesh geometry={nodes.Mesh_2080.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_2081.geometry} material={materials['Color M03']} />
          <mesh geometry={nodes.Mesh_2082.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_2083.geometry} material={materials['Color M03']} />
          <mesh geometry={nodes.Mesh_2084.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_2085.geometry} material={materials['Color M03']} />
          <mesh geometry={nodes.Mesh_2086.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_2093.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_2094.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_2095.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_2096.geometry} material={materials['Color M03']} />
          <mesh geometry={nodes.Mesh_2098.geometry} material={materials['Color M03']}>
            <mesh geometry={nodes.Mesh_2097.geometry} material={materials['default material']} />
          </mesh>
          <mesh geometry={nodes.Mesh_2099.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_2100.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_2101.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_2102.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_2103.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_2104.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_2105.geometry} material={materials['default material']} />
        </mesh>
        <mesh geometry={nodes.Mesh_418.geometry} material={materials.VIDRO2} />
        <mesh geometry={nodes.Mesh_459.geometry} material={materials['0136_Charcoal']} />
        <mesh geometry={nodes.Mesh_555.geometry} material={materials['PLASTIC WHITE']}>
          <mesh geometry={nodes.Mesh_548_1.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_548_2.geometry} material={materials['[Color_000]1']} />
          <mesh geometry={nodes.Mesh_549_1.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_549_2.geometry} material={materials['[Color_000]1']} />
          <mesh geometry={nodes.Mesh_550_1.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_550_2.geometry} material={materials['[Color_000]1']} />
          <mesh geometry={nodes.Mesh_551_1.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_551_2.geometry} material={materials['[Color_000]1']} />
          <mesh geometry={nodes.Mesh_552_1.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_552_2.geometry} material={materials['[Color_000]1']} />
          <mesh geometry={nodes.Mesh_553_1.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_553_2.geometry} material={materials['[Color_000]1']} />
          <mesh geometry={nodes.Mesh_554_1.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_554_2.geometry} material={materials['[Color_000]1']} />
          <mesh geometry={nodes.Mesh_546.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_547.geometry} material={materials['default material']} />
        </mesh>
        <mesh geometry={nodes.Mesh_565.geometry} material={materials['PLASTIC WHITE']}>
          <mesh geometry={nodes.Mesh_558_1.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_558_2.geometry} material={materials['[Color_000]1']} />
          <mesh geometry={nodes.Mesh_559_1.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_559_2.geometry} material={materials['[Color_000]1']} />
          <mesh geometry={nodes.Mesh_560_1.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_560_2.geometry} material={materials['[Color_000]1']} />
          <mesh geometry={nodes.Mesh_561_1.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_561_2.geometry} material={materials['[Color_000]1']} />
          <mesh geometry={nodes.Mesh_562_1.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_562_2.geometry} material={materials['[Color_000]1']} />
          <mesh geometry={nodes.Mesh_563_1.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_563_2.geometry} material={materials['[Color_000]1']} />
          <mesh geometry={nodes.Mesh_564_1.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_564_2.geometry} material={materials['[Color_000]1']} />
          <mesh geometry={nodes.Mesh_556.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_557.geometry} material={materials['default material']} />
        </mesh>
        <mesh geometry={nodes.Mesh_575.geometry} material={materials['PLASTIC WHITE']}>
          <mesh geometry={nodes.Mesh_568_1.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_568_2.geometry} material={materials['[Color_000]1']} />
          <mesh geometry={nodes.Mesh_569_1.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_569_2.geometry} material={materials['[Color_000]1']} />
          <mesh geometry={nodes.Mesh_570_1.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_570_2.geometry} material={materials['[Color_000]1']} />
          <mesh geometry={nodes.Mesh_571_1.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_571_2.geometry} material={materials['[Color_000]1']} />
          <mesh geometry={nodes.Mesh_572_1.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_572_2.geometry} material={materials['[Color_000]1']} />
          <mesh geometry={nodes.Mesh_573_1.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_573_2.geometry} material={materials['[Color_000]1']} />
          <mesh geometry={nodes.Mesh_574_1.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_574_2.geometry} material={materials['[Color_000]1']} />
          <mesh geometry={nodes.Mesh_566.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_567.geometry} material={materials['default material']} />
        </mesh>
        <mesh geometry={nodes.Mesh_7_1.geometry} material={materials.Plastic_Metalic_Black} />
        <mesh geometry={nodes.Mesh_7_2.geometry} material={materials.SmartHub_MainUI_Article} />
        <mesh geometry={nodes.Mesh_5.geometry} material={materials.Plastic_Metalic_Black} />
        <mesh geometry={nodes.Mesh_6.geometry} material={materials.Plastic_Metalic_Black} />
        <mesh geometry={nodes.Mesh_715_1.geometry} material={materials['[0018_Brown]1']} />
        <mesh geometry={nodes.Mesh_715_2.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_690_1.geometry} material={materials.Material132} />
        <mesh geometry={nodes.Mesh_690_2.geometry} material={materials.Material23} />
        <mesh geometry={nodes.Mesh_690_3.geometry} material={materials.Metal_Corrogated_Shiny} />
        <mesh geometry={nodes.Mesh_690_4.geometry} material={materials.Material133} />
        <mesh geometry={nodes.Mesh_690_5.geometry} material={materials.Material134} />
        <mesh geometry={nodes.Mesh_690_6.geometry} material={materials.Material135} />
        <mesh geometry={nodes.Mesh_687.geometry} material={materials['<CorrogateShiny>']} />
        <mesh geometry={nodes.Mesh_689.geometry} material={materials.Material129}>
          <mesh geometry={nodes.Mesh_688.geometry} material={materials.Material129} />
        </mesh>
        <mesh geometry={nodes['Component#327'].geometry} material={materials['hitam k']} />
        <mesh geometry={nodes['Component#327001'].geometry} material={materials['hitam k']} />
        <mesh geometry={nodes['Component#327002'].geometry} material={materials['hitam k']} />
        <mesh geometry={nodes['Group#1325'].geometry} material={materials['hitam k']}>
          <mesh geometry={nodes['Group#1229'].geometry} material={materials['hitam k']} />
          <mesh geometry={nodes['Group#1229001'].geometry} material={materials['hitam k']} />
          <mesh geometry={nodes['Group#1229002'].geometry} material={materials['hitam k']} />
          <mesh geometry={nodes['Group#1229003'].geometry} material={materials['hitam k']} />
          <mesh geometry={nodes.Mesh_700.geometry} material={materials['hitam k']} />
        </mesh>
        <mesh geometry={nodes['Group#1325001'].geometry} material={materials['hitam k']}>
          <mesh geometry={nodes['Group#1229004'].geometry} material={materials['hitam k']} />
          <mesh geometry={nodes['Group#1229005'].geometry} material={materials['hitam k']} />
          <mesh geometry={nodes['Group#1229006'].geometry} material={materials['hitam k']} />
          <mesh geometry={nodes['Group#1229007'].geometry} material={materials['hitam k']} />
          <mesh geometry={nodes.Mesh_706.geometry} material={materials['hitam k']} />
        </mesh>
        <mesh geometry={nodes.Mesh_695_1.geometry} material={materials['hitam k']} />
        <mesh geometry={nodes.Mesh_695_2.geometry} material={materials.stan} />
        <mesh geometry={nodes.Mesh_696_1.geometry} material={materials['hitam k']} />
        <mesh geometry={nodes.Mesh_696_2.geometry} material={materials.stan} />
        <mesh geometry={nodes.Mesh_712_1.geometry} material={materials['hitam k']} />
        <mesh geometry={nodes.Mesh_712_2.geometry} material={materials.stan} />
        <mesh geometry={nodes['Component#327003'].geometry} material={materials['hitam k']} />
        <mesh geometry={nodes.Mesh_694.geometry} material={materials.aco_escovado_fdsafjasfoajsfoijofjwerwerw}>
          <mesh geometry={nodes.Mesh_691.geometry} material={materials.imagens_sdfjasifdjasoifjaoerwew} />
          <mesh geometry={nodes.Mesh_692.geometry} material={materials.imagens_sdfjasifdjasoifjaoerwew} />
          <mesh geometry={nodes.Mesh_693.geometry} material={materials.imagens_sdfjasifdjasoifjaoerwew} />
        </mesh>
        <mesh geometry={nodes.Mesh_580.geometry} material={materials['[Color_D25]1']}>
          <mesh geometry={nodes.Mesh_579.geometry} material={materials['[Color_D25]1']} />
        </mesh>
        <mesh geometry={nodes.Mesh_605.geometry} material={materials['[Color_D25]1']}>
          <mesh geometry={nodes['Group#661'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661001'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661002'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661003'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661004'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661005'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661006'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661007'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661008'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661009'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661010'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661011'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661012'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661013'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661014'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661015'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661016'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661017'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661018'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661019'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661020'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661021'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661022'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661023'].geometry} material={materials['default material']} />
        </mesh>
        <mesh geometry={nodes.Mesh_607.geometry} material={materials['[Color_D25]1']}>
          <mesh geometry={nodes.Mesh_606.geometry} material={materials['[Color_D25]1']} />
        </mesh>
        <mesh geometry={nodes.Mesh_632.geometry} material={materials['[Color_D25]1']}>
          <mesh geometry={nodes['Group#661024'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661025'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661026'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661027'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661028'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661029'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661030'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661031'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661032'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661033'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661034'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661035'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661036'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661037'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661038'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661039'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661040'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661041'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661042'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661043'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661044'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661045'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661046'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661047'].geometry} material={materials['default material']} />
        </mesh>
        <mesh geometry={nodes.Mesh_634.geometry} material={materials['[Color_D25]1']}>
          <mesh geometry={nodes.Mesh_633.geometry} material={materials['[Color_D25]1']} />
        </mesh>
        <mesh geometry={nodes.Mesh_659.geometry} material={materials['[Color_D25]1']}>
          <mesh geometry={nodes['Group#661048'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661049'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661050'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661051'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661052'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661053'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661054'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661055'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661056'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661057'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661058'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661059'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661060'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661061'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661062'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661063'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661064'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661065'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661066'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661067'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661068'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661069'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661070'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661071'].geometry} material={materials['default material']} />
        </mesh>
        <mesh geometry={nodes.Mesh_661.geometry} material={materials['[Color_D25]1']}>
          <mesh geometry={nodes.Mesh_660.geometry} material={materials['[Color_D25]1']} />
        </mesh>
        <mesh geometry={nodes.Mesh_686.geometry} material={materials['[Color_D25]1']}>
          <mesh geometry={nodes['Group#661072'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661073'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661074'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661075'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661076'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661077'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661078'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661079'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661080'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661081'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661082'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661083'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661084'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661085'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661086'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661087'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661088'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661089'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661090'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661091'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661092'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661093'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661094'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Group#661095'].geometry} material={materials['default material']} />
        </mesh>
        <mesh geometry={nodes.Mesh_714.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_769.geometry} material={materials['[Metal_Aluminum_Anodized]2']}>
          <mesh geometry={nodes.Mesh_768_1.geometry} material={materials['[Metal_Aluminum_Anodized]2']} />
          <mesh geometry={nodes.Mesh_768_2.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_767_1.geometry} material={materials['[Metal_Aluminum_Anodized]2']} />
          <mesh geometry={nodes.Mesh_767_2.geometry} material={materials['default material']} />
        </mesh>
        <mesh geometry={nodes.Mesh_844_1.geometry} material={materials['[Color_A06]3']} />
        <mesh geometry={nodes.Mesh_844_2.geometry} material={materials['Fence']} material-color={props.customColors.Fence}/>
        <mesh geometry={nodes.Mesh_844_3.geometry} material={materials['[Color_F21]2']} />
        <mesh geometry={nodes.Mesh_844_4.geometry} material={materials['Color A08']} />
        <mesh geometry={nodes.Mesh_844_5.geometry} material={materials['0014_DarkSalmon']} />
      </group>
    </group>
  )
}

function Model1() {
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
                      <label for="body">Wall</label>
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

export default Model1;