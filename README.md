<div align="center">

![Project Logo](https://webuxlab-static.s3.ca-central-1.amazonaws.com/logoAmpoule.svg)

<h2>Booklet</h2>

<p align="center">
  <a href="https://github.com/yet-another-tool/booklet/issues">Report Bug</a>
  ·
  <a href="https://github.com/yet-another-tool/booklet/issues">Request Feature</a>
</p>
</div>

---

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About</a>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

---

<a href="https://badge.fury.io/js/@yetanothertool%2Fbooklet"><img src="https://badge.fury.io/js/@yetanothertool%2Fbooklet.svg" alt="npm version" height="18"></a>

---

## About

<div>
<b> | </b>
<a href="https://www.buymeacoffee.com/studiowebux" target="_blank"
      ><img
        src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
        alt="Buy Me A Coffee"
        style="height: 30px !important; width: 105px !important"
/></a>
<b> | </b>
<a href="https://webuxlab.com" target="_blank"
      ><img
        src="https://webuxlab-static.s3.ca-central-1.amazonaws.com/logoAmpoule.svg"
        alt="Webux Logo"
        style="height: 30px !important"
/> Webux Lab</a>
<b> | </b>
</div>

---

Simple NodeJS command to split and reorder PDF Pages into Signatures to print the outputted PDF in a Booklet style.

***Reasons for this project:*** 
> It is always fun to play with nodeJS !  
I needed to split my Apple Pages document into booklet. 

### Installation

```bash
npm install -y @yetanothertool/booklet
```

### Usage

```bash
yat-booklet <source> <signature_count> [output]

yat-booklet <source.pdf> <number> [output.pdf]
```

**Preview Mode**

```bash
export PREVIEW=1 
yat-booklet mySuperBook.pdf 8
```

*Output*:
```bash
Document processed with success !
Saved to 'output.pdf'
Summary: '80' pages split into '8' signature(s)
[
  [ [ 10, 1 ], [ 2, 9 ], [ 8, 3 ], [ 4, 7 ], [ 6, 5 ] ],
  [ [ 20, 11 ], [ 12, 19 ], [ 18, 13 ], [ 14, 17 ], [ 16, 15 ] ],
  [ [ 30, 21 ], [ 22, 29 ], [ 28, 23 ], [ 24, 27 ], [ 26, 25 ] ],
  [ [ 40, 31 ], [ 32, 39 ], [ 38, 33 ], [ 34, 37 ], [ 36, 35 ] ],
  [ [ 50, 41 ], [ 42, 49 ], [ 48, 43 ], [ 44, 47 ], [ 46, 45 ] ],
  [ [ 60, 51 ], [ 52, 59 ], [ 58, 53 ], [ 54, 57 ], [ 56, 55 ] ],
  [ [ 70, 61 ], [ 62, 69 ], [ 68, 63 ], [ 64, 67 ], [ 66, 65 ] ],
  [ [ 80, 71 ], [ 72, 79 ], [ 78, 73 ], [ 74, 77 ], [ 76, 75 ] ]
]
```

The `output.pdf` file contains all pages in the correct order.
The next step is to configure the printer properly to print your book.

### Troubleshooting

You must use a signature that matches your total page count.
for exemple: 
- 80 pages with *3* signatures is **NOT VALID**
- 80 pages with *1* or *2* or *4* and *etc.* signature(s) is **VALID**

---

## Contributing

1. Create a Feature Branch
2. Commit your changes
3. Push your changes
4. Create a PR

<details>
<summary>Working with your local branch</summary>

**Branch Checkout:**

```bash
git checkout -b <feature|fix|release|chore|hotfix>/prefix-name
```

> Your branch name must starts with [feature|fix|release|chore|hotfix] and use a / before the name; 
> Use hyphens as separator;
> The prefix correspond to your Kanban tool id (e.g. abc-123)

**Keep your branch synced:**

```bash
git fetch origin
git rebase origin/master
```

**Commit your changes:**

```bash
git add .
git commit -m "<feat|ci|test|docs|build|chore|style|refactor|perf|BREAKING CHANGE>: commit message"
```

> Follow this convention commitlint for your commit message structure

**Push your changes:**

```bash
git push origin <feature|fix|release|chore|hotfix>/prefix-name
```

**Examples:**

```bash
git checkout -b release/v1.15.5
git checkout -b feature/abc-123-something-awesome
git checkout -b hotfix/abc-432-something-bad-to-fix
```

```bash
git commit -m "docs: added awesome documentation"
git commit -m "feat: added new feature"
git commit -m "test: added tests"
```

</details>

## License

Distributed under the MIT License. See LICENSE for more information.

## Contact

- Tommy Gingras @ tommy@studiowebux.com
