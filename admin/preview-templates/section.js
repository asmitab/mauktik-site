import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

// Preview component for a Page
const Page = createClass({
  render() {
    const entry = this.props.entry;

    if (entry.getIn(["data", "gallery"])) {
      const images = entry.getIn(["data", "gallery"]);

      return html`
      <section class="wrapper">
      <div class="carousel">
        ${ images.map(img => html`
            <input type="checkbox" class="faux-ui-facia"/>
            <div class="slide">
              <img src="${img}" alt="Gallery Image"/>
            </div>
        `)}
      </div>
    </section>
    `;

    } else if (entry.getIn(["data", "imgurl"])) {
      return html`
      <div class="flex flex-2">
        <div class="col col1">
          <div class="image ${entry.getIn(["data", "imgshape"])} fit">
            <a href="${entry.getIn(["data", "imghref"])}" class="link" target="_blank">
              <img src="${entry.getIn(["data", "imgurl"])}" alt=""/></a>
        </div>
      </div>
      <div class="col col2">
        <h3>${entry.getIn(["data", "heading"])}</h3>
        ${this.props.widgetFor("body")}
      </div>
    </div>`;
    } else {
      return html`
      <main>
      <h1>${entry.getIn(["data", "heading"], null)}</h1>

      ${this.props.widgetFor("body")}
    </main>`;
    }
  }
});

export default Page;
