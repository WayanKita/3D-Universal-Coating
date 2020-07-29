function Particle(){
    this.role = "temp";
    this.color = "#ff00ff";
    this.material = new THREE.MeshPhongMaterial( { color: "#00ff00", wireframe: false, flatShading: true} );
    this.headRhombic = new THREE.Mesh( RhombicDodecahedronGeometry, this.material);
    this.tailRhombic = new THREE.Mesh( RhombicDodecahedronGeometry, this.material);
    this.headPoint = new THREE.Mesh( new THREE.SphereGeometry( 0.5, 32, 32 ), new THREE.MeshBasicMaterial( {color: 0x000000, wireframe: false} ));
    this.tailPoint = new THREE.Mesh( new THREE.SphereGeometry( 0.5, 32, 32 ), new THREE.MeshBasicMaterial( {color: 0x000000, wireframe: false} ));
    this.orientation = 0;
    this.head = new THREE.Object3D().add(this.headRhombic, this.headPoint);
    this.tail = new THREE.Object3D().add(this.tailRhombic, this.tailPoint);
    this.target = [];
    this.target0 = new THREE.LineSegments(new THREE.BufferGeometry(), new THREE.LineDashedMaterial({color: 0xff00ff, dashSize: 0.1, gapSize: 0.1 }));
    this.target1 = new THREE.LineSegments(new THREE.BufferGeometry(), new THREE.LineDashedMaterial({color: 0x00ffff, dashSize: 0.1, gapSize: 0.1 }));
    // this.targetConnection = new THREE.ArrowHelper(this.head.position)
    this.headTailConnection = new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints( [this.head.position, this.tail.position] ), new THREE.MeshBasicMaterial({color: 0x000000 }));
    this.isContracted = true;



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
        this.headTailConnection.geometry.setFromPoints([this.head.position, this.tail.position]);
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
                this.setParticleColor(0x6C757D);
                break;
            case "Retired":
                this.role = "Retired";
                this.setParticleColor(0x121417);
                break;
            case "Follower":
                this.role = "Follower";
                this.setParticleColor(0x477AC2);
                break;
            case "Coater":
                this.role = "Coater";
                this.setParticleColor(0x1D3557);
                break;
            case "Leader":
                this.role = "Leader";
                this.setParticleColor(0xCF2626);
                break;
            case "SmallLeader":
                this.role = "SmallLeader";
                this.setParticleColor(0xEA6C1B);
                break;
            case "SuperLeader":
                this.role = "SuperLeader";
                this.setParticleColor(0xEA6C1B);
                break;
            case "Bridge":
                this.role = "Bridge";
                this.setParticleColor(0x583B23);
                break;
            case "Branch":
                this.role = "Branch";
                this.setParticleColor(0x583B23);
                break;
            case "SmallBranch":
                this.role = "SmallBranch";
                this.setParticleColor(0x754E2F);
                break;
            case "Leaf":
                this.role = "Leaf";
                this.target = [];
                this.setParticleColor(0x04471C);
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

    this.getPosAtFaceI = function(faceNumber){
        var particlePos = this.head.position;
        var nbrParticlePos = new THREE.Vector3( 0, 0, 0 );
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
                // code block
                break;
            case 2:
                nbrParticlePos.setX( particlePos.x );
                nbrParticlePos.setY( particlePos.y - 2 );
                nbrParticlePos.setZ( particlePos.z + 2 );
                // code block
                break;
            case 3:
                nbrParticlePos.setX( particlePos.x - 2 );
                nbrParticlePos.setY( particlePos.y );
                nbrParticlePos.setZ( particlePos.z + 2 );
                // code block
                break;
            case 4:
                nbrParticlePos.setX( particlePos.x );
                nbrParticlePos.setY( particlePos.y - 2 );
                nbrParticlePos.setZ( particlePos.z - 2 );
                // code block
                break;
            case 5:
                nbrParticlePos.setX( particlePos.x - 2 );
                nbrParticlePos.setY( particlePos.y );
                nbrParticlePos.setZ( particlePos.z - 2 );
                // code block
                break;
            case 6:
                nbrParticlePos.setX( particlePos.x );
                nbrParticlePos.setY( particlePos.y + 2 );
                nbrParticlePos.setZ( particlePos.z - 2 );
                // code block
                break;
            case 7:
                nbrParticlePos.setX( particlePos.x + 2 );
                nbrParticlePos.setY( particlePos.y );
                nbrParticlePos.setZ( particlePos.z - 2 );
                // code block
                break;
            case 8:
                nbrParticlePos.setX( particlePos.x - 2 );
                nbrParticlePos.setY( particlePos.y + 2 );
                nbrParticlePos.setZ( particlePos.z );
                // code block
                break;
            case 9:
                nbrParticlePos.setX( particlePos.x - 2 );
                nbrParticlePos.setY( particlePos.y - 2 );
                nbrParticlePos.setZ( particlePos.z );
                // code block
                break;
            case 10:
                nbrParticlePos.setX( particlePos.x + 2);
                nbrParticlePos.setY( particlePos.y + 2 );
                nbrParticlePos.setZ( particlePos.z );
                // code block
                break;
            case 11:
                nbrParticlePos.setX( particlePos.x + 2 );
                nbrParticlePos.setY( particlePos.y - 2 );
                nbrParticlePos.setZ( particlePos.z );
                // code block
                break;
            default:
                console.log("Error, get nbr particle to face failed");
                return nbrParticlePos;
        }
        return nbrParticlePos;

    }



}

