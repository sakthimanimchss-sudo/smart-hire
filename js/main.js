document.addEventListener("DOMContentLoaded",()=>{
  const stats=document.querySelectorAll(".stats strong");
  let started=false;

  window.addEventListener("scroll",()=>{
    if(started) return;
    const sec=document.querySelector(".stats");
    if(!sec) return;

    if(sec.getBoundingClientRect().top<window.innerHeight){
      started=true;
      stats.forEach(s=>{
        let target=parseInt(s.innerText);
        let c=0,step=target/80;
        const run=()=>{
          c+=step;
          if(c<target){
            s.innerText=Math.floor(c)+"+";
            requestAnimationFrame(run);
          }else{
            s.innerText=target+"+";
          }
        };
        run();
      });
    }
  });
});
