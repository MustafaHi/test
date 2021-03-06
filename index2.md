<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preload" href="https://cdn.jsdelivr.net/npm/prismjs@1/themes/prism.min.css" as="style">
    <link rel="preload" href="assets/docspace.css" as="style">
    <link rel="preload" href="https://unpkg.com/navigo@7.1.2/lib/navigo.min.js" as="script">
    <link rel="preload" href="/assets/zenscroll.js" as="script">
    <link rel="preload" href="/assets/nav.js" as="script">
	<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.1/styles/solarized-dark.min.css"> -->
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css" integrity="sha512-Oy18vBnbSJkXTndr2n6lDMO5NN31UljR8e/ICzVPrGpSud4Gkckb8yUpqhKuUNoE+o9gAb4O/rAxxw1ojyUVzg==" crossorigin="anonymous" /> -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1/themes/prism.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1/plugins/line-numbers/prism-line-numbers.min.css">
    <link type="text/css" rel="stylesheet" href="/assets/docspace.css">
    <title>Docs.space | Home</title>
</head>
<body>
    <header>
        <div class="wrapper flow-horizontal">
            <div class="left">
                <div class="btn" onclick="toggleNav()"><svg viewBox="0 0 512 512"><path d="M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z"></path></svg></div>
                <a id="Title" href="/">Docs.space</a>
                <!-- <b class="seperator"></b>
                <a href="/script" class="active">Script</a>
                <a href="/style">Style</a>
                <a>Tutorials</a> -->
                <div id="Pages"></div>
            </div>
            <div class="right">
                <div id="Social"></div>
                <!-- <a>Translate</a>
                <a>Community</a> -->
                <div id="Search" tabindex="1">
                    <input type="search" id="iSearch" placeholder="Search">
                    <div id="searchContent" tabindex="88">
                        <!-- <div class='item'>
                            <h3>Title</h3>
                            <p>Content you looking for</p>
                        </div> -->
                    </div>
                </div>

                <div class="btn" onclick="toggleTheme()"><div class="themeSwitch"></div></div>
            </div>
        </div>
    </header>
	<div class="content wrapper flow-horizontal">
		<nav id="Navigation"></nav>
		
		<div id="Doc" class="markdown-body line-numbers">
			<!-- <h1>Installation</h1>
			<p>For most projects (and to take advantage of Tailwind's customization features), you'll want to install Tailwind via npm.</p>
			<p>
				If you're using <code>postcss-import</code> (or a tool that uses it under the hood, such as <a href="">Webpacker</a> for Rails), use our imports instead of the @tailwind directive to avoid issues when importing any of your own additional files:
			</p> -->
		</div>
		
		<nav id="TableOfContent"></nav>
	</div>
</body>

<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossorigin="anonymous"> -->
<!-- The loading of KaTeX is deferred to speed up page rendering -->
<!-- <script src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js" integrity="sha384-g7c+Jr9ZivxKLnZTDUhnkOnsh30B4H0rpLUpJ4jAIKs4fnJI+sEnkvrMWph2EDg4" crossorigin="anonymous"></script> -->


<!-- <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script> -->
<!-- <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3.1.2/es5/tex-chtml-full.js"></script> -->
<!-- <script src="https://unpkg.com/navigo@6"></script> -->
<!-- <script type="text/javascript" src="/assets/wasm/markdown.js"></script> -->
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.1/highlight.min.js"></script> -->
<script src="https://cdn.jsdelivr.net/npm/prismjs@1/prism.min.js" data-manual></script>
<script src="https://cdn.jsdelivr.net/npm/prismjs@1/plugins/line-numbers/prism-line-numbers.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
<script src="https://unpkg.com/navigo@7.1.2/lib/navigo.min.js"></script>
<!-- <script src="/assets/navigo.min.js"></script> -->
<script src="/assets/zenscroll.js"></script>
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/markdown-it/12.0.2/markdown-it.min.js" integrity="sha512-7VN0JcGJWL+i8LXzTvbROqUSPzZIu8Fp6GWpkVwtHwrgWwY8CrbZgyHA2YpNhAASQNrYqGYoI2HusCqV+S2xnQ==" crossorigin="anonymous"></script> -->
<!-- <script src="https://cdn.jsdelivr.net/npm/markdown-it-texmath/texmath.min.js"></script> -->
<script type="text/javascript" src="/assets/nav.js"></script>
<script type="text/javascript" src="/assets/docspace.js"></script>

</html>