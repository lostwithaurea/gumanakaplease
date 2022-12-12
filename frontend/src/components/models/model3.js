import '../css/model.css';
import React, {Suspense, useRef, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import {OrbitControls, useGLTF} from "@react-three/drei";
import { useNavigate } from 'react-router-dom';

export function Model(props) {
    const { nodes, materials } = useGLTF('/model3.gltf')
    return (
      <group {...props} dispose={null}>
        <group position={[-11.55, 0, 24.89]}>
          <mesh geometry={nodes.chrome16.geometry} material={materials.chrome3} />
          <mesh geometry={nodes.glass_cle2.geometry} material={materials.glass_clear1} />
          <mesh geometry={nodes.chrome16001.geometry} material={materials.chrome3} />
          <mesh geometry={nodes.glass_cle2001.geometry} material={materials.glass_clear1} />
          <mesh geometry={nodes.chrome01.geometry} material={materials.chrome3} />
          <mesh geometry={nodes.chrome02.geometry} material={materials.chrome3} />
          <mesh geometry={nodes.glass_bla1.geometry} material={materials.glass_black1} />
          <mesh geometry={nodes.glass_refr.geometry} material={materials.glass_refract1} />
          <mesh geometry={nodes.metal_bla2.geometry} material={materials.metal_black1} />
          <mesh geometry={nodes.metal_bla3.geometry} material={materials.metal_black1} />
          <mesh geometry={nodes.chrome01001.geometry} material={materials.chrome3} />
          <mesh geometry={nodes.chrome02001.geometry} material={materials.chrome3} />
          <mesh geometry={nodes.glass_bla1001.geometry} material={materials.glass_black1} />
          <mesh geometry={nodes.glass_refr001.geometry} material={materials.glass_refract1} />
          <mesh geometry={nodes.metal_bla2001.geometry} material={materials.metal_black1} />
          <mesh geometry={nodes.metal_bla3001.geometry} material={materials.metal_black1} />
          <mesh geometry={nodes.carpaint03.geometry} material={materials.body1} />
          <mesh geometry={nodes.glass_blac.geometry} material={materials.glass_black1} />
          <mesh geometry={nodes.Mesh_1281.geometry} material={materials.chrome3} />
          <mesh geometry={nodes.plastic01.geometry} material={materials.plastic1} />
          <mesh geometry={nodes.carpaint03001.geometry} material={materials.body1} />
          <mesh geometry={nodes.glass_blac001.geometry} material={materials.glass_black1} />
          <mesh geometry={nodes.Mesh_1285.geometry} material={materials.chrome3} />
          <mesh geometry={nodes.plastic01001.geometry} material={materials.plastic1} />
          <mesh geometry={nodes['Component#41'].geometry} material={materials.silver2} />
          <mesh geometry={nodes.chrome09.geometry} material={materials.chrome3} />
          <mesh geometry={nodes.glass_cle0.geometry} material={materials.glass_clear1} />
          <mesh geometry={nodes.glass_clea.geometry} material={materials.glass_clear1} />
          <mesh geometry={nodes.glass_red0.geometry} material={materials.glass_red1} />
          <mesh geometry={nodes.chrome09001.geometry} material={materials.chrome3} />
          <mesh geometry={nodes.glass_cle0001.geometry} material={materials.glass_clear1} />
          <mesh geometry={nodes.glass_clea001.geometry} material={materials.glass_clear1} />
          <mesh geometry={nodes.glass_red0001.geometry} material={materials.glass_red1} />
          <mesh geometry={nodes.chrome_rim.geometry} material={materials.chrome4} />
          <mesh geometry={nodes.Mesh_1275_1.geometry} material={materials.tyre} />
          <mesh geometry={nodes.Mesh_1275_2.geometry} material={materials.disk} />
          <mesh geometry={nodes.Mesh_1276.geometry} material={materials.rim2} />
          <mesh geometry={nodes.Mesh_1276_1.geometry} material={materials.chrome4} />
          <mesh geometry={nodes.chrome_rim001.geometry} material={materials.chrome4} />
          <mesh geometry={nodes.Mesh_1291_1.geometry} material={materials.tyre} />
          <mesh geometry={nodes.Mesh_1291_2.geometry} material={materials.disk} />
          <mesh geometry={nodes.Mesh_1292.geometry} material={materials.rim2} />
          <mesh geometry={nodes.Mesh_1292_1.geometry} material={materials.chrome4} />
          <mesh geometry={nodes.chrome_rim002.geometry} material={materials.chrome4} />
          <mesh geometry={nodes.Mesh_1295_1.geometry} material={materials.tyre} />
          <mesh geometry={nodes.Mesh_1295_2.geometry} material={materials.disk} />
          <mesh geometry={nodes.Mesh_1296.geometry} material={materials.rim2} />
          <mesh geometry={nodes.Mesh_1296_1.geometry} material={materials.chrome4} />
          <mesh geometry={nodes.chrome_rim003.geometry} material={materials.chrome4} />
          <mesh geometry={nodes.Mesh_1298_1.geometry} material={materials.tyre} />
          <mesh geometry={nodes.Mesh_1298_2.geometry} material={materials.disk} />
          <mesh geometry={nodes.Mesh_1299.geometry} material={materials.rim2} />
          <mesh geometry={nodes.Mesh_1299_1.geometry} material={materials.chrome4} />
          <mesh geometry={nodes.black.geometry} material={materials.black2} />
          <mesh geometry={nodes.carpaint00.geometry} material={materials.body1} />
          <mesh geometry={nodes.carpaint01.geometry} material={materials.body1} />
          <mesh geometry={nodes['chrome03#1'].geometry} material={materials.chrome3} />
          <mesh geometry={nodes.chrome04.geometry} material={materials.chrome3} />
          <mesh geometry={nodes.chrome05.geometry} material={materials.chrome3} />
          <mesh geometry={nodes['chrome07#1'].geometry} material={materials.chrome3} />
          <mesh geometry={nodes.chrome08.geometry} material={materials.chrome3} />
          <mesh geometry={nodes.chrome10.geometry} material={materials.chrome3} />
          <mesh geometry={nodes.chrome14.geometry} material={materials.chrome3} />
          <mesh geometry={nodes.chrome15.geometry} material={materials.chrome3} />
          <mesh geometry={nodes['Component#41001'].geometry} material={materials.silver2} />
          <mesh geometry={nodes['Component#42'].geometry} material={materials.body1} />
          <mesh geometry={nodes['Component#42001'].geometry} material={materials.body1} />
          <mesh geometry={nodes['Component#43'].geometry} material={materials.body1} />
          <mesh geometry={nodes.glass_bla0.geometry} material={materials.glass_black1} />
          <mesh geometry={nodes.glass_cle1.geometry} material={materials['[Color_A01]3']} />
          <mesh geometry={nodes.glass_red1.geometry} material={materials.glass_red1} />
          <mesh geometry={nodes['Group#121'].geometry} material={materials.chrome3} />
          <mesh geometry={nodes['Group#121001'].geometry} material={materials.chrome3} />
          <mesh geometry={nodes['int01#1'].geometry} material={materials.int1} />
          <mesh geometry={nodes['int02#1'].geometry} material={materials.int1} />
          <mesh geometry={nodes['int03#1'].geometry} material={materials.int1} />
          <mesh geometry={nodes.Mesh_1301.geometry} material={materials.chrome3} />
          <mesh geometry={nodes.Mesh_1328.geometry} material={materials.body1} />
          <mesh geometry={nodes.Mesh_1329.geometry} material={materials.body1} />
          <mesh geometry={nodes.Mesh_1330.geometry} material={materials.body1} />
          <mesh geometry={nodes.Mesh_1331.geometry} material={materials.body1} />
          <mesh geometry={nodes.Mesh_1332.geometry} material={materials.silver2} />
          <mesh geometry={nodes.metal_bla0.geometry} material={materials.metal_black1} />
          <mesh geometry={nodes.metal_blac.geometry} material={materials.metal_black1} />
          <mesh geometry={nodes.plastic02.geometry} material={materials.plastic1}>
            <mesh geometry={nodes.Mesh_1271.geometry} material={materials.plastic2} />
          </mesh>
          <mesh geometry={nodes.plastic04.geometry} material={materials.plastic1} />
          <mesh geometry={nodes['plastic05#1'].geometry} material={materials.plastic2} />
          <mesh geometry={nodes.plastic06.geometry} material={materials.plastic1} />
          <mesh geometry={nodes.plastic07.geometry} material={materials.plastic1} />
          <mesh geometry={nodes.plastic09.geometry} material={materials.plastic1} />
          <mesh geometry={nodes.Mesh_878_1.geometry} material={materials['roof']} material-color={props.customColors.roof}/>
          <mesh geometry={nodes.Mesh_878_2.geometry} material={materials['Color E05']} />
          <mesh geometry={nodes.Mesh_879.geometry} material={materials['roof']} material-color={props.customColors.roof}/>
          <mesh geometry={nodes['Component#64058'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64059'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64060'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64061'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64062'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64063'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64064'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64065'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64066'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64067'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64068'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64069'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64070'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64071'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64072'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64073'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64074'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64075'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64076'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64077'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64078'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64079'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64080'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64081'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64082'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64083'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64084'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64085'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64086'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64087'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64088'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64089'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64090'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64091'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64092'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64093'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64094'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64095'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64096'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64097'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64098'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64099'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64100'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64101'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64102'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64103'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64104'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64105'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64106'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64107'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#160'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64108'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64109'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64110'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64111'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64112'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64113'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64114'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64115'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64116'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64117'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64118'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64119'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64120'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64121'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64122'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64123'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64124'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64125'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64126'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64127'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64128'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64129'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64130'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64131'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64132'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64133'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64134'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64135'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64136'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64137'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64138'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64139'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64140'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64141'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64142'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64143'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64144'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64145'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64146'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64147'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64148'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64149'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64150'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64151'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64152'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64153'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64154'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64155'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64156'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64157'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#160001'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64158'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64159'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64160'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64161'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64162'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64163'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64164'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64165'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64166'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64167'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64168'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64169'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64170'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64171'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64172'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64173'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64174'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64175'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64176'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64177'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64178'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64179'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64180'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64181'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64182'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64183'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64184'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64185'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64186'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64187'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64188'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64189'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64190'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64191'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64192'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64193'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64194'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64195'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64196'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64197'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64198'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64199'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64200'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64201'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64202'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64203'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64204'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64205'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64206'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64207'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#160002'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60001'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60002'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60003'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60004'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60005'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60006'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60007'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60008'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60009'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60010'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60011'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60012'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60013'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60014'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60015'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60016'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60017'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60018'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60019'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#58'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60020'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60021'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60022'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60023'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60024'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60025'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60026'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60027'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60028'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60029'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60030'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60031'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60032'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60033'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60034'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60035'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60036'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60037'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60038'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#60039'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#58001'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64001'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64002'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64003'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64004'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64005'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64006'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64007'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64008'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64009'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64010'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64011'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64012'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64013'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64014'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64015'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64016'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64017'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64018'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64019'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64020'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64021'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64022'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64023'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64024'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64025'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64026'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64027'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64028'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64029'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64030'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64031'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64032'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64033'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64034'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64035'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64036'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64037'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64038'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64039'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64040'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64041'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64042'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64043'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64044'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64045'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64046'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64047'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64048'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64049'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64050'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64051'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64052'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64053'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64054'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64055'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64056'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#64057'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#62'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47001'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47002'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47003'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47004'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47005'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47006'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47007'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47008'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47009'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47010'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47011'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47012'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47013'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47014'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47015'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47016'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47017'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47018'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47019'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47020'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47021'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47022'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47023'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#46'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47024'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47025'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47026'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47027'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47028'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47029'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47030'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47031'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47032'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47033'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47034'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47035'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47036'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47037'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47038'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47039'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47040'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47041'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47042'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47043'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47044'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47045'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47046'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47047'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#46001'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47048'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47049'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47050'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47051'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47052'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47053'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47054'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47055'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47056'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47057'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47058'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47059'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47060'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47061'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47062'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47063'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47064'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47065'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47066'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47067'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47068'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47069'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47070'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47071'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#46002'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47072'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47073'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47074'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47075'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47076'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47077'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47078'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47079'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47080'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47081'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47082'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47083'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47084'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47085'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47086'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47087'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47088'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47089'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47090'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47091'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47092'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47093'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47094'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#47095'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#46003'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_1063.geometry} material={materials['Fence']} material-color={props.customColors.Fence}/>
          <mesh geometry={nodes.Mesh_1064.geometry} material={materials['[Color_008]8']} />
          <mesh geometry={nodes.Mesh_1066_1.geometry} material={materials['Color M04']} />
          <mesh geometry={nodes.Mesh_1066_2.geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes.Mesh_1067.geometry} material={materials['Fence']} material-color={props.customColors.Fence}/>
          <mesh geometry={nodes.Mesh_1068_1.geometry} material={materials['Color M04']} />
          <mesh geometry={nodes.Mesh_1068_2.geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes.Mesh_1090.geometry} material={materials['[Color_008]8']} />
          <mesh geometry={nodes.Mesh_1091.geometry} material={materials['[Color_008]8']} />
          <mesh geometry={nodes.Mesh_1143.geometry} material={materials['Fence']} material-color={props.customColors.Fence}/>
          <mesh geometry={nodes.Mesh_1144.geometry} material={materials['Fence']} material-color={props.customColors.Fence}/>
          <mesh geometry={nodes.Mesh_1145.geometry} material={materials['[Color_008]8']} />
          <mesh geometry={nodes.Mesh_881.geometry} material={materials['Fence']} material-color={props.customColors.Fence}/>
          <mesh geometry={nodes.Mesh_882.geometry} material={materials['Fence']} material-color={props.customColors.Fence}/>
          <mesh geometry={nodes['ZAP_2022#3'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['ZAP_2022#3001'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_1433.geometry} material={materials.____________1} />
          <mesh geometry={nodes.Mesh_1433_1.geometry} material={materials['[Color_A04]2']} />
          <mesh geometry={nodes.Mesh_1430.geometry} material={materials['[Color_008]2']} />
          <mesh geometry={nodes.Mesh_1430_1.geometry} material={materials['Chrome 02']} />
          <mesh geometry={nodes['구성_요소#24'].geometry} material={materials['[Color_A09]6']} />
          <mesh geometry={nodes.DrawCal139.geometry} material={materials.____________1} />
          <mesh geometry={nodes.DrawCal203.geometry} material={materials['_3_-_Default1']} />
          <mesh geometry={nodes.Mesh_1439.geometry} material={materials.____________1} />
          <mesh geometry={nodes.Mesh_1439_1.geometry} material={materials['[Color_A04]2']} />
          <mesh geometry={nodes.Mesh_1436.geometry} material={materials['[Color_008]2']} />
          <mesh geometry={nodes.Mesh_1436_1.geometry} material={materials['Chrome 02']} />
          <mesh geometry={nodes['구성_요소#24001'].geometry} material={materials['[Color_A09]6']} />
          <mesh geometry={nodes.DrawCal139001.geometry} material={materials.____________1} />
          <mesh geometry={nodes.DrawCal203001.geometry} material={materials['_3_-_Default1']} />
          <mesh geometry={nodes.Mesh_1444.geometry} material={materials.____________1} />
          <mesh geometry={nodes.Mesh_1444_1.geometry} material={materials['[Color_A04]2']} />
          <mesh geometry={nodes.Mesh_1441.geometry} material={materials['[Color_008]2']} />
          <mesh geometry={nodes.Mesh_1441_1.geometry} material={materials['Chrome 02']} />
          <mesh geometry={nodes['구성_요소#24002'].geometry} material={materials['[Color_A09]6']} />
          <mesh geometry={nodes.DrawCal139002.geometry} material={materials.____________1} />
          <mesh geometry={nodes.DrawCal203002.geometry} material={materials['_3_-_Default1']} />
          <mesh geometry={nodes.Mesh_1449.geometry} material={materials.____________1} />
          <mesh geometry={nodes.Mesh_1449_1.geometry} material={materials['[Color_A04]2']} />
          <mesh geometry={nodes.Mesh_1446.geometry} material={materials['[Color_008]2']} />
          <mesh geometry={nodes.Mesh_1446_1.geometry} material={materials['Chrome 02']} />
          <mesh geometry={nodes['구성_요소#24003'].geometry} material={materials['[Color_A09]6']} />
          <mesh geometry={nodes.DrawCal139003.geometry} material={materials.____________1} />
          <mesh geometry={nodes.DrawCal203003.geometry} material={materials['_3_-_Default1']} />
          <mesh geometry={nodes['구성_요소#4'].geometry} material={materials.Color_A09} />
          <mesh geometry={nodes.Mesh_1410.geometry} material={materials['[Color_A04]1']} />
          <mesh geometry={nodes.Mesh_1410_1.geometry} material={materials['[Color_A05]4']} />
          <mesh geometry={nodes.Mesh_1410_2.geometry} material={materials['[Color_A05]3']} />
          <mesh geometry={nodes.Mesh_1410_3.geometry} material={materials.Color_A04} />
          <mesh geometry={nodes['구성_요소#6'].geometry} material={materials.Color_A10} />
          <mesh geometry={nodes.Mesh_1411.geometry} material={materials.Color_A09} />
          <mesh geometry={nodes.Mesh_1411_1.geometry} material={materials['[Color_A09]2']} />
          <mesh geometry={nodes.Mesh_1411_2.geometry} material={materials['[Color_A04]1']} />
          <mesh geometry={nodes.Mesh_1411_3.geometry} material={materials.Color_A11} />
          <mesh geometry={nodes.Mesh_1411_4.geometry} material={materials['[Color_A05]3']} />
          <mesh geometry={nodes.Mesh_1411_5.geometry} material={materials['[Color_A05]5']} />
          <mesh geometry={nodes['구성_요소#9'].geometry} material={materials.Color_A10} />
          <mesh geometry={nodes.DrawCal141.geometry} material={materials['[Color_A08]3']} />
          <mesh geometry={nodes.Mesh_1416.geometry} material={materials['_3_-_Default1']} />
          <mesh geometry={nodes.Mesh_1416_1.geometry} material={materials['[Color_A08]1']} />
          <mesh geometry={nodes.Mesh_1416_2.geometry} material={materials['Chrome 02']} />
          <mesh geometry={nodes.Mesh_1416_3.geometry} material={materials['[Color_A05]9']} />
          <mesh geometry={nodes.Mesh_1416_4.geometry} material={materials['[Color_A08]2']} />
          <mesh geometry={nodes.DrawCal217.geometry} material={materials['_3_-_Default1']} />
          <mesh geometry={nodes.Mesh_1414.geometry} material={materials['[Color_A09]5']} />
          <mesh geometry={nodes.Mesh_1414_1.geometry} material={materials['[Color_A08]1']} />
          <mesh geometry={nodes.Mesh_1414_2.geometry} material={materials['[Color_A05]13']} />
          <mesh geometry={nodes.Mesh_1414_3.geometry} material={materials['[Color_A05]5']} />
          <mesh geometry={nodes.Mesh_1414_4.geometry} material={materials['Chrome 02']} />
          <mesh geometry={nodes.Mesh_1414_5.geometry} material={materials['_3_-_Default1']} />
          <mesh geometry={nodes.Mesh_1414_6.geometry} material={materials['[Color_A05]11']} />
          <mesh geometry={nodes.Mesh_1413.geometry} material={materials['[Color_A05]15']} />
          <mesh geometry={nodes.Mesh_1413_1.geometry} material={materials['[Color_006]3']} />
          <mesh geometry={nodes.Mesh_1413_2.geometry} material={materials['[Color_A01]2']} />
          <mesh geometry={nodes.DrawCal141001.geometry} material={materials['[Color_A08]3']} />
          <mesh geometry={nodes.Mesh_1421.geometry} material={materials['_3_-_Default1']} />
          <mesh geometry={nodes.Mesh_1421_1.geometry} material={materials['[Color_A08]1']} />
          <mesh geometry={nodes.Mesh_1421_2.geometry} material={materials['Chrome 02']} />
          <mesh geometry={nodes.Mesh_1421_3.geometry} material={materials['[Color_A05]9']} />
          <mesh geometry={nodes.Mesh_1421_4.geometry} material={materials['[Color_A08]2']} />
          <mesh geometry={nodes.DrawCal217001.geometry} material={materials['_3_-_Default1']} />
          <mesh geometry={nodes.Mesh_1419.geometry} material={materials['[Color_A09]5']} />
          <mesh geometry={nodes.Mesh_1419_1.geometry} material={materials['[Color_A08]1']} />
          <mesh geometry={nodes.Mesh_1419_2.geometry} material={materials['[Color_A05]13']} />
          <mesh geometry={nodes.Mesh_1419_3.geometry} material={materials['[Color_A05]5']} />
          <mesh geometry={nodes.Mesh_1419_4.geometry} material={materials['Chrome 02']} />
          <mesh geometry={nodes.Mesh_1419_5.geometry} material={materials['_3_-_Default1']} />
          <mesh geometry={nodes.Mesh_1419_6.geometry} material={materials['[Color_A05]11']} />
          <mesh geometry={nodes.Mesh_1418.geometry} material={materials['[Color_A05]15']} />
          <mesh geometry={nodes.Mesh_1418_1.geometry} material={materials['[Color_006]3']} />
          <mesh geometry={nodes.Mesh_1418_2.geometry} material={materials['[Color_A01]2']} />
          <mesh geometry={nodes.Mesh_1406.geometry} material={materials.Color_A09} />
          <mesh geometry={nodes.Mesh_1406_1.geometry} material={materials['[Color_002]4']} />
          <mesh geometry={nodes.Mesh_1407.geometry} material={materials['[Color_A05]4']} />
          <mesh geometry={nodes.Mesh_1407_1.geometry} material={materials['[Color_A04]1']} />
          <mesh geometry={nodes.Mesh_1407_2.geometry} material={materials.Color_A04} />
          <mesh geometry={nodes.Mesh_1407_3.geometry} material={materials['[Color_A05]3']} />
          <mesh geometry={nodes.DrawCall31.geometry} material={materials.Color_A10} />
          <mesh geometry={nodes.DrawCal119.geometry} material={materials.Color_A10} />
          <mesh geometry={nodes.Mesh_1403.geometry} material={materials.Color_A09} />
          <mesh geometry={nodes.Mesh_1403_1.geometry} material={materials['[Color_A09]2']} />
          <mesh geometry={nodes.Mesh_1403_2.geometry} material={materials['[Color_A04]1']} />
          <mesh geometry={nodes.Mesh_1403_3.geometry} material={materials.Color_A11} />
          <mesh geometry={nodes.Mesh_1403_4.geometry} material={materials['[Color_A05]3']} />
          <mesh geometry={nodes.Mesh_1403_5.geometry} material={materials['[Color_A05]5']} />
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
          <mesh geometry={nodes.Mesh_1348.geometry} material={materials.Color_B03} />
          <mesh geometry={nodes.Mesh_1348_1.geometry} material={materials['Coat-1']} />
          <mesh geometry={nodes.DrawCal175.geometry} material={materials['[Color_A05]20']} />
          <mesh geometry={nodes.Mesh_1349.geometry} material={materials.Color_B03} />
          <mesh geometry={nodes.Mesh_1349_1.geometry} material={materials['_2_-_Default1']} />
          <mesh geometry={nodes.Mesh_1350.geometry} material={materials.Color_B06} />
          <mesh geometry={nodes.Mesh_1350_1.geometry} material={materials.Plastic_Black1} />
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
          <mesh geometry={nodes.Mesh_1379.geometry} material={materials['_3_-_Default1']} />
          <mesh geometry={nodes.Mesh_1379_1.geometry} material={materials['[Color_A05]8']} />
          <mesh geometry={nodes.Mesh_1379_2.geometry} material={materials['_2_-_Default1']} />
          <mesh geometry={nodes.Mesh_1380.geometry} material={materials.___________1} />
          <mesh geometry={nodes.Mesh_1380_1.geometry} material={materials['[Color_A01]1']} />
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
          <mesh geometry={nodes.Mesh_1333.geometry} material={materials['Coat-1']} />
          <mesh geometry={nodes.Mesh_1333_1.geometry} material={materials['<Burnt Umber>2']} />
          <mesh geometry={nodes.Mesh_1334.geometry} material={materials['Coat-1']} />
          <mesh geometry={nodes.Mesh_1334_1.geometry} material={materials['default material']} />
          <mesh geometry={nodes.DrawCall43.geometry} material={materials['Coat-1']} />
          <mesh geometry={nodes.DrawCall45.geometry} material={materials['Coat-1']} />
          <mesh geometry={nodes.Mesh_1397.geometry} material={materials['Coat-1']} />
          <mesh geometry={nodes.Mesh_1397_1.geometry} material={materials['default material']} />
          <mesh geometry={nodes.DrawCall49.geometry} material={materials['Coat-1']} />
          <mesh geometry={nodes.DrawCall51.geometry} material={materials['Coat-1']} />
          <mesh geometry={nodes.Mesh_1462.geometry} material={materials['Coat-1']} />
          <mesh geometry={nodes.Mesh_1462_1.geometry} material={materials['[Color_A05]21']} />
          <mesh geometry={nodes['구성_요소#25'].geometry} material={materials['[Color_A05]19']} />
          <mesh geometry={nodes['구성_요소#25001'].geometry} material={materials['[Color_A05]19']} />
          <mesh geometry={nodes.DrawCall55.geometry} material={materials['Coat-1']} />
          <mesh geometry={nodes.DrawCall57.geometry} material={materials['Coat-1']} />
          <mesh geometry={nodes.Mesh_1459.geometry} material={materials['Coat-1']} />
          <mesh geometry={nodes.Mesh_1459_1.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_1457.geometry} material={materials['[Color_A05]8']} />
          <mesh geometry={nodes.Mesh_1457_1.geometry} material={materials['[Color_A05]7']} />
          <mesh geometry={nodes['구성_요소#13'].geometry} material={materials['[Color_A05]6']} />
          <mesh geometry={nodes['구성_요소#13001'].geometry} material={materials['[Color_A05]6']} />
          <mesh geometry={nodes['구성_요소#13002'].geometry} material={materials['[Color_A05]6']} />
          <mesh geometry={nodes['구성_요소#13003'].geometry} material={materials['[Color_A05]6']} />
          <mesh geometry={nodes['구성_요소#13004'].geometry} material={materials['[Color_A05]6']} />
          <mesh geometry={nodes['구성_요소#13005'].geometry} material={materials['[Color_A05]6']} />
          <mesh geometry={nodes['구성_요소#15'].geometry} material={materials['[Color_A09]3']} />
          <mesh geometry={nodes.DrawCall69.geometry} material={materials['[Color_A05]21']} />
          <mesh geometry={nodes.DrawCall71.geometry} material={materials['[Color_A05]21']} />
          <mesh geometry={nodes.Mesh_1343.geometry} material={materials['[Color_A05]21']} />
          <mesh geometry={nodes.Mesh_1343_1.geometry} material={materials['_3_-_Default1']} />
          <mesh geometry={nodes.Mesh_1343_2.geometry} material={materials['_2_-_Default1']} />
          <mesh geometry={nodes.DrawCall75.geometry} material={materials['[Color_A05]21']} />
          <mesh geometry={nodes.Mesh_1345.geometry} material={materials['<Charcoal>1']} />
          <mesh geometry={nodes.Mesh_1345_1.geometry} material={materials['_3_-_Default1']} />
          <mesh geometry={nodes.Mesh_1351.geometry} material={materials['<Charcoal>1']} />
          <mesh geometry={nodes.Mesh_1351_1.geometry} material={materials['_3_-_Default1']} />
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
          <mesh geometry={nodes.Mesh_1399_1.geometry} material={materials.____________1} />
          <mesh geometry={nodes.Mesh_1399_2.geometry} material={materials['<Burnt Umber>2']} />
          <mesh geometry={nodes.Mesh_1399_3.geometry} material={materials['default material']} />
          <mesh geometry={nodes['구성_요소#18'].geometry} material={materials['[Color_A01]3']} />
          <mesh geometry={nodes['구성_요소#19'].geometry} material={materials['[Color_A01]3']} />
          <mesh geometry={nodes['구성_요소#20'].geometry} material={materials['[Color_A05]16']} />
          <mesh geometry={nodes['구성_요소#21'].geometry} material={materials['[Color_A05]16']} />
          <mesh geometry={nodes['구성_요소#22'].geometry} material={materials['[Color_A05]16']} />
          <mesh geometry={nodes['구성_요소#23'].geometry} material={materials['[Color_A05]16']} />
          <mesh geometry={nodes['Component#65'].geometry} material={materials['[Groundcover_Sand_Smooth]1']} />
          <mesh geometry={nodes['Component#66'].geometry} material={materials['[Groundcover_Sand_Smooth]2']} />
          <mesh geometry={nodes['Component#68'].geometry} material={materials.Groundcover_Cedar} />
          <mesh geometry={nodes['Component#65001'].geometry} material={materials['[Groundcover_Sand_Smooth]1']} />
          <mesh geometry={nodes['Component#66001'].geometry} material={materials['[Groundcover_Sand_Smooth]2']} />
          <mesh geometry={nodes['Component#68001'].geometry} material={materials.Groundcover_Cedar} />
          <mesh geometry={nodes['Component#65002'].geometry} material={materials['[Groundcover_Sand_Smooth]1']} />
          <mesh geometry={nodes['Component#66002'].geometry} material={materials['[Groundcover_Sand_Smooth]2']} />
          <mesh geometry={nodes['Component#68002'].geometry} material={materials.Groundcover_Cedar} />
          <mesh geometry={nodes['DE-PX1S-AD-LTE-GRA_Component_02'].geometry} material={materials['DE-PX1S-AD-LTE-GRA_Material_01']} />
          <mesh geometry={nodes['DE-PX1S-AD-LTE-GRA_Component_03'].geometry} material={materials['DE-PX1S-AD-LTE-GRA_Material_04']} />
          <mesh geometry={nodes['DE-PX1S-AD-LTE-GRA_Component_03001'].geometry} material={materials['DE-PX1S-AD-LTE-GRA_Material_04']} />
          <mesh geometry={nodes['DE-PX1S-AD-LTE-GRA_Component_04'].geometry} material={materials['DE-PX1S-AD-LTE-GRA_Material_02']} />
          <mesh geometry={nodes['DE-PX1S-AD-LTE-GRA_Component_05'].geometry} material={materials['DE-PX1S-AD-LTE-GRA_Material_01']} />
          <mesh geometry={nodes['DE-PX1S-AD-LTE-GRA_Component_06'].geometry} material={materials['DE-PX1S-AD-LTE-GRA_Material_04']} />
          <mesh geometry={nodes['DE-PX1S-AD-LTE-GRA_Component_07'].geometry} material={materials['DE-PX1S-AD-LTE-GRA_Material_03']} />
          <mesh geometry={nodes['DE-PX1S-AD-LTE-GRA_Component_08'].geometry} material={materials['DE-PX1S-AD-LTE-GRA_Material_03']} />
          <mesh geometry={nodes['DE-PX1S-AD-LTE-GRA_Component_09'].geometry} material={materials['DE-PX1S-AD-LTE-GRA_Material_03']} />
          <mesh geometry={nodes['DE-PX1S-AD-LTE-GRA_Component_10'].geometry} material={materials['DE-PX1S-AD-LTE-GRA_Material_04']} />
          <mesh geometry={nodes['DE-PX1S-AD-LTE-GRA_Component_10001'].geometry} material={materials['DE-PX1S-AD-LTE-GRA_Material_04']} />
          <mesh geometry={nodes['DE-PX1S-AD-LTE-GRA_Component_11'].geometry} material={materials['DE-PX1S-AD-LTE-GRA_Material_03']} />
          <mesh geometry={nodes.Mesh_1824.geometry} material={materials['DE-PX1S-AD-LTE-GRA_Material_01']} />
          <mesh geometry={nodes.Mesh_1824_1.geometry} material={materials['default material']} />
          <mesh geometry={nodes['DE-PX1S-AD-LTE-GRA_Component_02001'].geometry} material={materials['DE-PX1S-AD-LTE-GRA_Material_01']} />
          <mesh geometry={nodes['DE-PX1S-AD-LTE-GRA_Component_03002'].geometry} material={materials['DE-PX1S-AD-LTE-GRA_Material_04']} />
          <mesh geometry={nodes['DE-PX1S-AD-LTE-GRA_Component_03003'].geometry} material={materials['DE-PX1S-AD-LTE-GRA_Material_04']} />
          <mesh geometry={nodes['DE-PX1S-AD-LTE-GRA_Component_04001'].geometry} material={materials['DE-PX1S-AD-LTE-GRA_Material_02']} />
          <mesh geometry={nodes['DE-PX1S-AD-LTE-GRA_Component_05001'].geometry} material={materials['DE-PX1S-AD-LTE-GRA_Material_01']} />
          <mesh geometry={nodes['DE-PX1S-AD-LTE-GRA_Component_06001'].geometry} material={materials['DE-PX1S-AD-LTE-GRA_Material_04']} />
          <mesh geometry={nodes['DE-PX1S-AD-LTE-GRA_Component_07001'].geometry} material={materials['DE-PX1S-AD-LTE-GRA_Material_03']} />
          <mesh geometry={nodes['DE-PX1S-AD-LTE-GRA_Component_08001'].geometry} material={materials['DE-PX1S-AD-LTE-GRA_Material_03']} />
          <mesh geometry={nodes['DE-PX1S-AD-LTE-GRA_Component_09001'].geometry} material={materials['DE-PX1S-AD-LTE-GRA_Material_03']} />
          <mesh geometry={nodes['DE-PX1S-AD-LTE-GRA_Component_10002'].geometry} material={materials['DE-PX1S-AD-LTE-GRA_Material_04']} />
          <mesh geometry={nodes['DE-PX1S-AD-LTE-GRA_Component_10003'].geometry} material={materials['DE-PX1S-AD-LTE-GRA_Material_04']} />
          <mesh geometry={nodes['DE-PX1S-AD-LTE-GRA_Component_11001'].geometry} material={materials['DE-PX1S-AD-LTE-GRA_Material_03']} />
          <mesh geometry={nodes.Mesh_1837.geometry} material={materials['DE-PX1S-AD-LTE-GRA_Material_01']} />
          <mesh geometry={nodes.Mesh_1837_1.geometry} material={materials['default material']} />
          <mesh geometry={nodes['DE-NET2R-AD-LTE-GRA_Component_09'].geometry} material={materials['DE-NET2R-AD-LTE-GRA_Material_02']} />
          <mesh geometry={nodes['DE-NET2R-AD-LTE-GRA_Component_10'].geometry} material={materials['DE-NET2R-AD-LTE-GRA_Material_04']} />
          <mesh geometry={nodes['DE-NET2R-AD-LTE-GRA_Component_11'].geometry} material={materials['DE-NET2R-AD-LTE-GRA_Material_04']} />
          <mesh geometry={nodes['DE-NET2R-AD-LTE-GRA_Component_12'].geometry} material={materials['DE-NET2R-AD-LTE-GRA_Material_04']} />
          <mesh geometry={nodes['DE-NET2R-AD-LTE-GRA_Component_12001'].geometry} material={materials['DE-NET2R-AD-LTE-GRA_Material_04']} />
          <mesh geometry={nodes.Mesh_1859.geometry} material={materials['DE-NET2R-AD-LTE-GRA_Material_01']} />
          <mesh geometry={nodes.Mesh_1859_1.geometry} material={materials['default material']} />
          <mesh geometry={nodes['DE-NET2R-AD-LTE-GRA_Component_14'].geometry} material={materials['DE-NET2R-AD-LTE-GRA_Material_04']} />
          <mesh geometry={nodes['DE-NET2R-AD-LTE-GRA_Component_16'].geometry} material={materials['DE-NET2R-AD-LTE-GRA_Material_01']} />
          <mesh geometry={nodes['DE-NET2R-AD-LTE-GRA_Component_17'].geometry} material={materials['DE-NET2R-AD-LTE-GRA_Material_01']} />
          <mesh geometry={nodes['DE-NET2R-AD-LTE-GRA_Component_01'].geometry} material={materials['DE-NET2R-AD-LTE-GRA_Material_03']} />
          <mesh geometry={nodes['DE-NET2R-AD-LTE-GRA_Component_02'].geometry} material={materials['DE-NET2R-AD-LTE-GRA_Material_03']} />
          <mesh geometry={nodes['DE-NET2R-AD-LTE-GRA_Component_08'].geometry} material={materials['DE-NET2R-AD-LTE-GRA_Material_03']} />
          <mesh geometry={nodes['DE-NET2R-AD-LTE-GRA_Component_20'].geometry} material={materials['DE-NET2R-AD-LTE-GRA_Material_03']} />
          <mesh geometry={nodes.Mesh_1853_1.geometry} material={materials.madeiralateral_banco_madeira_sdfsdsa0w5a1w8e4w81ew2} />
          <mesh geometry={nodes.Mesh_1853_2.geometry} material={materials.topo_madeira_bancodasd0a51w05ds18ad151a5s} />
          <mesh geometry={nodes['3DGeom~6_Defintion#3'].geometry} material={materials['Material~18']} />
          <mesh geometry={nodes['3DGeom~7_Defintion#3'].geometry} material={materials['Material~15']} />
          <mesh geometry={nodes['3DGeom~8_Defintion#2'].geometry} material={materials['Material~10']} />
          <mesh geometry={nodes['3DGeom~9_Defintion#2'].geometry} material={materials['Material~15']} />
          <mesh geometry={nodes.Mesh_1869_1.geometry} material={materials['[Color A08]1']} />
          <mesh geometry={nodes.Mesh_1869_2.geometry} material={materials['Color A08']} />
          <mesh geometry={nodes.Mesh_1870.geometry} material={materials['Color A07']} />
          <mesh geometry={nodes.Mesh_1871.geometry} material={materials['<auto>11']} />
          <mesh geometry={nodes['Component#65003'].geometry} material={materials['[Groundcover_Sand_Smooth]1']} />
          <mesh geometry={nodes['Component#66003'].geometry} material={materials['[Groundcover_Sand_Smooth]2']} />
          <mesh geometry={nodes['Component#68003'].geometry} material={materials.Groundcover_Cedar} />
          <mesh geometry={nodes['Component#65004'].geometry} material={materials['[Groundcover_Sand_Smooth]1']} />
          <mesh geometry={nodes['Component#66004'].geometry} material={materials['[Groundcover_Sand_Smooth]2']} />
          <mesh geometry={nodes['Component#68004'].geometry} material={materials.Groundcover_Cedar} />
          <mesh geometry={nodes['Component#65005'].geometry} material={materials['[Groundcover_Sand_Smooth]1']} />
          <mesh geometry={nodes['Component#66005'].geometry} material={materials['[Groundcover_Sand_Smooth]2']} />
          <mesh geometry={nodes['Component#68005'].geometry} material={materials.Groundcover_Cedar} />
          <mesh geometry={nodes['Component#65006'].geometry} material={materials['[Groundcover_Sand_Smooth]1']} />
          <mesh geometry={nodes['Component#66006'].geometry} material={materials['[Groundcover_Sand_Smooth]2']} />
          <mesh geometry={nodes['Component#68006'].geometry} material={materials.Groundcover_Cedar} />
          <mesh geometry={nodes['Component#65007'].geometry} material={materials['[Groundcover_Sand_Smooth]1']} />
          <mesh geometry={nodes['Component#66007'].geometry} material={materials['[Groundcover_Sand_Smooth]2']} />
          <mesh geometry={nodes['Component#68007'].geometry} material={materials.Groundcover_Cedar} />
          <mesh geometry={nodes['Component#65008'].geometry} material={materials['[Groundcover_Sand_Smooth]1']} />
          <mesh geometry={nodes['Component#66008'].geometry} material={materials['[Groundcover_Sand_Smooth]2']} />
          <mesh geometry={nodes['Component#68008'].geometry} material={materials.Groundcover_Cedar} />
          <mesh geometry={nodes.Mesh_1890.geometry} material={materials.CONCRETE} />
          <mesh geometry={nodes.Mesh_1891.geometry} material={materials.CONCRETE} />
          <mesh geometry={nodes.Mesh_1892.geometry} material={materials.CONCRETE} />
          <mesh geometry={nodes.Mesh_1893.geometry} material={materials.CONCRETE} />
          <mesh geometry={nodes.Mesh_1894.geometry} material={materials.CONCRETE} />
          <mesh geometry={nodes.Mesh_1895.geometry} material={materials.CONCRETE} />
          <mesh geometry={nodes.Mesh_1896.geometry} material={materials.CONCRETE} />
          <mesh geometry={nodes.Mesh_1897.geometry} material={materials.CONCRETE} />
          <mesh geometry={nodes.Mesh_1898.geometry} material={materials.CONCRETE} />
          <mesh geometry={nodes.Mesh_1899.geometry} material={materials.CONCRETE} />
          <mesh geometry={nodes.Mesh_1900.geometry} material={materials.CONCRETE} />
          <mesh geometry={nodes['Group#18'].geometry} material={materials['0013_LightCoral']} />
          <mesh geometry={nodes['Group#18001'].geometry} material={materials['0013_LightCoral']} />
          <mesh geometry={nodes['Group#18002'].geometry} material={materials['0013_LightCoral']} />
          <mesh geometry={nodes['Group#18003'].geometry} material={materials['0013_LightCoral']} />
          <mesh geometry={nodes['Group#18004'].geometry} material={materials['0013_LightCoral']} />
          <mesh geometry={nodes['Group#18005'].geometry} material={materials['0013_LightCoral']} />
          <mesh geometry={nodes['Group#18006'].geometry} material={materials['0013_LightCoral']} />
          <mesh geometry={nodes['Group#18007'].geometry} material={materials['0013_LightCoral']} />
          <mesh geometry={nodes['Group#18008'].geometry} material={materials['0013_LightCoral']} />
          <mesh geometry={nodes['Group#18009'].geometry} material={materials['0013_LightCoral']} />
          <mesh geometry={nodes['Group#18010'].geometry} material={materials['0013_LightCoral']} />
          <mesh geometry={nodes['Group#27'].geometry} material={materials['0013_LightCoral']} />
          <mesh geometry={nodes['Group#27001'].geometry} material={materials['0013_LightCoral']} />
          <mesh geometry={nodes['Group#27002'].geometry} material={materials['0013_LightCoral']} />
          <mesh geometry={nodes['Group#27003'].geometry} material={materials['0013_LightCoral']} />
          <mesh geometry={nodes['Group#27004'].geometry} material={materials['0013_LightCoral']} />
          <mesh geometry={nodes['Group#27005'].geometry} material={materials['0013_LightCoral']} />
          <mesh geometry={nodes['Group#27006'].geometry} material={materials['0013_LightCoral']} />
          <mesh geometry={nodes['Group#28'].geometry} material={materials['0013_LightCoral']} />
          <mesh geometry={nodes['Group#69'].geometry} material={materials['0013_LightCoral']} />
          <mesh geometry={nodes.Mesh_3.geometry} material={materials['Color A07']} />
          <mesh geometry={nodes.Mesh_4_1.geometry} material={materials['[Color A08]1']} />
          <mesh geometry={nodes.Mesh_4_2.geometry} material={materials['Color A08']} />
          <mesh geometry={nodes.Mesh_5.geometry} material={materials['Color A07']} />
          <mesh geometry={nodes.Mesh_6.geometry} material={materials['<auto>11']} />
          <mesh geometry={nodes.Mesh_7.geometry} material={materials['<auto>11']} />
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
          <mesh geometry={nodes['Component#101'].geometry} material={materials['[Color_008]4']}>
            <mesh geometry={nodes['Component#126002'].geometry} material={materials['[Color_008]4']} />
          </mesh>
          <mesh geometry={nodes['Component#101001'].geometry} material={materials['[Color_008]4']}>
            <mesh geometry={nodes['Component#126003'].geometry} material={materials['[Color_008]4']} />
          </mesh>
          <mesh geometry={nodes['Component#103'].geometry} material={materials['[Color_008]4']} />
          <mesh geometry={nodes['Component#103001'].geometry} material={materials['[Color_008]4']} />
          <mesh geometry={nodes['Component#85'].geometry} material={materials['[Wood_ Floor]2']} />
          <mesh geometry={nodes['Component#86'].geometry} material={materials['[Wood_ Floor]2']} />
          <mesh geometry={nodes['Component#86001'].geometry} material={materials['[Wood_ Floor]2']} />
          <mesh geometry={nodes['Component#87'].geometry} material={materials['[Color_008]4']} />
          <mesh geometry={nodes['Component#87001'].geometry} material={materials['[Color_008]4']} />
          <mesh geometry={nodes['Component#90'].geometry} material={materials['[Wood_ Floor]2']} />
          <mesh geometry={nodes['Component#90001'].geometry} material={materials['[Wood_ Floor]2']} />
          <mesh geometry={nodes['Component#97'].geometry} material={materials['[Wood_ Floor]2']} />
          <mesh geometry={nodes['Component#97001'].geometry} material={materials['[Wood_ Floor]2']} />
          <mesh geometry={nodes['Component#99'].geometry} material={materials['[Color_008]4']} />
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
          <mesh geometry={nodes['Component#101002'].geometry} material={materials['[Color_008]4']}>
            <mesh geometry={nodes['Component#126006'].geometry} material={materials['[Color_008]4']} />
          </mesh>
          <mesh geometry={nodes['Component#101003'].geometry} material={materials['[Color_008]4']}>
            <mesh geometry={nodes['Component#126007'].geometry} material={materials['[Color_008]4']} />
          </mesh>
          <mesh geometry={nodes['Component#103002'].geometry} material={materials['[Color_008]4']} />
          <mesh geometry={nodes['Component#103003'].geometry} material={materials['[Color_008]4']} />
          <mesh geometry={nodes['Component#85002'].geometry} material={materials['[Wood_ Floor]2']} />
          <mesh geometry={nodes['Component#86002'].geometry} material={materials['[Wood_ Floor]2']} />
          <mesh geometry={nodes['Component#86003'].geometry} material={materials['[Wood_ Floor]2']} />
          <mesh geometry={nodes['Component#87002'].geometry} material={materials['[Color_008]4']} />
          <mesh geometry={nodes['Component#87003'].geometry} material={materials['[Color_008]4']} />
          <mesh geometry={nodes['Component#90002'].geometry} material={materials['[Wood_ Floor]2']} />
          <mesh geometry={nodes['Component#90003'].geometry} material={materials['[Wood_ Floor]2']} />
          <mesh geometry={nodes['Component#97002'].geometry} material={materials['[Wood_ Floor]2']} />
          <mesh geometry={nodes['Component#97003'].geometry} material={materials['[Wood_ Floor]2']} />
          <mesh geometry={nodes['Component#99001'].geometry} material={materials['[Color_008]4']} />
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
          <mesh geometry={nodes['Component#101004'].geometry} material={materials['[Color_008]4']}>
            <mesh geometry={nodes['Component#126010'].geometry} material={materials['[Color_008]4']} />
          </mesh>
          <mesh geometry={nodes['Component#101005'].geometry} material={materials['[Color_008]4']}>
            <mesh geometry={nodes['Component#126011'].geometry} material={materials['[Color_008]4']} />
          </mesh>
          <mesh geometry={nodes['Component#103004'].geometry} material={materials['[Color_008]4']} />
          <mesh geometry={nodes['Component#103005'].geometry} material={materials['[Color_008]4']} />
          <mesh geometry={nodes['Component#85004'].geometry} material={materials['[Wood_ Floor]2']} />
          <mesh geometry={nodes['Component#86004'].geometry} material={materials['[Wood_ Floor]2']} />
          <mesh geometry={nodes['Component#86005'].geometry} material={materials['[Wood_ Floor]2']} />
          <mesh geometry={nodes['Component#87004'].geometry} material={materials['[Color_008]4']} />
          <mesh geometry={nodes['Component#87005'].geometry} material={materials['[Color_008]4']} />
          <mesh geometry={nodes['Component#90004'].geometry} material={materials['[Wood_ Floor]2']} />
          <mesh geometry={nodes['Component#90005'].geometry} material={materials['[Wood_ Floor]2']} />
          <mesh geometry={nodes['Component#97004'].geometry} material={materials['[Wood_ Floor]2']} />
          <mesh geometry={nodes['Component#97005'].geometry} material={materials['[Wood_ Floor]2']} />
          <mesh geometry={nodes['Component#99002'].geometry} material={materials['[Color_008]4']} />
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
          <mesh geometry={nodes['Component#101006'].geometry} material={materials['[Color_008]4']}>
            <mesh geometry={nodes['Component#126014'].geometry} material={materials['[Color_008]4']} />
          </mesh>
          <mesh geometry={nodes['Component#101007'].geometry} material={materials['[Color_008]4']}>
            <mesh geometry={nodes['Component#126015'].geometry} material={materials['[Color_008]4']} />
          </mesh>
          <mesh geometry={nodes['Component#103006'].geometry} material={materials['[Color_008]4']} />
          <mesh geometry={nodes['Component#103007'].geometry} material={materials['[Color_008]4']} />
          <mesh geometry={nodes['Component#85006'].geometry} material={materials['[Wood_ Floor]2']} />
          <mesh geometry={nodes['Component#86006'].geometry} material={materials['[Wood_ Floor]2']} />
          <mesh geometry={nodes['Component#86007'].geometry} material={materials['[Wood_ Floor]2']} />
          <mesh geometry={nodes['Component#87006'].geometry} material={materials['[Color_008]4']} />
          <mesh geometry={nodes['Component#87007'].geometry} material={materials['[Color_008]4']} />
          <mesh geometry={nodes['Component#90006'].geometry} material={materials['[Wood_ Floor]2']} />
          <mesh geometry={nodes['Component#90007'].geometry} material={materials['[Wood_ Floor]2']} />
          <mesh geometry={nodes['Component#97006'].geometry} material={materials['[Wood_ Floor]2']} />
          <mesh geometry={nodes['Component#97007'].geometry} material={materials['[Wood_ Floor]2']} />
          <mesh geometry={nodes['Component#99003'].geometry} material={materials['[Color_008]4']} />
          <mesh geometry={nodes['Component#93'].geometry} material={materials.vidro_vaso_glass_w0sdfsdf0000000w5550000s555w5w5ww} />
          <mesh geometry={nodes.Mesh_1819.geometry} material={materials.caule_planta_fdsdfsdwssssssssssssssssssssssssssssssssssssssssss} />
          <mesh geometry={nodes.Mesh_1819_1.geometry} material={materials.folha_planta_hd_fdsfad0fas65df0a16s50r1e2a01s2df10asd1af5sd4f4w} />
          <mesh geometry={nodes.Mesh_1820.geometry} material={materials.caule_planta_fdsdfsdwssssssssssssssssssssssssssssssssssssssssss} />
          <mesh geometry={nodes.Mesh_1820_1.geometry} material={materials.folha_planta_hd_fdsfad0fas65df0a16s50r1e2a01s2df10asd1af5sd4f4w} />
          <mesh geometry={nodes.Mesh_1821.geometry} material={materials.caule_planta_fdsdfsdwssssssssssssssssssssssssssssssssssssssssss} />
          <mesh geometry={nodes.Mesh_1821_1.geometry} material={materials.folha_planta_hd_fdsfad0fas65df0a16s50r1e2a01s2df10asd1af5sd4f4w} />
          <mesh geometry={nodes.Mesh_1822.geometry} material={materials.caule_planta_fdsdfsdwssssssssssssssssssssssssssssssssssssssssss} />
          <mesh geometry={nodes.Mesh_1822_1.geometry} material={materials.folha_planta_hd_fdsfad0fas65df0a16s50r1e2a01s2df10asd1af5sd4f4w} />
          <mesh geometry={nodes.Mesh_1644_1.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_1644_2.geometry} material={materials.Material126} />
          <mesh geometry={nodes.Mesh_1645.geometry} material={materials['[0136_Charcoal]2']} />
          <mesh geometry={nodes.Mesh_1646.geometry} material={materials['[0136_Charcoal]2']} />
          <mesh geometry={nodes.Mesh_1655.geometry} material={materials['[0136_Charcoal]1']} />
          <mesh geometry={nodes['组#178'].geometry} material={materials['[0136_Charcoal]2']}>
            <mesh geometry={nodes.Mesh_1647.geometry} material={materials['[0136_Charcoal]2']} />
          </mesh>
          <mesh geometry={nodes['组#178001'].geometry} material={materials['[0136_Charcoal]2']}>
            <mesh geometry={nodes.Mesh_1649.geometry} material={materials['[0136_Charcoal]2']} />
          </mesh>
          <mesh geometry={nodes['组#178002'].geometry} material={materials['[0136_Charcoal]2']}>
            <mesh geometry={nodes.Mesh_1651.geometry} material={materials['[0136_Charcoal]2']} />
          </mesh>
          <mesh geometry={nodes['组#178003'].geometry} material={materials['[0136_Charcoal]2']}>
            <mesh geometry={nodes.Mesh_1653.geometry} material={materials['[0136_Charcoal]2']} />
          </mesh>
          <mesh geometry={nodes['Group#94'].geometry} material={materials['0013_LightCoral']} />
          <mesh geometry={nodes.Mesh_0.geometry} material={materials['<auto>11']} />
          <mesh geometry={nodes.Mesh_1.geometry} material={materials['<auto>11']} />
          <mesh geometry={nodes.Mesh_1463.geometry} material={materials['[Color_A06]3']} />
          <mesh geometry={nodes.Mesh_1473.geometry} material={materials['[Color_A06]3']} />
          <mesh geometry={nodes.Mesh_1481_1.geometry} material={materials['<Charcoal>']} />
          <mesh geometry={nodes.Mesh_1481_2.geometry} material={materials.Color_009} />
          <mesh geometry={nodes.Mesh_1481_3.geometry} material={materials.Color_B01} />
          <mesh geometry={nodes.Mesh_1481_4.geometry} material={materials.Color_A06} />
          <mesh geometry={nodes.Mesh_1481_5.geometry} material={materials['[Color_008]3']} />
          <mesh geometry={nodes.Mesh_1481_6.geometry} material={materials['<DimGray>']} />
          <mesh geometry={nodes.Mesh_1481_7.geometry} material={materials['<Burnt Umber>1']} />
          <mesh geometry={nodes.Mesh_1481_8.geometry} material={materials.Color_D01} />
          <mesh geometry={nodes.Mesh_1481_9.geometry} material={materials.Translucent_Glass_Gray} />
          <mesh geometry={nodes.Mesh_1474_1.geometry} material={materials.chrome1} />
          <mesh geometry={nodes.Mesh_1474_2.geometry} material={materials.silver1} />
          <mesh geometry={nodes.Mesh_1475.geometry} material={materials['<Charcoal>']} />
          <mesh geometry={nodes.Mesh_1476.geometry} material={materials['<Charcoal>']} />
          <mesh geometry={nodes.Mesh_1477_1.geometry} material={materials['<DimGray>']} />
          <mesh geometry={nodes.Mesh_1477_2.geometry} material={materials['[Color_008]3']} />
          <mesh geometry={nodes.Mesh_1478.geometry} material={materials.chrome1} />
          <mesh geometry={nodes.Mesh_1479_1.geometry} material={materials.silver1} />
          <mesh geometry={nodes.Mesh_1479_2.geometry} material={materials.chrome1} />
          <mesh geometry={nodes.Mesh_1480.geometry} material={materials['<Charcoal>']} />
          <mesh geometry={nodes.Mesh_1868.geometry} material={materials['[Color A04]3']}>
            <mesh geometry={nodes.Mesh_1867.geometry} material={materials['default material']} />
          </mesh>
          <mesh geometry={nodes.Mesh_2.geometry} material={materials['<auto>11']} />
          <mesh geometry={nodes.Mesh_257_1.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
          <mesh geometry={nodes.Mesh_257_2.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
          <mesh geometry={nodes.Mesh_257_3.geometry} material={materials['[Color_008]8']} />
          <mesh geometry={nodes.Mesh_257_4.geometry} material={materials['LAMINATED FLOORING']} />
          <mesh geometry={nodes.Mesh_257_5.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_257_6.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_257_7.geometry} material={materials['[Color A05]1']} />
          <mesh geometry={nodes.Mesh_257_8.geometry} material={materials['Color M06']} />
          <mesh geometry={nodes.Mesh_257_9.geometry} material={materials['Color M00']} />
          <mesh geometry={nodes.Mesh_257_10.geometry} material={materials['Color M04']} />
          <mesh geometry={nodes.Mesh_257_11.geometry} material={materials['[Color A04]3']} />
          <mesh geometry={nodes['Group#259'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_136.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['sdfsdfsdf6#11'].geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes['sdfsdfsdf6#11001'].geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes.Mesh_132.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_132_1.geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes.Mesh_138.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_138_1.geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes['Group#83'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Group#259001'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_143.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['sdfsdfsdf6#11002'].geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes['sdfsdfsdf6#11003'].geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes.Mesh_139.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_139_1.geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes.Mesh_145.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_145_1.geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes['Group#83001'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Group#34'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['sdfsdfsdf6#3'].geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes['Group#30'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_11.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_11_1.geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes['Group#37'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_20.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_20_1.geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes['Group#37001'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_194.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_194_1.geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes['Group#80'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['sdfsdfsdf6#8'].geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes['Group#66'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_146.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_146_1.geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes['Group#80001'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['sdfsdfsdf6#8001'].geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes['Group#66001'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_150.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_150_1.geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes['Group#55'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_8.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_8_1.geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes.Mesh_9.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_9_1.geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes['3DGeom~10_Defintion#2'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['1<1>_Defintion#1'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['2<1>_Defintion#1'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~4_Defintion#2003'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~4_Defintion#2'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~4_Defintion#2001'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~4_Defintion#2002'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~1_Defintion#2'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~2_Defintion#2'].geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_126.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_126_1.geometry} material={materials.LED_3200k} />
          <mesh geometry={nodes['Group#561008'].geometry} material={materials['CROMO PERFIL METALICO1']} />
          <mesh geometry={nodes['Group#561009'].geometry} material={materials['CROMO PERFIL METALICO1']} />
          <mesh geometry={nodes['Component#139008'].geometry} material={materials.PRZYCISK} />
          <mesh geometry={nodes['Component#139009'].geometry} material={materials.PRZYCISK} />
          <mesh geometry={nodes['Group#161'].geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes['Group#161001'].geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes['Group#162'].geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes['Group#162001'].geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes.Mesh_197.geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes.Mesh_196_1.geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes.Mesh_196_2.geometry} material={materials.wood1} />
          <mesh geometry={nodes['Group#561'].geometry} material={materials['CROMO PERFIL METALICO1']} />
          <mesh geometry={nodes['Group#561001'].geometry} material={materials['CROMO PERFIL METALICO1']} />
          <mesh geometry={nodes['Component#139'].geometry} material={materials.PRZYCISK} />
          <mesh geometry={nodes['Component#139001'].geometry} material={materials.PRZYCISK} />
          <mesh geometry={nodes['Group#100'].geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes['Group#100001'].geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes['Group#97'].geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes['Group#97001'].geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes.Mesh_155.geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes.Mesh_154_1.geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes.Mesh_154_2.geometry} material={materials.wood1} />
          <mesh geometry={nodes['Group#561002'].geometry} material={materials['CROMO PERFIL METALICO1']} />
          <mesh geometry={nodes['Group#561003'].geometry} material={materials['CROMO PERFIL METALICO1']} />
          <mesh geometry={nodes['Component#139002'].geometry} material={materials.PRZYCISK} />
          <mesh geometry={nodes['Component#139003'].geometry} material={materials.PRZYCISK} />
          <mesh geometry={nodes['Group#100002'].geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes['Group#100003'].geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes['Group#97002'].geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes['Group#97003'].geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes.Mesh_165.geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes.Mesh_164_1.geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes.Mesh_164_2.geometry} material={materials.wood1} />
          <mesh geometry={nodes['Group#561004'].geometry} material={materials['CROMO PERFIL METALICO1']} />
          <mesh geometry={nodes['Group#561005'].geometry} material={materials['CROMO PERFIL METALICO1']} />
          <mesh geometry={nodes['Component#139004'].geometry} material={materials.PRZYCISK} />
          <mesh geometry={nodes['Component#139005'].geometry} material={materials.PRZYCISK} />
          <mesh geometry={nodes['Group#100004'].geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes['Group#100005'].geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes['Group#97004'].geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes['Group#97005'].geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes.Mesh_175.geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes.Mesh_174_1.geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes.Mesh_174_2.geometry} material={materials.wood1} />
          <mesh geometry={nodes['Group#561006'].geometry} material={materials['CROMO PERFIL METALICO1']} />
          <mesh geometry={nodes['Group#561007'].geometry} material={materials['CROMO PERFIL METALICO1']} />
          <mesh geometry={nodes['Component#139006'].geometry} material={materials.PRZYCISK} />
          <mesh geometry={nodes['Component#139007'].geometry} material={materials.PRZYCISK} />
          <mesh geometry={nodes['Group#100006'].geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes['Group#100007'].geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes['Group#97006'].geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes['Group#97007'].geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes.Mesh_185.geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes.Mesh_184_1.geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes.Mesh_184_2.geometry} material={materials.wood1} />
          <mesh geometry={nodes.Mesh_87.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_87_1.geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes.Mesh_88.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_88_1.geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes['Group#61'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Group#60'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_86.geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes.Mesh_90.geometry} material={materials['Color M08']} />
          <mesh geometry={nodes.Mesh_91.geometry} material={materials['Color M08']} />
          <mesh geometry={nodes.Mesh_92.geometry} material={materials['Color M08']} />
          <mesh geometry={nodes.Mesh_93.geometry} material={materials['Color M08']} />
          <mesh geometry={nodes.Mesh_100_1.geometry} material={materials.Material12} />
          <mesh geometry={nodes.Mesh_100_2.geometry} material={materials['<Charcoal>1']} />
          <mesh geometry={nodes.Mesh_100_3.geometry} material={materials['[Color B03]2']} />
          <mesh geometry={nodes.Mesh_101_1.geometry} material={materials.Material12} />
          <mesh geometry={nodes.Mesh_101_2.geometry} material={materials['<Charcoal>1']} />
          <mesh geometry={nodes.Mesh_101_3.geometry} material={materials['[Color B03]2']} />
          <mesh geometry={nodes.Mesh_102_1.geometry} material={materials.Material12} />
          <mesh geometry={nodes.Mesh_102_2.geometry} material={materials['<Charcoal>1']} />
          <mesh geometry={nodes.Mesh_102_3.geometry} material={materials['[Color B03]2']} />
          <mesh geometry={nodes.Mesh_103_1.geometry} material={materials.Material12} />
          <mesh geometry={nodes.Mesh_103_2.geometry} material={materials['<Charcoal>1']} />
          <mesh geometry={nodes.Mesh_103_3.geometry} material={materials['[Color B03]2']} />
          <mesh geometry={nodes.Mesh_104_1.geometry} material={materials.Material12} />
          <mesh geometry={nodes.Mesh_104_2.geometry} material={materials['<Charcoal>1']} />
          <mesh geometry={nodes.Mesh_104_3.geometry} material={materials['[Color B03]2']} />
          <mesh geometry={nodes.Mesh_105_1.geometry} material={materials.Material12} />
          <mesh geometry={nodes.Mesh_105_2.geometry} material={materials['<Charcoal>1']} />
          <mesh geometry={nodes.Mesh_105_3.geometry} material={materials['[Color B03]2']} />
          <mesh geometry={nodes.Mesh_106.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_107_1.geometry} material={materials.Material12} />
          <mesh geometry={nodes.Mesh_107_2.geometry} material={materials['<Charcoal>1']} />
          <mesh geometry={nodes.Mesh_107_3.geometry} material={materials['[Color B03]2']} />
          <mesh geometry={nodes.Mesh_108_1.geometry} material={materials.Material12} />
          <mesh geometry={nodes.Mesh_108_2.geometry} material={materials['<Charcoal>1']} />
          <mesh geometry={nodes.Mesh_108_3.geometry} material={materials['[Color B03]2']} />
          <mesh geometry={nodes.Mesh_96_1.geometry} material={materials.Material12} />
          <mesh geometry={nodes.Mesh_96_2.geometry} material={materials['<Charcoal>1']} />
          <mesh geometry={nodes.Mesh_96_3.geometry} material={materials['[Color B03]2']} />
          <mesh geometry={nodes.Mesh_97_1.geometry} material={materials.Material12} />
          <mesh geometry={nodes.Mesh_97_2.geometry} material={materials['<Charcoal>1']} />
          <mesh geometry={nodes.Mesh_97_3.geometry} material={materials['[Color B03]2']} />
          <mesh geometry={nodes.Mesh_98_1.geometry} material={materials.Material12} />
          <mesh geometry={nodes.Mesh_98_2.geometry} material={materials['<Charcoal>1']} />
          <mesh geometry={nodes.Mesh_98_3.geometry} material={materials['[Color B03]2']} />
          <mesh geometry={nodes.Mesh_99_1.geometry} material={materials.Material12} />
          <mesh geometry={nodes.Mesh_99_2.geometry} material={materials['<Charcoal>1']} />
          <mesh geometry={nodes.Mesh_99_3.geometry} material={materials['[Color B03]2']} />
          <mesh geometry={nodes.Mesh_109_1.geometry} material={materials.Material12} />
          <mesh geometry={nodes.Mesh_109_2.geometry} material={materials['<Charcoal>1']} />
          <mesh geometry={nodes.Mesh_109_3.geometry} material={materials['[Color B03]2']} />
          <mesh geometry={nodes.Mesh_110_1.geometry} material={materials.Material12} />
          <mesh geometry={nodes.Mesh_110_2.geometry} material={materials['<Charcoal>1']} />
          <mesh geometry={nodes.Mesh_110_3.geometry} material={materials['[Color B03]2']} />
          <mesh geometry={nodes.Mesh_111_1.geometry} material={materials.Material12} />
          <mesh geometry={nodes.Mesh_111_2.geometry} material={materials['<Charcoal>1']} />
          <mesh geometry={nodes.Mesh_111_3.geometry} material={materials['[Color B03]2']} />
          <mesh geometry={nodes.Mesh_112_1.geometry} material={materials.Material12} />
          <mesh geometry={nodes.Mesh_112_2.geometry} material={materials['<Charcoal>1']} />
          <mesh geometry={nodes.Mesh_112_3.geometry} material={materials['[Color B03]2']} />
          <mesh geometry={nodes.Mesh_113_1.geometry} material={materials.Material12} />
          <mesh geometry={nodes.Mesh_113_2.geometry} material={materials['<Charcoal>1']} />
          <mesh geometry={nodes.Mesh_113_3.geometry} material={materials['[Color B03]2']} />
          <mesh geometry={nodes.Mesh_114_1.geometry} material={materials.Material12} />
          <mesh geometry={nodes.Mesh_114_2.geometry} material={materials['<Charcoal>1']} />
          <mesh geometry={nodes.Mesh_114_3.geometry} material={materials['[Color B03]2']} />
          <mesh geometry={nodes.Mesh_115_1.geometry} material={materials.Material12} />
          <mesh geometry={nodes.Mesh_115_2.geometry} material={materials['<Charcoal>1']} />
          <mesh geometry={nodes.Mesh_115_3.geometry} material={materials['[Color B03]2']} />
          <mesh geometry={nodes.Mesh_116_1.geometry} material={materials.Material12} />
          <mesh geometry={nodes.Mesh_116_2.geometry} material={materials['<Charcoal>1']} />
          <mesh geometry={nodes.Mesh_116_3.geometry} material={materials['[Color B03]2']} />
          <mesh geometry={nodes.Mesh_117_1.geometry} material={materials.Material12} />
          <mesh geometry={nodes.Mesh_117_2.geometry} material={materials['<Charcoal>1']} />
          <mesh geometry={nodes.Mesh_117_3.geometry} material={materials['[Color B03]2']} />
          <mesh geometry={nodes.Mesh_118_1.geometry} material={materials.Material12} />
          <mesh geometry={nodes.Mesh_118_2.geometry} material={materials['<Charcoal>1']} />
          <mesh geometry={nodes.Mesh_118_3.geometry} material={materials['[Color B03]2']} />
          <mesh geometry={nodes.Mesh_119.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_120_1.geometry} material={materials.Material12} />
          <mesh geometry={nodes.Mesh_120_2.geometry} material={materials['<Charcoal>1']} />
          <mesh geometry={nodes.Mesh_120_3.geometry} material={materials['[Color B03]2']} />
          <mesh geometry={nodes.Mesh_121_1.geometry} material={materials.Material12} />
          <mesh geometry={nodes.Mesh_121_2.geometry} material={materials['<Charcoal>1']} />
          <mesh geometry={nodes.Mesh_121_3.geometry} material={materials['[Color B03]2']} />
          <mesh geometry={nodes['Group#36'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['sdfsdfsdf6#4'].geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes['sdfsdfsdf6#4001'].geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes['sdfsdfsdf6#4002'].geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes['sdfsdfsdf6#4003'].geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes['Component#71'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes.Mesh_223.geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#72'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes.Mesh_225.geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#70'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#70001'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#70002'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#70003'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#70004'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#70005'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#70006'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#70007'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#70008'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#70009'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#70010'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#73'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#73001'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#73002'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#73003'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#73004'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#73005'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#73006'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#73007'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#73008'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#73009'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#73010'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#73011'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#73012'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#73013'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes.Mesh_206.geometry} material={materials['Color M08']} />
          <mesh geometry={nodes.Mesh_207.geometry} material={materials['Color M08']} />
          <mesh geometry={nodes.Mesh_208.geometry} material={materials['Color M08']} />
          <mesh geometry={nodes.Mesh_209.geometry} material={materials['Color M08']} />
          <mesh geometry={nodes.Mesh_210.geometry} material={materials['Color M08']} />
          <mesh geometry={nodes.Mesh_214.geometry} material={materials['Translucent Glass Gray']} />
          <mesh geometry={nodes['Group#79'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_24.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_24_1.geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes.Mesh_25.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_25_1.geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes['Group#76'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_23.geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes['Component#172'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#172001'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#174'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#174001'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#175'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#175001'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#175002'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#175003'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#175004'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#175005'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#175006'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#175007'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#175008'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#175009'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes['Component#175010'].geometry} material={materials['Color M08']} />
          <mesh geometry={nodes.Mesh_256.geometry} material={materials['Translucent Glass Gray']} />
          <mesh geometry={nodes['Component#16'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16001'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16002'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16003'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16004'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16005'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16006'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16007'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16008'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16009'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16010'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16011'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16012'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16013'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16014'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16015'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16016'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16017'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16018'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16019'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16020'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16021'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16022'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16023'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16024'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16025'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16026'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16027'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16028'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16029'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16030'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16031'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16032'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16033'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16034'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16035'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16036'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16037'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16038'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16039'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16040'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16041'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16042'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16043'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16044'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16045'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16046'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16047'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16048'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16049'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16050'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes['Component#16051'].geometry} material={materials['[Color A05]4']} />
          <mesh geometry={nodes.Mesh_80.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['sdfsdfsdf6#5'].geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes.Mesh_81.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['sdfsdfsdf6#6'].geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes['Group#63'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['sdfsdfsdf6#7'].geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes.Mesh_95.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['sdfsdfsdf6#10'].geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes.Mesh_877_1.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
          <mesh geometry={nodes.Mesh_877_2.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
          <mesh geometry={nodes.Mesh_877_3.geometry} material={materials['[Color A08]5']} />
          <mesh geometry={nodes.Mesh_877_4.geometry} material={materials['[Color A05]2']} />
          <mesh geometry={nodes.Mesh_877_5.geometry} material={materials['0005_LightPink']} />
          <mesh geometry={nodes.Mesh_877_6.geometry} material={materials['[Color_A06]3']} />
          <mesh geometry={nodes.Mesh_877_7.geometry} material={materials['Color M04']} />
          <mesh geometry={nodes.Mesh_877_8.geometry} material={materials['Color H06']} />
          <mesh geometry={nodes.Mesh_877_9.geometry} material={materials['tile']} material-color={props.customColors.tile}/>
          <mesh geometry={nodes.Mesh_877_10.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_877_11.geometry} material={materials['[Color A06]1']} />
          <mesh geometry={nodes.Mesh_877_12.geometry} material={materials['Color M06']} />
          <mesh geometry={nodes.Mesh_877_13.geometry} material={materials['[Color_008]8']} />
          <mesh geometry={nodes.Mesh_877_14.geometry} material={materials['Color A02']} />
          <mesh geometry={nodes.Mesh_877_15.geometry} material={materials['[Color A03]2']} />
          <mesh geometry={nodes['3DGeom~2_Defintion#1'].geometry} material={materials['Material~4']} />
          <mesh geometry={nodes['3DGeom~3_Defintion#1'].geometry} material={materials['Material~1']} />
          <mesh geometry={nodes['3DGeom~4_Defintion#1'].geometry} material={materials['Material~6']} />
          <mesh geometry={nodes['3DGeom~34_Defintion'].geometry} material={materials['Material~72']} />
          <mesh geometry={nodes['3DGeom~35_Defintion'].geometry} material={materials['Material~86']} />
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
          <mesh geometry={nodes['3DGeom~63_Defintion#1'].geometry} material={materials['Material~86']} />
          <mesh geometry={nodes['3DGeom~54_Defintion#1'].geometry} material={materials['Material~72']} />
          <mesh geometry={nodes['3DGeom~55_Defintion#1'].geometry} material={materials['Material~86']} />
          <mesh geometry={nodes['3DGeom~22_Defintion'].geometry} material={materials['Material~72']} />
          <mesh geometry={nodes['3DGeom~23_Defintion'].geometry} material={materials['Material~86']} />
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
          <mesh geometry={nodes['3DGeom~12_Defintion#2'].geometry} material={materials['Material~72']} />
          <mesh geometry={nodes['3DGeom~13_Defintion'].geometry} material={materials['Material~86']} />
          <mesh geometry={nodes['3DGeom~16_Defintion'].geometry} material={materials['Material~72']} />
          <mesh geometry={nodes['3DGeom~17_Defintion'].geometry} material={materials['Material~86']} />
          <mesh geometry={nodes['3DGeom~10_Defintion#1'].geometry} material={materials['Material~72']} />
          <mesh geometry={nodes['3DGeom~11_Defintion#2'].geometry} material={materials['Material~86']} />
          <mesh geometry={nodes['3DGeom~100_Defintion'].geometry} material={materials['Material~72']} />
          <mesh geometry={nodes['3DGeom~101_Defintion'].geometry} material={materials['Material~86']} />
          <mesh geometry={nodes['3DGeom~46_Defintion#2'].geometry} material={materials['Material~72']} />
          <mesh geometry={nodes['3DGeom~47_Defintion#2'].geometry} material={materials['Material~86']} />
          <mesh geometry={nodes['3DGeom~26_Defintion'].geometry} material={materials['Material~72']} />
          <mesh geometry={nodes['3DGeom~27_Defintion'].geometry} material={materials['Material~86']} />
          <mesh geometry={nodes['3DGeom~24_Defintion'].geometry} material={materials['Material~72']} />
          <mesh geometry={nodes['3DGeom~25_Defintion'].geometry} material={materials['Material~86']} />
          <mesh geometry={nodes['3DGeom~8_Defintion'].geometry} material={materials['Material~72']} />
          <mesh geometry={nodes['3DGeom~9_Defintion#1'].geometry} material={materials['Material~86']} />
          <mesh geometry={nodes['3DGeom~48_Defintion#2'].geometry} material={materials['Material~72']} />
          <mesh geometry={nodes['3DGeom~49_Defintion#2'].geometry} material={materials['Material~86']} />
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
          <mesh geometry={nodes['3DGeom~1_Defintion#1'].geometry} material={materials['Material~2']} />
          <mesh geometry={nodes.Mesh_288.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_288_1.geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes.Mesh_289.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_289_1.geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes.Mesh_290.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_290_1.geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes.Mesh_291.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_291_1.geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes['Group#14'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Group#37002'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_875.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_875_1.geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes['Group#80002'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['sdfsdfsdf6#8002'].geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes['Group#66002'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_349.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_349_1.geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes['Group#80003'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['sdfsdfsdf6#8003'].geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes['Group#66003'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_355.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_355_1.geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes['Group#80004'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['sdfsdfsdf6#8004'].geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes['Group#66004'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_359.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_359_1.geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes['Group#80005'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['sdfsdfsdf6#8005'].geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes['Group#66005'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_363.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_363_1.geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes['Group#101'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_318.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_318_1.geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes.Mesh_319.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_319_1.geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes.Mesh_320.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_320_1.geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes.Mesh_321.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_321_1.geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes['Group#49'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['sdfsdfsdf6#1'].geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes['Group#45'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_304.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_304_1.geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes.Mesh_306.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_306_1.geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes['3DGeom~10_Defintion#2001'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['1<1>_Defintion#1001'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['2<1>_Defintion#1001'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~4_Defintion#2007'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~4_Defintion#2004'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~4_Defintion#2005'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~4_Defintion#2006'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~1_Defintion#2001'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~2_Defintion#2001'].geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_849.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_849_1.geometry} material={materials.LED_3200k} />
          <mesh geometry={nodes['3DGeom~10_Defintion#2002'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['1<1>_Defintion#1002'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['2<1>_Defintion#1002'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~4_Defintion#2011'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~4_Defintion#2008'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~4_Defintion#2009'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~4_Defintion#2010'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~1_Defintion#2002'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~2_Defintion#2002'].geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_859.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_859_1.geometry} material={materials.LED_3200k} />
          <mesh geometry={nodes['3DGeom~10_Defintion#2003'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['1<1>_Defintion#1003'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['2<1>_Defintion#1003'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~4_Defintion#2015'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~4_Defintion#2012'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~4_Defintion#2013'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~4_Defintion#2014'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~1_Defintion#2003'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~2_Defintion#2003'].geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_869.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_869_1.geometry} material={materials.LED_3200k} />
          <mesh geometry={nodes['Group#561018'].geometry} material={materials['CROMO PERFIL METALICO1']} />
          <mesh geometry={nodes['Group#561019'].geometry} material={materials['CROMO PERFIL METALICO1']} />
          <mesh geometry={nodes['Component#139016'].geometry} material={materials.PRZYCISK} />
          <mesh geometry={nodes['Component#139017'].geometry} material={materials.PRZYCISK} />
          <mesh geometry={nodes['Group#161002'].geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes['Group#161003'].geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes['Group#162002'].geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes['Group#162003'].geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes.Mesh_432.geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes.Mesh_431_1.geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes.Mesh_431_2.geometry} material={materials.wood1} />
          <mesh geometry={nodes['Group#561010'].geometry} material={materials['CROMO PERFIL METALICO1']} />
          <mesh geometry={nodes['Group#561011'].geometry} material={materials['CROMO PERFIL METALICO1']} />
          <mesh geometry={nodes['Component#139010'].geometry} material={materials.PRZYCISK} />
          <mesh geometry={nodes['Component#139011'].geometry} material={materials.PRZYCISK} />
          <mesh geometry={nodes['Group#247'].geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes['Group#247001'].geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes['Group#248'].geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes['Group#248001'].geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes.Mesh_293.geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes.Mesh_292_1.geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes.Mesh_292_2.geometry} material={materials.wood1} />
          <mesh geometry={nodes['Group#561012'].geometry} material={materials['CROMO PERFIL METALICO1']} />
          <mesh geometry={nodes['Group#561013'].geometry} material={materials['CROMO PERFIL METALICO1']} />
          <mesh geometry={nodes['Component#139012'].geometry} material={materials.PRZYCISK} />
          <mesh geometry={nodes['Component#139013'].geometry} material={materials.PRZYCISK} />
          <mesh geometry={nodes['Group#100008'].geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes['Group#100009'].geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes['Group#97008'].geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes['Group#97009'].geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes.Mesh_308.geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes.Mesh_307_1.geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes.Mesh_307_2.geometry} material={materials.wood1} />
          <mesh geometry={nodes['Group#561014'].geometry} material={materials['CROMO PERFIL METALICO1']} />
          <mesh geometry={nodes['Group#561015'].geometry} material={materials['CROMO PERFIL METALICO1']} />
          <mesh geometry={nodes['Component#139014'].geometry} material={materials.PRZYCISK} />
          <mesh geometry={nodes['Component#139015'].geometry} material={materials.PRZYCISK} />
          <mesh geometry={nodes['Group#100010'].geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes['Group#100011'].geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes['Group#97010'].geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes['Group#97011'].geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes.Mesh_323.geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes.Mesh_322_1.geometry} material={materials['[0120_Orchid]1']} />
          <mesh geometry={nodes.Mesh_322_2.geometry} material={materials.wood1} />
          <mesh geometry={nodes['Group#79001'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_280.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_280_1.geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes.Mesh_281.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_281_1.geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes['Group#76001'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_279.geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes['Group#33'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['sdfsdfsdf6#9'].geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes['Group#33001'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['sdfsdfsdf6#9001'].geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes.Mesh_335.geometry} material={materials['[0120_Orchid]2']} />
          <mesh geometry={nodes.Mesh_336.geometry} material={materials.PRZYCISK1} />
          <mesh geometry={nodes.Mesh_337.geometry} material={materials['CROMO PERFIL METALICO1']} />
          <mesh geometry={nodes.Mesh_338.geometry} material={materials.PRZYCISK1} />
          <mesh geometry={nodes.Mesh_339.geometry} material={materials.PRZYCISK1} />
          <mesh geometry={nodes.Mesh_340.geometry} material={materials['[0004_HotPink]4']} />
          <mesh geometry={nodes.Mesh_341.geometry} material={materials['[0120_Orchid]2']} />
          <mesh geometry={nodes.Mesh_342.geometry} material={materials['[0120_Orchid]2']} />
          <mesh geometry={nodes['Group#561016'].geometry} material={materials['CROMO PERFIL METALICO1']} />
          <mesh geometry={nodes['Group#561017'].geometry} material={materials['CROMO PERFIL METALICO1']} />
          <mesh geometry={nodes['Component#44'].geometry} material={materials['[0120_Orchid]2']} />
          <mesh geometry={nodes['Component#44001'].geometry} material={materials['[0120_Orchid]2']} />
          <mesh geometry={nodes.Mesh_344.geometry} material={materials['[0120_Orchid]2']} />
          <mesh geometry={nodes['Component#21'].geometry} material={materials['[0120_Orchid]2']} />
          <mesh geometry={nodes['Component#21001'].geometry} material={materials['[0120_Orchid]2']} />
          <mesh geometry={nodes.Mesh_346.geometry} material={materials['[0120_Orchid]2']} />
          <mesh geometry={nodes.Mesh_332_1.geometry} material={materials['[0120_Orchid]2']} />
          <mesh geometry={nodes.Mesh_332_2.geometry} material={materials.wood1} />
          <mesh geometry={nodes['Component#2'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#2001'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#27'].geometry} material={materials['[Color A08]3']} />
          <mesh geometry={nodes['Component#3'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#3001'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#3002'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#7'].geometry} material={materials['[Color A08]3']} />
          <mesh geometry={nodes['Component#2002'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#2003'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#27001'].geometry} material={materials['[Color A08]3']} />
          <mesh geometry={nodes['Component#3003'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#3004'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#3005'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#7001'].geometry} material={materials['[Color A08]3']} />
          <mesh geometry={nodes['Component#17'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#17001'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#18'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#18001'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#18002'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_372.geometry} material={materials['[Color A08]3']} />
          <mesh geometry={nodes.Mesh_387.geometry} material={materials['[Color A08]3']} />
          <mesh geometry={nodes['Component#28'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#28001'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#28002'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#28003'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#28004'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#28005'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#28006'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#28007'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#28008'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#28009'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#28010'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#28011'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#28012'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#28013'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#28014'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#28015'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#28016'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#28017'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#28018'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#28019'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#28020'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#28021'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#28022'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#36'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#36001'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#36002'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#36003'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#36004'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#36005'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#36006'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#36007'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#36008'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#36009'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#36010'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#36011'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#36012'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#36013'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#33'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#34'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_413.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_428.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_428_1.geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes.Mesh_430.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_430_1.geometry} material={materials.VIDRO2} />
          <mesh geometry={nodes['Group#157'].geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.obj_01.geometry} material={materials['[Color_D25]1']} />
          <mesh geometry={nodes.obj_02.geometry} material={materials['[Color_D25]1']} />
          <mesh geometry={nodes.obj_03.geometry} material={materials['[Color_D25]1']} />
          <mesh geometry={nodes.obj_04.geometry} material={materials['[Color_D25]1']} />
          <mesh geometry={nodes.obj_05.geometry} material={materials.Material3} />
          <mesh geometry={nodes.obj_01001.geometry} material={materials['[Color_D25]1']} />
          <mesh geometry={nodes.obj_02001.geometry} material={materials['[Color_D25]1']} />
          <mesh geometry={nodes.obj_03001.geometry} material={materials['[Color_D25]1']} />
          <mesh geometry={nodes.obj_04001.geometry} material={materials['[Color_D25]1']} />
          <mesh geometry={nodes.obj_05001.geometry} material={materials.Material3} />
          <mesh geometry={nodes.obj_01002.geometry} material={materials['[Color_D25]1']} />
          <mesh geometry={nodes.obj_02002.geometry} material={materials['[Color_D25]1']} />
          <mesh geometry={nodes.obj_03002.geometry} material={materials['[Color_D25]1']} />
          <mesh geometry={nodes.obj_04002.geometry} material={materials['[Color_D25]1']} />
          <mesh geometry={nodes.obj_05002.geometry} material={materials.Material3} />
          <mesh geometry={nodes.obj_01003.geometry} material={materials['[Color_D25]1']} />
          <mesh geometry={nodes.obj_02003.geometry} material={materials['[Color_D25]1']} />
          <mesh geometry={nodes.obj_03003.geometry} material={materials['[Color_D25]1']} />
          <mesh geometry={nodes.obj_04003.geometry} material={materials['[Color_D25]1']} />
          <mesh geometry={nodes.obj_05003.geometry} material={materials.Material3} />
          <mesh geometry={nodes.obj_01004.geometry} material={materials['[Color_D25]1']} />
          <mesh geometry={nodes.obj_02004.geometry} material={materials['[Color_D25]1']} />
          <mesh geometry={nodes.obj_03004.geometry} material={materials['[Color_D25]1']} />
          <mesh geometry={nodes.obj_04004.geometry} material={materials['[Color_D25]1']} />
          <mesh geometry={nodes.obj_05004.geometry} material={materials.Material3} />
          <mesh geometry={nodes.obj_01005.geometry} material={materials['[Color_D25]1']} />
          <mesh geometry={nodes.obj_02005.geometry} material={materials['[Color_D25]1']} />
          <mesh geometry={nodes.obj_03005.geometry} material={materials['[Color_D25]1']} />
          <mesh geometry={nodes.obj_04005.geometry} material={materials['[Color_D25]1']} />
          <mesh geometry={nodes.obj_05005.geometry} material={materials.Material3} />
          <mesh geometry={nodes.obj_01006.geometry} material={materials['[Color_D25]1']} />
          <mesh geometry={nodes.obj_02006.geometry} material={materials['[Color_D25]1']} />
          <mesh geometry={nodes.obj_03006.geometry} material={materials['[Color_D25]1']} />
          <mesh geometry={nodes.obj_04006.geometry} material={materials['[Color_D25]1']} />
          <mesh geometry={nodes.obj_05006.geometry} material={materials.Material3} />
          <mesh geometry={nodes.obj_01007.geometry} material={materials['[Color_D25]1']} />
          <mesh geometry={nodes.obj_02007.geometry} material={materials['[Color_D25]1']} />
          <mesh geometry={nodes.obj_03007.geometry} material={materials['[Color_D25]1']} />
          <mesh geometry={nodes.obj_04007.geometry} material={materials['[Color_D25]1']} />
          <mesh geometry={nodes.obj_05007.geometry} material={materials.Material3} />
          <mesh geometry={nodes.Mesh_441.geometry} material={materials['[Color_D25]1']} />
          <mesh geometry={nodes.Mesh_442.geometry} material={materials['[Color_D25]1']} />
          <mesh geometry={nodes.Mesh_443_1.geometry} material={materials.il_fullxfull} />
          <mesh geometry={nodes.Mesh_443_2.geometry} material={materials['[Color A04]2']} />
          <mesh geometry={nodes.Mesh_487.geometry} material={materials.Metal_Corrogated_Shiny} />
          <mesh geometry={nodes.Mesh_488_1.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_488_2.geometry} material={materials.Sophie_Shirt_Gray} />
          <mesh geometry={nodes.Mesh_489.geometry} material={materials.Metal_Corrogated_Shiny} />
          <mesh geometry={nodes.Mesh_490_1.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_490_2.geometry} material={materials.Sophie_Shirt_Gray} />
          <mesh geometry={nodes.Mesh_495.geometry} material={materials['default material']}>
            <mesh geometry={nodes.Mesh_491.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_492.geometry} material={materials.Color_008} />
            <mesh geometry={nodes.Mesh_493.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_494.geometry} material={materials['default material']} />
          </mesh>
          <mesh geometry={nodes.Mesh_496.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_497_1.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_497_2.geometry} material={materials.Color_D05} />
          <mesh geometry={nodes.Mesh_498.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_499.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_500.geometry} material={materials.Color_008} />
          <mesh geometry={nodes.Mesh_501.geometry} material={materials.Color_008} />
          <mesh geometry={nodes.Mesh_484.geometry} material={materials['Color D08']} />
          <mesh geometry={nodes.Mesh_485.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_486.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_547.geometry} material={materials.Black_matte} />
          <mesh geometry={nodes.Mesh_548.geometry} material={materials['Aluminum Nice']} />
          <mesh geometry={nodes.Mesh_549.geometry} material={materials.Chrome2} />
          <mesh geometry={nodes.Mesh_550.geometry} material={materials['Aluminum Nice']} />
          <mesh geometry={nodes.Mesh_563.geometry} material={materials.Black_matte} />
          <mesh geometry={nodes.Mesh_564.geometry} material={materials['Aluminum Nice']} />
          <mesh geometry={nodes.Mesh_565.geometry} material={materials.Chrome2} />
          <mesh geometry={nodes.Mesh_566.geometry} material={materials['Aluminum Nice']} />
          <mesh geometry={nodes.Mesh_567.geometry} material={materials.Black_matte} />
          <mesh geometry={nodes.Mesh_568.geometry} material={materials['Aluminum Nice']} />
          <mesh geometry={nodes.Mesh_569.geometry} material={materials.Chrome2} />
          <mesh geometry={nodes.Mesh_570.geometry} material={materials['Aluminum Nice']} />
          <mesh geometry={nodes.Mesh_571.geometry} material={materials.Black_matte} />
          <mesh geometry={nodes.Mesh_572.geometry} material={materials['Aluminum Nice']} />
          <mesh geometry={nodes.Mesh_573.geometry} material={materials.Chrome2} />
          <mesh geometry={nodes.Mesh_574.geometry} material={materials['Aluminum Nice']} />
          <mesh geometry={nodes['Component#228'].geometry} material={materials.GEL_PA_Metal} />
          <mesh geometry={nodes['Component#234'].geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_551.geometry} material={materials.GEL_PA_Metal} />
          <mesh geometry={nodes.Mesh_551_1.geometry} material={materials.aco_escovado_fdsafjasfoajsfoijofjwerwerw1} />
          <mesh geometry={nodes['Component#315'].geometry} material={materials.aco_escovado_fdsafjasfoajsfoijofjwerwerw1} />
          <mesh geometry={nodes['Component#228001'].geometry} material={materials.GEL_PA_Metal} />
          <mesh geometry={nodes.Mesh_586.geometry} material={materials.GEL_PA_Metal} />
          <mesh geometry={nodes.Mesh_586_1.geometry} material={materials.aco_escovado_fdsafjasfoajsfoijofjwerwerw1} />
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
          <mesh geometry={nodes.Mesh_558.geometry} material={materials.GEL_PA_Metal} />
          <mesh geometry={nodes.Mesh_558_1.geometry} material={materials.aco_escovado_fdsafjasfoajsfoijofjwerwerw1} />
          <mesh geometry={nodes.Mesh_560.geometry} material={materials.GEL_PA_Metal} />
          <mesh geometry={nodes.Mesh_560_1.geometry} material={materials.aco_escovado_fdsafjasfoajsfoijofjwerwerw1} />
          <mesh geometry={nodes.Mesh_580.geometry} material={materials.aco_escovado_fdsafjasfoajsfoijofjwerwerw1} />
          <mesh geometry={nodes.Mesh_580_1.geometry} material={materials.GEL_PA_Metal} />
          <mesh geometry={nodes.Mesh_561.geometry} material={materials.aco_escovado_fdsafjasfoajsfoijofjwerwerw1} />
          <mesh geometry={nodes.Mesh_561_1.geometry} material={materials.GEL_PA_Metal} />
          <mesh geometry={nodes.Mesh_562.geometry} material={materials.aco_escovado_fdsafjasfoajsfoijofjwerwerw1} />
          <mesh geometry={nodes.Mesh_562_1.geometry} material={materials.GEL_PA_Metal} />
          <mesh geometry={nodes.Mesh_584.geometry} material={materials.aco_escovado_fdsafjasfoajsfoijofjwerwerw1} />
          <mesh geometry={nodes.Mesh_584_1.geometry} material={materials.Ref_3} />
          <mesh geometry={nodes['Component#331'].geometry} material={materials.aco_escovado_fdsafjasfoajsfoijofjwerwerw1} />
          <mesh geometry={nodes.Mesh_505_1.geometry} material={materials.Build_Platform} />
          <mesh geometry={nodes.Mesh_505_2.geometry} material={materials.Material13} />
          <mesh geometry={nodes.Mesh_504_1.geometry} material={materials.Material13} />
          <mesh geometry={nodes.Mesh_504_2.geometry} material={materials['Огнеупорно стъкло']} />
          <mesh geometry={nodes.Mesh_504_3.geometry} material={materials.Неръждавейка} />
          <mesh geometry={nodes.Mesh_504_4.geometry} material={materials.aco_escovado_fdsafjasfoajsfoijofjwerwerw1} />
          <mesh geometry={nodes.Mesh_504_5.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_504_6.geometry} material={materials.Дисплей} />
          <mesh geometry={nodes.Eurolux.geometry} material={materials['3D_Text']} />
          <mesh geometry={nodes.Mesh_508_1.geometry} material={materials.Build_Platform} />
          <mesh geometry={nodes.Mesh_508_2.geometry} material={materials.Material16} />
          <mesh geometry={nodes.Mesh_508_3.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_508_4.geometry} material={materials.Material17} />
          <mesh geometry={nodes.Mesh_508_5.geometry} material={materials.Material13} />
          <mesh geometry={nodes.Mesh_508_6.geometry} material={materials.Material15} />
          <mesh geometry={nodes.Mesh_508_7.geometry} material={materials.aco_escovado_fdsafjasfoajsfoijofjwerwerw} />
          <mesh geometry={nodes.Mesh_508_8.geometry} material={materials.Material19} />
          <mesh geometry={nodes['Eurolux#1'].geometry} material={materials['3D_Text1']} />
          <mesh geometry={nodes.twl_light.geometry} material={materials.TwiLight} />
          <mesh geometry={nodes['Component#163'].geometry} material={materials['[Color A08]4']} />
          <mesh geometry={nodes['Component#163001'].geometry} material={materials['[Color A08]4']} />
          <mesh geometry={nodes['Component#164'].geometry} material={materials['[Color A08]4']} />
          <mesh geometry={nodes['Component#165'].geometry} material={materials['[Color A08]4']} />
          <mesh geometry={nodes['Component#165001'].geometry} material={materials['[Color A08]4']} />
          <mesh geometry={nodes['Component#165002'].geometry} material={materials['[Color A08]4']} />
          <mesh geometry={nodes['Component#165003'].geometry} material={materials['[Color A08]4']} />
          <mesh geometry={nodes['Component#165004'].geometry} material={materials['[Color A08]4']} />
          <mesh geometry={nodes['Component#167'].geometry} material={materials['[Color A08]4']} />
          <mesh geometry={nodes['Component#167001'].geometry} material={materials['[Color A08]4']} />
          <mesh geometry={nodes['Component#168'].geometry} material={materials['[Color A08]4']} />
          <mesh geometry={nodes['Component#168001'].geometry} material={materials['[Color A08]4']} />
          <mesh geometry={nodes['Component#168002'].geometry} material={materials['[Color A08]4']} />
          <mesh geometry={nodes['Component#168003'].geometry} material={materials['[Color A08]4']} />
          <mesh geometry={nodes['Component#343'].geometry} material={materials['[Color A08]4']} />
          <mesh geometry={nodes['Component#343001'].geometry} material={materials['[Color A08]4']} />
          <mesh geometry={nodes.Mesh_526.geometry} material={materials['Branco Eletrônicos']} />
          <mesh geometry={nodes.Mesh_526_1.geometry} material={materials['Preto Eletrônicos']} />
          <mesh geometry={nodes.Mesh_526_2.geometry} material={materials['[Color_008]1']} />
          <mesh geometry={nodes.Mesh_530.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_530_1.geometry} material={materials['Preto Eletrônico Boca do Fogo Cooktop']} />
          <mesh geometry={nodes.Mesh_530_2.geometry} material={materials['Cromado Inox Eletrônicos']} />
          <mesh geometry={nodes['Component#169'].geometry} material={materials['Preto Eletrônicos']} />
          <mesh geometry={nodes.Mesh_545.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_545_1.geometry} material={materials['Preto Eletrônico Boca do Fogo Cooktop']} />
          <mesh geometry={nodes.Mesh_545_2.geometry} material={materials['Cromado Inox Eletrônicos']} />
          <mesh geometry={nodes['Component#169004'].geometry} material={materials['Preto Eletrônicos']} />
          <mesh geometry={nodes.Mesh_535.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_535_1.geometry} material={materials['Preto Eletrônico Boca do Fogo Cooktop']} />
          <mesh geometry={nodes.Mesh_535_2.geometry} material={materials['Cromado Inox Eletrônicos']} />
          <mesh geometry={nodes['Component#169001'].geometry} material={materials['Preto Eletrônicos']} />
          <mesh geometry={nodes.Mesh_538.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_538_1.geometry} material={materials['Preto Eletrônico Boca do Fogo Cooktop']} />
          <mesh geometry={nodes.Mesh_538_2.geometry} material={materials['Cromado Inox Eletrônicos']} />
          <mesh geometry={nodes['Component#169002'].geometry} material={materials['Preto Eletrônicos']} />
          <mesh geometry={nodes.Mesh_541.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_541_1.geometry} material={materials['Preto Eletrônico Boca do Fogo Cooktop']} />
          <mesh geometry={nodes.Mesh_541_2.geometry} material={materials['Cromado Inox Eletrônicos']} />
          <mesh geometry={nodes['Component#169003'].geometry} material={materials['Preto Eletrônicos']} />
          <mesh geometry={nodes['Group#23'].geometry} material={materials['Cromado Inox Eletrônicos']} />
          <mesh geometry={nodes['Group#23001'].geometry} material={materials['Cromado Inox Eletrônicos']} />
          <mesh geometry={nodes['Group#23002'].geometry} material={materials['Cromado Inox Eletrônicos']} />
          <mesh geometry={nodes['Group#23003'].geometry} material={materials['Cromado Inox Eletrônicos']} />
          <mesh geometry={nodes['Group#23004'].geometry} material={materials['Cromado Inox Eletrônicos']} />
          <mesh geometry={nodes['Group#27007'].geometry} material={materials['Cromado Inox Eletrônicos']} />
          <mesh geometry={nodes['Group#27008'].geometry} material={materials['Cromado Inox Eletrônicos']} />
          <mesh geometry={nodes['Group#27009'].geometry} material={materials['Cromado Inox Eletrônicos']} />
          <mesh geometry={nodes['Group#27010'].geometry} material={materials['Cromado Inox Eletrônicos']} />
          <mesh geometry={nodes['Group#27011'].geometry} material={materials['Cromado Inox Eletrônicos']} />
          <mesh geometry={nodes.Mesh_502.geometry} material={materials['Color D08']} />
          <mesh geometry={nodes.Mesh_546_1.geometry} material={materials['[Color A08]4']} />
          <mesh geometry={nodes.Mesh_546_2.geometry} material={materials['[0120_Orchid]3']} />
          <mesh geometry={nodes.Mesh_590.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_591.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_589.geometry} material={materials['default material']} />
          <mesh geometry={nodes['download?mid=639fa6d8817c5564f646a653494806f8&ctyp=sp&cv=p80'].geometry} material={materials.PRZYCISK2}>
            <mesh geometry={nodes.Mesh_592.geometry} material={materials.PRZYCISK2} />
            <mesh geometry={nodes.Mesh_593.geometry} material={materials.PRZYCISK2} />
            <mesh geometry={nodes.Mesh_594.geometry} material={materials.PRZYCISK2} />
            <mesh geometry={nodes.Mesh_595.geometry} material={materials.PRZYCISK2} />
            <mesh geometry={nodes.Mesh_596.geometry} material={materials.PRZYCISK2} />
            <mesh geometry={nodes.Mesh_597.geometry} material={materials.PRZYCISK2} />
          </mesh>
          <mesh geometry={nodes.Box002.geometry} material={materials.fabric1} />
          <mesh geometry={nodes.Cylinder00.geometry} material={materials.Color_001} />
          <mesh geometry={nodes['Cylinder01#1'].geometry} material={materials.Color_001} />
          <mesh geometry={nodes.Cylinder02.geometry} material={materials.Color_001} />
          <mesh geometry={nodes.Cylinder03.geometry} material={materials.Color_001} />
          <mesh geometry={nodes.Line002.geometry} material={materials['black steel']} />
          <mesh geometry={nodes.Box002001.geometry} material={materials.fabric1} />
          <mesh geometry={nodes.Cylinder00001.geometry} material={materials.Color_001} />
          <mesh geometry={nodes['Cylinder01#1001'].geometry} material={materials.Color_001} />
          <mesh geometry={nodes.Cylinder02001.geometry} material={materials.Color_001} />
          <mesh geometry={nodes.Cylinder03001.geometry} material={materials.Color_001} />
          <mesh geometry={nodes.Line002001.geometry} material={materials['black steel']} />
          <mesh geometry={nodes.Box002002.geometry} material={materials.fabric1} />
          <mesh geometry={nodes.Cylinder00002.geometry} material={materials.Color_001} />
          <mesh geometry={nodes['Cylinder01#1002'].geometry} material={materials.Color_001} />
          <mesh geometry={nodes.Cylinder02002.geometry} material={materials.Color_001} />
          <mesh geometry={nodes.Cylinder03002.geometry} material={materials.Color_001} />
          <mesh geometry={nodes.Line002002.geometry} material={materials['black steel']} />
          <mesh geometry={nodes['3DGeom~69_Defintion'].geometry} material={materials['Material~69']} />
          <mesh geometry={nodes['3DGeom~71_Defintion'].geometry} material={materials['Material~71']} />
          <mesh geometry={nodes['3DGeom~70_Defintion'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~41_Defintion'].geometry} material={materials.ghe} />
          <mesh geometry={nodes['3DGeom~42_Defintion'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~43_Defintion'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~46_Defintion'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~47_Defintion'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~48_Defintion'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~49_Defintion'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~50_Defintion'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~51_Defintion'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~52_Defintion'].geometry} material={materials.sofa} />
          <mesh geometry={nodes['3DGeom~53_Defintion'].geometry} material={materials['goi sofa']} />
          <mesh geometry={nodes['3DGeom~54_Defintion'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~55_Defintion'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~56_Defintion'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~44_Defintion'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~58_Defintion'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~59_Defintion'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~60_Defintion'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~61_Defintion'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~62_Defintion'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~63_Defintion'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~64_Defintion'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~65_Defintion'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~66_Defintion'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~67_Defintion'].geometry} material={materials['chan ghe']} />
          <mesh geometry={nodes['3DGeom~68_Defintion'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~45_Defintion'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['3DGeom~57_Defintion'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#111'].geometry} material={materials.GEL_PA_Metal} />
          <mesh geometry={nodes['Component#112'].geometry} material={materials.GEL_PA_LED} />
          <mesh geometry={nodes.Mesh_649.geometry} material={materials.GEL_PA_Plastico} />
          <mesh geometry={nodes.Mesh_649_1.geometry} material={materials.GEL_PA_Painel} />
          <mesh geometry={nodes['Component#11'].geometry} material={materials.GEL_PA_Plastico} />
          <mesh geometry={nodes.Mesh_648.geometry} material={materials.GEL_PA_Metal} />
          <mesh geometry={nodes.Mesh_648_1.geometry} material={materials.GEL_PA_Plastico} />
          <mesh geometry={nodes['Component#12'].geometry} material={materials.GEL_PA_Metal} />
          <mesh geometry={nodes.Mesh_652.geometry} material={materials.GEL_PA_Metal} />
          <mesh geometry={nodes.Mesh_652_1.geometry} material={materials.GEL_PA_Plastico} />
          <mesh geometry={nodes.Mesh_652_2.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_654.geometry} material={materials.GEL_PA_Metal} />
          <mesh geometry={nodes.Mesh_654_1.geometry} material={materials.GEL_PA_Plastico} />
          <mesh geometry={nodes.Mesh_654_2.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_656.geometry} material={materials.GEL_PA_Metal} />
          <mesh geometry={nodes.Mesh_656_1.geometry} material={materials.GEL_PA_Plastico} />
          <mesh geometry={nodes.Mesh_656_2.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_657.geometry} material={materials.GEL_PA_Metal} />
          <mesh geometry={nodes.Mesh_657_1.geometry} material={materials.GEL_PA_Plastico} />
          <mesh geometry={nodes.Mesh_657_2.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_661_1.geometry} material={materials['Color B03']} />
          <mesh geometry={nodes.Mesh_661_2.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_665_1.geometry} material={materials.Material5} />
          <mesh geometry={nodes.Mesh_665_2.geometry} material={materials.Material8} />
          <mesh geometry={nodes.Mesh_665_3.geometry} material={materials['Metal_Corrogated_Shiny.001']} />
          <mesh geometry={nodes.Mesh_665_4.geometry} material={materials.Material9} />
          <mesh geometry={nodes.Mesh_665_5.geometry} material={materials.Material18} />
          <mesh geometry={nodes.Mesh_665_6.geometry} material={materials.Material14} />
          <mesh geometry={nodes.Mesh_662.geometry} material={materials['<CorrogateShiny>']} />
          <mesh geometry={nodes.Mesh_664.geometry} material={materials.Material2}>
            <mesh geometry={nodes.Mesh_663.geometry} material={materials.Material2} />
          </mesh>
          <mesh geometry={nodes['Group#52'].geometry} material={materials['0013_LightCoral']} />
          <mesh geometry={nodes['Group#52001'].geometry} material={materials['0013_LightCoral']} />
          <mesh geometry={nodes['Group#12'].geometry} material={materials['0013_LightCoral']} />
          <mesh geometry={nodes.Mesh_669.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes['Component#129'].geometry} material={materials['[Color M08]1']} />
          <mesh geometry={nodes['Component#129001'].geometry} material={materials['[Color M08]1']} />
          <mesh geometry={nodes.Mesh_658.geometry} material={materials['[Color_008]8']} />
          <mesh geometry={nodes.Mesh_660.geometry} material={materials['[Color A08]4']}>
            <mesh geometry={nodes.Mesh_659.geometry} material={materials['default material']} />
          </mesh>
          <mesh geometry={nodes.Mesh_353.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_354.geometry} material={materials['Color L05']} />
          <mesh geometry={nodes.Mesh_740.geometry} material={materials['Fabric-Bed']}>
            <mesh geometry={nodes.Mesh_672.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_673.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_674.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_675.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_676.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_677.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_678.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_679.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_680.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_681.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_682.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_683.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_684.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_685.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_686.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_687.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_688.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_689.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_690.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_691.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_692.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_693.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_694.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_695.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_696.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_697.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_698.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_699.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_700.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_701.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_702.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_703.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_704.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_705.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_706.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_707.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_708.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_709.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_710.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_711.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_712.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_713.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_714.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_715.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_716.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_717.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_718.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_719.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_720.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_721.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_722.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_723.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_724.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_725.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_726.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_727.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_728.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_729.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_730.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_731.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_732.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_736.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_737.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_733.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_734.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Mesh_735.geometry} material={materials['default material']} />
            <mesh geometry={nodes.Pattern2D_120.geometry} material={materials['0010_Snow']} />
            <mesh geometry={nodes.Pattern2D_120001.geometry} material={materials['0010_Snow']} />
          </mesh>
          <mesh geometry={nodes.Mesh_844.geometry} material={materials.galsafkdshifohowasfdsafw}>
            <mesh geometry={nodes['Component#155'].geometry} material={materials.galsafkdshifohowasfdsafw} />
            <mesh geometry={nodes['Component#156'].geometry} material={materials.galsafkdshifohowasfdsafw} />
          </mesh>
          <mesh geometry={nodes.Mesh_880_1.geometry} material={materials['TULLE WHITE']} />
          <mesh geometry={nodes.Mesh_880_2.geometry} material={materials['[Color_008]8']} />
          <mesh geometry={nodes.Mesh_880_3.geometry} material={materials['Color M06']} />
          <mesh geometry={nodes.Mesh_880_4.geometry} material={materials['Color L05']} />
        </group>
      </group>
    )
  }

  function Model3() {
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
  
  export default Model3;