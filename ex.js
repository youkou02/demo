<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<title>sample</title>
<script>
//再生
function Play1(){
	document.getElementById("critical").play();
}
//一時停止
function Pause1(){
	document.getElementById("critical").pause();
}
//最初から再生
function PlayFromFirst1(){
	document.getElementById("critical").currentTime=0;
	document.getElementById("critical").play();
}
</script>
</head>
<body>
	<video id="test1" width="500" height="300" >
		<source src="./test1.mp4" type="video/mp4">
	</video>
<br />
<button onclick="Play1()">再生</button>
<button onclick="Pause1()">一時停止</button>
<button onclick="PlayFromFirst1()">最初から再生</button>
</body>
</html>