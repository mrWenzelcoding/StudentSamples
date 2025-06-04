
let player
  let coyotteTime
  let nocked
  let playerSped
  let attackGroup
  let slash
  let healing
    let slashTime
    let slashVal
    let slashActive
    let slashed
    let crouchStrikeToggle
    let playerDamage
  let crouchToggle
  let healthBarBar,healthBarHealth,healthBarFill
  let health
  let healthBar
  let healthHealth
  let idleImg,attackImg,comboImg,diesImg,runImg,rollImg,crouchImg,crouchAttackImg,airbornImg,jumpImg,crouchWalkImg
  let dieTime
  let diInc
let map=[]
  let mapNum
  let tilez
  let floor
    let floorChoice=[]
  let floorBlend
  let wallL
  let wallR
  let roof
  let roofBlend
  let rock
  let door
  let oldDoor
  let barrier
  let enemySpawnIndicator
  let mapCurrent
  let stagmite
  let stagtite
  let plat
  let platOG
  let platBox
  let platST
  let platS
  let platSB
  let fence
  let gameOver
    let platpass=[]
    let platOGpass=[]
    let platBoxpass=[]
    let platSTpass=[]
  //tiles
    let stagimg
    let platimg
    let platOGimg
    let platBoximg
    let platSTimg
    let platSimg
    let upper1img
    let upper2img
    let upperRockimg
    let floorBlendimg
    let doorimg
let cameraMan
  let camSped
let enemiesSpawn
  let enemyNum=0
let enemyGroup
  let gobo=[]
    let goboLife=[]
    let goboDiesA=[]
    let goboSpawned=[]
    let goboIdle,goboDies,goboAttack,goboRun,goboHit
    let gobos
    let goboAttack1Cool=[]
    let goboSlash=[]
    let goboSlashTrig=[]
    let goboSlashDelay=[]
  let gollux=[]
    let golloms
    let gollomsAttack
    let golluxAttackA,golluxAttackB,golluxHit,golluxHeal,golluxIdle,golluxMove
    let golluxSpawned=[]
    let golluxHealth=[]
    let golluxDiesTime=[]
    let golluxAttack=[]
    let golluxATime=[]
    let golluxSlam=[]
    let golluxSlamCool=[]
    let golluxHitTime=[]
    let golluxAlive=[]
  let necro=[]
    let necros
    let necroAttack,necroDeath,necroHit,necroIdle,necroJump,necroSummon,necroWalk
    let necroSpawned=[]
    let necroHealth=[]
      let necroDiestime=[]
    let necroChoice=[]
      let necroChoices=['attack','summon']
    let necroTurning=[]
    let necroSummonCool=[]
    let necroRunTime=[]
    let necroAttackInt=[]
    let necroAttackGp
    let necroBlast=[]
    let necroAlive=[]
    let necroSummons=[]
  let skele=[]
    let skeles
      let skeleAttack,skeleAttack2,skeleAttack3,skeleDeath,skeleIdle,skeleHit,skeleWalk,skeleSwordThrown,skeleShield
    let skeleSpawned=[]
    let skeleHealth=[]
    let skeleDiesTime=[]
    let skeleTurning=[]
    let skeleCombo=[]
    let skeleAttacks
    let skeleAttackBox=[]
    let skeleAttackInt=[]
    let skeleShielded=[]
    let skeleThrown=[]
    let skeleThrownSword=[]
    let skeleSwordBreak=[]
    let skeleSwordBreaking=[]

  
let numChecker
  let checktotal=0
//music
  let shopSong
  let cavernSong
