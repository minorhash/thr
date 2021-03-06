var camera,
    tick = 0,
    scene,
    renderer,
    clock = new THREE.Clock(true),
    container,
    options,
    spawnerOptions,
    particleSystem;

function init() {

    var winSize = getWindowSize();
    container = document.createElement('div');
    document.body.appendChild(container);

    camera = new THREE.PerspectiveCamera(28,
        winSize.aspect*0.2,
        1,
        10000);
    camera.position.z = 100;

    scene = new THREE.Scene();

    // The GPU Particle system extends THREE.Object3D, and so you can use it
    // as you would any other scene graph component. Particle positions will be
    // relative to the position of the particle system, but you will probably only need one
    // system for your whole scene
    particleSystem = new THREE.GPUParticleSystem({
        maxParticles: 250000
    });
    scene.add(particleSystem);

    // options passed during each spawned
    options = {
        position: new THREE.Vector3(),
        positionRandomness: 3,
        velocity: new THREE.Vector3(),
        velocityRandomness: 5,
        color: 0xaa88ff,
        colorRandomness: 10,
        turbulence: 10,
        lifetime: 10,
        size: 2,
        sizeRandomness: 10
    };

    spawnerOptions = {
        spawnRate: 3260,
        horizontalSpeed: 1.2,
        verticalSpeed: 1.4,
        timeScale: 1
    }

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize, false);

}

function onWindowResize() {
    var winSize = getWindowSize();
    camera.aspect = winSize.aspect*0.2;
    camera.updateProjectionMatrix();

    renderer.setSize(winSize.width, winSize.height);

}

function getWindowSize() {
    return {
        'width': window.innerWidth,
        'height': window.innerHeight,
        'aspect': (window.innerWidth / window.innerHeight)
    };
}

function animate() {

    requestAnimationFrame(animate);

    var delta = clock.getDelta() * spawnerOptions.timeScale;
    tick += delta;

    if (tick < 0) tick = 0;

    if (delta > 0) {
        options.position.x = Math.sin(tick * spawnerOptions.horizontalSpeed) * 20;
        options.position.y = Math.sin(tick * spawnerOptions.verticalSpeed) * 10;
        options.position.z = Math.sin(tick * spawnerOptions.horizontalSpeed + spawnerOptions.verticalSpeed) * 5;

        for (var x = 0; x < spawnerOptions.spawnRate * delta; x++) {
            // Yep, that's really it.   Spawning particles is super cheap, and once you spawn them, the rest of
            // their lifecycle is handled entirely on the GPU, driven by a time uniform updated below
            particleSystem.spawnParticle(options);
        }
    }

    particleSystem.update(tick);

    render();
}

function render() {
    renderer.render(scene, camera);
}

// INIT!
init();
animate();
