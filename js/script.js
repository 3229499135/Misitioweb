(async function (d) {
  //Fecha formato humano
  function humanDate(date) {
    return new Date(`${date}T00:00:00`)
      .toDateString()
      .slice(4)
      .replace("Jan", "Ene")
      .replace("Apr", "Abr")
      .replace("Aug", "Ago")
      .replace("Dec", "Dic");
  }

  //Datos del sitio
  async function getData() {
    let res = await fetch("assets/data.json"),
      json = await res.json();
    return json;
  }

  let data = await getData();

  //Artículos del blog
  if (d.getElementById("posts")) {
    const posts = data.posts.filter((el) => el.publish === true);
    let $posts = "";

    posts.forEach(
      (el) =>
        ($posts += `
          <a href="${location.origin}/${el.slug}" class="blog-item">
            <figure>
              <img src="img/category/${el.category}.svg" alt="${
          el.category
        }" title="Categoría: ${el.category}" loading="lazy">
              <figcaption>
                <span>${el.title}</span>
                <time datetime="${el.date}">${humanDate(el.date)}</time>
              </figcaption>
            </figure>
          </a>
      `)
    );
    d.getElementById("posts").insertAdjacentHTML("beforeend", $posts);
  }
  
  //Artículo o nota actual
  if (d.getElementById("post-blog")) {
    let post;

    const currentPost = data.posts.filter(
      (el) =>
        location.pathname === `/${el.slug}` ||
        location.pathname === `/${el.slug}.html`
    );

    if (currentPost.length === 0) {
      const currentToughts = data.thoughts.filter(
        (el) =>
          location.pathname === `/${el.slug}` ||
          location.pathname === `/${el.slug}.html`
      );

      post = currentToughts[0];
    } else {
      post = currentPost[0];
    }

    d.getElementById("post-blog").innerHTML = `
        <h1>${post.title}</h1>
        <aside class="post-date">
          <small>
            <span>Última actualización:</span>
            <i>
              <time datetime="${post.date}">
                ${humanDate(post.date)}
              </time>
            </i>
          </small>
        </aside>
        <img class="post-category" src="img/category/${
          post.category
        }.svg" alt="Categoría: ${post.category}" title="Categoría: ${
      post.category
    }" loading="lazy">
      `;
  }
})(document);