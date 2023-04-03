const navElements = [
  {
    href: '/porady',
    title: 'Zobacz artykuły z poradami',
    label: 'Porady',
  },
  {
    href: '/drinki',
    title: 'Zobacz galerię drinków/koktajli',
    label: 'Drinki',
  },
  {
    href: '/recenzje',
    title: 'Zobacz recenzje',
    label: 'Recenzje',
  },
  {
    href: '/kontakt',
    title: 'Zobacz informacje o blogu i autorach',
    label: 'O blogu i autorach',
  },
];

class AdiMainNav extends HTMLElement {
  constructor() {
    super();
  }

  render() {
    this.innerHTML = `<nav class="bg-slate-50 mb-8 border-b-4 border-slate-100 text-sm font-bold font-serif">
      <ul class="container mx-auto px-2 flex flex-col md:flex-row uppercase tracking-wide">
        ${navElements.map((item, i) => {
          return `<li class="${`flex ${i === navElements.length-1 ? '' : 'border-r-2 border-slate-100'}`.trim()}">
            <a href="${item.href}" title="${item.title}" class="w-full px-8 py-2 hover:bg-slate-100">${item.label}</a>
          </li>`;
        }).join('')}
      </ul>
    </nav>`;
  }

  connectedCallback() {
    this.render();
  }
}
customElements.define("adi-main-nav", AdiMainNav);

class AdiComments extends HTMLElement {
  constructor() {
    super();
  }

  render() {
    this.innerHTML = `<div id="disqus_thread"></div>
      <noscript>Aby zobaczyć komentarze, włącz JavaScript na swojej stronie.</noscript>`;

    var d = document, s = d.createElement('script');
    s.src = 'https://domowybar.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  }

  connectedCallback() {
    this.render();
  }
}
customElements.define("adi-comments", AdiComments);

const loadFonts = () => {
  const head = document.head;
  const link = document.createElement('link');

  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = '/dist/fonts.css';

  head.appendChild(link);
};
loadFonts();
