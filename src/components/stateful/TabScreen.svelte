<script lang="ts">
     import {fadeIn} from 'utils/transitions';
</script>

<style>
     .tabScreen{

          border-radius:0.5em;
          box-shadow:0px 0px 25px 5px rgba(0,0,0,0.05);
          background-color:var(--tabScreenBg);
          border-top:5px solid var(--secondaryBg);
          border-bottom:5px solid var(--secondaryBg);
          width:900px;
          height:550px;

          padding:3em 2em;

          flex-shrink:0;

     }

</style>

<div class="tabScreen" in:fadeIn>
     <slot></slot>
</div>

