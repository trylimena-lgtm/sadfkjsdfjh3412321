const pds292=0;IsFeatureEnabled("PlayerIcon").then(async function(l){if(!l)return;const s=(await WaitForId("profile-header-title-container-name")).parentNode;function c(d,a,t,u){if(!a)return;const o=new Date().getTime()/1e3,e=document.createElement("div");e.className="roqol-player",e.innerHTML=`
            <img class="roqol-player-icon">
            <div class="roqol-player-icon-hover" style="display: none;">
                <p style="font-weight: bold;">${t?LocaleTranslate("feature_profile_player_icon_paid_title"):LocaleTranslate("feature_profile_player_icon_title")}</p>
                <p>${LocaleTranslate("feature_profile_player_icon_joined",SanitizeString(SecondsToLengthSingle(o-a,!0)))}`+(t?`<br>${LocaleTranslate("feature_profile_player_icon_subscriber",SanitizeString(SecondsToLengthSingle(o-u,!0)))}`:"")+`</p>
            </div>
        `;const r=e.getElementsByTagName("img")[0];r.src=chrome.runtime.getURL(`img/profile/${t?"Paid":""}PlayerIcon.png`);const i=e.getElementsByClassName("roqol-player-icon-hover")[0];r.addEventListener("mouseenter",function(){i.style.display=""}),r.addEventListener("mouseleave",function(){i.style.display="none"}),d.appendChild(e)}const[p,n]=await RequestFunc(WebServerEndpoints.User+"profile/"+GetTargetId());p&&c(s,n.Joined,n.Subscription,n.SubscriberSince)});
