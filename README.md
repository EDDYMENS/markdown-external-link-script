# markdown-external-link-script
This simple library adds external link support to Markdown


# How to use

1. Pull in the [library](https://cdn.jsdelivr.net/gh/eddymens/markdown-external-link-script@main/main.min.js) into your Markdown file. 
2. Define your link and be sure to add ` {_ext}` (note the initial spacing) to the link name to mark it as an external link. E.g.: `[button text‌ {_ext}](https://eddymens.com)`.

**Here is a complete example**


```html
## Demo Markdown

[button text‌ {_ext}](https://eddymens.com)

<script src='https://cdn.jsdelivr.net/gh/eddymens/markdown-external-link-script@main/main.min.js'></script>
```

I have also written on the subject of [external links and Markdown](https://www.eddymens.com/blog/how-to-make-a-markdown-link-open-in-another-tab) if you want to check it out.

> Your Markdown parser must allow script tags for this to work.
