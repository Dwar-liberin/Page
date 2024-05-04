
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
  

  
    
      const target_imagef06c5e303f4_iconGeometry = new THREE.PlaneGeometry(1, 1);
   const target_imagef06c5e303f4_texture = await loadTexture("assets/Page.png");
  const target_imagef06c5e303f4_image = new THREE.MeshBasicMaterial({
      map: target_imagef06c5e303f4_texture,
    });
    const target_imagef06c5e303f4 = new THREE.Mesh(target_imagef06c5e303f4_iconGeometry, target_imagef06c5e303f4_image);
    target_imagef06c5e303f4.scale.set(1, 1, 1);
    target_imagef06c5e303f4.position.set(0, 0, 0);
    target_imagef06c5e303f4.rotation.set(-0.001, 0, 0);
    

    const video_asset_a412e52f8f1_planeGeometry = new THREE.PlaneGeometry(1, 0.5625);

    const video_asset_a412e52f8f1_Item0Video = await loadVideo("assets/Page.mp4");

    const video_asset_a412e52f8f1_Item0VideoTexture = new THREE.VideoTexture(
      video_asset_a412e52f8f1_Item0Video
    );

    const video_asset_a412e52f8f1_Item0VideoMaterial = new THREE.MeshBasicMaterial({
      map: video_asset_a412e52f8f1_Item0VideoTexture,
    });

     const video_asset_a412e52f8f1 = new THREE.Mesh(
      video_asset_a412e52f8f1_planeGeometry,
      video_asset_a412e52f8f1_Item0VideoMaterial
    );

  video_asset_a412e52f8f1.position.set(0, 0, 0);

  const isIOS = navigator.appVersion.indexOf("Mac") != -1 ? true : false;

  video_asset_a412e52f8f1_Item0Video.muted=isIOS
  video_asset_a412e52f8f1_Item0Video.loop=true;
  
  video_asset_a412e52f8f1.scale.set(2, 2, 2);

    video_asset_a412e52f8f1.rotation.set(-0.001, 0, 0);

    
  
const logo_70d201a1_564870d20_iconGeometry = new THREE.CircleGeometry(0.5,32);
   const logo_70d201a1_564870d20_texture = await loadTexture("assets/circle-web-sm_114.png");
  const logo_70d201a1_564870d20_image = new THREE.MeshBasicMaterial({
      map: logo_70d201a1_564870d20_texture,
    });
    const logo_70d201a1_564870d20 = new THREE.Mesh(logo_70d201a1_564870d20_iconGeometry, logo_70d201a1_564870d20_image);
    logo_70d201a1_564870d20.scale.set(0.4, 0.4, 1);
    logo_70d201a1_564870d20.position.set(-0.8, -1, 0);
    logo_70d201a1_564870d20.rotation.set(-0.001, 0, 0);
    logo_70d201a1_564870d20.userData.clickable = true
const logo_021dcff2_6a82021dc_iconGeometry = new THREE.CircleGeometry(0.5,32);
   const logo_021dcff2_6a82021dc_texture = await loadTexture("assets/circle-mail-sm_125.png");
  const logo_021dcff2_6a82021dc_image = new THREE.MeshBasicMaterial({
      map: logo_021dcff2_6a82021dc_texture,
    });
    const logo_021dcff2_6a82021dc = new THREE.Mesh(logo_021dcff2_6a82021dc_iconGeometry, logo_021dcff2_6a82021dc_image);
    logo_021dcff2_6a82021dc.scale.set(0.4, 0.4, 1);
    logo_021dcff2_6a82021dc.position.set(0.8, -1, 0);
    logo_021dcff2_6a82021dc.rotation.set(-0.001, 0, 0);
    logo_021dcff2_6a82021dc.userData.clickable = true
const square_facebook_0e0ee02_iconGeometry = new THREE.PlaneGeometry(1, 0.3);
   const square_facebook_0e0ee02_texture = await loadTexture("assets/square-facebook_102.svg");
  const square_facebook_0e0ee02_image = new THREE.MeshBasicMaterial({
      map: square_facebook_0e0ee02_texture,
    });
    const square_facebook_0e0ee02 = new THREE.Mesh(square_facebook_0e0ee02_iconGeometry, square_facebook_0e0ee02_image);
    square_facebook_0e0ee02.scale.set(1, 1, 1);
    square_facebook_0e0ee02.position.set(0, -1, 0);
    square_facebook_0e0ee02.rotation.set(-0.001, 0, 0);
    square_facebook_0e0ee02.userData.clickable = true
      
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

      
      if (o.userData.clickable && o === logo_70d201a1_564870d20) {
        setTimeout(()=>{
          window.location.href = "https://www.jockey.in/"
        },100)
        }
      

      if (o.userData.clickable && o === logo_021dcff2_6a82021dc) {
        setTimeout(()=>{
          window.location.href = "mailto:wecare@jockeyindia.com"
        },100)
        }
      

      if (o.userData.clickable && o === square_facebook_0e0ee02) {
        setTimeout(()=>{
          window.location.href = "https://www.facebook.com/jockeyindia"
        },100)
        }
      
      }

    })
    
      
    const anchor =  mindThree.addAnchor(0);
    anchor.group.add(target_imagef06c5e303f4)
anchor.group.add(video_asset_a412e52f8f1)
anchor.group.add(logo_70d201a1_564870d20)
anchor.group.add(logo_021dcff2_6a82021dc)
anchor.group.add(square_facebook_0e0ee02)


      anchor.onTargetFound = () => {
      video_asset_a412e52f8f1_Item0Video.play();
    };


    anchor.onTargetLost = () => {
       video_asset_a412e52f8f1_Item0Video.pause();
    }
      
    await mindThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
    
    }
    start();
    })
    
    