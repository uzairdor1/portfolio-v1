import { Component, DestroyRef, computed, inject, input, signal } from '@angular/core';

interface Token { t: string; c: string; }

/** One regex, one capture group per token class. Order matters: comments and strings win first. */
const TOKEN = /(\/\/.*)|('(?:[^'\\\n]|\\.)*'?)|(\b\d+\b)|(\b(?:const|let|return|true|false|new)\b)|(\b[A-Za-z_]\w*(?=\())|(\b[A-Za-z_]\w*(?=:))|([{}[\]();,.=:])/g;
const CLASSES = ['com', 'str', 'num', 'kw', 'fn', 'prop', 'pun'];

/** Types `code` out character by character with live syntax highlighting. No libraries, no innerHTML. */
@Component({
  selector: 'app-code-snippet',
  template: `<pre class="code" aria-label="Code snippet"><code>@for (k of tokens(); track $index) {<span [class]="k.c">{{ k.t }}</span>}<span class="caret"></span></code></pre>`,
})
export class CodeSnippetComponent {
  code = input.required<string>();
  speed = input(24); // ms per character

  private shown = signal(0);
  protected tokens = computed(() => this.tokenize(this.code().slice(0, this.shown())));

  constructor() {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { this.shown.set(Infinity); return; }
    const id = setInterval(() => {
      this.shown.update(n => n + 1);
      if (this.shown() >= this.code().length) clearInterval(id);
    }, this.speed());
    inject(DestroyRef).onDestroy(() => clearInterval(id));
  }

  private tokenize(src: string): Token[] {
    const out: Token[] = []; let last = 0;
    for (const m of src.matchAll(TOKEN)) {
      if (m.index! > last) out.push({ t: src.slice(last, m.index), c: '' });
      out.push({ t: m[0], c: CLASSES[m.findIndex((g, i) => i > 0 && g !== undefined) - 1] });
      last = m.index! + m[0].length;
    }
    if (last < src.length) out.push({ t: src.slice(last), c: '' });
    return out;
  }
}
