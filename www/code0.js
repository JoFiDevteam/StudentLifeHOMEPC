gdjs.MyGameCode = {};
gdjs.MyGameCode.GDMindaObjects1= [];
gdjs.MyGameCode.GDMindaObjects2= [];
gdjs.MyGameCode.GDMindaObjects3= [];
gdjs.MyGameCode.GDTilebgObjects1= [];
gdjs.MyGameCode.GDTilebgObjects2= [];
gdjs.MyGameCode.GDTilebgObjects3= [];
gdjs.MyGameCode.GDAvatarObjects1= [];
gdjs.MyGameCode.GDAvatarObjects2= [];
gdjs.MyGameCode.GDAvatarObjects3= [];
gdjs.MyGameCode.GDObstacleObjects1= [];
gdjs.MyGameCode.GDObstacleObjects2= [];
gdjs.MyGameCode.GDObstacleObjects3= [];
gdjs.MyGameCode.GDCameraPosObjects1= [];
gdjs.MyGameCode.GDCameraPosObjects2= [];
gdjs.MyGameCode.GDCameraPosObjects3= [];

gdjs.MyGameCode.conditionTrue_0 = {val:false};
gdjs.MyGameCode.condition0IsTrue_0 = {val:false};
gdjs.MyGameCode.condition1IsTrue_0 = {val:false};


gdjs.MyGameCode.eventsList0x7860dc = function(runtimeScene) {

{



}


{

gdjs.MyGameCode.GDMindaObjects2.createFrom(runtimeScene.getObjects("Minda"));

gdjs.MyGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MyGameCode.GDMindaObjects2.length;i<l;++i) {
    if ( gdjs.MyGameCode.GDMindaObjects2[i].getBehavior("TopDownMovement").isMoving() ) {
        gdjs.MyGameCode.condition0IsTrue_0.val = true;
        gdjs.MyGameCode.GDMindaObjects2[k] = gdjs.MyGameCode.GDMindaObjects2[i];
        ++k;
    }
}
gdjs.MyGameCode.GDMindaObjects2.length = k;}if (gdjs.MyGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MyGameCode.GDMindaObjects2 */
{for(var i = 0, len = gdjs.MyGameCode.GDMindaObjects2.length ;i < len;++i) {
    gdjs.MyGameCode.GDMindaObjects2[i].setAnimation(1 + Math.round((gdjs.MyGameCode.GDMindaObjects2[i].getBehavior("TopDownMovement").getAngle()) / 45));
}
}}

}


{

gdjs.MyGameCode.GDMindaObjects2.createFrom(runtimeScene.getObjects("Minda"));

gdjs.MyGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MyGameCode.GDMindaObjects2.length;i<l;++i) {
    if ( !(gdjs.MyGameCode.GDMindaObjects2[i].getBehavior("TopDownMovement").isMoving()) ) {
        gdjs.MyGameCode.condition0IsTrue_0.val = true;
        gdjs.MyGameCode.GDMindaObjects2[k] = gdjs.MyGameCode.GDMindaObjects2[i];
        ++k;
    }
}
gdjs.MyGameCode.GDMindaObjects2.length = k;}if (gdjs.MyGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MyGameCode.GDMindaObjects2 */
{for(var i = 0, len = gdjs.MyGameCode.GDMindaObjects2.length ;i < len;++i) {
    gdjs.MyGameCode.GDMindaObjects2[i].setAnimation(0);
}
}}

}


