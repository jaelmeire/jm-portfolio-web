function initLightbox(instanceId: string) {
  const lightboxEl = document.getElementById(instanceId);
  if (!(lightboxEl instanceof HTMLElement)) return;

  const lightbox = lightboxEl;
  const content = lightbox.querySelector('[data-lightbox-content]') as HTMLElement;
  const gallery = lightbox.querySelector('[data-lightbox-gallery]') as HTMLElement;
  const info = lightbox.querySelector('[data-lightbox-info]') as HTMLElement;
  const closeBtn = lightbox.querySelector('[data-close-lightbox]') as HTMLElement;
  const prevBtn = lightbox.querySelector('[data-lightbox-prev]');
  const nextBtn = lightbox.querySelector('[data-lightbox-next]');

  const projects = (window as any).__LIGHTBOX_DATA__?.[instanceId];
  if (!Array.isArray(projects)) return;

  let currentIndex = -1;
  const preloaded = new Set<string>();

  function preloadImages(sources: string[]) {
    sources.forEach(src => {
      if (preloaded.has(src)) return;
      preloaded.add(src);
      const img = new Image();
      img.src = src;
    });
  }

  function preloadAdjacentProjects(index: number) {
    const prev = projects[index - 1];
    const next = projects[index + 1];
    if (prev?.gallery?.length) preloadImages(prev.gallery);
    if (next?.gallery?.length) preloadImages(next.gallery);
  }

  function animateContent(direction: 'next' | 'prev', onMidpoint: () => void) {
    const offset = direction === 'next' ? -20 : 20;

    gallery.style.transition = 'opacity 200ms ease, transform 200ms ease';
    info.style.transition = 'opacity 200ms ease, transform 200ms ease';
    gallery.style.opacity = '0';
    info.style.opacity = '0';
    gallery.style.transform = `translateX(${offset}px)`;
    info.style.transform = `translateX(${offset}px)`;

    setTimeout(() => {
      onMidpoint();
      gallery.style.transition = 'none';
      info.style.transition = 'none';
      gallery.style.transform = `translateX(${-offset}px)`;
      info.style.transform = `translateX(${-offset}px)`;

      requestAnimationFrame(() => {
        gallery.style.transition = 'opacity 200ms ease, transform 200ms ease';
        info.style.transition = 'opacity 200ms ease, transform 200ms ease';
        gallery.style.opacity = '1';
        info.style.opacity = '1';
        gallery.style.transform = 'translateX(0)';
        info.style.transform = 'translateX(0)';
      });
    }, 200);
  }

  function openLightboxByIndex(index: number, direction?: 'next' | 'prev') {
    const project = projects[index];
    if (!project) return;

    const updateContent = () => {
      currentIndex = index;
      gallery.scrollTop = 0;
      info.scrollTop = 0;

      gallery.innerHTML = project.gallery
        .map((src: string) => `<img src="${src}" class="w-full rounded-xl border border-white/5" />`)
        .join('');

      info.innerHTML = `
        <p class="text-xs tracking-widest text-gray-500 uppercase mb-4">${project.category}</p>
        <h3 class="text-2xl font-bold mb-4">${project.title}</h3>
        ${project.longDescription
          ? `<p class="text-gray-400 mb-6 leading-relaxed">${project.longDescription}</p>`
          : ''}
        ${project.tags?.length
          ? `<ul class="flex flex-wrap gap-3 mb-8 text-sm">
              ${project.tags.map((tag: any) => `
                <li class="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition hover:scale-[1.03] px-4 py-2">
                  <img src="${tag.icon}" class="w-4 h-4 opacity-80" />
                  ${tag.label}
                </li>`).join('')}
            </ul>`
          : ''}
        <div class="flex items-center gap-3 flex-wrap">
          ${project.liveUrl
            ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                  bg-white/10 border border-white/15 text-sm text-gray-300
                  hover:bg-white/20 hover:text-white transition">
                View live <span class="text-xs opacity-70">↗</span>
              </a>`
            : ''}
          ${project.githubUrl
            ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                  bg-white/10 border border-white/15 text-sm text-gray-300
                  hover:bg-white/20 hover:text-white transition"
                aria-label="Ver en GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4 opacity-80" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                GitHub
              </a>`
            : ''}
        </div>
      `;

      preloadAdjacentProjects(index);
    };

    if (currentIndex === -1 || !direction) {
      updateContent();
      lightbox.classList.remove('opacity-0', 'pointer-events-none');
      content.classList.remove('scale-95', 'opacity-0');
      return;
    }

    animateContent(direction, updateContent);
  }

  function closeLightbox() {
    lightbox.classList.add('opacity-0', 'pointer-events-none');
    content.classList.add('scale-95', 'opacity-0');
  }

  function showNext() {
    openLightboxByIndex((currentIndex + 1) % projects.length, 'next');
  }

  function showPrev() {
    openLightboxByIndex((currentIndex - 1 + projects.length) % projects.length, 'prev');
  }

  // Events — scoped al lightbox de esta instancia
  document.addEventListener('click', e => {
    const target = e.target as HTMLElement;
    const trigger = target.closest('[data-open-project]');
    if (!trigger) return;

    // Solo responde si el trigger pertenece a la sección de este lightbox
    if (trigger.closest(`[data-lightbox-scope="${instanceId}"]`) === null) return;

    const hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const isButton = trigger.tagName === 'BUTTON';
    if (hasHover && !isButton) return;

    const id = trigger.getAttribute('data-open-project');
    const index = projects.findIndex((p: any) => p.id === id);
    if (index !== -1) openLightboxByIndex(index);
  });

  closeBtn.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  nextBtn?.addEventListener('click', e => { e.stopPropagation(); showNext(); });
  prevBtn?.addEventListener('click', e => { e.stopPropagation(); showPrev(); });

  document.addEventListener('keydown', e => {
    if (lightbox.classList.contains('opacity-0')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });
}

// Tag scroll horizontal
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll<HTMLElement>('.project-card-tags').forEach(list => {
    list.addEventListener('wheel', e => {
      if (list.scrollWidth <= list.clientWidth) return;
      e.preventDefault();
      list.scrollLeft += e.deltaY;
    }, { passive: false });
  });

  // Inicializa todas las instancias de lightbox presentes en la página
  const data = (window as any).__LIGHTBOX_DATA__;
  if (data) {
    Object.keys(data).forEach(id => initLightbox(id));
  }
});