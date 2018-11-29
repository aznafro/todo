!function(e){var t={};function o(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var n=function(e){let t=document.createElement("article");t.classList.add("todo"),t.innerHTML='<div class="menu-box"><i class="fas fa-ellipsis-v menu-toggle"></i><ul class="menu-list"><li class="menu-list__item"><a class="btn delete-todo">Delete</a></li><li class="menu-list__item"><a class="btn complete-todo">Completed</a></li></ul></div><h3 class="todo__name"></h3><span class="todo__duedate"></span><p class="todo__desc"></p>';let o="priority-"+e.priority;t.classList.add(o),t.querySelector(".todo__name").textContent=e.name,t.querySelector(".todo__duedate").textContent=e.duedate,t.querySelector(".todo__desc").textContent=e.desc,e.completed&&(t.classList.add("completed"),t.querySelector(".complete-todo").textContent="Not Completed");let n=t.querySelector(".menu-list");t.querySelector(".menu-toggle").addEventListener("click",function(e){e.stopPropagation(),n.classList.toggle("show-menu")}),document.querySelector(".contents-container").addEventListener("click",function(){n.classList.remove("show-menu"),-1!=s.style.animation.indexOf("show")&&a(s)});let l=t.querySelector(".todo__name").textContent,s=document.querySelector(".confirm-remove-todo__form"),i=s.querySelector(".confirm-remove-todo__name");t.querySelector(".delete-todo").addEventListener("click",function(e){e.stopPropagation(),n.classList.remove("show-menu"),i.textContent=l,c(s)});let r=!1;return t.querySelector(".complete-todo").addEventListener("click",function(){t.classList.toggle("completed"),r=!r,this.textContent=r?"Not Completed":"Completed";let o=document.querySelector(".show-list .project__name").textContent,n=JSON.parse(localStorage.getItem(o)),c=n.todos;for(let t=0;t<c.length;t++)if(c[t].name==e.name){c[t].completed=!0;break}localStorage.setItem(o,JSON.stringify(n))}),t};function c(e){-1!=e.className.indexOf("add-todo")?e.style.animation="300ms showAddTodoForm ease-in-out forwards":e.style.animation="300ms showForm ease-in-out forwards",document.querySelector(".contents-container").classList.add("blur")}function a(e){-1!=e.className.indexOf("add-todo")?e.style.animation="300ms hideAddTodoForm ease-in-out forwards":e.style.animation="300ms hideForm ease-in-out forwards",document.querySelector(".contents-container").classList.remove("blur")}function l(){let e=document.querySelector(".show-list .project__name").textContent,t=document.querySelector(".show-list .todos-container"),o=JSON.parse(localStorage.getItem(e)).todos;t.innerHTML="",o.forEach(function(e){let o=n(e);t.appendChild(o)})}function s(){let e=document.createElement("div");e.classList.add("confirm-remove-todo__form"),e.innerHTML='<h3 class="confirm-remove-todo__header">Confirm Remove Item</h3><p class="confirm-remove-todo__text">Are you sure you want to remove item \'<span class="confirm-remove-todo__name"></span>\'?</p><div class="row"><div class="col-1-2"><button class="btn btn__confirm-remove">Yes</button></div><div class="col-1-2"><button class="btn btn__cancel-remove">No</button></div></div>',e.querySelector(".btn__confirm-remove").addEventListener("click",function(){!function(e,t){let o=document.querySelector(".show-list .project__name").textContent,n=JSON.parse(localStorage.getItem(o)),c=n.todos;for(let t=0;t<c.length;t++)if(c[t].name==e){c.splice(t,1);break}localStorage.setItem(o,JSON.stringify(n)),l(),a(t)}(e.querySelector(".confirm-remove-todo__name").textContent,e)}),e.querySelector(".btn__cancel-remove").addEventListener("click",function(){a(e)}),document.querySelector(".container").appendChild(e)}const i="PROJECT_NAMES";let r,d,u;function m(e,t){if(t){let t=localStorage.getItem(i);t?t+=","+e.name:t=e.name,localStorage.setItem(i,t),localStorage.setItem(e.name,JSON.stringify(e))}let o=document.createElement("div"),c=document.createElement("div"),a=function(e,t){let o=document.createElement("div"),n=document.createElement("i"),c=document.createElement("h2");return o.classList.add("project__icon-face"),t.split(" ").forEach(function(e){n.classList.add(e)}),c.classList.add("project__name"),e.length>13?c.textContent=e.substring(0,13)+"..":c.textContent=e,o.appendChild(n),o.appendChild(c),o}(e.name,e.icon),l=function(e,t){let o=document.createElement("div"),c=document.createElement("h1"),a=document.createElement("div");return o.classList.add("project__list-face"),c.classList.add("project__name"),a.classList.add("todos-container"),c.textContent=e,t.forEach(function(e){let t=n(e);a.appendChild(t)}),o.appendChild(c),o.appendChild(a),o}(e.name,e.todos),s=document.createAttribute("data-name");s.value=e.name,o.classList.add("col-1-3"),o.classList.add("col-md-1-4"),o.classList.add("col-lg-1-5"),o.setAttributeNode(s);let m=document.querySelector("nav .back"),p=document.querySelector("nav .add-project"),f=document.querySelector("nav .list-menu-items");a.addEventListener("click",function(){r.classList.add("fade"),l.classList.add("show-list"),m.classList.add("show"),p.classList.add("hidden"),f.classList.remove("hidden")}),o.appendChild(a),d.appendChild(o);let _=document.createAttribute("data-name");_.value=e.name,c.classList.add("col-1-3"),c.classList.add("col-md-1-4"),c.classList.add("col-lg-1-5"),c.setAttributeNode(_),c.appendChild(l),u.appendChild(c)}function p(e){e.querySelector("#new-project__name").value="",e.querySelector(".icon-display i").className="fas fa-sticky-note",a(e)}var f=function(){let e=document.createElement("div");e.classList.add("new-project__form"),e.innerHTML='<h3 class="new-project__header">New Project</h3><p class="new-project__notice"></p><input type="text" id="new-project__name" class="input" placeholder="Project Name" required><div class="display-icon__box"><span class="icon-display"><i class="fas fa-sticky-note"></i></span><button class="btn btn__choose-icon">Select Icon</button></div><div class="choose-icon__form"><h4 class="choose-icon__header">Choose an Icon</h4><div class="choose-icon__box"><i class="fas fa-broom icon"></i><i class="fas fa-sticky-note icon"></i><i class="fas fa-flask icon"></i><i class="fas fa-snowflake icon"></i><i class="fas fa-calculator icon"></i><i class="fas fa-address-card icon"></i><i class="fas fa-ambulance icon"></i><i class="fas fa-dollar-sign icon"></i><i class="fas fa-dog icon"></i><i class="fas fa-birthday-cake icon"></i><i class="fas fa-tshirt icon"></i><i class="fas fa-utensils icon"></i><i class="fas fa-football-ball icon"></i><i class="fas fa-balance-scale icon"></i><i class="fas fa-plane-departure icon"></i></div></div><div class="row"><div class="col-1-2"><button class="btn btn__add-project">Add Project</button></div><div class="col-1-2"><button class="btn btn__cancel-project">Cancel</button></div></div>';let t=e.querySelector(".choose-icon__form");e.querySelector(".btn__choose-icon").addEventListener("click",function(){t.classList.toggle("show-choose-icon")});let o=e.querySelector(".icon-display i");e.querySelectorAll(".icon").forEach(function(e){e.addEventListener("click",function(){o.className="",o.className=this.className,t.classList.remove("show-choose-icon")})}),e.querySelector(".btn__add-project").addEventListener("click",function(){let t=e.querySelector("#new-project__name").value,o=localStorage.getItem(t);t?o?e.querySelector(".new-project__notice").textContent="Project with that name already exists":(m({name:t,icon:e.querySelector(".icon-display i").className,todos:[]},!0),p(e)):e.querySelector(".new-project__notice").textContent="Project Name Field is required"}),e.querySelector(".btn__cancel-project").addEventListener("click",function(){p(e)}),document.querySelector(".container").appendChild(e)};const _="PROJECT_NAMES";function v(){let e=document.createElement("div");e.classList.add("confirm-remove-project__form"),e.innerHTML='<h3 class="confirm-remove-project__header">Confirm Remove Project</h3><p class="confirm-remove-project__text">Are you sure you want to remove project \'<span class="confirm-remove-project__name"></span>\'?</p><div class="row"><div class="col-1-2"><button class="btn btn__confirm-remove">Yes</button></div><div class="col-1-2"><button class="btn btn__cancel-remove">No</button></div></div>',e.querySelector(".btn__confirm-remove").addEventListener("click",function(){!function(e){let t=document.querySelector(".show-list .project__name").textContent,o=localStorage.getItem(_).split(",");for(let e=0;e<o.length;e++)if(o[e]==t){o.splice(e,1);break}o=o.join(","),localStorage.setItem(_,o),localStorage.removeItem(t),document.querySelectorAll('[data-name="'+t+'"]').forEach(function(e){e.remove()}),a(e),document.querySelector("nav .back").click()}(e)}),e.querySelector(".btn__cancel-remove").addEventListener("click",function(){a(e)}),document.querySelector(".container").appendChild(e)}function y(e){let t=e.querySelector(".new-todo__name"),o=Array.prototype.slice.call(e.querySelectorAll('[name="priority"]')).filter(function(e){return 1==e.checked})[0],n=e.querySelector("#low-priority"),c=e.querySelector(".new-todo__desc"),l=e.querySelector("#new-todo__date"),s=e.querySelector(".new-todo__notice");t.value="",s.textContent="",o.checked=!1,n.checked=!0,c.value="",l.value="",a(e)}var h=function(){let e=document.createElement("div");e.classList.add("add-todo__form"),e.innerHTML='<h3 class="new-todo__header">New Item</h3><p class="new-todo__notice"></p><input type="text" class="input new-todo__name" placeholder="Item Name" required><h4 class="priority__header">Priority Level</h4><div class="row"><div class="col-1-3"><label for="low-priority" class="label">Low<input type="radio" id="low-priority" value="3" name="priority" class="input" checked="checked"></label></div><div class="col-1-3"><label for="med-priority" class="label">Medium<input type="radio" id="med-priority" value="2" name="priority" class="input"></label></div><div class="col-1-3"><label for="high-priority" class="label">High<input type="radio" id="high-priority"value="1" name="priority" class="input"></label></div></div><textarea class="input new-todo__desc" placeholder="Description"></textarea><label for="new-todo__date" class="label">Due Date<input type="date" id="new-todo__date" class="input" required></label><div class="row"><div class="col-1-2"><button class="btn btn__add-todo">Add Item</button></div><div class="col-1-2"><button class="btn btn__cancel-todo">Cancel</button></div></div>';let t=e.querySelector(".btn__add-todo"),o=e.querySelector(".btn__cancel-todo"),n=e.querySelector(".new-todo__notice");t.addEventListener("click",function(){let t=e.querySelector(".new-todo__name").value;if(!t)return void(n.textContent="An Item Name is required");let o=Array.prototype.slice.call(e.querySelectorAll('[name="priority"]')).filter(function(e){return 1==e.checked})[0].value,c=e.querySelector(".new-todo__desc").value,a=e.querySelector("#new-todo__date").value,s={name:t,priority:o,desc:c,duedate:a,completed:!1},i=document.querySelector(".show-list .project__name").textContent,r=JSON.parse(localStorage.getItem(i)),d=r.todos;if(d.filter(function(e){return e.name==t}).length>0)document.querySelector(".new-todo__notice").textContent="An item with that name already exists";else{if(0==d.length)d.push(s);else{let e;for(e=d.length-1;e>-1&&!(d[e].priority<=o);e--);d.splice(e+1,0,s)}localStorage.setItem(i,JSON.stringify(r)),l(),y(e)}}),o.addEventListener("click",function(){y(e)}),document.querySelector(".container").appendChild(e)};var S=function(){let e=document.createElement("nav");e.innerHTML='<h1 class="logo">Get \'er Done</h1><ul class="menu-list"><li class="nav-item back"><a class="nav-link"><i class="fas fa-arrow-left"></i> <span>Back</span></a></li><li class="nav-item"><a class="nav-link add-project"><i class="fas fa-folder-plus"></i> <span>Add Project</span></a></li><li class="nav-item list-menu-items hidden"><a class="nav-link add-todo"><i class="fas fa-plus"></i> <span>Add Item</span></a><a class="nav-link remove-project"><i class="fas fa-folder-minus"></i> <span>Delete Project</span></a></li></ul>';let t=e.querySelector(".add-project"),o=e.querySelector(".remove-project"),n=e.querySelector(".add-todo"),l=document.querySelector(".new-project__form"),s=document.querySelector(".confirm-remove-project__form"),i=document.querySelector(".add-todo__form"),r=e.querySelector(".list-menu-items");return e.querySelector(".back").addEventListener("click",function(){document.querySelector(".projects__icons").classList.remove("fade"),document.querySelector(".show-list")&&document.querySelector(".show-list").classList.remove("show-list"),this.classList.remove("show"),r.classList.add("hidden"),t.classList.remove("hidden")}),t.addEventListener("click",function(e){e.stopPropagation(),c(l)}),o.addEventListener("click",function(e){let t=document.querySelector(".show-list .project__name").textContent,o=document.querySelector(".confirm-remove-project__name");e.stopPropagation(),-1!=i.style.animation.indexOf("show")&&a(i),o.textContent=t,c(s)}),n.addEventListener("click",function(e){e.stopPropagation(),-1!=s.style.animation.indexOf("show")&&a(s),c(i)}),document.querySelector(".contents-container").addEventListener("click",function(){-1!=l.style.animation.indexOf("show")&&a(l),-1!=i.style.animation.indexOf("show")&&a(i),-1!=s.style.animation.indexOf("show")&&a(s)}),e};var b=function(){f(),v(),h(),s();let e=document.createElement("div");e.classList.add("contents-container"),document.querySelector(".container").appendChild(e);let t=S();e.appendChild(t);let o=function(){let e=document.createElement("section");e.classList.add("projects-container"),e.innerHTML='<div class="projects__icons"></div><div class="projects__lists"></div>',r=e.querySelector(".projects__icons");let t=e.querySelector(".projects__lists");d=document.createElement("div"),u=document.createElement("div"),d.classList.add("row"),u.classList.add("row");let o=localStorage.getItem(i);return o&&o.split(",").forEach(function(e){m(JSON.parse(localStorage.getItem(e)),!1)}),r.appendChild(d),t.appendChild(u),e}();e.appendChild(o)};document.body.innerHTML='<div class="container"></div>',b()}]);