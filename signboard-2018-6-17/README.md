[预览链接](https://astak16.github.io/Study-CSS/signboard-2018-6-17/index.html)

知识点
1. `animation`沿着上边沿转，有两种方式
  第一种是在动画`@keyframes`添加`translateX`，有多个相同动画的元素可能会出错
  ```
  @keyframes shack{
  	from{
    		transform:rotate(10deg) translateX(-20px) ;
  	}
  	to{
    		transform:rotate(-10deg) translateX(20px); 
  	}
  }
  ```
  第二种是在添加动画的那个元素上添加`transform-origin:top;`试用比较广。

2. 背景画网格线

   ```
   div{
     	width:400px;
     	height:300px;
   	position:relative;
   }
   div::before{
     	content:'';
     	width:calc(100% + 1px);	//最右边一根线显示出来，补充一像素
     	height:calc(100% + 1px);//最下边一根线显示出来，补充一像素
     	position:absolute;
     	background-size:50px 50px;
     	background-image: 
           linear-gradient(gray 1px, transparent 0),
           linear-gradient(90deg, gray 1px, transparent 0);
     z-index:1;
   ```

   ​
