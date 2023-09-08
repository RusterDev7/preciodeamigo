(function(){const y=document.createElement("link").relList;if(y&&y.supports&&y.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))f(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const b of l.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&f(b)}).observe(document,{childList:!0,subtree:!0});function C(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function f(s){if(s.ep)return;s.ep=!0;const l=C(s);fetch(s.href,l)}})();S();function S(){const E=()=>{let a=document.createElement("div");a.id="mydiv";let o=document.createElement("img");o.src="img/preciodeamigo-logo.jpg",a.appendChild(o);let n=document.createElement("div");n.id="myDiv2",n.innerHTML=`
<hr>

    <a id="whatsapp" style = "text-decoration: none;" href="https://api.whatsapp.com/send?phone=1134795400">
    <img  src="img/whatsapp-80.png" alt="whatsapp" style="width: 40px; height: auto;"></a>
    &#160;&#160;
    <a href="https://twitter.com/preciodeamigoar/" style="text-decoration: none;">
    <img src="img/twitter-80.png" alt="twitter" style="width: 40px; height: auto;"></a>
    &#160;&#160;
    <a href="https://www.instagram.com/preciodeamigo.ar/" style="text-decoration: none;">
    <img src="img/instagram-80.png" alt="Instagram" width="100" style="width: 40px; height: auto;">
    </a>

<hr>
`,a.appendChild(n),document.body.appendChild(a)},y=()=>{var a=document.createElement("div");a.id="myDivNav",document.body.appendChild(a);var o=document.createElement("div");o.className="mydivClass",o.id="btnInicio",o.innerHTML="Mensulas",a.appendChild(o),document.getElementById("btnInicio").addEventListener("click",()=>{f()});var n=document.createElement("div");n.className="mydivClass",n.id="btnQsomos",n.innerHTML="Escritorios",a.appendChild(n),document.getElementById("btnQsomos").addEventListener("click",()=>{s()});var m=document.createElement("div");m.className="mydivClass",m.id="btnDescargas",m.innerHTML="Mesa ratona",a.appendChild(m),document.getElementById("btnDescargas").addEventListener("click",()=>{l()});var u=document.createElement("div");u.className="mydivClass",u.id="btnContacto",u.innerHTML="Varios",a.appendChild(u),document.getElementById("btnContacto").addEventListener("click",()=>{b()})},C=()=>{let a=document.createElement("div");a.id="myDivNav2",a.innerHTML=`
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
                            <option value="">Seleccionar Artículo</option>
                            </select>


                            <div id="resultado"></div>

                            <div id="idCatalogo"></div> `,document.querySelector("#idCatalogo").innerHTML=`                    
                                    
                    
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
  `;const a=document.getElementById("items"),o=document.getElementById("template-card").content,n=document.createDocumentFragment(),m=async()=>{try{const t=await(await fetch("catalogo/mensula.json")).json();u(t)}catch(e){console.log(e)}},u=e=>{e.forEach(t=>{o.querySelector("h5").textContent=t.title,o.querySelector("p").textContent=t.precio,o.querySelector("img").setAttribute("src",t.thumbnailUrl),o.querySelector(".btn-dark").dataset.id=t.id;const d=o.cloneNode(!0);n.appendChild(d)}),a.appendChild(n)};m();async function h(){const e=document.querySelector("#contacto"),t=document.querySelector("#idCatalogo");if(!e.value){t.textContent="";return}try{const c=await(await fetch("catalogo/mensula.json")).json(),g=e.value.toLowerCase(),p=c.filter(i=>i.title.toLowerCase()===g);p.length>0?(t.innerHTML="",p.forEach(i=>{t.innerHTML+=`
         <div style="display: grid; place-content: center;">
         <hr>
          <h5> Título: ${i.title}</h5>
          <p><h5> Precio: ${i.precio}</h5></p>
          <img src="${i.thumbnailUrl}">
          <hr>
          
          <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
                                           
          <hr>
          </div>
        `})):t.textContent="No se encontraron resultados."}catch(r){console.error("Error al cargar el archivo JSON:",r)}}async function v(){const e=document.getElementById("contacto");try{(await(await fetch("catalogo/mensula.json")).json()).forEach(r=>{const c=document.createElement("option");c.value=r.title,c.textContent=r.title,e.appendChild(c)}),e.addEventListener("change",h)}catch(t){console.error("Error al cargar el archivo JSON:",t)}}v()},s=()=>{document.querySelector("#myDivNav2").innerHTML=`
                            <select id="contacto">
                            <option value="">Seleccionar Artículo</option>
                            </select>


                            <div id="resultado"></div>

                            <div id="idCatalogo"></div> `,document.querySelector("#idCatalogo").innerHTML=`                    
                                    
                    
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
  `;const a=document.getElementById("items"),o=document.getElementById("template-card").content,n=document.createDocumentFragment(),m=async()=>{try{const t=await(await fetch("catalogo/escritorio.json")).json();u(t)}catch(e){console.log(e)}},u=e=>{e.forEach(t=>{o.querySelector("h5").textContent=t.title,o.querySelector("p").textContent=t.precio,o.querySelector("img").setAttribute("src",t.thumbnailUrl),o.querySelector(".btn-dark").dataset.id=t.id;const d=o.cloneNode(!0);n.appendChild(d)}),a.appendChild(n)};m();async function h(){const e=document.querySelector("#contacto"),t=document.querySelector("#idCatalogo");if(!e.value){t.textContent="";return}try{const c=await(await fetch("catalogo/escritorio.json")).json(),g=e.value.toLowerCase(),p=c.filter(i=>i.title.toLowerCase()===g);p.length>0?(t.innerHTML="",p.forEach(i=>{t.innerHTML+=`
         <div style="display: grid; place-content: center;">
         <hr>
          <h5> Título: ${i.title}</h5>
          <p><h5> Precio: ${i.precio}</h5></p>
          <img src="${i.thumbnailUrl}">
          <hr>
          <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
          
          <hr>
          </div>
        `})):t.textContent="No se encontraron resultados."}catch(r){console.error("Error al cargar el archivo JSON:",r)}}async function v(){const e=document.getElementById("contacto");try{(await(await fetch("catalogo/escritorio.json")).json()).forEach(r=>{const c=document.createElement("option");c.value=r.title,c.textContent=r.title,e.appendChild(c)}),e.addEventListener("change",h)}catch(t){console.error("Error al cargar el archivo JSON:",t)}}v()},l=()=>{document.querySelector("#myDivNav2").innerHTML=`
                            <select id="contacto">
                            <option value="">Seleccionar Artículo</option>
                            </select>


                            <div id="resultado"></div>

                            <div id="idCatalogo"></div> `,document.querySelector("#idCatalogo").innerHTML=`                    
                                    
                    
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
  `;const a=document.getElementById("items"),o=document.getElementById("template-card").content,n=document.createDocumentFragment(),m=async()=>{try{const t=await(await fetch("catalogo/ratona.json")).json();u(t)}catch(e){console.log(e)}},u=e=>{e.forEach(t=>{o.querySelector("h5").textContent=t.title,o.querySelector("p").textContent=t.precio,o.querySelector("img").setAttribute("src",t.thumbnailUrl),o.querySelector(".btn-dark").dataset.id=t.id;const d=o.cloneNode(!0);n.appendChild(d)}),a.appendChild(n)};m();async function h(){const e=document.querySelector("#contacto"),t=document.querySelector("#idCatalogo");if(!e.value){t.textContent="";return}try{const c=await(await fetch("catalogo/ratona.json")).json(),g=e.value.toLowerCase(),p=c.filter(i=>i.title.toLowerCase()===g);p.length>0?(t.innerHTML="",p.forEach(i=>{t.innerHTML+=`
         <div style="display: grid; place-content: center;">
         <hr>
          <h5> Título: ${i.title}</h5>
          <p><h5> Precio: ${i.precio}</h5></p>
          <img src="${i.thumbnailUrl}">
          <hr>
          <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
          
          <hr>
          </div>
        `})):t.textContent="No se encontraron resultados."}catch(r){console.error("Error al cargar el archivo JSON:",r)}}async function v(){const e=document.getElementById("contacto");try{(await(await fetch("catalogo/ratona.json")).json()).forEach(r=>{const c=document.createElement("option");c.value=r.title,c.textContent=r.title,e.appendChild(c)}),e.addEventListener("change",h)}catch(t){console.error("Error al cargar el archivo JSON:",t)}}v()},b=()=>{document.querySelector("#myDivNav2").innerHTML=`
                            <select id="contacto">
                            <option value="">Seleccionar Artículo</option>
                            </select>


                            <div id="resultado"></div>

                            <div id="idCatalogo"></div> `,document.querySelector("#idCatalogo").innerHTML=`                    
                                    
                    
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
  `;const a=document.getElementById("items"),o=document.getElementById("template-card").content,n=document.createDocumentFragment(),m=async()=>{try{const t=await(await fetch("catalogo/varios.json")).json();u(t)}catch(e){console.log(e)}},u=e=>{e.forEach(t=>{o.querySelector("h5").textContent=t.title,o.querySelector("p").textContent=t.precio,o.querySelector("img").setAttribute("src",t.thumbnailUrl),o.querySelector(".btn-dark").dataset.id=t.id;const d=o.cloneNode(!0);n.appendChild(d)}),a.appendChild(n)};m();async function h(){const e=document.querySelector("#contacto"),t=document.querySelector("#idCatalogo");if(!e.value){t.textContent="";return}try{const c=await(await fetch("catalogo/varios.json")).json(),g=e.value.toLowerCase(),p=c.filter(i=>i.title.toLowerCase()===g);p.length>0?(t.innerHTML="",p.forEach(i=>{t.innerHTML+=`
         <div style="display: grid; place-content: center;">
         <hr>
          <h5> Título: ${i.title}</h5>
          <p><h5> Precio: ${i.precio}</h5></p>
          <img src="${i.thumbnailUrl}">
          <hr>
          <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
          
          <hr>
          </div>
        `})):t.textContent="No se encontraron resultados."}catch(r){console.error("Error al cargar el archivo JSON:",r)}}async function v(){const e=document.getElementById("contacto");try{(await(await fetch("catalogo/varios.json")).json()).forEach(r=>{const c=document.createElement("option");c.value=r.title,c.textContent=r.title,e.appendChild(c)}),e.addEventListener("change",h)}catch(t){console.error("Error al cargar el archivo JSON:",t)}}v()},w=()=>{let a=document.createElement("div"),o=document.createElement("div");o.id="divDatos1",o.innerHTML=`
    <hr>

    <a id="whatsapp" style = "text-decoration: none;" href="https://api.whatsapp.com/send?phone=1134795400">
    <img  src="img/whatsapp-80.png" alt="whatsapp" style="width: 40px; height: auto;"></a>
    &#160;&#160;
    <a href="https://twitter.com/preciodeamigoar/" style="text-decoration: none;">
    <img src="img/twitter-80.png" alt="twitter" style="width: 40px; height: auto;"></a>
    &#160;&#160;
    <a href="https://www.instagram.com/preciodeamigo.ar/" style="text-decoration: none;">
    <img src="img/instagram-80.png" alt="Instagram" width="100" style="width: 40px; height: auto;">
    </a>
    
    <hr> 

 
   
   `,a.appendChild(o),a.id="mydivPie";let n=document.createElement("img");n.id="img1",n.src="img/preciodeamigo-logo-pie.jpg",a.appendChild(n),document.body.appendChild(a)};E(),y(),C(),w()}
