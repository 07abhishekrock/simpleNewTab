<style>

     .searchLogo{
          width:150px;
          height:80px;

          margin:0 auto;

          display:flex;
          align-items:center;
          justify-content:center;
          gap:0.8em;

          --animationDuration : 0.5s;
          --delayFactor : 0.3s;
     }
     .searchLogo span{
          width:5px;
          border-radius:0.5em;
          background-color:gray;
          height:100%;
     }

     .searchLogo span:first-child{
          animation:searchAnimation var(--animationDuration) ease-in-out infinite both alternate;
     }
     .searchLogo span:nth-child(2){
          animation:searchAnimation var(--animationDuration) ease-in-out infinite both alternate var(--delayFactor);
     }
     .searchLogo span:nth-child(3){
          animation:searchAnimation var(--animationDuration) ease-in-out infinite both alternate calc(var(--delayFactor) * 1.5);
     }
     .searchLogo span:last-child{
          animation:searchAnimation var(--animationDuration) ease-in-out infinite both alternate calc(var(--delayFactor) * 2);
     }

     @keyframes searchAnimation{
          /* from{
               height:30%;
          }
          to{
               height:100%;
          } */
     }
</style>

<div class="searchLogo">
     <span></span>
     <span></span>
     <span></span>
     <span></span>
</div>