function preload(){
  //player assets /anipreload
    idleImg =loadImage('Assets/player/idle.png')
    attackImg=loadImage('Assets/player/attack.png')
    comboImg= loadImage('Assets/player/combo.png')
    diesImg = loadImage('Assets/player/DeathNoMovement.png')
    runImg = loadImage('Assets/player/run.png')
    rollImg =loadImage('Assets/player/Roll.png')
    crouchImg =loadImage('Assets/player/CrouchFull.png')
    crouchAttackImg =loadImage('Assets/player/CrouchAttack.png')
    airbornImg =loadImage('Assets/player/Fall.png')
    jumpImg =loadImage('Assets/player/Jump.png')
    crouchWalkImg=loadImage('Assets/player/CrouchWalk.png')
  //health Bar
    healthBarBar=loadImage('Assets/health_UI/bar.png')
    healthBarHealth=loadImage('Assets/health_UI/health.png')
  //enemy assets
    //goblins
      goboIdle = loadImage('Assets/gobo/Idle.png')
      goboDies = loadImage('Assets/gobo/Death.png')
      goboAttack = loadImage('Assets/gobo/Attack.png')
      goboRun =loadImage('Assets/gobo/Run.png')
      goboHit =loadImage('Assets/gobo/Take Hit.png')
    //gollux
      golluxIdle=loadImage('Assets/GollumMiniBoss/idle.png')
      golluxAttackA=loadImage('Assets/GollumMiniBoss/attackA.png')
      golluxAttackB=loadImage('Assets/GollumMiniBoss/attackB.png')
      golluxHeal=loadImage('Assets/GollumMiniBoss/healing.png')
      golluxHit=loadImage('Assets/GollumMiniBoss/hit.png')
      golluxMove=loadImage('Assets/GollumMiniBoss/move.png')
    //necro
      necroAttack =loadImage('Assets/necro/attack.png')
      necroDeath =loadImage('Assets/necro/death.png')
      necroHit =loadImage('Assets/necro/hit.png')
      necroIdle =loadImage('Assets/necro/idle.png')
      necroJump =loadImage('Assets/necro/jump.png')
      necroSummon =loadImage('Assets/necro/summon.png')
      necroWalk =loadImage('Assets/necro/walk.png')
    //skele
      skeleIdle=loadImage('Assets/skele/Idle.png')
      skeleAttack=loadImage('Assets/skele/Attack.png')
      skeleAttack2=loadImage('Assets/skele/Attack2.png')
      skeleAttack3=loadImage('Assets/skele/Attack3.png')
      skeleDeath=loadImage('Assets/skele/Death.png')
      skeleShield=loadImage('Assets/skele/Shield.png')
      skeleSwordThrown=loadImage('Assets/skele/Sword_sprite.png')
      skeleHit=loadImage('Assets/skele/Hit.png')
      skeleWalk=loadImage('Assets/skele/Walk.png')

  //landscape assets / artPreload
   stagimg=loadImage('Assets/tiles/new stag texture.png')
   platimg=loadImage('Assets/tiles/plat.png')
   platOGimg=loadImage('Assets/tiles/platOG.png')
   platBoximg=loadImage('Assets/tiles/newplatbox.png')
   platSTimg=loadImage('Assets/tiles/platStiltT.png')
   platSimg=loadImage('Assets/tiles/platStilt.png')
   upperRockimg=loadImage('Assets/tiles/upper_level_ground/rock.png')
   //upper level main lev
    upper1img = loadImage('Assets/tiles/upper_level_ground/upper ground tile 1.png')
    upper2img=loadImage('Assets/tiles/upper_level_ground/upper gorund tile 2.png')
    floorBlendimg=loadImage('Assets/tiles/upper_level_ground/upper ground tile 3.png')
    doorimg=loadImage('Assets/tiles/door.png')
  //music 
    shopSong = loadSound('Assets/songs/shopSong.mp3')
    cavernSong =loadSound('Assets/songs/z1BattleSong.mp3')
  //map
    tilez= new Group()
        tilez.w=64
        tilez.h=64
      floor= new tilez.Group()
        floor.collider='s' 
        //floor.color=color(20, 121, 50)
        floor.image=upper2img
        floor.tile='='
        floor.bounciness=0
        floor.layer=1
        //floor.debug=true
      floorBlend= new tilez.Group()
        floorBlend.collider='s' 
        //floor.color=color(20, 121, 50)
        floorBlend.image=floorBlendimg
        floorBlend.tile='~'
        floorBlend.bounciness=0
        floorBlend.layer=1
        //floor.debug=true
      roof= new tilez.Group()
        roof.collider='s' 
        //floor.color=color(20, 121, 50)
        roof.image=upper2img
        roof.tile='r'
        roof.bounciness=0
        roof.layer=1
        roof.rotation=180
        //floor.debug=true
      roofBlend = new tilez.Group()
         roofBlend.collider='s' 
        //floor.color=color(20, 121, 50)
        roofBlend.image=floorBlendimg
        roofBlend.tile='f'
        roofBlend.bounciness=0
        roofBlend.layer=1
        roofBlend.rotation=180
        //floor.debug=true
      wallL= new tilez.Group()
        wallL.collider='s' 
        wallL.image=upper1img
        wallL.tile='L'
        wallL.bounciness=0
        wallL.layer=1
        wallL.rotation=90
      wallR= new tilez.Group()
        wallR.collider='s' 
        wallR.image=upper1img
        wallR.tile='R'
        wallR.bounciness=0
        wallR.layer=1
        wallR.rotation=-90
      rock=new tilez.Group()
        rock.collider='n'
        rock.w=64
        rock.h=64
      rock.image=upperRockimg
        rock.tile='+'
        rock.bounciness=0
        rock.layer=1
      door = new tilez.Group()
        door.collider='s'
        door.w=64
        door.h=64
        door.tile='#'
       // door.color=color(255, 0, 0)
        door.image=doorimg
        door.bounciness=0
        door.layer=2
        door.image.offset.y=32
      oldDoor = new tilez.Group()
        oldDoor.collider='n'
        oldDoor.w=64
        oldDoor.h=64
        oldDoor.tile='o'
       // oldDoor.color=color(117, 35, 35)
        oldDoor.image=doorimg
        oldDoor.bounciness=0
        oldDoor.layer=2
        oldDoor.image.offset.y=32
      barrier = new tilez.Group()
        barrier.collider='s'
        barrier.w=64
        barrier.h=64
        barrier.tile='%'
        barrier.bounciness=1
        barrier.layer=2
        barrier.color=color(107, 89, 89)
      enemySpawnIndicator = new tilez.Group()
        enemySpawnIndicator.w=64
        enemySpawnIndicator.h=64
        enemySpawnIndicator.tile='e'
        enemySpawnIndicator.collider='n'
        enemySpawnIndicator.color=color(0,0,0,0)
        enemySpawnIndicator.stroke=color(0,0,0,0)
        enemySpawnIndicator.debug=true
        enemySpawnIndicator.layer=0
      stagmite= new tilez.Group()
        stagmite.w=64
        stagmite.h=64
        stagmite.tile='^'
        stagmite.collider='n'
        stagmite.layer=3
        stagmite.image=stagimg
       //stagmite.color=color(255,0,0)
        //stagmite.rotation=180
      stagtite = new tilez.Group()
        stagtite.w=64
        stagtite.h=64
        stagtite.tile='|'
        stagtite.collider='n'
        stagtite.layer=3
        stagtite.image=stagimg
        stagtite.rotation=180
       //stagtite.color=color(0,0,255)
      plat = new tilez.Group() //bridge
        plat.tile='-'
        plat.collider='s'
        plat.layer=2
        plat.image=platimg
        plat.bounciness=0
      platOG = new tilez.Group()
        platOG.tile='W'
        platOG.collider='s'
        platOG.layer=2
        platOG.image=platOGimg
        platOG.bounciness=0
      platBox = new tilez.Group()
        platBox.tile='B'
        platBox.collider='s'
        platBox.layer=2
        platBox.image=platBoximg
        platBox.bounciness=0
      platST = new tilez.Group() //top support
        platST.tile='Y'
        platST.collider='s'
        platST.layer=2
        platST.image=platSTimg
        platST.bounciness=0
      platS = new tilez.Group() //top support
        platS.tile='I'
        platS.collider='n'
        platS.layer=2
        platS.image=platSimg
        platS.bounciness=0
      platSB = new tilez.Group() //top support
        platSB.tile='A'
        platSB.collider='n'
        platSB.layer=2
        platSB.image=platSTimg
        platSB.rotation=180
      fence = new tilez.Group()
        fence.tile='w'
        fence.layer=2
        fence.image=platimg
        fence.rotation=180
        fence.collider='n'
      gameOver = new tilez.Group()
        gameOver.tile='G'
        gameOver.text="Congrats!"
        gameOver.collider='n'
        gameOver.color=color(209, 15, 183)
      

    map=[
      [//0
        '++rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrffffffffrrrrrrrrrrrrrrrrrrrrrrrrrr++',
        '+L                                       ++++++++                          R+',
        '+L                                       ++++++++                          R+',
        '+L                                       ++++++++                          R+',
        '+L                                       ++++++++                          R+',
        '+L   #                                   ~~~~~~~~                          R+',
        '+L        e                             +++++++++     =====                R+',
        '++===~===========               =======++++   +       +++++==              R+',
        '++++++++++++++++++            +++++++++++                 +++==            R+',
        '+L             +++====       ++++                           +++==          R+',
        '+L                  +++++===++                              +              R+',
        '+L                    ++++++                               +++             R+',
        '+L                       ++++                               ++      ==     R+',
        '+L                         +                               ++       ++     R+',
        '+L                        ++                               ++      ++      R+',
        '+L                         ++                               ++   ==+       R+',
        '+L                      ===++                               +   ++++       R+',
        '+L                    ==+++~~=    e                       e+++ ++++        R+',
        '++====================++++++++=============================~~~~~~~~========++',
        '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
      ],
      [//1 sp 11,12
        '+++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '+++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '+++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '+++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '+++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '+++++++++rfrrrfrrrr++++++++++++++++++++++++++++++++++++',
        '++++++++L |   |    R+++++++++++++++++++++++++++++++++++',
        '++++++++L          R+++++++++++++++++++++++++++++++++++',
        '++++++++L          R+++++++++++++++++++++++++++++++++++',
        '++++++++L          R+++++++++++++++++++++++++++++++++++',
        '++++++++L          R+++++++++++++++++++++++++++++++++++',
        '++++++++Lo         R+++++++++++++++++++++++++++++++++++',
        '++++++++L     ^    R+++++++++++++++++++++++++++++++++++',
        '+++++++++~====~=   R+++++++++++++++++++++++++++++++++++',
        '+++++++++++++++L   R+++++++++++++++++++++++++++++++++++',
        '++++++++++++++++LBBR+++++++++++++++++++++++++++++++++++',
        '++++++++++++++++L  rrrrrrrrrrrrrrrrrrrrrfrrrrr+++++++++',
        '++++++++++++++++L                       |     R++++++++',
        '++++++++++++++++L-B    ^           e    ^     R++++++++',
        '+++++++++++++++++=~====~================~====-R++++++++',
        '++++++++++++++++++++++++++++++++++++++++++++L R++++++++',
        '+++++++++++++++++++++++++++++++++++++++++ffff-R++++++++',
        '++++++++++++++++++++++++++++++++++++++++L#    R++++++++',
        '++++++++++++++++++++++++++++++++++++++++L    WR++++++++',
        '+++++++++++++++++++++++++++++++++++++++++~===~+++++++++',
        '+++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '+++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '+++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '+++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '+++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '+++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '+++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '+++++++++++++++++++++++++++++++++++++++++++++++++++++++',
      ],
      [//2 sp 10,10
        '++++++++++++++++++++++++++++++++++++++++++++++',
        '++++++++++++++++++++++++++++++++++++++++++++++',
        '++++++++++++++++++++++++++++++++++++++++++++++',
        '++++++++++++++++++++++++++++++++++++++++++++++',
        '++++++++++++++++++++++++++++++++++++++++++++++',
        '++++++++++++++++++++++++++++++++++++++++++++++',
        '++++++++++++++++++++++++++++++++++++++++++++++',
        '++++++++++++++++++++++++++++++++++++++++++++++',
        '+++++++++rrrrrrfrrrrrrrrrrrrrrrrrrrrrr++++++++',
        '++++++++Lo     |                     R++++++++',
        '++++++++L        ^     e       ^     R++++++++',
        '+++++++++~=======~=============~===--R++++++++',
        '++++++++++++++++++++++++++++++++++L  R++++++++',
        '+++++++++++++++++++++++++++++++++++L-R++++++++',
        '+++++++++++++++++++++++++++++++++++L R++++++++',
        '+++++++++frrrrrrrrrrrrrrrrrrrfrrrrrL-R++++++++',
        '++++++++L#                   |       R++++++++',
        '++++++++L       ^      e            WR++++++++',
        '+++++++++~======~===================~+++++++++',
        '++++++++++++++++++++++++++++++++++++++++++++++',
        '++++++++++++++++++++++++++++++++++++++++++++++',
        '++++++++++++++++++++++++++++++++++++++++++++++',
        '++++++++++++++++++++++++++++++++++++++++++++++',
        '++++++++++++++++++++++++++++++++++++++++++++++',
        '++++++++++++++++++++++++++++++++++++++++++++++',
        '++++++++++++++++++++++++++++++++++++++++++++++',
        '++++++++++++++++++++++++++++++++++++++++++++++',


      ],
      [//3
        '++rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrfrrrrr++',
        '+L                                        %     R+',
        '+L                                        %     R+',
        '+L                                        %     R+',
        '+L                                        %     R+',
        '+L                                        %     R+',
        '+L                                        %     R+',
        '+L                                        %     R+',
        '+L                                        %     R+',
        '+Lo                                       %   # R+',
        '+L        e                               %     R+',
        '++~=======================================~===~=++',
        '++++++++++++++++++++++++++++++++++++++++++++++++++',
        '++++++++++++++++++++++++++++++++++++++++++++++++++',
        '++++++++++++++++++++++++++++++++++++++++++++++++++',
        '++++++++++++++++++++++++++++++++++++++++++++++++++',
        '++++++++++++++++++++++++++++++++++++++++++++++++++',
        '++++++++++++++++++++++++++++++++++++++++++++++++++',
      ],
      [//4
        '++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '++++++++rrrrrffrrrrrrrrrrfffffffffrrrrrrrrrrrrrfffffrrrrrrrrrfrrrrrrrrrrrrrfrrrrrrrrrrrrrffrrrrrr+++++++',
        '+++++++L                  +++++  |              ++++                       |                    R+++++++',
        '+++++++L                   +++                 ++++                                             R+++++++',
        '+++++++L                   |+                 +++++                                             R+++++++',
        '+++++++L                    |                  +++|                                           ++R+++++++',
        '+++++++L          B--------B+                  ++++                                         ++++R+++++++',
        '+++++++L          Y        B+                 ++++                                      ++++++  R+++++++',
        '+++++++L  o       I       ^++                  +++                                    +++++     R+++++++',
        '+++++++L          Awwwwww+++++        ^      ++++++       +++++                  ^  ++++++      R+++++++',
        '++++++++=~~~~~~~~~~~~~~~~~~~~~~~~====~~=====~~~~~~~~=~====~~~+++++            =~~~===++++       R+++++++',
        '++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++L   +++         ++++++++++          R+++++++',
        '++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++L    +++=~~==+++++  |               R+++++++',
        '++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++L      +++++++++                    R+++++++',
        '++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++L       |                     ^     R+++++++',
        '++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++L                          ==~~===~=++++++++',
        '++++++++rfrrrrrrfrrrrrrrrrrrrrfrrfrrrrrfrrrrrrrrrrrrrrfrrrrrr                           ++++++++R+++++++',
        '+++++++L |      |   +++       |  |     Y   +++++++++  Y                    ==~~==+++++++++++++++R+++++++',
        '+++++++L             +                 I   ++++++++   I                   ++++++++++++    ++++++R++++++',
        '+++++++L            ++                 I  + |++++++   I                      +++++            ++R+++++++',
        '+++++++L            ++ ^               A      ++++    A                        |                R+++++++',
        '+++++++L            |+++               Y     +++++    Y              B---B                      R+++++++',
        '+++++++L             ++                I    +++++++   I              Y   Y                      R+++++++',
        '+++++++L            ++                 I  ^+++++++    I              I   I                      R+++++++',
        '++++++++L       ^   +++         ^      A  ++++++++++  A              A   A                      R+++++++',
        '++++++++L-------===~~~~========~~======~==============~========~~====~~==~~~====================++++++++',
        '++++++++L       R+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '++++++++L       R+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '++++++++L-------R+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '++++++++L       R+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '++++++++L       rrrrffffrrrrrrrrrrrrrffrrrrrrrrrrrrrrrrfffrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr++++++++',
        '++++++++L----B      ++++             ++                +++                                      R+++++++',
        '++++++++L    Y        +                                 +                                       R+++++++',
        '++++++++L    A       ++               +                ++                                     # R+++++++',
        '++++++++L----B      ++++             ++        ^      +++                                       R+++++++',
        '+++++++++====~======~~~~=============~~========~======~~~=====================================~=++++++++',
        '++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',

      ],
      [//30,12
        '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '+++++++++++++++++++++fffffffffffffffffffffffffff+++++++++++++++++++++++++++',
        '++++++++++++++++++++L                           R++++++++++++++++++++++++++',
        '++++++++++++++++++++L                           R++++++++++++++++++++++++++',
        '++++++++++++++++++++L                           R++++++++++++++++++++++++++',
        '++++++++++++++++++++L            G              R++++++++++++++++++++++++++',
        '++++++++++++++++++++L                           R++++++++++++++++++++++++++',
        '+++++++++++++++++++++~~~~~~~~~~~~~~~~~~~~~~~~~~~+++++++++++++++++++++++++++',
        '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
        '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
      ]
    ]
}
function setup(){
  new Canvas('fullscreen');
  //world
    world.gravity.y=9.81
    mapGroup=new Group()
      mapGroup.bounciness=0
    attackGroup= new Group()
    camSped=0.15
    enemyGroup=new Group()
      enemiesSpawn=true
  //tiles
     for(let i =0;i<100000;i++){
      platpass[i]=false
      platOGpass[i]=false
      platBoxpass[i]=false
      platSTpass[i]=false
      }
  //health
    healing=1/60
    healthBar = new Sprite()
      healthBar.x=150
      healthBar.y=50
      healthBar.w=250
      healthBar.h=25
      healthBar.collider='n'
      healthBar.layer=100
      healthBar.image=healthBarBar
      //healthBar.debug=true
      healthBar.image.scale=2
    healthHealth =new Sprite()
      healthHealth.x=150
      healthHealth.y=50
      healthHealth.w=240
      healthHealth.h=20
      healthHealth.collider='n'
      healthHealth.image=healthBarHealth
      healthHealth.image.scale=2
  //map creation
    mapNum=1
    loadMap(mapNum)
  //player
    health=150
    nocked=0
    player = new Sprite()
      player.x=640
      player.y=64*16
      player.w=40
      player.h=80
      player.debug=true
      player.rotationLock=true
      playerSped=10
      player.bounciness=0
      crouchToggle=false
      crouchStrikeToggle=false
      player.layer=101
      //timers
        coyotteTime=0
        slashTime=0
        slashActive=false
        slashed=false
        slashVal=1
      //upgradables
        playerDamage=25
  //enemies
    enemyGroup.overlaps(player)
    //gobo
      gobos = new enemyGroup.Group()
        gobos.w=64
        gobos.h=64
        gobos.debug=true
        gobos.rotationLock=true
        gobos.layer=99
      // gobos.overlap(gobos)
        for(let i =0;i<1000;i++){
          goboDiesA[i]=0
          goboSpawned[i]=false
          goboAttack1Cool[i]=0
          goboSlashTrig[i]=false
          goboSlashDelay[i]=0
        }      
    //gollux
      golloms= new enemyGroup.Group()
        golloms.w=64*3
        golloms.h=64*3
        golloms.debug=true
        golloms.rotationLock=true
        golloms.layer=99
        golloms.overlap(player)
        for(let i =0;i<1000;i++){
          golluxSpawned[i]=false
          golluxDiesTime[i]=0
          golluxAttack[i]=int(random(1,3))
          golluxATime[i]=0
          golluxSlamCool[i]=0
          golluxHitTime[i]=0
        }
      gollomsAttack= new Group()
    //necro
      necros= new Group()
        necros.w=64
        necros.h=64*2
        necros.debug=true
        necros.rotationLock=true
        necros.layer=99
        necros.overlap(player)
      necroAttackGp=new Group()
        necroAttackGp.collider='n'
        necroAttackGp.debug=true
      for(let i =0;i<1000;i++){
        necroSpawned[i]=false
        necroChoice[i]='attack'
        necroDiestime[i]=0
        necroTurning[i]=true
        necroSummonCool[i]=0
        necroAttackInt[i]=0
        necroRunTime[i]=0
        necroAlive[i]=true
        necroSummons[i]=0
      }

    //skele
      skeles=new enemyGroup.Group()
        skeles.w=64
        skeles.h=96
       // skeles.collider='n'
       skeles.overlap(player)
        skeles.debug=true
        skeles.layer=99
        skeles.rotationLock=true
      for(let i=0;i<=1000;i++){
        skeleSpawned[i]=false
        skeleHealth[i]=0
        skeleDiesTime[i]=0
        skeleTurning[i]=true
        skeleCombo[i]='default'
        skeleAttackInt[i]=0
        skeleShielded[i]=false
        skeleThrown[i]=false
        skeleSwordBreak[i]=0
        skeleSwordBreaking[i]=false
      }
      skeleAttacks=new Group()
        skeleAttacks.w=85
        skeleAttacks.h=96
        skeleAttacks.debug=true
        skeleAttacks.layer=100
        skeleAttacks.collider='n'
      

      
  //camera
    cameraMan= new Sprite()
      cameraMan.x=player.x
      cameraMan.y=player.y
      cameraMan.collider='n'
      cameraMan.h=40
      cameraMan.w=80
      cameraMan.debug = true
      cameraMan.stroke=color(0,0,0,0)
      cameraMan.fill=color(0,0,0,0)
  //dies vars
    dieTime=0
    diInc=0
  //player Ani
    player.addAni('idle', idleImg, {frameSize: [120,80], frames: 10, frameDelay:8})
    player.addAni('attack',attackImg,{frameSize:[120,80],frames:6,frameDelay:10})
    player.addAni('combo',comboImg,{frameSize:[120,80],frames:10,frameDelay:6})
    player.addAni('dies',diesImg,{frameSize:[120,80],frames:10,frameDelay:8})
    player.addAni('run',runImg,{frameSize:[120,80],frames:10,frameDelay:6})
    player.addAni('roll',rollImg,{frameSize:[120,80],frames:12,frameDelay:5})
    player.addAni('crouch',crouchImg,{frameSize:[120,80],frames:3,frameDelay:24})
    player.addAni('falling',airbornImg,{frameSize:[120,80],frames:3,frameDelay:8})
    player.addAni('jump',jumpImg,{frameSize:[120,80],frames:3,frameDelay:10})
    player.addAni('crouchStrike',crouchAttackImg,{frameSize:[120,80],frames:4,frameDelay:10})
    player.addAni('crouchWalk',crouchWalkImg,{frameSize:[120,80],frames:8,frameDelay:6})
    player.ani= 'idle'  

  //player change for map testing
    player.x=64*11
    player.y=64*12



}
function draw() {
  background(200); 
    gameLive()
}
function gameLive(){
  if(health>0){
  playerMovement()
  cam()
  floors()
  platTileLogic()
  }
  healthFunc()
  playerSizing()
}

