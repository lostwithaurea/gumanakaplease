import '../css/model.css';
import "../css/model.sass";
import React, {Suspense, useRef, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import {OrbitControls, useGLTF} from "@react-three/drei";
import { useNavigate } from 'react-router-dom';

export function Model(props) {
    const { nodes, materials } = useGLTF('/model5.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.Mesh_2.geometry} material={materials.Material4} />
        <mesh geometry={nodes.Mesh_6_1.geometry} material={materials.Material4} />
        <mesh geometry={nodes.Mesh_6_2.geometry} material={materials.Material5} />
        <mesh geometry={nodes.Mesh_6_3.geometry} material={materials.Material3} />
        <mesh geometry={nodes.Mesh_6_4.geometry} material={materials['<auto>']} />
        <mesh geometry={nodes.Mesh_4.geometry} material={materials.Material5}>
          <mesh geometry={nodes.Mesh_3.geometry} material={materials.Material4} />
        </mesh>
        <mesh geometry={nodes.Mesh_5.geometry} material={materials.Material2} />
        <mesh geometry={nodes['Component#14'].geometry} material={materials['CLEAR GLASS']}>
          <mesh geometry={nodes.Mesh_11.geometry} material={materials['WINDOW FRAME 1']}>
            <mesh geometry={nodes.Mesh_10.geometry} material={materials['WINDOW FRAME 1']} />
            <mesh geometry={nodes.Mesh_8.geometry} material={materials['WINDOW FRAME 1']} />
            <mesh geometry={nodes.Mesh_9.geometry} material={materials['WINDOW FRAME 1']} />
          </mesh>
        </mesh>
        <mesh geometry={nodes['Component#14001'].geometry} material={materials['CLEAR GLASS']}>
          <mesh geometry={nodes.Mesh_16.geometry} material={materials['WINDOW FRAME 1']}>
            <mesh geometry={nodes.Mesh_13.geometry} material={materials['WINDOW FRAME 1']} />
            <mesh geometry={nodes.Mesh_14.geometry} material={materials['WINDOW FRAME 1']} />
            <mesh geometry={nodes.Mesh_15.geometry} material={materials['WINDOW FRAME 1']} />
          </mesh>
        </mesh>
        <mesh geometry={nodes.Mesh_7_1.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_7_2.geometry} material={materials['CLEAR GLASS']} />
        <mesh geometry={nodes.Mesh_33.geometry} material={materials['Andodized Metal ']} />
        <mesh geometry={nodes.Mesh_34_1.geometry} material={materials['Andodized Metal ']} />
        <mesh geometry={nodes.Mesh_34_2.geometry} material={materials.Translucent_Glass_Gray} />
        <mesh geometry={nodes['Component#14002'].geometry} material={materials['CLEAR GLASS']}>
          <mesh geometry={nodes.Mesh_21.geometry} material={materials['WINDOW FRAME 1']}>
            <mesh geometry={nodes.Mesh_18.geometry} material={materials['WINDOW FRAME 1']} />
            <mesh geometry={nodes.Mesh_19.geometry} material={materials['WINDOW FRAME 1']} />
            <mesh geometry={nodes.Mesh_20.geometry} material={materials['WINDOW FRAME 1']} />
          </mesh>
        </mesh>
        <mesh geometry={nodes['Component#14003'].geometry} material={materials['CLEAR GLASS']}>
          <mesh geometry={nodes.Mesh_26.geometry} material={materials['WINDOW FRAME 1']}>
            <mesh geometry={nodes.Mesh_23.geometry} material={materials['WINDOW FRAME 1']} />
            <mesh geometry={nodes.Mesh_24.geometry} material={materials['WINDOW FRAME 1']} />
            <mesh geometry={nodes.Mesh_25.geometry} material={materials['WINDOW FRAME 1']} />
          </mesh>
        </mesh>
        <mesh geometry={nodes['Component#14004'].geometry} material={materials['CLEAR GLASS']}>
          <mesh geometry={nodes.Mesh_31.geometry} material={materials['WINDOW FRAME 1']}>
            <mesh geometry={nodes.Mesh_28.geometry} material={materials['WINDOW FRAME 1']} />
            <mesh geometry={nodes.Mesh_29.geometry} material={materials['WINDOW FRAME 1']} />
            <mesh geometry={nodes.Mesh_30.geometry} material={materials['WINDOW FRAME 1']} />
          </mesh>
        </mesh>
        <mesh geometry={nodes['Component#14005'].geometry} material={materials['CLEAR GLASS']}>
          <mesh geometry={nodes.Mesh_40.geometry} material={materials['WINDOW FRAME 1']}>
            <mesh geometry={nodes.Mesh_37.geometry} material={materials['WINDOW FRAME 1']} />
            <mesh geometry={nodes.Mesh_38.geometry} material={materials['WINDOW FRAME 1']} />
            <mesh geometry={nodes.Mesh_39.geometry} material={materials['WINDOW FRAME 1']} />
          </mesh>
        </mesh>
        <mesh geometry={nodes['Component#14006'].geometry} material={materials['CLEAR GLASS']}>
          <mesh geometry={nodes.Mesh_45.geometry} material={materials['WINDOW FRAME 1']}>
            <mesh geometry={nodes.Mesh_42.geometry} material={materials['WINDOW FRAME 1']} />
            <mesh geometry={nodes.Mesh_43.geometry} material={materials['WINDOW FRAME 1']} />
            <mesh geometry={nodes.Mesh_44.geometry} material={materials['WINDOW FRAME 1']} />
          </mesh>
        </mesh>
        <mesh geometry={nodes['Component#14007'].geometry} material={materials['CLEAR GLASS']}>
          <mesh geometry={nodes.Mesh_50.geometry} material={materials['WINDOW FRAME 1']}>
            <mesh geometry={nodes.Mesh_47.geometry} material={materials['WINDOW FRAME 1']} />
            <mesh geometry={nodes.Mesh_48.geometry} material={materials['WINDOW FRAME 1']} />
            <mesh geometry={nodes.Mesh_49.geometry} material={materials['WINDOW FRAME 1']} />
          </mesh>
        </mesh>
        <mesh geometry={nodes['Component#14011'].geometry} material={materials['CLEAR GLASS']}>
          <mesh geometry={nodes.Mesh_84.geometry} material={materials['WINDOW FRAME 1']}>
            <mesh geometry={nodes.Mesh_81.geometry} material={materials['WINDOW FRAME 1']} />
            <mesh geometry={nodes.Mesh_82.geometry} material={materials['WINDOW FRAME 1']} />
            <mesh geometry={nodes.Mesh_83.geometry} material={materials['WINDOW FRAME 1']} />
          </mesh>
        </mesh>
        <mesh geometry={nodes['Component#14012'].geometry} material={materials['CLEAR GLASS']}>
          <mesh geometry={nodes.Mesh_89.geometry} material={materials['WINDOW FRAME 1']}>
            <mesh geometry={nodes.Mesh_86.geometry} material={materials['WINDOW FRAME 1']} />
            <mesh geometry={nodes.Mesh_87.geometry} material={materials['WINDOW FRAME 1']} />
            <mesh geometry={nodes.Mesh_88.geometry} material={materials['WINDOW FRAME 1']} />
          </mesh>
        </mesh>
        <mesh geometry={nodes['Component#14013'].geometry} material={materials['CLEAR GLASS']}>
          <mesh geometry={nodes.Mesh_94.geometry} material={materials['WINDOW FRAME 1']}>
            <mesh geometry={nodes.Mesh_91.geometry} material={materials['WINDOW FRAME 1']} />
            <mesh geometry={nodes.Mesh_92.geometry} material={materials['WINDOW FRAME 1']} />
            <mesh geometry={nodes.Mesh_93.geometry} material={materials['WINDOW FRAME 1']} />
          </mesh>
        </mesh>
        <mesh geometry={nodes['Component#2008'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#2009'].geometry} material={materials['DARK GRAY WALL']} />
        <mesh geometry={nodes['Component#2010'].geometry} material={materials['DARK GRAY WALL']} />
        <mesh geometry={nodes['Component#2011'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#2012'].geometry} material={materials['DARK GRAY WALL']} />
        <mesh geometry={nodes['Component#2013'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#2014'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['Component#2015'].geometry} material={materials['DARK GRAY WALL']} />
        <mesh geometry={nodes.Mesh_105.geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes.Mesh_105_1.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_106.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['Component#3'].geometry} material={materials['DARK GRAY WALL']} />
        <mesh geometry={nodes['Component#3001'].geometry} material={materials['DARK GRAY WALL']} />
        <mesh geometry={nodes['Component#3002'].geometry} material={materials['DARK GRAY WALL']} />
        <mesh geometry={nodes['Component#3003'].geometry} material={materials['DARK GRAY WALL']} />
        <mesh geometry={nodes.Mesh_115.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_115_1.geometry} material={materials['CLEAR GLASS']} />
        <mesh geometry={nodes.Mesh_117.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_117_1.geometry} material={materials['CLEAR GLASS']} />
        <mesh geometry={nodes.Mesh_116.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_116_1.geometry} material={materials['CLEAR GLASS']} />
        <mesh geometry={nodes.Mesh_118.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_118_1.geometry} material={materials['CLEAR GLASS']} />
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
        <mesh geometry={nodes.Mesh_161.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_161_1.geometry} material={materials['CLEAR GLASS']} />
        <mesh geometry={nodes.Mesh_163.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_163_1.geometry} material={materials['CLEAR GLASS']} />
        <mesh geometry={nodes.Mesh_162.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_162_1.geometry} material={materials['CLEAR GLASS']} />
        <mesh geometry={nodes.Mesh_164.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_164_1.geometry} material={materials['CLEAR GLASS']} />
        <mesh geometry={nodes['wood_slat_1#1020'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1021'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1022'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1023'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1024'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1025'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1026'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1027'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1028'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1029'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1030'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1031'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1032'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1033'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1034'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1035'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1036'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1037'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1038'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1039'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1040'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1041'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1042'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1043'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1044'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1045'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1046'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1047'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1048'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1049'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes.Mesh_213.geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes.Mesh_213_1.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes.Mesh_214.geometry} material={materials['WINDOW FRAME 1']} />
        <mesh geometry={nodes['wood_slat_1#1050'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1051'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1052'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1053'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1054'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1055'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1056'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1057'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1058'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1059'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1060'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1061'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1062'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1063'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes['wood_slat_1#1064'].geometry} material={materials['WOOD DOOR 3']} />
        <mesh geometry={nodes.Mesh_132.geometry} material={materials['GRAY WALL']} />
        <mesh geometry={nodes.Mesh_132_1.geometry} material={materials['BALCONY 1']} />
        <mesh geometry={nodes.Mesh_132_2.geometry} material={materials['WOOD 3']} />
        <mesh geometry={nodes['grille#1'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['grille#1001'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['grille#1002'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['grille#1003'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['grille#1004'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.main_courante.geometry} material={materials['Pale Brown']} />
        <mesh geometry={nodes['montants#1'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['montants#1001'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['montants#1002'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['montants#1003'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['montants#1004'].geometry} material={materials['default material']} />
        <mesh geometry={nodes['montants#1005'].geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_110.geometry} material={materials['GRAY WALL']} />
        <mesh geometry={nodes.Mesh_110_1.geometry} material={materials['BALCONY 1']} />
        <mesh geometry={nodes.Mesh_110_2.geometry} material={materials['WOOD 3']} />
        <mesh geometry={nodes.Mesh_107_1.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes.Mesh_107_2.geometry} material={materials['DARK GRAY WALL']} />
        <mesh geometry={nodes.Mesh_108.geometry} material={materials['GRAY WALL']} />
        <mesh geometry={nodes.Mesh_109.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_119_1.geometry} material={materials['WOOD 3']} />
        <mesh geometry={nodes.Mesh_119_2.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_133.geometry} material={materials['DARK GRAY WALL']} />
        <mesh geometry={nodes.Mesh_154_1.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes.Mesh_154_2.geometry} material={materials['DARK GRAY WALL']} />
        <mesh geometry={nodes.Mesh_155_1.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_155_2.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes.Mesh_156.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_157.geometry} material={materials['DARK GRAY WALL']} />
        <mesh geometry={nodes.Mesh_158.geometry} material={materials['GRAY WALL']} />
        <mesh geometry={nodes.Mesh_159.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes.Mesh_160.geometry} material={materials['DARK GRAY WALL']} />
        <mesh geometry={nodes.Mesh_181.geometry} material={materials['GRAY WALL']}>
          <mesh geometry={nodes['Component#2016'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#2017'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#2018'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#2019'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#2020'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#2021'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#2022'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#2023'].geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_165.geometry} material={materials['GRAY WALL']} />
          <mesh geometry={nodes.Mesh_166.geometry} material={materials['GRAY WALL']} />
          <mesh geometry={nodes.Mesh_167.geometry} material={materials['GRAY WALL']} />
          <mesh geometry={nodes.Mesh_168.geometry} material={materials['GRAY WALL']} />
          <mesh geometry={nodes.Mesh_169.geometry} material={materials['GRAY WALL']} />
          <mesh geometry={nodes.Mesh_178_1.geometry} material={materials['GRAY WALL']} />
          <mesh geometry={nodes.Mesh_178_2.geometry} material={materials['Tile Various Tan']} />
          <mesh geometry={nodes.Mesh_179.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
          <mesh geometry={nodes.Mesh_180.geometry} material={materials['GRAY WALL']} />
        </mesh>
        <mesh geometry={nodes.Mesh_212.geometry} material={materials['tile']} material-color={props.customColors.tile}/>
        <mesh geometry={nodes.Mesh_230.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
        <mesh geometry={nodes.Mesh_35_1.geometry} material={materials['GRAY WALL']} />
        <mesh geometry={nodes.Mesh_35_2.geometry} material={materials['Tile Various Tan']} />
        <mesh geometry={nodes.Mesh_35_3.geometry} material={materials['WOOD 3']} />
        <mesh geometry={nodes.Mesh_35_4.geometry} material={materials['BALCONY 1']} />
        <mesh geometry={nodes.Mesh_36.geometry} material={materials['WOOD 3']} />
        <mesh geometry={nodes.Mesh_69.geometry} material={materials['CLEAR GLASS']}>
          <mesh geometry={nodes['Component#14008'].geometry} material={materials['CLEAR GLASS']}>
            <mesh geometry={nodes.Mesh_56.geometry} material={materials['WINDOW FRAME 1']}>
              <mesh geometry={nodes.Mesh_53.geometry} material={materials['WINDOW FRAME 1']} />
              <mesh geometry={nodes.Mesh_54.geometry} material={materials['WINDOW FRAME 1']} />
              <mesh geometry={nodes.Mesh_55.geometry} material={materials['WINDOW FRAME 1']} />
            </mesh>
          </mesh>
          <mesh geometry={nodes['Component#14009'].geometry} material={materials['CLEAR GLASS']}>
            <mesh geometry={nodes.Mesh_61.geometry} material={materials['WINDOW FRAME 1']}>
              <mesh geometry={nodes.Mesh_58.geometry} material={materials['WINDOW FRAME 1']} />
              <mesh geometry={nodes.Mesh_59.geometry} material={materials['WINDOW FRAME 1']} />
              <mesh geometry={nodes.Mesh_60.geometry} material={materials['WINDOW FRAME 1']} />
            </mesh>
          </mesh>
          <mesh geometry={nodes['Component#14010'].geometry} material={materials['CLEAR GLASS']}>
            <mesh geometry={nodes.Mesh_66.geometry} material={materials['WINDOW FRAME 1']}>
              <mesh geometry={nodes.Mesh_63.geometry} material={materials['WINDOW FRAME 1']} />
              <mesh geometry={nodes.Mesh_64.geometry} material={materials['WINDOW FRAME 1']} />
              <mesh geometry={nodes.Mesh_65.geometry} material={materials['WINDOW FRAME 1']} />
            </mesh>
          </mesh>
          <mesh geometry={nodes.Mesh_52.geometry} material={materials['interior']} material-color={props.customColors.interior}/>
          <mesh geometry={nodes.Mesh_68.geometry} material={materials['WINDOW FRAME 1']} />
        </mesh>
        <mesh geometry={nodes.Mesh_80.geometry} material={materials['default material']}>
          <mesh geometry={nodes['Component#2'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#2001'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#2002'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#2003'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#2004'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#2005'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#2006'].geometry} material={materials['default material']} />
          <mesh geometry={nodes['Component#2007'].geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_70.geometry} material={materials['default material']} />
          <mesh geometry={nodes.Mesh_71.geometry} material={materials['default material']} />
        </mesh>
        <mesh geometry={nodes.Mesh_96_1.geometry} material={materials['GRAY WALL']} />
        <mesh geometry={nodes.Mesh_96_2.geometry} material={materials['DARK GRAY WALL']} />
        <mesh geometry={nodes.Mesh_1.geometry} material={materials['default material']} />
        <mesh geometry={nodes.Mesh_1_1.geometry} material={materials['Blacktop Old 01']} />
        <mesh geometry={nodes.Mesh_1_2.geometry} material={materials.Material6} />
        <mesh geometry={nodes.Mesh_1_3.geometry} material={materials['Grass Dark Green']} />
        <mesh geometry={nodes.Mesh_0.geometry} material={materials['Fence']} material-color={props.customColors.Fence}/>
      </group>
    )
  }

  function Model5() {
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
                 
                </div>
            </div>
      </div>
       </div>
  </div>
    );
  }
  
  export default Model5;
  