---
layout: ../../layouts/ArticleLayout.astro
slug: posts/astro-v3
title: Migrating to Astro 3.0!
author: Treknuts
description: "My experience as an Astro newbie going from Astro 2.x to 3.0"
image:
  url: "https://astro.build/_astro/blog-hero-post-header.bd092747.webp"
  alt: "Graphic of the number three signifying the version three release of Astro."
  credit: "Astro Blog"
pubDate: 09/01/2023
tags: ["Astro", "HTML", "CSS", "JavaScript", "Svelte"]
draft: false
---

## Hello, Astro v3.0!

Since I'm an Astro newbie, a lot of the changes don't mean a lot to me, but a cool experimental feature caught my eye a few weeks ago, _ViewTransitions_! I really enjoyed the named transitions behavior with the morph effect applied to images while navigating between the blog page and the article itself.

This was all fine and dandy until my theme toggler and mobile navigation button stopped working! The soft navigation was wiping out things like `data-theme="dark/light"` attribute for dark/light theme, and the `expanded` class for opening and closing the mobile navigation menu. Also, for whatever reason, the even listeners themselves weren't firing after navigating to another page.

## My (probably incorrect) Solution

After a lot of debugging and banging my head against my desk, I took a shot in the dark. My solution? _Svelte Component_! This simple migration to Svelte components with the `transition:persist` and `client:load` attributes cured my ailments. The code mostly remained the same with minor changes.

### Svelte Theme Toggler

The logic is the same; Grab the theme from localstorage and create an event listener to toggle the theme when the button is clicked.

```javascript
let isDark;

// Grab the theme from localStorage
function onMount() {
  isDark = window.localStorage.theme === "dark" ? true : false;
}

function handleToggleClick() {
  const element = document.documentElement;
  isDark = element.dataset.theme === "dark";

  if (isDark) {
    localStorage.setItem("theme", "light");
    element.dataset.theme = "light";
  } else {
    localStorage.setItem("theme", "dark");
    element.dataset.theme = "dark";
  }
}
```

Then add the event listener to the button using Svelte things

```html
<button id="themeToggle" on:click="{handleToggleClick}">
  <!-- Inner HTML -->
</button>
```

### Svelte Mobile Nav Button

This is basically the same as the theme picker migration minus using any state. I'm just simply toggling the class selector.

```javascript
function handleClick() {
  document.querySelector(".nav-links").classList.toggle("expanded");
}
```

And just like before, add the listener to the button.

```html
<button id="hamburger" on:click="{handleClick}" aria-label="Navigation Button">
  <!-- Inner HTML -->
</button>
```

## Performance Before and After

I was worried the additional Svelte components would impact the performance of the site, but the hit was negligible. Here are my Lighthouse scores before and after the addition of Svelte components.

### Before

```
Lighthouse scores for /
Performance: 96
Accessibility: 100
Best Practices: 92
SEO: 91
```

### After

```
Lighthouse scores for /
Performance: 95
Accessibility: 100
Best Practices: 92
SEO: 91
```

For those paying attention, that's a _whopping_ 1% performance hit. Entirely worth the savings in sanity and hair loss.

## Conclusion

There is almost certainly an Astro way of fixing this, but as this is my first and only Astro project, it's a bit of the mess. Moving these components to Svelte was the path of least resistance which was appealing to me. Especially since my Lighthouse scores hardly changed at all.
