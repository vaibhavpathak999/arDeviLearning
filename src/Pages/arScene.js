import React, {useState} from 'react';
import ShowModel from "./js/main.js";
// import 'aframe';
// import 'aframe-particle-system-component';
// import {Entity, Scene} from 'aframe-react';

function ARScene() {

  const [target, setTarget] = useState(null);

  function handleClick(item){
    const selectedModel = ShowModel(item);
    setTarget(selectedModel);
  }
  
  return (
    <div>
      <a-scene embedded arjs="sourceType: webcam; debugUIEnabled: false">
        <a-assets>
          <a-asset-item
            id="rod"
            src="./models/neon_rod/1614020019_rodanim.gltf"
            response-type="arraybuffer"
          ></a-asset-item>
          <a-asset-item
            id="coin"
            src="./models/goldcoin/1614195419_gcgoldcoin.gltf"
            response-type="arraybuffer"
          ></a-asset-item>
          <a-asset-item
            id="flower"
            src="./models/Flower/1614019830_flowerhash.gltf"
            response-type="arraybuffer"
          ></a-asset-item>
          <a-asset-item
            id="snow_flake"
            src="./models/snow_flake/1614195052_flakesnowflake.gltf"
            response-type="arraybuffer"
          ></a-asset-item>
          <a-asset-item
            id="devi"
            position="0 0 0"
            src="./models/ar_devi/edevi.glb"
            response-type="arraybuffer"
          ></a-asset-item>

        </a-assets>
        <a-entity
          position="0 -0.5 -5"
          scale="1.5 1.5 1.5"
          gltf-model="#devi"
          animation-mixer
        ></a-entity>
        <a-entity
          camera
          look-controls
          id="cursor-container"
          position="0 0 0"
        ></a-entity>

        <a-gltf-model
          id={target}
          cursor-listener
          animation-mixer
        >
          {/* <!a-animation begin="start" end="stop" attribute="rotation" from="0 0 0" to="0 180 0" repeat="indefinite" dur="1000"><!/a-animation> */}
        </a-gltf-model>
      </a-scene>

      {/* onClick = {handleClick("rod")}
      onClick = {handleClick("coin")}
      onClick = {handleClick("flower")}
      onClick = {handleClick("snow_flake")} */}

      <div className="btn-group btn-group-justified menu" role="group" aria-label="...">
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-default">
            <img src="https://cdn.glitch.com/9ab0fd12-d310-47a2-93e7-0bbdb85accdb%2FMask%20Group%2036.png?v=1614237505526" /></button>
        </div>
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-default"  > 
            <img src="https://cdn.glitch.com/9ab0fd12-d310-47a2-93e7-0bbdb85accdb%2FGold_Coin_00000.png?v=1614240216576" /></button>
        </div>
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-default" >
            <img src="https://cdn.glitch.com/9ab0fd12-d310-47a2-93e7-0bbdb85accdb%2FMask%20Group%2036.png?v=1614237505526" /></button>
        </div>
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-default" >
            <img src="https://cdn.glitch.com/9ab0fd12-d310-47a2-93e7-0bbdb85accdb%2FMask%20Group%2036.png?v=1614239873516" /> </button>
        </div>
      </div>
      {/* <script src="./js/mapModel.js"></script>
    <script src="./js/main.js"></script> */}
    </div>
  )
}

export default ARScene;
