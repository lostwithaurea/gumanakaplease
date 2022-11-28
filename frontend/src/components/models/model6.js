import '../css/model.css';
import React, {Suspense, useRef, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import {OrbitControls, useGLTF} from "@react-three/drei";
import { useNavigate } from 'react-router-dom';

export function Model(props) {
    const { nodes, materials } = useGLTF('/model7.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.Mesh_1285.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1285_1.geometry} material={materials['[Color A04]2']} />
        <mesh geometry={nodes.Mesh_1285_2.geometry} material={materials['[0002_MediumVioletRed]3']} />
        <mesh geometry={nodes.Mesh_157.geometry} material={materials.Material15} />
        <mesh geometry={nodes.Mesh_158.geometry} material={materials.Material15} />
        <mesh geometry={nodes.Mesh_156.geometry} material={materials.Material15} />
        <mesh geometry={nodes.Mesh_156_1.geometry} material={materials.Material14} />
        <mesh geometry={nodes.Mesh_160.geometry} material={materials.Material15} />
        <mesh geometry={nodes.Mesh_161.geometry} material={materials.Material15} />
        <mesh geometry={nodes.Mesh_159.geometry} material={materials.body1} />
        <mesh geometry={nodes.Mesh_159_1.geometry} material={materials.Material14} />
        <mesh geometry={nodes.inner_rim_.geometry} material={materials.rim1} />
        <mesh geometry={nodes.rim_wheel_.geometry} material={materials.rim1} />
        <mesh geometry={nodes.tire_wheel.geometry} material={materials.Material14} />
        <mesh geometry={nodes.wheel_embl.geometry} material={materials.wheel_emblem1} />
        <mesh geometry={nodes.inner_rim_001.geometry} material={materials.rim1} />
        <mesh geometry={nodes.rim_wheel_001.geometry} material={materials.rim1} />
        <mesh geometry={nodes.tire_wheel001.geometry} material={materials.Material14} />
        <mesh geometry={nodes.wheel_embl001.geometry} material={materials.wheel_emblem1} />
        <mesh geometry={nodes.boot.geometry} material={materials.body1}>
          <mesh geometry={nodes.Mesh_128.geometry} material={materials.tailight1} />
          <mesh geometry={nodes.Mesh_128_1.geometry} material={materials.brklights1} />
        </mesh>
        <mesh geometry={nodes.Mesh_134.geometry} material={materials.body1} />
        <mesh geometry={nodes.Mesh_134_1.geometry} material={materials.Material15} />
        <mesh geometry={nodes.Mesh_134_2.geometry} material={materials.Material14} />
        <mesh geometry={nodes.Mesh_134_3.geometry} material={materials.window1} />
        <mesh geometry={nodes['Group#10'].geometry} material={materials.body1} />
        <mesh geometry={nodes.polySurf48.geometry} material={materials.Material14} />
        <mesh geometry={nodes.polySurf49.geometry} material={materials.mirrorgla1} />
        <mesh geometry={nodes.doorhandle.geometry} material={materials.body1} />
        <mesh geometry={nodes.Mesh_137.geometry} material={materials.body1} />
        <mesh geometry={nodes.Mesh_137_1.geometry} material={materials.Material15} />
        <mesh geometry={nodes.Mesh_137_2.geometry} material={materials.Material14} />
        <mesh geometry={nodes.Mesh_137_3.geometry} material={materials.window1} />
        <mesh geometry={nodes.doorhandle001.geometry} material={materials.body1} />
        <mesh geometry={nodes.Mesh_154.geometry} material={materials.grille1} />
        <mesh geometry={nodes.Mesh_154_1.geometry} material={materials.Material15} />
        <mesh geometry={nodes.Mesh_154_2.geometry} material={materials.body1} />
        <mesh geometry={nodes.Mesh_154_3.geometry} material={materials.Material14} />
        <mesh geometry={nodes['Group#21'].geometry} material={materials.Material14} />
        <mesh geometry={nodes['Group#21001'].geometry} material={materials.Material14} />
        <mesh geometry={nodes['Group#21002'].geometry} material={materials.Material14} />
        <mesh geometry={nodes.Mesh_147.geometry} material={materials.Material14} />
        <mesh geometry={nodes.Mesh_151.geometry} material={materials.Material14} />
        <mesh geometry={nodes.Mesh_152.geometry} material={materials.Material14} />
        <mesh geometry={nodes.Mesh_153.geometry} material={materials.Material14} />
        <mesh geometry={nodes.fender.geometry} material={materials.body1}>
          <mesh geometry={nodes.turnsignal.geometry} material={materials['<YellowGreen>']} />
        </mesh>
        <mesh geometry={nodes.headlight.geometry} material={materials.hlglass1} />
        <mesh geometry={nodes.hood.geometry} material={materials.body1} />
        <mesh geometry={nodes.Mesh_155.geometry} material={materials.body1} />
        <mesh geometry={nodes.Mesh_155_1.geometry} material={materials.Material14} />
        <mesh geometry={nodes.Mesh_142.geometry} material={materials.body1} />
        <mesh geometry={nodes.Mesh_142_1.geometry} material={materials.Material14} />
        <mesh geometry={nodes.Mesh_142_2.geometry} material={materials.grille1} />
        <mesh geometry={nodes.Mesh_142_3.geometry} material={materials.tailight1} />
        <mesh geometry={nodes.Mesh_141.geometry} material={materials.Material14} />
        <mesh geometry={nodes.Mesh_135.geometry} material={materials.Material15} />
        <mesh geometry={nodes.Mesh_135_1.geometry} material={materials.Material14} />
        <mesh geometry={nodes.Mesh_135_2.geometry} material={materials.window1} />
        <mesh geometry={nodes.rwindow.geometry} material={materials.window1} />
        <mesh geometry={nodes.sideskirt.geometry} material={materials.body1} />
        <mesh geometry={nodes.Mesh_127.geometry} material={materials.revlights1} />
        <mesh geometry={nodes.Mesh_127_1.geometry} material={materials['Turn Signal Reflector']} />
        <mesh geometry={nodes.Mesh_127_2.geometry} material={materials.tailight1} />
        <mesh geometry={nodes.Mesh_127_3.geometry} material={materials.brklights1} />
        <mesh geometry={nodes.undercar.geometry} material={materials.Material14} />
        <mesh geometry={nodes.windshield.geometry} material={materials.window1} />
        <mesh geometry={nodes.inner_rim_002.geometry} material={materials.rim1} />
        <mesh geometry={nodes.rim_wheel_002.geometry} material={materials.rim1} />
        <mesh geometry={nodes.tire_wheel002.geometry} material={materials.Material14} />
        <mesh geometry={nodes.wheel_embl002.geometry} material={materials.wheel_emblem1} />
        <mesh geometry={nodes.inner_rim_003.geometry} material={materials.rim1} />
        <mesh geometry={nodes.rim_wheel_003.geometry} material={materials.rim1} />
        <mesh geometry={nodes.tire_wheel003.geometry} material={materials.Material14} />
        <mesh geometry={nodes.wheel_embl003.geometry} material={materials.wheel_emblem1} />
        <mesh geometry={nodes.boot001.geometry} material={materials.body1}>
          <mesh geometry={nodes.Mesh_173.geometry} material={materials.tailight1} />
          <mesh geometry={nodes.Mesh_173_1.geometry} material={materials.brklights1} />
        </mesh>
        <mesh geometry={nodes.Mesh_179.geometry} material={materials.body1} />
        <mesh geometry={nodes.Mesh_179_1.geometry} material={materials.Material15} />
        <mesh geometry={nodes.Mesh_179_2.geometry} material={materials.Material14} />
        <mesh geometry={nodes.Mesh_179_3.geometry} material={materials.window1} />
        <mesh geometry={nodes['Group#10001'].geometry} material={materials.body1} />
        <mesh geometry={nodes.polySurf48001.geometry} material={materials.Material14} />
        <mesh geometry={nodes.polySurf49001.geometry} material={materials.mirrorgla1} />
        <mesh geometry={nodes.doorhandle002.geometry} material={materials.body1} />
        <mesh geometry={nodes.Mesh_182.geometry} material={materials.body1} />
        <mesh geometry={nodes.Mesh_182_1.geometry} material={materials.Material15} />
        <mesh geometry={nodes.Mesh_182_2.geometry} material={materials.Material14} />
        <mesh geometry={nodes.Mesh_182_3.geometry} material={materials.window1} />
        <mesh geometry={nodes.doorhandle003.geometry} material={materials.body1} />
        <mesh geometry={nodes.Mesh_199.geometry} material={materials.grille1} />
        <mesh geometry={nodes.Mesh_199_1.geometry} material={materials.Material15} />
        <mesh geometry={nodes.Mesh_199_2.geometry} material={materials.body1} />
        <mesh geometry={nodes.Mesh_199_3.geometry} material={materials.Material14} />
        <mesh geometry={nodes['Group#21003'].geometry} material={materials.Material14} />
        <mesh geometry={nodes['Group#21004'].geometry} material={materials.Material14} />
        <mesh geometry={nodes['Group#21005'].geometry} material={materials.Material14} />
        <mesh geometry={nodes.Mesh_192.geometry} material={materials.Material14} />
        <mesh geometry={nodes.Mesh_196.geometry} material={materials.Material14} />
        <mesh geometry={nodes.Mesh_197.geometry} material={materials.Material14} />
        <mesh geometry={nodes.Mesh_198.geometry} material={materials.Material14} />
        <mesh geometry={nodes.fender001.geometry} material={materials.body1}>
          <mesh geometry={nodes.turnsignal001.geometry} material={materials['<YellowGreen>']} />
        </mesh>
        <mesh geometry={nodes.headlight001.geometry} material={materials.hlglass1} />
        <mesh geometry={nodes.hood001.geometry} material={materials.body1} />
        <mesh geometry={nodes.Mesh_200.geometry} material={materials.body1} />
        <mesh geometry={nodes.Mesh_200_1.geometry} material={materials.Material14} />
        <mesh geometry={nodes.Mesh_187.geometry} material={materials.body1} />
        <mesh geometry={nodes.Mesh_187_1.geometry} material={materials.Material14} />
        <mesh geometry={nodes.Mesh_187_2.geometry} material={materials.grille1} />
        <mesh geometry={nodes.Mesh_187_3.geometry} material={materials.tailight1} />
        <mesh geometry={nodes.Mesh_186.geometry} material={materials.Material14} />
        <mesh geometry={nodes.Mesh_180.geometry} material={materials.Material15} />
        <mesh geometry={nodes.Mesh_180_1.geometry} material={materials.Material14} />
        <mesh geometry={nodes.Mesh_180_2.geometry} material={materials.window1} />
        <mesh geometry={nodes.rwindow001.geometry} material={materials.window1} />
        <mesh geometry={nodes.sideskirt001.geometry} material={materials.body1} />
        <mesh geometry={nodes.Mesh_172.geometry} material={materials.revlights1} />
        <mesh geometry={nodes.Mesh_172_1.geometry} material={materials['Turn Signal Reflector']} />
        <mesh geometry={nodes.Mesh_172_2.geometry} material={materials.tailight1} />
        <mesh geometry={nodes.Mesh_172_3.geometry} material={materials.brklights1} />
        <mesh geometry={nodes.undercar001.geometry} material={materials.Material14} />
        <mesh geometry={nodes.windshield001.geometry} material={materials.window1} />
        <mesh geometry={nodes['Group#18'].geometry} material={materials.emblem1} />
        <mesh geometry={nodes.Mesh_107.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_107_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_108.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_108_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_109.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_109_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_110.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_110_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_106.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_111.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_113.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_113_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_114.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_114_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_115.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_115_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_116.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_116_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_112.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_117.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_57.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_57_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_58.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_58_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_59.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_59_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_60.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_60_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_56.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_61.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_63.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_63_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_64.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_64_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_65.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_65_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_66.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_66_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_62.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_67.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_101.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_101_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_102.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_102_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_103.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_103_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_104.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_104_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_100.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_105.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Component#4'].geometry} material={materials['Color M07']} />
        <mesh geometry={nodes['Component#4001'].geometry} material={materials['Color M07']} />
        <mesh geometry={nodes['Component#4002'].geometry} material={materials['Color M07']} />
        <mesh geometry={nodes['Component#4003'].geometry} material={materials['Color M07']} />
        <mesh geometry={nodes['Component#4004'].geometry} material={materials['Color M07']} />
        <mesh geometry={nodes['Component#4005'].geometry} material={materials['Color M07']} />
        <mesh geometry={nodes['Component#4006'].geometry} material={materials['Color M07']} />
        <mesh geometry={nodes['Component#4007'].geometry} material={materials['Color M07']} />
        <mesh geometry={nodes['Component#4008'].geometry} material={materials['Color M07']} />
        <mesh geometry={nodes['Component#4009'].geometry} material={materials['Color M07']} />
        <mesh geometry={nodes['Component#4010'].geometry} material={materials['Color M07']} />
        <mesh geometry={nodes['Component#4011'].geometry} material={materials['Color M07']} />
        <mesh geometry={nodes['Component#4012'].geometry} material={materials['Color M07']} />
        <mesh geometry={nodes['Component#4013'].geometry} material={materials['Color M07']} />
        <mesh geometry={nodes['Component#4014'].geometry} material={materials['Color M07']} />
        <mesh geometry={nodes['Component#4015'].geometry} material={materials['Color M07']} />
        <mesh geometry={nodes['Component#4016'].geometry} material={materials['Color M07']} />
        <mesh geometry={nodes['Component#4017'].geometry} material={materials['Color M07']} />
        <mesh geometry={nodes.Mesh_43.geometry} material={materials['Translucent Glass Gray']} />
        <mesh geometry={nodes['Component#244'].geometry} material={materials['Color A02']} />
        <mesh geometry={nodes['Component#244001'].geometry} material={materials['Color A02']} />
        <mesh geometry={nodes['Component#244002'].geometry} material={materials['Color A02']} />
        <mesh geometry={nodes['Component#244003'].geometry} material={materials['Color A02']} />
        <mesh geometry={nodes['Component#244004'].geometry} material={materials['Color A02']} />
        <mesh geometry={nodes['Component#244005'].geometry} material={materials['Color A02']} />
        <mesh geometry={nodes.Mesh_52.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_52_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_53.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_54.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_54_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_55.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_20.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_20_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_21.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_21_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_17.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_17_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_18.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_18_1.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Mesh_16.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_19.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes['Group#561'].geometry} material={materials['CROMO PERFIL METALICO1']} />
        <mesh geometry={nodes['Group#561001'].geometry} material={materials['CROMO PERFIL METALICO1']} />
        <mesh geometry={nodes['Component#28'].geometry} material={materials.PRZYCISK} />
        <mesh geometry={nodes['Component#28001'].geometry} material={materials.PRZYCISK} />
        <mesh geometry={nodes['Component#157'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Component#157001'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Component#158'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Component#157002'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Component#157003'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Component#158001'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#330'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#330001'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#340'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#340001'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes.Mesh_68_1.geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes.Mesh_68_2.geometry} material={materials.wood1} />
        <mesh geometry={nodes.Mesh_69.geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#561002'].geometry} material={materials['CROMO PERFIL METALICO1']} />
        <mesh geometry={nodes['Group#561003'].geometry} material={materials['CROMO PERFIL METALICO1']} />
        <mesh geometry={nodes['Component#28002'].geometry} material={materials.PRZYCISK} />
        <mesh geometry={nodes['Component#28003'].geometry} material={materials.PRZYCISK} />
        <mesh geometry={nodes['Component#157004'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Component#157005'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Component#158002'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Component#157006'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Component#157007'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Component#158003'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#330002'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#330003'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#340002'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes['Group#340003'].geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes.Mesh_84_1.geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes.Mesh_84_2.geometry} material={materials.wood1} />
        <mesh geometry={nodes.Mesh_85.geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes.Mesh_23.geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes.Mesh_24.geometry} material={materials.PRZYCISK} />
        <mesh geometry={nodes.Mesh_25.geometry} material={materials['CROMO PERFIL METALICO1']} />
        <mesh geometry={nodes.Mesh_26.geometry} material={materials.PRZYCISK} />
        <mesh geometry={nodes.Mesh_27.geometry} material={materials.PRZYCISK} />
        <mesh geometry={nodes.Mesh_28.geometry} material={materials['[0004_HotPink]4']} />
        <mesh geometry={nodes.Mesh_29.geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes.Mesh_30.geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes.Mesh_22.geometry} material={materials['0120_Orchid']} />
        <mesh geometry={nodes.Mesh_204.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_205.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_206_1.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_206_2.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_207_1.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_207_2.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_208.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_209.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_210.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_211.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_212.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_213.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_214.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_215.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_216.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_217.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_218.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_219.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_220.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_221.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_222.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_223.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_224.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_225.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_226.geometry} material={materials['burrinho freio']} />
        <mesh geometry={nodes.Mesh_227.geometry} material={materials.Cromado} />
        <mesh geometry={nodes['Agrupar#42'].geometry} material={materials.Cromado} />
        <mesh geometry={nodes['Agrupar#42001'].geometry} material={materials.Cromado} />
        <mesh geometry={nodes['Agrupar#42002'].geometry} material={materials.Cromado} />
        <mesh geometry={nodes['Agrupar#42003'].geometry} material={materials.Cromado} />
        <mesh geometry={nodes['Agrupar#42004'].geometry} material={materials.Cromado} />
        <mesh geometry={nodes['Agrupar#42005'].geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_203.geometry} material={materials.RODAS_3} />
        <mesh geometry={nodes.Mesh_444_1.geometry} material={materials.Pneu_BF1} />
        <mesh geometry={nodes.Mesh_444_2.geometry} material={materials.Pneu_BF2} />
        <mesh geometry={nodes['Group#27'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27001'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27002'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27003'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3001'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30001'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39001'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2001'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference001.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36001'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47001'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27004'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27005'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3002'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30002'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39002'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2002'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference002.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36002'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47002'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27006'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27007'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3003'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30003'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39003'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2003'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference003.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36003'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47003'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27008'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27009'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3004'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30004'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39004'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2004'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference004.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36004'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47004'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27010'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27011'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3005'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30005'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39005'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2005'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference005.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36005'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47005'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27012'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27013'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3006'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30006'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39006'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2006'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference006.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36006'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47006'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27014'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27015'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3007'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30007'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39007'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2007'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference007.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36007'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47007'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27016'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27017'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3008'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30008'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39008'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2008'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference008.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36008'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47008'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27018'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27019'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3009'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30009'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39009'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2009'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference009.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36009'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47009'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27020'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27021'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3010'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30010'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39010'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2010'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference010.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36010'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47010'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27022'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27023'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3011'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30011'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39011'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2011'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference011.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36011'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47011'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27024'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27025'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3012'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30012'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39012'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2012'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference012.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36012'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47012'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27026'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27027'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3013'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30013'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39013'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2013'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference013.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36013'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47013'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27028'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27029'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3014'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30014'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39014'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2014'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference014.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36014'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47014'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27030'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27031'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3015'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30015'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39015'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2015'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference015.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36015'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47015'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27032'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27033'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3016'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30016'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39016'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2016'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference016.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36016'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47016'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27034'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27035'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3017'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30017'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39017'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2017'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference017.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36017'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47017'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27036'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27037'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3018'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30018'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39018'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2018'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference018.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36018'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47018'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27038'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27039'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3019'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30019'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39019'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2019'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference019.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36019'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47019'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27040'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27041'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3020'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30020'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39020'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2020'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference020.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36020'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47020'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27042'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27043'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3021'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30021'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39021'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2021'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference021.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36021'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47021'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27044'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27045'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3022'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30022'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39022'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2022'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference022.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36022'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47022'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27046'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27047'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3023'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30023'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39023'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2023'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference023.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36023'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47023'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_452.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_453.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_454_1.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_454_2.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_455_1.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_455_2.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_456.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_457.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_458.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_459.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_460.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_461.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_462.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_463.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_464.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_465.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_466.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_467.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_468.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_469.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_470.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_471.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_472.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_473.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_474.geometry} material={materials['burrinho freio']} />
        <mesh geometry={nodes.Mesh_475.geometry} material={materials.Cromado} />
        <mesh geometry={nodes['Agrupar#42006'].geometry} material={materials.Cromado} />
        <mesh geometry={nodes['Agrupar#42007'].geometry} material={materials.Cromado} />
        <mesh geometry={nodes['Agrupar#42008'].geometry} material={materials.Cromado} />
        <mesh geometry={nodes['Agrupar#42009'].geometry} material={materials.Cromado} />
        <mesh geometry={nodes['Agrupar#42010'].geometry} material={materials.Cromado} />
        <mesh geometry={nodes['Agrupar#42011'].geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_451.geometry} material={materials.RODAS_3} />
        <mesh geometry={nodes.Mesh_692_1.geometry} material={materials.Pneu_BF1} />
        <mesh geometry={nodes.Mesh_692_2.geometry} material={materials.Pneu_BF2} />
        <mesh geometry={nodes['Group#27048'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27049'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3024'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30024'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39024'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2024'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference024.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36024'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47024'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27050'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27051'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3025'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30025'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39025'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2025'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference025.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36025'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47025'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27052'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27053'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3026'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30026'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39026'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2026'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference026.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36026'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47026'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27054'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27055'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3027'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30027'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39027'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2027'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference027.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36027'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47027'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27056'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27057'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3028'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30028'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39028'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2028'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference028.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36028'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47028'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27058'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27059'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3029'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30029'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39029'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2029'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference029.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36029'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47029'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27060'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27061'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3030'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30030'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39030'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2030'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference030.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36030'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47030'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27062'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27063'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3031'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30031'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39031'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2031'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference031.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36031'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47031'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27064'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27065'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3032'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30032'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39032'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2032'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference032.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36032'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47032'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27066'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27067'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3033'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30033'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39033'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2033'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference033.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36033'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47033'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27068'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27069'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3034'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30034'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39034'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2034'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference034.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36034'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47034'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27070'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27071'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3035'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30035'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39035'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2035'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference035.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36035'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47035'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27072'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27073'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3036'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30036'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39036'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2036'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference036.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36036'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47036'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27074'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27075'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3037'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30037'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39037'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2037'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference037.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36037'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47037'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27076'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27077'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3038'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30038'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39038'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2038'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference038.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36038'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47038'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27078'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27079'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3039'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30039'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39039'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2039'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference039.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36039'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47039'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27080'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27081'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3040'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30040'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39040'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2040'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference040.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36040'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47040'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27082'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27083'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3041'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30041'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39041'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2041'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference041.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36041'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47041'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27084'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27085'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3042'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30042'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39042'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2042'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference042.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36042'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47042'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27086'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27087'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3043'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30043'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39043'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2043'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference043.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36043'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47043'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27088'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27089'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3044'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30044'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39044'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2044'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference044.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36044'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47044'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27090'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27091'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3045'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30045'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39045'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2045'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference045.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36045'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47045'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27092'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27093'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3046'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30046'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39046'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2046'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference046.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36046'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47046'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27094'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27095'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3047'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30047'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39047'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2047'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference047.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36047'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47047'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_786.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_787.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_788_1.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_788_2.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_789_1.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_789_2.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_790.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_791.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_792.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_793.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_794.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_795.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_796.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_797.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_798.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_799.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_800.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_801.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_802.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_803.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_804.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_805.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_806.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_807.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_808.geometry} material={materials['burrinho freio']} />
        <mesh geometry={nodes.Mesh_809.geometry} material={materials.Cromado} />
        <mesh geometry={nodes['Agrupar#42012'].geometry} material={materials.Cromado} />
        <mesh geometry={nodes['Agrupar#42013'].geometry} material={materials.Cromado} />
        <mesh geometry={nodes['Agrupar#42014'].geometry} material={materials.Cromado} />
        <mesh geometry={nodes['Agrupar#42015'].geometry} material={materials.Cromado} />
        <mesh geometry={nodes['Agrupar#42016'].geometry} material={materials.Cromado} />
        <mesh geometry={nodes['Agrupar#42017'].geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_1026_1.geometry} material={materials.Pneu_BF1} />
        <mesh geometry={nodes.Mesh_1026_2.geometry} material={materials.Pneu_BF2} />
        <mesh geometry={nodes['Group#27096'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27097'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3048'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30048'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39048'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2048'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference048.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36048'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47048'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27098'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27099'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3049'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30049'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39049'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2049'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference049.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36049'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47049'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27100'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27101'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3050'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30050'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39050'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2050'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference050.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36050'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47050'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27102'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27103'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3051'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30051'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39051'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2051'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference051.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36051'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47051'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27104'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27105'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3052'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30052'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39052'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2052'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference052.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36052'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47052'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27106'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27107'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3053'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30053'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39053'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2053'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference053.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36053'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47053'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27108'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27109'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3054'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30054'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39054'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2054'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference054.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36054'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47054'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27110'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27111'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3055'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30055'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39055'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2055'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference055.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36055'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47055'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27112'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27113'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3056'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30056'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39056'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2056'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference056.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36056'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47056'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27114'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27115'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3057'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30057'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39057'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2057'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference057.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36057'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47057'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27116'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27117'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3058'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30058'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39058'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2058'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference058.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36058'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47058'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27118'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27119'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3059'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30059'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39059'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2059'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference059.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36059'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47059'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27120'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27121'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3060'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30060'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39060'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2060'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference060.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36060'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47060'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27122'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27123'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3061'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30061'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39061'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2061'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference061.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36061'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47061'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27124'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27125'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3062'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30062'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39062'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2062'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference062.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36062'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47062'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27126'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27127'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3063'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30063'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39063'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2063'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference063.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36063'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47063'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27128'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27129'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3064'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30064'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39064'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2064'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference064.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36064'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47064'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27130'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27131'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3065'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30065'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39065'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2065'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference065.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36065'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47065'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27132'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27133'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3066'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30066'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39066'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2066'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference066.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36066'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47066'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27134'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27135'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3067'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30067'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39067'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2067'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference067.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36067'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47067'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27136'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27137'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3068'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30068'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39068'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2068'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference068.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36068'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47068'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27138'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27139'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3069'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30069'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39069'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2069'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference069.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36069'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47069'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27140'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27141'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3070'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30070'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39070'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2070'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference070.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36070'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47070'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27142'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27143'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3071'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30071'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39071'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2071'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference071.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36071'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47071'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_785.geometry} material={materials.RODAS_3} />
        <mesh geometry={nodes.Mesh_1035.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1036.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_1037_1.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1037_2.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_1038_1.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1038_2.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_1039.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1040.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1041.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1042.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1043.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1044.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_1045.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_1046.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1047.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_1048.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_1049.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_1050.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_1051.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_1052.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_1053.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1054.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1055.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1056.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1057.geometry} material={materials['burrinho freio']} />
        <mesh geometry={nodes.Mesh_1058.geometry} material={materials.Cromado} />
        <mesh geometry={nodes['Agrupar#42018'].geometry} material={materials.Cromado} />
        <mesh geometry={nodes['Agrupar#42019'].geometry} material={materials.Cromado} />
        <mesh geometry={nodes['Agrupar#42020'].geometry} material={materials.Cromado} />
        <mesh geometry={nodes['Agrupar#42021'].geometry} material={materials.Cromado} />
        <mesh geometry={nodes['Agrupar#42022'].geometry} material={materials.Cromado} />
        <mesh geometry={nodes['Agrupar#42023'].geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_1034.geometry} material={materials.RODAS_3} />
        <mesh geometry={nodes.Mesh_1275_1.geometry} material={materials.Pneu_BF1} />
        <mesh geometry={nodes.Mesh_1275_2.geometry} material={materials.Pneu_BF2} />
        <mesh geometry={nodes['Group#27144'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27145'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3072'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30072'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39072'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2072'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference072.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36072'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47072'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27146'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27147'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3073'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30073'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39073'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2073'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference073.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36073'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47073'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27148'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27149'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3074'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30074'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39074'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2074'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference074.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36074'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47074'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27150'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27151'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3075'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30075'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39075'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2075'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference075.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36075'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47075'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27152'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27153'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3076'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30076'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39076'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2076'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference076.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36076'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47076'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27154'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27155'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3077'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30077'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39077'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2077'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference077.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36077'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47077'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27156'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27157'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3078'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30078'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39078'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2078'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference078.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36078'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47078'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27158'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27159'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3079'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30079'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39079'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2079'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference079.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36079'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47079'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27160'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27161'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3080'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30080'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39080'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2080'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference080.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36080'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47080'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27162'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27163'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3081'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30081'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39081'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2081'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference081.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36081'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47081'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27164'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27165'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3082'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30082'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39082'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2082'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference082.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36082'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47082'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27166'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27167'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3083'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30083'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39083'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2083'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference083.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36083'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47083'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27168'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27169'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3084'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30084'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39084'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2084'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference084.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36084'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47084'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27170'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27171'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3085'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30085'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39085'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2085'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference085.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36085'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47085'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27172'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27173'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3086'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30086'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39086'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2086'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference086.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36086'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47086'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27174'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27175'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3087'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30087'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39087'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2087'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference087.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36087'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47087'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27176'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27177'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3088'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30088'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39088'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2088'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference088.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36088'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47088'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27178'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27179'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3089'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30089'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39089'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2089'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference089.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36089'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47089'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27180'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27181'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3090'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30090'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39090'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2090'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference090.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36090'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47090'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27182'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27183'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3091'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30091'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39091'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2091'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference091.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36091'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47091'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27184'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27185'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3092'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30092'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39092'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2092'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference092.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36092'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47092'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27186'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27187'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3093'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30093'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39093'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2093'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference093.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36093'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47093'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27188'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27189'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3094'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30094'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39094'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2094'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference094.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36094'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47094'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27190'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#27191'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#3095'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#30095'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#39095'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Difference#2095'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Difference095.geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#36095'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Group#47095'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_731.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_736.geometry} material={materials.Farol_2} />
        <mesh geometry={nodes.Mesh_738_1.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_738_2.geometry} material={materials.Detalhes_challenge} />
        <mesh geometry={nodes.Mesh_737_1.geometry} material={materials.Detalhes_challenge} />
        <mesh geometry={nodes.Mesh_737_2.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_739.geometry} material={materials.Farol_1} />
        <mesh geometry={nodes.Mesh_740.geometry} material={materials.Farol_1} />
        <mesh geometry={nodes.Mesh_701.geometry} material={materials.Farol_1} />
        <mesh geometry={nodes.Mesh_702.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_723_1.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_723_2.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_722_1.geometry} material={materials.lanterna_2} />
        <mesh geometry={nodes.Mesh_722_2.geometry} material={materials.lanterna_1} />
        <mesh geometry={nodes.Mesh_721.geometry} material={materials.Detalhes_challenge} />
        <mesh geometry={nodes.Mesh_721_1.geometry} material={materials.Pintura} />
        <mesh geometry={nodes.Mesh_720.geometry} material={materials.Detalhes_challenge} />
        <mesh geometry={nodes.Mesh_720_1.geometry} material={materials.Fundo} />
        <mesh geometry={nodes['Agrupar#111'].geometry} material={materials.insulfilm} />
        <mesh geometry={nodes.Mesh_708.geometry} material={materials.Pintura} />
        <mesh geometry={nodes.Mesh_708_1.geometry} material={materials.Fundo} />
        <mesh geometry={nodes['Agrupar#113'].geometry} material={materials.insulfilm} />
        <mesh geometry={nodes['Agrupar#115'].geometry} material={materials.Detalhes_challenge} />
        <mesh geometry={nodes['Agrupar#116'].geometry} material={materials.insulfilm} />
        <mesh geometry={nodes['Agrupar#117'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Agrupar#118'].geometry} material={materials.Detalhes_challenge} />
        <mesh geometry={nodes['Agrupar#119'].geometry} material={materials.insulfilm} />
        <mesh geometry={nodes['Agrupar#121'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Agrupar#122'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Agrupar#123'].geometry} material={materials.Detalhes_challenge} />
        <mesh geometry={nodes['Agrupar#124'].geometry} material={materials.Detalhes_challenge} />
        <mesh geometry={nodes['Agrupar#125'].geometry} material={materials.Detalhes_challenge} />
        <mesh geometry={nodes['Agrupar#126'].geometry} material={materials.Detalhes_challenge} />
        <mesh geometry={nodes['Agrupar#22'].geometry} material={materials.Fundo} />
        <mesh geometry={nodes.Mesh_741.geometry} material={materials.Detalhes_challenge} />
        <mesh geometry={nodes.Mesh_741_1.geometry} material={materials.Pintura} />
        <mesh geometry={nodes['Agrupar#59'].geometry} material={materials.Detalhes_challenge} />
        <mesh geometry={nodes['Diferença#1'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_704_1.geometry} material={materials.Pintura} />
        <mesh geometry={nodes.Mesh_704_2.geometry} material={materials.Material16} />
        <mesh geometry={nodes.Mesh_704_3.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_712.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_729_1.geometry} material={materials.Fundo} />
        <mesh geometry={nodes.Mesh_729_2.geometry} material={materials.Pintura} />
        <mesh geometry={nodes.Mesh_724.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_725.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_726.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_727.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_728.geometry} material={materials.Detalhes_challenge} />
        <mesh geometry={nodes.Mesh_730_1.geometry} material={materials.Pintura} />
        <mesh geometry={nodes.Mesh_730_2.geometry} material={materials.Detalhes_challenge} />
        <mesh geometry={nodes.Mesh_732.geometry} material={materials.Fundo} />
        <mesh geometry={nodes.Mesh_733.geometry} material={materials.Fundo} />
        <mesh geometry={nodes.Mesh_734.geometry} material={materials.Detalhes_challenge} />
        <mesh geometry={nodes.Mesh_735.geometry} material={materials.Detalhes_challenge} />
        <mesh geometry={nodes.Mesh_774.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_779.geometry} material={materials.Farol_2} />
        <mesh geometry={nodes.Mesh_781_1.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_781_2.geometry} material={materials.Detalhes_challenge} />
        <mesh geometry={nodes.Mesh_780_1.geometry} material={materials.Detalhes_challenge} />
        <mesh geometry={nodes.Mesh_780_2.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_782.geometry} material={materials.Farol_1} />
        <mesh geometry={nodes.Mesh_783.geometry} material={materials.Farol_1} />
        <mesh geometry={nodes.Mesh_744.geometry} material={materials.Farol_1} />
        <mesh geometry={nodes.Mesh_745.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_766_1.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_766_2.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_765_1.geometry} material={materials.lanterna_2} />
        <mesh geometry={nodes.Mesh_765_2.geometry} material={materials.lanterna_1} />
        <mesh geometry={nodes.Mesh_764.geometry} material={materials.Detalhes_challenge} />
        <mesh geometry={nodes.Mesh_764_1.geometry} material={materials.Pintura} />
        <mesh geometry={nodes.Mesh_763.geometry} material={materials.Detalhes_challenge} />
        <mesh geometry={nodes.Mesh_763_1.geometry} material={materials.Fundo} />
        <mesh geometry={nodes['Agrupar#111001'].geometry} material={materials.insulfilm} />
        <mesh geometry={nodes.Mesh_751.geometry} material={materials.Pintura} />
        <mesh geometry={nodes.Mesh_751_1.geometry} material={materials.Fundo} />
        <mesh geometry={nodes['Agrupar#113001'].geometry} material={materials.insulfilm} />
        <mesh geometry={nodes['Agrupar#115001'].geometry} material={materials.Detalhes_challenge} />
        <mesh geometry={nodes['Agrupar#116001'].geometry} material={materials.insulfilm} />
        <mesh geometry={nodes['Agrupar#117001'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Agrupar#118001'].geometry} material={materials.Detalhes_challenge} />
        <mesh geometry={nodes['Agrupar#119001'].geometry} material={materials.insulfilm} />
        <mesh geometry={nodes['Agrupar#121001'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Agrupar#122001'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Agrupar#123001'].geometry} material={materials.Detalhes_challenge} />
        <mesh geometry={nodes['Agrupar#124001'].geometry} material={materials.Detalhes_challenge} />
        <mesh geometry={nodes['Agrupar#125001'].geometry} material={materials.Detalhes_challenge} />
        <mesh geometry={nodes['Agrupar#126001'].geometry} material={materials.Detalhes_challenge} />
        <mesh geometry={nodes['Agrupar#22001'].geometry} material={materials.Fundo} />
        <mesh geometry={nodes.Mesh_784.geometry} material={materials.Detalhes_challenge} />
        <mesh geometry={nodes.Mesh_784_1.geometry} material={materials.Pintura} />
        <mesh geometry={nodes['Agrupar#59001'].geometry} material={materials.Detalhes_challenge} />
        <mesh geometry={nodes['Diferença#1001'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_747_1.geometry} material={materials.Pintura} />
        <mesh geometry={nodes.Mesh_747_2.geometry} material={materials.Material16} />
        <mesh geometry={nodes.Mesh_747_3.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_755.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_772_1.geometry} material={materials.Fundo} />
        <mesh geometry={nodes.Mesh_772_2.geometry} material={materials.Pintura} />
        <mesh geometry={nodes.Mesh_767.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_768.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_769.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_770.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_771.geometry} material={materials.Detalhes_challenge} />
        <mesh geometry={nodes.Mesh_773_1.geometry} material={materials.Pintura} />
        <mesh geometry={nodes.Mesh_773_2.geometry} material={materials.Detalhes_challenge} />
        <mesh geometry={nodes.Mesh_775.geometry} material={materials.Fundo} />
        <mesh geometry={nodes.Mesh_776.geometry} material={materials.Fundo} />
        <mesh geometry={nodes.Mesh_777.geometry} material={materials.Detalhes_challenge} />
        <mesh geometry={nodes.Mesh_778.geometry} material={materials.Detalhes_challenge} />
        <mesh geometry={nodes['Agrupar#43'].geometry} material={materials.Fundo} />
        <mesh geometry={nodes.Mesh_1033_1.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_1033_2.geometry} material={materials.Fundo} />
        <mesh geometry={nodes.Mesh_201.geometry} material={materials.Fundo} />
        <mesh geometry={nodes.Mesh_1284.geometry} material={materials.Detalhes_challenge} />
        <mesh geometry={nodes.Mesh_1284_1.geometry} material={materials.Cromado} />
        <mesh geometry={nodes.Mesh_1284_2.geometry} material={materials.Fundo} />
        <mesh geometry={nodes.Mesh_1284_3.geometry} material={materials.Pintura} />
        <mesh geometry={nodes.Mesh_1282.geometry} material={materials.Detalhes_challenge} />
        <mesh geometry={nodes.Mesh_1283.geometry} material={materials.Detalhes_challenge} />
        <mesh geometry={nodes.Mesh_0.geometry} material={materials['roof']} material-color={props.customColors.roof}/>
        <mesh geometry={nodes.Mesh_0_1.geometry} material={materials['[0002_MediumVioletRed]4']} />
        <mesh geometry={nodes.Mesh_0_2.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_1_1.geometry} material={materials['Translucent Glass Gray']} />
        <mesh geometry={nodes.Mesh_4.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_4_1.geometry} material={materials['Translucent Glass Gray']} />
        <mesh geometry={nodes.Mesh_14.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_14_1.geometry} material={materials['Translucent Glass Gray']} />
        <mesh geometry={nodes['Component#8'].geometry} material={materials['Color M07']} />
        <mesh geometry={nodes['Component#8001'].geometry} material={materials['Color M07']} />
        <mesh geometry={nodes.Mesh_13_1.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes.Mesh_13_2.geometry} material={materials['0014_DarkSalmon']} />
        <mesh geometry={nodes.Mesh_13_3.geometry} material={materials['Color M04']} />
        <mesh geometry={nodes.Mesh_15_1.geometry} material={materials['Translucent Glass Gray']} />
        <mesh geometry={nodes.Mesh_15_2.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_2_1.geometry} material={materials['Translucent Glass Gray']} />
        <mesh geometry={nodes.Mesh_2_2.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_3_1.geometry} material={materials['Translucent Glass Gray']} />
        <mesh geometry={nodes.Mesh_3_2.geometry} material={materials.Color_D25} />
        <mesh geometry={nodes.Mesh_5_1.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_5_2.geometry} material={materials['[Color A04]2']} />
        <mesh geometry={nodes.Mesh_5_3.geometry} material={materials['Color A07']} />
        <mesh geometry={nodes.Mesh_6_1.geometry} material={materials['Color M07']} />
        <mesh geometry={nodes.Mesh_6_2.geometry} material={materials['Color A07']} />
        <mesh geometry={nodes.Mesh_6_3.geometry} material={materials['[Color A03]1']} />
      </group>
    )
  }

  function Model6() {
    const [interior,setInterior] = useState("ffffff")
    const [Fence,setFence] = useState("ffffff")
    const [curtain,setCurtain] = useState("ffffff")
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
                  <a className="nav-linkk" href="About">About</a>
                </li>
            
                <li className="nav-itemm "> 
                  <a className="nav-linkk" href="Contact">Contact Us</a>
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
                      <Model customColors={{interior:interior, Fence:Fence, curtain:curtain, tile:tile, roof:roof}}/>
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
  
  export default Model6;
  