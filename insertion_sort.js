var a =document.getElementById("insertion");
a.addEventListener("click",func);

function func(){
    arr=[]
    arr_sizes=[]
    bar=document.getElementById("bars").querySelectorAll("div");
    for(let i=0;i<bar.length;i++){
        arr.push((bar[i].style['height'].slice(0,bar[i].style['height'].length-2)));

    }

    b=[];
    for(let i=0;i<bar.length;i++){
        b.push(parseInt(arr[i]));
        arr[i]+="px";
    }
    // for(let i=0;i<bar.length;i++){
    //     console.log(b[i]);
    // }

    // for(let i=0;i<bar.length;i++){
    //     console.log(arr[i]);
    // }

    function fun(arr,j,bar){
        arr[j+1]=arr[j];
        bar[j+1].style.height=arr[j+1];
        bar[j].style['border-left']="15px solid blue";
        bar[j+1].style['border-left']="15px solid blue";
    }

    function fun1(arr,j,key,i){
        arr[j+1]=key+"px";
        bar[j+1].style.height=arr[j+1];
        bar[j+1].style['border-left']="15px solid blue";
        bar[i].style['border-left']="15px solid blue";
    }

    function fun2(arr,j,bar){
        bar[j].style['border-left']="15px solid red";
        bar[j+1].style['border-left']="15px solid red";
    }

    function fun3(j,i){
        bar[j+1].style['border-left']="15px solid red";
        bar[i].style['border-left']="15px solid red";
        
    }

    var j,key;
    var add=0;
    var del=300;
    for(let i=1;i<bar.length;i++){
        j=i-1;
        key=b[i];
        while(j>=0 && b[j]>key){
            b[j+1]=b[j];
            add+=del;
            setTimeout(fun2,add,arr,j,bar);
            add+=del;
            setTimeout(fun,add,arr,j,bar);
            j=j-1;
        }
        b[j+1]=key;
        add+=del;
        setTimeout(fun3,add,j,i);
        add+=del;
        setTimeout(fun1,add,arr,j,key,i);
    }
    for(let i=0;i<bar.length;i++){
        console.log(arr[i]);
    }

}
    

        
    
