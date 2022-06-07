console.log("this is my tutorial 42");
var button=document.getElementById('button');
var content=document.getElementById('unli');
var content2=document.getElementById('unli2');
var url="posts.json";
var post=[];
var changetitle=["BBR1","BBR2","BBR3","BBR4","BBR5","BBR6","BBR7","BBR8","BBR9","BBR10","BBR11","BBR12","BBR13","BBR14","BBR15","BBR16","BBR17","BBR18","BBR19","BBR20","BBR21"];
function getdata()
{
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        post=data.posts;
        for(var i=0; i<post.length; i++)
      {
         console.log(post[i].title)
         var list=document.createElement('li');
        list.innerHTML=post[i].title;
        content.append(list);

    }
    })
    
}
function changedata()
{
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        post=data.posts;
        for(var i=0; i<post.length; i++)
      {
         console.log(post[i].title)
         var list=document.createElement('li');
         post[i].title=changetitle[i];
         list.innerHTML=post[i].title;
        content2.append(list);

    }
    })
    
}