{


gdjs.MyGameCode.condition0IsTrue_0.val = false;
{
gdjs.MyGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MyGameCode.condition0IsTrue_0.val) {
gdjs.MyGameCode.GDTilebgObjects1.createFrom(runtimeScene.getObjects("Tilebg"));
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Y").setNumber(gdjs.evtTools.input.getTouchY(runtimeScene, gdjs.evtTools.input.getLastTouchId(runtimeScene), "base", 0));
}{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("X").setNumber(gdjs.evtTools.input.getTouchX(runtimeScene, gdjs.evtTools.input.getLastTouchId(runtimeScene), "base", 0));
}{for(var i = 0, len = gdjs.MyGameCode.GDTilebgObjects1.length ;i < len;++i) {
    gdjs.MyGameCode.GDTilebgObjects1[i].setPosition(gdjs.MyGameCode.GDTilebgObjects1[i].getX() +gdjs.evtTools.input.getTouchX(runtimeScene, gdjs.evtTools.input.getLastTouchId(runtimeScene), "UI", 0) - gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("X")),gdjs.MyGameCode.GDTilebgObjects1[i].getY() +gdjs.evtTools.input.getTouchY(runtimeScene, gdjs.evtTools.input.getLastTouchId(runtimeScene), "UI", 0) - gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("X")));
}
}}

}


}; //End of gdjs.MyGameCode.eventsList0x7860dc
gdjs.MyGameCode.mapOfGDgdjs_46MyGameCode_46GDObstacleObjects1Objects = Hashtable.newFrom({"Obstacle": gdjs.MyGameCode.GDObstacleObjects1});gdjs.MyGameCode.eventsList0x786a0c = function(runtimeScene) {

{


gdjs.MyGameCode.condition0IsTrue_0.val = false;
{
gdjs.MyGameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MyGameCode.condition0IsTrue_0.val) {
gdjs.MyGameCode.GDObstacleObjects2.createFrom(runtimeScene.getObjects("Obstacle"));
{for(var i = 0, len = gdjs.MyGameCode.GDObstacleObjects2.length ;i < len;++i) {
    gdjs.MyGameCode.GDObstacleObjects2[i].hide();
}
}}

}


{



}


{


{
gdjs.MyGameCode.GDMindaObjects1.createFrom(runtimeScene.getObjects("Minda"));
gdjs.MyGameCode.GDObstacleObjects1.createFrom(runtimeScene.getObjects("Obstacle"));
{for(var i = 0, len = gdjs.MyGameCode.GDMindaObjects1.length ;i < len;++i) {
    gdjs.MyGameCode.GDMindaObjects1[i].separateFromObjectsList(gdjs.MyGameCode.mapOfGDgdjs_46MyGameCode_46GDObstacleObjects1Objects, false);
}
}}

}


}; //End of gdjs.MyGameCode.eventsList0x786a0c
gdjs.MyGameCode.eventsList0x786f24 = function(runtimeScene) {

{


{
gdjs.MyGameCode.GDCameraPosObjects1.createFrom(runtimeScene.getObjects("CameraPos"));
{for(var i = 0, len = gdjs.MyGameCode.GDCameraPosObjects1.length ;i < len;++i) {
    gdjs.MyGameCode.GDCameraPosObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.camera.getCameraX(runtimeScene, "base", 0)) + " , " + gdjs.evtTools.common.toString(gdjs.evtTools.camera.getCameraY(runtimeScene, "base", 0)));
}
}}

}


}; //End of gdjs.MyGameCode.eventsList0x786f24
gdjs.MyGameCode.eventsList0xb43b0 = function(runtimeScene) {

{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Player controls"); }gdjs.MyGameCode.eventsList0x7860dc(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Player controls"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Collision handling"); }gdjs.MyGameCode.eventsList0x786a0c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Collision handling"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Camera"); }gdjs.MyGameCode.eventsList0x786f24(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Camera"); }
}


}; //End of gdjs.MyGameCode.eventsList0xb43b0


gdjs.MyGameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MyGameCode.GDMindaObjects1.length = 0;
gdjs.MyGameCode.GDMindaObjects2.length = 0;
gdjs.MyGameCode.GDMindaObjects3.length = 0;
gdjs.MyGameCode.GDTilebgObjects1.length = 0;
gdjs.MyGameCode.GDTilebgObjects2.length = 0;
gdjs.MyGameCode.GDTilebgObjects3.length = 0;
gdjs.MyGameCode.GDAvatarObjects1.length = 0;
gdjs.MyGameCode.GDAvatarObjects2.length = 0;
gdjs.MyGameCode.GDAvatarObjects3.length = 0;
gdjs.MyGameCode.GDObstacleObjects1.length = 0;
gdjs.MyGameCode.GDObstacleObjects2.length = 0;
gdjs.MyGameCode.GDObstacleObjects3.length = 0;
gdjs.MyGameCode.GDCameraPosObjects1.length = 0;
gdjs.MyGameCode.GDCameraPosObjects2.length = 0;
gdjs.MyGameCode.GDCameraPosObjects3.length = 0;

gdjs.MyGameCode.eventsList0xb43b0(runtimeScene);
return;

}
gdjs['MyGameCode'] = gdjs.MyGameCode;
