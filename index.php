<?php
  function console_log($data){
    echo '<script>';
    echo 'console.log('.json_encode($data).')';
    echo '</script>';
  }
  function text_def_change($e){
    return htmlspecialchars($e, ENT_QUOTES, 'UTF-8');
  }
  function text_br_change($e){
    return nl2br(text_def_change($e));
  }
  require_once("text_tag_change.php");
?>

<?php
  if($_SERVER["REQUEST_METHOD"] == "POST"){

    $id = $_POST["id"];
    $name = $_POST["name"];
    $area = $_POST["area"];
    $kosen = $_POST["kosen"];
    $time = date("H:i:s");
    $date = date("Y/m/d");
    $text = $_POST["text"];
    $img = $_POST["img"];

    require_once("db_info.php");
    $insertDB = mysqli_connect($SERV,$USER,$PASS,$DBNM) or die("ERROR : データベースに接続できません");
    console_log("insertDB:OK");

    console_log("id : ".$id." name : ".$name);
    console_log("area : ".$area." kosen : ".$kosen);
    console_log("date : ".$date." ".$time);
    console_log("text : ".$text);
    console_log("img : ".$img);
    if($name==NULL||$text==NULL) die("ERROR : 予期せぬエラー");

    mysqli_query($insertDB,"insert into XXXXX (name,time,date,text,img,kosen) values('$name','$time','$date','$text','$img','$kosen')");
    console_log(mysqli_error($insertDB));

    mysqli_close($insertDB);

  }
?>

<html lang="ja">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="imagetoolbar" content="no">
    <link rel="stylesheet" href="./common.css">

    <link rel="stylesheet" type="text/css" media="only screen and (max-device-width:999px)" href="./index_sm.css">
    <link rel="stylesheet" type="text/css" media="screen and (min-device-width:1000px)" href="./index.css">

    <link rel="stylesheet" href="top.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script type="text/javascript" src="./index.js"></script>
    <script type="text/javascript" src="./kosen-area.js"></script>
    <title>Web掲示板</title>
  </head>
  <header>
    <h1>掲示板機能</h1>
  </header>
  <body>
    <p id="RealtimeClockArea">-</p>
    <!--送信-->
    <form action="index.php" method="post">
      <p>ニックネーム：<input name="name" id="name" class="name" type="text" maxlength="10" onkeyup="check_input()" placeholder="最大10文字" autocomplete="off">
        <label><input type="checkbox" class="checkbox" id="anonymous" onchange="check_input()">匿名</label></p>
        <span>地域：<select name="area" id="area" class="select_tag">
          <option value="">選択してください</option>
          <option value="北海道">北海道</option>
          <option value="東北">東北</option>
          <option value="関東">関東</option>
          <option value="中部">中部</option>
          <option value="近畿">近畿</option>
          <option value="中国">中国</option>
          <option value="四国">四国</option>
          <option value="九州">九州</option>
        </select></span>
        <span>所属：<select name="kosen" id="kosen" id="kosen_disa" class="select_tag" disabled>
          <option value="">選択してください</option>
        </select></span>
        <textarea name="text" id="text" maxlength="200" onkeyup="viewStrLen();check_input();"placeholder="本文(200文字以内)" autocomplete="off"></textarea><br>
        <div id="text-count">0文字</div>/200文字<br>
        <button type="btn-send" id="submit_button" class="button" onclick="submit_element()" disabled>送信</button>
        <input type="button" class="button" value="クリア" onclick="clearTextarea()">
        <p>写真をアップロードする(準備中)</p>
        <p><input name="img" type="hidden" accept=".png, .jpg, .jpeg" value="0" disabled></p>
    </form>
    <hr>
    <!--閲覧-->
    <div class="reload">
    <?php

      require_once("db_info.php");
      $getDB = mysqli_connect($SERV,$USER,$PASS,$DBNM) or die("失敗です");
      console_log("getDB:OK");

      $re = mysqli_query($getDB,"select * from XXXXX order by id desc");

      while($result = mysqli_fetch_array($re)){

        $id = $result[0];
        $name = $result[1];
        $time = $result[2];
        $date = $result[3];
        $text = $result[4];
        $img = $result[5];
        $kosen = $result[6];
        console_log($result);

        print "投稿ID：<div>".sprintf("%06d",$id)."</div> 投稿時間：<div>".$date."&nbsp".$time."</div><br>";
        print "高専：<div>".$kosen."</div><br>";
        print "ニックネーム：<div>".text_def_change($name)."</div><br>";
        print "<div>".text_tag_change($text)."</div><br>";
        print "".$img;
        print "<hr color='black' size='1px'>";
      }

      mysqli_close($getDB);

    ?>
    <hr>
    </div>
    <button id="page-top" class="page-top" onclick="topBtn()">TOP</button>
  </body>
  <footer>
    <p>Web掲示板(バージョン：2110280942)</p>
    <a href="#">Web-bb project</a><br>
    <a href="http://ffdevelop.php.xdomain.jp/index.html">&#169;FF-Developer_2021</a>
  </footer>
</html>