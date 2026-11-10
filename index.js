let addplayerButton=document.querySelector(".addplayer-button");
let count=0;
let countplayerSpan=document.querySelector('.countplayer-span');
let container1=document.querySelector('.container1');
let continueButton=document.querySelector('.continue-button');
let chooseblyerForm=document.querySelector('.chooseblyer-form');
let finalContainer=document.querySelector('.final-container');
let voteH1=document.querySelector(".vote-h1");
let offobjectNamedisplay=document.querySelector(".offobject-namedisplay");
let containerbeforeOffobject=document.querySelector('.containerbefore-offobject');
let beforeoffobjectButton=document.querySelector('.beforeoffobject-button');
let voitingcontainerspan=document.querySelector('.startvote-container span');
let buttonsvoteDiv=document.querySelector('.buttonsvote-div');
let startvoteContainer=document.querySelector('.startvote-container');
let resultDisplay=document.querySelector('.result-display');
let mainoffobjectContainer=document.querySelector('.mainoffobject-container');
let resutlsButton=document.querySelector('.resutls-button');
let submitSound=new Audio('click.wav');
let resultsButtonSound=new Audio('resultsbutton.wav');
let addplayerButtonSound=new Audio('addplayerbutton.wav');
let removeplayerButtonSound=new Audio('removeplayerbutton.wav');
let voteButtonSound=new Audio('votebutton.mp3');
let revealOffobjectSound=new Audio('revealoffobject.wav');
let gunShotSound=new Audio('gunshot.wav');
let soundButton=document.querySelector('.sound-button');
let soundEnable;
let resultsContainer=document.querySelector('.resutls-container');
let playagainButton=document.querySelector('.playagain-button');
let newgameButton=document.querySelector('.newgame-button');




if(localStorage.getItem('sound')!=null){
    soundEnable=localStorage.getItem('sound')!=='false';
}else{
    soundEnable=true;
}

if(soundEnable){
    soundButton.textContent='🔊';
}else{
    soundButton.textContent='🔇';
}


soundButton.addEventListener('click',function(){
    soundEnable=!soundEnable;
    localStorage.setItem('sound',soundEnable);
    if(soundEnable){
        soundButton.textContent='🔊';
    }else{
        soundButton.textContent='🔇';

    }
});

function playSound(sound){
    if(!soundEnable){
        return;
    }
    sound.currentTime=0;
    sound.play();
}


addplayerButton.addEventListener('click',function(){
    playSound(addplayerButtonSound);
    count++;
    let addplayerDiv=document.createElement('div');
    let playerNumber=document.createElement('span');
    let inputtextPlayer=document.createElement('input');
    let deleteplayerButton =document.createElement('button');

    inputtextPlayer.type='text';

    playerNumber.textContent=count;
    addplayerDiv.appendChild(playerNumber);

    inputtextPlayer.classList.add('inputtext-player');
    inputtextPlayer.required=true;
    inputtextPlayer.maxLength=10;
    addplayerDiv.appendChild(inputtextPlayer);

    deleteplayerButton.textContent='🗑️';
    deleteplayerButton.classList.add('deleteplayer-button');
    deleteplayerButton.addEventListener('click',function(){
     playSound(removeplayerButtonSound);
     addplayerDiv.remove();
     count--;
     countplayerSpan.textContent=count;
    });

    addplayerDiv.appendChild(deleteplayerButton);
    addplayerDiv.classList.add('addplayer-div');
    document.querySelector('main').appendChild(addplayerDiv);
    
    countplayerSpan.textContent=count;
});


let playersInput=[];
let players=[];
let randomPlayerIndex;
let offobjectPlayer;
let objectsArray;
let randomObjectIndex;
let finalObject;


chooseblyerForm.addEventListener('submit',function(e){
    e.preventDefault();
   
    let playersForCheckNull=document.querySelectorAll('main input');
    let booleanForCheckNull=true;
    playersForCheckNull.forEach(playername=>{
        if(playername.value.trim()==='')
        {
            booleanForCheckNull=false;
        }
    });

     if(count<3||booleanForCheckNull==false){
        return;
     }

   playSound(submitSound);
    container1.classList.add('hidden');
  players=[];
    playersInput=document.querySelectorAll('.addplayer-div input');
    playersInput.forEach(player=>{
        players.push({
        name:player.value.trim(),
        status:true,
        score:0
    });
});

randomPlayerIndex=Math.floor(Math.random()*players.length);
offobjectPlayer=players[randomPlayerIndex];
offobjectPlayer.status=false;
 

objectsArray=[
    'سيارة','عامود كهرباء','كيبورد','ساعة','تفاحة',
    'كمبيوتر','بحر','طائرة','كرسي',
    'قلم','مفتاح','ثلاجة','جبل','كتاب',
    'هاتف','نافذة','مصباح','حذاء','كرة',
    'باب','قمر','شجرة','سفينة','نظارة','حقيبة',
    'مرآة','مروحة','تلفاز','سماعة','درج','مصعد',
    'جسر','قطار','دراجة','مظلة','كاميرا','وسادة',
    'بطارية','ساعة رملية','شمعة','ملعقة','شوكة',
    'صحن','كوب','زجاجة','خريطة','مقص','مطرقة',
    'مغناطيس','روبوت','فيل','زرافة','ذئب','ثعلب',
    'دب','أرنب','سلحفاة','تمساح','كنغر','غزال'
];


randomObjectIndex=Math.floor(Math.random()*(objectsArray.length));
finalObject=objectsArray[randomObjectIndex];
startphase2();
});

