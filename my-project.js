let blogs = [];

function addBlog() {
  
  let title = document.getElementById('input-prject-name').value;
  let content = document.getElementById('input-description').value;

  let startdate = document.getElementById('input-start-date').value;
  let stopdate = document.getElementById('input-end-date').value;

  let image = document.getElementById('input-blog-image').files[0];
  image = URL.createObjectURL(image);

  let ceklis = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(item => item.value);

  let blog = {
    author: 'Nurul Anisah',
    title,
    startdate,
    stopdate,
    content,
    image,
    ceklis,
  };

  blogs.push(blog);
  renderBlogs();
}


function renderBlogs() {

  lengthData = blogs.length;
  let blogContainer = document.getElementById("contents");
  blogContainer.innerHTML = firstBlogContent();

  let i = 0;
  for (i; i < lengthData; i++) {

    let icons = blogs[i].ceklis.map(value => `<img src="assets/${value}">`)
   
    blogContainer.innerHTML += `
        <div class="project-item">
        <div class="my-project-img">
          <img src="${blogs[i].image}" alt="" />
        </div>
        <div class="detail-project">
          <h3>
            <a href="my-project-detail.html" target="_blank">${blogs[i].title}</a>
          </h3>
          <div class="detail-project-content">
            Duration : ${blogs[i].startdate, blogs[i].stopdate}
          </div>
          <p>${blogs[i].content}</p>
          
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
  function firstBlogContent() {
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
  



