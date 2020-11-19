//.0 初始化画布
window.initCanvas = function(width,height){
    // .0 获取画布
    var canvas = document.getElementById("canvas");
    // .0 设置画布的大小
    canvas.width = width || 800;
    canvas.height = height || 800;
    // .0 获取绘图环境（对象）
    var context = canvas.getContext("2d");
    // .0 返回绘图环境（对象）
    return context;
}