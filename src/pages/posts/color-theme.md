---
layout: ../../layouts/ArticleLayout.astro
slug: posts/color-theme
title: Color themes using DRY principles
author: Treknuts
description: "Setting up light and dark themes that users can toggle."
image:
  url: "https://images.unsplash.com/photo-1422207049116-cfaf69531072?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8eWluJTIwYW5kJTIweWFuZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  alt: "Image with a dark cup of coffee and a cup of milk"
pubDate: 2023-08-25
tags: ["JavaScript", "HTML", "CSS", "Web Design"]
---

## Fine! I'll let the user choose...

Personally, I think light themes should be illegal. I really enjoy some, but it's diffucult for me ***personally*** to use a website or app that only has a light theme. Since I'm only one person with an opinion, let's let whomever visits my site/app decide whether they want to use the light or dark mode.

## Define your theme

Modern CSS let's us define variables. In this scenario, I'm only defining colors as variables, but you can use them for anything you want. You can define gradients, borders, spacing, and much more with CSS variables. For the very site you're on, here are is the theme for light and dark modes. 

```css
/* Light theme colors */
:root {
  --text: #221211;
  --background: #ffffff;
  --primary: #51a0a4;
  --secondary: #f0e1e1;
  --accent: #244648;
}

/* Dark theme colors */
[data-theme="dark"] {
  --text: #ffffff;
  --background: #221211;
  --primary: #51a0a4;
  --secondary: #261313;
  --accent: #59a8ac;
}
```

For the `dark` theme, I'm using the data attribute `theme`. If it's set to `dark` on the `html` element, the variables will have those values. Otherwise, it will use the `light` theme colors defined in the `:root` psuedo element.

If you don't have the patience for picking colors, check out [Realtime Colors](https://www.realtimecolors.com) like I did. 

## Apply the varibles where you want them

This bit is completely subjective. It's a good idea to follow the [60/30/10 rule](https://www.youtube.com/watch?v=UWwNIMHFdW4&t=139s), but really, it's up to you. Color theory and psychology are way out of scope for this post. Anywho! Here are some examples of using the variables in your CSS selectors:

```css
html {
  /* other styles */
  background-color: var(--background);
  color: var(--text);
}

.primary-btn {
  /* other styles... */
  background-color: var(--primary);
  color: var(--accent);
}
```

One nice thing is that the root `html` element defines the value of the variables, but they can have the same name. So, `var(--background)` will be different depending upon the `theme` value in the `html` element. If you have colors that are the same regardless of `light` or `dark` mode, you can define the variable once in the `:root` element.

## Persist the theme

By default, we will set the `data-theme` attribute depending on the user's system settings with the `prefers-color-scheme` using `window.matchMedia`. To persist the theme when the page is refreshed or the user navigates to a different page, we will store the `theme` in the browser's `localstorage`.

```javascript
const theme = (() => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  })();

  if (theme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  window.localStorage.setItem("theme", theme);
```

## Let the user choose

Now we let the user toggle the theme. In my implementation, we put a button in the navigation menu that the user can click to toggle the theme. We just need to grab the button from the dom and add an even listener to it. Then I toggle the theme based on what's in `localstorage`

```javascript
  const handleToggleClick = () => {
    const element = document.documentElement;

    const isDark = element.dataset.theme === "dark";

    if (isDark) {
      localStorage.setItem("theme", "light");
      element.dataset.theme = "light";
    } else {
      localStorage.setItem("theme", "dark");
      element.dataset.theme = "dark";
    }
  };

  document
    .getElementById("themeToggle")
    .addEventListener("click", handleToggleClick);
```

This took me a minute to figure out because things look a little backward in the code, so I'm going to walk through that for my own sake. Stick around if you need the additional explanation.

First, I check if the current theme `isDark` using the `data-theme` attribute in the `const isDark = element.dataset.theme === "dark"` line. Now, if the theme is currently set to `dark`, we need to ***turn the lights on*** and set it to `light`. If the theme is `light` we ***turn the lights off*** and set it to `dark`.

## **Bonus**: Update the theme icon

A feature I think is cool is changing the icon based on the current theme. I have two icons, one for the dark theme, and one for the light theme. The icon is a sun for the dark theme, indicating if the user clicks it they will ***turn the lights on***. The icon for the light theme is a moon, indicating if the user clicks it they will ***turn the lights off***. CSS allows us to access `data` attributes to hide and show the icons depending on the attribute's value. Check it out:

```css
/* show the sun on dark */
html[data-theme="dark"] .sun {
  fill: var(--text);
}
/* hide the moon on light */
html[data-theme="dark"] .moon {
  fill: transparent;
}
/* hide the sun on light */
html[data-theme="light"] .sun {
  fill: transparent;
}
/* show the sun on light */
html[data-theme="light"] .moon {
  fill: var(--text);
}
```

I think that about does it. My favorite part of this implementation is that you can easily change your theme. All you need to do is change the CSS variables in one spot. I believe this falls under the DRY (Don't repeat yourself) principle I learned about reading [The Pragmatic Programmer](https://www.amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary/). That's a great book I recommend to anyone that is a software engineer/web developer.

If you want to see this implementation in action, smack the theme icon in the navigation menu of this very page!