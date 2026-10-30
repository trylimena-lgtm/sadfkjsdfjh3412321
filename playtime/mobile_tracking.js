const pds287=0;function DisplayMobileTrackingInstructions(){const e=document.createElement("div");e.id="modal-dialog",e.className="modal-dialog purchase-modal-prompt-roqol mobile-playtime-tracking-instructions",e.innerHTML=`<div id="simplemodal-container" class="simplemodal-container" style="position: fixed; z-index: 1042; height: auto; width: 400px; left: 50%; top: 50%; transform: translate(-50%, -50%);"><a class="modalCloseImg simplemodal-close" title="Close"></a><div tabindex="-1" class="simplemodal-wrap" style="height: 100%; outline: 0px; width: 100%; overflow: visible;"><div id="modal-confirmation" class="modal-confirmation noImage protocolhandler-starting-modal simplemodal-data" data-modal-type="confirmation" style="display: block;">
    <div id="modal-dialog" class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close top-right-close-button" data-dismiss="modal" style="">
                <span aria-hidden="true"><span class="icon-close"></span></span><span class="sr-only">Close</span>
            </button>
            <h5 class="modal-title">${SanitizeString(LocaleTranslate("feature_playtime_mobile_tracking_title"))}</h5>
        </div>

        <div class="modal-body">
            <div class="modal-top-body">
                <div class="modal-message"><p class="modal-message-label">${SanitizeString(LocaleTranslate("feature_playtime_mobile_tracking_description"))}</div>
            </div><h5 style="margin-top: 10px; margin-bottom: 5px;"></h5>

            <div class="subscriber-instructions">
                <div class="share-online instructions">
                    <h3>${SanitizeString(LocaleTranslate("feature_playtime_mobile_tracking_online_status_title"))}</h3>

                    <div class="instructions-body">
                        <p>${SanitizeString(LocaleTranslate("feature_playtime_mobile_tracking_online_status_description"))}</p>

                        <div class="input-group-btn group-dropdown trade-list-dropdown">
                                <button class="input-dropdown-btn">
                                    <span class="rbx-selection-label">${SanitizeString(LocaleTranslate("feature_playtime_mobile_tracking_privacy_select"))}</span>
                                    <span class="icon-down-16x16"></span>
                                </button>
                                <ul class="dropdown-menu">
                                    <li value="AllUsers" internalValue="all"><a><span>${SanitizeString(LocaleTranslate("feature_playtime_mobile_tracking_privacy_all"))}</span></a></li>
                                    <li value="FriendsAndFollowing" internalValue="following"><a><span>${SanitizeString(LocaleTranslate("feature_playtime_mobile_tracking_privacy_following"))}</span></a></li>
                                    <li value="Friends" internalValue="connections"><a><span>${SanitizeString(LocaleTranslate("feature_playtime_mobile_tracking_privacy_connections"))}</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div class="share-joins instructions">
                    <h3>${SanitizeString(LocaleTranslate("feature_playtime_mobile_tracking_join_status_title"))}</h3>

                    <div class="instructions-body">
                        <p>${SanitizeString(LocaleTranslate("feature_playtime_mobile_tracking_join_status_description"))}</p>

                        <div class="input-group-btn group-dropdown trade-list-dropdown">
                            <button class="input-dropdown-btn">
                                <span class="rbx-selection-label">${SanitizeString(LocaleTranslate("feature_playtime_mobile_tracking_privacy_select"))}</span>
                                <span class="icon-down-16x16"></span>
                            </button>
                            <ul class="dropdown-menu">
                                <li value="All" internalValue="all"><a><span>${SanitizeString(LocaleTranslate("feature_playtime_mobile_tracking_privacy_all"))}</span></a></li>
                                <li value="Following" internalValue="following"><a><span>${SanitizeString(LocaleTranslate("feature_playtime_mobile_tracking_privacy_following"))}</span></a></li>
                                <li value="Friends" internalValue="following"><a><span>${SanitizeString(LocaleTranslate("feature_playtime_mobile_tracking_privacy_connections"))}</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="follow-account instructions">
                    <h3>${SanitizeString(LocaleTranslate("feature_playtime_mobile_tracking_follow_status_title"))}</h3>

                    <div class="instructions-body">
                        <p>${SanitizeString(LocaleTranslate("feature_playtime_mobile_tracking_follow_status_description"))}</p>
                        <button class="btn-primary-sm">${SanitizeString(LocaleTranslate("feature_playtime_mobile_tracking_follow_button_state_follow"))}</button>
                    </div>
                </div>

                <div class="friend-account instructions">
                    <h3>${SanitizeString(LocaleTranslate("feature_playtime_mobile_tracking_friend_status_title"))}</h3>

                    <div class="instructions-body">
                        <p>${SanitizeString(LocaleTranslate("feature_playtime_mobile_tracking_friend_status_description"))}</p>
                        <button class="btn-primary-sm">${SanitizeString(LocaleTranslate("feature_playtime_mobile_tracking_friend_button_state_friend"))}</button>
                    </div>
                </div>
            </div>
    </div>
    </div>
    </div>
    </div></div></div>`,FetchSubscription().then(function(r){if(r===0)return e.getElementsByClassName("subscriber-instructions")[0].remove();const g=e.getElementsByClassName("share-joins")[0],_=e.getElementsByClassName("share-online")[0],l=e.getElementsByClassName("follow-account")[0],o=e.getElementsByClassName("friend-account")[0];let i,u;function y(){u==="FriendsFollowingAndFollowers"||u==="FriendsAndFollowing"?_.getElementsByClassName("rbx-selection-label")[0].innerText=LocaleTranslate("feature_playtime_mobile_tracking_privacy_following"):u==="AllUsers"?_.getElementsByClassName("rbx-selection-label")[0].innerText=LocaleTranslate("feature_playtime_mobile_tracking_privacy_all"):u==="Friends"&&(_.getElementsByClassName("rbx-selection-label")[0].innerText=LocaleTranslate("feature_playtime_mobile_tracking_privacy_connections")),u==="FriendsFollowingAndFollowers"||i==="FriendsAndFollowing"||i==="Followers"||i==="Following"?l.style.display="":l.style.display="none",i==="Friends"?o.style.display="":o.style.display="none"}function f(){i==="Followers"||i==="Following"?g.getElementsByClassName("rbx-selection-label")[0].innerText=LocaleTranslate("feature_playtime_mobile_tracking_privacy_following"):i==="All"?g.getElementsByClassName("rbx-selection-label")[0].innerText=LocaleTranslate("feature_playtime_mobile_tracking_privacy_all"):i==="Friends"&&(g.getElementsByClassName("rbx-selection-label")[0].innerText=LocaleTranslate("feature_playtime_mobile_tracking_privacy_connections")),u==="FriendsFollowingAndFollowers"||i==="FriendsAndFollowing"||i==="Followers"||i==="Following"?l.style.display="":l.style.display="none",i==="Friends"?o.style.display="":o.style.display="none"}function b(a,s){const t=a.getElementsByTagName("ul")[0],d=t.getElementsByTagName("li");for(const m of d)m.getElementsByTagName("a")[0].addEventListener("click",function(){s([m.getAttribute("value"),m.getAttribute("internalValue")]),t.style.display="none"});a.getElementsByTagName("button")[0].addEventListener("click",function(){t.style.display==="block"?t.style.display="":t.style.display="block"})}const v=g.getElementsByClassName("input-group-btn")[0];b(v,async function([a,s]){const t=v.getElementsByClassName("rbx-selection-label")[0];let d=t.innerText;t.innerText=LocaleTranslate(`feature_playtime_mobile_tracking_privacy_${s}`);const[p]=await RequestFunc("https://apis.roblox.com/user-settings-api/v1/user-settings","POST",{"Content-Type":"application/json"},JSON.stringify({whoCanJoinMeInExperiences:a}),!0);p?(i=a,f()):t.innerText=d});const w=_.getElementsByClassName("input-group-btn")[0];b(w,async function([a,s]){const t=w.getElementsByClassName("rbx-selection-label")[0];let d=t.innerText;t.innerText=LocaleTranslate(`feature_playtime_mobile_tracking_privacy_${s}`);const[p]=await RequestFunc("https://apis.roblox.com/user-settings-api/v1/user-settings","POST",{"Content-Type":"application/json"},JSON.stringify({whoCanSeeMyOnlineStatus:a}),!0);if(!p)t.innerText=d;else{u=a,y();const m=["AllUsers","FriendsAndFollowing","Friends"],S=["All","Following","Friends"],T=m.indexOf(a);T&&(i=S[T],f())}}),RequestFunc("https://apis.roblox.com/user-settings-api/v1/user-settings/settings-and-options","GET",void 0,void 0,!0).then(function([a,s]){a&&(i=s.whoCanJoinMeInExperiences.currentValue,u=s.whoCanSeeMyOnlineStatus.currentValue,f(),y())}),RequestFunc(WebServerEndpoints.Playtime+"tracking/follow","GET").then(function([a,s]){if(!a){l.getElementsByTagName("button")[0].innerText=LocaleTranslate("feature_something_went_wrong"),l.getElementsByTagName("button")[0].setAttribute("disabled","");return}RequestFunc("https://friends.roblox.com/v1/user/following-exists","POST",{"Content-Type":"application/json"},JSON.stringify({targetUserIds:[s.UserId]}),!0).then(function([t,d]){t&&d.followings[0]?.isFollowing&&(l.getElementsByTagName("button")[0].innerText=LocaleTranslate("feature_playtime_mobile_tracking_follow_button_state_following"),l.getElementsByTagName("button")[0].setAttribute("disabled",""))}),l.getElementsByTagName("button")[0].addEventListener("click",async function(){l.getElementsByTagName("button")[0].setAttribute("disabled","");const[t]=await RequestFunc(`https://friends.roblox.com/v1/users/${s.UserId}/follow`,"POST",void 0,void 0,!0);t?l.getElementsByTagName("button")[0].innerText=LocaleTranslate("feature_playtime_mobile_tracking_follow_button_state_following"):l.getElementsByTagName("button")[0].removeAttribute("disabled")})}),RequestFunc(WebServerEndpoints.Playtime+"tracking/friend","GET").then(function([a,s]){if(!a){o.getElementsByTagName("button")[0].innerText=LocaleTranslate("feature_something_went_wrong"),o.getElementsByTagName("button")[0].setAttribute("disabled","");return}o.getElementsByTagName("button")[0].addEventListener("click",async function(){o.getElementsByTagName("button")[0].setAttribute("disabled","");const[t,d,p]=await RequestFunc(`https://friends.roblox.com/v1/users/${s.UserId}/request-friendship`,"POST",{"Content-Type":"application/json"},JSON.stringify({}),!0);if(!t&&p.status!==400)return o.getElementsByTagName("button")[0].removeAttribute("disabled");const[m]=await RequestFunc(WebServerEndpoints.Playtime+"tracking/friend","POST",{"Content-Type":"application/json"},JSON.stringify({UserId:s.UserId}));m?o.getElementsByTagName("button")[0].innerText=LocaleTranslate("feature_playtime_mobile_tracking_friend_button_state_friends"):o.getElementsByTagName("button")[0].removeAttribute("disabled")})})});const n=document.createElement("div");n.id="simplemodal-overlay",n.className="simplemodal-overlay",n.style="background-color: rgb(0, 0, 0); opacity: 0.8; height: 100%; width: 100%; position: fixed; left: 0px; top: 0px; z-index: 1041;",setTimeout(function(){const r=e.getElementsByClassName("modal-content")[0];r.style.opacity=1},0),document.body.append(n,e);async function c(){e.remove(),n.remove(),await CanTrackPresenceOnMobile()&&document.getElementById("enable-mobile-playtime-tracking-button")?.remove()}e.getElementsByClassName("close")[0].addEventListener("click",c)}async function IsOnMobile(){const e=await WaitForQuerySelector('meta[name="device-meta"]');return!(e.getAttribute("data-is-phone")==="false"||e.getAttribute("data-is-ios-device")==="false"&&e.getAttribute("data-is-android-app")==="false")}async function CanTrackPresenceOnMobile(){if(await FetchSubscription()===0)return!1;let[e,n]=await RequestFunc("https://apis.roblox.com/user-settings-api/v1/user-settings/settings-and-options","GET",void 0,void 0,!0);if(!e)return!1;const c=n.whoCanSeeMyOnlineStatus.currentValue,r=n.whoCanJoinMeInExperiences.currentValue;if(c==="AllUsers"&&r==="All")return!0;if((c==="FriendsFollowingAndFollowers"||c==="FriendsAndFollowing")&&(r==="Following"||r==="Followers")){if([e,n]=await RequestFunc(WebServerEndpoints.Playtime+"tracking/follow","GET"),!e||([e,n]=await RequestFunc("https://friends.roblox.com/v1/user/following-exists","POST",{"Content-Type":"application/json"},JSON.stringify({targetUserIds:[n.UserId]}),!0),!e))return!1;if(n.followings[0]?.isFollowing)return!0}if((c==="FriendsFollowingAndFollowers"||c==="FriendsAndFollowing"||c==="Friends")&&(r==="Following"||r==="Followers"||r==="Friends")){if([e,n]=await RequestFunc(WebServerEndpoints.Playtime+"tracking/friend","GET"),!e||([e,n]=await RequestFunc(`https://friends.roblox.com/v1/users/${await GetUserId()}/friends/statuses?userIds=${n.UserId}`,"GET",void 0,void 0,!0),!e))return!1;if(n.data[0]?.status==="Friends")return!0}return!1}
