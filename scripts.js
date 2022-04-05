let arr=[];
let mr=document.querySelectorAll('.middle-row');

let lr=document.querySelectorAll('.lower-row');
let ob=document.getElementsByClassName('color-box');
let status=document.querySelectorAll('.result');
let title_bg=document.querySelectorAll('.header');
let level=document.querySelectorAll('.level');
let l;
let idx;
let number_of_rows=1;

mr[0].classList.remove('d-flex');
mr[0].style.display='none';     
lr[0].classList.remove('d-flex');
lr[0].style.display='none'; 
function color()
{
    arr=[];
    l=number_of_rows*3;
            for(let i=0;i<l;i++)
            {
            ob[i].style.opacity='1';
            let x= Math.floor(Math.random() * 256);
            let y=Math.floor(Math.random() * 256);
            let z=Math.floor(Math.random() * 256);
            let bg_color="rgb("+x+", "+y+", "+z+")";
            arr.push(bg_color);
            ob[i].style.backgroundColor=bg_color;
            }
            
    idx=Math.floor(Math.random()*l);
            document.getElementById('header').innerHTML=arr[idx].toUpperCase();
}
function change_size(size)
{
    for(let i=0;i<number_of_rows*3;i++)
    {
    ob[i].style.width=size;
    ob[i].style.height=size;
    }
}
function game_mode(){
    for(let i=0;i<level.length;i++)
    {
        level[i].addEventListener('click',function(){
            status[0].innerHTML='';
            for(let j=0;j<level.length;j++)
            level[j].classList.remove('active');
            this.classList.add('active');
            if(this.innerHTML==="EASY")
            {
                change_size('200px');
                number_of_rows=1;
                mr[0].classList.remove('d-flex');
                mr[0].style.display='none';     
                lr[0].classList.remove('d-flex');
                lr[0].style.display='none';     
            }
            else if(this.innerHTML==="MEDIUM")
            {
                number_of_rows=2;
                change_size('180px');
                mr[0].classList.add('d-flex');
                lr[0].classList.remove('d-flex');
                lr[0].style.display='none';     
            }
            else
            {
                number_of_rows=3;
                change_size('130px');
                mr[0].classList.add('d-flex');
                lr[0].classList.add('d-flex');
            }
            color();
        })
    }
}
color();
game_mode();
iscolor(color);
let click=false;
function iscolor(color){
    for(let i=0;i<ob.length;i++)
    {
        ob[i].addEventListener('click',function(){
            if(this.style.backgroundColor==arr[idx])
            {
            title_bg[0].style.backgroundColor=arr[idx];
            status[0].innerHTML="CORRECT!";
            for(let i=0;i<l;i++)
            {
            ob[i].style.backgroundColor=arr[idx];
            }
            console.log('in');
            if(click)
            {
                color();
            }
            click=!click;
            }
            else
            {
                this.style.opacity='0';
                status[0].innerHTML="TRY AGAIN!";
            }
        })
    }
}
