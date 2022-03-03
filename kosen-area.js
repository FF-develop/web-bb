window.onload = function() {

    kosen = document.getElementById("kosen");
    area = document.getElementById("area");
    area.onchange = changeArea;
}

//エリア選択
function changeArea(){
    var changeArea = area.value;
    document.getElementById("kosen").disabled = false;

    console.log(changeArea);

    if(changeArea == "北海道"){
        Hokkaido();
    }
    else if(changeArea == "東北"){
        Tohoku();
    }
    else if(changeArea == "関東"){
        Kanto();
    }
    else if(changeArea == "中部"){
        Chubu();
    }
    else if(changeArea == "近畿"){
        Kinki();
    }
    else if(changeArea == "中国"){
        Chugoku();
    }
    else if(changeArea == "四国"){
        Shikoku();
    }
    else if(changeArea == "九州"){
        Kyushu();
    }
    else{
        area_reset();
        document.getElementById("kosen").disabled = true;
    }
}

//北海道
function Hokkaido(){
    kosen.textContent = null;

    var Hokkaido = [
        {cd:"", label:"選択してください"},
        {cd:"釧路工業高等専門学校", label:"釧路工業高等専門学校"},
        {cd:"苫小牧工業高等専門学校", label:"苫小牧工業高等専門学校"},
        {cd:"函館工業高等専門学校", label:"函館工業高等専門学校"},
        {cd:"旭川工業高等専門学校", label:"旭川工業高等専門学校"},
        {cd:"学生(高専を除く)", label:"学生(高専を除く)"},
        {cd:"社会人・その他", label:"社会人・その他"}
    ];

    Hokkaido.forEach(function(value) {

        var op = document.createElement("option");
    
        op.value = value.cd;
    
        op.text = value.label;
    
        kosen.appendChild(op);
    
      });
}

//東北
function Tohoku(){
    kosen.textContent = null;

    var Tohoku = [
        {cd:"", label:"選択してください"},
        {cd:"一関工業高等専門学校", label:"一関工業高等専門学校"},
        {cd:"八戸工業高等専門学校", label:"八戸工業高等専門学校"},
        {cd:"仙台高等専門学校", label:"仙台高等専門学校"},
        {cd:"秋田工業高等専門学校", label:"秋田工業高等専門学校"},
        {cd:"鶴岡工業高等専門学校", label:"鶴岡工業高等専門学校"},
        {cd:"福島工業高等専門学校", label:"福島工業高等専門学校"},
        {cd:"学生(高専を除く)", label:"学生(高専を除く)"},
        {cd:"社会人・その他", label:"社会人・その他"}
    ];

    Tohoku.forEach(function(value) {

        var op = document.createElement("option");
    
        op.value = value.cd;
    
        op.text = value.label;
    
        kosen.appendChild(op);
    
      });
}

//関東
function Kanto(){
    kosen.textContent = null;

    var Kanto = [
        {cd:"", label:"選択してください"},
        {cd:"東京工業高等専門学校", label:"東京工業高等専門学校"},
        {cd:"小山工業高等専門学校", label:"小山工業高等専門学校"},
        {cd:"群馬工業高等専門学校", label:"群馬工業高等専門学校"},
        {cd:"茨木工業高等専門学校", label:"茨木工業高等専門学校"},
        {cd:"木更津工業高等専門学校", label:"木更津工業高等専門学校"},
        {cd:"学生(高専を除く)", label:"学生(高専を除く)"},
        {cd:"社会人・その他", label:"社会人・その他"}
    ];

    Kanto.forEach(function(value) {

        var op = document.createElement("option");
    
        op.value = value.cd;
    
        op.text = value.label;
    
        kosen.appendChild(op);
    
      });
}

//中部
function Chubu(){
    kosen.textContent = null;

    var Chubu = [
        {cd:"", label:"選択してください"},
        {cd:"鈴鹿工業高等専門学校", label:"鈴鹿工業高等専門学校"},
        {cd:"福井工業高等専門学校", label:"福井工業高等専門学校"},
        {cd:"長岡工業高等専門学校", label:"長岡工業高等専門学校"},
        {cd:"沼津工業高等専門学校", label:"沼津工業高等専門学校"},
        {cd:"長野工業高等専門学校", label:"長野工業高等専門学校"},
        {cd:"石川工業高等専門学校", label:"石川工業高等専門学校"},
        {cd:"富山高等専門学校", label:"富山高等専門学校"},
        {cd:"鳥羽商船高等専門学校", label:"鳥羽商船高等専門学校"},
        {cd:"岐阜工業高等専門学校", label:"岐阜工業高等専門学校"},
        {cd:"豊田工業高等専門学校", label:"豊田工業高等専門学校"},
        {cd:"学生(高専を除く)", label:"学生(高専を除く)"},
        {cd:"社会人・その他", label:"社会人・その他"}
    ];

    Chubu.forEach(function(value) {

        var op = document.createElement("option");
    
        op.value = value.cd;
    
        op.text = value.label;
    
        kosen.appendChild(op);
    
      });
}

