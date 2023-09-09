(function(){const b=document.createElement("link").relList;if(b&&b.supports&&b.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))f(i);new MutationObserver(i=>{for(const m of i)if(m.type==="childList")for(const y of m.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&f(y)}).observe(document,{childList:!0,subtree:!0});function C(i){const m={};return i.integrity&&(m.integrity=i.integrity),i.referrerPolicy&&(m.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?m.credentials="include":i.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function f(i){if(i.ep)return;i.ep=!0;const m=C(i);fetch(i.href,m)}})();w();function w(){const E=()=>{let n=document.createElement("div");n.id="mydiv";let o=document.createElement("img");o.src="img/svg/preciodeamigo-logo.svg",n.appendChild(o);let a=document.createElement("div");a.id="myDiv2",a.innerHTML=`
    <br>
    &#160;&#160;&#160;&#160;&#160;&#160;
    <a id="whatsapp" style = "text-decoration: none;" href="https://api.whatsapp.com/send?phone=1134795400">
    <img  src="img/svg/whatsapp-80.svg" alt="whatsapp" style="width: 40px; height: auto;"></a>
    &#160;&#160;&#160;&#160;
    <a href="https://www.instagram.com/preciodeamigo.ar/" style="text-decoration: none;">
    <img src="img/svg/instagram-80.svg" alt="Instagram" width="100" style="width: 40px; height: auto;">
    </a>
    
`,n.appendChild(a),document.body.appendChild(n)},b=()=>{let n=document.createElement("hr");document.body.appendChild(n);var o=document.createElement("div");o.id="myDivNav",document.body.appendChild(o);var a=document.createElement("div");a.className="mydivClass",a.id="btnInicio",a.innerHTML="Mensulas",o.appendChild(a),document.getElementById("btnInicio").addEventListener("click",()=>{f()});var l=document.createElement("div");l.className="mydivClass",l.id="btnQsomos",l.innerHTML="Escritorios",o.appendChild(l),document.getElementById("btnQsomos").addEventListener("click",()=>{i()});var u=document.createElement("div");u.className="mydivClass",u.id="btnDescargas",u.innerHTML="Mesa ratona",o.appendChild(u),document.getElementById("btnDescargas").addEventListener("click",()=>{m()});var p=document.createElement("div");p.className="mydivClass",p.id="btnContacto",p.innerHTML="Varios",o.appendChild(p),document.getElementById("btnContacto").addEventListener("click",()=>{y()})},C=()=>{let n=document.createElement("div");n.id="myDivNav2",n.innerHTML=`
    <div class = "marcoDivNav2">
  PrecioDeAmigo es una pequeña empresa de herrería dedicada a la fabricación de muebles industriales, tanto para entornos
  empresariales como para hogares.<br><br>
  
  Nuestro enfoque fusiona la robustez de la herrería con un diseño funcional y estético
  que se adapta perfectamente a los espacios domésticos.<br><br>
  
  Nuestra variedad de productos incluye mesas de trabajo, estanterías, armarios,
  escritorios, mesas ratona y otros muebles fabricados a medida.<br><br>
  
  Ofrecemos una amplia gama de opciones para hogares, fábricas y comercios de diversos rubros, con el propósito de maximizar el almacenamiento
  y la organización. <br><br> Nos guía un firme compromiso con la calidad y la durabilidad, con la meta de ganarnos la confianza de aquellos
  que buscan soluciones de mobiliario que sean resistentes y elegantes al mismo tiempo.
  <br>
  <br>
    </div>
  `,document.body.appendChild(n)},f=()=>{document.querySelector("#myDivNav2").innerHTML=`
    <div class = "marcoDivNav2">
                            <select id="contacto">
                            <option value="">Seleccionar Artículo</option>
                            </select>


                            <div id="resultado"></div>

                            <div id="idCatalogo"></div>
                            <div>
                            `,document.querySelector("#idCatalogo").innerHTML=`                    
                  
                    
                    <div class="container">
                    <div id="cards-container"></div>
                    <br>
                    <div class="row" id="items"></div>

                    <template id="template-card">
                        <div class="col-12 mb-2 col-md-4">
                            <div class="card">
                                    <img src="" alt="" class="img-card-top">
                                            <div class="card-body">
                                                <h5>Titulo</h5>
                                                <p>precio</p>
                                                <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
                                            </div>
                            </div>
                        </div>
                    </template>
                    </div>
                   
  `;const n=document.getElementById("items"),o=document.getElementById("template-card").content,a=document.createDocumentFragment(),l=async()=>{try{const e=await(await fetch("catalogo/mensula.json")).json();u(e)}catch(t){console.log(t)}},u=t=>{t.forEach(e=>{o.querySelector("h5").textContent=e.title,o.querySelector("p").textContent=e.precio,o.querySelector("img").setAttribute("src",e.thumbnailUrl),o.querySelector(".btn-dark").dataset.id=e.id;const d=o.cloneNode(!0);a.appendChild(d)}),n.appendChild(a)};l();async function p(){const t=document.querySelector("#contacto"),e=document.querySelector("#idCatalogo");if(!t.value){e.textContent="";return}try{const r=await(await fetch("catalogo/mensula.json")).json(),g=t.value.toLowerCase(),v=r.filter(s=>s.title.toLowerCase()===g);v.length>0?(e.innerHTML="",v.forEach(s=>{e.innerHTML+=`
         <div style="display: grid; place-content: center;">
         <hr>
          <h5> Título: ${s.title}</h5>
          <p><h5> Precio: ${s.precio}</h5></p>
          <img src="${s.thumbnailUrl}">
          <hr>
          
          <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
                                           
          <hr>
          </div>
        `})):e.textContent="No se encontraron resultados."}catch(c){console.error("Error al cargar el archivo JSON:",c)}}async function h(){const t=document.getElementById("contacto");try{(await(await fetch("catalogo/mensula.json")).json()).forEach(c=>{const r=document.createElement("option");r.value=c.title,r.textContent=c.title,t.appendChild(r)}),t.addEventListener("change",p)}catch(e){console.error("Error al cargar el archivo JSON:",e)}}h()},i=()=>{document.querySelector("#myDivNav2").innerHTML=`
    <div class = "marcoDivNav2">
                            <select id="contacto">
                            <option value="">Seleccionar Artículo</option>
                            </select>


                            <div id="resultado"></div>

                            <div id="idCatalogo"></div> 
                            </div>
                            `,document.querySelector("#idCatalogo").innerHTML=`                    
                                    
                    
                    <div class="container">
                    <div id="cards-container"></div>
                    <br>
                    <div class="row" id="items"></div>

                    <template id="template-card">
                        <div class="col-12 mb-2 col-md-4">
                            <div class="card">
                                    <img src="" alt="" class="img-card-top">
                                            <div class="card-body">
                                                <h5>Titulo</h5>
                                                <p>precio</p>
                                                <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
                                           
                                            </div>
                            </div>
                        </div>
                    </template>
                    </div>
  `;const n=document.getElementById("items"),o=document.getElementById("template-card").content,a=document.createDocumentFragment(),l=async()=>{try{const e=await(await fetch("catalogo/escritorio.json")).json();u(e)}catch(t){console.log(t)}},u=t=>{t.forEach(e=>{o.querySelector("h5").textContent=e.title,o.querySelector("p").textContent=e.precio,o.querySelector("img").setAttribute("src",e.thumbnailUrl),o.querySelector(".btn-dark").dataset.id=e.id;const d=o.cloneNode(!0);a.appendChild(d)}),n.appendChild(a)};l();async function p(){const t=document.querySelector("#contacto"),e=document.querySelector("#idCatalogo");if(!t.value){e.textContent="";return}try{const r=await(await fetch("catalogo/escritorio.json")).json(),g=t.value.toLowerCase(),v=r.filter(s=>s.title.toLowerCase()===g);v.length>0?(e.innerHTML="",v.forEach(s=>{e.innerHTML+=`
         <div style="display: grid; place-content: center;">
         <hr>
          <h5> Título: ${s.title}</h5>
          <p><h5> Precio: ${s.precio}</h5></p>
          <img src="${s.thumbnailUrl}">
          <hr>
          <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
          
          <hr>
          </div>
        `})):e.textContent="No se encontraron resultados."}catch(c){console.error("Error al cargar el archivo JSON:",c)}}async function h(){const t=document.getElementById("contacto");try{(await(await fetch("catalogo/escritorio.json")).json()).forEach(c=>{const r=document.createElement("option");r.value=c.title,r.textContent=c.title,t.appendChild(r)}),t.addEventListener("change",p)}catch(e){console.error("Error al cargar el archivo JSON:",e)}}h()},m=()=>{document.querySelector("#myDivNav2").innerHTML=`
    <div class = "marcoDivNav2">
                            <select id="contacto">
                            <option value="">Seleccionar Artículo</option>
                            </select>


                            <div id="resultado"></div>

                            <div id="idCatalogo"></div>
                            </div>
                            `,document.querySelector("#idCatalogo").innerHTML=`                    
                                    
                    
                    <div class="container">
                    <div id="cards-container"></div>
                    <br>
                    <div class="row" id="items"></div>

                    <template id="template-card">
                        <div class="col-12 mb-2 col-md-4">
                            <div class="card">
                                    <img src="" alt="" class="img-card-top">
                                            <div class="card-body">
                                                <h5>Titulo</h5>
                                                <p>precio</p>
                                                <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
                                           
                                            </div>
                            </div>
                        </div>
                    </template>
                    </div>
  `;const n=document.getElementById("items"),o=document.getElementById("template-card").content,a=document.createDocumentFragment(),l=async()=>{try{const e=await(await fetch("catalogo/ratona.json")).json();u(e)}catch(t){console.log(t)}},u=t=>{t.forEach(e=>{o.querySelector("h5").textContent=e.title,o.querySelector("p").textContent=e.precio,o.querySelector("img").setAttribute("src",e.thumbnailUrl),o.querySelector(".btn-dark").dataset.id=e.id;const d=o.cloneNode(!0);a.appendChild(d)}),n.appendChild(a)};l();async function p(){const t=document.querySelector("#contacto"),e=document.querySelector("#idCatalogo");if(!t.value){e.textContent="";return}try{const r=await(await fetch("catalogo/ratona.json")).json(),g=t.value.toLowerCase(),v=r.filter(s=>s.title.toLowerCase()===g);v.length>0?(e.innerHTML="",v.forEach(s=>{e.innerHTML+=`
         <div style="display: grid; place-content: center;">
         <hr>
          <h5> Título: ${s.title}</h5>
          <p><h5> Precio: ${s.precio}</h5></p>
          <img src="${s.thumbnailUrl}">
          <hr>
          <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
          
          <hr>
          </div>
        `})):e.textContent="No se encontraron resultados."}catch(c){console.error("Error al cargar el archivo JSON:",c)}}async function h(){const t=document.getElementById("contacto");try{(await(await fetch("catalogo/ratona.json")).json()).forEach(c=>{const r=document.createElement("option");r.value=c.title,r.textContent=c.title,t.appendChild(r)}),t.addEventListener("change",p)}catch(e){console.error("Error al cargar el archivo JSON:",e)}}h()},y=()=>{document.querySelector("#myDivNav2").innerHTML=`
    <div class = "marcoDivNav2">
                            <select id="contacto">
                            <option value="">Seleccionar Artículo</option>
                            </select>


                            <div id="resultado"></div>

                            <div id="idCatalogo"></div>
                            </div>
                            `,document.querySelector("#idCatalogo").innerHTML=`                    
                                    
                    
                    <div class="container">
                    <div id="cards-container"></div>
                    <br>
                    <div class="row" id="items"></div>

                    <template id="template-card">
                        <div class="col-12 mb-2 col-md-4">
                            <div class="card">
                                    <img src="" alt="" class="img-card-top">
                                            <div class="card-body">
                                                <h5>Titulo</h5>
                                                <p>precio</p>
                                                <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
                                           
                                            </div>
                            </div>
                        </div>
                    </template>
                    </div>
  `;const n=document.getElementById("items"),o=document.getElementById("template-card").content,a=document.createDocumentFragment(),l=async()=>{try{const e=await(await fetch("catalogo/varios.json")).json();u(e)}catch(t){console.log(t)}},u=t=>{t.forEach(e=>{o.querySelector("h5").textContent=e.title,o.querySelector("p").textContent=e.precio,o.querySelector("img").setAttribute("src",e.thumbnailUrl),o.querySelector(".btn-dark").dataset.id=e.id;const d=o.cloneNode(!0);a.appendChild(d)}),n.appendChild(a)};l();async function p(){const t=document.querySelector("#contacto"),e=document.querySelector("#idCatalogo");if(!t.value){e.textContent="";return}try{const r=await(await fetch("catalogo/varios.json")).json(),g=t.value.toLowerCase(),v=r.filter(s=>s.title.toLowerCase()===g);v.length>0?(e.innerHTML="",v.forEach(s=>{e.innerHTML+=`
         <div style="display: grid; place-content: center;">
         <hr>
          <h5> Título: ${s.title}</h5>
          <p><h5> Precio: ${s.precio}</h5></p>
          <img src="${s.thumbnailUrl}">
          <hr>
          <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
          
          <hr>
          </div>
        `})):e.textContent="No se encontraron resultados."}catch(c){console.error("Error al cargar el archivo JSON:",c)}}async function h(){const t=document.getElementById("contacto");try{(await(await fetch("catalogo/varios.json")).json()).forEach(c=>{const r=document.createElement("option");r.value=c.title,r.textContent=c.title,t.appendChild(r)}),t.addEventListener("change",p)}catch(e){console.error("Error al cargar el archivo JSON:",e)}}h()},S=()=>{let n=document.createElement("div"),o=document.createElement("div");o.id="divDatos1",o.innerHTML=`
    <a id="whatsapp" style = "text-decoration: none;" href="https://api.whatsapp.com/send?phone=1134795400">
    <img  src="img/svg/whatsapp-80.svg" alt="whatsapp" style="width: 40px; height: auto;"></a>
    &#160;&#160;
    <a href="https://www.instagram.com/preciodeamigo.ar/" style="text-decoration: none;">
    <img src="img/svg/instagram-80.svg" alt="Instagram" width="100" style="width: 40px; height: auto;">
    </a>
    <hr>
    `,n.appendChild(o),n.id="mydivPie";let a=document.createElement("img");a.id="img1",a.src="img/svg/preciodeamigo-logo-pie.svg";let l=document.createElement("hr");document.body.appendChild(l),n.appendChild(a),document.body.appendChild(n)};E(),b(),C(),S()}
