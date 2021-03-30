const navList = [{
	t: "Getting Started",
	c: [
		{
			t: "Installation",
			l: "installation.md"
		},
		{
			t: "Upcoming Changes",
			l: "changes.md"
		},
		{
			t: "Platform",
			c: [
				{ t: "Windows", l: "installation.md" },
				{ t: "Linux",   l: "installation.md" }
			]
		},
		{
			t: "Latex",
			l: "latex.md"
		}
	]
}, {
	t: "Tables",
	c: [{ t: "API", l: "changes.md" }, { t: "All Documentations", l: "All.md" }]
}];
const styleList = [{
	t: "Framework",
	c: [
		{ t: "Guide Lines", l: "guide.md"},
		{ t: "Setup", l: "setup.md"},
		{ t: "Colors", l: "colors.html" },
	]
}, {
	t: "Components",
	c: [
		{ t: "Grid", l: "headers.md" },
		{ t: "Headers", l: "headers.md" },
		{ t: "Buttons", l: "headers.md" },
		{ t: "Input", l: "headers.md" },
		{ t: "Checkboxes", l: "headers.md" },
	]
}, {
	t: "Components",
	c: [
		{ t: "Grid", l: "headers.md" },
		{ t: "Headers", l: "headers.md" },
		{ t: "Buttons", l: "headers.md" },
		{ t: "Input", l: "headers.md" },
		{ t: "Checkboxes", l: "headers.md" },
	]
}];



const Setup = {
	title: "Docs.space ",
	path: "http://127.0.0.1:5500/",
	header: true,
	search: true,
	theme : true,
	tracking: true,
	codeTabs: true,
	innerTable: true,
	TableOfContent: true,
	paragraphLink : true,
	selectionLink : true,
	pages: [["Docs", navList], ["Style", styleList]]
};