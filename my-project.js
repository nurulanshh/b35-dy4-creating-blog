let projects = [];

function addproject() {
  
  let title = document.getElementById('input-prject-name').value;
  let content = document.getElementById('input-description').value;

  let startdate = document.getElementById('input-start-date').value;
  let stopdate = document.getElementById('input-end-date').value;

  let image = document.getElementById('input-project-image').files[0];
  image = URL.createObjectURL(image);

  let ceklis = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(item => item.value);

  let project = {
    author: 'Nurul Anisah',
    title,
    startdate,
    stopdate,
    content,
    image,
    ceklis,
  };

  projects.push(project);
  renderprojects();
}


function renderprojects() {

  lengthData = projects.length;
  let projectContainer = document.getElementById("contents");
  projectContainer.innerHTML = firstProjectContent();

  let i = 0;
  for (i; i < lengthData; i++) {

    let icons = projects[i].ceklis.map(value => `<img src="assets/${value}">`)
   
    projectContainer.innerHTML += `
        <div class="project-item">
        <div class="my-project-img">
          <img src="${projects[i].image}" alt="" />
        </div>
        <div class="detail-project">
          <h3>
            <a href="my-project-detail.html" target="_blank">${projects[i].title}</a>
          </h3>
          <div class="detail-project-content">
            Duration : ${projects[i].startdate, projects[i].stopdate}
          </div>
          <p>${projects[i].content}</p>
          
          <div class="logo">
          <div class="nodesj">
          `+ icons + `
          </div>
          </div>

          <div class="btn-group">
            <button class="btn-edit">edit</button>
            <button class="btn-delete">delete</button>
          </div>
        </div>
      </div>
      `;

}

  // Non Looping 2x
  function firstProjectContent() {
    return `<div class="project-item">
    <div class="my-project-img">
      <img src="assets/my-project-img-detail.png" alt="cover" />
    </div>
    <div class="detail-project">
      <h4>
        <a href="my-project-detail.html" target="_blank">Dumbways Mobile App - 2021</a>
      </h4>
      <div class="detail-project-content">
        Durasi : 3 Bulan
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione magnam minima in culpa itaque deleniti unde
        quae aperiam ex architecto, blanditiis eveniet.
      </p>

      <div class="logo">
        <div class="nodejs">
          <img src="assets/node-js.png" alt="ns" id="nss">
        </div>
        <div class="reactjs">
          <img src="assets/reactjs.png" alt="rs" id="rss">
        </div>
        <div class="javascript">
          <img src="assets/js.png" alt="js" id="jss">
        </div>
        <div class="typescript">
          <img src="assets/typescript.png" alt="ts" id="tss">
        </div>
      </div>
      <div class="btn-group">
        <button class="btn-edit">edit</button>
        <button class="btn-delete">delete</button>
      </div>
    </div>
  </div>`;
}



}
  



