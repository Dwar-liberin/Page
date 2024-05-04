
    import {
      loadGLTF,
      loadTexture,
      loadTextures,
      loadVideo,
    } from "https://cdn.jsdelivr.net/gh/Dwar-liberin/dwar-lib/libs/loader.js";

    const THREE = window.MINDAR.IMAGE.THREE;

    document.addEventListener("DOMContentLoaded", () => {

    async function start(){

      
 
  const mindThree =  new window.MINDAR.IMAGE.MindARThree({
    container: document.body,
    imageTargetSrc: "assets/target.mind",
    uiLoading: "#scanning-overlay",
  });

  const { renderer, scene, camera } = mindThree;
  const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
  scene.add(light);


  const loadFont = () => {
    return new Promise((resolve, reject) => {
      const loader = new THREE.FontLoader();

      loader.load(
        "https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples/fonts/helvetiker_regular.typeface.json",
        (font) => {
          resolve(font); // Resolve the promise with the loaded font
        },
        undefined, // Progress callback (optional)
        (error) => {
          reject(error); // Reject the promise with the error
        }
      );
    });
  };

  const font = await loadFont();
  

  
    
      const target_image209b7e1b90a_iconGeometry = new THREE.PlaneGeometry(1, 0.75);
   const target_image209b7e1b90a_texture = await loadTexture("assets/Jockey-Juniors.png");
  const target_image209b7e1b90a_image = new THREE.MeshBasicMaterial({
      map: target_image209b7e1b90a_texture,
    });
    const target_image209b7e1b90a = new THREE.Mesh(target_image209b7e1b90a_iconGeometry, target_image209b7e1b90a_image);
    target_image209b7e1b90a.scale.set(1, 1, 1);
    target_image209b7e1b90a.position.set(0, 0, 0);
    target_image209b7e1b90a.rotation.set(-0.001, 0, 0);
    

    const video_asset_a0a53c5e28f_planeGeometry = new THREE.PlaneGeometry(1, 0.5625);

    const video_asset_a0a53c5e28f_Item0Video = await loadVideo("assets/Jockey-Juniors.mp4");

    const video_asset_a0a53c5e28f_Item0VideoTexture = new THREE.VideoTexture(
      video_asset_a0a53c5e28f_Item0Video
    );

    const video_asset_a0a53c5e28f_Item0VideoMaterial = new THREE.MeshBasicMaterial({
      map: video_asset_a0a53c5e28f_Item0VideoTexture,
    });

     const video_asset_a0a53c5e28f = new THREE.Mesh(
      video_asset_a0a53c5e28f_planeGeometry,
      video_asset_a0a53c5e28f_Item0VideoMaterial
    );

  video_asset_a0a53c5e28f.position.set(0, -0.3, 0.7);

  const isIOS = navigator.appVersion.indexOf("Mac") != -1 ? true : false;

  video_asset_a0a53c5e28f_Item0Video.muted=isIOS
  video_asset_a0a53c5e28f_Item0Video.loop=true;
  
  video_asset_a0a53c5e28f.scale.set(1.6, 1.6, 1.6);

    video_asset_a0a53c5e28f.rotation.set(-0.001, 0, 0);

    
  
const logo_ca8b8c0e_c6cbca8b8_iconGeometry = new THREE.CircleGeometry(0.5,32);
   const logo_ca8b8c0e_c6cbca8b8_texture = await loadTexture("assets/circle-web-sm_114.png");
  const logo_ca8b8c0e_c6cbca8b8_image = new THREE.MeshBasicMaterial({
      map: logo_ca8b8c0e_c6cbca8b8_texture,
    });
    const logo_ca8b8c0e_c6cbca8b8 = new THREE.Mesh(logo_ca8b8c0e_c6cbca8b8_iconGeometry, logo_ca8b8c0e_c6cbca8b8_image);
    logo_ca8b8c0e_c6cbca8b8.scale.set(0.4, 0.4, 1);
    logo_ca8b8c0e_c6cbca8b8.position.set(-0.8, -0.9, 0);
    logo_ca8b8c0e_c6cbca8b8.rotation.set(-0.001, 0, 0);
    logo_ca8b8c0e_c6cbca8b8.userData.clickable = true
const logo_c913e25d_0364c913e_iconGeometry = new THREE.CircleGeometry(0.5,32);
   const logo_c913e25d_0364c913e_texture = await loadTexture("assets/circle-fb-sm_107.svg");
  const logo_c913e25d_0364c913e_image = new THREE.MeshBasicMaterial({
      map: logo_c913e25d_0364c913e_texture,
    });
    const logo_c913e25d_0364c913e = new THREE.Mesh(logo_c913e25d_0364c913e_iconGeometry, logo_c913e25d_0364c913e_image);
    logo_c913e25d_0364c913e.scale.set(0.4, 0.4, 1);
    logo_c913e25d_0364c913e.position.set(0.3, 0, 0);
    logo_c913e25d_0364c913e.rotation.set(-0.001, 0, 0);
    
const square_facebook_a6a6fae_iconGeometry = new THREE.PlaneGeometry(1, 0.3);
   const square_facebook_a6a6fae_texture = await loadTexture("assets/square-facebook_102.svg");
  const square_facebook_a6a6fae_image = new THREE.MeshBasicMaterial({
      map: square_facebook_a6a6fae_texture,
    });
    const square_facebook_a6a6fae = new THREE.Mesh(square_facebook_a6a6fae_iconGeometry, square_facebook_a6a6fae_image);
    square_facebook_a6a6fae.scale.set(0.4, 0.4, 1);
    square_facebook_a6a6fae.position.set(0.4, -0.4, 0);
    square_facebook_a6a6fae.rotation.set(-0.001, 0, 0);
    
const square_facebook_5f5f880_iconGeometry = new THREE.PlaneGeometry(1, 0.3);
   const square_facebook_5f5f880_texture = await loadTexture("assets/square-facebook_102.svg");
  const square_facebook_5f5f880_image = new THREE.MeshBasicMaterial({
      map: square_facebook_5f5f880_texture,
    });
    const square_facebook_5f5f880 = new THREE.Mesh(square_facebook_5f5f880_iconGeometry, square_facebook_5f5f880_image);
    square_facebook_5f5f880.scale.set(0.9, 0.9, 0.9);
    square_facebook_5f5f880.position.set(0, -0.9, 0);
    square_facebook_5f5f880.rotation.set(-0.001, 0, 0);
    
const square_ins_sm_c6dac6da7_iconGeometry = new THREE.PlaneGeometry(1, 1);
   const square_ins_sm_c6dac6da7_texture = await loadTexture("assets/square-ins-sm_108.svg");
  const square_ins_sm_c6dac6da7_image = new THREE.MeshBasicMaterial({
      map: square_ins_sm_c6dac6da7_texture,
    });
    const square_ins_sm_c6dac6da7 = new THREE.Mesh(square_ins_sm_c6dac6da7_iconGeometry, square_ins_sm_c6dac6da7_image);
    square_ins_sm_c6dac6da7.scale.set(0.4, 0.4, 1);
    square_ins_sm_c6dac6da7.position.set(0.9, -0.8, 0);
    square_ins_sm_c6dac6da7.rotation.set(-0.001, 0, 0);
    square_ins_sm_c6dac6da7.userData.clickable = true
      
       document.body.addEventListener("click", (e) => {
    const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

    const mouse = new THREE.Vector2(mouseX, mouseY);
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      let o = intersects[0].object;

      while (o.parent && !o.userData?.clickable) {
        o = o.parent;
      }

      // if button is clickable then loading screen is show. And when user redirect to the screen loader automatically gone because script is change.
      
      if (o.userData.clickable) window.showLoadingScreen();

      
      if (o.userData.clickable && o === logo_ca8b8c0e_c6cbca8b8) {
        setTimeout(()=>{
          window.location.href = "https://www.jockey.in/pages/kids"
        },100)
        }
      

      if (o.userData.clickable && o === square_ins_sm_c6dac6da7) {
        setTimeout(()=>{
          window.location.href = "https://www.instagram.com/jockeyindia/?hl=en"
        },100)
        }
      
      }

    })
    
      
    const anchor =  mindThree.addAnchor(0);
    anchor.group.add(target_image209b7e1b90a)
anchor.group.add(video_asset_a0a53c5e28f)
anchor.group.add(logo_ca8b8c0e_c6cbca8b8)
anchor.group.add(logo_c913e25d_0364c913e)
anchor.group.add(square_facebook_a6a6fae)
anchor.group.add(square_facebook_5f5f880)
anchor.group.add(square_ins_sm_c6dac6da7)


      anchor.onTargetFound = () => {
      video_asset_a0a53c5e28f_Item0Video.play();
    };


    anchor.onTargetLost = () => {
       video_asset_a0a53c5e28f_Item0Video.pause();
    }
      
    await mindThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
    
    }
    start();
    })
    
    