/*
 * runstant
 */

phina.globalize();


phina.define('CursorSprite',{
  superClass:Sprite,
  init:function(){

    // 青い三角形
    var s=TriangleShape({
      fill:'skyblue',
      stroke:'blue'
    });
    //三角形の描画
    s.prerender(s.canvas);
    s.render(s.canvas);

    // 描画した三角形をSpriteにセットする
    this.superInit(s.canvas);

    // -40度回転
    this.rotation = -40;

    // くるくるカーソルのアニメーション
    this.tweener.to({
      scaleX:-0.5
    },500,'easeInOutCirc')
    .to({
      scaleX:0.5
    },500,'easeInOutCirc').setLoop(true);// ループ
    this.scaleX=0.5;
  },
});


phina.define('MainScene', {
  superClass: 'CanvasScene',
  
  init: function() {
    this.superInit();
    
    // TODO: ここにコードを書いていく
    var cs=this.cursor = Cursor().addChildTo(this);
      this.on('enterframe', function(e){
          this.addChild(cs);
          e.app.pointers.forEach(function(p){
              cs.position.set(p.x, p.y);
          });
      });
    

    var shape = CircleShape().addChildTo(this);
    shape.x=this.gridX.center();
    shape.y=this.gridY.center();

    shape.update = function() {
        shape.moveBy(1,1);
    };
  },
});

phina.main(function() {
  var app = GameApp({
    startLabel: 'main',
  });
  
  app.run();
});