//container 2
let i=0;
function startphase2(){        
        function startcontainer2(){
            if(i==players.length){
                voting();
                return;
            }
            let container2=document.createElement("div");
            let container2H1=document.createElement("h1");
            let container2Span=document.createElement('span');
            let container2Button=document.createElement('button');
            
            container2Span.textContent=players[i].name;
            container2H1.textContent='اعطو الجوال ل ';
            container2H1.appendChild(container2Span);
            container2.appendChild(container2H1);
            
            
            container2Button.textContent='التالي';
            container2Button.classList.add('keepgo-button');
            container2.appendChild(container2Button);
            
            
            container2.classList.add('container2');
            document.body.appendChild(container2);
            
            
            container2Button.addEventListener('click',function(){
                playSound(submitSound);
                container2.remove();
                startcontainer3();
            });
        }
        
        function startcontainer3(){
            let container3=document.createElement("div");
            let container3H1=document.createElement("h1");
            let container3Span=document.createElement('span');
            let container3Span2=document.createElement('span');
            let container3p=document.createElement('p');
            let container3Span3=document.createElement('span');
            let container3Button=document.createElement('button');
            
            container3Span.textContent=` ${players[i].name} انت `;
            container3Span.classList.add('name-span');
            container3H1.appendChild(container3Span);
            
            if(players[i].status==true){
                container3Span2.textContent='جوا السالفة';
            }
            else{
                container3Span2.textContent='برا السالفة';
            }
            container3Span2.classList.add('choise-span');
            container3H1.appendChild(container3Span2);
            
            container3.appendChild(container3H1);
            
            if(players[i].status==true){

                container3Span3.textContent=finalObject;
                container3Span3.classList.add('animal-name');
                container3p.textContent='الموضوع هو';
                container3p.appendChild(container3Span3);
                container3.appendChild(container3p);
            }

            container3Button.textContent='التالي';
            container3Button.classList.add('keepgo-button2');
            container3.appendChild(container3Button);
            
            container3.classList.add('container3');
            document.body.appendChild(container3);
            
            container3Button.addEventListener('click',function(){
                playSound(submitSound);
                i++;
                container3.remove();
                startcontainer2();
            });
        }
        startcontainer2();
    }

    beforeoffobjectButton.addEventListener('click',function(){
        playSound(revealOffobjectSound);
        containerbeforeOffobject.classList.add('hidden');
        startoffobjectcontainer();
    });

 function startoffobjectcontainer() {

    mainoffobjectContainer.classList.remove("hidden");
    voteH1.textContent = players[0].name;

    let i = 0;

    let intraval = setInterval(function () {
        voteH1.textContent = players[i].name;
        i++;

        if (i >= players.length) {
            i = 0;
        }
    }, 150); 

    setTimeout(function () {
        clearInterval(intraval);
        revealOffobjectSound.pause();
        playSound(gunShotSound);
        voteH1.style.color = 'red';
        voteH1.textContent = offobjectPlayer.name;
        resutlsButton.classList.remove('hidden');
    }, 6000); 
}

let votingcount=0;
function voting(){
    startvoteContainer.classList.remove("hidden");
    if(votingcount>=players.length){
        startvoteContainer.classList.add('hidden');
        containerbeforeOffobject.classList.remove('hidden');
        return;
    }
    voitingcontainerspan.textContent=players[votingcount].name;
    for (let i=0;i<players.length;i++){
        let playervotebutton=document.createElement('button');
        playervotebutton.textContent=players[i].name;
        buttonsvoteDiv.appendChild(playervotebutton);
        playervotebutton.addEventListener('click',function(){
            playSound(voteButtonSound);
            if(players[i]===offobjectPlayer){
                if(players[votingcount]!==offobjectPlayer){
                    players[votingcount].score+=100;
                }
            }
            let votebuttons=document.querySelectorAll('.buttonsvote-div button');
            votebuttons.forEach(button=>{
                button.remove();
            });
            votingcount++;
            voting();
        });
    }
    
}
 
resutlsButton.addEventListener('click',function(){
    playSound(resultsButtonSound);
    mainoffobjectContainer.classList.add('hidden');
    results();
});

function results(){
    resultsContainer.classList.remove('hidden');
    for(let i=0;i<players.length;i++){
        let resultPlayerSpan=document.createElement('span');
        let resultplayerp=document.createElement('p');

        resultPlayerSpan.textContent=players[i].score;

        resultplayerp.textContent=`${players[i].name}`;
        resultplayerp.prepend(resultPlayerSpan);
        resultDisplay.appendChild(resultplayerp);
    }
} 

playagainButton.addEventListener('click',function(){
    playSound(submitSound);
    resultsContainer.classList.add('hidden');

    resultDisplay.innerHTML = '';

    for(let i=0;i<players.length;i++){
        players[i].status=true;

    }
    votingcount=0;
    i=0;

    randomPlayerIndex=Math.floor(Math.random()*players.length);
    offobjectPlayer=players[randomPlayerIndex];
    offobjectPlayer.status=false;


    randomObjectIndex=Math.floor(Math.random()*(objectsArray.length));
    finalObject=objectsArray[randomObjectIndex];
    resutlsButton.classList.add('hidden');
    voteH1.style.color = '#F8F5FF';



startphase2();
});

newgameButton.addEventListener('click',function(){
    playSound(submitSound);
    container1.classList.remove('hidden');
    resultDisplay.innerHTML = '';
    resultsContainer.classList.add('hidden');
    votingcount=0;
    i=0;
    resutlsButton.classList.add('hidden');
    voteH1.style.color = '#F8F5FF';
    players.length=0;
    let playersDivForDel=document.querySelectorAll('main .addplayer-div');
    playersDivForDel.forEach(input => {
    input.remove();        
    });
    count=0;
    countplayerSpan.textContent=0;
});
