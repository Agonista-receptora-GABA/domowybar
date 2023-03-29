const navElements = [
  {
    href: '/porady',
    title: 'Zobacz artykuły z poradami',
    label: 'Porady',
  },
  {
    href: '/koktajle',
    title: 'Zobacz galerię koktajli',
    label: 'Koktajle',
  },
  {
    href: '/recenzje',
    title: 'Zobacz recenzje',
    label: 'Recenzje',
  },
  {
    href: '/o-blogu-i-autorze.html',
    title: 'Zobacz informacje o blogu i autorze',
    label: 'O blogu i autorze',
  },
];

class AdiMainNav extends HTMLElement {
  constructor() {
    super();
  }

  render() {
    this.innerHTML = `<nav class="bg-slate-50 mb-8 border-b-4 border-slate-100 text-sm font-bold">
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
