function AddFavorite(title, url) {
  try {
      window.external.addFavorite(url, title);
  }
catch (e) {
     try {
       window.sidebar.addPanel(title, url, "");
    }
     catch (e) {
         alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
     }
  }
}
function addFavorite2(){
    if (document.all){//IE
        try{
            window.external.addFavorite(window.location.href,document.title);
        }catch(e){
            alert( "加入收藏失败，请使用Ctrl+D进行添加" );
        }
        
    }else if (window.sidebar){
        window.sidebar.addPanel(document.title, window.location.href, "");
     }else{
        alert( "加入收藏失败，请使用Ctrl+D进行添加" );
    }
}
