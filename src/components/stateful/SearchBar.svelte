<script lang="ts">

     import SearchBarSVG from '../../assets/icons/Search.svg';     

     let searchBarValue="";

     const onSearchValueChange : svelte.JSX.FormEventHandler<HTMLInputElement> = (e)=>{
          searchBarValue = e.currentTarget.value;
     }

</script>

<style>
     .searchBar{
          margin:2em auto;
          margin-top:3em;

          display:flex;
          align-items:stretch;
          justify-content: center;
          gap:0.5em;

          background-color:var(--secondaryClr);
          border-radius:0.2em;

          width:70%;
     }
     .searchBar input{
          padding:1em;
          outline:0px;
          border:0px;
          border-radius:inherit;

          flex-grow:1;
          font-size:1.2em;
          font-weight:500;
     }

     .searchBar button{
          border-radius:inherit;
          border:0px;
          color:var(--blueClr);

          padding:0.5em;
          background-color:inherit;
          transition:transform 0.2s ease-out;

          display:inline-grid;
          place-items:center;

          cursor:pointer;
     }

     .searchBar button:hover,
     .searchBar button:focus-within
     {
          transform:scale(1.1);
          background-color:#1A2429;
          outline:none;
     }

     .searchBar button img{
          width:2em;
     }

</style>


<div class="searchBar">
     <input 
          type="text" 
          value={searchBarValue} 
          on:change={onSearchValueChange}
          placeholder={"Search With Google"}
     />
     <button>
          <img src={SearchBarSVG} alt="search"/>
     </button>
</div>