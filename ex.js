<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<title>sample</title>
<script>
//Ä¶
function Play1(){
	document.getElementById("critical").play();
}
//ˆê’â~
function Pause1(){
	document.getElementById("critical").pause();
}
//Å‰‚©‚çÄ¶
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
<button onclick="Play1()">Ä¶</button>
<button onclick="Pause1()">ˆê’â~</button>
<button onclick="PlayFromFirst1()">Å‰‚©‚çÄ¶</button>
</body>
</html>