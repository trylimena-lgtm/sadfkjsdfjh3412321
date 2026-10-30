const pds310=0;function CreateServerElement(e,d,o){const i=document.createElement("div");i.className="flex items-center justify-between padding-y-medium width-full server-instance",i.setAttribute("jobid",e.id),i.innerHTML=`
    <div class="flex items-center gap-medium min-width-0">
   <div class="grow-0 shrink-0 basis-auto relative height-[40px] width-[60px] thumbnails-container">
   </div>
   <div class="flex flex-col min-width-0"><span class="text-body-medium content-muted">${e.playing??"?"} of ${e.maxPlayers??"?"} people max</span></div>
</div>
<div class="flex items-center gap-small grow-0 shrink-0 basis-auto">
   <div class="width-[63px] large:width-[200px]">
      <button type="button" class="join-server foundation-web-button relative clip group/interactable focus-visible:outline-focus disabled:outline-none cursor-pointer relative flex items-center justify-center stroke-none padding-y-none select-none radius-medium text-label-small height-800 padding-x-small bg-action-soft-emphasis content-action-soft-emphasis width-full" style="text-decoration: none;">
         <div role="presentation" class="absolute inset-[0] transition-colors group-hover/interactable:bg-[var(--color-state-hover)] group-active/interactable:bg-[var(--color-state-press)] group-disabled/interactable:bg-none"></div>
         <span class="flex items-center min-width-0 gap-xsmall"><span class="padding-y-xsmall text-truncate-end text-no-wrap">Join</span></span>
      </button>
   </div>
</div>
`,i.getElementsByClassName("join-server")[0].addEventListener("click",function(){document.dispatchEvent(new CustomEvent("joinGameInstance",{detail:JSON.stringify({PlaceId:d,JobId:e.id})}))});const l=i.getElementsByClassName("thumbnails-container")[0];e.ThumbnailResolve&&(o=e.ThumbnailResolve);const c=2;function r(){let n=0,t=!0,s=e.ImageUrls.length===1;s&&(l.classList.remove("width-[60px]"),l.classList.add("width-[40px]"));for(const p of e.ImageUrls){if(n>=c)break;n++;const a=document.createElement("span");a.className=`${t&&!s?"absolute top-0 left-[20px]":s?"":"relative"} width-[40px] height-[40px]`,a.style.display="block",a.innerHTML='<span class="thumbnail-2d-container radius-circle clip shimmer"><img style="opacity: 0" class="size-full" src="" alt="" title=""></span>';const u=a.getElementsByClassName("thumbnail-2d-container")[0],m=a.getElementsByTagName("img")[0];m.addEventListener("load",function(){u.classList.remove("shimmer"),m.style.opacity=1}),m.src=p.imageUrl,l.appendChild(a),t=!1}}if(e.ImageUrls)r();else if(o){const n=[];for(let t=0;t<Math.min(e.playing,c);t++){const s=document.createElement("span");s.className=`${t===Math.min(e.playing,c)-1?"absolute top-0 left-[20px]":"relative"} width-[40px] height-[40px]`,s.innerHTML='<span class="thumbnail-2d-container radius-circle clip shimmer"></span>',l.appendChild(s),n.push(s)}o().then(async function(){if(e.ImageUrls)l.innerHTML="",r();else for(let t=0;t<n.length;t++)n[t].classList.remove("shimmer")})}return i}