function healthFunc(){
  //bracket
  healthBar.x=cameraMan.x-canvas.w/2+150
  healthBar.y=cameraMan.y-canvas.h/2+25
  //bar
  healthHealth.x=healthBar.x//-(150-(health))
  healthHealth.y=healthBar.y
    healthHealth.debug=true
    healthHealth.image.scale.x=health/(70+health/25)
  if(health<=0){
    playerDies()
    healthHealth.image.scale.x=0
  }
  if(health<=150&&health>=1){
    health+=healing
  }
  
}
function cam(){
   camera.x=cameraMan.x
 camera.y=cameraMan.y
 cameraMan.moveTowards(player,camSped)
}
function playerSizing(){
   //player scaling and centering
    player.ani.offset.y=-20
    player.ani.offset.x=5
    player.ani.scale=2
}
function playerDies(){
    player.changeAni('dies')
    diInc=1
    dieTime+=diInc
  if(dieTime==80){
       player.ani.noLoop()
  //     noLoop()
 }
}
function playerMovement(){
  //knockback
  if(nocked!=0){
      player.vel.x+=nocked
      if(nocked>0){
        nocked--
      }else if(nocked<0){
        nocked++
      }
    }
   //jump
    coyotteTime++
    if(player.colliding(tilez)){
      coyotteTime=0
      if(player.ani.name=='falling'){
        player.changeAni('idle')
      }
    }
    if(coyotteTime<=5){
      if(kb.presses(' ')||kb.presses('w')){
      player.vel.y=-8
      crouchToggle=false
    }
    }
    
    if(player.vel.y<0&&coyotteTime<=5){
      player.changeAni('jump','falling')
    }
    if(player.vel.y>0&&coyotteTime>=5){
      player.changeAni('falling')
    }
    if(player.coyotteTime!=0){
      if(player.ani.name=='falling'||player.ani.name=='jump'){
      if(kb.pressing('a')){ 
          player.mirror.x=true
          player.vel.x=-playerSped*2
        } else if(kb.pressing('d')){
          player.mirror.x=false
          player.vel.x=playerSped*2
        }
      }
    }
     

  //actions
    if(player.ani.name!='combo'&&player.ani.name!='attack'&&player.ani.name!='crouch'&&player.ani.name!='dies'&&player.ani.name!='jump'&&player.ani.name!='falling'&&player.ani.name!='crouchStrike'){
        if(mouse.pressing(RIGHT)||mouse.pressing()&&player.ani.name!='attack'){
          if(mouse.x<player.x){
            player.mirror.x=true
            player.changeAni('idle')
            player.changeAni(['combo','idle'])    
            //slash=new attackGroup.Sprite(player.x-player.w/2-38,player.y,75,player.h,'n')
          }else{
            player.mirror.x=false
            player.changeAni('idle')
            player.changeAni(['combo','idle'])
        // slash=new attackGroup.Sprite(player.x-player.w/2-38,player.y,75,player.h,'n')
          }
        }
        if(mouse.presses()&&player.ani.name!='attack'){
          if(mouse.x<player.x){
            player.mirror.x=true
            player.changeAni('idle')
            player.changeAni(['attack','idle'])  
            slash=new attackGroup.Sprite(player.x-player.w/2-38,player.y,75,player.h,'n')  
          slash.color=color(0,0,0,0)
          //slash.stroke=color(0,0,0,0)
            slashActive=true
            slash.debug=true
            slashed=false
          }else{
            player.mirror.x=false
            player.changeAni('idle')
            player.changeAni(['attack','idle'])
            slash=new attackGroup.Sprite(player.x+player.w/2+38,player.y,75,player.h,'n')  
          slash.color=color(0,0,0,0)
          // slash.stroke=color(0,0,0,0)
            slashActive=true
            slash.debug=true
            slashed=false
          }
     
        }  
      
      }
      if(kb.presses('e')){
        if(player.ani.name!='roll'){
          player.changeAni('idle')
         player.changeAni('roll','idle')
        }
        }
      if(player.ani.name=='combo'){
          if(kb.pressing('a')){ 
          player.mirror.x=true
          player.vel.x=-playerSped*0.1
        } else if(kb.pressing('d')){
          player.mirror.x=false
          player.vel.x=playerSped*0.1
        }
          }
    if(player.ani.name=='roll'){
        if(player.mirror.x){
          player.x+=-12
        }else{
          player.x+=12
        }
    }
    if(slashActive==true){
        slash.y=player.y
        slashTime++
        if(player.mirror.x==false){
          slash.x=player.x+player.w/2+38
        }else{
          slash.x=player.x-player.w/2-38
        }
         if(slashTime>=45){
          attackGroup.removeAll()
          crouchStrikeToggle=false
          slashActive=false
          slashTime=0
          if(slashed==false){
          slashVal=0
        }
          
        }
      }
      if(slashVal==0){
        if(player.mirror.x==false){
          slash=new attackGroup.Sprite(player.x+player.w/2+38,player.y,75,player.h,'n')  
          // slash.color=color(0,0,0,0)
          // slash.stroke=color(0,0,0,0)
          slash.debug=true
        }else{
           slash=new attackGroup.Sprite(player.x-player.w/2-38,player.y,75,player.h,'n')  
           // slash.color=color(0,0,0,0)
          // slash.stroke=color(0,0,0,0)
          slash.debug=true
        }
        slashActive=true
        slashVal++
        slashed=true
      }
      if(player.ani.name!='combo'&&player.ani.name!='crouchStrike'){
        attackGroup.removeAll()
          crouchStrikeToggle=false
          slashActive=false
          slashTime=0
          slashed=false
          if(slashed==false){
          slashVal=0
        }

      }
  //running
      player.vel.x*=0.3
      if(player.ani.name!='combo'&&player.ani.name!='attack'&&player.ani.name!='dies'&&player.ani.name!='roll'&&player.ani.name!='crouch'&&player.ani.name!='jump'&&player.ani.name!='falling'&&player.ani.name!='crouchStrike'&&player.ani.name!='crouchWalk'){
        if(kb.pressing('a')){
          player.changeAni(['run'])
          player.mirror.x=true
          player.x+=-playerSped
        } else if(kb.pressing('d')){
          player.changeAni(['run'])
          player.mirror.x=false
          player.x+=playerSped
        }else{
          player.changeAni(['idle'])
        }
      }
      
  //Crouching
      if(player.ani.name!='run'&&player.ani.name!='combo'&&player.ani.name!='attack'&&player.ani.name!='dies'&&player.ani.name!='roll'&&player.ani.name!='jump'&&player.ani.name!='falling'&&player.ani.name!='crouchStrike'){
        if(kb.presses('shift')){
          if(crouchToggle==true){
            crouchToggle=false
          }else{
            crouchToggle=true
          }
          
        }
      }
      if(crouchToggle==true){
        if(player.ani.name!='crouchStrike'&&player.ani.name!='crouchWalk'){
           player.changeAni('crouch')
        }
      }else{
        if(player.ani.name!='run'&&player.ani.name!='combo'&&player.ani.name!='attack'&&player.ani.name!='dies'&&player.ani.name!='roll'&&player.ani.name!='jump'&&player.ani.name!='falling'&&player.ani.name!='crouchStrike'){
        player.changeAni('idle')
        }
      }
      if(player.ani.name=='crouch'||player.ani.name=='crouchWalk'){
        if(mouse.presses()){
          if(player.ani.name=='crouch'&&player.ani.name!='crouchwalk'){
          if(mouse.x<player.x){
            player.mirror.x=true
          //  player.changeAni('idle')
            player.changeAni(['crouchStrike','crouch'])    
            slash=new attackGroup.Sprite(player.x-player.w/2-38,player.y,75,player.h,'n')  
          slash.color=color(0,0,0,0)
          //slash.stroke=color(0,0,0,0)
            slashActive=true
            slash.debug=true
            crouchStrikeToggle=true
          }else{
            player.mirror.x=false
           // player.changeAni('idle')
            player.changeAni(['crouchStrike','crouch'])
            slash=new attackGroup.Sprite(player.x+player.w/2+38,player.y,75,player.h,'n')  
          slash.color=color(0,0,0,0)
          //slash.stroke=color(0,0,0,0)
            slashActive=true
            slash.debug=true 
            crouchStrikeToggle=true
          }
          }
        }
        if(player.ani.name!='crouchStrike'){
          if(kb.pressing('a')){
            if(crouchStrikeToggle==false){
            player.changeAni(['crouchWalk'])
            player.mirror.x=true
            player.x+=-playerSped*0.5
            }
          } else if(kb.pressing('d')){
            if(crouchStrikeToggle==false){
            player.changeAni(['crouchWalk'])
            player.mirror.x=false
            player.x+=playerSped*0.5
            }
          }else{
            player.changeAni('crouch')
          }
      }
      }
  
    
}
function loadMap(n){
  mapCurrent = new Tiles(map[n],32,32,64,64)
}
function floorSpawns(){
  if(mapNum==0){
    spawnGobosF1()
  }
  if(mapNum==3){
    golluxLive(0,10,11)
  }
  if(mapNum==1){
    skeleLive(0,34,18)
  }
  if(mapNum==2){
    skeleLive(0,24,10)
    skeleLive(1,24,16)
  }
  if(mapNum==4){
    skeleLive(10,40,15)
    goboLive(0,22,15)
    skeleLive(11,80,21)
    golluxLive(5,70,30)
    necroLive(0,30,40)
    necroLive(1,80,40)
  }
}
function spawnGobosF1(){ 
  goboLive(0,35,17)
  goboLive(1,60,17)
  goboLive(2,11,6)
 // goboLive(3,15,17)
}
function goboLive(n,x,y){
  //gobo Spawn
    if(goboSpawned[n]==false){
      gobo[n] = new gobos.Sprite()
      gobo[n].overlaps(player)
      gobo[n].x=64*x
      gobo[n].y=64*y
      gobo[n].w=64
      gobo[n].h=64
      gobo[n].debug=true
      gobo[n].rotationLock=true
      gobo[n].addAni('idle',goboIdle,{frameSize: [150,150], frames: 4, frameDelay:8})
      gobo[n].addAni('dies',goboDies,{frameSize:[150,150],frames:4, frameDelay:6})
      gobo[n].addAni('hit',goboHit,{frameSize:[150,150],frames:4, frameDelay:5})
      gobo[n].addAni('attack',goboAttack,{frameSize:[150,150],frames:8,frameDelay:6})
      gobo[n].addAni('running',goboRun,{frameSize:[150,150],frames:8,frameDelay:6})
      gobo[n].ani='idle'
      gobo[n].ani.scale=1.5
      gobo[n].ani.offset.y=-5
      goboLife[n]=100
      goboSpawned[n]=true
    }
  //goboDies
    if(goboLife[n]<=0){
      if(gobo[n].ani.name!='dies'){
        gobo[n].changeAni('dies')
        gobo[n].collider='n'
      }
      
      goboDiesA[n]++
      if(goboDiesA[n]>=24){
        gobo[n].ani.noLoop()
        //noLoop()
      }
      //gobo[n].remove()

    }
  //gobo Ai 
    //turning
      if(gobo[n].ani.name!='dies'){
         if(gobo[n].x>player.x){
        gobo[n].mirror.x=true
        }else{
        gobo[n].mirror.x=false
        }
      }
     
    //runup
      if(gobo[n].ani.name!='dies'&&gobo[n].ani.name!='hit'&&gobo[n].ani.name!='attack'){
        if(dist(gobo[n].x,gobo[n].y,player.x,player.y)<=640){
          if(dist(gobo[n].x,gobo[n].y,player.x,player.y)>=70){
            if(gobo[n].y<=player.y+64&&gobo[n].y>=player.y-64&&dist(gobo[n].x,gobo[n].y,player.x,player.y)>=80){
              if(gobo[n].ani.name!='running'&&gobo[n].ani.name!='attack'&&gobo[n].ani.name!='hit'){
                gobo[n].changeAni('running','idle')
              }

              if(gobo[n].x<player.x){
                gobo[n].x+=5
              }else{
                gobo[n].x-=5
              }
              
            }else if(dist(gobo[n].x,gobo[n].y,player.x,player.y)<=320){
              if(gobo[n].ani.name!='running'&&gobo[n].ani.name!='attack'&&gobo[n].ani.name!='hit'){
                gobo[n].changeAni('running','idle')
              }
              if(gobo[n].x<player.x){
                gobo[n].x+=5
              }else{
                gobo[n].x-=5
              }
            }else if(gobo[n].ani.name=='running'){
              gobo[n].changeAni('idle')
            }
            }else if(gobo[n].ani.name=='running'){
              gobo[n].changeAni('idle')
            }
          }
        }
    //attack
      goboAttack1Cool[n]--
      goboSlashDelay[n]++
      if(dist(gobo[n].x,gobo[n].y,player.x,player.y)<=90&&gobo[n].ani.name!='attack'&&goboAttack1Cool[n]<=0&&gobo[n].ani.name!='dies'){
        gobo[n].changeAni('attack','idle')
        goboSlash[n]= new Sprite()
          if(gobo[n].mirror.x){
            goboSlash[n].x=gobo[n].x - gobo[n].w/2 - 45/2
          }else{
            goboSlash[n].x=gobo[n].x + gobo[n].w/2 + 45/2
          }
          goboSlash[n].y=gobo[n].y
          goboSlash[n].h=gobo[n].h
          goboSlash[n].w=45
          goboSlash[n].collider='n'
          goboSlashTrig[n]=true
          goboSlash[n].debug=true
          goboSlash[n].color=color(0,0,0,0)
         // goboSlash[n].stroke=color(0,0,0,0)
        goboAttack1Cool[n]=70
        goboSlashDelay[n]=0
      }
      if(gobo[n].ani.name=='attack'){
        if(gobo[n].mirror.x){
            goboSlash[n].x=gobo[n].x - gobo[n].w/2 - 45/2
          }else{
            goboSlash[n].x=gobo[n].x + gobo[n].w/2 + 45/2
          }
      }
      if(goboSlashDelay[n]>=30&&gobo[n].ani.name=='attack'){
        if(goboSlash[n].overlaps(player)){
          player.vel.y-=3
             if(gobo[n].mirror.x){
            player.x-=20   
          }else{
            player.x+=20
          }
          goboSlash[n].remove()
          health-=10
          goboSlashTrig[n]=false
        }
      }
      if(gobo[n].ani.name!='attack'&&goboSlashTrig[n]==true){
        goboSlash[n].remove()
      }
  //goboHit
    if(player.ani.name=='attack'||player.ani.name=='combo'||player.ani.name=='crouchStrike'){
      if(gobo[n].overlaps(attackGroup)&&gobo[n].ani.name!='hit'&&gobo[n].ani.name!='dies'){
        gobo[n].changeAni('idle')
        gobo[n].changeAni('hit','idle')
        goboLife[n]-=playerDamage
      }
    }
  //goboScale
    if(goboSpawned){
      gobo[n].ani.scale=1.5
      gobo[n].ani.offset.y=-5
    }
    
}
function golluxLive(n,x,y){
  //gollux spawned
    if(golluxSpawned[n]==false){
      gollux[n]=new golloms.Sprite()
        gollux[n].x=64*x
        gollux[n].y=64*y

        gollux[n].addAni('idle',golluxIdle,{frameSize:[128,128],frames:4,frameDelay:15})
        gollux[n].addAni('attackA',golluxAttackA,{frameSize:[384,128],frames:10,frameDelay:8}) //full 17 frames
        gollux[n].addAni('attackB',golluxAttackB,{frameSize:[384,128],frames:11,frameDelay:8})//full 19
        gollux[n].addAni('heal',golluxHeal,{frameSize:[384,128],frames:25,frameDelay:5})//full 25
        gollux[n].addAni('hit',golluxHit,{frameSize:[384,128],frames:4,frameDelay:12})
        gollux[n].addAni('moving',golluxMove,{frameSize:[384,128],frames:8,frameDelay:7})
        gollux[n].ani='idle'

        gollux[n].ani.scale=3
        gollux[n].ani.offset.y=-32

        golluxHealth[n]=500

        golluxSpawned[n]=true
    }
  //gollux ai
    //gollux turning
      if(golluxHealth[n]>=1&&gollux[n].ani.name!='attackA'&&gollux[n].ani.name!='attackB'){
        if(gollux[n].ani.name!='dies'){
         if(gollux[n].x>player.x){
        gollux[n].mirror.x=true
        }else{
        gollux[n].mirror.x=false
        }
      }
      }
      
    //runup
      if(dist(gollux[n].x,gollux[n].y,player.x,player.y)<=1500&&gollux[n].ani.name!='attackA'&&gollux[n].ani.name!='attackB'&&gollux[n].ani.name!='hit'&&golluxHealth[n]>0){
        if(dist(gollux[n].x,gollux[n].y,player.x,player.y)>=130){
          if(gollux[n].ani.name!='moving'){
              gollux[n].changeAni('moving','idle')
            }
          if(gollux[n].x>=player.x){
            gollux[n].x-=7
          }else{
            gollux[n].x+=7
          }
        }
        if(dist(gollux[n].x,gollux[n].y,player.x,player.y)<=120){
          if(gollux[n].x<=player.x){
            gollux[n].x-=7
            if(gollux[n].ani.name!='moving'){
              gollux[n].changeAni('moving','idle')
            }
          }else{
            gollux[n].x+=7
            if(gollux[n].ani.name!='moving'){
              gollux[n].changeAni('moving','idle')
            }
          }
        }
      }
    //attack
      if(golluxHealth[n]>0){
        golluxSlamCool[n]--
        golluxHitTime[n]++
        if(gollux[n].ani.name!='attackA'&&gollux[n].ani.name!='attackB'){
          golluxHitTime[n]=0
        }
        if(golluxSlamCool[n]<=0){
          
          if(golluxSlamCool[n]==0){
            golluxAttack[n]=int(random(1,3))
          }
          //console.log(golluxAttack[n])
          if(gollux[n].ani.name!='attackA'&&gollux[n].ani.name!='attackB'){
            gollomsAttack.removeAll()
          }
          //attackA
            if(golluxAttack[n]==1){
              if(dist(gollux[n].x,gollux[n].y,player.x,player.y)<=130){
                if(gollux[n].ani.name!='attackA'){
                  gollux[n].changeAni('attackA','idle')
                  if(gollux[n].mirror.x){
                    golluxSlam[n]=new gollomsAttack.Sprite()
                    golluxSlam[n].w=50
                    golluxSlam[n].h=100
                    golluxSlam[n].x=gollux[n].x-gollux[n].w/2
                    golluxSlam[n].y=gollux[n].y+golluxSlam[n].h/2
                    golluxSlam[n].collider='n'
                    golluxSlam[n].debug=true
                    golluxSlam[n].life=80
                  }else{
                    golluxSlam[n]=new gollomsAttack.Sprite()
                    golluxSlam[n].w=50
                    golluxSlam[n].h=100
                    golluxSlam[n].x=gollux[n].x+gollux[n].w/2
                    golluxSlam[n].y=gollux[n].y+golluxSlam[n].h/2
                    golluxSlam[n].collider='n'
                    golluxSlam[n].debug=true
                    golluxSlam[n].life=80                
                  }
                }   
                if(golluxSlam[n].life==79){
                    golluxSlamCool[n]=100
                   // golluxAttack[n]=int(random(1,3))
                   golluxAttack[n]=0
                  }
            }
            }
            
          //attackB
            if(golluxAttack[n]==2){
              if(dist(gollux[n].x,gollux[n].y,player.x,player.y)<=130){
                if(gollux[n].ani.name!='attackB'){
                  gollux[n].changeAni('attackB','idle')
                  if(gollux[n].mirror.x){
                    golluxSlam[n]=new gollomsAttack.Sprite()
                    golluxSlam[n].w=120
                    golluxSlam[n].h=200
                    golluxSlam[n].x=gollux[n].x-gollux[n].w/2-30
                    golluxSlam[n].y=gollux[n].y
                    golluxSlam[n].collider='n'
                    golluxSlam[n].debug=true
                    golluxSlam[n].life=80     
                  }else{
                    golluxSlam[n]=new gollomsAttack.Sprite()
                    golluxSlam[n].w=120
                    golluxSlam[n].h=200
                    golluxSlam[n].x=gollux[n].x+gollux[n].w/2+30
                    golluxSlam[n].y=gollux[n].y
                    golluxSlam[n].collider='n'
                    golluxSlam[n].debug=true
                    golluxSlam[n].life=80                 
                  }
                }  
                if(golluxSlam[n].life==79){
                    golluxSlamCool[n]=100
                   // golluxAttack[n]=int(random(1,3))
                   golluxAttack[n]=0
                  }
            }
            }
          //attack clear
            if(gollux[n].ani.name!='attackA'&&gollux[n].ani.name!='attackB'){
              gollomsAttack.removeAll()
            }    
      }
  //attack collisions
            if(gollux[n].ani.name=='attackA'||gollux[n].ani.name=='attackB'){
              if(golluxSlam[n].w==50){
                if(golluxHitTime[n]>=32){
                    if(golluxSlam[n].overlap(player)){
                         if(gollux[n].x>player.x){
                      nocked=-5
                         }else{
                          nocked=5
                         }
                    player.vel.y-=2
                    health-=25                    
                  }
              }
              }
             if(golluxSlam[n].w==120){
              if(golluxHitTime[n]>=50){
                if(golluxSlam[n].overlap(player)){
                  player.y-=10
                         if(gollux[n].x>player.x){
                      nocked=-50
                         }else{
                          nocked=50
                         }
                player.vel.y-=10
                health-=50
                }
              }
             }         
        }
        }
  //gollux dies
              
    if(golluxHealth[n]<=0){
      gollux[n].collider='n'
      gollux[n].changeAni('hit')
    golluxDiesTime[n]++
      if(golluxDiesTime[n]>=2){
        gollux[n].ani.noLoop()
      }
    }
  //gollux Hit
    if(slashActive==true){
       if(slash.overlaps(gollux[n])){
        if(gollux[n].ani.name!='hit'){
          gollux[n].changeAni('hit','idle')
        }
        golluxHealth[n]-=playerDamage
        
    }
    }
   
  //gollux Scaling
    if(golluxSpawned[n]){
      gollux[n].ani.scale=3
        gollux[n].ani.offset.y=-32
    }
  //it's alive
    if(golluxHealth[n]>0){
      golluxAlive[n]=true
    }else{
      golluxAlive[n]=false
    }
}
function necroLive(n,x,y){

  if(kb.presses('k')){
    necroHealth[n]=50
  }
  //spawn
    if(necroSpawned[n]==false){
      necro[n]=new necros.Sprite()
        necro[n].x=x*64
        necro[n].y=y*64
      //ani
        necro[n].addAni('idle',necroIdle,{frameSize:[96,96],frames:50,frameDelay:4})
        necro[n].addAni('attack',necroAttack,{frameSize:[128,128],frames:47,frameDelay:4})
        necro[n].addAni('hit',necroHit,{frameSize:[96,96],frames:9,frameDelay:6})
        necro[n].addAni('jump',necroJump,{frameSize:[96,96],frames:12,frameDelay:4})
        necro[n].addAni('summon',necroSummon,{frameSize:[128,128],frames:20,frameDelay:4})
        necro[n].addAni('walk',necroWalk,{frameSize:[96,96],frames:10,frameDelay:4})
        necro[n].addAni('dies',necroDeath,{frameSize:[96,96],frames:52,frameDelay:4})
        necro[n].ani='idle'
      
        necro[n].ani.scale=2.5
        necro[n].ani.offset.y=10
        necro[n].ani.offset.x=-2

      necroHealth[n]=200

      necroSpawned[n]=true
    }
  //necro AI
    //turning
      if(necroTurning[n]){
        if(necro[n].x>player.x){
          necro[n].mirror.x=true
        }else{
          necro[n].mirror.x=false
        }
      }
     
    //action choice
      necroSummonCool[n]--
        if(necroHealth[n]<=50&&necroHealth[n]>1&&necroSummonCool[n]<=0){
          necroChoice[n]='summon'
        }
    //runup
      //attack
        if(dist(necro[n].x,necro[n].y,player.x,player.y)>=64*1.4&&necroChoice[n]=='attack'&&necro[n].ani.name!='attack'){
          if(necro[n].x>player.x){
            if(necro[n].ani.name!='walk'&&necro[n].ani.name!='hit'){
              necro[n].changeAni('walk','idle')
            }
            necro[n].x-=5
          }else{
            if(necro[n].ani.name!='walk'&&necro[n].ani.name!='hit'){
              necro[n].changeAni('walk','idle')
            }
            necro[n].x+=5
          }
          if(dist(necro[n].x,necro[n].y,player.x,player.y)<=64*1.4){
            if(necro[n].ani.name=='walk'&&necro[n].ani.name!='hit'){
              necro[n].changeAni('idle')
            }
          }
        }
        if(dist(necro[n].x,necro[n].y,player.x,player.y)<=64&&necroChoice[n]=='attack'&&necro[n].ani.name!='attack'){
         
            //     necroChoice[n]='summon'
                
                // if(necro[n].x>player.x){
                  // if(necro[n].ani.name!='walk'){
                  //   necro[n].changeAni('walk','idle')
                  //  }
                  //  necro[n].x+=5
                  //}else{
                  //  if(necro[n].ani.name!='walk'){
                  //    necro[n].changeAni('walk','idle')
                //   }
                //    necro[n].x-=5
              //   }
              //   if(dist(necro[n].x,necro[n].y,player.x,player.y)<=64*1.4){
              //     if(necro[n].ani.name=='walk'){
              //       necro[n].changeAni('idle')
              //     }
              //   }
        }
      //summon
        if(dist(necro[n].x,necro[n].y,player.x,player.y)<=64*5&&necroChoice[n]=='summon'&&necro[n].ani.name!='dies'&&necro[n].ani.name!='attack'){
          if(necroRunTime[n]<=300){
            if(necro[n].x>player.x){
              if(necro[n].ani.name!='walk'&&necro[n].ani.name!='hit'){
                necro[n].changeAni('walk','idle')
              }
              necro[n].mirror.x=false
              necro[n].x+=5
          }else{
              if(necro[n].ani.name!='walk'){
                necro[n].changeAni('walk','idle')
              }
              necro[n].mirror.x=true
              necro[n].x-=5
          }
          necroRunTime[n]++
          }else{
            //temp till skele coded
            necroChoice[n]='attack'
          }
          
          if(dist(necro[n].x,necro[n].y,player.x,player.y)>=64*5){
          //  if(necro[n].ani.name=='walk'&&necro[n].ani.name!='hit'&&necro[n].ani.name!='summon'){
           //   necro[n].changeAni('idle')
             // necroRunTime[n]=0
              
            //  necroChoice[n]='attack'
           // }
          }
        }
    //attack
      if(necroChoice[n]=='attack'&&dist(necro[n].x,necro[n].y,player.x,player.y)<=64*1.4){
        if(necro[n].ani.name!='attack'){
          necro[n].ani='attack'
          necro[n].changeAni('attack',"idle")
          necroAttackInt[n]=0
          necroTurning[n]=true
        }
        
      }
      if(necro[n].ani.name=='attack'){
          necroAttackInt[n]++
        if(necroAttackInt[n]==22*4){
          necroTurning[n]=false
        }
        if(necroAttackInt[n]==33*4){
          necroBlast[n]=new necroAttackGp.Sprite()
          if(necro[n].mirror.x==true){
            necroBlast[n].w=32*2.8
            necroBlast[n].h=necro[n].h
            necroBlast[n].x=necro[n].x-necro[n].w/2-necroBlast[n].w/2
            necroBlast[n].y=necro[n].y
            necroBlast[n].life=5*4
          }else{
            necroBlast[n].w=32*2.8
            necroBlast[n].h=necro[n].h
            necroBlast[n].x=necro[n].x+necro[n].w/2+necroBlast[n].w/2
            necroBlast[n].y=necro[n].y
            necroBlast[n].life=5*4
          }
         
        }
        if(necroAttackInt[n]>=46*4){
          necroTurning[n]=true
          necroAttackInt[n]=0
        }
      }
    //summon
      if(necroChoice[n]=='summon'&&dist(necro[n].x,necro[n].y,player.x,player.y)>=64*5){
        if(necroSummonCool[n]<=0){
          if(necro[n].ani.name!='summon'){
            necro[n].changeAni('summon','idle')
          }        
            necroSummons[n]+=1
          necroSummonCool[n]=1800
         // console.log(necroSummons[n])
        }
      }
      for(let i =0;i<necroSummons[n];i++){    
          skeleLive(i,necro[n].x/64,necro[n].y/64)
        
        
      }

      
  //attack collisions
    if(necroAttackInt[n]>=33*4){
      if(necroBlast[n].overlaps(player)){
        player.vel.y-=2
        health-=70
        if(necro[n].x>player.x){
         nocked=-30
        }else{
          nocked=30
        }
        
      }
    }
    
  //dies
    if(necroHealth[n]<=0){
      necro[n].collider='n'
      necro[n].changeAni('dies')
    necroDiestime[n]++
    necroChoice[n]='dead'
      if(necroDiestime[n]==17*4){
        necroTurning[n]=false
      }
      if(necroDiestime[n]>=52*4){
        necro[n].ani.noLoop()
      }
    }
  //hit
    if(slashActive==true){
       if(slash.overlaps(necro[n])){
        if(necro[n].ani.name!='hit'&&necro[n].ani.name!='attack'){
          necro[n].ani='hit'
          necro[n].changeAni('hit','idle')
        }
        necroHealth[n]-=playerDamage
        
    }
    }
    
  //scaling
    necro[n].ani.scale=2.5
    necro[n].ani.offset.y=10
    necro[n].ani.offset.x=-2
  //life track
    if(necroHealth[n]<=0){
      necroAlive[n]=false
    }
}
function skeleLive(n,x,y){
  //spawn
    if(skeleSpawned[n]==false){
      skele[n]=new skeles.Sprite()
        skele[n].x=x*64
        skele[n].y=y*64

      skele[n].addAni('idle',skeleIdle,{frameSize:[150,150],frames:4,frameDelay:8})
      skele[n].addAni('attack',skeleAttack,{frameSize:[150,150],frames:8,frameDelay:6})
      skele[n].addAni('attack2',skeleAttack2,{frameSize:[150,150],frames:8,frameDelay:4})
      skele[n].addAni('attack3',skeleAttack3,{frameSize:[150,150],frames:6,frameDelay:8})
      skele[n].addAni('dies',skeleDeath,{frameSize:[150,150],frames:4,frameDelay:8})
      skele[n].addAni('hit',skeleHit,{frameSize:[150,150],frames:4,frameDelay:8})
      skele[n].addAni('shield',skeleShield,{frameSize:[150,150],frames:4,frameDelay:16})
      skele[n].addAni('walk',skeleWalk,{frameSize:[150,150],frames:4,frameDelay:8})
      skele[n].ani='idle'

      skeleHealth[n]=75
     
      skeleSpawned[n]=true
    }
  //skele AI
 // if(kb.presses('k')){
 //   skeleHealth[n]=-10
  //  }
    //turning
      if(skeleTurning[n]){
         if(skele[n].x>=player.x){
        skele[n].mirror.x=true
        }else{
        skele[n].mirror.x=false
        }
      }
     
    //runup
      if(skeleCombo[n]=='default'){
        if(dist(skele[n].x,skele[n].y,player.x,player.y)>=80&&dist(skele[n].x,skele[n].y,player.x,player.y)<380){
          if(skele[n].ani.name!='walk'){
            skele[n].changeAni('walk')
          }
          if(skele[n].x>=player.x){
            skele[n].x-=6
          }else{
            skele[n].x+=6
          }
        }
      }
    //attacks
      //combo logic
      if(dist(skele[n].x,skele[n].y,player.x,player.y)<=80){
        if(skeleCombo[n]=='default'){
          skeleCombo[n]='attack'
        }
      }
        
      //attack logic
        if(skeleCombo[n]=='attack'){
          skeleAttackInt[n]++
          if(skele[n].ani.name!='attack'){
             skele[n].changeAni('attack','idle')
         
          }
          if(skeleAttackInt[n]==6*6){
            skeleTurning[n]=false
            skeleAttackBox[n]= new skeleAttacks.Sprite()
              skeleAttackBox[n].life=2+2*6
          
            if(skele[n].x>player.x){
              skeleAttackBox[n].x=skele[n].x-skeleAttackBox[n].w/2-skele[n].w/2
              skeleAttackBox[n].y=skele[n].y
            }else{
              skeleAttackBox[n].x=skele[n].x+skeleAttackBox[n].w/2+skele[n].w/2
              skeleAttackBox[n].y=skele[n].y
            }
          }
          if(skeleAttackInt[n]==8*6){
            skeleAttackInt[n]=0
            skeleTurning[n]=true
            if(dist(skele[n].x,skele[n].y,player.x,player.y)<=200){
              skeleCombo[n]='attack2'
            }else{
              skeleCombo[n]='default'
            }
            
          }
        }else if(skeleCombo[n]=='attack2'){
           skeleAttackInt[n]++
           
          if(skele[n].ani.name!='attack2'){
             skele[n].changeAni('attack2','idle')
         
          }
          if(skeleAttackInt[n]==6*4){
            skeleTurning[n]=false
            skeleAttackBox[n]= new skeleAttacks.Sprite()
              skeleAttackBox[n].w=148
              skeleAttackBox[n].h=150
              skeleAttackBox[n].life=2*4
            if(skele[n].x>player.x){
              skeleAttackBox[n].x=skele[n].x-skele[n].w/2-10
              skeleAttackBox[n].y=skele[n].y-25
            }else{
              skeleAttackBox[n].x=skele[n].x+skele[n].w/2+10
              skeleAttackBox[n].y=skele[n].y-25
            }
         
          
          }
          if(skeleAttackInt[n]==8*6){
            skeleAttackInt[n]=0
            skeleCombo[n]='shield'
          }
        }else if(skeleCombo[n]=='shield'){
          skeleAttackInt[n]++
          if(skele[n].ani.name!='shield'){
            skeleTurning[n]=false
            skele[n].changeAni('shield')
            skeleShielded[n]=true
          }
          if(skeleAttackInt[n]>=8*16){//two times through ani
            skele[n].changeAni('idle')
            skeleAttackInt[n]=0
            skeleCombo[n]='default'
            skeleTurning[n]=true
          }

        }


       
    //advanced AI
      //death Throw
        if(skeleThrown[n]==false){
          if(skeleHealth[n]<=0){
            skeleAttackInt[n]++
            if(skele[n].ani.name!='attack3'){
              skele[n].changeAni('attack3','dies')
              skeleCombo[n]='throw'
              skeleAttackInt[n]=0
             
            }
            if(skeleAttackInt[n]==3*8){
               skeleThrownSword[n]=new skeleAttacks.Sprite()
              skeleThrownSword[n].x=skele[n].x
              skeleThrownSword[n].y=skele[n].y
              skeleThrownSword[n].d=50
              skeleThrownSword[n].addAni('breaks',skeleSwordThrown,{frameSize:[92,102],frames:[4,5,6,7,8],frameDelay:4})
              skeleThrownSword[n].addAni('sword',skeleSwordThrown,{frameSize:[92,102],frames:3,frameDelay:8})
              skeleThrownSword[n].ani.scale=2
              skeleThrownSword[n].ani.offset.x=-5
              skeleThrownSword[n].ani.offset.y=-4
              if(skele[n].mirror.x){
                skeleThrownSword[n].vel.x=-15
              }else{
                skeleThrownSword[n].vel.x=15
              }
              
              skeleThrownSword[n].collider='d'
              skeleThrownSword[n].overlaps(player)
              skeleThrownSword[n].overlap(skeles)
            }
            if(skeleAttackInt[n]>=5*8){
              skeleThrown[n]=true
            }
            
          }
        }
        if(skele[n].ani.name=='dies'||skele[n].ani.name=='attack3'){
            if(skeleAttackInt[n]>=3*8){
             if(skeleThrownSword[n].collides(tilez)||skeleThrownSword[n].overlaps(player)){
                skeleThrownSword[n].changeAni('breaks')
                skeleThrownSword[n].collider='n'
                skeleThrownSword[n].vel.x=0
                skeleThrownSword[n].vel.y=0
                skeleSwordBreaking[n]=true
                if(skeleThrownSword[n].overlaps(player)){
                  health-=15
                  if(skeleThrownSword[n].x>player.x){
                    nocked=-5
                    player.vel.x=-1
                  }else{
                    nocked=5
                    player.vel.y=-1
                  }
                }
             }
             if(skeleSwordBreaking[n]){
                skeleSwordBreak[n]++
             }
             if(skeleSwordBreak[n]>=5*4)[
              skeleThrownSword[n].remove()
             ]
              
             
          }

        }
        
      //shield -see attack sequence
  //attack collisions
    if(skeleCombo[n]=='attack'){
      if(skeleAttackInt[n]>=6*6){
        if(skeleAttackBox[n].overlaps(player)){
       // background(0)
          health-=10
          if(skele[n].x>=player.x){
            player.vel.y=-2
            nocked=-7
          }else{
            player.vel.y=-2
            nocked=7
          }
        }
      }
    }else if(skeleCombo[n]=='attack2'){
      if(skeleAttackInt[n]>=6*4){
        if(skeleAttackBox[n].overlaps(player)){
       // background(0)
        health-=25
         if(skele[n].x>=player.x){
            player.vel.y=-5
            nocked=-10
          }else{
            player.vel.y=-5
            nocked=10
          }
        }
      }
    }
  //dies
    if(skeleThrown[n]){
      if(skeleHealth[n]<=0){
        skele[n].collider='n'
        skele[n].changeAni('dies')
      skeleDiesTime[n]++
      skeleCombo[n]='dead'
          skeleTurning[n]=false
        if(skeleDiesTime[n]>=4*8){
          skele[n].ani.noLoop()
        }
      }
    }
  //hit
    if(slashActive){
      if(skeleShielded[n]){
        if(skele[n].overlaps(slash)){
          if(skele[n].mirror.x==true){
            if(skele[n].x>player.x){
              //insert dink sound effect
            }else{
              if(skele[n].ani.name!='dies'){
                if(skele[n].ani.name!='hit'){
                  skele[n].changeAni('hit','idle')
                }
                skeleHealth[n]-=playerDamage
              }
            }
          }else{
            if(skele[n].x<player.x){
              //insert dink sound effect
            }else{
              if(skele[n].ani.name!='dies'){
                if(skele[n].ani.name!='hit'){
                  skele[n].changeAni('hit','idle')
                }
                skeleHealth[n]-=playerDamage
              }
            }
          }
        }
      }else{
        if(skele[n].overlaps(slash)){
          if(skele[n].ani.name!='dies'){
            if(skele[n].ani.name!='hit'){
              skele[n].changeAni('hit','idle')
            }
            skeleHealth[n]-=playerDamage
          }
        }
      }
      
    }
  //scale
    skele[n].ani.scale=1.7
    skele[n].ani.offset.y=2
    skele[n].ani.offset.x=-5
  //alive?
}
function floors(){
  floorSpawns()
  if(player.collides(door)){
    
    barrier.collider='s'
    if(mapNum==0){//to f1
      mapCurrent.removeAll()
      loadMap(1)
      player.x=64*11
      player.y=64*12
      mapNum=1
      for(let i =0;i++;i<10){
        gobo[i].x=1000000000
        gobo[i].remove()
      }
      gobos.removeAll()
    }else if(mapNum==1){//to f2
        mapCurrent.removeAll()
      loadMap(2)
      player.x=64*10
      player.y=64*10
      mapNum=2
      for(let i =0;i++;i<10){
        skele[i].x=1000000000
        skele[i].remove()
      }
      skeles.removeAll()
    }else if(mapNum==2){//to f3
       mapCurrent.removeAll() 
      loadMap(3)
      player.x=64*3
      player.y=64*10
      //console.log('floor2')
      mapNum=3
      for(let i =0;i++;i<10){
        skele[i].x=1000000000
        skele[i].remove()
      }
      skeles.removeAll()
    }else if(mapNum==3){
           mapCurrent.removeAll() 
      loadMap(4)
      player.x=64*10
      player.y=64*15
      //console.log('floor2')
      mapNum=4
      for(let i =0;i++;i<10){
        gollux[i].x=1000000000
        gollux[i].remove()
      }
      golloms.removeAll()
    }else if(mapNum==4){
      mapCurrent.removeAll() 
      loadMap(4)
      player.x=64*30
      player.y=64*12
      mapNum=5
      
      enemyGroup.removeAll()
    }
  }

  if(mapNum==3){
    if(golluxAlive[0]==false){
      barrier.collider='n'
    }
  }
}
function platTileLogic(){
  //no stilt/bridge var -
  for(let i=0;i<plat.length;i++){
    if(player.y>plat[i].y){
      plat[i].collider='n'
    }else{
      plat[i].collider='s'
    }
    if(player.colliding(plat[i])){
      if(kb.presses('s')){
        platpass[i]=true
      }
    }
   
    if(platpass[i]){
      plat[i].collider='n'
    }
   if(dist(player.x,player.y,plat[i].x,plat[i].y)<48){
    plat[i].collider='n'
   }else if(dist(player.x,player.y,plat[i].x,plat[i].y)>90){
    platpass[i]=false
   }
  }


  //og var
  for(let i=0;i<platOG.length;i++){
    if(player.y>platOG[i].y){
      platOG[i].collider='n'
    }else{
      platOG[i].collider='s'
    }
    if(player.colliding(platOG[i])){
      if(kb.presses('s')){
        platOGpass[i]=true
      }
    }
   
    if(platOGpass[i]){
      platOG[i].collider='n'
    }
   if(dist(player.x,player.y,platOG[i].x,platOG[i].y)<48){
    platOG[i].collider='n'
   }else if(dist(player.x,player.y,platOG[i].x,platOG[i].y)>90){
    platOGpass[i]=false
   }
  }

  //box var
  for(let i=0;i<platBox.length;i++){
    if(player.y>platBox[i].y){
      platBox[i].collider='n'
    }else{
      platBox[i].collider='s'
    }
    if(player.colliding(platBox[i])){
      if(kb.presses('s')){
        platBoxpass[i]=true
      }
    }
   
    if(platBoxpass[i]){
      platBox[i].collider='n'
    }
   if(dist(player.x,player.y,platBox[i].x,platBox[i].y)<48){
    platBox[i].collider='n'
   }else if(dist(player.x,player.y,platBox[i].x,platBox[i].y)>90){
    platBoxpass[i]=false
   }
  }
  for(let i=0;i<platST.length;i++){
    if(player.y>platST[i].y){
      platST[i].collider='n'
    }else{
      platST[i].collider='s'
    }
    if(player.colliding(platST[i])){
      if(kb.presses('s')){
        platSTpass[i]=true
      }
    }
   
    if(platSTpass[i]){
      platST[i].collider='n'
    }
   if(dist(player.x,player.y,platST[i].x,platST[i].y)<48){
    platST[i].collider='n'
   }else if(dist(player.x,player.y,platST[i].x,platST[i].y)>90){
    platSTpass[i]=false
   }
  }
  }


// player animation credit to aamatniekss on itch.io