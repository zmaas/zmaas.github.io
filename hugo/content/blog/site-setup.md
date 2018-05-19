+++
title = "What this site runs on"
date = 2018-05-13
draft = false
description = "Setting up Github Pages with Google Domains and Mailgun"
type = "post"
+++

This site took a little while to get up and running, with a few tricks needed here and there, but now that it's all setup, the editing workflow is surprisingly smooth.

First things first, this site is hosted using [Hugo](https://gohugo.io), a quick and easy static site generator. I played around with alternatives like [Jekyll](https://jekyllrb.com), [Hexo](https://hexo.io), and even the haskell-based [Hakyll](https://jaspervdj.be/hakyll/), before settling on Hugo almost entirely because of the incredibly fast build times. This site is based on the [ultramin ](https://github.com/zmaas/hugo-ultramin)theme for Hugo, which is a minimal theme that I designed.

For domain registration, I use Google Domains which is similarly easy to use, and cheap as well. The site itself is hosted on github pages at the address [zmaas.github.io](https://zmaas.github.io). Then, cloudflare is used to forward the domain to the [abstractlambda.com](https://abstractlambda.com) address, in addition to providing support for things like HSTS and site caching. Even though static sites like this are fast, they can be even faster using Cloudflare.

Finally, email addresses for this domain are setup using [mailgun.com](https://www.mailgun.com), which works fine for my use cases even with the 10,000 email per month free limit. With all that considered, the only cost for this site is domain registration, which Google Domains prices at $12 a year for .com domains.

For actually writing articles I use a heavily customized Emacs, configured with prodigy.el to run Hugo's serve command whenever I am actively editing an article. In addition, I keep all posts in a single org-mode file and use ox-hugo to export posts when they're ready to be published. When I want to update the actual site, I just commit the changes and push them to github. Nice and easy.
