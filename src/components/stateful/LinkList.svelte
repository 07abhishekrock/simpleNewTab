<script lang="ts">
     import terminalIcon from 'assets/icons/terminal.svg';
     import eyeIcon from 'assets/icons/eye.svg';
     import anchorIcon from 'assets/icons/anchor.svg';
     import tvIcon from 'assets/icons/tv.svg';
     import musicNoteIcon from 'assets/icons/musicNote.svg';

     let linkListData = [
          {
               id : '100',
               listHeading : 'Code',
               headImage : terminalIcon,
               links : [
                    {
                         label : 'Hackerrank',
                         url : 'https://www.hackerrank.com'
                    }
               ]
          },
          {
               id : '101',
               listHeading : 'CodeStore',
               headImage : anchorIcon,
               links : [
                    {
                         label : 'Github',
                         url : 'https://www.github.com'
                    },
                    {
                         label : 'Bitbucket',
                         url : 'https://www.bitbucket.org'
                    }
               ]
          },
          {
               id : '102',
               listHeading : 'Music',
               headImage : musicNoteIcon,
               links : [
                    {
                         label : 'Yt Music',
                         url : 'https://www.music.youtube.com'
                    },
               ]
          },
          {
               id : '103',
               listHeading : 'stream',
               headImage : tvIcon,
               links : [
                    {
                         label : 'Youtube',
                         url : 'https://www.youtube.com'
                    },
                    {
                         label : 'Hotstar',
                         url : 'https://www.hotstar.com'
                    }
               ]
          },
          {
               id : '103',
               listHeading : 'Others',
               headImage : eyeIcon,
               links : [
                    {
                         label : 'Unsplash',
                         url : 'https://www.unsplash.com'
                    },
                    {
                         label : 'Photos',
                         url : 'https://www.photos.google.com'
                    },
               ]
          },                   
     ];
</script>

<div class="linkListWrapper">
     {#each linkListData as linkList}
          <div class="linkList">
               <img class="linkListImage" src={linkList.headImage} alt={linkList.listHeading}/>
               <div class="links">
                    {#each linkList.links as link}
                         <a href={link.url}>{link.label}</a>
                    {/each}
               </div>
          </div>
     {/each}
</div>

<style>
     .linkListWrapper{
          display:flex;
          align-items:flex-start;
          justify-content:center;
          text-align:center;

          margin-top:3.5em;

          transform:translateX(5%);

          --linkListImgSize : 3em;

     }

     .linkList{
          width:150px;
     }

     .links a{
          position:relative;
          text-decoration:none;
          padding-bottom:0.3em;
          display:block;
          width:fit-content;

          margin-bottom:1em;

          overflow:hidden;
     }

     .links a::after{
          position:absolute;

          content:"";
          height:1px;
          width:100%;

          background-color:currentColor;

          left:0px;
          bottom:0px;

          transform:translateX(-100%);
          transition:transform 0.2s ease-out;

     }

     .links a:hover::after{
          transform:translateX(0px);
     }

     .linkList img{
          display:block;
          width:var(--linkListImgSize);
          height:var(--linkListImgSize);

          margin-bottom:1.5em;
     }


</style>