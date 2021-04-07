const colors = [
    'black',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];



  const refs = {
      btnStart: document.querySelector('[data-action="start"]'),
      btnStop: document.querySelector('[data-action="stop"]'),
      body: document.querySelector('body'),
  };


  let intervalId = null;

  const start = ()=>{
      
     const randomIntegerFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
  };
        intervalId = setInterval(()=>{
        refs.body.style.background = colors[randomIntegerFromInterval(0, colors.length-1)];
      }, 1000)
   
        refs.btnStart.removeEventListener('click', start);
  }



  const stop = ()=>{
    refs.btnStart.addEventListener('click', start);
    clearInterval(intervalId);
  }


  refs.btnStart.addEventListener('click', start);
  refs.btnStop.addEventListener('click', stop);







  