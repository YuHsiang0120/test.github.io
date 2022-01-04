function eyes_change(){
        var pass = document.getElementById("password");
        var imgs = document.getElementById("eyes");
        var flag = 0;
        imgs.onclick=function(){
        if(flag==0){
            pass.type='text';
            eyes.src = '../images/openeyes.png';
            flag = 1;
        }
        else{
            pass.type='password';
            eyes.src='../images/closeeyes.png';
            flag=0;
        }
    }
}
