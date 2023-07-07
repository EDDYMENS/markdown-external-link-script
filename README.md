# markdown-external-link-script
This simple library adds external link support to Markdown


# How to use

1. Pull in the [library](https://cdn.jsdelivr.net/gh/eddymens/markdown-external-link-script@v2.0.0/main.min.js) into your Markdown file. 
2. From here on out all absolute URLs e.g.: `https://eddymens.com/blog` will open up in a new tab with relative URLs e.g.: `/blog` opening up within the same tab. 

**Here is a complete example**


```html
## Demo Markdown

[button text‌](https://eddymens.com)

<script src='https://cdn.jsdelivr.net/gh/eddymens/markdown-external-link-script@v2.0.0/main.min.js'></script>
```

I have also written on the subject: [external links and Markdown](https://www.eddymens.com/blog/how-to-make-a-markdown-link-open-in-another-tab) if you want to check it out.

> **NB:** Your Markdown parser must allow script tags for this to work.
