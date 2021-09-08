function start()
{
    navigator.mediaDevices.getUserMedia({
    audio:true
    });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/E_0Eq1MED/model.json',modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}
function gotResults(error,results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML='i can hear-'+results[0].label;
        document.getElementById("result_confidence").innerHTML='accuracy-'+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        img1=document.getElementById('dog');
        img2=document.getElementById('cat');
        img3=document.getElementById('lion');
        img4=document.getElementById('cow');
        if(results[0].label=="barking")
        {
            img1.src='dog.gif.crdownload';
            img2.src='cat.jfif';
            img3.src='lion.jfif';
            img4.src='cow.jfif';
        }
        else if(results[0].label=="meaowing")
        {
            img1.src='dog.jpg.crdownload';
            img2.src='cat.gif.crdownload';
            img3.src='lion.jfif';
            img4.src='cow.jfif';
        }
        else if(results[0].label=="roar")
        {
            img1.src='dog.jpg.crdownload';
            img2.src='cat.jfif';
            img3.src='angry-lion-gif-1.gif';
            img4.src='cow.jfif';
        }
        else if (results[0].label=="mooing")
        {
            img1.src='dog.jpg.crdownload';
            img2.src='cat.gif.crdownload';
            img3.src='lion.jfif';
            img4.src='cow1.jfif';
        }
        else
        {
            img1.src='dog.jpg.crdownload';
            img2.src='cat.gif.crdownload';
            img3.src='lion.jfif';
            img4.src='cow1.jfif';  
        }
    }

}