//近畿
function Kinki(){
    kosen.textContent = null;

    var Kinki = [
        {cd:"", label:"選択してください"},
        {cd:"舞鶴工業高等専門学校", label:"舞鶴工業高等専門学校"},
        {cd:"和歌山工業高等専門学校", label:"和歌山工業高等専門学校"},
        {cd:"明石工業高等専門学校", label:"明石工業高等専門学校"},
        {cd:"奈良工業高等専門学校", label:"奈良工業高等専門学校"},
        {cd:"学生(高専を除く)", label:"学生(高専を除く)"},
        {cd:"社会人・その他", label:"社会人・その他"}
    ];

    Kinki.forEach(function(value) {

        var op = document.createElement("option");
    
        op.value = value.cd;
    
        op.text = value.label;
    
        kosen.appendChild(op);
    
      });
}

//中国
function Chugoku(){
    kosen.textContent = null;

    var Chugoku = [
        {cd:"", label:"選択してください"},
        {cd:"大島商船高等専門学校", label:"大島商船高等専門学校"},
        {cd:"呉工業高等専門学校", label:"呉工業高等専門学校"},
        {cd:"広島商船高等専門学校", label:"広島商船高等専門学校"},
        {cd:"米子工業高等専門学校", label:"米子工業高等専門学校"},
        {cd:"津山工業高等専門学校", label:"津山工業高等専門学校"},
        {cd:"宇部工業高等専門学校", label:"宇部工業高等専門学校"},
        {cd:"徳山工業高等専門学校", label:"徳山工業高等専門学校"},
        {cd:"松江工業高等専門学校", label:"松江工業高等専門学校"},
        {cd:"学生(高専を除く)", label:"学生(高専を除く)"},
        {cd:"社会人・その他", label:"社会人・その他"}
    ];

    Chugoku.forEach(function(value) {

        var op = document.createElement("option");
    
        op.value = value.cd;
    
        op.text = value.label;
    
        kosen.appendChild(op);
    
      });
}

//四国
function Shikoku(){
    kosen.textContent = null;

    var Shikoku = [
        {cd:"", label:"選択してください"},
        {cd:"高知工業高等専門学校", label:"高知工業高等専門学校"},
        {cd:"香川高等専門学校", label:"香川高等専門学校"},
        {cd:"弓削商船高等専門学校", label:"弓削商船高等専門学校"},
        {cd:"新居浜工業高等専門学校", label:"新居浜工業高等専門学校"},
        {cd:"阿南工業高等専門学校", label:"阿南工業高等専門学校"},
        {cd:"学生(高専を除く)", label:"学生(高専を除く)"},
        {cd:"社会人・その他", label:"社会人・その他"}
    ];

    Shikoku.forEach(function(value) {

        var op = document.createElement("option");
    
        op.value = value.cd;
    
        op.text = value.label;
    
        kosen.appendChild(op);
    
      });
}

//九州
function Kyushu(){
    kosen.textContent = null;

    var Kyushu = [
        {cd:"", label:"選択してください"},
        {cd:"北九州工業高等専門学校", label:"北九州工業高等専門学校"},
        {cd:"大分工業高等専門学校", label:"大分工業高等専門学校"},
        {cd:"佐世保工業高等専門学校", label:"佐世保工業高等専門学校"},
        {cd:"鹿児島工業高等専門学校", label:"鹿児島工業高等専門学校"},
        {cd:"久留米工業高等専門学校", label:"久留米工業高等専門学校"},
        {cd:"都城工業高等専門学校", label:"都城工業高等専門学校"},
        {cd:"有明高等専門学校", label:"有明高等専門学校"},
        {cd:"熊本高等専門学校", label:"熊本高等専門学校"},
        {cd:"沖縄工業高等専門学校", label:"沖縄工業高等専門学校"},
        {cd:"学生(高専を除く)", label:"学生(高専を除く)"},
        {cd:"社会人・その他", label:"社会人・その他"}
    ];

    Kyushu.forEach(function(value) {

        var op = document.createElement("option");
    
        op.value = value.cd;
    
        op.text = value.label;
    
        kosen.appendChild(op);
    
      });
}

//リセット
function area_reset(){
    kosen.textContent = null;

    var area_reset = [
        {cd:"", label:"選択してください"},
    ];

    area_reset.forEach(function(value) {

        var op = document.createElement("option");
    
        op.value = value.cd;
    
        op.text = value.label;
    
        kosen.appendChild(op);
    
      });
}

/*
function error(){
    kosen.textContent = null;
    document.getElementById("kosen").disabled = true;

    var area_reset = [
        {cd:"", label:"制作中"}
    ];

    area_reset.forEach(function(value) {

        var op = document.createElement("option");
    
        op.value = value.cd;
    
        op.text = value.label;
    
        kosen.appendChild(op);
    
      });
}
*/