<script lang="ts">
	import TabScreen from 'components/stateful/TabScreen.svelte';
     import SearchLogo from 'components/Presentation/SearchLogo.svelte';
     import SearchBar from 'components/stateful/SearchBar.svelte';
     import LinkList from 'components/stateful/LinkList.svelte';
	import BottomBar from 'components/stateful/BottomBar.svelte';
	import Reminders from 'components/stateful/Reminders.svelte';

	import {fadeIn} from 'utils/transitions';

	let container : HTMLElement;
	let currentPosition = 0;

	function moveSectionToIndex(newIndex : number){

		const totalChildren = container.children.length;
		const heightOfChild = container.children[0].getBoundingClientRect().height;
		
		const [minLimit , maxLimit] = [0 , totalChildren - 1];
		if(newIndex < minLimit || newIndex > maxLimit) return;
	
		const newTransformString = `translateY(calc(${newIndex} * ${heightOfChild}px))`;
		container.style.transform = newTransformString;

	
		currentPosition = newIndex;
	}

	function moveSectionToNextIndex(){
		const newIndex = currentPosition - 1;
		moveSectionToIndex(newIndex);
	}

	function moveSectionToPrevIndex(){
		const prevIndex = currentPosition + 1;
		moveSectionToIndex(prevIndex);
	}


	window.addEventListener('wheel' , (e)=>{
		console.log(e.deltaY);
		if(e.deltaY < 0){
			moveSectionToNextIndex();	
		}
		else if(e.deltaY > 0){
			moveSectionToPrevIndex();
		}
	})

</script>


<style>
	.container{
		position:relative;

		display:flex;
		flex-flow:column;
		align-items:center;
		justify-content:flex-end;

		height:100%;

		gap:1em;

		transition:transform 0.3s ease-out;
	}

	.containerWrapper{
		height:90vh;
		width:100%;
		overflow: hidden;
	}

	.bottomBar{

          --radius : 2em;

          padding:0.2em;
          height:45px;
          width:100%;

          position:fixed;
          left:0px;
          bottom:0px;
          border-radius:var(--radius) var(--radius) 0px 0px;
          background-color:var(--tabScreenBg);
     }


</style>

<div class="containerWrapper">
	<main class="container" 
		bind:this={container} 
	>
		<TabScreen>
			<Reminders/>
		</TabScreen>
		<TabScreen>
			<SearchLogo/>
			<SearchBar/>
			<LinkList/>
		</TabScreen>
	</main>
</div>

<div class="bottomBar" in:fadeIn={{delay : 500 , duration : 2000 , translateString : (t)=>{
	return `translateY(calc(20px - calc(${t} * 20px)));`
}}}>
	<BottomBar/>
</div>

