threejs 优化

在页面上创建大量webgl对象是很耗费性能的

如果有多个场景需要渲染，往往需要创建多个webgl上下文，因为他们之间是不共享的
很难用一个renderer去渲染多个sence

如果不需要可交互的效果，只是想展示多个3d场景的最终静态样子，
可以用一个webgl在内存中将他们逐个渲染出来并截图展示在页面