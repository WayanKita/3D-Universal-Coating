let objectMaterial = new THREE.MeshPhongMaterial( { color: "#ffffff", wireframe: false, flatShading: true} );
function ObjectParticle(){
    this.headRhombic = new THREE.Mesh( RhombicDodecahedronGeometry, objectMaterial);
    this.head = new THREE.Object3D().add(this.headRhombic);
}

