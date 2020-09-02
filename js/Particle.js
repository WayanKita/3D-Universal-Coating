var cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0x000000} )

function Particle(){
    this.role = "temp";
    this.material = new THREE.MeshPhongMaterial( { color: "#00ff00", wireframe: false, flatShading: true} );
    // this.material = new THREE.MeshNormalMaterial({flatShading: true});
    this.headRhombic = new THREE.Mesh( RhombicDodecahedronGeometry, this.material);
    this.tailRhombic = new THREE.Mesh( RhombicDodecahedronGeometry, this.material);
    this.headPoint = new THREE.Mesh( new THREE.SphereGeometry( 0.5, 32, 32 ), new THREE.MeshBasicMaterial( {color: 0x000000, wireframe: false} ));
    this.tailPoint = new THREE.Mesh( new THREE.SphereGeometry( 0.5, 32, 32 ), new THREE.MeshBasicMaterial( {color: 0x000000, wireframe: false} ));
    // this.head = new THREE.Object3D().add(this.headRhombic, this.headPoint);
    this.head = new THREE.Object3D().add(this.headRhombic, this.headPoint);
    // this.tail = new THREE.Object3D().add(this.tailRhombic, this.tailPoint);
    this.tail = new THREE.Object3D().add(this.tailRhombic, this.tailPoint);
    this.target = [];
    this.target0 = new THREE.Mesh( new THREE.ConeBufferGeometry( 0.3, 0.7, 3, 1, true).applyMatrix4( new THREE.Matrix4().makeRotationX( Math.PI / 2 ) ), new THREE.MeshBasicMaterial( {color: 0x000000} ) );
    this.target1 = new THREE.Mesh( new THREE.ConeBufferGeometry( 0.3, 0.7, 3, 1, true).applyMatrix4( new THREE.Matrix4().makeRotationX( Math.PI / 2 ) ), new THREE.MeshBasicMaterial( {color: 0x000000} ) );

    // this.target0 = new THREE.LineSegments(new THREE.BufferGeometry(), new THREE.LineDashedMaterial({color: 0xff00ff, dashSize: 0.1, gapSize: 0.1 }));
    // this.target1 = new THREE.LineSegments(new THREE.BufferGeometry(), new THREE.LineDashedMaterial({color: 0x00ffff, dashSize: 0.1, gapSize: 0.1 }));
    // this.headTailConnection = new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints( [this.head.position, this.tail.position] ), new THREE.MeshBasicMaterial({color: 0x000000 }));
    this.headTailConnection = new THREE.Mesh( new THREE.CylinderBufferGeometry( 0.1, 0.1, 2, 3, 1, true).applyMatrix4( new THREE.Matrix4().makeRotationX( Math.PI / 2 ) ), new THREE.MeshBasicMaterial( {color: 0xffff00} ) );

    this.isContracted = true;
    this.leaderPointer = new THREE.Vector3(0,0,0);
    this.oldLeaderPointer = new THREE.Vector3(0,0,0);


    this.contractParticle = function () {
        this.tail.position.set(this.head.position.x, this.head.position.y, this.head.position.z);
        this.tail.visible = false;
        this.headTailConnection.visible = false;
        this.isContracted = true;
    }

    this.updateSingleTarget = function(target){
        if((this.head.position.distanceTo(target) > 2.9) || (this.tail.position.distanceTo(target) > 5.7)){
            console.log(this.head.position.distanceTo(target), this.tail.position.distanceTo(target));
        }
        this.target = [];
        this.target.push(target);
    }

    this.expandParticle = function(destinationNode){

        this.tail.position.set(this.head.position.x, this.head.position.y, this.head.position.z);
        this.tail.visible = true;
        this.head.position.set(destinationNode.x, destinationNode.y, destinationNode.z);
        // this.headTailConnection.geometry.setFromPoints([this.head.position, this.tail.position]);
        this.headTailConnection.visible = true;
        this.isContracted = false;
    }


    this.moveParticle = function(destinationNode){
        this.headRhombic.position.set(destinationNode.x, destinationNode.y, destinationNode.z)
    }

    this.convertToRole = function(role){
        switch (role) {
            case "Inactive":
                this.role = "Inactive";
                this.setParticleColor(0xcab2d6);
                break;
            case "Retired":
                this.role = "Retired";
                this.setParticleColor(0x6a3d9a);
                break;
            case "Follower":
                this.role = "Follower";
                this.setParticleColor(0x1f78b4);
                break;
            case "Coater":
                this.role = "Coater";
                this.setParticleColor(0xa6cee3);
                break;
            case "Leader":
                this.role = "Leader";
                this.setParticleColor(0xff7f00);
                break;
            case "SmallLeader":
                this.role = "SmallLeader";
                // this.setParticleColor(0xfdbf6f);
                this.setParticleColor(0xFFA449);
                break;
            case "SuperLeader":
                this.role = "SuperLeader";
                this.setParticleColor(0xe31a1c);
                break;
            case "SmallSuperLeader":
                this.role = "SmallSuperLeader";
                // this.setParticleColor(0xfb9a99);
                this.setParticleColor(0xE83B3E);
                break;
            case "Bridge":
                this.role = "Bridge";
                this.setParticleColor(0xFFFF07);
                break;
            case "SmallBridge":
                this.role = "SmallBridge";
                this.setParticleColor(0xffff99);
                break;
            case "Branch":
                this.role = "Branch";
                this.setParticleColor(0x583B23);
                break;
            case "SmallBranch":
                this.role = "SmallBranch";
                // this.setParticleColor(0xb15928);
                this.setParticleColor(0x7F5533);
                break;
            case "Leaf":
                this.role = "Leaf";
                this.target = [];
                this.setParticleColor(0x33a02c);
                break;
            case "Boundary":
                this.role = "Boundary";
                this.setParticleColor(0xffffff);
                break;
            default:
                this.role = "Inactive"
                this.setParticleColor(0x000000);

        }
    }

    this.setParticleColor = function(color){
        this.headRhombic.material.color.set(color);
        this.headPoint.material.color.set(color);
        this.tailRhombic.material.color.set(color);
        this.tailPoint.material.color.set(color);
        this.headTailConnection.material.color.set(color);
    }

    this.getPosAtFaceI = function(faceNumber, fromHead = true){
        let particlePos;
        if(fromHead){
            particlePos = this.head.position;
        }else{
            particlePos = this.tail.position;
        }

        let nbrParticlePos = new THREE.Vector3( 0, 0, 0 );
        switch(faceNumber) {
            case 0:
                nbrParticlePos.setX( particlePos.x );
                nbrParticlePos.setY( particlePos.y + 2 );
                nbrParticlePos.setZ( particlePos.z + 2 );
                break;
            case 1:
                nbrParticlePos.setX( particlePos.x + 2 );
                nbrParticlePos.setY( particlePos.y );
                nbrParticlePos.setZ( particlePos.z + 2 );
                break;
            case 2:
                nbrParticlePos.setX( particlePos.x );
                nbrParticlePos.setY( particlePos.y - 2 );
                nbrParticlePos.setZ( particlePos.z + 2 );
                break;
            case 3:
                nbrParticlePos.setX( particlePos.x - 2 );
                nbrParticlePos.setY( particlePos.y );
                nbrParticlePos.setZ( particlePos.z + 2 );
                break;
            case 4:
                nbrParticlePos.setX( particlePos.x );
                nbrParticlePos.setY( particlePos.y - 2 );
                nbrParticlePos.setZ( particlePos.z - 2 );
                break;
            case 5:
                nbrParticlePos.setX( particlePos.x - 2 );
                nbrParticlePos.setY( particlePos.y );
                nbrParticlePos.setZ( particlePos.z - 2 );
                break;
            case 6:
                nbrParticlePos.setX( particlePos.x );
                nbrParticlePos.setY( particlePos.y + 2 );
                nbrParticlePos.setZ( particlePos.z - 2 );
                break;
            case 7:
                nbrParticlePos.setX( particlePos.x + 2 );
                nbrParticlePos.setY( particlePos.y );
                nbrParticlePos.setZ( particlePos.z - 2 );
                break;
            case 8:
                nbrParticlePos.setX( particlePos.x - 2 );
                nbrParticlePos.setY( particlePos.y + 2 );
                nbrParticlePos.setZ( particlePos.z );
                break;
            case 9:
                nbrParticlePos.setX( particlePos.x - 2 );
                nbrParticlePos.setY( particlePos.y - 2 );
                nbrParticlePos.setZ( particlePos.z );
                break;
            case 10:
                nbrParticlePos.setX( particlePos.x + 2);
                nbrParticlePos.setY( particlePos.y + 2 );
                nbrParticlePos.setZ( particlePos.z );
                break;
            case 11:
                nbrParticlePos.setX( particlePos.x + 2 );
                nbrParticlePos.setY( particlePos.y - 2 );
                nbrParticlePos.setZ( particlePos.z );
                break;
            default:
                console.log("Error, get nbr particle to face failed");
                return nbrParticlePos;
        }
        return nbrParticlePos;

    }



}

