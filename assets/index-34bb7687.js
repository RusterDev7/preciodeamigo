(function(){const y=document.createElement("link").relList;if(y&&y.supports&&y.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))f(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const b of l.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&f(b)}).observe(document,{childList:!0,subtree:!0});function C(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function f(i){if(i.ep)return;i.ep=!0;const l=C(i);fetch(i.href,l)}})();L();function L(){const E=()=>{let a=document.createElement("div");a.id="mydiv";let o=document.createElement("img");o.src="img/preciodeamigo-logo.jpg",a.appendChild(o);let n=document.createElement("div");n.id="myDiv2",n.innerHTML=`
<div style="display:flex;">
<h1>11-3479-5400 &#160;</h1> <a id="whatsapp" style = "text-decoration: none;" href="https://api.whatsapp.com/send?phone=1134795400">
<img  src="img/whatsapp-80.png" alt="whatsapp" style="width: 40px; height: auto;">
</a>
</div>
`,a.appendChild(n),document.body.appendChild(a)},y=()=>{var a=document.createElement("div");a.id="myDivNav",document.body.appendChild(a);var o=document.createElement("div");o.className="mydivClass",o.id="btnInicio",o.innerHTML="Mensulas",a.appendChild(o),document.getElementById("btnInicio").addEventListener("click",()=>{f()});var n=document.createElement("div");n.className="mydivClass",n.id="btnQsomos",n.innerHTML="Escritorios",a.appendChild(n),document.getElementById("btnQsomos").addEventListener("click",()=>{i()});var m=document.createElement("div");m.className="mydivClass",m.id="btnDescargas",m.innerHTML="Mesa ratona",a.appendChild(m),document.getElementById("btnDescargas").addEventListener("click",()=>{l()});var u=document.createElement("div");u.className="mydivClass",u.id="btnContacto",u.innerHTML="Varios",a.appendChild(u),document.getElementById("btnContacto").addEventListener("click",()=>{b()})},C=()=>{let a=document.createElement("div");a.id="myDivNav2",a.innerHTML=`
  PrecioDeAmigo es una pequeña empresa de herrería dedicada a la fabricación de muebles industriales, tanto para entornos
  empresariales como para hogares.<br><br>
  
  Nuestro enfoque fusiona la robustez de la herrería con un diseño funcional y estético
  que se adapta perfectamente a los espacios domésticos.<br><br>
  
  Nuestra variedad de productos incluye mesas de trabajo, estanterías, armarios,
  escritorios, mesas ratona y otros muebles fabricados a medida.<br><br>
  
  Ofrecemos una amplia gama de opciones para hogares, fábricas y comercios de diversos rubros, con el propósito de maximizar el almacenamiento
  y la organización. Nos guía un firme compromiso con la calidad y la durabilidad, con la meta de ganarnos la confianza de aquellos
  que buscan soluciones de mobiliario que sean resistentes y elegantes al mismo tiempo.
  <br>
  <br>
  `,document.body.appendChild(a)},f=()=>{document.querySelector("#myDivNav2").innerHTML=`
                            <select id="contacto">
                            <option value="">Selecciona un contacto</option>
                            </select>


                            <div id="resultado"></div>

                            <div id="idCatalogo"></div> `,document.querySelector("#idCatalogo").innerHTML=`                    
                                    
                    
                    <div class="container">
                    <div id="cards-container"></div>
                    <hr>
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
  `;const a=document.getElementById("items"),o=document.getElementById("template-card").content,n=document.createDocumentFragment(),m=async()=>{try{const e=await(await fetch("catalogo/mensula.json")).json();u(e)}catch(t){console.log(t)}},u=t=>{t.forEach(e=>{o.querySelector("h5").textContent=e.title,o.querySelector("p").textContent=e.precio,o.querySelector("img").setAttribute("src",e.thumbnailUrl),o.querySelector(".btn-dark").dataset.id=e.id;const d=o.cloneNode(!0);n.appendChild(d)}),a.appendChild(n)};m();async function h(){const t=document.querySelector("#contacto"),e=document.querySelector("#idCatalogo");if(!t.value){e.textContent="";return}try{const r=await(await fetch("catalogo/mensula.json")).json(),g=t.value.toLowerCase(),p=r.filter(s=>s.title.toLowerCase()===g);p.length>0?(e.innerHTML="",p.forEach(s=>{e.innerHTML+=`
         <div style="display: grid; place-content: center;">
         <hr>
          <h5> Título: ${s.title}</h5>
          <p><h5> Precio: ${s.precio}</h5></p>
          <img src="${s.thumbnailUrl}">
          <hr>
          
          <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
                                           
          <hr>
          </div>
        `})):e.textContent="No se encontraron resultados."}catch(c){console.error("Error al cargar el archivo JSON:",c)}}async function v(){const t=document.getElementById("contacto");try{(await(await fetch("catalogo/mensula.json")).json()).forEach(c=>{const r=document.createElement("option");r.value=c.title,r.textContent=c.title,t.appendChild(r)}),t.addEventListener("change",h)}catch(e){console.error("Error al cargar el archivo JSON:",e)}}v()},i=()=>{document.querySelector("#myDivNav2").innerHTML=`
                            <select id="contacto">
                            <option value="">Selecciona un articulo</option>
                            </select>


                            <div id="resultado"></div>

                            <div id="idCatalogo"></div> `,document.querySelector("#idCatalogo").innerHTML=`                    
                                    
                    
                    <div class="container">
                    <div id="cards-container"></div>
                    <hr>
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
  `;const a=document.getElementById("items"),o=document.getElementById("template-card").content,n=document.createDocumentFragment(),m=async()=>{try{const e=await(await fetch("catalogo/escritorio.json")).json();u(e)}catch(t){console.log(t)}},u=t=>{t.forEach(e=>{o.querySelector("h5").textContent=e.title,o.querySelector("p").textContent=e.precio,o.querySelector("img").setAttribute("src",e.thumbnailUrl),o.querySelector(".btn-dark").dataset.id=e.id;const d=o.cloneNode(!0);n.appendChild(d)}),a.appendChild(n)};m();async function h(){const t=document.querySelector("#contacto"),e=document.querySelector("#idCatalogo");if(!t.value){e.textContent="";return}try{const r=await(await fetch("catalogo/escritorio.json")).json(),g=t.value.toLowerCase(),p=r.filter(s=>s.title.toLowerCase()===g);p.length>0?(e.innerHTML="",p.forEach(s=>{e.innerHTML+=`
         <div style="display: grid; place-content: center;">
         <hr>
          <h5> Título: ${s.title}</h5>
          <p><h5> Precio: ${s.precio}</h5></p>
          <img src="${s.thumbnailUrl}">
          <hr>
          <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
          
          <hr>
          </div>
        `})):e.textContent="No se encontraron resultados."}catch(c){console.error("Error al cargar el archivo JSON:",c)}}async function v(){const t=document.getElementById("contacto");try{(await(await fetch("catalogo/escritorio.json")).json()).forEach(c=>{const r=document.createElement("option");r.value=c.title,r.textContent=c.title,t.appendChild(r)}),t.addEventListener("change",h)}catch(e){console.error("Error al cargar el archivo JSON:",e)}}v()},l=()=>{document.querySelector("#myDivNav2").innerHTML=`
                            <select id="contacto">
                            <option value="">Selecciona un contacto</option>
                            </select>


                            <div id="resultado"></div>

                            <div id="idCatalogo"></div> `,document.querySelector("#idCatalogo").innerHTML=`                    
                                    
                    
                    <div class="container">
                    <div id="cards-container"></div>
                    <hr>
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
  `;const a=document.getElementById("items"),o=document.getElementById("template-card").content,n=document.createDocumentFragment(),m=async()=>{try{const e=await(await fetch("catalogo/ratona.json")).json();u(e)}catch(t){console.log(t)}},u=t=>{t.forEach(e=>{o.querySelector("h5").textContent=e.title,o.querySelector("p").textContent=e.precio,o.querySelector("img").setAttribute("src",e.thumbnailUrl),o.querySelector(".btn-dark").dataset.id=e.id;const d=o.cloneNode(!0);n.appendChild(d)}),a.appendChild(n)};m();async function h(){const t=document.querySelector("#contacto"),e=document.querySelector("#idCatalogo");if(!t.value){e.textContent="";return}try{const r=await(await fetch("catalogo/ratona.json")).json(),g=t.value.toLowerCase(),p=r.filter(s=>s.title.toLowerCase()===g);p.length>0?(e.innerHTML="",p.forEach(s=>{e.innerHTML+=`
         <div style="display: grid; place-content: center;">
         <hr>
          <h5> Título: ${s.title}</h5>
          <p><h5> Precio: ${s.precio}</h5></p>
          <img src="${s.thumbnailUrl}">
          <hr>
          <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
          
          <hr>
          </div>
        `})):e.textContent="No se encontraron resultados."}catch(c){console.error("Error al cargar el archivo JSON:",c)}}async function v(){const t=document.getElementById("contacto");try{(await(await fetch("catalogo/ratona.json")).json()).forEach(c=>{const r=document.createElement("option");r.value=c.title,r.textContent=c.title,t.appendChild(r)}),t.addEventListener("change",h)}catch(e){console.error("Error al cargar el archivo JSON:",e)}}v()},b=()=>{document.querySelector("#myDivNav2").innerHTML=`
                            <select id="contacto">
                            <option value="">Selecciona un contacto</option>
                            </select>


                            <div id="resultado"></div>

                            <div id="idCatalogo"></div> `,document.querySelector("#idCatalogo").innerHTML=`                    
                                    
                    
                    <div class="container">
                    <div id="cards-container"></div>
                    <hr>
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
  `;const a=document.getElementById("items"),o=document.getElementById("template-card").content,n=document.createDocumentFragment(),m=async()=>{try{const e=await(await fetch("catalogo/varios.json")).json();u(e)}catch(t){console.log(t)}},u=t=>{t.forEach(e=>{o.querySelector("h5").textContent=e.title,o.querySelector("p").textContent=e.precio,o.querySelector("img").setAttribute("src",e.thumbnailUrl),o.querySelector(".btn-dark").dataset.id=e.id;const d=o.cloneNode(!0);n.appendChild(d)}),a.appendChild(n)};m();async function h(){const t=document.querySelector("#contacto"),e=document.querySelector("#idCatalogo");if(!t.value){e.textContent="";return}try{const r=await(await fetch("catalogo/varios.json")).json(),g=t.value.toLowerCase(),p=r.filter(s=>s.title.toLowerCase()===g);p.length>0?(e.innerHTML="",p.forEach(s=>{e.innerHTML+=`
         <div style="display: grid; place-content: center;">
         <hr>
          <h5> Título: ${s.title}</h5>
          <p><h5> Precio: ${s.precio}</h5></p>
          <img src="${s.thumbnailUrl}">
          <hr>
          <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
          
          <hr>
          </div>
        `})):e.textContent="No se encontraron resultados."}catch(c){console.error("Error al cargar el archivo JSON:",c)}}async function v(){const t=document.getElementById("contacto");try{(await(await fetch("catalogo/varios.json")).json()).forEach(c=>{const r=document.createElement("option");r.value=c.title,r.textContent=c.title,t.appendChild(r)}),t.addEventListener("change",h)}catch(e){console.error("Error al cargar el archivo JSON:",e)}}v()},S=()=>{let a=document.createElement("div"),o=document.createElement("div");o.id="divDatos1",o.innerHTML=`

  <p class="mb-0">Twitter: @Preciodeamigoar</p>
  <p class="mt-0">Instagram: @Preciodeamigo.ar</p>  
   
   `,a.appendChild(o),a.id="mydivPie";let n=document.createElement("img");n.id="img1",n.src="img/preciodeamigo-logo-pie.jpg",a.appendChild(n),document.body.appendChild(a)};E(),y(),C(),S()}
