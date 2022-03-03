<?php
  function text_tag_change($e){
    $e = text_br_change($e);
    $e = str_replace("&lt;b&gt;","<b>",$e);
    $e = str_replace("&lt;/b&gt;","</b>",$e);
    $e = str_replace("&lt;i&gt;","</i>",$e);
    $e = str_replace("&lt;/i&gt;","</i>",$e);
    $e = str_replace("&lt;s&gt;","<s>",$e);
    $e = str_replace("&lt;/s&gt;","</s>",$e);
    $e = str_replace("&lt;u&gt;","<u>",$e);
    $e = str_replace("&lt;/u&gt;","</u>",$e);
    $e = str_replace("&lt;h1&gt;","<h1>",$e);
    $e = str_replace("&lt;/h1&gt;","</h1>",$e);
    $e = str_replace("&lt;h2&gt;","<h2>",$e);
    $e = str_replace("&lt;/h2&gt;","</h2>",$e);
    $e = str_replace("&lt;h3&gt;","<h3>",$e);
    $e = str_replace("&lt;/h3&gt;","</h3>",$e);
    $e = str_replace("&lt;h4&gt;","<h4>",$e);
    $e = str_replace("&lt;/h4&gt;","</h4>",$e);
    $e = str_replace("&lt;h5&gt;","<h5>",$e);
    $e = str_replace("&lt;/h5&gt;","</h5>",$e);
    $e = str_replace("&lt;h6&gt;","<h6>",$e);
    $e = str_replace("&lt;/h6&gt;","</h6>",$e);    
    return $e;
  }
?>